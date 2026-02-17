import { Microscope, ShieldCheck, Thermometer, Activity, FileCheck, Baby } from 'lucide-react';

export const LAB_FEATURES = [
  { icon: ShieldCheck, title: 'Expert Pathologist', desc: "Reports checked by Dr. Reshma Jeswani (MBBS, DCP, DNB)" },
  { icon: Microscope, title: 'Divine Care Lab', desc: 'Pathology & Diagnostic services in Hadapsar region' },
];

export const INDIVIDUAL_TESTS = [
  {
    name: 'Fever Profile',
    description: 'Complete screening for viral and bacterial infections',
    price: '₹799',
    icon: Thermometer,
    popular: true,
  },
  {
    name: 'Executive Health Checkup',
    description: 'Verified by our in-house DNB Pathologist',
    price: '₹2499',
    icon: Activity,
    popular: true,
  },
  {
    name: 'Basic Health Checkup',
    description: 'Annual health screening for prevention',
    price: '₹999',
    icon: FileCheck,
    popular: false,
  }
];

export const VACCINATION_DATA = [
  {
    name: 'Adult Vaccines',
    target: 'Cervical Cancer, Flu, Hep B',
    schedule: 'HPV (3 doses), Zoster, Pneumococcal',
    icon: ShieldCheck
  },
  {
    name: 'Paediatric Vaccines',
    target: 'Infant & Child',
    schedule: 'BCG, OPV, HEP B, DTP, IPV, MMR',
    icon: Baby
  }
];