import { metrics } from '@opentelemetry/api';

const meter = metrics.getMeter('ot-knowledge-mcp');

export const toolCallCounter = meter.createCounter('mcp.tool.calls.total', {
  description: 'Total number of MCP tool calls',
});

export const toolDurationHistogram = meter.createHistogram(
  'mcp.tool.duration.ms',
  {
    description: 'Duration of MCP tool calls in milliseconds',
    unit: 'ms',
  },
);

export const toolResultSizeHistogram = meter.createHistogram(
  'mcp.tool.result.bytes',
  {
    description: 'Size of MCP tool results in bytes',
    unit: 'By',
  },
);

export const mcpRequestCounter = meter.createCounter(
  'mcp.http.requests.total',
  {
    description: 'Total number of HTTP requests to MCP endpoints',
  },
);
