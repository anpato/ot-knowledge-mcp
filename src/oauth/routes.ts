import type { Hono, Env } from 'hono';
import { logger } from '../config/logger.js';

export function registerOAuthRoutes<E extends Env>(app: Hono<E>): void {
  const authServerUrl = process.env.AUTH_SERVER_URL;

  if (!authServerUrl) {
    logger.info('OAuth disabled: AUTH_SERVER_URL not set');
    return;
  }

  const resourceUrl = process.env.MCP_RESOURCE_URL || authServerUrl;

  logger.info({ authServerUrl, resourceUrl }, 'OAuth enabled, proxying to external auth server');

  // --- Discovery ---

  app.get('/.well-known/oauth-authorization-server', (c) => {
    return c.json({
      issuer: authServerUrl,
      authorization_endpoint: `${authServerUrl}/oauth/authorize`,
      token_endpoint: `${authServerUrl}/oauth/token`,
      registration_endpoint: `${authServerUrl}/oauth/register`,
      introspection_endpoint: `${authServerUrl}/oauth/introspect`,
      revocation_endpoint: `${authServerUrl}/oauth/revoke`,
      grant_types_supported: ['authorization_code', 'client_credentials'],
      response_types_supported: ['code'],
      code_challenge_methods_supported: ['S256'],
      token_endpoint_auth_methods_supported: ['client_secret_post', 'client_secret_basic', 'none'],
    });
  });

  app.get('/.well-known/oauth-protected-resource/mcp', (c) => {
    return c.json({
      resource: `${resourceUrl}/mcp`,
      authorization_servers: [authServerUrl],
    });
  });
}
