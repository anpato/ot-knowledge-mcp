import { stateResources } from '../data/state-resources.js';
import { fetchWebPage } from '../utils/web-fetch.js';
import { textResult, errorResult } from '../utils/search.js';

export async function fetchStateOTPage(args: {
  state: string;
  source?: 'board' | 'association';
}) {
  const stateCode = args.state.toUpperCase();
  const source = args.source ?? 'board';

  const entry = stateResources.find((s) => s.stateCode === stateCode);

  if (!entry) {
    const validCodes = stateResources.map((s) => s.stateCode).join(', ');
    return errorResult(
      `No state found for code "${stateCode}". Use a valid 2-letter state code (e.g., "CA", "TX", "NY"). Valid codes: ${validCodes}`,
    );
  }

  const url =
    source === 'board'
      ? entry.licensing.board.url
      : entry.associations.association.url;

  try {
    const result = await fetchWebPage(url, { timeout: 15000, includeLinks: true });

    return textResult({
      stateCode: entry.stateCode,
      stateName: entry.stateName,
      source,
      url,
      title: result.title,
      content: result.content,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return errorResult(
      `Failed to fetch ${source} page for ${entry.stateName} (${url}): ${message}`,
    );
  }
}
