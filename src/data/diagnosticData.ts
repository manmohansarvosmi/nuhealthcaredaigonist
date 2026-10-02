import { DiagnosticTest, HealthPackage, DiagnosticReport, DoctorProfile, DiagnosticCenter } from '../types';

export const DIAGNOSTIC_TESTS: DiagnosticTest[] = [
  {
    id: 'cbc-complete-blood-count',
    name: 'Complete Blood Count (CBC) with ESR',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: false,
    preparationNote: 'No special fasting required. Stay normally hydrated.',
    originalPrice: 450,
    price: 299,
    parametersCount: 24,
    parameters: [
      'Hemoglobin (Hb)',
      'Total Leukocyte Count (TLC)',
      'RBC Count',
      'Platelet Count',
      'Hematocrit (PCV)',
      'MCV, MCH, MCHC',
      'Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils',
      'ESR (Westergren Method)',
      'RDW-CV & RDW-SD'
    ],
    description: 'Gold-standard blood screening to detect anemia, systemic infection, clotting disorders, and hematologic health.',
    isPopular: true
  },
  {
    id: 'lipid-profile-advanced',
    name: 'Lipid Profile - Comprehensive Cardiac Risk',
    category: 'cardiology',
    sampleType: 'Blood',
    turnaroundTime: '6 Hours',
    fastingRequired: true,
    fastingHours: 12,
    preparationNote: '10 to 12 hours of overnight fasting is mandatory. Plain water is permitted.',
    originalPrice: 900,
    price: 550,
    parametersCount: 8,
    parameters: [
      'Total Cholesterol',
      'HDL Cholesterol (Good Cholesterol)',
      'LDL Cholesterol (Bad Cholesterol)',
      'VLDL Cholesterol',
      'Triglycerides',
      'Total / HDL Cholesterol Ratio',
      'LDL / HDL Ratio',
      'Non-HDL Cholesterol'
    ],
    description: 'Evaluates hyperlipidemia, atherosclerosis risk, and vascular cardiovascular indicators.',
    isPopular: true
  },
  {
    id: 'mri-brain-3t',
    name: 'MRI Brain (3.0 Tesla High-Resolution)',
    category: 'radiology',
    sampleType: 'Imaging Scan',
    turnaroundTime: 'Same Day (Within 8 Hours)',
    fastingRequired: false,
    preparationNote: 'Remove all metallic jewellery, watches, hearing aids, and dental plates before entering the magnet room.',
    originalPrice: 7500,
    price: 5499,
    parametersCount: 1,
    parameters: ['T1, T2, FLAIR, DWI, SWI & 3D TOF Angiography Brain Sequences'],
    description: 'Advanced 3-Tesla silent neuro-imaging with sub-millimeter slice precision for cerebrovascular, neurological, and structural diagnosis.',
    isPopular: true
  },
  {
    id: 'ct-scan-chest-hrct',
    name: 'HRCT Chest (128-Slice Low-Dose CT)',
    category: 'radiology',
    sampleType: 'Imaging Scan',
    turnaroundTime: '6 Hours',
    fastingRequired: true,
    fastingHours: 4,
    preparationNote: '4 hours fasting recommended if IV contrast is advised. Bring previous chest X-rays.',
    originalPrice: 5000,
    price: 3600,
    parametersCount: 1,
    parameters: ['High-Resolution Pulmonary Parenchymal & Mediastinal Windows'],
    description: 'Ultra-thin volumetric lung scanning to detect interstitial lung disease, pneumonia, bronchiolitis, and nodules.',
    isPopular: true
  },
  {
    id: 'ultrasound-whole-abdomen',
    name: 'Ultrasound Whole Abdomen & Pelvis (4D Color Doppler)',
    category: 'radiology',
    sampleType: 'Imaging Scan',
    turnaroundTime: 'Instant Report (30 Mins)',
    fastingRequired: true,
    fastingHours: 6,
    preparationNote: '6 hours fasting required. Drink 4-5 glasses of water 1 hour prior to maintain full urinary bladder.',
    originalPrice: 1800,
    price: 1250,
    parametersCount: 1,
    parameters: ['Liver, Gallbladder, Pancreas, Spleen, Kidneys, Urinary Bladder, Prostate/Uterus & Ovaries'],
    description: 'Real-time color Doppler sonography evaluating abdominal organs, stones, fatty liver, cysts, and pelvic anatomy.',
    isPopular: true
  },
  {
    id: 'hba1c-glycated-hemoglobin',
    name: 'HbA1c (Glycated Hemoglobin) - HPLC Method',
    category: 'diabetes',
    sampleType: 'Blood',
    turnaroundTime: '4 Hours',
    fastingRequired: false,
    preparationNote: 'Fasting is not required. Reflects average blood sugar control over the past 90 days.',
    originalPrice: 650,
    price: 399,
    parametersCount: 2,
    parameters: ['HbA1c %', 'Estimated Average Glucose (eAG mg/dL)'],
    description: 'NGSP and IFCC certified high-performance liquid chromatography assay for diabetes monitoring.',
    isPopular: true
  },
  {
    id: 'vitamin-d-and-b12-combo',
    name: 'Vitamin D (25-OH) & Vitamin B12 Duo',
    category: 'vitamins',
    sampleType: 'Blood',
    turnaroundTime: '6 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'Overnight fasting is recommended. Avoid multivitamin supplements for 24 hours prior.',
    originalPrice: 2200,
    price: 1199,
    parametersCount: 2,
    parameters: ['25-Hydroxy Vitamin D Total', 'Cyanocobalamin (Vitamin B12)'],
    description: 'Essential nutritional markers for bone density, nerve regeneration, immunity, and fatigue evaluation.',
    isPopular: true
  },
  {
    id: 'thyroid-profile-total',
    name: 'Thyroid Function Test (T3, T4, TSH Ultra-sensitive)',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '4 - 6 Hours',
    fastingRequired: true,
    fastingHours: 8,
    preparationNote: 'Early morning sample before taking thyroid medication is advised.',
    originalPrice: 600,
    price: 399,
    parametersCount: 3,
    parameters: ['Total Triiodothyronine (T3)', 'Total Thyroxine (T4)', 'Thyroid Stimulating Hormone (TSH)'],
    description: 'Chemiluminescence immunoassay (CLIA) measuring hyperthyroidism and hypothyroidism hormone levels.',
    isPopular: true
  },
  {
    id: 'liver-function-test',
    name: 'Liver Function Test (LFT) with Enzymes',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '6 Hours',
    fastingRequired: true,
    fastingHours: 10,
    preparationNote: '10 hours overnight fasting. Avoid alcohol for 48 hours prior to test.',
    originalPrice: 850,
    price: 599,
    parametersCount: 11,
    parameters: [
      'Bilirubin Total, Direct & Indirect',
      'SGOT (AST)',
      'SGPT (ALT)',
      'Alkaline Phosphatase (ALP)',
      'Gamma GT (GGT)',
      'Total Protein & Albumin',
      'Globulin & A/G Ratio'
    ],
    description: 'Comprehensive screening for hepatotoxicity, jaundice, fatty liver, and metabolic synthesis integrity.',
    isPopular: false
  },
  {
    id: 'kidney-function-test',
    name: 'Kidney Function Test (KFT / RFT) with Electrolytes',
    category: 'pathology',
    sampleType: 'Blood',
    turnaroundTime: '6 Hours',
    fastingRequired: false,
    preparationNote: 'Fasting not strictly required; drink adequate water.',
    originalPrice: 900,
    price: 649,
    parametersCount: 8,
    parameters: [
      'Serum Creatinine',
      'Blood Urea Nitrogen (BUN)',
      'Uric Acid',
      'Serum Sodium (Na+)',
      'Serum Potassium (K+)',
      'Serum Chloride (Cl-)',
      'eGFR (Estimated Glomerular Filtration Rate)',
      'BUN / Creatinine Ratio'
    ],
    description: 'Precision biochemical markers assessing renal clearance, glomerular filtration, and electrolyte balance.'
  },
  {
    id: 'digital-x-ray-chest-pa',
    name: 'Digital X-Ray Chest (PA View) - DR System',
    category: 'radiology',
    sampleType: 'Imaging Scan',
    turnaroundTime: 'Instant (15 Mins)',
    fastingRequired: false,
    preparationNote: 'No fasting needed. Change into clinic gown for scanning.',
    originalPrice: 600,
    price: 350,
    parametersCount: 1,
    parameters: ['High-Frequency Direct Radiography Chest PA View'],
    description: 'High-frequency digital radiography for pneumonia, cardiomegaly, pleural effusion, and ribs examination.'
  },
  {
    id: 'echocardiography-color-doppler',
    name: '2D Echocardiography with Color Doppler',
    category: 'cardiology',
    sampleType: 'ECG / Sensor',
    turnaroundTime: 'Instant (45 Mins)',
    fastingRequired: false,
    preparationNote: 'No fasting required. Wear comfortable two-piece clothing.',
    originalPrice: 2500,
    price: 1800,
    parametersCount: 1,
    parameters: ['Left Ventricular Ejection Fraction (LVEF), Valvular Flow & Wall Motion Analysis'],
    description: 'Performed directly by senior Consultant Cardiologist for cardiac valve assessment, pump function, and ischemia.'
  },
  {
    id: 'cardiac-troponin-i-crp',
    name: 'High-Sensitivity Troponin-I & hs-CRP Duo',
    category: 'cardiology',
    sampleType: 'Blood',
    turnaroundTime: '2 Hours (Stat Express)',
    fastingRequired: false,
    preparationNote: 'Critical cardiac biomarker for acute coronary syndromes.',
    originalPrice: 2400,
    price: 1650,
    parametersCount: 2,
    parameters: ['hs-Troponin I (Quantitative)', 'High-Sensitivity C-Reactive Protein (hs-CRP)'],
    description: 'High-sensitivity quantitative detection of subtle myocardial micro-necrosis and vascular inflammation.'
  },
  {
    id: 'female-hormone-profile',
    name: 'Women Hormone Panel (PCOS / Fertility Profile)',
    category: 'women',
    sampleType: 'Blood',
    turnaroundTime: '12 Hours',
    fastingRequired: true,
    fastingHours: 10,
    preparationNote: 'Ideally performed on Day 2 or Day 3 of menstrual cycle or as advised by your gynecologist.',
    originalPrice: 3200,
    price: 2199,
    parametersCount: 6,
    parameters: [
      'Follicle Stimulating Hormone (FSH)',
      'Luteinizing Hormone (LH)',
      'Serum Prolactin',
      'Total Testosterone',
      'DHEA-S',
      'TSH'
    ],
    description: 'Essential endocrine panel diagnosing Polycystic Ovary Syndrome (PCOS), ovarian reserve, and cycle regularity.'
  },
  {
    id: 'urine-routine-microscopic',
    name: 'Complete Urine Routine & Microscopic Examination',
    category: 'pathology',
    sampleType: 'Urine',
    turnaroundTime: '3 Hours',
    fastingRequired: false,
    preparationNote: 'Clean-catch midstream early morning urine specimen in sterile container.',
    originalPrice: 250,
    price: 150,
    parametersCount: 18,
    parameters: ['Physical, Chemical, Dipstick Protein/Glucose/Ketones, Pus Cells, RBCs, Casts, Crystals, Bacteria'],
    description: 'Comprehensive screening for urinary tract infections, proteinuria, microhematuria, and renal calculi.'
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'pkg-vital-full-body',
    name: 'Nu Vital Full Body Health Package',
    tagline: 'Annual essential health baseline for adults aged 20–45',
    recommendedFor: 'Working professionals, healthy adults, baseline checkup',
    totalParameters: 68,
    originalPrice: 3500,
    price: 1499,
    fasting: '10–12 Hours Overnight Fasting',
    reportTime: 'Same Day by 7:00 PM',
    categoriesCovered: [
      'Complete Blood Count (CBC 24 Params)',
      'Complete Lipid Profile (8 Params)',
      'Liver Function Test (LFT 11 Params)',
      'Kidney Function Test (KFT 8 Params)',
      'Blood Glucose Fasting',
      'HbA1c Glycated Sugar',
      'Thyroid Profile (TSH)',
      'Urine Routine & Microscopic (18 Params)'
    ],
    keyTests: ['CBC', 'Lipid Panel', 'Liver LFT', 'Kidney KFT', 'HbA1c', 'TSH', 'Urine R/M'],
    featured: true
  },
  {
    id: 'pkg-executive-master',
    name: 'Nu Executive Platinum Master Health Check',
    tagline: 'Comprehensive organ screening + Cancer & Vitamin markers',
    recommendedFor: 'Adults aged 35+, high-stress executives, family history of lifestyle illness',
    totalParameters: 89,
    originalPrice: 6500,
    price: 2999,
    fasting: '10–12 Hours Overnight Fasting',
    reportTime: 'Within 24 Hours',
    categoriesCovered: [
      'All 68 Parameters from Vital Package',
      'Vitamin D3 (25-OH) & Vitamin B12',
      'Serum Calcium, Phosphorus & Iron Studies',
      'High-Sensitivity C-Reactive Protein (hs-CRP)',
      'Prostate PSA (Males) or CA-125 (Females)',
      'Serum Electrolytes (Na+, K+, Cl-)',
      'Cardiac Risk Ratios & Lipoprotein(a)'
    ],
    keyTests: ['Full Vital Panel', 'Vitamin D3 & B12', 'hs-CRP', 'Iron Profile', 'Electrolytes', 'Tumor Marker'],
    featured: true
  },
  {
    id: 'pkg-senior-citizen',
    name: 'Nu Senior Citizen Comprehensive Geriatric Care',
    tagline: 'Specialized cardiac, renal, bone density & metabolic assessment',
    recommendedFor: 'Seniors aged 55+, elderly parents, chronic illness management',
    totalParameters: 82,
    originalPrice: 5800,
    price: 2499,
    fasting: '10–12 Hours Overnight Fasting',
    reportTime: 'Same Day Delivery',
    categoriesCovered: [
      'Comprehensive Cardiac Lipid & hs-CRP',
      'Renal Glomerular Function (eGFR + Uric Acid)',
      'Liver & Pancreatic Enzymes',
      'Bone Health: Vitamin D3, Calcium, Alkaline Phosphatase',
      'Glycemic Control (Fasting Sugar + HbA1c)',
      'Complete Hemogram with ESR (Anemia & Infection)',
      'Electrolyte & Fluid Balance Panel'
    ],
    keyTests: ['CBC & ESR', 'Kidney eGFR', 'Lipid & hs-CRP', 'Vitamin D3 & Calcium', 'HbA1c', 'Electrolytes'],
    featured: false
  },
  {
    id: 'pkg-women-wellness',
    name: 'Nu Women Complete Wellness & Hormonal Balance',
    tagline: 'Tailored for thyroid, PCOS, anemia, bone health & cervical screening',
    recommendedFor: 'Women across all age groups, pregnancy planning, hormonal imbalance',
    totalParameters: 76,
    originalPrice: 4800,
    price: 2199,
    fasting: '10–12 Hours Overnight Fasting',
    reportTime: 'Same Day Delivery',
    categoriesCovered: [
      'Complete Hemogram (Focus on Ferritin & Iron Deficiency)',
      'Thyroid Profile Complete (T3, T4, TSH)',
      'Serum Prolactin & PCOS Markers',
      'Vitamin D3 & Calcium for Bone Health',
      'Lipid & Liver Enzymes',
      'Diabetes Screen (HbA1c + Fasting Glucose)',
      'Complete Urine Profile'
    ],
    keyTests: ['Complete Blood Count', 'Ferritin / Iron', 'Thyroid Profile', 'Prolactin', 'Vitamin D3', 'HbA1c'],
    featured: false
  }
];

export const DEMO_REPORT_DATA: DiagnosticReport = {
  reportId: 'NU-2026-94812',
  barcode: '984029184712',
  patientName: 'Rajesh V. Sharma',
  patientAge: 48,
  patientGender: 'Male',
  referredBy: 'Dr. Anand K. Kulkarni, MD (Medicine)',
  sampleCollectedAt: '2026-10-01 07:30 AM (Nu Health Care Home Collection)',
  reportedAt: '2026-10-01 01:45 PM (Verified & Published)',
  testTitle: 'Comprehensive Metabolic & Lipid Diagnostic Panel',
  category: 'Pathology & Clinical Biochemistry',
  overallImpression: 'Borderline elevated serum triglycerides and mildly increased HbA1c suggestive of early metabolic syndrome. Renal and liver profiles remain within normal clinical limits.',
  clinicalRemarks: 'Advised lifestyle modification with low glycemic diet, daily aerobic exercise, and clinical correlation with consulting physician. Repeat fasting lipid evaluation recommended in 90 days.',
  pathologist: {
    name: 'Dr. Sunita Deshmukh, MD',
    designation: 'Senior Consultant Clinical Pathologist (KMC #48192)',
    regNumber: 'Nu Health Care NABL Quality Lead Assessor'
  },
  parameters: [
    {
      name: 'Fasting Blood Glucose',
      result: 104,
      unit: 'mg/dL',
      referenceRange: '70 - 99',
      minNormal: 70,
      maxNormal: 99,
      status: 'elevated',
      method: 'Hexokinase Spectrophotometry'
    },
    {
      name: 'HbA1c (Glycated Hemoglobin)',
      result: 5.9,
      unit: '%',
      referenceRange: '4.0 - 5.6',
      minNormal: 4.0,
      maxNormal: 5.6,
      status: 'elevated',
      method: 'HPLC (Bio-Rad D-100 NGSP Certified)'
    },
    {
      name: 'Serum Total Cholesterol',
      result: 192,
      unit: 'mg/dL',
      referenceRange: '< 200',
      minNormal: 120,
      maxNormal: 200,
      status: 'normal',
      method: 'CHOD-PAP Enzymatic'
    },
    {
      name: 'Serum Triglycerides',
      result: 188,
      unit: 'mg/dL',
      referenceRange: '< 150',
      minNormal: 50,
      maxNormal: 150,
      status: 'elevated',
      method: 'GPO-PAP Enzymatic'
    },
    {
      name: 'HDL Cholesterol (Protective)',
      result: 42,
      unit: 'mg/dL',
      referenceRange: '> 40',
      minNormal: 40,
      maxNormal: 65,
      status: 'normal',
      method: 'Direct Immunoinhibition'
    },
    {
      name: 'LDL Cholesterol (Calculated)',
      result: 112,
      unit: 'mg/dL',
      referenceRange: '< 100',
      minNormal: 50,
      maxNormal: 100,
      status: 'elevated',
      method: 'Friedewald Formula'
    },
    {
      name: 'Serum Creatinine',
      result: 0.94,
      unit: 'mg/dL',
      referenceRange: '0.70 - 1.20',
      minNormal: 0.70,
      maxNormal: 1.20,
      status: 'normal',
      method: 'Jaffe Modified Kinetic'
    },
    {
      name: 'Estimated GFR (eGFR)',
      result: 94,
      unit: 'mL/min/1.73m²',
      referenceRange: '> 90',
      minNormal: 90,
      maxNormal: 130,
      status: 'normal',
      method: 'CKD-EPI 2021 Equation'
    },
    {
      name: 'Serum SGPT (ALT)',
      result: 28,
      unit: 'U/L',
      referenceRange: '< 45',
      minNormal: 10,
      maxNormal: 45,
      status: 'normal',
      method: 'IFCC Without Pyridoxal Phosphate'
    },
    {
      name: 'Total 25-OH Vitamin D',
      result: 18.4,
      unit: 'ng/mL',
      referenceRange: '30.0 - 100.0',
      minNormal: 30.0,
      maxNormal: 100.0,
      status: 'low',
      method: 'Chemiluminescence (CLIA)'
    },
    {
      name: 'Vitamin B12 (Cyanocobalamin)',
      result: 320,
      unit: 'pg/mL',
      referenceRange: '211 - 911',
      minNormal: 211,
      maxNormal: 911,
      status: 'normal',
      method: 'ECLIA Roche Cobas e801'
    }
  ]
};

export const DOCTORS_TEAM: DoctorProfile[] = [
  {
    name: 'Dr. Sunita Deshmukh',
    qualification: 'MBBS, MD (Pathology), FICPath',
    specialty: 'Clinical Pathology & Hematopathology',
    experience: '18+ Years Experience',
    role: 'Chief of Pathology & NABL Quality Director',
    bio: 'Formerly with AIIMS and Tata Memorial. Specialized in automated flow cytometry, molecular genetics, and precision hematology reporting.',
    availability: 'Mon - Sat (08:00 AM - 04:00 PM)'
  },
  {
    name: 'Dr. Arvind R. Nambiar',
    qualification: 'MBBS, MD (Radiodiagnosis), FRCR (London)',
    specialty: 'Cross-Sectional Neuro & Musculoskeletal MRI',
    experience: '16+ Years Experience',
    role: 'Head of Advanced Diagnostic Radiology',
    bio: 'Pioneer in 3-Tesla silent neuro-MRI sequence optimization, cardiac CT angiography, and fetal anomaly sonography.',
    availability: 'Mon - Sat (09:00 AM - 06:00 PM)'
  },
  {
    name: 'Dr. Pradeep V. Singhania',
    qualification: 'MBBS, MD (Biochemistry), Ph.D.',
    specialty: 'Clinical Biochemistry & Endocrinology',
    experience: '14+ Years Experience',
    role: 'Senior Consultant Biochemist',
    bio: 'Expert in high-throughput automation platforms, immunoassays, and metabolic screening validation.',
    availability: 'Mon - Fri (09:00 AM - 05:00 PM)'
  },
  {
    name: 'Dr. Meera Chandrasekhar',
    qualification: 'MBBS, DMRD, DNB (Radiology)',
    specialty: 'Women’s Imaging & Fetal Sonography',
    experience: '12+ Years Experience',
    role: 'Senior Consultant Radiologist',
    bio: 'Specialist in 4D fetal Doppler scans, high-resolution breast sonography, and guided core biopsy procedures.',
    availability: 'Mon - Sat (10:00 AM - 05:00 PM)'
  }
];

export const DIAGNOSTIC_CENTERS: DiagnosticCenter[] = [
  {
    name: 'Nu Health Care Central Hospital & Diagnostic Hub',
    tag: 'Flagship 24/7 Super-Specialty Hub',
    address: 'Nu Health Care Tower, 45 Healthcare Boulevard, Near Metro Pillar 182, Koramangala',
    city: 'Bengaluru, Karnataka 560034',
    phone: '+91 (080) 4920-8800',
    hours: 'Open 24 Hours · 7 Days a Week (Radiology & Emergency Pathology)',
    facilities: ['3.0T Silent MRI', '128-Slice Dual CT', '4D Ultrasound Doppler', 'Automated Core Lab', 'Executive Lounge', 'Ambulance Bay'],
    emergencyAvailable: true,
    parkingAvailable: true,
    homeCollectionHub: true
  },
  {
    name: 'Nu Health Care Express Care & Scan Hub - Indiranagar',
    tag: 'Imaging & Express Collection',
    address: 'Plot 714, 100 Feet Road, 12th Main Junction, Indiranagar',
    city: 'Bengaluru, Karnataka 560038',
    phone: '+91 (080) 4920-8812',
    hours: '06:30 AM - 09:30 PM (Daily)',
    facilities: ['Digital Direct X-Ray', 'Ultrasound & 2D Echo', 'Fast-Track Blood Draw', 'Home Collection Base'],
    emergencyAvailable: false,
    parkingAvailable: true,
    homeCollectionHub: true
  },
  {
    name: 'Nu Health Care Diagnostic Center - Whitefield',
    tag: 'Full Spectrum Diagnostics',
    address: 'Sigma Soft Tech Park Wing B, Varthur Main Road, Whitefield',
    city: 'Bengaluru, Karnataka 560066',
    phone: '+91 (080) 4920-8833',
    hours: '06:30 AM - 10:00 PM (Daily)',
    facilities: ['1.5T MRI', 'Multislice CT', 'Ultrasound Doppler', 'Complete Pathology', 'Corporate Health Checkup Desk'],
    emergencyAvailable: false,
    parkingAvailable: true,
    homeCollectionHub: true
  },
  {
    name: 'Nu Health Care Wellness & Pathology - Jayanagar',
    tag: 'Pathology & Cardiac Station',
    address: '9th Main Road, 4th Block, Near Cool Joint, Jayanagar',
    city: 'Bengaluru, Karnataka 560011',
    phone: '+91 (080) 4920-8844',
    hours: '06:30 AM - 09:00 PM (Daily)',
    facilities: ['Zero-Wait Blood Draw', 'ECG & TMT Stress Test', 'Echocardiography', 'Home Collection Fleet'],
    emergencyAvailable: false,
    parkingAvailable: true,
    homeCollectionHub: true
  }
];

export const ACCREDITATIONS = [
  {
    title: 'NABL ISO 15189:2022',
    subtitle: 'National Accreditation Board for Testing and Calibration Laboratories',
    certNo: 'MC-3918 / Valid thru 2028'
  },
  {
    title: 'CAP Accredited',
    subtitle: 'College of American Pathologists External Proficiency Certified',
    certNo: 'CAP #89104-A'
  },
  {
    title: 'AERB Approved',
    subtitle: 'Atomic Energy Regulatory Board Certified Radiation Safety Standard',
    certNo: 'AERB/RSD/MED-2024'
  },
  {
    title: 'ICMR Registered',
    subtitle: 'Indian Council of Medical Research Certified Molecular Center',
    certNo: 'ICMR-NUHC-BLR-09'
  }
];

export const PATIENT_FAQS = [
  {
    q: 'How does Nu Health Care Free Home Sample Collection service work?',
    a: 'Simply select your tests or packages online, choose your preferred morning or evening 1-hour slot, and provide your address. Our certified, vaccinated phlebotomist arrives equipped with single-use sterile vacutainers, alcohol wipes, and a temperature-monitored cold-chain carrier box. Barcodes are pasted in front of you.'
  },
  {
    q: 'What are the fasting guidelines for blood tests like Lipid and Glucose?',
    a: 'For Fasting Blood Sugar, Lipid Profile, and Full Body Checkups, overnight fasting for 10 to 12 hours is required. You can drink plain water to stay well hydrated (which actually helps veins dilate for an easy, painless blood draw), but avoid tea, coffee, milk, juices, breakfast, or smoking.'
  },
  {
    q: 'How soon will I receive my official diagnostic report?',
    a: 'Routine blood tests (CBC, Glucose, Liver & Kidney profiles) are processed within 4 to 6 hours. Specialized tests like Vitamin D, Thyroid, and HbA1c are released same-day by 7:00 PM. High-resolution MRI and CT scans are reported by senior Radiologists within 6 to 8 hours. You will receive an SMS and WhatsApp message with a direct download link immediately upon pathologist sign-off.'
  },
  {
    q: 'Can I upload a handwritten prescription from my doctor?',
    a: 'Yes! Use our "Upload Doctor\'s Prescription" button. Our medical transcription team reviews the prescription, itemizes the exact required tests, applies available package discounts, and contacts you within 15 minutes to confirm your preferred appointment.'
  },
  {
    q: 'Are Nu Health Care diagnostic reports accepted by all hospitals, doctors, and insurance TPAs?',
    a: 'Absolutely. Group\'s of Nu Health Care Diagnostic is NABL (ISO 15189:2022) accredited and ICMR approved. Our digital reports come with QR code verification, doctor electronic signatures, and medical council registration numbers, universally accepted across all major hospitals, visa authorities, and insurance TPAs nationwide.'
  }
];
