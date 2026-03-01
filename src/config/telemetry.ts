import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { resourceFromAttributes } from '@opentelemetry/resources';
import {
  ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION
} from '@opentelemetry/semantic-conventions';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const {
  McpInstrumentation
} = require('@theharithsa/opentelemetry-instrumentation-mcp');

const resource = resourceFromAttributes({
  [ATTR_SERVICE_NAME]: process.env.OTEL_SERVICE_NAME || 'ot-knowledge-mcp',
  [ATTR_SERVICE_VERSION]: process.env.npm_package_version || '1.0.0'
});

const traceExporter = new OTLPTraceExporter({
  url: `${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}/v1/traces`
});

const sdk = new NodeSDK({
  resource,
  spanProcessor: new BatchSpanProcessor(traceExporter, {
    // Export spans every 5 seconds or when batch size reaches 512
    scheduledDelayMillis: 5000,
    maxQueueSize: 2048,
    maxExportBatchSize: 512,
    exportTimeoutMillis: 30000
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: `${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}/v1/metrics`
    }),
    exportIntervalMillis: 60_000
  }),
  instrumentations: [
    getNodeAutoInstrumentations({
      '@opentelemetry/instrumentation-fs': { enabled: false },
      '@opentelemetry/instrumentation-dns': { enabled: false },
      '@opentelemetry/instrumentation-http': {
        ignoreIncomingRequestHook: (req) => {
          const url = req.url ?? '';
          return url === '/health' || url === '/uptime';
        }
      }
    }),
    new McpInstrumentation()
  ]
});

sdk.start();

// Export shutdown function to be called by graceful shutdown handler
export const shutdownTelemetry = async () => {
  await sdk.shutdown();
};
