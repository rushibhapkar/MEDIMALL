import { Video, Phone, CheckCircle } from 'lucide-react';

export const CONSULTATION_MODES = [
  {
    id: 'video',
    icon: Video,
    title: 'Video Consultation',
    description: 'Face-to-face clinical consultation with our specialist panel.',
    price: '₹500',
    duration: 'Priority Slot',
    features: [
      'Digital Prescription',
      'Follow-up Support',
      'Specialist Advice',
      'Hadapsar Area Focus'
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: true,
  },
  {
    id: 'voice',
    icon: Phone,
    title: 'Voice Consultation',
    description: 'Connect with our doctors via phone call for quick advice.',
    price: '₹300',
    duration: 'Quick Consult',
    features: [
      'Instant Connection',
      'Prescription via WhatsApp',
      'Lab Report Review',
      'Referral Support'
    ],
    color: 'from-green-500 to-emerald-500',
    popular: false,
  }
];

export const CONSULTATION_STEPS = [
  {
    step: '1',
    title: 'Request Booking',
    description: 'Call 8408000554 or send a message to request a slot.',
  },
  {
    step: '2',
    title: 'Expert Assignment',
    description: 'You are assigned to the relevant specialist (Cardio/Paed/Physician).',
  },
  {
    step: '3',
    title: 'Digital Consult',
    description: 'Discuss your health concerns via Video or Phone call.',
  },
  {
    step: '4',
    title: 'Get Prescription',
    description: 'Receive your digital prescription and care plan instantly.',
  },
];

export const CONSULTATION_STATS = [
  { label: 'Specialist Doctors', value: 'Jeswani Family' },
  { label: 'Patient Rating', value: '4.9/5' },
  { label: 'Primary Service', value: 'Tele-Health' },
];