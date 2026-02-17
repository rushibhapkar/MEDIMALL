import { Truck, Syringe, Scissors,  } from 'lucide-react';
export const HOME_CARE_SERVICES = [
  {
    icon: Truck,
    title: 'X-Ray at Home',
    description: 'Digital X-ray services for Magarpatta, Amanora, & Hadapsar.',
    price: 'Call for Quote', // Your notes didn't specify a price
    duration: 'per visit',
    features: ['Digital Film', 'Radiologist Report'],
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: Scissors,
    title: 'Surgical & Minor Procedures',
    description: 'Clinical procedures performed by professionals.',
    price: 'Charitable Rates', // Matches your vision
    duration: 'starts at',
    features: ['Suturing', 'Foreign Body Removal', 'Dressing', 'Ear Piercing'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Syringe,
    title: 'Home Nursing Services',
    description: 'IM/IV Injection, Dressing, and Nebulization.',
    price: 'Affordable',
    duration: 'per visit',
    features: ['Nebulization', 'Enema', 'Catheter Care', 'Injections'],
    color: 'from-teal-500 to-emerald-500',
  }
];