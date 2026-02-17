import {  Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { handleServiceBooking } from '../services/bookingService';
import { HOME_CARE_SERVICES } from '../data/servicesData'; // Import data

const HomeCare = () => {
  const [selectedService, setSelectedService] = useState(0);

  // We use the data from our external file
  const services = HOME_CARE_SERVICES;

  return (
    <section id="home-care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              Home Healthcare Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Care at Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Doorstep
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book qualified healthcare professionals instantly, just like ordering a ride
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(index)}
              className={`group cursor-pointer bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                selectedService === index
                  ? 'border-teal-500 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-teal-300'
              }`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon size={32} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                <span className="text-gray-500 text-sm">{service.duration}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents double-triggering
                  setSelectedService(index); // Updates the UI color immediately
                  handleServiceBooking(service.title, service.price); // Sends to WhatsApp
                }}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedService === index
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {selectedService === index ? 'Book Now' : 'Book Now'}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Select Service', desc: 'Choose the healthcare service you need' },
                  { step: '2', title: 'Book Instantly', desc: 'Pick a convenient date and time slot' },
                  { step: '3', title: 'Track Professional', desc: 'Real-time tracking of your healthcare professional' },
                  { step: '4', title: 'Get Care', desc: 'Receive quality care at your home' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="font-semibold text-gray-900">Service Details</span>
                  <span className="text-sm text-teal-600 font-medium">Available 24/7</span>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <MapPin className="text-teal-600" size={24} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Service Location</p>
                    <p className="font-semibold text-gray-900">Your Home Address</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Clock className="text-teal-600" size={24} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Arrival Time</p>
                    <p className="font-semibold text-gray-900">Within 2 hours</p>
                  </div>
                </div>

                <button 
                  onClick={() => handleServiceBooking(services[selectedService].title, services[selectedService].price)}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Request {services[selectedService].title} Now
                </button>

                <p className="text-center text-sm text-gray-500">
                  All professionals are verified & trained
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCare;