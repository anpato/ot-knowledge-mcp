import pino from 'pino';
import { trace, isSpanContextValid } from '@opentelemetry/api';

const isDevelopment = process.env.NODE_ENV !== 'production';
const logLevel = process.env.LOG_LEVEL || (isDevelopment ? 'debug' : 'info');

export const logger = pino({
  level: logLevel,
  mixin() {
    const span = trace.getActiveSpan();
    if (span) {
      const ctx = span.spanContext();
      if (isSpanContextValid(ctx)) {
        return {
          traceId: ctx.traceId,
          spanId: ctx.spanId,
          traceFlags: ctx.traceFlags,
        };
      }
    }
    return {};
  },
  mixinMergeStrategy: (mergeObject, mixinObject) => Object.assign(mergeObject, mixinObject),
  redact: {
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      '*.password',
      '*.token',
      '*.apiKey',
      '*.secret',
      '*.api_key',
    ],
    censor: '[REDACTED]',
  },
  formatters: {
    level: (label) => {
      return { level: label };
    },
  },
  timestamp: pino.stdTimeFunctions.isoTime,
  ...(isDevelopment && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
        singleLine: false,
      },
    },
  }),
});
