import { fetchWebPage } from '../utils/web-fetch.js';
import { textResult, errorResult } from '../utils/search.js';

export async function fetchWebResource(args: {
  url: string;
  includeLinks?: boolean;
  timeout?: number;
}) {
  const { url, includeLinks = true, timeout = 15000 } = args;

  try {
    const result = await fetchWebPage(url, {
      includeLinks,
      timeout,
    });

    const lines: string[] = [];
    
    if (result.title) {
      lines.push(`# ${result.title}`);
      lines.push('');
    }
    
    lines.push(`**Source:** ${result.url}`);
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push(result.content);

    return {
      content: [{ type: 'text' as const, text: lines.join('\n') }],
    };
  } catch (error) {
    if (error instanceof Error) {
      return errorResult(`Failed to fetch web resource: ${error.message}`);
    }
    return errorResult('Failed to fetch web resource: Unknown error');
  }
}
