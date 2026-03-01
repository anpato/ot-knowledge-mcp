export type BodySystem =
  | 'neurological'
  | 'musculoskeletal'
  | 'cardiopulmonary'
  | 'integumentary'
  | 'sensory'
  | 'cognitive'
  | 'psychosocial'
  | 'developmental';

export type AgeGroup =
  | 'pediatric'
  | 'adolescent'
  | 'adult'
  | 'geriatric';

export type EvidenceLevel =
  | 'strong'
  | 'moderate'
  | 'limited'
  | 'emerging'
  | 'expert-opinion';

export type ApproachType =
  | 'remedial'
  | 'compensatory'
  | 'adaptive'
  | 'preventive'
  | 'educational'
  | 'sensory-based'
  | 'cognitive-behavioral'
  | 'biomechanical'
  | 'neurodevelopmental';

export type AssessmentDomain =
  | 'adl'
  | 'iadl'
  | 'motor'
  | 'sensory'
  | 'cognitive'
  | 'psychosocial'
  | 'balance'
  | 'upper-extremity'
  | 'functional-performance';

export type GlossaryCategory =
  | 'anatomy'
  | 'assessment'
  | 'intervention'
  | 'theory'
  | 'general'
  | 'legislation';

export interface OTCondition {
  id: string;
  name: string;
  aliases: string[];
  bodySystems: BodySystem[];
  ageGroups: AgeGroup[];
  description: string;
  commonSymptoms: string[];
  otRoleDescription: string;
  typicalGoals: string[];
  relatedConditionIds: string[];
}

export interface TreatmentTechnique {
  id: string;
  name: string;
  aliases: string[];
  approachTypes: ApproachType[];
  description: string;
  indications: string[];
  contraindications: string[];
  applicableConditionIds: string[];
  ageGroups: AgeGroup[];
  settingNotes: string;
}

export interface Assessment {
  id: string;
  name: string;
  aliases: string[];
  acronym: string | null;
  domains: AssessmentDomain[];
  description: string;
  purpose: string;
  populationApplicability: AgeGroup[];
  administrationTime: string;
  scoringMethod: string;
  applicableConditionIds: string[];
  strengthsAndLimitations: string;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  abbreviation: string | null;
  definition: string;
  category: GlossaryCategory;
  relatedTermIds: string[];
  usageExample: string;
}

export interface EvidenceBasedIntervention {
  id: string;
  name: string;
  conditionId: string;
  evidenceLevel: EvidenceLevel;
  description: string;
  outcomeMeasures: string[];
  frequencyRecommendation: string;
  keyReferences: string[];
  clinicalConsiderations: string;
}
