import { Baby, Users, Shield } from 'lucide-react';

export const VACCINATION_HUB_DATA = [
  {
    category: 'Adult Immunization',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    vaccines: [
      { name: 'Cervical Cancer (HPV)', age: '15-45 yrs (3 doses)', price: 'Consult' },
      { name: 'Annual Flu (Influenza)', age: '1 dose annually', price: 'Consult' },
      { name: 'Hepatitis B', age: '3 doses (0, 1, 6 mo)', price: 'Consult' },
      { name: 'Pneumococcal (PCV 13)', age: '1 dose', price: 'Consult' },
      { name: 'Pneumococcal (PPSV23)', age: '1 dose (2 mo apart)', price: 'Consult' },
      { name: 'Zoster Recombinant', age: '2 doses (2-6 mo apart)', price: 'Consult' },
    ],
  },
  {
    category: 'Child & Maternal',
    icon: Baby,
    color: 'from-pink-500 to-rose-500',
    vaccines: [
      { name: 'BCG, OPV, HEP B', age: 'At Birth', price: 'Consult' },
      { name: 'DTP, IPV, HEP B, HIB', age: 'Paediatric Schedule', price: 'Consult' },
      { name: 'Rotavirus', age: 'Infant', price: 'Consult' },
      { name: 'MMR', age: '9-15 Months', price: 'Consult' },
      { name: 'Varicella', age: '2 doses (preconception)', price: 'Consult' },
      { name: 'Tdap / Td', age: 'Booster every 10 yrs', price: 'Consult' },
    ],
  },
  {
    category: 'Special Groups',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    vaccines: [
      { name: 'Japanese Encephalitis', age: 'Endemic areas', price: 'Consult' },
      { name: 'Typhoid (Vi-PS/TCV)', age: 'Adults/Paediatric', price: 'Consult' },
      { name: 'Meningococcal', age: 'High Risk Group', price: 'Consult' },
      { name: 'Chronic Disease Shield', age: 'Heart/Lung/Liver patients', price: 'Consult' },
    ],
  },
];