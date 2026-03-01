import { Assessment } from '../types/index.js';

export const assessments: Assessment[] = [
  {
    id: 'fim',
    name: 'Functional Independence Measure',
    aliases: ['FIM instrument', 'WeeFIM (pediatric version)'],
    acronym: 'FIM',
    domains: ['adl', 'iadl', 'motor', 'cognitive'],
    description:
      'The Functional Independence Measure is an 18-item clinician-rated scale that assesses the level of assistance required for a person to perform basic life activities safely and effectively. It covers motor tasks (self-care, sphincter control, transfers, locomotion) and cognitive tasks (communication, social cognition). Scores range from 18 (total dependence) to 126 (complete independence).',
    purpose:
      'To quantify the burden of care associated with disability and track functional change over the course of rehabilitation. It is widely used to measure rehabilitation outcomes and predict discharge destination.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '30-45 minutes',
    scoringMethod:
      'Each of the 18 items is rated on a 7-point ordinal scale (1 = total assistance, 7 = complete independence). Motor subscale scores range from 13–91 and cognitive subscale scores from 5–35, with a total score of 18–126.',
    applicableConditionIds: [
      'stroke',
      'tbi',
      'spinal-cord-injury',
      'multiple-sclerosis',
      'hip-fracture',
    ],
    strengthsAndLimitations:
      'The FIM has strong psychometric properties including high inter-rater reliability and is the most widely used functional assessment in inpatient rehabilitation settings. It is sensitive to change across a wide range of disability levels and is used for benchmarking across rehabilitation facilities. However, it exhibits ceiling effects in higher-functioning populations and floor effects in very low-functioning patients, and it does not capture community-level functioning or quality of life.',
  },
  {
    id: 'copm',
    name: 'Canadian Occupational Performance Measure',
    aliases: ['COPM', 'Canadian Occupational Performance Measure interview'],
    acronym: 'COPM',
    domains: ['adl', 'iadl', 'functional-performance', 'psychosocial'],
    description:
      'The Canadian Occupational Performance Measure is a client-centered, semi-structured interview-based outcome measure designed to detect self-perceived change in occupational performance over time. Clients identify occupational performance problems in self-care, productivity, and leisure, then rate their performance and satisfaction with that performance on a 10-point scale. It is grounded in the Canadian Model of Occupational Performance and Engagement (CMOP-E).',
    purpose:
      'To identify occupational performance issues of concern to the client, establish individualized therapy goals, and measure client-perceived change in performance and satisfaction following intervention. It serves as both an assessment and an outcome measure.',
    populationApplicability: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    administrationTime: '20-40 minutes',
    scoringMethod:
      'Clients rate up to five identified problem areas on two 10-point scales: Performance (1 = not able to do it, 10 = able to do it extremely well) and Satisfaction (1 = not satisfied at all, 10 = extremely satisfied). Mean scores for each scale are calculated and compared across assessment points; a change of 2 or more points is considered clinically significant.',
    applicableConditionIds: [
      'stroke',
      'tbi',
      'multiple-sclerosis',
      'parkinsons',
      'rheumatoid-arthritis',
      'osteoarthritis',
      'cerebral-palsy',
      'autism',
      'dementia',
      'major-depressive-disorder',
      'copd',
    ],
    strengthsAndLimitations:
      'The COPM is highly client-centered and captures outcomes meaningful to the individual, which enhances motivation and therapeutic alliance. It is applicable across diagnoses, age groups, and practice settings, and has strong content validity and responsiveness to change. Limitations include reliance on self-report, which may be affected by cognitive or communication impairments, and the subjective nature of scoring can reduce inter-rater consistency.',
  },
  {
    id: 'barthel-index',
    name: 'Barthel Index',
    aliases: ['Barthel ADL Index', 'Modified Barthel Index', 'MBI'],
    acronym: null,
    domains: ['adl', 'functional-performance'],
    description:
      'The Barthel Index is a 10-item ordinal scale that measures a patient\'s performance in basic activities of daily living, including feeding, bathing, grooming, dressing, bowel control, bladder control, toileting, chair transfer, ambulation, and stair climbing. It was originally developed in 1965 for use with patients with neuromuscular and musculoskeletal disorders undergoing rehabilitation. Total scores range from 0 (complete dependence) to 100 (complete independence).',
    purpose:
      'To assess functional independence in ADLs and monitor change in functional status over the course of rehabilitation or disease progression. It is commonly used to determine discharge readiness and predict long-term outcomes after stroke.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '5-10 minutes',
    scoringMethod:
      'Each of the 10 items is scored using a weighted ordinal scale with values of 0, 5, 10, or 15 depending on the item, yielding a total score from 0–100. Scores of 0–20 indicate total dependence, 21–60 severe dependence, 61–90 moderate dependence, 91–99 slight dependence, and 100 full independence.',
    applicableConditionIds: [
      'stroke',
      'tbi',
      'spinal-cord-injury',
      'multiple-sclerosis',
      'parkinsons',
      'hip-fracture',
    ],
    strengthsAndLimitations:
      'The Barthel Index is quick to administer, widely validated, and has been used extensively in stroke rehabilitation research and clinical practice worldwide. It has good reliability and predictive validity for discharge destination and long-term survival. However, it demonstrates ceiling effects in mildly impaired populations and does not assess instrumental ADLs, quality of performance, or community functioning.',
  },
  {
    id: 'moca',
    name: 'Montreal Cognitive Assessment',
    aliases: ['MoCA', 'MoCA-Basic', 'Montreal Cognitive Assessment Basic'],
    acronym: 'MoCA',
    domains: ['cognitive'],
    description:
      'The Montreal Cognitive Assessment is a 30-item cognitive screening tool that assesses multiple cognitive domains including visuospatial/executive function, naming, memory, attention, language, abstraction, delayed recall, and orientation. It was designed to detect mild cognitive impairment (MCI) and early dementia and is more sensitive than the MMSE for detecting MCI. Administration involves both verbal and written tasks performed with paper and pencil.',
    purpose:
      'To screen for mild cognitive impairment and dementia, and to detect cognitive deficits that may affect occupational performance and safety in daily life. It helps guide referrals for comprehensive neuropsychological evaluation and informs occupational therapy intervention planning.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '10-15 minutes',
    scoringMethod:
      'Items are scored as correct or incorrect, with a maximum total score of 30. A score of 26 or above is considered normal; one point is added for individuals with 12 or fewer years of formal education. Scores below 26 suggest possible cognitive impairment warranting further assessment.',
    applicableConditionIds: [
      'stroke',
      'tbi',
      'parkinsons',
      'dementia',
      'multiple-sclerosis',
    ],
    strengthsAndLimitations:
      'The MoCA has superior sensitivity to the MMSE for detecting mild cognitive impairment and has been validated across multiple languages and cultural adaptations. It covers a broader range of cognitive domains including executive function, which is frequently impaired following acquired brain injury. Limitations include some influence of education and cultural background on scores, and it is a screening tool only and cannot replace comprehensive neuropsychological assessment.',
  },
  {
    id: 'mmse',
    name: 'Mini-Mental State Examination',
    aliases: ['Folstein MMSE', 'Folstein Mini-Mental State Examination', 'MMSE-2'],
    acronym: 'MMSE',
    domains: ['cognitive'],
    description:
      'The Mini-Mental State Examination is a 30-point clinician-administered cognitive screening instrument that assesses orientation, registration, attention and calculation, recall, language, and visuospatial ability. Developed by Folstein and colleagues in 1975, it remains one of the most widely used cognitive screening tools in clinical and research settings. It is administered verbally with brief written and motor tasks.',
    purpose:
      'To detect the presence and severity of cognitive impairment and to track cognitive change over time in individuals with conditions such as dementia, delirium, or acquired brain injury. It helps occupational therapists determine the potential impact of cognitive deficits on functional independence and safety.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '5-10 minutes',
    scoringMethod:
      'Items are scored as pass/fail, summed to a maximum of 30 points. Score ranges are typically interpreted as: 24–30 = no impairment, 18–23 = mild impairment, 12–17 = moderate impairment, and below 12 = severe impairment. Scores should be interpreted in the context of education, age, and cultural background.',
    applicableConditionIds: [
      'dementia',
      'stroke',
      'tbi',
      'parkinsons',
      'multiple-sclerosis',
    ],
    strengthsAndLimitations:
      'The MMSE is extremely well-established, with extensive normative data across age, education, and language groups, and is widely accepted in both clinical and medico-legal contexts. It is brief, easy to administer, and requires no specialized training. However, it has poor sensitivity for mild cognitive impairment compared to the MoCA, demonstrates ceiling effects in educated populations, and has limited assessment of executive function and processing speed.',
  },
  {
    id: 'berg-balance',
    name: 'Berg Balance Scale',
    aliases: ['BBS', 'Berg Balance Test'],
    acronym: 'BBS',
    domains: ['balance', 'functional-performance', 'motor'],
    description:
      'The Berg Balance Scale is a 14-item performance-based assessment of static and dynamic balance abilities in adults. Tasks progress from sitting unsupported to single-leg standing, encompassing functional mobility activities such as sit-to-stand transfers, turning 360 degrees, and tandem stance. It is one of the most widely used and validated balance assessments in clinical rehabilitation.',
    purpose:
      'To assess balance impairment, fall risk, and functional mobility in older adults and individuals with neurological or musculoskeletal conditions. It guides intervention planning and monitors response to balance and mobility rehabilitation programs.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '15-20 minutes',
    scoringMethod:
      'Each of the 14 items is scored on a 5-point ordinal scale (0–4), with a maximum total score of 56. Scores of 41–56 indicate low fall risk, 21–40 indicate medium fall risk, and 0–20 indicate high fall risk. A score below 45 is commonly used as a clinical cutoff to identify fall risk.',
    applicableConditionIds: [
      'stroke',
      'tbi',
      'multiple-sclerosis',
      'parkinsons',
      'hip-fracture',
      'spinal-cord-injury',
    ],
    strengthsAndLimitations:
      'The Berg Balance Scale has excellent psychometric properties including high inter-rater reliability, concurrent validity with other balance measures, and predictive validity for falls in community-dwelling older adults. It is well-validated across many neurological and orthopedic conditions and requires minimal equipment. However, it demonstrates ceiling effects in higher-functioning individuals and does not capture balance in dynamic conditions such as walking on uneven terrain or dual-task performance.',
  },
  {
    id: 'box-and-block',
    name: 'Box and Block Test',
    aliases: ['BBT', 'Box and Block Test of Manual Dexterity'],
    acronym: 'BBT',
    domains: ['upper-extremity', 'motor', 'functional-performance'],
    description:
      'The Box and Block Test is a standardized, norm-referenced assessment of unilateral gross manual dexterity. The client is asked to move small wooden blocks one at a time from one compartment of a box to another as quickly as possible within a 60-second period. It was originally developed for individuals with cerebral palsy and has since been validated across a wide range of adult populations.',
    purpose:
      'To measure gross manual dexterity and monitor upper extremity functional recovery following injury or neurological events. It provides a quick, objective measure of hand function that is sensitive to change with rehabilitation intervention.',
    populationApplicability: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    administrationTime: '5-10 minutes',
    scoringMethod:
      'The score is the number of blocks transferred in 60 seconds for each hand separately. Normative data are available stratified by age and sex for adults, and separate norms exist for children. Higher scores indicate better manual dexterity.',
    applicableConditionIds: [
      'stroke',
      'tbi',
      'spinal-cord-injury',
      'multiple-sclerosis',
      'cerebral-palsy',
    ],
    strengthsAndLimitations:
      'The Box and Block Test is quick, inexpensive, easy to administer, and has strong inter-rater and test-retest reliability with well-established normative data for multiple populations. It is sensitive to change in gross manual dexterity across a range of diagnoses. However, it only measures gross dexterity and does not assess fine motor coordination, grip strength, or the quality of movement, and may not reflect functional hand use in everyday tasks.',
  },
  {
    id: 'nine-hole-peg',
    name: 'Nine-Hole Peg Test',
    aliases: ['9HPT', 'Nine-Hole Peg Test of Finger Dexterity', 'NHPT'],
    acronym: '9HPT',
    domains: ['upper-extremity', 'motor', 'functional-performance'],
    description:
      'The Nine-Hole Peg Test is a brief, standardized assessment of finger dexterity in which the client places nine pegs into nine holes in a pegboard and then removes them as quickly as possible. The test is administered for each hand separately and the time to completion is recorded. It is widely used in neurological rehabilitation to assess fine motor function.',
    purpose:
      'To assess finger dexterity and fine motor coordination in individuals with neurological or musculoskeletal conditions affecting upper extremity function. It is used to detect deficits, monitor disease progression, and evaluate treatment outcomes.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '5 minutes',
    scoringMethod:
      'The score is the time in seconds to complete each trial for each hand; faster times indicate better performance. Scores are compared to normative data stratified by age and sex. In multiple sclerosis research, a 20% worsening from baseline is considered clinically significant.',
    applicableConditionIds: [
      'stroke',
      'multiple-sclerosis',
      'parkinsons',
      'rheumatoid-arthritis',
      'carpal-tunnel',
      'rotator-cuff-injury',
    ],
    strengthsAndLimitations:
      'The Nine-Hole Peg Test has strong reliability and validity across multiple neurological conditions and is included as part of the Multiple Sclerosis Functional Composite, enhancing its credibility in clinical trials. It is brief, inexpensive, and sensitive to subtle changes in fine motor function. Limitations include the fact that the test captures speed but not quality of movement, and normative values may not adequately represent all cultural and demographic groups.',
  },
  {
    id: 'sensory-profile',
    name: 'Sensory Profile',
    aliases: [
      'Dunn Sensory Profile',
      'Adolescent/Adult Sensory Profile',
      'Infant/Toddler Sensory Profile',
    ],
    acronym: null,
    domains: ['sensory', 'psychosocial', 'functional-performance'],
    description:
      'The Sensory Profile is a family of caregiver-report and self-report questionnaires developed by Winnie Dunn that measure sensory processing patterns and their effect on functional performance across daily life. It is based on Dunn\'s Model of Sensory Processing, which identifies four quadrant-based processing patterns: Low Registration, Sensation Seeking, Sensory Sensitivity, and Sensation Avoiding. Versions are available for infants/toddlers, children (3–10 years), school-aged children, adolescents and adults, and older adults.',
    purpose:
      'To identify sensory processing patterns that may contribute to challenges in occupational performance, behavioral regulation, and participation in daily activities. Results guide sensory-based intervention planning and environmental modifications.',
    populationApplicability: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    administrationTime: '20-30 minutes',
    scoringMethod:
      'Items are rated on a 5-point Likert frequency scale (1 = almost never, 5 = almost always). Raw scores are tallied by section and quadrant, then compared to normative data to classify performance as "much less than others," "less than others," "similar to others," "more than others," or "much more than others."',
    applicableConditionIds: [
      'autism',
      'cerebral-palsy',
      'tbi',
      'multiple-sclerosis',
      'major-depressive-disorder',
    ],
    strengthsAndLimitations:
      'The Sensory Profile is grounded in a well-articulated theoretical model and provides a comprehensive picture of sensory processing across multiple domains and environments, making it valuable for occupational therapists planning sensory-based interventions. It has been validated across a range of diagnostic groups and is widely used in both pediatric and adult practice. Limitations include reliance on informant or self-report, which is subject to rater bias, and the tool does not directly measure sensory processing neurologically but rather its behavioral manifestations.',
  },
  {
    id: 'amps',
    name: 'Assessment of Motor and Process Skills',
    aliases: ['AMPS', 'Assessment of Motor and Process Skills observation'],
    acronym: 'AMPS',
    domains: ['adl', 'iadl', 'motor', 'cognitive', 'functional-performance'],
    description:
      'The Assessment of Motor and Process Skills is a standardized, observation-based instrument that simultaneously assesses the quality of motor and process skills as they are expressed during the performance of familiar, chosen IADL or ADL tasks. Motor skills (e.g., reaching, gripping, calibrating) and process skills (e.g., initiating, sequencing, organizing) are each rated using 16 items on a 4-point ordinal scale. Raters must complete a formal calibration training course to administer the AMPS.',
    purpose:
      'To objectively measure a person\'s capacity for independent living by evaluating the underlying skill deficits that limit ADL/IADL performance, rather than simply documenting task completion. Results support discharge planning, goal setting, and the need for support services.',
    populationApplicability: ['pediatric', 'adolescent', 'adult', 'geriatric'],
    administrationTime: '30-60 minutes',
    scoringMethod:
      'Each of the 16 motor and 20 process skill items is rated on a 4-point scale (1 = deficit, 2 = ineffective, 3 = questionable, 4 = competent). Raw scores are converted to interval-level measures using Rasch analysis. Motor ability measures of 2.0 or above and process ability measures of 1.0 or above indicate sufficient skill for community living.',
    applicableConditionIds: [
      'stroke',
      'tbi',
      'dementia',
      'parkinsons',
      'multiple-sclerosis',
      'autism',
      'major-depressive-disorder',
    ],
    strengthsAndLimitations:
      'The AMPS is one of the most psychometrically rigorous occupational therapy assessments available, using Rasch analysis to provide interval-level measurement and control for task and rater severity. It is ecologically valid as it assesses performance in naturally occurring tasks chosen by the client, and it has been validated across over 100 cultures and diagnostic groups. Significant limitations include the requirement for extensive and costly rater training and calibration, lengthy administration time, and the need for appropriate task materials and environment.',
  },
  {
    id: 'dash',
    name: 'Disabilities of the Arm, Shoulder and Hand',
    aliases: ['DASH questionnaire', 'QuickDASH', 'DASH outcome measure'],
    acronym: 'DASH',
    domains: ['upper-extremity', 'functional-performance', 'psychosocial'],
    description:
      'The Disabilities of the Arm, Shoulder and Hand questionnaire is a 30-item self-report outcome measure that assesses physical function and symptoms related to any or multiple musculoskeletal disorders of the upper limb. It includes items about difficulty performing various activities, as well as symptom items covering pain, tingling, weakness, and stiffness. A shortened 11-item version, the QuickDASH, is also available for use when brevity is required.',
    purpose:
      'To measure the degree of disability and symptom severity experienced by individuals with upper extremity musculoskeletal conditions and to evaluate the effectiveness of treatment interventions over time. It captures the patient\'s perspective on functional limitations in work, sport, and daily activities.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '5-10 minutes',
    scoringMethod:
      'Each item is scored on a 5-point Likert scale. The disability/symptom score is calculated using the formula: ([sum of n responses / n] - 1) × 25, yielding scores from 0 (no disability) to 100 (most severe disability). Optional work and sport/performing arts modules are scored separately using the same formula.',
    applicableConditionIds: [
      'rheumatoid-arthritis',
      'osteoarthritis',
      'carpal-tunnel',
      'rotator-cuff-injury',
      'stroke',
    ],
    strengthsAndLimitations:
      'The DASH has excellent validity, reliability, and responsiveness across a wide range of upper extremity conditions and is one of the most widely used patient-reported outcome measures in hand and upper limb therapy. It captures both functional limitations and symptom burden from the patient\'s perspective, making it sensitive to clinically meaningful change. Limitations include potential ceiling effects in high-functioning individuals, the fact that it does not distinguish between unilateral and bilateral involvement, and it may not capture task-specific deficits relevant to specific occupations.',
  },
  {
    id: 'katz-adl',
    name: 'Katz Index of Independence in Activities of Daily Living',
    aliases: ['Katz ADL Index', 'Katz Index', 'Katz ADL Scale'],
    acronym: null,
    domains: ['adl', 'functional-performance'],
    description:
      'The Katz Index of Independence in ADL is a 6-item clinician-rated scale that assesses independence in six basic activities of daily living: bathing, dressing, toileting, transferring, continence, and feeding. Developed by Sidney Katz in 1963, it was one of the first standardized tools designed to assess functional status systematically. Each activity is rated as independent or dependent, reflecting the hierarchical loss and recovery of ADL function observed in older adults.',
    purpose:
      'To determine an individual\'s baseline level of ADL independence, identify the degree of functional dependence, and predict long-term outcomes including the need for formal care or placement decisions. It is commonly used in geriatric settings and long-term care.',
    populationApplicability: ['adult', 'geriatric'],
    administrationTime: '5-10 minutes',
    scoringMethod:
      'Each of the six ADL items is rated as independent (1 point) or dependent (0 points), yielding a total score of 0–6. A score of 6 indicates full independence, 4 indicates moderate impairment, and 2 or below indicates severe functional impairment. The tool can also produce a categorical summary score (A through G) reflecting the hierarchical pattern of functional loss.',
    applicableConditionIds: [
      'dementia',
      'stroke',
      'hip-fracture',
      'parkinsons',
      'osteoarthritis',
      'copd',
    ],
    strengthsAndLimitations:
      'The Katz Index is brief, easy to use, and has been validated extensively in older adult populations with strong predictive validity for mortality, hospitalization, and institutionalization. Its hierarchical structure reflects the natural order of functional recovery and decline, providing clinically meaningful information with minimal training. However, it is limited to basic ADLs and does not assess IADL function, it uses a binary scoring system that may miss clinically important functional changes, and it lacks sensitivity to detect small but meaningful improvements in higher-functioning individuals.',
  },
];
