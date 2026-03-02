import { reputableSources, type ReputableSource } from '../data/reputable-sources.js';
import { fetchWebPage } from '../utils/web-fetch.js';
import { textResult, errorResult } from '../utils/search.js';

interface EnrichArgs {
  topic: string;
  sources?: string[];
  maxResults?: number;
  includeContent?: boolean;
  timeout?: number;
}

function matchSources(topic: string, sourceIds?: string[]): ReputableSource[] {
  // Filter by explicit source IDs
  if (sourceIds && sourceIds.length > 0) {
    return reputableSources.filter((s) => sourceIds.includes(s.id));
  }

  const term = topic.toLowerCase();

  // Exact conditionIds match
  const exactMatches = reputableSources.filter(
    (s) => s.conditionIds.length > 0 && s.conditionIds.some((id) => id === term),
  );

  // Fuzzy match on topics/title/description
  const fuzzyMatches = reputableSources.filter(
    (s) =>
      s.conditionIds.length > 0 &&
      !exactMatches.includes(s) &&
      (s.topics.some((t) => t.includes(term)) ||
        s.title.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term)),
  );

  // General sources (empty conditionIds) are always included
  const generalSources = reputableSources.filter((s) => s.conditionIds.length === 0);

  return [...exactMatches, ...fuzzyMatches, ...generalSources];
}

export async function enrichWithWebResources(args: EnrichArgs) {
  const {
    topic,
    sources: sourceIds,
    maxResults: rawMax = 3,
    includeContent = true,
    timeout = 10000,
  } = args;

  const maxResults = Math.max(1, Math.min(5, rawMax));
  const matched = matchSources(topic, sourceIds).slice(0, maxResults);

  if (matched.length === 0) {
    return errorResult(
      `No reputable sources found for topic: "${topic}". ` +
      'Try a broader term (e.g., "stroke", "autism", "mental-health") or omit the sources filter.',
    );
  }

  // Metadata-only fast path
  if (!includeContent) {
    return textResult(
      matched.map((s) => ({
        id: s.id,
        title: s.title,
        organization: s.organization,
        url: s.url,
        description: s.description,
        contentType: s.contentType,
        topics: s.topics,
      })),
    );
  }

  // Parallel fetch
  const settled = await Promise.allSettled(
    matched.map((s) => fetchWebPage(s.url, { timeout })),
  );

  const results = matched.map((source, i) => {
    const outcome = settled[i];
    if (outcome.status === 'fulfilled') {
      return {
        id: source.id,
        title: source.title,
        organization: source.organization,
        url: source.url,
        contentType: source.contentType,
        fetchStatus: 'success' as const,
        content: outcome.value.content,
      };
    }
    return {
      id: source.id,
      title: source.title,
      organization: source.organization,
      url: source.url,
      contentType: source.contentType,
      fetchStatus: 'failed' as const,
      error: outcome.reason instanceof Error ? outcome.reason.message : 'Unknown error',
    };
  });

  return textResult(results);
}
