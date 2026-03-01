import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { StreamableHTTPTransport } from '@hono/mcp';
import { createOTServer } from './server.js';

const app = new Hono();
const server = createOTServer();
const transport = new StreamableHTTPTransport();

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

app.all('/mcp', async (c) => {
  if (!server.isConnected()) {
    await server.connect(transport);
  }
  return transport.handleRequest(c);
});

const port = parseInt(process.env.PORT || '3100', 10);
serve({ fetch: app.fetch, port }, () => {
  console.log(
    `OT Knowledge MCP server running on http://localhost:${port}/mcp`
  );
});
