import { stateResources } from '../data/state-resources.js';
import { textResult, errorResult } from '../utils/search.js';
import type { StateResourceCategory } from '../types/index.js';

export async function getStateResources(args: {
  state: string;
  category?: StateResourceCategory;
}) {
  const stateCode = args.state.toUpperCase();
  const entry = stateResources.find((s) => s.stateCode === stateCode);

  if (!entry) {
    const validCodes = stateResources.map((s) => s.stateCode).join(', ');
    return errorResult(
      `No state found for code "${stateCode}". Use a valid 2-letter state code (e.g., "CA", "TX", "NY"). Valid codes: ${validCodes}`,
    );
  }

  if (!args.category) {
    return textResult(entry);
  }

  const { stateCode: code, stateName, dataLastReviewed, disclaimer } = entry;
  return textResult({
    stateCode: code,
    stateName,
    dataLastReviewed,
    disclaimer,
    [args.category]: entry[args.category],
  });
}
