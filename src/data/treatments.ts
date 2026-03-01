import { TreatmentTechnique } from '../types/index.js';

export const treatments: TreatmentTechnique[] = [
  {
    id: 'cimt',
    name: 'Constraint-Induced Movement Therapy',
    aliases: ['CIMT', 'forced-use therapy', 'constraint therapy'],
    approachTypes: ['remedial', 'neurodevelopmental'],
    description:
      'Constraint-Induced Movement Therapy involves restraining the unaffected upper extremity to encourage intensive use of the hemiparetic limb, promoting cortical reorganization and motor recovery. The approach is grounded in learned non-use theory and uses massed practice of functional tasks to drive neuroplastic change. Intensive repetitive task practice is conducted for several hours per day over a condensed treatment period.',
    indications: [
      'Hemiplegia or hemiparesis with at least 10 degrees of active wrist extension and 10 degrees of finger extension',
      'Learned non-use of an affected upper extremity following stroke or TBI',
      'Chronic upper extremity motor deficits with residual voluntary movement',
      'Client motivation and cognitive ability to participate in intensive massed practice',
    ],
    contraindications: [
      'Severe spasticity or contracture preventing any active movement in the affected limb',
      'Significant balance impairment or fall risk that would be worsened by restraining the unaffected arm',
      'Cognitive or behavioral impairments precluding participation in intensive structured practice',
    ],
    applicableConditionIds: ['stroke', 'tbi', 'cerebral-palsy'],
    ageGroups: ['pediatric', 'adolescent', 'adult'],
    settingNotes:
      'Most commonly delivered in outpatient rehabilitation settings with structured daily sessions; modified CIMT protocols have been adapted for pediatric and home-based contexts.',
  },
  {
    id: 'ndt-bobath',
    name: 'NDT/Bobath Approach',
    aliases: ['Neurodevelopmental Treatment', 'Bobath technique', 'NDT'],
    approachTypes: ['neurodevelopmental', 'remedial'],
    description:
      'The Neurodevelopmental Treatment/Bobath Approach uses hands-on facilitation and inhibition techniques to normalize tone, improve postural control, and facilitate functional movement patterns. The therapist uses key points of control to guide movement quality and reduce compensatory strategies that may reinforce abnormal patterns. It emphasizes the integration of normal movement into meaningful functional activities rather than isolated exercise.',
    indications: [
      'Abnormal muscle tone (hypertonia or hypotonia) affecting functional movement',
      'Impaired postural control and trunk stability following neurological injury',
      'Hemiplegia or diplegia with significant movement quality deficits',
      'Difficulty integrating affected limbs into bilateral functional tasks',
    ],
    contraindications: [
      'Severe medical instability or acute inflammatory conditions',
      'Lack of any active movement potential or intact neural substrate for facilitation',
      'Significant skin integrity issues or fractures at handling sites',
    ],
    applicableConditionIds: ['stroke', 'tbi', 'cerebral-palsy', 'multiple-sclerosis'],
    ageGroups: ['pediatric', 'adolescent', 'adult'],
    settingNotes:
      'Applied across inpatient, outpatient, and early intervention settings; particularly prominent in pediatric OT for cerebral palsy and in adult neurological rehabilitation units.',
  },
  {
    id: 'task-oriented-training',
    name: 'Task-Oriented Training',
    aliases: ['task-specific training', 'occupation-based practice', 'functional task practice'],
    approachTypes: ['remedial', 'neurodevelopmental'],
    description:
      'Task-Oriented Training uses repetitive, goal-directed practice of whole functional tasks to drive motor learning and neuroplastic recovery. The approach is based on motor learning principles, emphasizing variable practice, feedback, and progressive challenge within meaningful occupational contexts. Tasks are selected for their direct relevance to the client\'s roles and daily routines, maximizing transfer of skills.',
    indications: [
      'Motor learning deficits following neurological injury requiring reacquisition of functional skills',
      'Upper or lower extremity impairments limiting participation in activities of daily living',
      'Cognitive motivation supported by engagement in personally meaningful tasks',
      'Need for functional improvement in specific occupational performance areas',
      'Post-acute rehabilitation phase when client demonstrates sufficient active movement',
    ],
    contraindications: [
      'Acute medical instability preventing active participation in functional tasks',
      'Severe cognitive impairment preventing understanding or retention of task sequences',
      'Active inflammation or pain that would be exacerbated by repetitive task practice',
    ],
    applicableConditionIds: ['stroke', 'tbi', 'cerebral-palsy', 'multiple-sclerosis', 'parkinsons'],
    ageGroups: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    settingNotes:
      'Highly versatile and applicable across all OT practice settings; treatment is most effective when tasks are practiced in the actual environments where they will be performed.',
  },
  {
    id: 'sensory-integration',
    name: 'Sensory Integration Therapy',
    aliases: ['SI therapy', 'Ayres Sensory Integration', 'ASI'],
    approachTypes: ['sensory-based', 'neurodevelopmental'],
    description:
      'Sensory Integration Therapy, based on the work of A. Jean Ayres, provides controlled sensory experiences to improve the brain\'s ability to organize and interpret sensory information for adaptive responses. The approach uses a specially equipped environment with suspended equipment and tactile, proprioceptive, and vestibular activities tailored to the child\'s sensory processing profile. The therapist follows the child\'s lead within a playful, child-directed framework while providing the "just-right challenge."',
    indications: [
      'Sensory processing disorder or sensory modulation difficulties impacting daily function',
      'Dyspraxia or developmental coordination disorder affecting motor planning',
      'Gravitational insecurity or tactile defensiveness interfering with participation',
      'Autism spectrum disorder with significant sensory processing challenges',
      'Attention and behavioral regulation difficulties linked to sensory processing differences',
    ],
    contraindications: [
      'Active seizure disorder not well-controlled, particularly where vestibular input may be a trigger',
      'Significant cardiac or respiratory instability limiting tolerance for physical activity',
      'Severe behavioral dysregulation that cannot be managed safely in a clinic environment',
    ],
    applicableConditionIds: ['autism', 'cerebral-palsy', 'tbi'],
    ageGroups: ['pediatric', 'adolescent'],
    settingNotes:
      'Primarily delivered in specialized pediatric outpatient clinics equipped with sensory gyms; sensory-based strategies are also embedded into school-based and early intervention OT.',
  },
  {
    id: 'cbt-in-ot',
    name: 'CBT in Occupational Therapy',
    aliases: ['cognitive-behavioral therapy in OT', 'CBT-OT', 'cognitive-behavioral approach'],
    approachTypes: ['cognitive-behavioral', 'educational'],
    description:
      'Cognitive-Behavioral Therapy integrated into occupational therapy targets maladaptive thoughts, beliefs, and behaviors that limit occupational engagement and participation. OTs apply CBT principles such as thought records, behavioral activation, graded task assignment, and activity scheduling within the context of meaningful occupational roles and routines. This approach bridges psychological intervention with occupational performance outcomes.',
    indications: [
      'Depression, anxiety, or adjustment disorders impacting motivation and occupational engagement',
      'Fear-avoidance behaviors following injury, pain, or loss of function',
      'Low self-efficacy or catastrophizing beliefs interfering with rehabilitation participation',
      'Occupational disruption secondary to mental health conditions',
    ],
    contraindications: [
      'Active psychosis or severe cognitive impairment preventing engagement with abstract cognitive restructuring',
      'Crisis or acute suicidality requiring immediate psychiatric intervention rather than OT-led CBT',
      'Client refusal or lack of motivation to engage in a structured psychoeducational approach',
    ],
    applicableConditionIds: ['major-depressive-disorder', 'tbi', 'stroke', 'multiple-sclerosis', 'parkinsons'],
    ageGroups: ['adolescent', 'adult', 'geriatric'],
    settingNotes:
      'Delivered in mental health outpatient, community, and vocational rehabilitation settings; can be adapted for group or individual formats in psychosocial OT programs.',
  },
  {
    id: 'joint-protection',
    name: 'Joint Protection Techniques',
    aliases: ['joint protection education', 'joint preservation', 'arthritis self-management'],
    approachTypes: ['preventive', 'educational', 'compensatory'],
    description:
      'Joint Protection Techniques involve educating clients about principles and strategies to reduce mechanical stress on vulnerable joints during daily activities, thereby minimizing pain, inflammation, and structural damage. Core principles include respecting pain, using larger or stronger joints, avoiding positions of deformity, reducing effort through assistive devices, and balancing activity with rest. The approach empowers clients with self-management skills to maintain function and slow disease progression.',
    indications: [
      'Rheumatoid arthritis with active inflammation, joint deformity risk, or joint integrity concerns',
      'Osteoarthritis with pain and functional limitations in weight-bearing or hand joints',
      'Post-surgical joint replacement requiring movement precautions',
      'Hypermobility syndromes requiring protective movement strategies',
      'Inflammatory arthropathies requiring lifestyle modification to preserve joint health',
    ],
    contraindications: [
      'Conditions where rest rather than modified activity is the acute medical priority',
      'Cognitive impairment severe enough to prevent learning or applying new movement strategies',
    ],
    applicableConditionIds: ['rheumatoid-arthritis', 'osteoarthritis', 'carpal-tunnel'],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Delivered in outpatient rheumatology OT clinics, community health programs, and hand therapy settings; group-based joint protection programs have demonstrated strong evidence for rheumatoid arthritis populations.',
  },
  {
    id: 'splinting',
    name: 'Splinting/Orthotic Fabrication',
    aliases: ['orthotic fabrication', 'custom splinting', 'hand splinting'],
    approachTypes: ['biomechanical', 'preventive', 'remedial'],
    description:
      'Splinting and orthotic fabrication involves the custom design, fabrication, and fitting of thermoplastic or prefabricated orthoses to support, immobilize, correct, or position joints and soft tissues of the upper extremity. Orthoses may be static, static progressive, or dynamic depending on therapeutic goals such as pain relief, deformity prevention, post-surgical protection, or facilitation of functional movement. The OT selects appropriate materials, designs evidence-based patterns, and trains clients in orthosis management and skin care.',
    indications: [
      'Nerve compression syndromes such as carpal tunnel syndrome requiring positional support',
      'Post-surgical hand or wrist immobilization to protect repairs and support healing',
      'Spasticity management in the upper extremity to maintain tissue length and prevent contracture',
      'Rheumatoid arthritis joint deformity prevention or ulnar drift correction',
      'Tendon injury management requiring controlled mobilization protocols',
    ],
    contraindications: [
      'Active skin breakdown, open wounds, or infection at the orthosis application site',
      'Severe edema that has not been addressed and may be worsened by compression from the orthosis',
      'Circulatory compromise or sensory loss requiring extreme caution to prevent pressure injury',
    ],
    applicableConditionIds: ['carpal-tunnel', 'rheumatoid-arthritis', 'stroke', 'cerebral-palsy', 'rotator-cuff-injury'],
    ageGroups: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    settingNotes:
      'Custom fabrication occurs primarily in hand therapy and outpatient OT clinics; inpatient settings commonly use prefabricated orthoses with OT training on correct application and wear schedules.',
  },
  {
    id: 'adaptive-equipment',
    name: 'Adaptive Equipment Training',
    aliases: ['assistive technology training', 'AT training', 'adaptive device training'],
    approachTypes: ['compensatory', 'adaptive'],
    description:
      'Adaptive Equipment Training involves the evaluation, recommendation, procurement, and systematic training of clients in the use of assistive devices and adaptive tools to enhance independence in daily occupations. Equipment may range from low-tech aids such as built-up handles and button hooks to high-tech devices such as electronic aids to daily living and voice-activated systems. The OT matches device features to client capabilities, conducts trials, trains the client and caregivers, and monitors outcomes.',
    indications: [
      'Functional limitations in activities of daily living due to motor, sensory, or cognitive impairments',
      'Upper extremity weakness, limited range of motion, or coordination deficits affecting self-care',
      'Progressive conditions where compensation for declining function is the primary goal',
      'Need to maximize independence while reducing caregiver burden',
      'Fatigue or pain that limits duration of functional task performance',
    ],
    contraindications: [
      'Client or caregiver refusal or inability to learn to use the recommended device safely',
      'Environmental or funding barriers that cannot be resolved to support practical device use',
    ],
    applicableConditionIds: [
      'stroke',
      'tbi',
      'spinal-cord-injury',
      'multiple-sclerosis',
      'parkinsons',
      'rheumatoid-arthritis',
      'osteoarthritis',
      'dementia',
    ],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Provided across all OT settings including acute, inpatient rehabilitation, outpatient, home health, and long-term care; home visits are often essential for evaluating real-world equipment fit and function.',
  },
  {
    id: 'energy-conservation',
    name: 'Energy Conservation Techniques',
    aliases: ['work simplification', 'pacing strategies', 'fatigue management'],
    approachTypes: ['compensatory', 'adaptive', 'educational'],
    description:
      'Energy Conservation Techniques provide clients with strategies to reduce fatigue, optimize energy expenditure, and sustain participation in meaningful occupations throughout the day. Core strategies include activity pacing, prioritization, rest breaks, modification of task methods, environmental reorganization, and use of adaptive equipment to minimize effort. The approach draws on occupational analysis to redistribute task demands relative to the client\'s available energy envelope.',
    indications: [
      'Chronic fatigue related to multiple sclerosis, COPD, cardiac conditions, or cancer',
      'Post-viral fatigue or post-COVID syndrome affecting daily activity tolerance',
      'Activity-limiting dyspnea requiring breathing-coordinated movement strategies',
      'Arthritis or other musculoskeletal conditions where pain and fatigue limit activity duration',
      'Post-surgical or post-acute deconditioning requiring gradual return to activity',
    ],
    contraindications: [
      'Acute decompensation of cardiac or respiratory conditions requiring medical stabilization before activity modification',
      'Conditions where increasing rather than conserving activity is the therapeutic priority',
    ],
    applicableConditionIds: ['multiple-sclerosis', 'copd', 'rheumatoid-arthritis', 'parkinsons', 'osteoarthritis'],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Delivered in outpatient, pulmonary rehabilitation, cardiac rehabilitation, and home health settings; group-based energy conservation programs are particularly effective for chronic disease management.',
  },
  {
    id: 'home-modification',
    name: 'Home Modification',
    aliases: ['environmental modification', 'home adaptation', 'aging-in-place modification'],
    approachTypes: ['preventive', 'compensatory', 'adaptive'],
    description:
      'Home Modification involves the comprehensive assessment of the physical home environment and the implementation of structural or equipment-based changes to reduce hazards, support independence, and enable safe occupational performance within the client\'s own home. Modifications range from simple changes such as removing throw rugs and improving lighting to complex structural adaptations such as installing grab bars, ramps, widened doorways, or roll-in showers. The OT conducts person-environment-occupation analysis to ensure modifications match the client\'s functional profile and occupational goals.',
    indications: [
      'Fall risk or history of falls in the home environment',
      'Reduced mobility, strength, or balance limiting safe navigation of the home',
      'Wheelchair or walking aid use requiring accessible pathways and entry points',
      'Progressive neurological or orthopedic conditions requiring proactive environmental adaptation',
      'Discharge planning following inpatient rehabilitation requiring safe home setup',
    ],
    contraindications: [
      'Client or family refusal of assessment or modification recommendations',
      'Rental or ownership barriers preventing structural modifications without landlord consent',
    ],
    applicableConditionIds: [
      'stroke',
      'tbi',
      'spinal-cord-injury',
      'multiple-sclerosis',
      'parkinsons',
      'osteoarthritis',
      'hip-fracture',
      'dementia',
    ],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Home visits are the gold standard for accurate environmental assessment; OTs may collaborate with contractors, occupational therapist assistants, and community occupational therapy programs to implement modifications.',
  },
  {
    id: 'mirror-therapy',
    name: 'Mirror Therapy',
    aliases: ['mirror visual feedback', 'MVF', 'mirror box therapy'],
    approachTypes: ['remedial', 'neurodevelopmental', 'sensory-based'],
    description:
      'Mirror Therapy uses a mirror placed in the midsagittal plane to create a visual illusion that the affected limb is moving normally, stimulating cortical motor and sensory areas through visual feedback. During therapy, the client performs movements with the unaffected limb while observing the mirror reflection, which appears as movement of the affected side, facilitating neuroplastic changes in motor cortex representation. The approach has demonstrated efficacy for both motor recovery and neuropathic pain conditions such as complex regional pain syndrome.',
    indications: [
      'Upper extremity hemiplegia or paresis following stroke with limited active movement',
      'Complex regional pain syndrome or phantom limb pain requiring cortical reorganization',
      'Neglect or reduced awareness of the affected upper extremity',
      'Post-stroke upper limb pain or allodynia',
    ],
    contraindications: [
      'Severe visual impairment or visual field deficits preventing perception of the mirror reflection',
      'Cognitive impairment preventing understanding of the mirror illusion and required participation',
      'Active wound, cast, or dressing on the unaffected limb used for mirror movement',
    ],
    applicableConditionIds: ['stroke', 'tbi', 'spinal-cord-injury'],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Can be delivered in inpatient, outpatient, and home settings with minimal equipment; mirror boxes are inexpensive and portable, making this approach feasible for home exercise program integration.',
  },
  {
    id: 'therapeutic-exercise',
    name: 'Therapeutic Exercise/ROM',
    aliases: ['range of motion exercise', 'strengthening exercise', 'therapeutic movement'],
    approachTypes: ['remedial', 'biomechanical', 'preventive'],
    description:
      'Therapeutic Exercise and Range of Motion programs encompass a spectrum of active, active-assistive, and passive movements designed to maintain or restore joint mobility, muscle strength, endurance, and neuromuscular coordination necessary for occupational performance. OTs design individualized programs targeting specific upper extremity impairments and integrate these into functional task practice to maximize occupational relevance. Progressive resistance, stretching, and coordination exercises are graded to challenge the client appropriately without causing harm.',
    indications: [
      'Joint stiffness or contracture risk following immobilization, injury, or neurological event',
      'Upper extremity weakness or deconditioning limiting participation in self-care and work tasks',
      'Post-surgical rehabilitation requiring protected or progressive range of motion protocols',
      'Rotator cuff or shoulder pathology requiring structured strengthening and mobility restoration',
      'Neurological conditions with spasticity or rigidity requiring targeted movement to maintain range',
    ],
    contraindications: [
      'Acute fracture or unstable bony injury where movement is medically contraindicated',
      'Acute inflammatory flare in joints where exercise would exacerbate inflammation and pain',
      'Active infection, thrombosis, or other acute vascular conditions at the target extremity',
    ],
    applicableConditionIds: [
      'stroke',
      'tbi',
      'rotator-cuff-injury',
      'rheumatoid-arthritis',
      'osteoarthritis',
      'spinal-cord-injury',
      'multiple-sclerosis',
    ],
    ageGroups: ['adolescent', 'adult', 'geriatric'],
    settingNotes:
      'Applicable across acute, inpatient, outpatient, and home health settings; home exercise programs are a critical extension of clinic-based therapeutic exercise to reinforce gains and promote carryover.',
  },
  {
    id: 'graded-motor-imagery',
    name: 'Graded Motor Imagery',
    aliases: ['GMI', 'motor imagery training', 'left-right discrimination training'],
    approachTypes: ['remedial', 'cognitive-behavioral', 'neurodevelopmental'],
    description:
      'Graded Motor Imagery is a sequential three-stage treatment approach targeting cortical reorganization in chronic pain and movement disorders, progressing through left-right limb discrimination, explicit motor imagery, and mirror therapy. The graduated sequence is designed to sequentially activate motor cortex networks without triggering pain responses, progressively loading the cortical representation of the affected body part. It is particularly indicated for complex regional pain syndrome and chronic post-surgical pain where direct movement practice has been unsuccessful.',
    indications: [
      'Complex regional pain syndrome with allodynia and movement-evoked pain',
      'Phantom limb pain following amputation',
      'Chronic post-stroke pain with cortical sensitization',
      'Persistent neuropathic pain following peripheral nerve injury',
    ],
    contraindications: [
      'Inability to mentally visualize limb movement due to severe cognitive impairment or anosognosia',
      'Acute inflammatory or infectious process requiring medical treatment before pain rehabilitation',
      'Psychological conditions such as severe anxiety or dissociation that interfere with imagery tasks',
    ],
    applicableConditionIds: ['stroke', 'tbi', 'spinal-cord-injury'],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Typically delivered in pain management or outpatient OT settings as part of a broader pain rehabilitation program; online and app-based GMI programs have extended access to home-based delivery.',
  },
  {
    id: 'cognitive-rehab',
    name: 'Cognitive Rehabilitation',
    aliases: ['cognitive retraining', 'neurocognitive rehabilitation', 'cognitive skills training'],
    approachTypes: ['remedial', 'compensatory', 'adaptive'],
    description:
      'Cognitive Rehabilitation encompasses remedial and compensatory strategies to address deficits in attention, memory, executive function, processing speed, and other cognitive domains that affect occupational performance. Remedial approaches use structured cognitive exercises to retrain specific processing capacities, while compensatory strategies teach clients to use external aids, environmental modifications, and routine structures to manage cognitive limitations. Intervention is embedded in functional tasks to ensure skill generalization to daily life.',
    indications: [
      'Attention, memory, or executive function deficits following TBI or stroke affecting daily activities',
      'Progressive cognitive decline in dementia requiring compensatory strategy training for maintained independence',
      'Neuropsychiatric conditions affecting organizational skills, planning, and task initiation',
      'Post-acute cognitive impairments limiting return to work, driving, or independent living',
      'Medication or treatment-related cognitive changes in oncology or chronic disease populations',
    ],
    contraindications: [
      'Severe agitation or behavioral dysregulation preventing participation in structured cognitive tasks',
      'End-stage dementia where the focus shifts entirely to quality of life and comfort rather than retraining',
    ],
    applicableConditionIds: ['tbi', 'stroke', 'dementia', 'multiple-sclerosis', 'parkinsons'],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Delivered in inpatient rehabilitation, outpatient neurorehabilitation, memory clinics, and community settings; collaboration with neuropsychology is recommended for formal cognitive assessment to guide intervention planning.',
  },
  {
    id: 'group-therapy',
    name: 'Group Therapy/Social Skills Training',
    aliases: ['social skills group', 'psychosocial group', 'occupational therapy group'],
    approachTypes: ['educational', 'cognitive-behavioral', 'remedial'],
    description:
      'Group Therapy in occupational therapy harnesses the therapeutic potential of group dynamics to facilitate social skill development, peer learning, role practice, and occupational engagement within a socially supportive context. OT-led groups address pragmatic communication, emotional regulation, perspective-taking, conflict resolution, and participation in group occupations for clients with social and behavioral challenges. The group format also provides cost-effective delivery of psychoeducational content and normalizes shared experiences among participants.',
    indications: [
      'Autism spectrum disorder with social communication and pragmatic language challenges',
      'Social isolation or withdrawal secondary to mental health conditions or acquired disability',
      'Social skill deficits following TBI affecting reintegration into community and workplace roles',
      'Need for peer support and shared learning in chronic disease self-management',
    ],
    contraindications: [
      'Active psychosis, severe aggression, or behavioral dysregulation that poses a safety risk to other group members',
      'Infectious conditions requiring isolation that preclude participation in group settings',
      'Social anxiety or trauma history so severe that group exposure would cause significant psychological harm before individual preparation',
    ],
    applicableConditionIds: ['autism', 'tbi', 'stroke', 'major-depressive-disorder', 'dementia'],
    ageGroups: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    settingNotes:
      'Delivered in mental health settings, community centers, schools, and outpatient rehabilitation; school-based social skills groups for children with autism are among the most established group OT programs.',
  },
  {
    id: 'hand-therapy',
    name: 'Hand Therapy',
    aliases: ['upper extremity rehabilitation', 'hand rehabilitation', 'UE therapy'],
    approachTypes: ['biomechanical', 'remedial', 'preventive'],
    description:
      'Hand Therapy is a specialty practice area of occupational therapy focused on the evaluation and rehabilitation of conditions affecting the hand, wrist, and upper extremity, encompassing both conservative and post-surgical management. OTs with hand therapy expertise apply advanced skills in wound care, edema management, scar management, orthotic fabrication, therapeutic exercise, sensory re-education, and functional activity grading. The goal is to restore optimal hand function for occupational performance including self-care, work, and leisure activities.',
    indications: [
      'Peripheral nerve injuries including median, ulnar, or radial nerve lacerations or compression neuropathies',
      'Tendon repairs requiring controlled early mobilization protocols to prevent adhesions',
      'Hand fractures and dislocations in post-immobilization rehabilitation phase',
      'Carpal tunnel syndrome and other nerve entrapment syndromes',
      'Dupuytren\'s contracture, trigger finger, or other hand pathologies affecting grip and pinch',
    ],
    contraindications: [
      'Active infection of the hand or upper extremity requiring medical treatment before rehabilitation',
      'Severe vascular compromise that contraindicates therapeutic exercise or compression',
      'Unstabilized fractures or repairs requiring extended immobilization before mobilization begins',
    ],
    applicableConditionIds: ['carpal-tunnel', 'rheumatoid-arthritis', 'osteoarthritis', 'rotator-cuff-injury', 'stroke'],
    ageGroups: ['adolescent', 'adult', 'geriatric'],
    settingNotes:
      'Primarily delivered in specialized hand therapy outpatient clinics, often within hand surgery practices; CHT (Certified Hand Therapist) credentialing recognizes advanced clinical expertise in this specialty area.',
  },
  {
    id: 'wheelchair-seating',
    name: 'Wheelchair Seating & Positioning',
    aliases: ['seating and positioning', 'wheelchair assessment', 'power mobility evaluation'],
    approachTypes: ['adaptive', 'preventive', 'compensatory'],
    description:
      'Wheelchair Seating and Positioning involves the comprehensive evaluation of a client\'s postural, functional, and medical needs to prescribe, configure, and train in the optimal wheelchair and seating system for community mobility and occupational participation. OTs assess postural tone, skin integrity, upper extremity reach, respiratory function, and propulsion capacity to determine appropriate wheelchair type, cushion, back support, and positioning components. Proper seating prevents pressure injuries, scoliosis, pain, and respiratory compromise while maximizing functional independence.',
    indications: [
      'Spinal cord injury requiring full-time wheelchair use with individualized seating prescription',
      'Progressive neurological conditions such as multiple sclerosis or ALS with declining postural control',
      'Cerebral palsy with postural deformity requiring specialized seating for function and comfort',
      'Geriatric clients with mobility limitations requiring safe and pressure-relieving seated positioning',
      'Power mobility needs assessment for clients with insufficient manual propulsion capability',
    ],
    contraindications: [
      'Active pressure injury that requires a specialized protocol or mattress-based positioning rather than wheelchair seating',
      'Medical instability preventing upright seated positioning for evaluation',
    ],
    applicableConditionIds: [
      'spinal-cord-injury',
      'cerebral-palsy',
      'multiple-sclerosis',
      'stroke',
      'tbi',
      'hip-fracture',
    ],
    ageGroups: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    settingNotes:
      'Complex rehabilitation technology assessments are conducted in outpatient seating clinics or during inpatient rehabilitation; OTs work with ATP (Assistive Technology Professional)-credentialed vendors for equipment trial and fitting.',
  },
  {
    id: 'falls-prevention',
    name: 'Falls Prevention Program',
    aliases: ['fall risk reduction', 'balance training program', 'falls prevention OT'],
    approachTypes: ['preventive', 'educational', 'adaptive'],
    description:
      'Falls Prevention Programs in occupational therapy address the multifactorial contributors to fall risk through comprehensive assessment and targeted intervention addressing intrinsic factors such as balance, cognition, medication management, and vision, as well as extrinsic factors such as home hazards and footwear. OTs administer standardized fall risk assessments, conduct home hazard evaluations, and deliver individualized or group-based interventions including balance and strengthening exercise, home modification, assistive device training, and fall recovery training. The approach integrates the client\'s occupational goals to ensure falls prevention strategies are incorporated into daily routines.',
    indications: [
      'History of one or more falls in the past year or expressed fear of falling',
      'Balance impairment, lower extremity weakness, or gait dysfunction identified on standardized assessment',
      'Polypharmacy or psychoactive medications increasing fall risk in older adults',
      'Environmental hazards in the home identified during occupational profile or home visit',
      'Parkinson\'s disease, hip fracture, stroke, or other diagnoses with established fall risk elevation',
    ],
    contraindications: [
      'Acute fracture or orthopedic injury requiring weight-bearing restrictions before balance training commences',
      'Severe cardiovascular instability or uncontrolled arrhythmia contraindicating exercise-based intervention',
    ],
    applicableConditionIds: [
      'parkinsons',
      'hip-fracture',
      'stroke',
      'multiple-sclerosis',
      'osteoarthritis',
      'dementia',
      'copd',
    ],
    ageGroups: ['adult', 'geriatric'],
    settingNotes:
      'Delivered in outpatient OT, home health, community aging programs, and assisted living facilities; evidence-based group programs such as Otago and Stepping On are frequently co-facilitated by OTs in community settings.',
  },
];
