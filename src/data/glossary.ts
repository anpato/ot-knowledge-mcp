import { GlossaryTerm } from '../types/index.js';

export const glossary: GlossaryTerm[] = [
  {
    id: 'rom',
    term: 'Range of Motion',
    abbreviation: 'ROM',
    definition:
      'Range of Motion refers to the measurement of movement around a specific joint or body part, expressed in degrees. It is categorized as active (AROM), where the client moves the joint independently, or passive (PROM), where the therapist moves the joint without client effort. ROM assessments are foundational to evaluating musculoskeletal function and guiding rehabilitation goals.',
    category: 'anatomy',
    relatedTermIds: ['mmt', 'ue', 'le'],
    usageExample:
      'The OT measured the client\'s shoulder ROM to determine the extent of movement limitation following a rotator cuff repair.',
  },
  {
    id: 'adl',
    term: 'Activities of Daily Living',
    abbreviation: 'ADL',
    definition:
      'Activities of Daily Living are the fundamental self-care tasks that individuals perform on a daily basis to maintain personal health and hygiene. These include bathing, dressing, grooming, toileting, feeding, and functional mobility. OTs assess and treat ADL performance deficits to promote client independence and quality of life.',
    category: 'general',
    relatedTermIds: ['iadl', 'occupational-profile', 'otpf'],
    usageExample:
      'Following her stroke, the client required moderate assistance with ADLs, particularly dressing her lower extremities.',
  },
  {
    id: 'iadl',
    term: 'Instrumental Activities of Daily Living',
    abbreviation: 'IADL',
    definition:
      'Instrumental Activities of Daily Living are complex, multi-step tasks that support independent living in the community and are generally more cognitively demanding than basic ADLs. IADLs include meal preparation, home management, medication management, financial management, community mobility, and child or pet care. Deficits in IADL performance are often an early indicator of cognitive or functional decline.',
    category: 'general',
    relatedTermIds: ['adl', 'occupational-profile', 'discharge-planning'],
    usageExample:
      'The OT conducted an IADL evaluation to assess the client\'s ability to manage his medications and prepare simple meals before discharge.',
  },
  {
    id: 'moho',
    term: 'Model of Human Occupation',
    abbreviation: 'MOHO',
    definition:
      'The Model of Human Occupation is a client-centered, occupation-based theoretical framework that explains how people choose, organize, and perform occupations. MOHO conceptualizes humans through the interacting components of volition, habituation, and performance capacity, all embedded within an environmental context. It is one of the most widely researched and applied theoretical models in occupational therapy practice.',
    category: 'theory',
    relatedTermIds: ['peo', 'otpf', 'occupation'],
    usageExample:
      'Using the MOHO framework, the OT explored the client\'s values and roles to help him re-engage in meaningful work after a spinal cord injury.',
  },
  {
    id: 'peo',
    term: 'Person-Environment-Occupation Model',
    abbreviation: 'PEO',
    definition:
      'The Person-Environment-Occupation Model is a transactional framework that conceptualizes occupational performance as the dynamic interaction between the person, their environment, and the occupation being performed. It emphasizes that occupational performance is optimized when the three components are congruent and aligned. OTs use the PEO model to identify barriers and enablers in any one of these three domains to improve a client\'s function.',
    category: 'theory',
    relatedTermIds: ['moho', 'otpf', 'occupation'],
    usageExample:
      'Applying the PEO model, the OT identified that environmental barriers in the client\'s home were limiting her occupational performance more than her physical impairments.',
  },
  {
    id: 'otpf',
    term: 'Occupational Therapy Practice Framework',
    abbreviation: 'OTPF',
    definition:
      'The Occupational Therapy Practice Framework is the official AOTA document that describes the domain and process of occupational therapy practice, providing a structured language for articulating the profession\'s scope. It organizes occupational therapy\'s domain into areas of occupation, client factors, performance skills, performance patterns, and contexts and environments. The OTPF serves as a guide for evaluation, intervention planning, and outcomes measurement in OT practice.',
    category: 'theory',
    relatedTermIds: ['moho', 'peo', 'occupation'],
    usageExample:
      'The therapist used the OTPF to structure the evaluation, identifying deficits in process skills and social participation as primary intervention targets.',
  },
  {
    id: 'ot',
    term: 'Occupational Therapy',
    abbreviation: 'OT',
    definition:
      'Occupational Therapy is a health profession that uses meaningful, purposeful occupations as both the means and ends of intervention to promote health, well-being, and participation across the lifespan. OTs work with individuals, groups, and populations who experience barriers to engagement in daily life activities due to physical, cognitive, psychosocial, or environmental factors. The profession is grounded in the belief that engagement in occupation is essential to human health and identity.',
    category: 'general',
    relatedTermIds: ['cota', 'otpf', 'occupation'],
    usageExample:
      'After his traumatic brain injury, he was referred to OT to address cognitive and self-care deficits that were preventing him from returning home.',
  },
  {
    id: 'cota',
    term: 'Certified Occupational Therapy Assistant',
    abbreviation: 'COTA',
    definition:
      'A Certified Occupational Therapy Assistant is a credentialed OT practitioner who works under the supervision of a registered occupational therapist (OTR) to implement treatment plans and carry out established interventions. COTAs must pass the NBCOT certification examination and meet state licensure requirements to practice. While COTAs may contribute to aspects of evaluation and discharge planning, the supervising OT retains overall professional responsibility for client care.',
    category: 'general',
    relatedTermIds: ['ot', 'otpf'],
    usageExample:
      'The COTA carried out the daily upper extremity strengthening program that the supervising OT had designed for the post-surgical client.',
  },
  {
    id: 'ndt',
    term: 'Neurodevelopmental Treatment',
    abbreviation: 'NDT',
    definition:
      'Neurodevelopmental Treatment is a hands-on therapeutic approach originally developed by Berta and Karel Bobath, designed to improve motor function in individuals with neurological conditions such as cerebral palsy, stroke, and traumatic brain injury. NDT focuses on inhibiting abnormal movement patterns and facilitating normal, coordinated movement through key points of control and handling techniques. It is widely used in pediatric and adult OT practice to promote functional movement and postural control.',
    category: 'intervention',
    relatedTermIds: ['ue', 'le', 'rom'],
    usageExample:
      'The pediatric OT used NDT handling techniques to inhibit extensor tone and facilitate reach during play activities with the child with cerebral palsy.',
  },
  {
    id: 'ue',
    term: 'Upper Extremity',
    abbreviation: 'UE',
    definition:
      'Upper Extremity refers to the anatomical region encompassing the shoulder girdle, arm, elbow, forearm, wrist, and hand. In occupational therapy, UE function is central to the performance of most ADLs, fine motor tasks, and work-related activities. OTs frequently evaluate and treat UE impairments resulting from neurological, orthopedic, or developmental conditions.',
    category: 'anatomy',
    relatedTermIds: ['rom', 'mmt', 'splint'],
    usageExample:
      'The OT conducted a comprehensive UE assessment including ROM, strength, and sensory testing following the client\'s elbow fracture and surgical repair.',
  },
  {
    id: 'le',
    term: 'Lower Extremity',
    abbreviation: 'LE',
    definition:
      'Lower Extremity refers to the anatomical region encompassing the hip, thigh, knee, leg, ankle, and foot. Although OT practice emphasizes upper extremity and cognitive function, LE function is also critical in OT for evaluating transfers, functional mobility, and lower-body dressing. OTs often address LE edema management, positioning, and adaptive strategies for dressing and footwear.',
    category: 'anatomy',
    relatedTermIds: ['rom', 'adl', 'edema'],
    usageExample:
      'The OT trained the client in adaptive lower-body dressing techniques due to limited LE ROM following total hip replacement.',
  },
  {
    id: 'mmt',
    term: 'Manual Muscle Testing',
    abbreviation: 'MMT',
    definition:
      'Manual Muscle Testing is a standardized assessment technique used to evaluate the strength of individual muscles or muscle groups through the application of resistance by the examiner. MMT grades are recorded on a scale from 0 (no contraction) to 5 (normal strength against full resistance), providing objective data to track rehabilitation progress. It is commonly used in OT to assess UE strength following orthopedic surgery, nerve injury, or neurological conditions.',
    category: 'assessment',
    relatedTermIds: ['rom', 'ue', 'activity-analysis'],
    usageExample:
      'MMT revealed grade 3+ strength in the client\'s wrist extensors, indicating she could move against gravity but not full resistance following radial nerve palsy.',
  },
  {
    id: 'splint',
    term: 'Splint / Orthosis',
    abbreviation: null,
    definition:
      'A splint or orthosis is a custom or prefabricated device applied to a body segment to support, protect, immobilize, correct, or enhance the function of that segment. OTs are trained in the design, fabrication, and fitting of thermoplastic orthoses for the hand and upper extremity. Orthoses may be static (immobilizing) or dynamic (providing passive or assisted motion) depending on the clinical goal.',
    category: 'intervention',
    relatedTermIds: ['ue', 'rom', 'edema'],
    usageExample:
      'The OT fabricated a custom resting hand splint to maintain the client\'s hand in a functional position and prevent contractures following a burn injury.',
  },
  {
    id: 'edema',
    term: 'Edema',
    abbreviation: null,
    definition:
      'Edema is the abnormal accumulation of fluid in the interstitial spaces of body tissues, commonly occurring in the hand and upper extremity following trauma, surgery, or as a result of systemic conditions. In OT, edema management is a critical component of hand therapy and includes elevation, retrograde massage, compression garments, and contrast baths. Unmanaged edema can lead to joint stiffness, pain, and long-term functional limitations.',
    category: 'anatomy',
    relatedTermIds: ['splint', 'ue', 'rom'],
    usageExample:
      'The OT initiated an edema management program using retrograde massage and a compression glove to reduce swelling in the client\'s hand two weeks post-surgery.',
  },
  {
    id: 'proprioception',
    term: 'Proprioception',
    abbreviation: null,
    definition:
      'Proprioception is the sensory system\'s ability to perceive the position, movement, and force of one\'s own body segments without relying on visual input, mediated by receptors in muscles, tendons, and joints. Deficits in proprioception can impair coordination, balance, and the ability to perform fine motor tasks safely and accurately. OTs address proprioceptive deficits through sensory re-education, weight-bearing activities, and targeted therapeutic exercises.',
    category: 'anatomy',
    relatedTermIds: ['vestibular', 'ndt', 'activity-analysis'],
    usageExample:
      'The OT incorporated proprioceptive activities such as weight-bearing on an open hand and resistive putty exercises to improve the client\'s hand awareness following peripheral nerve repair.',
  },
  {
    id: 'vestibular',
    term: 'Vestibular System',
    abbreviation: null,
    definition:
      'The vestibular system is a sensory system located in the inner ear that detects head position, linear and rotational acceleration, and contributes to balance, spatial orientation, and visual stability. Dysfunction in the vestibular system can present as dizziness, poor postural control, gravitational insecurity, or sensory processing difficulties. OTs, particularly those trained in sensory integration or working in pediatric settings, address vestibular processing through carefully graded movement activities.',
    category: 'anatomy',
    relatedTermIds: ['proprioception', 'ndt', 'grading'],
    usageExample:
      'The pediatric OT incorporated slow, rhythmic swinging on a platform swing to provide organizing vestibular input for the child with sensory processing disorder.',
  },
  {
    id: 'occupational-profile',
    term: 'Occupational Profile',
    abbreviation: null,
    definition:
      'The Occupational Profile is a structured summary of a client\'s occupational history, patterns of daily living, interests, values, and needs, gathered at the start of the OT evaluation process as defined by the OTPF. It provides a client-centered foundation for understanding who the client is, what they want and need to do, and what factors support or hinder their occupational performance. The occupational profile ensures that intervention is guided by the client\'s priorities rather than solely by clinical deficits.',
    category: 'assessment',
    relatedTermIds: ['otpf', 'adl', 'moho'],
    usageExample:
      'During the initial evaluation, the OT completed an occupational profile by interviewing the client about her daily routines, valued roles, and goals for therapy.',
  },
  {
    id: 'grading',
    term: 'Grading Activities',
    abbreviation: null,
    definition:
      'Grading activities is an OT intervention strategy that involves systematically modifying the demands of a therapeutic activity to incrementally increase or decrease the challenge presented to the client. Grading can adjust physical, cognitive, perceptual, or social demands to match the client\'s current performance level and progressively build capacity. It is a core clinical reasoning skill that allows OTs to use meaningful occupations therapeutically while ensuring client safety and success.',
    category: 'intervention',
    relatedTermIds: ['adapting', 'activity-analysis', 'therapeutic-use-of-self'],
    usageExample:
      'The OT graded the cooking task by starting with a microwave meal before progressing to stovetop cooking as the client\'s cognitive endurance improved.',
  },
  {
    id: 'adapting',
    term: 'Adapting Activities',
    abbreviation: null,
    definition:
      'Adapting activities refers to modifying the context, tools, materials, or methods of an occupation to enable a client to perform it successfully despite persistent impairments or limitations. Unlike grading, which changes the challenge level, adaptation changes the nature of the activity itself or the environment to compensate for a deficit. Adaptive strategies may include the use of assistive devices, environmental modifications, or alternative techniques to complete daily tasks.',
    category: 'intervention',
    relatedTermIds: ['grading', 'activity-analysis', 'adl'],
    usageExample:
      'The OT adapted the dressing task by introducing a button hook and elastic shoelaces, allowing the client with limited hand function to dress independently.',
  },
  {
    id: 'therapeutic-use-of-self',
    term: 'Therapeutic Use of Self',
    abbreviation: null,
    definition:
      'Therapeutic Use of Self is the intentional and reflective use of one\'s personality, insights, perceptions, and judgments as part of the therapeutic process to facilitate positive client outcomes. It involves the OT\'s conscious decision-making about how to relate to the client, including empathy, humor, directness, and encouragement, tailored to the individual\'s needs. Renee Taylor\'s Intentional Relationship Model (IRM) provides a framework for understanding and developing this core therapeutic skill.',
    category: 'intervention',
    relatedTermIds: ['occupational-profile', 'moho', 'grading'],
    usageExample:
      'The OT deliberately used humor and a collaborative communication style as therapeutic use of self to build rapport with an adolescent client who was resistant to engaging in therapy.',
  },
  {
    id: 'occupation',
    term: 'Occupation',
    abbreviation: null,
    definition:
      'In occupational therapy, occupation refers to the everyday activities that people find meaningful and purposeful, which give their lives structure, identity, and satisfaction. Occupations encompass a wide range of activities categorized under areas such as self-care, productivity, leisure, rest, sleep, education, play, and social participation. The concept of occupation is the central organizing principle of OT, distinguishing it from other health professions by using purposeful activity as both the means and end of therapeutic intervention.',
    category: 'theory',
    relatedTermIds: ['otpf', 'moho', 'activity-analysis'],
    usageExample:
      'The OT explained that gardening was a meaningful occupation for the client and incorporated it as the primary therapeutic medium throughout his rehabilitation.',
  },
  {
    id: 'activity-analysis',
    term: 'Activity Analysis',
    abbreviation: null,
    definition:
      'Activity analysis is the systematic process by which an OT breaks down an occupation or activity into its component steps, performance demands, required client factors, and contextual requirements. This process allows the OT to identify the precise skills and capacities needed to perform an activity and to match or grade activities appropriately to a client\'s abilities. Activity analysis is a foundational clinical reasoning skill that informs both assessment and intervention planning in OT.',
    category: 'assessment',
    relatedTermIds: ['occupation', 'grading', 'adapting'],
    usageExample:
      'The OT performed an activity analysis of tooth brushing to identify which motor and process skills were most challenging for the client with cognitive impairments.',
  },
  {
    id: 'discharge-planning',
    term: 'Discharge Planning',
    abbreviation: null,
    definition:
      'Discharge planning is the collaborative, ongoing process of preparing a client for transition from one level of care to another, or for return to the community, by ensuring that appropriate supports, adaptations, and follow-up services are in place. OTs contribute to discharge planning by assessing functional performance, recommending home modifications, prescribing adaptive equipment, and identifying community resources. Effective discharge planning reduces hospital readmission rates and supports client safety and independence.',
    category: 'general',
    relatedTermIds: ['iadl', 'adl', 'occupational-profile'],
    usageExample:
      'As part of discharge planning, the OT completed a home assessment and recommended grab bar installation in the bathroom before the client returned home from inpatient rehabilitation.',
  },
  {
    id: 'idea',
    term: 'Individuals with Disabilities Education Act',
    abbreviation: 'IDEA',
    definition:
      'The Individuals with Disabilities Education Act is a federal law that mandates a free and appropriate public education (FAPE) in the least restrictive environment (LRE) for children with disabilities from birth through age 21. Under IDEA, occupational therapy is recognized as a related service that supports a child\'s ability to benefit from special education. OTs working in school-based settings operate under IDEA guidelines, contributing to Individualized Education Programs (IEPs) and Individualized Family Service Plans (IFSPs).',
    category: 'legislation',
    relatedTermIds: ['ada', 'otpf', 'ot'],
    usageExample:
      'The school-based OT provided services under IDEA as part of the student\'s IEP to address fine motor and sensory processing deficits affecting classroom participation.',
  },
  {
    id: 'ada',
    term: 'Americans with Disabilities Act',
    abbreviation: 'ADA',
    definition:
      'The Americans with Disabilities Act is a landmark federal civil rights law enacted in 1990 that prohibits discrimination against individuals with disabilities in employment, public accommodations, transportation, and government services. In OT practice, the ADA is relevant to workplace accommodations, accessibility consulting, and advocacy for clients seeking equal participation in community and vocational settings. OTs may perform job site analyses and recommend reasonable accommodations to support client return to work under ADA protections.',
    category: 'legislation',
    relatedTermIds: ['idea', 'discharge-planning', 'adapting'],
    usageExample:
      'The OT conducted a worksite evaluation and recommended ergonomic accommodations under the ADA to enable the client with a repetitive stress injury to return to her administrative position.',
  },
];
