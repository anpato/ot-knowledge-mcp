import { treatments } from '../data/treatments.js';
import { matchesQuery, textResult, errorResult } from '../utils/search.js';
import type { ApproachType, AgeGroup } from '../types/index.js';

export async function getTreatments(args: {
  query?: string;
  conditionId?: string;
  approachType?: ApproachType;
  ageGroup?: AgeGroup;
}) {
  const { query, conditionId, approachType, ageGroup } = args;

  let results = treatments;

  if (query) {
    results = results.filter((t) =>
      matchesQuery(query, t.name, t.description, ...t.aliases, ...t.indications),
    );
  }

  if (conditionId) {
    results = results.filter((t) => t.applicableConditionIds.includes(conditionId));
  }

  if (approachType) {
    results = results.filter((t) => t.approachTypes.includes(approachType));
  }

  if (ageGroup) {
    results = results.filter((t) => t.ageGroups.includes(ageGroup));
  }

  if (results.length === 0) {
    return errorResult('No treatments found matching the given criteria.');
  }

  return textResult(results);
}
