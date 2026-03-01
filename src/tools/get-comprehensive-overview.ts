import { conditions } from '../data/conditions.js';
import { treatments } from '../data/treatments.js';
import { assessments } from '../data/assessments.js';
import { interventions } from '../data/interventions.js';
import { errorResult } from '../utils/search.js';

export async function getComprehensiveOverview(args: { conditionId: string }) {
  const { conditionId } = args;

  const condition = conditions.find((c) => c.id === conditionId);
  if (!condition) {
    return errorResult(`Condition "${conditionId}" not found.`);
  }

  const relatedTreatments = treatments.filter((t) =>
    t.applicableConditionIds.includes(conditionId),
  );
  const relatedAssessments = assessments.filter((a) =>
    a.applicableConditionIds.includes(conditionId),
  );
  const relatedInterventions = interventions.filter(
    (i) => i.conditionId === conditionId,
  );

  const lines: string[] = [];

  lines.push(`# ${condition.name}`);
  lines.push('');
  lines.push(`**Aliases:** ${condition.aliases.join(', ')}`);
  lines.push(`**Body Systems:** ${condition.bodySystems.join(', ')}`);
  lines.push(`**Age Groups:** ${condition.ageGroups.join(', ')}`);
  lines.push('');
  lines.push(`## Description`);
  lines.push(condition.description);
  lines.push('');
  lines.push(`## Common Symptoms`);
  condition.commonSymptoms.forEach((s) => lines.push(`- ${s}`));
  lines.push('');
  lines.push(`## OT Role`);
  lines.push(condition.otRoleDescription);
  lines.push('');
  lines.push(`## Typical Goals`);
  condition.typicalGoals.forEach((g) => lines.push(`- ${g}`));

  if (relatedTreatments.length > 0) {
    lines.push('');
    lines.push(`## Applicable Treatments (${relatedTreatments.length})`);
    relatedTreatments.forEach((t) => {
      lines.push(`### ${t.name}`);
      lines.push(`- **Approach:** ${t.approachTypes.join(', ')}`);
      lines.push(`- **Description:** ${t.description}`);
      lines.push(`- **Indications:** ${t.indications.join('; ')}`);
      if (t.contraindications.length > 0) {
        lines.push(`- **Contraindications:** ${t.contraindications.join('; ')}`);
      }
    });
  }

  if (relatedAssessments.length > 0) {
    lines.push('');
    lines.push(`## Recommended Assessments (${relatedAssessments.length})`);
    relatedAssessments.forEach((a) => {
      const label = a.acronym ? `${a.name} (${a.acronym})` : a.name;
      lines.push(`### ${label}`);
      lines.push(`- **Domains:** ${a.domains.join(', ')}`);
      lines.push(`- **Purpose:** ${a.purpose}`);
      lines.push(`- **Administration Time:** ${a.administrationTime}`);
      lines.push(`- **Scoring:** ${a.scoringMethod}`);
    });
  }

  if (relatedInterventions.length > 0) {
    lines.push('');
    lines.push(`## Evidence-Based Interventions (${relatedInterventions.length})`);
    relatedInterventions.forEach((i) => {
      lines.push(`### ${i.name} [${i.evidenceLevel}]`);
      lines.push(`- **Description:** ${i.description}`);
      lines.push(`- **Outcome Measures:** ${i.outcomeMeasures.join(', ')}`);
      lines.push(`- **Frequency:** ${i.frequencyRecommendation}`);
      lines.push(`- **Key References:** ${i.keyReferences.join('; ')}`);
      lines.push(`- **Clinical Considerations:** ${i.clinicalConsiderations}`);
    });
  }

  return {
    content: [{ type: 'text' as const, text: lines.join('\n') }],
  };
}
