import { assessments } from '../data/assessments.js';
import { matchesQuery, textResult, errorResult } from '../utils/search.js';
import type { AssessmentDomain, AgeGroup } from '../types/index.js';

export async function lookupAssessments(args: {
  query?: string;
  domain?: AssessmentDomain;
  conditionId?: string;
  ageGroup?: AgeGroup;
}) {
  const { query, domain, conditionId, ageGroup } = args;

  let results = assessments;

  if (query) {
    results = results.filter((a) =>
      matchesQuery(query, a.name, a.description, a.acronym, ...a.aliases),
    );
  }

  if (domain) {
    results = results.filter((a) => a.domains.includes(domain));
  }

  if (conditionId) {
    results = results.filter((a) => a.applicableConditionIds.includes(conditionId));
  }

  if (ageGroup) {
    results = results.filter((a) => a.populationApplicability.includes(ageGroup));
  }

  if (results.length === 0) {
    return errorResult('No assessments found matching the given criteria.');
  }

  return textResult(results);
}
