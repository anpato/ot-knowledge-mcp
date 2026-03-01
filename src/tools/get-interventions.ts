import { interventions } from '../data/interventions.js';
import { meetsEvidenceLevel, textResult, errorResult } from '../utils/search.js';
import type { EvidenceLevel } from '../types/index.js';

export async function getInterventions(args: {
  conditionId: string;
  evidenceLevel?: EvidenceLevel;
}) {
  const { conditionId, evidenceLevel } = args;

  let results = interventions.filter((i) => i.conditionId === conditionId);

  if (evidenceLevel) {
    results = results.filter((i) => meetsEvidenceLevel(i.evidenceLevel, evidenceLevel));
  }

  if (results.length === 0) {
    return errorResult(
      `No evidence-based interventions found for condition "${conditionId}"` +
        (evidenceLevel ? ` at "${evidenceLevel}" level or above.` : '.'),
    );
  }

  return textResult(results);
}
