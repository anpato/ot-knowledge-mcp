import { textResult } from '../utils/search.js';

interface ClinicalGuideline {
  title: string;
  organization: string;
  url: string;
  description: string;
  topics: string[];
}

const clinicalGuidelines: ClinicalGuideline[] = [
  {
    title: 'AOTA Evidence-Based Practice Resources',
    organization: 'American Occupational Therapy Association',
    url: 'https://www.aota.org/practice/practice-essentials/evidence-based-practice',
    description: 'Comprehensive evidence-based practice resources including systematic reviews, critically appraised topics, and evidence-based literature reviews for occupational therapy interventions.',
    topics: ['general', 'evidence-based-practice', 'systematic-reviews'],
  },
  {
    title: 'Stroke Rehabilitation Guidelines',
    organization: 'American Heart Association / American Stroke Association',
    url: 'https://www.ahajournals.org/stroke/guidelines',
    description: 'Clinical practice guidelines for stroke rehabilitation and recovery, including recommendations for occupational therapy interventions.',
    topics: ['stroke', 'neurological', 'rehabilitation'],
  },
  {
    title: 'WHO Rehabilitation Guidelines',
    organization: 'World Health Organization',
    url: 'https://www.who.int/health-topics/rehabilitation',
    description: 'International guidelines and resources for rehabilitation services, including occupational therapy across various conditions and settings.',
    topics: ['general', 'international', 'rehabilitation', 'community-health'],
  },
  {
    title: 'NICE Clinical Guidelines',
    organization: 'National Institute for Health and Care Excellence (UK)',
    url: 'https://www.nice.org.uk/guidance',
    description: 'Evidence-based clinical practice guidelines covering various conditions relevant to occupational therapy including stroke, dementia, falls prevention, and mental health.',
    topics: ['stroke', 'dementia', 'falls', 'mental-health', 'evidence-based-practice'],
  },
  {
    title: 'CDC Arthritis Program',
    organization: 'Centers for Disease Control and Prevention',
    url: 'https://www.cdc.gov/arthritis/',
    description: 'Evidence-based interventions and self-management education programs for arthritis, including recommendations for occupational therapy interventions.',
    topics: ['arthritis', 'rheumatoid-arthritis', 'osteoarthritis', 'self-management'],
  },
  {
    title: 'Autism Intervention Guidelines',
    organization: 'National Autism Center',
    url: 'https://www.nationalautismcenter.org/',
    description: 'Evidence-based practices for autism spectrum disorder, including sensory integration and behavioral interventions used in occupational therapy.',
    topics: ['autism', 'pediatric', 'sensory', 'developmental'],
  },
  {
    title: 'Traumatic Brain Injury Guidelines',
    organization: 'Brain Injury Association of America',
    url: 'https://www.biausa.org/',
    description: 'Clinical practice guidelines and resources for traumatic brain injury rehabilitation, including cognitive and functional interventions.',
    topics: ['tbi', 'traumatic-brain-injury', 'cognitive', 'neurological'],
  },
  {
    title: "Parkinson's Disease Clinical Guidelines",
    organization: 'Parkinson Foundation',
    url: 'https://www.parkinson.org/understanding-parkinsons/treatment/clinical-guidelines',
    description: 'Clinical practice guidelines for Parkinson\'s disease management, including occupational therapy interventions for motor and non-motor symptoms.',
    topics: ['parkinsons', 'movement-disorders', 'neurological'],
  },
  {
    title: 'Geriatric Care Guidelines',
    organization: 'American Geriatrics Society',
    url: 'https://geriatricscareonline.org/ProductAbstract/clinical-practice-guidelines',
    description: 'Clinical practice guidelines for geriatric care, including fall prevention, dementia care, and functional assessment recommendations.',
    topics: ['geriatric', 'falls', 'dementia', 'functional-assessment'],
  },
  {
    title: 'Hand Therapy Clinical Practice Guidelines',
    organization: 'American Society of Hand Therapists',
    url: 'https://www.asht.org/practice/clinical-practice-guidelines',
    description: 'Evidence-based clinical practice guidelines for hand therapy, covering conditions such as carpal tunnel syndrome, tendon repairs, and fractures.',
    topics: ['hand-therapy', 'upper-extremity', 'carpal-tunnel', 'fractures'],
  },
  {
    title: 'Mental Health Practice Guidelines',
    organization: 'AOTA Mental Health Practice',
    url: 'https://www.aota.org/practice/practice-areas/mental-health',
    description: 'Resources and guidelines for occupational therapy in mental health settings, including interventions for depression, anxiety, and psychosocial rehabilitation.',
    topics: ['mental-health', 'psychosocial', 'depression', 'anxiety'],
  },
  {
    title: 'Spinal Cord Injury Practice Guidelines',
    organization: 'Paralyzed Veterans of America',
    url: 'https://pva.org/research-resources/publications/clinical-practice-guidelines/',
    description: 'Comprehensive clinical practice guidelines for spinal cord injury care, including occupational therapy interventions for ADL retraining and adaptive equipment.',
    topics: ['spinal-cord-injury', 'neurological', 'adl', 'adaptive-equipment'],
  },
];

export async function searchClinicalGuidelines(args: { topic?: string }) {
  const { topic } = args;

  let results = clinicalGuidelines;

  if (topic) {
    const searchTerm = topic.toLowerCase();
    results = results.filter((guideline) =>
      guideline.topics.some((t) => t.includes(searchTerm)) ||
      guideline.title.toLowerCase().includes(searchTerm) ||
      guideline.description.toLowerCase().includes(searchTerm),
    );
  }

  if (results.length === 0) {
    return textResult({
      message: `No clinical guidelines found for topic: ${topic}`,
      suggestion: 'Try a broader search term or omit the topic parameter to see all available guidelines.',
    });
  }

  const formatted = results.map((guideline) => ({
    title: guideline.title,
    organization: guideline.organization,
    url: guideline.url,
    description: guideline.description,
    topics: guideline.topics,
  }));

  return textResult(formatted);
}
