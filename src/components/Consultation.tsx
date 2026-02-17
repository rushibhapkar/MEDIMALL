import { Clock, CheckCircle } from 'lucide-react';
import { CONSULTATION_MODES, CONSULTATION_STEPS, CONSULTATION_STATS } from '../data/consultationData';
import { handleWhatsAppBooking } from '../services/bookingService';
import { useState } from 'react';
const Consultation = () => {
const [activeIndex, setActiveIndex] = useState(0); // Sets the first card as blue by default

  return (
    <section id="consultation" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 mx-auto w-fit">
              Online Consultation Portal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Specialist Advice{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              From Your Home
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct access to the Jeswani specialist panel for Cardiology, Paediatrics, and General Medicine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {CONSULTATION_MODES.map((mode, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                mode.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {mode.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-center py-2 font-semibold text-sm">
                  Recommended Mode
                </div>
              )}

              <div className={`bg-gradient-to-br ${mode.color} p-8 text-white relative overflow-hidden`}>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <mode.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{mode.title}</h3>
                  <p className="text-white/90 text-sm">{mode.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">{mode.price}</span>
                  <span className="text-gray-600">/ session</span>
                </div>
                <p className="text-center text-sm text-gray-600 mb-6">{mode.duration}</p>

                <ul className="space-y-3 mb-6">
                  {mode.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
  onClick={() => {
    setActiveIndex(index); // Changes the color to blue when clicked
    handleWhatsAppBooking(`I'd like to book a ${mode.title}.`);
  }}
  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
    activeIndex === index
      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg scale-105'
      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
  }`}
>
  {activeIndex === index ? 'Selected' : 'Book Now'}
</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {CONSULTATION_STEPS.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < CONSULTATION_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gray-100"></div>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Clock size={40} className="text-blue-200" />
            <div>
              <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
              <p className="text-blue-100">Our team is available for urgent tele-consultation requests.</p>
            </div>
          </div>
          <a 
            href="tel:8408000554"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
          >
            Call 8408000554
          </a>
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-6">
            {CONSULTATION_STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;