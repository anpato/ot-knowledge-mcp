import type { EvidenceLevel } from '../types/index.js';

const EVIDENCE_LEVELS: EvidenceLevel[] = [
  'expert-opinion',
  'emerging',
  'limited',
  'moderate',
  'strong',
];

export function matchesQuery(
  query: string,
  ...fields: (string | string[] | null | undefined)[]
): boolean {
  const q = query.toLowerCase();
  for (const field of fields) {
    if (!field) continue;
    if (Array.isArray(field)) {
      if (field.some((f) => f.toLowerCase().includes(q))) return true;
    } else {
      if (field.toLowerCase().includes(q)) return true;
    }
  }
  return false;
}

export function meetsEvidenceLevel(
  actual: EvidenceLevel,
  minimum: EvidenceLevel,
): boolean {
  return EVIDENCE_LEVELS.indexOf(actual) >= EVIDENCE_LEVELS.indexOf(minimum);
}

export function textResult(data: unknown) {
  return {
    content: [
      { type: 'text' as const, text: JSON.stringify(data, null, 2) },
    ],
  };
}

export function errorResult(message: string) {
  return {
    content: [{ type: 'text' as const, text: message }],
    isError: true,
  };
}
