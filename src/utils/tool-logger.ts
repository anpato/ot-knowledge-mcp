import { logger } from '../config/logger.js';
import { performance } from 'perf_hooks';
import {
  toolCallCounter,
  toolDurationHistogram,
  toolResultSizeHistogram,
} from '../config/metrics.js';
import { trace, SpanStatusCode } from '@opentelemetry/api';

/**
 * Redacts sensitive parameters from tool arguments
 */
function redactToolArgs(args: Record<string, unknown>): Record<string, unknown> {
  const redacted: Record<string, unknown> = {};
  const sensitivePatterns = ['password', 'token', 'key', 'secret'];

  for (const [key, value] of Object.entries(args)) {
    const lowerKey = key.toLowerCase();
    const isSensitive = sensitivePatterns.some((pattern) =>
      lowerKey.includes(pattern),
    );

    if (isSensitive) {
      redacted[key] = '[REDACTED]';
    } else {
      redacted[key] = value;
    }
  }

  return redacted;
}

/**
 * Calculates the size of the tool result in bytes (approx)
 */
function calculateResultSize(result: unknown): number {
  try {
    return Buffer.byteLength(JSON.stringify(result), 'utf8');
  } catch {
    return 0;
  }
}

type ToolLikeResult = {
  isError?: boolean;
  content?: Array<{ type?: string; text?: string }>;
};

function asToolLikeResult(result: unknown): ToolLikeResult | null {
  if (typeof result !== 'object' || result === null) return null;
  return result as ToolLikeResult;
}

function getFirstTextContent(result: ToolLikeResult): string {
  return result.content?.find((c) => c.type === 'text')?.text ?? result.content?.[0]?.text ?? '';
}

/**
 * Checks if the result indicates a "not found" case
 */
function isNotFoundResult(result: unknown): boolean {
  const res = asToolLikeResult(result);
  if (!res?.isError) return false;

  const text = getFirstTextContent(res).toLowerCase();
  return text.includes('not found') || (text.includes('no ') && text.includes(' found'));
}

function isErrorResult(result: unknown): boolean {
  const res = asToolLikeResult(result);
  return Boolean(res?.isError);
}

function getErrorMessage(result: unknown): string | null {
  const res = asToolLikeResult(result);
  if (!res?.isError) return null;
  const text = getFirstTextContent(res).trim();
  return text.length > 0 ? text : 'Tool returned an error result';
}

/**
 * Wraps a tool handler with comprehensive logging and tracing
 */
export async function withToolLogging<T>(
  toolName: string,
  args: Record<string, unknown>,
  handler: () => Promise<T>,
): Promise<T> {
  const tracer = trace.getTracer('ot-knowledge-mcp');
  
  return tracer.startActiveSpan(`mcp.tool.${toolName}`, async (span) => {
    const startTime = performance.now();
    const redactedArgs = redactToolArgs(args);

    const toolAttrs = { 'mcp.tool.name': toolName };
    toolCallCounter.add(1, toolAttrs);

    // Set span attributes
    span.setAttributes({
      'mcp.tool.name': toolName,
      'mcp.tool.args': JSON.stringify(redactedArgs),
    });

    // Log tool invocation start
    logger.info(
      {
        tool: toolName,
        args: redactedArgs,
      },
      'Tool invocation started',
    );

    try {
      // Execute the tool handler
      const result = await handler();
      const duration = performance.now() - startTime;
      const resultSize = calculateResultSize(result);

      // "not found" is treated as a distinct (expected) error category
      if (isNotFoundResult(result)) {
        toolDurationHistogram.record(duration, { ...toolAttrs, 'mcp.tool.status': 'error' });
        toolResultSizeHistogram.record(resultSize, toolAttrs);
        
        span.setAttributes({
          'mcp.tool.status': 'not_found',
          'mcp.tool.duration_ms': duration,
          'mcp.tool.result_size': resultSize,
        });
        span.setStatus({ code: SpanStatusCode.ERROR, message: 'Not found' });
        
        logger.warn(
          {
            tool: toolName,
            args: redactedArgs,
            duration: Math.round(duration * 100) / 100,
            resultSize,
            notFound: true,
            success: false,
          },
          'Tool completed with not found result',
        );
        
        span.end();
        return result;
      }

      // Tool returned an error result (but did not throw)
      if (isErrorResult(result)) {
        const errorMsg = getErrorMessage(result) || 'Tool returned error';
        toolDurationHistogram.record(duration, { ...toolAttrs, 'mcp.tool.status': 'error' });
        toolResultSizeHistogram.record(resultSize, toolAttrs);
        
        span.setAttributes({
          'mcp.tool.status': 'error',
          'mcp.tool.duration_ms': duration,
          'mcp.tool.result_size': resultSize,
          'mcp.tool.error_message': errorMsg,
        });
        span.setStatus({ code: SpanStatusCode.ERROR, message: errorMsg });
        
        logger.error(
          {
            tool: toolName,
            args: redactedArgs,
            duration: Math.round(duration * 100) / 100,
            resultSize,
            error: errorMsg,
            success: false,
          },
          'Tool invocation completed with error result',
        );
        
        span.end();
        return result;
      }

      // Record success metrics
      toolDurationHistogram.record(duration, { ...toolAttrs, 'mcp.tool.status': 'success' });
      toolResultSizeHistogram.record(resultSize, toolAttrs);

      span.setAttributes({
        'mcp.tool.status': 'success',
        'mcp.tool.duration_ms': duration,
        'mcp.tool.result_size': resultSize,
      });
      span.setStatus({ code: SpanStatusCode.OK });

      // Log successful completion
      logger.info(
        {
          tool: toolName,
          duration: Math.round(duration * 100) / 100,
          resultSize,
          success: true,
        },
        'Tool invocation completed',
      );

      span.end();
      return result;
    } catch (error) {
      const duration = performance.now() - startTime;
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      toolDurationHistogram.record(duration, { ...toolAttrs, 'mcp.tool.status': 'exception' });

      span.setAttributes({
        'mcp.tool.status': 'exception',
        'mcp.tool.duration_ms': duration,
        'mcp.tool.error_message': errorMessage,
      });
      span.recordException(error as Error);
      span.setStatus({ code: SpanStatusCode.ERROR, message: errorMessage });

      // Log error
      logger.error(
        {
          tool: toolName,
          args: redactedArgs,
          duration: Math.round(duration * 100) / 100,
          error: errorMessage,
          success: false,
        },
        'Tool invocation failed',
      );

      span.end();
      // Re-throw the error
      throw error;
    }
  });
}
