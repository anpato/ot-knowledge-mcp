import { conditions } from '../data/conditions.js';
import { matchesQuery, textResult, errorResult } from '../utils/search.js';
import type { BodySystem, AgeGroup } from '../types/index.js';

export async function searchConditions(args: {
  query?: string;
  bodySystem?: BodySystem;
  ageGroup?: AgeGroup;
}) {
  const { query, bodySystem, ageGroup } = args;

  let results = conditions;

  if (query) {
    results = results.filter((c) =>
      matchesQuery(query, c.name, c.description, ...c.aliases, ...c.commonSymptoms),
    );
  }

  if (bodySystem) {
    results = results.filter((c) => c.bodySystems.includes(bodySystem));
  }

  if (ageGroup) {
    results = results.filter((c) => c.ageGroups.includes(ageGroup));
  }

  if (results.length === 0) {
    return errorResult('No conditions found matching the given criteria.');
  }

  return textResult(results);
}
