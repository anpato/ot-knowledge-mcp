import { NodeHtmlMarkdown } from 'node-html-markdown';

export interface FetchOptions {
  timeout?: number;
  includeLinks?: boolean;
  maxLength?: number;
}

export interface FetchResult {
  content: string;
  url: string;
  title?: string;
}

const DEFAULT_TIMEOUT = 15000; // 15 seconds
const DEFAULT_MAX_LENGTH = 500000; // 500KB of text content
const USER_AGENT = 'OT-Knowledge-MCP/1.0 (Occupational Therapy Knowledge Base)';

/**
 * Validates if a URL is safe to fetch
 */
function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    // Only allow http and https protocols
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Fetches a web page and converts it to clean markdown
 */
export async function fetchWebPage(
  url: string,
  options: FetchOptions = {},
): Promise<FetchResult> {
  const { timeout = DEFAULT_TIMEOUT, includeLinks = true, maxLength = DEFAULT_MAX_LENGTH } = options;

  // Validate URL
  if (!isValidUrl(url)) {
    throw new Error(`Invalid URL: ${url}. Only http and https protocols are allowed.`);
  }

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    // Fetch the web page
    const response = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    // Get content type
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
      // If it's plain text or other text format, return as-is
      if (contentType.includes('text/')) {
        const text = await response.text();
        return {
          content: text.slice(0, maxLength),
          url,
        };
      }
      throw new Error(`Unsupported content type: ${contentType}`);
    }

    // Get HTML content
    const html = await response.text();

    // Extract title from HTML
    const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : undefined;

    // Convert HTML to Markdown
    const markdown = NodeHtmlMarkdown.translate(html, {
      useInlineLinks: includeLinks,
      maxConsecutiveNewlines: 2,
      keepDataImages: false,
    });

    // Truncate if necessary
    const truncatedContent = markdown.length > maxLength 
      ? markdown.slice(0, maxLength) + '\n\n[Content truncated due to length...]'
      : markdown;

    return {
      content: truncatedContent,
      url,
      title,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error(`Request timeout: Could not fetch ${url} within ${timeout}ms`);
      }
      throw new Error(`Failed to fetch ${url}: ${error.message}`);
    }
    throw new Error(`Failed to fetch ${url}: Unknown error`);
  } finally {
    clearTimeout(timeoutId);
  }
}
