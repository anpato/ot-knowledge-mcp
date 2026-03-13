import type { Context, Next } from 'hono';
import { logger } from '../config/logger.js';
import { authCounter } from '../config/metrics.js';

interface IntrospectionResponse {
  active: boolean;
  client_id?: string;
  scope?: string;
  exp?: number;
  iat?: number;
  sub?: string;
  token_type?: string;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface TokenCacheEntry {
  accessToken: string;
  expiresAt: number;
}

const tokenCache = new Map<string, TokenCacheEntry>();

async function introspectToken(token: string, authServerUrl: string): Promise<IntrospectionResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  if (clientId && clientSecret) {
    headers['Authorization'] = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;
  }

  const response = await fetch(`${authServerUrl}/oauth/introspect`, {
    method: 'POST',
    headers,
    body: `token=${encodeURIComponent(token)}`,
    signal: AbortSignal.timeout(5000),
  });

  return (await response.json()) as IntrospectionResponse;
}

async function exchangeCredentials(
  clientId: string,
  clientSecret: string,
  authServerUrl: string,
): Promise<TokenResponse> {
  const response = await fetch(`${authServerUrl}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${encodeURIComponent(clientId)}&client_secret=${encodeURIComponent(clientSecret)}`,
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Token endpoint returned ${response.status}: ${body}`);
  }

  return (await response.json()) as TokenResponse;
}

function buildWwwAuthenticate(): string {
  const authServerUrl = process.env.AUTH_SERVER_URL;
  const resourceUrl = process.env.MCP_RESOURCE_URL;

  if (authServerUrl) {
    const issuer = resourceUrl || authServerUrl;
    return `Bearer resource_metadata="${issuer}/.well-known/oauth-protected-resource/mcp"`;
  }
  return 'Bearer realm="OT Knowledge MCP"';
}

export function bearerAuth() {
  const authServerUrl = process.env.AUTH_SERVER_URL;

  if (!authServerUrl) {
    logger.warn('AUTH_SERVER_URL not set. All MCP requests will return 503.');
  } else {
    logger.info({ authServerUrl }, 'OAuth token introspection enabled');
  }

  return async (c: Context, next: Next) => {
    if (!authServerUrl) {
      authCounter.add(1, { 'auth.result': 'rejected', 'auth.client': 'none' });
      c.status(503);
      return c.json({
        error: 'service_unavailable',
        message: 'Authentication service is not configured',
      });
    }

    const authHeader = c.req.header('Authorization');
    const wwwAuth = buildWwwAuthenticate();

    if (!authHeader) {
      authCounter.add(1, { 'auth.result': 'rejected', 'auth.client': 'unknown' });
      logger.warn({ path: c.req.path, method: c.req.method }, 'Authentication failed: Missing Authorization header');
      c.status(401);
      c.header('WWW-Authenticate', wwwAuth);
      return c.json({
        error: 'unauthorized',
        message: 'Authorization header is required',
      });
    }

    const [scheme, credentials] = authHeader.split(' ', 2);

    if (scheme === 'Bearer' && credentials) {
      let introspection: IntrospectionResponse;
      try {
        introspection = await introspectToken(credentials, authServerUrl);
      } catch (err) {
        authCounter.add(1, { 'auth.result': 'error', 'auth.client': 'unknown' });
        logger.error({ err, path: c.req.path }, 'Token introspection request failed');
        c.status(503);
        return c.json({
          error: 'service_unavailable',
          message: 'Authentication service is unavailable',
        });
      }

      if (!introspection.active) {
        authCounter.add(1, { 'auth.result': 'rejected', 'auth.client': 'unknown' });
        logger.warn({ path: c.req.path, method: c.req.method }, 'Authentication failed: Token not active');
        c.status(401);
        c.header('WWW-Authenticate', wwwAuth);
        return c.json({
          error: 'unauthorized',
          message: 'Invalid or expired token',
        });
      }

      const clientName = introspection.client_id || 'unknown';
      authCounter.add(1, { 'auth.result': 'success', 'auth.client': clientName, 'auth.method': 'oauth' });
      c.set('clientName', clientName);
      logger.debug(
        { path: c.req.path, method: c.req.method, client: clientName },
        'OAuth token introspection successful',
      );
      await next();
    } else if (scheme === 'Basic' && credentials) {
      let decoded: string;
      try {
        decoded = atob(credentials);
      } catch {
        authCounter.add(1, { 'auth.result': 'rejected', 'auth.client': 'unknown' });
        c.status(401);
        c.header('WWW-Authenticate', wwwAuth);
        return c.json({
          error: 'unauthorized',
          message: 'Invalid Basic auth encoding',
        });
      }

      const separatorIndex = decoded.indexOf(':');
      if (separatorIndex === -1) {
        authCounter.add(1, { 'auth.result': 'rejected', 'auth.client': 'unknown' });
        c.status(401);
        c.header('WWW-Authenticate', wwwAuth);
        return c.json({
          error: 'unauthorized',
          message: 'Invalid Basic auth format, expected client_id:client_secret',
        });
      }

      const clientId = decoded.substring(0, separatorIndex);
      const clientSecret = decoded.substring(separatorIndex + 1);

      // Check token cache
      const cached = tokenCache.get(clientId);
      if (cached && cached.expiresAt > Date.now()) {
        authCounter.add(1, { 'auth.result': 'success', 'auth.client': clientId, 'auth.method': 'basic_cached' });
        c.set('clientName', clientId);
        logger.debug(
          { path: c.req.path, method: c.req.method, client: clientId },
          'Basic auth: using cached token',
        );
        await next();
        return;
      }

      // Exchange credentials for a token
      let tokenResponse: TokenResponse;
      try {
        tokenResponse = await exchangeCredentials(clientId, clientSecret, authServerUrl);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        if (message.includes('returned 4')) {
          authCounter.add(1, { 'auth.result': 'rejected', 'auth.client': clientId });
          logger.warn({ path: c.req.path, client: clientId }, 'Basic auth: invalid credentials');
          c.status(401);
          c.header('WWW-Authenticate', wwwAuth);
          return c.json({
            error: 'unauthorized',
            message: 'Invalid client credentials',
          });
        }
        authCounter.add(1, { 'auth.result': 'error', 'auth.client': clientId });
        logger.error({ err, path: c.req.path, client: clientId }, 'Basic auth: token exchange failed');
        c.status(503);
        return c.json({
          error: 'service_unavailable',
          message: 'Authentication service is unavailable',
        });
      }

      // Cache the token with a 30s safety buffer
      const expiresAt = Date.now() + (tokenResponse.expires_in - 30) * 1000;
      tokenCache.set(clientId, { accessToken: tokenResponse.access_token, expiresAt });

      authCounter.add(1, { 'auth.result': 'success', 'auth.client': clientId, 'auth.method': 'basic' });
      c.set('clientName', clientId);
      logger.debug(
        { path: c.req.path, method: c.req.method, client: clientId, expiresIn: tokenResponse.expires_in },
        'Basic auth: token exchanged successfully',
      );
      await next();
    } else {
      authCounter.add(1, { 'auth.result': 'rejected', 'auth.client': 'unknown' });
      logger.warn({ path: c.req.path, method: c.req.method, scheme }, 'Authentication failed: Unsupported auth scheme');
      c.status(401);
      c.header('WWW-Authenticate', wwwAuth);
      return c.json({
        error: 'unauthorized',
        message: 'Authorization header must use Bearer or Basic scheme',
      });
    }
  };
}
