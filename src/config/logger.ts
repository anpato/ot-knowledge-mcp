import pino from 'pino';
import { trace, isSpanContextValid } from '@opentelemetry/api';

const isDevelopment = process.env.NODE_ENV !== 'production';
const logLevel = process.env.LOG_LEVEL || (isDevelopment ? 'debug' : 'info');

export const logger = pino({
  level: logLevel,
  redact: {
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      '*.password',
      '*.token',
      '*.apiKey',
      '*.secret',
      '*.api_key'
    ],
    censor: '[REDACTED]'
  },
  formatters: {
    level: (label) => {
      return { level: label };
    },
    log(log) {
      let og = log;
      if (log.res) {
        og = { ...og, statusCode: (log?.res as Response)?.status };
        delete og.res;
      }
      const span = trace.getActiveSpan()?.spanContext();

      return {
        ...og,
        ['service.name']: process.env.OTEL_SERVICE_NAME,
        ['environment']: process.env.OTEL_DEPLOYMENT_ENVIRONMENT,
        trace_id: log?.trace_id ?? span?.traceId,
        span_id: log?.span_id ?? span?.spanId
      };
    }
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  ...(isDevelopment && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        singleLine: false
      }
    }
  })
});
