// src/types/index.ts

export interface NavItem {
  label: string;
  href: string;
}

// Add this new interface specifically for HomeCare cards
export interface HomeCareService {
  icon: any; // For Lucide icons
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  color: string;
}

export interface MedicalService {
  id: string;
  title: string;
  description: string;
  price?: number;
  category: 'HomeCare' | 'Lab' | 'Pharmacy' | 'Emergency'; // Added for easier filtering
  iconName: string; 
}

export interface Doctor {
  name: string;
  specialty: string;
  qualifications: string[];
  availability: string;
  image?: string; // Added for the Doctors section
}

export interface ServiceArea {
  name: string;
}