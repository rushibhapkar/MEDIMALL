import { Star, Award, Calendar, Video, UserCircle2 } from 'lucide-react';
import { DOCTORS } from '../data/doctorData';
import { handleWhatsAppBooking } from '../services/bookingService';

const Doctors = () => {
  const doctors = DOCTORS;

  const specialties = [
    'Cardiology',
    'Pathology',
    'Paediatrics',
    'General Medicine',
    'Diabetes & Obesity',
    'Preventive Health',
  ];

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 mx-auto w-fit">
              <Award size={16} />
              Divine Care Specialist Panel
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Expert Doctors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consult with the Jeswani family's expert panel for comprehensive cardiac, pediatric, and general healthcare.
          </p>
        </div>

        {/* Specialty Filter - Now Interactive */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {specialties.map((specialty, index) => (
              <button
                key={index}
                onClick={() => handleWhatsAppBooking(`Hello! I'm looking to consult with a specialist in *${specialty}*. Please guide me with available doctors.`)}
                className="px-6 py-2 bg-white rounded-full text-gray-700 font-medium hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-8 text-white">
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    Available for Consultation
                  </div>
                </div>

                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UserCircle2 size={64} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-center mb-1">{doctor.name}</h3>
                <p className="text-center text-teal-100">{doctor.specialty}</p>
                <p className="text-center text-xs mt-2 italic opacity-90">"{doctor.tagline}"</p>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">Expert</span>
                  </div>
                  <span className="text-sm text-gray-600">Divine Care Panel</span>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-bold text-gray-900 text-sm border-b pb-1">Key Services:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {doctor.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-baseline gap-2 mb-6 pb-4 border-b">
                  <span className="text-2xl font-bold text-gray-900">Charitable</span>
                  <span className="text-gray-600">consultation rates</span>
                </div>

                <div className="flex gap-2">
                  {/* Updated Clinic Booking Button */}
                  <button 
                    onClick={() => handleWhatsAppBooking(`Hi! I'd like to book an *In-Clinic* appointment with *${doctor.name}* at your Hadapsar clinic.`)}
                    className="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} />
                    Book Clinic
                  </button>
                  
                  {/* Updated Video Booking Button */}
                  <button 
                    onClick={() => handleWhatsAppBooking(`Hi! I'm interested in a *Video Consultation* with *${doctor.name}*. Please let me know the process and fees.`)}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-300 group/video"
                  >
                    <Video size={20} className="text-gray-600 group-hover/video:text-teal-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tele-Consultation Footer */}
        <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Tele-Consultation Available
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with our specialists instantly via phone or video. Call us at <strong>8408000554</strong> to arrange a priority consultation.
              </p>
              <button 
                onClick={() => handleWhatsAppBooking("Hello! I need to arrange a priority *Tele-Consultation* with a health advisor. Can you help me set this up?")}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Talk to Health Advisor
              </button>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-4">Why Divine Care Doctors?</h4>
              <ul className="space-y-3">
                {[
                  'DNB & MD Qualified Specialists',
                  'In-house Cardiology & Pathology setups',
                  'Digital prescriptions & reports',
                  'Serving Hadapsar community for years',
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Award size={12} />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;