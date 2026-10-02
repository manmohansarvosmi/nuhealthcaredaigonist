import { DiagnosticTest, HealthPackage, DiagnosticCenter } from '../types';

export const DIAGNOSTIC_TESTS: DiagnosticTest[] = [
  // ===================== PATHOLOGY & BLOOD TESTS =====================
  {
    id: 'hb-esr',
    name: 'HB, ESR (Hemoglobin & Erythrocyte Sedimentation Rate)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '2 - 4 Hours',
    fastingRequired: false,
    preparationNote: 'No fasting required. Free home/hospital sample collection available.',
    parametersCount: 2,
    parameters: ['Hemoglobin (Hb %)', 'ESR (Westergren Method)'],
    description: 'Essential screening test to detect anemia, systemic infection, acute/chronic inflammation, and general wellness.',
    isPopular: true
  },
  {
    id: 'complete-haemogram-cbc',
    name: 'Complete Haemogram (CBC)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 - 4 Hours',
    fastingRequired: false,
    preparationNote: 'No special fasting required. Stay normally hydrated.',
    parametersCount: 24,
    parameters: [
      'Hemoglobin (Hb)',
      'Total Leukocyte Count (TLC / WBC)',
      'RBC Count',
      'Platelet Count',
      'PCV / Hematocrit',
      'MCV, MCH, MCHC',
      'Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils',
      'RDW-CV & RDW-SD',
      'Peripheral Blood Smear Examination'
    ],
    description: 'Comprehensive 5-part differential blood evaluation for anemia, viral/bacterial infections, platelet counts, and allergies.',
    isPopular: true
  },
  {
    id: 'malaria-parasite-mp-fm',
    name: 'Malaria Parasite (MP / FM)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '2 Hours',
    fastingRequired: false,
    preparationNote: 'Ideal during fever spike. Rapid card and thick/thin smear examination.',
    parametersCount: 2,
    parameters: ['Plasmodium vivax (Pv)', 'Plasmodium falciparum (Pf) Antigen & Smear'],
    description: 'Rapid card antigen and microscopic smear test for early diagnosis of malaria parasites.',
    isPopular: true
  },
  {
    id: 'widal-test',
    name: 'Widal Test (Typhoid Serology)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 - 4 Hours',
    fastingRequired: false,
    preparationNote: 'Rapid slide and quantitative tube agglutination test.',
    parametersCount: 4,
    parameters: ['S. typhi O Antigen', 'S. typhi H Antigen', 'S. paratyphi AH', 'S. paratyphi BH'],
    description: 'Diagnostic serological test for enteric/typhoid fever detection and antibody titer evaluation.',
    isPopular: true
  },
  {
    id: 'bt-ct-clotting-time',
    name: 'BT / CT (Bleeding Time & Clotting Time)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '1 - 2 Hours',
    fastingRequired: false,
    preparationNote: 'Standard pre-operative screening test for coagulation.',
    parametersCount: 2,
    parameters: ['Bleeding Time (Duke Method)', 'Clotting Time (Capillary Tube Method)'],
    description: 'Assesses primary platelet function and intrinsic blood clotting time before surgeries or dental procedures.'
  },
  {
    id: 'blood-group-rh-typing',
    name: 'Blood Group & Rh Typing',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '1 Hour',
    fastingRequired: false,
    preparationNote: 'No preparation needed. Instant verification card provided.',
    parametersCount: 2,
    parameters: ['ABO Blood Group', 'Rh Factor (Positive / Negative)'],
    description: 'Determines ABO blood group and Rhesus (Rh) antigen status for transfusions, pregnancy, and emergency donor identification.',
    isPopular: true
  },
  {
    id: 'blood-sugar-fasting-pp-random',
    name: 'Blood Sugar (Fasting / PP / Random)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '2 - 3 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'For Fasting: 8-10 hours overnight fast. For PP: Exactly 2 hours after breakfast.',
    parametersCount: 1,
    parameters: ['Plasma Glucose (GOD-POD Method)'],
    description: 'Primary test for diabetes detection, hypoglycemia, and glycemic monitoring.',
    isPopular: true
  },
  {
    id: 'hbsag-australia-antigen',
    name: 'HBSAG (Australia Antigen - Hepatitis B)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 - 4 Hours',
    fastingRequired: false,
    preparationNote: 'High-sensitivity immunochromatographic / CLIA screening.',
    parametersCount: 1,
    parameters: ['Hepatitis B Surface Antigen (HBsAg)'],
    description: 'Detects Hepatitis B virus infection in liver disorders, pregnancy, blood transfusion, and pre-surgery screening.'
  },
  {
    id: 'hiv-screening-test',
    name: 'HIV I & II Antibody Test',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 - 4 Hours',
    fastingRequired: false,
    preparationNote: '100% confidential testing following standard certified protocols.',
    parametersCount: 2,
    parameters: ['HIV-1 Antibodies', 'HIV-2 Antibodies'],
    description: 'Confidential rapid and ELISA screening for Human Immunodeficiency Virus types 1 & 2.'
  },
  {
    id: 'hba1c-glycated-hemoglobin',
    name: 'HBA1C (Glycated Hemoglobin - 3 Month Average)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '4 Hours',
    fastingRequired: false,
    preparationNote: 'No fasting required. Reflects 90-day average glucose control.',
    parametersCount: 2,
    parameters: ['HbA1c %', 'Estimated Average Glucose (eAG mg/dL)'],
    description: 'HPLC-certified gold standard test for long-term diabetes monitoring and pre-diabetes detection.',
    isPopular: true
  },
  {
    id: 'vdrl-syphilis-serology',
    name: 'VDRL (Syphilis Serology Screening)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 Hours',
    fastingRequired: false,
    preparationNote: 'Routine antenatal and pre-marital serological screen.',
    parametersCount: 1,
    parameters: ['VDRL / RPR Flocculation Titer'],
    description: 'Screening test for Treponema pallidum (Syphilis) infection in routine health and pregnancy checkups.'
  },
  {
    id: 'bilirubin-total-direct-indirect',
    name: 'Bilirubin (Total, Direct & Indirect)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '2 - 3 Hours',
    fastingRequired: false,
    preparationNote: 'Important in jaundice, liver distress, and general screening.',
    parametersCount: 3,
    parameters: ['Total Bilirubin', 'Direct (Conjugated) Bilirubin', 'Indirect (Unconjugated) Bilirubin'],
    description: 'Evaluates jaundice, biliary obstruction, liver inflammation, and red blood cell breakdown.',
    isPopular: true
  },
  {
    id: 'uric-acid-serum',
    name: 'Uric Acid (Serum)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 Hours',
    fastingRequired: true,
    fastingHours: 6,
    preparationNote: 'Overnight fasting is helpful. Avoid alcohol & high purine foods prior.',
    parametersCount: 1,
    parameters: ['Serum Uric Acid'],
    description: 'Assesses hyperuricemia, gouty arthritis joint pain, and kidney filtration efficiency.',
    isPopular: true
  },
  {
    id: 'crp-c-reactive-protein',
    name: 'CRP (C-Reactive Protein - Quantitative)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 - 4 Hours',
    fastingRequired: false,
    preparationNote: 'Turbidimetric quantitative assay.',
    parametersCount: 1,
    parameters: ['Serum C-Reactive Protein (CRP mg/L)'],
    description: 'High-sensitivity marker for acute bacterial infection, deep tissue inflammation, and cardiovascular strain.',
    isPopular: true
  },
  {
    id: 'ra-factor-rheumatoid-factor',
    name: 'RA Factor (Rheumatoid Arthritis Factor)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 - 4 Hours',
    fastingRequired: false,
    preparationNote: 'Quantitative latex turbidimetry for arthritis assessment.',
    parametersCount: 1,
    parameters: ['Rheumatoid Factor (IU/mL)'],
    description: 'Diagnostic autoimmune marker for Rheumatoid Arthritis and chronic joint stiffness evaluation.',
    isPopular: true
  },
  {
    id: 'calcium-serum',
    name: 'Calcium (Serum Total)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '3 Hours',
    fastingRequired: false,
    preparationNote: 'Early morning sample preferred. Stay normally hydrated.',
    parametersCount: 1,
    parameters: ['Total Serum Calcium (mg/dL)'],
    description: 'Evaluates bone mineral density, neuromuscular twitching, parathyroid health, and osteoporosis risk.',
    isPopular: true
  },
  {
    id: 'lipid-profile-complete',
    name: 'Lipid Profile (Complete Heart & Cholesterol Panel)',
    category: 'cardiology',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: true,
    fastingHours: 12,
    preparationNote: '10 to 12 hours overnight fast mandatory. Plain water allowed.',
    parametersCount: 8,
    parameters: [
      'Total Cholesterol',
      'HDL Cholesterol (Good)',
      'LDL Cholesterol (Bad)',
      'VLDL Cholesterol',
      'Triglycerides',
      'Total / HDL Ratio',
      'LDL / HDL Ratio',
      'Non-HDL Cholesterol'
    ],
    description: 'Comprehensive cardiac risk evaluation measuring good & bad cholesterol, triglycerides, and arterial health.',
    isPopular: true
  },
  {
    id: 'liver-function-test-lft',
    name: 'Liver Function Test (LFT Complete)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'Overnight fasting recommended for optimal hepatic enzyme baseline.',
    parametersCount: 11,
    parameters: [
      'Bilirubin Total',
      'Bilirubin Direct & Indirect',
      'SGOT / AST',
      'SGPT / ALT',
      'Alkaline Phosphatase (ALP)',
      'Total Protein',
      'Albumin',
      'Globulin',
      'A/G Ratio',
      'Gamma GT (GGT)'
    ],
    description: 'Detailed analysis of liver enzymes, protein synthesis, jaundice, fatty liver, and metabolic health.',
    isPopular: true
  },
  {
    id: 'thyroid-function-tsh-t3-t4',
    name: 'Thyroid Function (TSH, T3, T4)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'Morning fasting sample prior to taking daily thyroid medication is recommended.',
    parametersCount: 3,
    parameters: ['Total T3 (Triiodothyronine)', 'Total T4 (Thyroxine)', 'TSH (Thyroid Stimulating Hormone Ultra-sensitive)'],
    description: 'Advanced immunoassay measuring thyroid gland activity to detect hypothyroidism, hyperthyroidism, and metabolism changes.',
    isPopular: true
  },
  {
    id: 'kidney-function-test-kft',
    name: 'Kidney Function Test (KFT / RFT)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'Overnight fasting recommended. Drink adequate water.',
    parametersCount: 8,
    parameters: [
      'Blood Urea',
      'Serum Creatinine',
      'Uric Acid',
      'Blood Urea Nitrogen (BUN)',
      'Sodium (Na+)',
      'Potassium (K+)',
      'Chloride (Cl-)',
      'eGFR (Estimated Glomerular Filtration)'
    ],
    description: 'Measures renal filtration, creatinine clearance, nitrogenous wastes, and vital electrolyte balance.',
    isPopular: true
  },
  {
    id: 'mantoux-test',
    name: 'Mantoux Test (Tuberculin Skin Test)',
    category: 'pathology',
    sampleType: 'Swab',
    turnaroundTime: '48 - 72 Hours',
    fastingRequired: false,
    preparationNote: 'Intradermal injection given at center; reading evaluated after 48-72 hours.',
    parametersCount: 1,
    parameters: ['Induration Diameter in mm (PPD 5 TU)'],
    description: 'Standard diagnostic test to assess exposure to Mycobacterium tuberculosis infection.'
  },

  // ===================== URINE, SEMEN & CULTURES =====================
  {
    id: 'semen-analysis',
    name: 'Semen Analysis (Complete Fertility & Motility)',
    category: 'culture',
    sampleType: 'Semen',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: false,
    preparationNote: 'Mandatory 3 to 5 days of sexual abstinence before sample collection. Sterile container provided.',
    parametersCount: 8,
    parameters: [
      'Sperm Count / Concentration',
      'Total & Progressive Motility %',
      'Sperm Morphology (Normal / Abnormal %)',
      'Volume & Liquefaction Time',
      'pH & Viscosity',
      'Pus Cells & Epithelial Cells',
      'Viability %'
    ],
    description: 'Comprehensive microscopic examination for fertility, sperm count, active motility, and structural morphology.'
  },
  {
    id: 'urine-rm-culture',
    name: 'Urine R/M/Culture (Routine, Microscopic & Culture)',
    category: 'culture',
    sampleType: 'Urine',
    turnaroundTime: 'Same Day for R/M; 48 Hrs for Culture',
    fastingRequired: false,
    preparationNote: 'Clean-catch midstream morning urine in sterile vacuum container.',
    parametersCount: 16,
    parameters: [
      'Color, Appearance & Specific Gravity',
      'pH & Reaction',
      'Protein / Albumin',
      'Sugar / Glucose',
      'Ketone Bodies & Bile Salts',
      'Pus Cells (Leukocytes)',
      'RBCs & Casts',
      'Epithelial Cells & Crystals',
      'Bacterial Growth & Antibiotic Sensitivity (Culture)'
    ],
    description: 'Screens for urinary tract infections (UTI), kidney stones, proteinuria, and specific antibiotic sensitivity.'
  },
  {
    id: 'sputum-afb',
    name: 'Sputum (AFB - Acid Fast Bacilli)',
    category: 'culture',
    sampleType: 'Sputum',
    turnaroundTime: 'Same Day',
    fastingRequired: false,
    preparationNote: 'Early morning deep-cough sputum before brushing or eating.',
    parametersCount: 2,
    parameters: ['Ziehl-Neelsen (ZN) Smear Examination for AFB', 'Grading of Bacilli'],
    description: 'Direct microscopic smear examination for pulmonary tuberculosis and respiratory infections.'
  },
  {
    id: 'pus-throat-swab-culture',
    name: 'Pus / Throat Swab (Culture & Sensitivity)',
    category: 'culture',
    sampleType: 'Swab',
    turnaroundTime: '48 Hours',
    fastingRequired: false,
    preparationNote: 'Sterile swab collection from affected site prior to starting antibiotic course.',
    parametersCount: 4,
    parameters: ['Gram Stain Examination', 'Organism Identification', 'Colony Count', 'Antibiotic Sensitivity Profile'],
    description: 'Isolates pathogenic bacteria and determines the most effective antibiotic drugs for targeted treatment.'
  },
  {
    id: 'upt-urine-pregnancy',
    name: 'UPT (Urine Pregnancy Test)',
    category: 'gynae',
    sampleType: 'Urine',
    turnaroundTime: '1 Hour',
    fastingRequired: false,
    preparationNote: 'Early morning first urine sample provides highest hCG concentration.',
    parametersCount: 1,
    parameters: ['Human Chorionic Gonadotropin (hCG) Detection'],
    description: 'High-sensitivity immunochromatographic assay for early pregnancy confirmation.',
    isPopular: true
  },

  // ===================== VITAMINS & GYNAE SPECIAL =====================
  {
    id: 'vitamin-d-total',
    name: 'Vitamin D (25-Hydroxy Vitamin D Total)',
    category: 'vitamins',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: false,
    preparationNote: 'Overnight fasting preferred. Avoid vitamin D supplements 24 hours prior.',
    parametersCount: 1,
    parameters: ['25-OH Vitamin D Total (ng/mL)'],
    description: 'Crucial for calcium absorption, bone strength, joint mobility, and immune defense.',
    isPopular: true
  },
  {
    id: 'vitamin-b12-cyanocobalamin',
    name: 'Vitamin B12 (Cyanocobalamin)',
    category: 'vitamins',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'Overnight fasting recommended. Evaluates nerve tingling, fatigue, and red blood cell health.',
    parametersCount: 1,
    parameters: ['Vitamin B12 (pg/mL)'],
    description: 'Essential vitamin for neurological nerve function, red blood cell synthesis, and energy levels.',
    isPopular: true
  },
  {
    id: 'gynae-lh-fsh-prolactin-torch',
    name: 'Gynae Special: (LH, FSH, Prolactin, Torch Profile)',
    category: 'gynae',
    sampleType: 'Blood',
    turnaroundTime: 'Same Day to 24 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'For reproductive hormones: sample usually collected on Day 2-3 of menstrual cycle or as advised.',
    parametersCount: 8,
    parameters: [
      'Luteinizing Hormone (LH)',
      'Follicle Stimulating Hormone (FSH)',
      'Serum Prolactin',
      'Toxoplasma IgG & IgM',
      'Rubella IgG & IgM',
      'Cytomegalovirus (CMV) IgG & IgM',
      'Herpes Simplex Virus (HSV 1 & 2) IgG & IgM'
    ],
    description: 'Comprehensive hormonal and TORCH panel for irregular menstrual cycles, fertility assessment, and antenatal care.',
    isPopular: true
  },
  {
    id: 'gynae-double-marker-amh-hcv',
    name: 'Gynae Special: Double Marker, AMH, HCV',
    category: 'gynae',
    sampleType: 'Blood',
    turnaroundTime: '24 - 48 Hours',
    fastingRequired: false,
    preparationNote: 'Double Marker is performed during 11-13 weeks of pregnancy with ultrasound correlation.',
    parametersCount: 4,
    parameters: [
      'Anti-Mullerian Hormone (AMH - Ovarian Reserve)',
      'Free Beta hCG',
      'PAPP-A (Pregnancy Associated Plasma Protein-A)',
      'Hepatitis C Virus (HCV Antibody)'
    ],
    description: 'Advanced maternal screening for chromosomal risk, ovarian egg reserve (AMH), and Hepatitis C screening.'
  },
  {
    id: 'pap-smear-lbc',
    name: 'Pap Smear / LBC (Liquid Based Cytology)',
    category: 'gynae',
    sampleType: 'Swab',
    turnaroundTime: '24 - 48 Hours',
    fastingRequired: false,
    preparationNote: 'Avoid douching or creams 48 hours prior to test. Do not schedule during active menses.',
    parametersCount: 3,
    parameters: ['Cervical Epithelial Cell Cytology', 'Infection / Inflammation Screening', 'Bethesda System Classification'],
    description: 'Vital preventive cancer screening test for women to detect pre-cancerous and abnormal cervical changes early.'
  },

  // ===================== X-RAY STUDY =====================
  {
    id: 'xray-chest-ap-pa-view',
    name: 'X-ray Chest AP / PA View',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '15 - 30 Mins',
    fastingRequired: false,
    preparationNote: 'Remove metallic necklaces or buttons. High-frequency digital imaging.',
    parametersCount: 1,
    parameters: ['Lungs, Cardiac Silhouette, Mediastinum, Ribs & Diaphragm Angles'],
    description: 'High-clarity digital chest X-ray for pneumonia, bronchitis, cardiac silhouette, and rib fractures.',
    isPopular: true
  },
  {
    id: 'xray-abdomen-kub',
    name: 'X-ray Abdomen / KUB (Kidney, Ureter, Bladder)',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '20 Mins',
    fastingRequired: false,
    preparationNote: 'Overnight bowel clearance helps enhance visualization of radio-opaque calculi.',
    parametersCount: 1,
    parameters: ['Kidneys, Ureters, Bladder & Intestinal Gas Patterns'],
    description: 'Detects renal calculi (kidney stones), ureteric stones, bladder stones, and bowel obstruction.'
  },
  {
    id: 'xray-lumbar-cervical-dorsal-spine',
    name: 'X-ray Lumbar / Cervical / Dorsal Spine',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '20 Mins',
    fastingRequired: false,
    preparationNote: 'AP and Lateral views taken for precise spinal alignment and disc space evaluation.',
    parametersCount: 2,
    parameters: ['Vertebral Bodies, Intervertebral Disc Spaces, Spondylosis & Alignment'],
    description: 'Evaluates cervical spondylosis, neck pain, lumbar disc space, and spinal curvature.'
  },
  {
    id: 'xray-shoulder-elbow-wrist-joint',
    name: 'X-ray Shoulder / Elbow / Wrist Joint',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '15 - 20 Mins',
    fastingRequired: false,
    preparationNote: 'Remove wristwatches, bangles, and rings prior to exposure.',
    parametersCount: 2,
    parameters: ['Articular Surfaces, Joint Space, Bone Cortex & Fracture Lines'],
    description: 'Detects bone fractures, dislocations, joint arthritis, and structural strain.'
  },
  {
    id: 'xray-knee-ankle-foot',
    name: 'X-ray Knee / Ankle / Foot',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '15 - 20 Mins',
    fastingRequired: false,
    preparationNote: 'Standing weight-bearing views available for osteoarthritis knee joint evaluation.',
    parametersCount: 2,
    parameters: ['Medial & Lateral Joint Compartments, Patella, Osteophytes & Calcaneal Spur'],
    description: 'Evaluates osteoarthritis joint space narrowing, ligament bone avulsions, and heel spurs.'
  },
  {
    id: 'xray-pelvis-both-hip',
    name: 'X-ray Pelvis Both Hip Joint',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '20 Mins',
    fastingRequired: false,
    preparationNote: 'AP view taken in supine position for femoral head and acetabulum symmetry.',
    parametersCount: 1,
    parameters: ['Femoral Heads, Acetabulum, Sacroiliac Joints & Pelvic Ring'],
    description: 'Diagnoses hip joint arthritis, pelvic trauma, and femoral alignment.'
  },
  {
    id: 'xray-skull',
    name: 'X-ray Skull (AP & Lateral View)',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '20 Mins',
    fastingRequired: false,
    preparationNote: 'Remove hairpins, earrings, and metallic items.',
    parametersCount: 2,
    parameters: ['Cranial Vault, Sella Turcica, Facial Bones & Sutures'],
    description: 'Investigates head trauma, skull fractures, sinus pathology, and cranial bone structure.'
  },
  {
    id: 'xray-mastoid-mandible',
    name: 'X-ray Mastoid / Mandible',
    category: 'xray',
    sampleType: 'Digital X-Ray',
    turnaroundTime: '20 Mins',
    fastingRequired: false,
    preparationNote: 'Special oblique angles for mastoid air cells and temporomandibular (TM) joints.',
    parametersCount: 2,
    parameters: ['Mastoid Air Cells, Mandibular Ramus, Condyle & TM Joints'],
    description: 'Evaluates chronic mastoiditis, ear infections, jaw pain, and mandible structure.'
  },
  // ===================== SPECIAL PROCEDURES (CONTRAST RADIOLOGY) =====================
  {
    id: 'ivp-intravenous-urography',
    name: 'IVP (Intra Venous Urography)',
    category: 'special',
    sampleType: 'Contrast Study',
    turnaroundTime: '1 - 2 Hours',
    fastingRequired: true,
    fastingHours: 6,
    preparationNote: 'Overnight fasting and mild bowel clearance required. Recent serum creatinine report is required prior to contrast injection.',
    parametersCount: 3,
    parameters: ['Renal Parenchymal Excretion Time', 'Calyceal & Ureteric Anatomy / Stones', 'Bladder Filling & Emptying Function'],
    description: 'Special radiological contrast study to evaluate kidney filtration, ureteric narrowing, hydronephrosis, stones, and bladder emptying.',
    isPopular: true
  },
  {
    id: 'barium-swallow',
    name: 'Barium Swallow',
    category: 'special',
    sampleType: 'Contrast Study',
    turnaroundTime: '45 - 60 Mins',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'Overnight strict fasting (8 hours). Do not eat food or drink water in the morning prior to the investigation.',
    parametersCount: 3,
    parameters: ['Pharyngeal Phase & Swallowing Reflex', 'Esophageal Mucosal Relief & Motility', 'Gastroesophageal Reflux, Strictures & Hernia'],
    description: 'Special fluoroscopic examination of the esophagus and upper GI tract to evaluate difficulty in swallowing (dysphagia), acid reflux, hiatus hernia, and strictures.',
    isPopular: true
  },
  {
    id: 'barium-enema',
    name: 'Barium Enema',
    category: 'special',
    sampleType: 'Contrast Study',
    turnaroundTime: '1 - 2 Hours',
    fastingRequired: true,
    fastingHours: 12,
    preparationNote: 'Complete bowel preparation with prescribed laxative preceding the test day. Clear fluid diet prior to examination.',
    parametersCount: 3,
    parameters: ['Colonic Mucosal Architecture & Haustrations', 'Diverticular Disease & Polyp Screening', 'Colorectal Calibre, Obstruction & Strictures'],
    description: 'Special fluoroscopic contrast X-ray of the large intestine (colon and rectum) to detect diverticulosis, polyps, chronic constipation causes, and colorectal lesions.'
  },
  {
    id: 'rgu-mcu-cystourethrography',
    name: 'RGU / MCU (Retrograde Urethrography / Micturating Cystourethrography)',
    category: 'special',
    sampleType: 'Contrast Study',
    turnaroundTime: '1 Hour',
    fastingRequired: false,
    preparationNote: 'Sterile urine culture is recommended before the test. Adequate bladder filling and voiding phase instructions provided at center.',
    parametersCount: 4,
    parameters: [
      'Anterior & Posterior Urethral Calibre',
      'Urethral Stricture Location & Length',
      'Vesicoureteral Reflux (VUR Grading)',
      'Post-Void Residual Urine Assessment'
    ],
    description: 'Specialized contrast radiologic study of the lower urinary tract to diagnose anterior/posterior urethral strictures, traumatic tears, bladder diverticula, and vesicoureteral reflux (VUR).'
  },
  {
    id: 'hsg-hysterosalpingography',
    name: 'HSG (Hysterosalpingography)',
    category: 'special',
    sampleType: 'Contrast Study',
    turnaroundTime: '45 - 60 Mins',
    fastingRequired: false,
    preparationNote: 'Conducted between Day 7 to Day 10 of menstrual cycle (post-menstrual cessation and prior to ovulation).',
    parametersCount: 3,
    parameters: [
      'Uterine Cavity Morphology & Congenital Contours',
      'Bilateral Fallopian Tube Patency (Left & Right)',
      'Free Peritoneal Contrast Spill'
    ],
    description: 'Special contrast radiograph for female fertility investigation to evaluate uterine shape and confirm whether both fallopian tubes are open and patent.',
    isPopular: true
  },

  // ===================== CARDIOLOGY =====================
  {
    id: 'ecg-electrocardiography',
    name: '(E.C.G) Electrocardiography (12-Lead Computerized)',
    category: 'cardiology',
    sampleType: 'ECG / Sensor',
    turnaroundTime: 'Instant (10 Mins)',
    fastingRequired: false,
    preparationNote: 'No fasting required. Wear comfortable clothing for chest lead placement.',
    parametersCount: 5,
    parameters: ['Heart Rate', 'Rhythm & Axis', 'P-QRS-T Morphology', 'Ischemia / Infarction Signs', 'Conduction Blocks'],
    description: 'High-precision 12-lead digital electrocardiogram to detect arrhythmias, chest pain causes, and cardiac rhythm.',
    isPopular: true
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'nu-complete-master-checkup',
    name: 'Nu Master Full Body Health Package',
    tagline: 'Complete 68-Parameter Pathology, Heart & Vital Organ Screening',
    recommendedFor: 'Men & Women (All Age Groups, Annual Wellness Check)',
    totalParameters: 68,
    originalPrice: 2800,
    price: 1299,
    fasting: '10 - 12 Hours Overnight Fasting Required',
    reportTime: 'Same Day (Within 6 Hours)',
    categoriesCovered: ['CBC with ESR', 'Lipid Profile', 'Liver (LFT)', 'Kidney (KFT)', 'Thyroid (TSH)', 'Blood Sugar', 'Urine R/M', 'ECG Heart Scan'],
    keyTests: [
      'Complete Haemogram (CBC + ESR)',
      'Liver Function Test (LFT - 11 Parameters)',
      'Kidney Function Test (KFT / RFT - 8 Parameters)',
      'Lipid Profile (Cholesterol, Triglycerides, HDL, LDL)',
      'Thyroid Stimulating Hormone (TSH)',
      'Blood Sugar Fasting (Glucose)',
      'Serum Calcium & Uric Acid',
      'Complete Urine Routine & Microscopic',
      '12-Lead Computerized ECG'
    ],
    featured: true
  },
  {
    id: 'nu-senior-citizen-wellness',
    name: 'Senior Citizen & Cardiac Wellness Panel',
    tagline: 'Vital screening for hypertension, joints, bones, diabetes & heart',
    recommendedFor: 'Adults Aged 45+ Years & Chronic Symptom Monitoring',
    totalParameters: 54,
    originalPrice: 3200,
    price: 1599,
    fasting: '10 - 12 Hours Overnight Fasting Required',
    reportTime: 'Same Day Verified Turnaround',
    categoriesCovered: ['Heart (Lipid + ECG)', 'Diabetes (HbA1c + Glucose)', 'Kidney & Electrolytes', 'Uric Acid & Joint Markers', 'Calcium', 'X-Ray Chest'],
    keyTests: [
      'HbA1c (3-Month Glycated Glucose)',
      'Blood Sugar (Fasting & PP)',
      'Lipid Profile Complete',
      'Kidney Function Test with Electrolytes',
      'Serum Uric Acid & Serum Calcium',
      'Complete Haemogram (CBC)',
      '12-Lead Digital ECG',
      'Digital X-Ray Chest PA View'
    ],
    featured: true
  },
  {
    id: 'nu-women-hormone-wellness',
    name: 'Nu Women Hormone & Vital Health Panel',
    tagline: 'Designed for PCOD, thyroid, anemia, calcium, and vitamin balance',
    recommendedFor: 'Women of All Ages (Adolescent to Senior Care)',
    totalParameters: 48,
    originalPrice: 3500,
    price: 1699,
    fasting: '8 - 10 Hours Fasting Recommended',
    reportTime: 'Same Day by Evening',
    categoriesCovered: ['Thyroid (T3, T4, TSH)', 'Vitamin D & B12', 'CBC & Anemia', 'Calcium & Bone Health', 'Blood Sugar', 'Urine R/M'],
    keyTests: [
      'Thyroid Profile Total (T3, T4, TSH)',
      'Vitamin D (25-OH) & Vitamin B12 Duo',
      'Complete Blood Count (CBC) with ESR',
      'Serum Calcium & Iron Indicators',
      'Blood Sugar (Fasting)',
      'Urine Routine & Microscopic Analysis'
    ],
    featured: true
  },
  {
    id: 'nu-fever-infection-screening',
    name: 'Nu Fever & Infection Rapid Panel',
    tagline: 'Same-day acute fever diagnostic panel for infection screening',
    recommendedFor: 'Patients with Acute Fever, Body Aches, Chills or Fatigue',
    totalParameters: 32,
    originalPrice: 1800,
    price: 799,
    fasting: 'No Fasting Required',
    reportTime: 'Express 2 - 3 Hours',
    categoriesCovered: ['CBC with Platelets', 'Malaria MP/FM', 'Widal Typhoid', 'ESR', 'Urine R/M'],
    keyTests: [
      'Complete Haemogram (CBC) with Platelet Count',
      'Malaria Parasite (MP / FM Smear & Card)',
      'Widal Test (Typhoid Serology)',
      'ESR (Inflammation Speed)',
      'Urine Routine & Microscopic'
    ]
  },
  {
    id: 'nu-pre-operative-surgical-fitness',
    name: 'Pre-Operative Surgical Fitness Profile',
    tagline: 'Mandatory pre-surgery profile for blood safety, viral markers & ECG',
    recommendedFor: 'Pre-Surgical Clearance & Medical Fitness Assessment',
    totalParameters: 40,
    originalPrice: 2600,
    price: 1199,
    fasting: '8 Hours Fasting Required',
    reportTime: 'Express Same-Day Clearance',
    categoriesCovered: ['Viral Markers (HIV, HBsAg, HCV)', 'Blood Group & BT/CT', 'KFT & Glucose', 'CBC', 'Chest X-Ray', 'ECG'],
    keyTests: [
      'Blood Group & Rh Typing',
      'BT / CT (Bleeding & Clotting Time)',
      'HIV I & II Antibodies',
      'HBSAG (Australia Antigen)',
      'HCV Antibody',
      'Serum Creatinine & Blood Urea',
      'Blood Sugar Random / Fasting',
      '12-Lead Computerized ECG',
      'Digital X-Ray Chest PA View'
    ]
  }
];

export const DIAGNOSTIC_CENTERS: DiagnosticCenter[] = [
  {
    name: "Group's of Nu Health Care Diagnostic - Dabra",
    tag: 'Primary Diagnostic & Digital X-Ray Center',
    address: 'In State Bank Building, Beside Civil Hospital',
    city: 'Dabra, Madhya Pradesh',
    phone: '99778 33679, 80853 67924',
    hours: '08:30 AM - 09:00 PM (Daily)',
    facilities: [
      'Automated Pathology & Biochemistry Lab',
      'High-Frequency Digital X-Ray',
      '12-Lead Computerized ECG',
      'Special Radiological Studies (IVP, Barium, HSG)',
      'Free Home & Hospital Sample Collection',
      'Emergency Lab Testing'
    ],
    emergencyAvailable: true,
    parkingAvailable: true,
    homeCollectionHub: true
  },
  {
    name: "Group's of Nu Health Care Diagnostic - Karera",
    tag: 'Diagnostic & Pathology Center',
    address: 'Opposite Kamaksha Devi Temple, Near New Tehsil',
    city: 'Karera, Madhya Pradesh',
    phone: '80853 67924, 99778 33679',
    hours: '08:30 AM - 09:00 PM (Daily)',
    facilities: [
      'Fully Automated Blood Pathology',
      'Digital X-Ray & 12-Lead ECG',
      'Hormone, Thyroid & Vitamin Panels',
      'Routine & Emergency Blood Tests',
      'Doorstep Home Sample Collection',
      'Same-Day WhatsApp & Printed Reports'
    ],
    emergencyAvailable: true,
    parkingAvailable: true,
    homeCollectionHub: true
  }
];

export const ACCREDITATIONS = [
  {
    title: 'NABL ISO 15189:2022',
    subtitle: 'National Accreditation Board for Testing and Calibration Laboratories',
    certNo: 'Certified Laboratory Standards'
  },
  {
    title: 'CAP Compliant Protocols',
    subtitle: 'College of American Pathologists Proficiency Benchmark',
    certNo: 'Proficiency Quality Standard'
  },
  {
    title: 'AERB Certified',
    subtitle: 'Atomic Energy Regulatory Board Certified Radiation Safety for Digital X-Ray',
    certNo: 'AERB Safety Compliance'
  },
  {
    title: 'ICMR Registered',
    subtitle: 'Indian Council of Medical Research Certified Diagnostics',
    certNo: 'National Quality Adherence'
  }
];

export const PATIENT_FAQS = [
  {
    q: 'How does Nu Health Care Free Home Sample Collection service work?',
    a: 'To book a home or hospital sample collection, select your desired tests online or call/WhatsApp our 24x7 helplines at 99778 33679 / 80853 67924. Our certified technician arrives at your preferred time equipped with sterile vacuum tubes and a cold-chain kit to collect samples safely.'
  },
  {
    q: 'What are the fasting guidelines for blood tests like Lipid, LFT and Glucose?',
    a: 'For Fasting Blood Sugar, Lipid Profile (Cholesterol), and full body master packages, 8 to 12 hours of overnight fasting is required. You can drink plain water, but avoid tea, coffee, milk, breakfast, or medications until after sample collection.'
  },
  {
    q: 'How soon will I receive my official diagnostic report?',
    a: 'Most routine blood tests (CBC, ESR, Glucose, LFT, KFT) are completed within 3 to 6 hours. Digital X-Ray and ECG reports are delivered within 15 to 30 minutes. All verified reports are sent directly to your WhatsApp and SMS.'
  },
  {
    q: 'Can I upload a handwritten prescription from my doctor?',
    a: 'Yes! Click the "Upload Prescription" button on our website to upload a clear photo of your doctor\'s prescription. Our clinical team will review the required tests and contact you within 15 minutes.'
  },
  {
    q: 'Are Nu Health Care diagnostic reports accepted by all hospitals and doctors?',
    a: 'Yes, all reports from Group\'s of Nu Health Care Diagnostic adhere to NABL standards with verified digital signatures and QR code authentication, accepted universally by all hospitals and physicians.'
  }
];
