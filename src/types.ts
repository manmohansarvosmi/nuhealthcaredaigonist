export type TestCategory = 
  | 'all'
  | 'popular'
  | 'pathology'
  | 'radiology'
  | 'cardiology'
  | 'diabetes'
  | 'vitamins'
  | 'women';

export interface DiagnosticTest {
  id: string;
  name: string;
  category: 'pathology' | 'radiology' | 'cardiology' | 'diabetes' | 'vitamins' | 'women';
  sampleType: 'Blood' | 'Urine' | 'Imaging Scan' | 'ECG / Sensor' | 'Swab';
  turnaroundTime: string;
  fastingRequired: boolean;
  fastingHours?: number;
  preparationNote: string;
  originalPrice: number;
  price: number;
  parametersCount: number;
  parameters: string[];
  description: string;
  isPopular?: boolean;
}

export interface HealthPackage {
  id: string;
  name: string;
  tagline: string;
  recommendedFor: string;
  totalParameters: number;
  originalPrice: number;
  price: number;
  fasting: string;
  reportTime: string;
  categoriesCovered: string[];
  keyTests: string[];
  featured?: boolean;
}

export interface PatientReportParameter {
  name: string;
  result: number | string;
  unit: string;
  referenceRange: string;
  minNormal?: number;
  maxNormal?: number;
  status: 'normal' | 'elevated' | 'low' | 'borderline';
  method: string;
}

export interface DiagnosticReport {
  reportId: string;
  barcode: string;
  patientName: string;
  patientAge: number;
  patientGender: 'Male' | 'Female' | 'Other';
  referredBy: string;
  sampleCollectedAt: string;
  reportedAt: string;
  testTitle: string;
  category: string;
  overallImpression: string;
  clinicalRemarks: string;
  pathologist: {
    name: string;
    designation: string;
    regNumber: string;
  };
  parameters: PatientReportParameter[];
}

export interface DoctorProfile {
  name: string;
  qualification: string;
  specialty: string;
  experience: string;
  role: string;
  bio: string;
  availability: string;
}

export interface DiagnosticCenter {
  name: string;
  tag: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  facilities: string[];
  emergencyAvailable: boolean;
  parkingAvailable: boolean;
  homeCollectionHub: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  type: 'test' | 'package';
  turnaroundTime: string;
  fastingRequired?: boolean;
}

export interface BookingDetails {
  patientName: string;
  patientAge: string;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  serviceType: 'home_collection' | 'center_visit';
  selectedDate: string;
  selectedTimeSlot: string;
  address?: string;
  pinCode?: string;
  selectedCenter?: string;
  notes?: string;
}
