import { textResult } from '../utils/search.js';
import { reputableSources } from '../data/reputable-sources.js';

export async function searchClinicalGuidelines(args: { topic?: string }) {
  const { topic } = args;

  let results = reputableSources;

  if (topic) {
    const searchTerm = topic.toLowerCase();
    results = results.filter((source) =>
      source.topics.some((t) => t.includes(searchTerm)) ||
      source.title.toLowerCase().includes(searchTerm) ||
      source.description.toLowerCase().includes(searchTerm),
    );
  }

  if (results.length === 0) {
    return textResult({
      message: `No clinical guidelines found for topic: ${topic}`,
      suggestion: 'Try a broader search term or omit the topic parameter to see all available guidelines.',
    });
  }

  const formatted = results.map((source) => ({
    title: source.title,
    organization: source.organization,
    url: source.url,
    description: source.description,
    topics: source.topics,
  }));

  return textResult(formatted);
}
