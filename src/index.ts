import { shutdownTelemetry } from './config/telemetry.js';
import 'dotenv/config';
import { httpInstrumentationMiddleware } from '@hono/otel';
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { StreamableHTTPTransport } from '@hono/mcp';
import { pinoLogger } from 'hono-pino';
import { createOTServer } from './server.js';
import { bearerAuth } from './middleware/auth.js';
import { logger } from './config/logger.js';
import { mcpRequestCounter } from './config/metrics.js';

const app = new Hono();
const server = createOTServer();
const transport = new StreamableHTTPTransport();
app.use(httpInstrumentationMiddleware());
// Apply logging middleware globally with conditional logging
app.use('*', async (c, next) => {
  const path = c.req.path;
  // Skip logging for health and uptime endpoints
  if (path === '/health' || path === '/uptime') {
    await next();
    return;
  }
  // Apply pino logger for all other routes
  const pinoMiddleware = pinoLogger({
    pino: logger
  });
  await pinoMiddleware(c as any, next);
});

app.get('/uptime', (c) => {
  return c.json({
    status: 'UP',
    uptime: process.uptime()
  });
});

app.get('/health', (c) => {
  return c.json({
    pid: process.pid,
    memory: process.memoryUsage(),
    cpu: process.cpuUsage()
  });
});

// Apply authentication middleware to MCP endpoint only
app.all('/mcp', bearerAuth(), async (c) => {
  mcpRequestCounter.add(1, { 'http.request.method': c.req.method });
  if (!server.isConnected()) {
    await server.connect(transport);
  }
  return transport.handleRequest(c);
});

const port = parseInt(process.env.PORT || '3100', 10);
const httpServer = serve({ fetch: app.fetch, port }, () => {
  logger.info(
    `OT Knowledge MCP server running on http://localhost:${port}/mcp`
  );
});

// Graceful shutdown handler
let isShuttingDown = false;

const gracefulShutdown = async (signal: string) => {
  if (isShuttingDown) {
    logger.warn('Shutdown already in progress, forcing exit');
    process.exit(1);
  }

  isShuttingDown = true;
  logger.info(`Received ${signal}, starting graceful shutdown`);

  // Set a timeout to force shutdown if graceful shutdown takes too long
  const forceShutdownTimeout = setTimeout(() => {
    logger.error('Graceful shutdown timeout exceeded, forcing exit');
    process.exit(1);
  }, 30000); // 30 second timeout

  try {
    // Stop accepting new connections
    logger.debug('Closing HTTP server');
    await new Promise<void>((resolve, reject) => {
      httpServer.close((err) => {
        if (err) {
          logger.error({ err }, 'Error closing HTTP server');
          reject(err);
        } else {
          logger.debug('HTTP server closed');
          resolve();
        }
      });
    });

    // Disconnect MCP server if connected
    if (server.isConnected()) {
      logger.debug('Closing MCP server connection');
      await server.close();
      logger.debug('MCP server closed');
    }

    // Shutdown OpenTelemetry SDK
    logger.debug('Shutting down telemetry');
    await shutdownTelemetry();
    logger.debug('Telemetry shutdown complete');

    clearTimeout(forceShutdownTimeout);
    logger.info('Graceful shutdown completed successfully');
    process.exit(0);
  } catch (error) {
    clearTimeout(forceShutdownTimeout);
    logger.error({ err: error }, 'Error during graceful shutdown');
    process.exit(1);
  }
};

// Handle shutdown signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  logger.fatal({ err: error }, 'Uncaught exception');
  gracefulShutdown('uncaughtException');
});

process.on('unhandledRejection', (reason, promise) => {
  logger.fatal({ reason, promise }, 'Unhandled promise rejection');
  gracefulShutdown('unhandledRejection');
});
