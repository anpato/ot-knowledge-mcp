import { EvidenceBasedIntervention } from '../types/index.js';

export const interventions: EvidenceBasedIntervention[] = [
  {
    id: 'cimt-stroke',
    name: 'Constraint-Induced Movement Therapy (CIMT)',
    conditionId: 'stroke',
    evidenceLevel: 'strong',
    description:
      'CIMT involves restraining the less-affected upper extremity while intensively training the paretic arm through massed practice of functional tasks. The approach exploits neuroplasticity by overcoming learned non-use and driving cortical reorganization. Shaping techniques progressively increase task difficulty to maximize motor recovery.',
    outcomeMeasures: [
      'Wolf Motor Function Test (WMFT)',
      'Motor Activity Log (MAL)',
      'Fugl-Meyer Assessment - Upper Extremity (FMA-UE)',
      'Action Research Arm Test (ARAT)',
    ],
    frequencyRecommendation: '6 hours per day of intensive practice, 5 days per week for 2 weeks',
    keyReferences: [
      'Wolf et al., 2006 - EXCITE Trial (JAMA)',
      'Taub et al., 2006 - Constraint-induced movement therapy: a new family of techniques (Journal of Rehabilitation Research & Development)',
      'Sirtori et al., 2009 - Cochrane review on constraint-induced movement therapy for upper extremities after stroke',
    ],
    clinicalConsiderations:
      'Candidates must demonstrate at least 10° of active wrist extension and 10° of finger extension. CIMT is contraindicated in patients with significant shoulder pain, severe spasticity (Modified Ashworth Scale >3), or serious balance impairment that increases fall risk during constraint wear.',
  },
  {
    id: 'task-oriented-training-stroke',
    name: 'Task-Oriented Training',
    conditionId: 'stroke',
    evidenceLevel: 'strong',
    description:
      'Task-oriented training uses repetitive, goal-directed practice of functional activities to promote motor relearning and neuroplastic adaptation after stroke. Tasks are selected based on the client\'s occupational goals and graded in complexity as performance improves. The approach is grounded in motor learning theory and prioritizes real-world task contexts over isolated impairment-based exercises.',
    outcomeMeasures: [
      'Functional Independence Measure (FIM)',
      'Barthel Index',
      'Action Research Arm Test (ARAT)',
      'Canadian Occupational Performance Measure (COPM)',
    ],
    frequencyRecommendation: '45–60 minutes per session, 5 days per week throughout acute and subacute rehabilitation',
    keyReferences: [
      'Hubbard et al., 2009 - Task-specific training: evidence for and translation to clinical practice (Occupational Therapy International)',
      'Nilsen et al., 2010 - Integrating motor learning principles into stroke rehabilitation (Physical Therapy)',
      'French et al., 2016 - Repetitive task training for improving functional ability after stroke (Cochrane Database)',
    ],
    clinicalConsiderations:
      'Task selection must be meaningful and client-centered to optimize motivation and carry-over. Therapists should apply principles of variable practice, reduced feedback frequency, and contextual interference to enhance motor learning and long-term retention.',
  },
  {
    id: 'mirror-therapy-stroke',
    name: 'Mirror Therapy',
    conditionId: 'stroke',
    evidenceLevel: 'moderate',
    description:
      'Mirror therapy uses a mirror placed in the participant\'s sagittal plane so that the reflection of the unaffected limb creates the illusion of normal movement in the paretic limb. This visual feedback is thought to activate mirror neuron systems and promote cortical reorganization of the affected hemisphere. It is particularly useful for patients with minimal active movement in the paretic limb.',
    outcomeMeasures: [
      'Fugl-Meyer Assessment - Upper Extremity (FMA-UE)',
      'Motor Activity Log (MAL)',
      'Visual Analogue Scale for pain',
    ],
    frequencyRecommendation: '30 minutes per day, 5 days per week for 4 weeks',
    keyReferences: [
      'Thieme et al., 2018 - Mirror therapy for improving motor function after stroke (Cochrane Database)',
      'Yavuzer et al., 2008 - Mirror therapy improves hand function in subacute stroke (Archives of Physical Medicine and Rehabilitation)',
      'Ramachandran & Altschuler, 2009 - The use of visual feedback in restoring brain function (Brain)',
    ],
    clinicalConsiderations:
      'Mirror therapy can be performed independently at home after initial training, making it a viable adjunct for extending therapy dosage. Patients with significant visual field deficits, visuospatial neglect, or cognitive impairment affecting instruction comprehension may not be suitable candidates.',
  },
  {
    id: 'mental-practice-stroke',
    name: 'Mental Practice / Motor Imagery',
    conditionId: 'stroke',
    evidenceLevel: 'moderate',
    description:
      'Mental practice involves the repeated cognitive rehearsal of a motor task without overt physical movement, activating similar neural substrates as physical practice. When combined with physical practice, motor imagery has been shown to improve upper-extremity function and ADL performance after stroke. Audio-guided or therapist-guided scripts are used to facilitate vivid kinesthetic imagery.',
    outcomeMeasures: [
      'Fugl-Meyer Assessment - Upper Extremity (FMA-UE)',
      'Wolf Motor Function Test (WMFT)',
      'Barthel Index',
    ],
    frequencyRecommendation: '20–30 minutes of imagery per session, combined with physical practice, 3–5 days per week for 4–6 weeks',
    keyReferences: [
      'Page et al., 2007 - Mental practice combined with physical practice for upper-limb motor deficit in subacute stroke (Physical Therapy)',
      'Braun et al., 2006 - Using mental practice in stroke rehabilitation: a systematic review (Scandinavian Journal of Occupational Therapy)',
      'Zimmermann-Schlatter et al., 2008 - Efficacy of motor imagery in post-stroke rehabilitation (Journal of NeuroEngineering and Rehabilitation)',
    ],
    clinicalConsiderations:
      'Therapists should assess kinesthetic imagery ability using tools such as the Kinesthetic and Visual Imagery Questionnaire (KVIQ) before initiating mental practice. Patients with significant cognitive impairment, severe aphasia, or poor imagery vividness may show limited benefit.',
  },
  {
    id: 'co-occupation-tbi',
    name: 'Cognitive Rehabilitation for Attention and Memory (TBI)',
    conditionId: 'tbi',
    evidenceLevel: 'strong',
    description:
      'Cognitive rehabilitation targeting attention and memory after traumatic brain injury employs both restorative training (direct remediation of impaired functions) and compensatory strategy instruction (use of external aids and internal mnemonics). Structured programs such as Attention Process Training (APT) and Goal Management Training (GMT) have demonstrated significant functional improvements. Intervention is embedded in personally relevant daily occupations to enhance generalization.',
    outcomeMeasures: [
      'Rivermead Behavioural Memory Test (RBMT)',
      'Test of Everyday Attention (TEA)',
      'Canadian Occupational Performance Measure (COPM)',
      'Functional Independence Measure (FIM)',
    ],
    frequencyRecommendation: '3–5 sessions per week for 6–12 weeks depending on severity',
    keyReferences: [
      'Cicerone et al., 2011 - Evidence-based cognitive rehabilitation: updated review (Archives of Physical Medicine and Rehabilitation)',
      'Rohling et al., 2009 - Effectiveness of cognitive rehabilitation following acquired brain injury: a meta-analytic re-examination (Neuropsychology)',
      'Sohlberg & Mateer, 1989 - Attention Process Training (APT) - foundational framework',
    ],
    clinicalConsiderations:
      'Interventions should begin once the patient is medically stable and able to participate in at least 30 minutes of structured activity. Fatigue management must be integrated into the rehabilitation plan, as cognitive effort is often severely limited in the early stages post-injury.',
  },
  {
    id: 'adl-training-sci',
    name: 'ADL Retraining and Assistive Technology for Spinal Cord Injury',
    conditionId: 'spinal-cord-injury',
    evidenceLevel: 'strong',
    description:
      'ADL retraining after spinal cord injury involves systematic practice of self-care tasks using adaptive techniques, equipment, and assistive technology appropriate to the level and completeness of injury. Occupational therapists work with clients to maximize independence across dressing, grooming, bathing, feeding, and bladder/bowel management. Prescription of assistive devices—such as universal cuffs, adapted utensils, and environmental control units—is individualized to neurological level.',
    outcomeMeasures: [
      'Spinal Cord Independence Measure (SCIM III)',
      'Functional Independence Measure (FIM)',
      'Canadian Occupational Performance Measure (COPM)',
    ],
    frequencyRecommendation: 'Daily during inpatient rehabilitation; 2–3 sessions per week in outpatient or community phases',
    keyReferences: [
      'Consortium for Spinal Cord Medicine, 2005 - Preservation of upper limb function following spinal cord injury: clinical practice guidelines',
      'Lam et al., 2008 - Reliability of the Spinal Cord Independence Measure (Spinal Cord)',
      'Harvey, 2016 - Physiotherapy rehabilitation for people with spinal cord injuries (Journal of Physiotherapy)',
    ],
    clinicalConsiderations:
      'The neurological level of injury is the primary determinant of expected functional outcomes and equipment needs; careful classification using the ASIA Impairment Scale is essential before establishing rehabilitation goals. Pressure injury prevention education must be integrated throughout all ADL training.',
  },
  {
    id: 'energy-conservation-ms',
    name: 'Energy Conservation and Fatigue Management for Multiple Sclerosis',
    conditionId: 'multiple-sclerosis',
    evidenceLevel: 'moderate',
    description:
      'Energy conservation programs teach individuals with MS to pace activities, prioritize tasks, and modify their environment to reduce the physiological and neurological burden of fatigue. Techniques include activity pacing, scheduled rest periods, ergonomic modification, and use of assistive equipment to decrease metabolic demand. Group-based and individual delivery formats have both demonstrated improvements in fatigue impact and occupational participation.',
    outcomeMeasures: [
      'Modified Fatigue Impact Scale (MFIS)',
      'Fatigue Severity Scale (FSS)',
      'Canadian Occupational Performance Measure (COPM)',
    ],
    frequencyRecommendation: '6–8 weekly sessions (group or individual format), with home practice integration',
    keyReferences: [
      'Mathiowetz et al., 2005 - Six-week energy conservation course for persons with multiple sclerosis: a randomized controlled trial (Multiple Sclerosis)',
      'Kos et al., 2008 - Management of fatigue in multiple sclerosis (Expert Opinion on Pharmacotherapy)',
      'Asano & Finlayson, 2014 - Meta-analysis of three different types of fatigue management interventions for people with multiple sclerosis (Multiple Sclerosis International)',
    ],
    clinicalConsiderations:
      'Therapists should distinguish between primary fatigue (neurological) and secondary fatigue (due to sleep disturbance, depression, or deconditioning) to target interventions appropriately. Heat sensitivity is common in MS and activity scheduling should account for thermoregulation strategies.',
  },
  {
    id: 'upper-extremity-training-ms',
    name: 'Upper Extremity Coordination and Dexterity Training for Multiple Sclerosis',
    conditionId: 'multiple-sclerosis',
    evidenceLevel: 'moderate',
    description:
      'Structured upper extremity training targets tremor, ataxia, and distal weakness that impair fine motor performance and ADL independence in MS. Interventions include weighted utensil use, proprioceptive training, task-specific dexterity exercises, and compensatory strategies. Goal-oriented functional task practice is used to promote neuroplastic adaptation within the constraints of the progressive disease course.',
    outcomeMeasures: [
      'Nine-Hole Peg Test (NHPT)',
      'ABILHAND',
      'Multiple Sclerosis Functional Composite (MSFC)',
    ],
    frequencyRecommendation: '3 sessions per week for 8 weeks; adapted based on fatigue and relapse status',
    keyReferences: [
      'Lamers et al., 2016 - Upper limb rehabilitation in people with multiple sclerosis: a systematic review (Neurorehabilitation and Neural Repair)',
      'Spooren et al., 2012 - Upper extremity rehabilitation in multiple sclerosis (Journal of Neurology)',
    ],
    clinicalConsiderations:
      'Exacerbation status must be monitored throughout the intervention period; therapy should be paused or modified during active relapses. Assistive technology assessment (e.g., weighted utensils, voice-activated devices) should be conducted in parallel to ensure participation continuity.',
  },
  {
    id: 'handwriting-occupational-therapy-parkinsons',
    name: 'Lee Silverman Voice Treatment - BIG (LSVT BIG) for Parkinson\'s Disease',
    conditionId: 'parkinsons',
    evidenceLevel: 'moderate',
    description:
      'LSVT BIG is a standardized, high-intensity amplitude-focused physical rehabilitation protocol adapted for motor symptom management in Parkinson\'s disease. The program trains large-amplitude movements across all planes of motion during standardized and functional tasks to counteract hypokinesia. Intensive massed practice across 16 sessions over one month aims to recalibrate the patient\'s perception of movement size.',
    outcomeMeasures: [
      'Unified Parkinson\'s Disease Rating Scale - Motor Section (UPDRS-III)',
      'Timed Up and Go (TUG)',
      'Parkinson\'s Disease Questionnaire-39 (PDQ-39)',
    ],
    frequencyRecommendation: '4 individual sessions per week for 4 weeks (16 sessions total)',
    keyReferences: [
      'Ebersbach et al., 2010 - Comparing LSVT-BIG and physiotherapy in Parkinson\'s disease (Movement Disorders)',
      'Farley & Koshland, 2005 - Training BIG to move faster: the application of the speed-amplitude relation as a rehabilitation strategy (Experimental Brain Research)',
      'Herd et al., 2012 - Physiotherapy for Parkinson\'s disease: a systematic review and economic evaluation (Health Technology Assessment)',
    ],
    clinicalConsiderations:
      'LSVT BIG must be administered by a certified LSVT BIG clinician to ensure protocol fidelity. The high-intensity nature of the program requires careful screening for cardiovascular comorbidities and orthostatic hypotension, which are common in this population.',
  },
  {
    id: 'joint-protection-ra',
    name: 'Joint Protection Education for Rheumatoid Arthritis',
    conditionId: 'rheumatoid-arthritis',
    evidenceLevel: 'strong',
    description:
      'Joint protection education teaches individuals with rheumatoid arthritis principles to reduce mechanical stress on inflamed and at-risk joints during daily activities, thereby decreasing pain and slowing structural deterioration. Core principles include distributing load across larger joints, avoiding prolonged static positions, and using adaptive techniques and equipment. Programs integrate behavioral change strategies to promote long-term adherence to protective movement patterns.',
    outcomeMeasures: [
      'Health Assessment Questionnaire (HAQ)',
      'Patient-Reported Outcomes Measurement Information System (PROMIS) - Pain Interference',
      'Joint Protection Behavior Assessment (JPBA)',
      'Canadian Occupational Performance Measure (COPM)',
    ],
    frequencyRecommendation: '6–8 weekly sessions (individual or group); booster session at 3 months',
    keyReferences: [
      'Hammond & Freeman, 2001 - One-year outcomes of a randomized controlled trial of an educational-behavioural joint protection programme for people with rheumatoid arthritis (Rheumatology)',
      'Niedermann et al., 2011 - Effectiveness of individual resource-oriented joint protection education in people with rheumatoid arthritis (Patient Education and Counseling)',
      'Steultjens et al., 2004 - Occupational therapy for rheumatoid arthritis (Cochrane Database)',
    ],
    clinicalConsiderations:
      'Joint protection education should be introduced during periods of disease activity when motivation is highest and symptoms are most salient. The program should be individualized based on dominant hand function, work demands, and activity priorities rather than delivered as a generic protocol.',
  },
  {
    id: 'hand-orthosis-ra',
    name: 'Resting and Working Hand Orthoses for Rheumatoid Arthritis',
    conditionId: 'rheumatoid-arthritis',
    evidenceLevel: 'moderate',
    description:
      'Custom thermoplastic orthoses are fabricated to support inflamed joints, reduce pain during activity, and prevent or correct deformity in individuals with rheumatoid arthritis. Resting hand orthoses maintain the wrist and hand in a position of safe immobilization during sleep or acute flares, while working orthoses support the wrist during functional activities. Serial or dynamic orthoses may be used to address early ulnar drift or swan-neck deformities.',
    outcomeMeasures: [
      'Visual Analogue Scale (VAS) for pain',
      'Grip strength (dynamometry)',
      'Health Assessment Questionnaire (HAQ)',
    ],
    frequencyRecommendation: 'Worn according to individual wear schedule; reassessed every 4–6 weeks for fit and therapeutic efficacy',
    keyReferences: [
      'Ramsey et al., 2014 - Occupational therapy for rheumatoid arthritis: a meta-analysis (Arthritis Care & Research)',
      'Adams et al., 2008 - Splinting in rheumatoid arthritis: a systematic review (Arthritis & Rheumatism)',
      'Egan et al., 2003 - Splinting for carpal tunnel syndrome (Cochrane Database)',
    ],
    clinicalConsiderations:
      'Orthoses must be fabricated in the correct resting position to avoid exacerbating ulnar drift; wrist should be positioned in neutral to slight extension with MCPs in slight flexion. Regular skin checks are essential for patients with compromised sensation or fragile skin due to long-term corticosteroid use.',
  },
  {
    id: 'activity-modification-oa',
    name: 'Activity Modification and Joint Conservation for Osteoarthritis',
    conditionId: 'osteoarthritis',
    evidenceLevel: 'moderate',
    description:
      'Activity modification for osteoarthritis involves analyzing occupational tasks to identify movement patterns that exacerbate pain and cartilage stress, then implementing adaptive strategies, equipment, and task modifications to maintain participation. Therapists address self-care, home management, leisure, and work tasks using ergonomic principles and assistive devices. Education on pacing and load management helps individuals balance activity and rest to minimize symptom flares.',
    outcomeMeasures: [
      'Western Ontario and McMaster Universities Osteoarthritis Index (WOMAC)',
      'Australian/Canadian Osteoarthritis Hand Index (AUSCAN)',
      'Canadian Occupational Performance Measure (COPM)',
    ],
    frequencyRecommendation: '4–6 sessions over 6–8 weeks; home program reinforced throughout',
    keyReferences: [
      'Stamm et al., 2002 - Joint protection and home hand exercises improve hand function in patients with hand osteoarthritis (Arthritis & Rheumatism)',
      'Valdes et al., 2013 - Client-centered occupational therapy for persons with osteoarthritis (Occupational Therapy in Health Care)',
      'Zhang et al., 2008 - EULAR recommendations for the management of hand osteoarthritis (Annals of the Rheumatic Diseases)',
    ],
    clinicalConsiderations:
      'Individuals with hip or knee OA benefit significantly from adaptive equipment (raised toilet seats, grab bars, long-handled tools) to reduce joint loading during transfers and self-care; home assessment is strongly recommended. Therapists should address fall risk, as pain-avoidance behaviors can alter gait and balance.',
  },
  {
    id: 'splinting-carpal-tunnel',
    name: 'Wrist Splinting for Carpal Tunnel Syndrome',
    conditionId: 'carpal-tunnel',
    evidenceLevel: 'strong',
    description:
      'Neutral wrist splinting reduces pressure within the carpal tunnel by maintaining the wrist in a position that minimizes median nerve compression. Nocturnal splinting is the most evidence-supported approach, with some evidence for full-time or activity-specific use in occupational contexts. Splints are typically prefabricated or custom-fabricated from thermoplastic material positioning the wrist in 0–2° of extension.',
    outcomeMeasures: [
      'Boston Carpal Tunnel Questionnaire (BCTQ)',
      'Symptom Severity Scale (SSS)',
      'Functional Status Scale (FSS)',
      'Nerve conduction study (NCS) parameters',
    ],
    frequencyRecommendation: 'Nocturnal wear nightly; full-time or activity-specific wear during symptomatic exacerbation; reassess at 4–6 weeks',
    keyReferences: [
      'Page et al., 2012 - Splinting for carpal tunnel syndrome (Cochrane Database)',
      'Bland, 2007 - Treatment of carpal tunnel syndrome (Muscle & Nerve)',
      'Walker et al., 2000 - Neutral wrist splinting in carpal tunnel syndrome (Arthritis Care & Research)',
    ],
    clinicalConsiderations:
      'Splinting is most effective in mild to moderate carpal tunnel syndrome confirmed by clinical and electrodiagnostic criteria; severe cases with thenar atrophy or denervation findings should be referred for surgical consultation. Occupational therapists should also conduct workstation and activity analysis to address contributing biomechanical risk factors.',
  },
  {
    id: 'tendon-gliding-carpal-tunnel',
    name: 'Tendon and Nerve Gliding Exercises for Carpal Tunnel Syndrome',
    conditionId: 'carpal-tunnel',
    evidenceLevel: 'moderate',
    description:
      'Tendon gliding and nerve gliding exercises aim to reduce adhesions and restore differential mobility of flexor tendons and the median nerve within the carpal tunnel, thereby decreasing mechanical irritation and improving symptom relief. Exercise sequences involve a series of hand positions that maximize tendon excursion or longitudinally stress the median nerve while minimizing provocative compression. These exercises are commonly prescribed as a home program adjunct to splinting or conservative management.',
    outcomeMeasures: [
      'Boston Carpal Tunnel Questionnaire (BCTQ)',
      'Grip strength (dynamometry)',
      'Pinch strength',
    ],
    frequencyRecommendation: '10 repetitions of each exercise, 3–5 times daily; reassessed at 4-week intervals',
    keyReferences: [
      'Akalin et al., 2002 - Treatment of carpal tunnel syndrome with nerve and tendon gliding exercises (American Journal of Physical Medicine and Rehabilitation)',
      'Rozmaryn et al., 1998 - Nerve and tendon gliding exercises and the conservative management of carpal tunnel syndrome (Journal of Hand Therapy)',
    ],
    clinicalConsiderations:
      'Nerve gliding should be performed gently and without pain provocation; aggressive neurodynamic mobilization can exacerbate neural inflammation. Exercises are contraindicated in the presence of active tenosynovitis without physician clearance.',
  },
  {
    id: 'sensory-integration-autism',
    name: 'Ayres Sensory Integration (ASI) Intervention for Autism Spectrum Disorder',
    conditionId: 'autism',
    evidenceLevel: 'moderate',
    description:
      'Ayres Sensory Integration intervention provides individualized sensory-motor experiences in a child-directed, play-based context to promote adaptive responses and improve sensory processing, praxis, and functional participation. The therapeutic environment includes suspended equipment, tactile media, and proprioceptive activities calibrated to each child\'s sensory profile. Intervention targets the neurological foundations underlying participation challenges rather than skill training directly.',
    outcomeMeasures: [
      'Sensory Processing Measure (SPM)',
      'Goal Attainment Scaling (GAS)',
      'Vineland Adaptive Behavior Scales (VABS)',
      'Canadian Occupational Performance Measure (COPM)',
    ],
    frequencyRecommendation: '2–3 sessions per week for 20–30 weeks for children 4–12 years; intensity adjusted by age and severity',
    keyReferences: [
      'Pfeiffer et al., 2011 - Sensory integration-based occupational therapy and its effect on self-stimulating behaviors (American Journal of Occupational Therapy)',
      'Parham et al., 2011 - Development of a fidelity measure for research on the effectiveness of the Ayres Sensory Integration intervention (American Journal of Occupational Therapy)',
      'Schaaf et al., 2014 - An intervention for sensory difficulties in children with autism: a randomized trial (Journal of Autism and Developmental Disorders)',
    ],
    clinicalConsiderations:
      'Fidelity to the ASI model requires specific training, certification, and a specialized clinic environment with appropriate suspended and sensory equipment. Therapists should differentiate ASI from other sensory-based interventions (e.g., sensory diet alone) and communicate clearly with families about the evidence base and expected outcomes.',
  },
  {
    id: 'cognitive-stimulation-dementia',
    name: 'Cognitive Stimulation Therapy (CST) for Dementia',
    conditionId: 'dementia',
    evidenceLevel: 'moderate',
    description:
      'Cognitive Stimulation Therapy is a structured group-based program that engages individuals with mild to moderate dementia in activities and discussions designed to stimulate thinking, concentration, and memory. Sessions incorporate reminiscence, sensory stimulation, word games, and creative activities in an affirming social environment. CST has demonstrated benefits comparable to cholinesterase inhibitor medication on cognitive outcomes and quality of life in clinical trials.',
    outcomeMeasures: [
      'Mini-Mental State Examination (MMSE)',
      'Alzheimer\'s Disease Assessment Scale - Cognitive Subscale (ADAS-Cog)',
      'Quality of Life - Alzheimer\'s Disease (QoL-AD)',
    ],
    frequencyRecommendation: '14 structured sessions over 7 weeks (2 sessions per week, 45 minutes each); maintenance CST may continue indefinitely',
    keyReferences: [
      'Spector et al., 2003 - Efficacy of an evidence-based cognitive stimulation therapy programme for people with dementia (British Journal of Psychiatry)',
      'Woods et al., 2012 - Cognitive stimulation to improve cognitive functioning in people with dementia (Cochrane Database)',
      'Orgeta et al., 2015 - Individual cognitive stimulation therapy for dementia (British Journal of Psychiatry)',
    ],
    clinicalConsiderations:
      'Group CST requires careful attention to group composition—matching participants by language, sensory ability, and cognitive level supports therapeutic rapport and equal participation. Individual adaptations may be necessary for persons with communication difficulties, significant behavioral symptoms, or in home-based settings.',
  },
  {
    id: 'occupational-engagement-dementia',
    name: 'Meaningful Occupation and Activity-Based Intervention for Dementia',
    conditionId: 'dementia',
    evidenceLevel: 'moderate',
    description:
      'Activity-based interventions for dementia use individualized, personally meaningful occupations to reduce behavioral and psychological symptoms (BPSD), improve mood, and support functional ability. Occupational therapists conduct life history interviews and collaborate with caregivers to identify and implement activities matched to the person\'s preserved abilities, interests, and identity. Structured activity programs reduce agitation, apathy, and depression while promoting dignity and quality of life.',
    outcomeMeasures: [
      'Pittsburgh Agitation Scale (PAS)',
      'Cornell Scale for Depression in Dementia (CSDD)',
      'Dementia Quality of Life Measure (DQOL)',
    ],
    frequencyRecommendation: 'Ongoing; minimum 1–2 structured activity sessions per day in care settings; caregiver training provided in 4–6 sessions',
    keyReferences: [
      'Gitlin et al., 2008 - Tailored activities to manage neuropsychiatric behaviors in persons with dementia and reduce caregiver burden (Journal of the American Geriatrics Society)',
      'Cohen-Mansfield et al., 2012 - The value of personal history in treating agitation in dementia (American Journal of Geriatric Psychiatry)',
    ],
    clinicalConsiderations:
      'Caregiver training in activity facilitation is essential because most meaningful occupation occurs outside of formal therapy sessions. Therapists must balance the individual\'s residual capacity with appropriate challenge to avoid frustration while maintaining engagement.',
  },
  {
    id: 'home-modification-hip-fracture',
    name: 'Home Assessment and Modification Following Hip Fracture',
    conditionId: 'hip-fracture',
    evidenceLevel: 'moderate',
    description:
      'Occupational therapist-led home assessment and environmental modification after hip fracture identifies and remediates hazards and barriers that increase fall risk and reduce safe independence with ADLs. Modifications include installation of grab bars, removal of loose rugs, improved lighting, and reorganization of frequently used items. Programs combine environmental modification with individualized instruction in adaptive techniques and appropriate use of assistive devices.',
    outcomeMeasures: [
      'Functional Independence Measure (FIM)',
      'Timed Up and Go (TUG)',
      'Falls Efficacy Scale - International (FES-I)',
      'COPM',
    ],
    frequencyRecommendation: '1–2 pre-discharge visits plus 1–3 post-discharge home visits within 2 weeks of discharge',
    keyReferences: [
      'Cumming et al., 1999 - Occupational therapy home visits reduced falls in an RCT (BMJ)',
      'Gitlin et al., 2006 - A randomized trial of a multicomponent home intervention to reduce functional difficulties in older adults (Journal of the American Geriatrics Society)',
      'Nikolaus & Bach, 2003 - Preventing falls in community-dwelling frail older people using a home intervention team (Journal of the American Geriatrics Society)',
    ],
    clinicalConsiderations:
      'Hip precautions (anterior or posterior approach) must be clearly communicated and integrated into all ADL and transfer training; equipment selection should reflect the specific surgical approach. Coordination with caregivers and community services is critical given the high rate of functional decline and re-hospitalization in the post-hip-fracture period.',
  },
  {
    id: 'hand-therapy-rotator-cuff',
    name: 'Postoperative Occupational Therapy for Rotator Cuff Repair',
    conditionId: 'rotator-cuff-injury',
    evidenceLevel: 'moderate',
    description:
      'Occupational therapy following rotator cuff repair focuses on restoring upper extremity function for ADL and occupational participation while adhering to surgeon-prescribed tissue healing precautions during the early phases of recovery. Therapists provide edema management, PROM and AAROM within protocol parameters, activity modification guidance, and adaptive equipment to maintain independence during sling immobilization. Progressive functional rehabilitation targets shoulder-dependent occupational performance as healing permits.',
    outcomeMeasures: [
      'American Shoulder and Elbow Surgeons Score (ASES)',
      'Disabilities of the Arm, Shoulder and Hand (DASH)',
      'Shoulder Pain and Disability Index (SPADI)',
    ],
    frequencyRecommendation: '2–3 sessions per week; phased from passive motion (weeks 0–6) through active-assisted (weeks 6–12) and strengthening phases (weeks 12+)',
    keyReferences: [
      'Klotz et al., 2016 - Postoperative rehabilitation after arthroscopic rotator cuff repair (Archives of Orthopaedic and Trauma Surgery)',
      'American Academy of Orthopaedic Surgeons, 2011 - Clinical Practice Guideline on Optimizing the Management of Rotator Cuff Problems',
    ],
    clinicalConsiderations:
      'Strict adherence to surgeon protocols is mandatory, as premature loading during the healing phase significantly increases re-tear rates. Therapists must assess and address the shoulder\'s impact on bilateral ADL performance, driving capacity, and work readiness, which are commonly overlooked in the postoperative period.',
  },
  {
    id: 'energy-conservation-copd',
    name: 'Energy Conservation and Breathing Strategy Training for COPD',
    conditionId: 'copd',
    evidenceLevel: 'moderate',
    description:
      'Energy conservation programs for COPD address dyspnea-related activity limitation by teaching techniques that reduce the oxygen cost of daily activities and enable sustained occupational participation. Interventions include pursed lip breathing during exertion, optimal positioning for dyspnea relief, activity pacing, prioritization strategies, and use of adaptive equipment such as rolling walkers and shower chairs. Occupational therapists address ADL, IADL, leisure, and work tasks within the context of the client\'s pulmonary limitation.',
    outcomeMeasures: [
      'Modified Medical Research Council (mMRC) Dyspnea Scale',
      'Canadian Occupational Performance Measure (COPM)',
      'COPD Assessment Test (CAT)',
      'Functional Independence Measure (FIM)',
    ],
    frequencyRecommendation: '6–8 sessions over 6–8 weeks, integrated within a multidisciplinary pulmonary rehabilitation program',
    keyReferences: [
      'Ries et al., 2007 - Pulmonary rehabilitation: joint ACCP/AACVPR evidence-based clinical practice guidelines (Chest)',
      'Sewell et al., 2006 - Occupational therapy within pulmonary rehabilitation: a systematic review',
      'Velloso & Jardim, 2006 - Functionality of patients with chronic obstructive pulmonary disease: energy conservation techniques (Journal of Bras Pneumologia)',
    ],
    clinicalConsiderations:
      'Therapists must monitor oxygen saturation (SpO2) during ADL performance and coordinate activity grading with pulmonary rehabilitation physician parameters. Anxiety related to breathlessness is a significant barrier to activity engagement and may require referral for psychological support alongside OT intervention.',
  },
  {
    id: 'neurodevelopmental-treatment-cp',
    name: 'Task-Specific Practice and Upper Extremity Training for Cerebral Palsy',
    conditionId: 'cerebral-palsy',
    evidenceLevel: 'moderate',
    description:
      'Contemporary upper extremity interventions for children with cerebral palsy prioritize intensive, goal-directed, task-specific practice over traditional neurodevelopmental treatment (NDT), reflecting the shift toward motor learning principles and neuroplasticity evidence. Hand-arm bimanual intensive therapy (HABIT) and modified CIMT are both supported as effective approaches for improving unimanual and bimanual hand function. Interventions are delivered in child-friendly, play-based contexts with goals identified collaboratively with families.',
    outcomeMeasures: [
      'Melbourne Assessment of Unilateral Upper Limb Function (MA2)',
      'Assisting Hand Assessment (AHA)',
      'Canadian Occupational Performance Measure (COPM)',
      'Pediatric Evaluation of Disability Inventory (PEDI)',
    ],
    frequencyRecommendation: 'Intensive format: 60–90 hours over 2–4 weeks; or distributed practice: 2–3 sessions per week for 12–16 weeks',
    keyReferences: [
      'Gordon et al., 2011 - Bimanual training and constraint-induced movement therapy in children with hemiplegic cerebral palsy (Neurorehabilitation and Neural Repair)',
      'Sakzewski et al., 2014 - Efficacy of upper limb therapies for unilateral cerebral palsy: a meta-analysis (Pediatrics)',
      'Boyd et al., 2010 - Recommendations for randomized controlled trials in upper limb CP: How do we improve quality and consistency? (Developmental Medicine & Child Neurology)',
    ],
    clinicalConsiderations:
      'Intervention intensity should be matched to the child\'s MACS level and capacity for participation; children with MACS levels IV–V may require greater emphasis on compensatory strategies and assistive technology. Family coaching and embedding goal-directed practice into daily routines are essential for extending therapeutic dosage beyond clinic sessions.',
  },
  {
    id: 'occupation-based-mdd',
    name: 'Occupation-Based Intervention and Behavioral Activation for Major Depressive Disorder',
    conditionId: 'major-depressive-disorder',
    evidenceLevel: 'moderate',
    description:
      'Occupational therapy for major depressive disorder uses a behavioral activation framework to systematically schedule and re-engage clients in meaningful, pleasurable, and mastery-oriented occupations that counteract the withdrawal and inactivity characteristic of depression. Therapists collaboratively identify valued roles and occupations, grade activity demands to match current functional capacity, and address occupational balance. Intervention targets the bidirectional relationship between occupation and mood to interrupt the cycle of avoidance and depressive symptom maintenance.',
    outcomeMeasures: [
      'Patient Health Questionnaire-9 (PHQ-9)',
      'Occupational Self Assessment (OSA)',
      'Canadian Occupational Performance Measure (COPM)',
      'World Health Organization Disability Assessment Schedule (WHODAS 2.0)',
    ],
    frequencyRecommendation: '6–12 weekly individual sessions; may be supplemented by group programming in inpatient or day program settings',
    keyReferences: [
      'Cuijpers et al., 2007 - Behavioral activation treatments of depression: a meta-analysis (Clinical Psychology Review)',
      'Edgelow & Krupa, 2011 - Randomized controlled pilot study of an occupational time-use intervention for people with serious mental illness (American Journal of Occupational Therapy)',
      'Moll et al., 2015 - Life skill interventions for people with mental illness (Cochrane Database)',
    ],
    clinicalConsiderations:
      'Activity grading is critical—introducing tasks that are too demanding early in treatment may reinforce feelings of failure and worsen depression. Suicidality and psychosocial risk should be assessed at each session, and therapists should maintain clear communication with the broader mental health team throughout intervention.',
  },
];
