import { glossary } from '../data/glossary.js';
import { matchesQuery, textResult, errorResult } from '../utils/search.js';
import type { GlossaryCategory } from '../types/index.js';

export async function searchGlossary(args: {
  query?: string;
  category?: GlossaryCategory;
}) {
  const { query, category } = args;

  let results = glossary;

  if (query) {
    results = results.filter((g) =>
      matchesQuery(query, g.term, g.definition, g.abbreviation, g.usageExample),
    );
  }

  if (category) {
    results = results.filter((g) => g.category === category);
  }

  if (results.length === 0) {
    return errorResult('No glossary terms found matching the given criteria.');
  }

  return textResult(results);
}
