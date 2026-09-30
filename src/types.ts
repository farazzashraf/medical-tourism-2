export type Specialty = 'dental' | 'eyes' | 'ortho' | 'wellness' | 'ayurveda' | 'ayurvedic' | 'cosmetic';

export interface TreatmentInfo {
  id: Specialty;
  name: string;
  tagline: string;
  ukAvgWait: string;
  keralaWait: string;
  ukAvgCost: string;
  keralaCost: string;
  savingsPercent: number;
  description: string;
  procedures: {
    title: string;
    details: string;
    ukCost: string;
    keralaCost: string;
  }[];
  recoveryDays: string;
  highlights: string[];
  bannerImage: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: Specialty;
  experienceYears: number;
  qualifications: string[];
  hospital: string;
  hospitalLocation: string;
  avatar: string;
  surgeriesCount: string;
  about: string;
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  accreditations: string[];
  specialties: string[];
  beds: number;
  image: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  origin: string; // e.g., 'London, UAE'
  treatment: string;
  specialty: Specialty;
  rating: number;
  story: string;
  headline: string;
  savedAmount: string;
  avatar: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  specialty: Specialty;
  image: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  treatment: Specialty | string;
  preferredHospital?: string;
  travelTimeline: string;
  medicalDetails: string;
  hasMedicalReports: boolean;
  uploadedFiles?: string[];
}

