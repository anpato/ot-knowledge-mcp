import type { Context, Next } from 'hono';
import { logger } from '../config/logger.js';

/**
 * Bearer token authentication middleware for MCP server
 * 
 * Validates the Authorization header against configured API keys.
 * Returns 401 Unauthorized with WWW-Authenticate header if authentication fails.
 */
export function bearerAuth(options?: { apiKeys?: string[] }) {
  const apiKeys = options?.apiKeys || [process.env.API_KEY].filter(Boolean) as string[];

  if (apiKeys.length === 0) {
    logger.warn('No API keys configured. Authentication is disabled.');
  }

  return async (c: Context, next: Next) => {
    // Skip authentication if no API keys are configured
    if (apiKeys.length === 0) {
      return next();
    }

    const authHeader = c.req.header('Authorization');

    // Check if Authorization header is present
    if (!authHeader) {
      logger.warn({ path: c.req.path, method: c.req.method }, 'Authentication failed: Missing Authorization header');
      c.status(401);
      c.header('WWW-Authenticate', 'Bearer realm="OT Knowledge MCP", error="invalid_token", error_description="Missing Authorization header"');
      return c.json({
        error: 'unauthorized',
        message: 'Authorization header is required',
      });
    }

    // Check if it's a Bearer token
    const [scheme, token] = authHeader.split(' ');
    if (scheme !== 'Bearer' || !token) {
      logger.warn({ path: c.req.path, method: c.req.method }, 'Authentication failed: Invalid Authorization header format');
      c.status(401);
      c.header('WWW-Authenticate', 'Bearer realm="OT Knowledge MCP", error="invalid_token", error_description="Invalid Authorization header format"');
      return c.json({
        error: 'unauthorized',
        message: 'Authorization header must be in format: Bearer <token>',
      });
    }

    // Validate token against configured API keys
    const isValid = apiKeys.some((key) => {
      // Use constant-time comparison to prevent timing attacks
      if (key.length !== token.length) {
        return false;
      }
      let matches = true;
      for (let i = 0; i < key.length; i++) {
        if (key[i] !== token[i]) {
          matches = false;
        }
      }
      return matches;
    });

    if (!isValid) {
      logger.warn({ path: c.req.path, method: c.req.method }, 'Authentication failed: Invalid API key');
      c.status(401);
      c.header('WWW-Authenticate', 'Bearer realm="OT Knowledge MCP", error="invalid_token", error_description="Invalid or expired token"');
      return c.json({
        error: 'unauthorized',
        message: 'Invalid API key',
      });
    }

    logger.debug({ path: c.req.path, method: c.req.method }, 'Authentication successful');
    // Token is valid, proceed to next middleware
    await next();
  };
}

/**
 * Generate a secure random API key
 * Format: ot_sk_<32 random hex characters>
 */
export function generateApiKey(): string {
  const crypto = require('crypto');
  const randomBytes = crypto.randomBytes(24);
  const randomHex = randomBytes.toString('hex');
  return `ot_sk_${randomHex}`;
}
