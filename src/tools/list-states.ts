import { stateResources } from '../data/state-resources.js';
import { textResult } from '../utils/search.js';

export async function listStates() {
  const states = stateResources
    .map((s) => ({
      stateCode: s.stateCode,
      stateName: s.stateName,
      dataLastReviewed: s.dataLastReviewed,
    }))
    .sort((a, b) => a.stateCode.localeCompare(b.stateCode));

  return textResult({ count: states.length, states });
}
