import React, { useState } from 'react';
import { Stethoscope, Syringe, TestTube, Home, Activity, Clock } from 'lucide-react';
import BookingModal from './BookingModal';

const services = [
  {
    id: 'consultation',
    title: 'Doctor Consultation',
    desc: 'Expert advice at your doorstep or online.',
    icon: Stethoscope,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'vaccination',
    title: 'Vaccination',
    desc: 'Safe & painless immunization for all ages.',
    icon: Syringe,
    color: 'from-teal-500 to-emerald-500'
  },
  {
    id: 'lab-test',
    title: 'Lab Test @ Home',
    desc: 'Professional sample collection within 60 mins.',
    icon: TestTube,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'home-nursing',
    title: 'Home Nursing',
    desc: '24/7 compassionate care by certified nurses.',
    icon: Home,
    color: 'from-indigo-500 to-purple-600'
  }
];

const ServiceBooking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Book Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a service below to book an appointment instantly via WhatsApp. 
            Our team will reach out to confirm your slot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-2xl hover:shadow-teal-100 transition-all duration-300 border-b-4 border-b-transparent hover:border-b-teal-500"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                <service.icon size={30} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>

              <button
                onClick={() => openBooking(service.title)}
                className="flex items-center gap-2 text-teal-600 font-bold text-sm group-hover:gap-3 transition-all"
              >
                Book Now <Clock size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* The Single Reusable Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialService={selectedService}
      />
    </section>
  );
};

export default ServiceBooking;