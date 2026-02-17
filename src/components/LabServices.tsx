import { Microscope } from 'lucide-react';
import { LAB_FEATURES, INDIVIDUAL_TESTS, VACCINATION_DATA } from '../data/labData';
import { handleWhatsAppBooking } from '../services/bookingService';

const LabServices = () => {
  const features = LAB_FEATURES;
  const tests = INDIVIDUAL_TESTS;
  const vaccines = VACCINATION_DATA;

  return (
    <section id="lab" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 mx-auto w-fit">
              <Microscope size={16} />
              Pathology & Diagnostic Lab
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accurate Lab Tests at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Your Home
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NABL certified lab with free home sample collection and digital reports verified by experts
          </p>
        </div>

        {/* Features Grid - No Changes */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Popular Tests Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Diagnostic Profiles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group"
              >
                {test.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Popular
                  </div>
                )}

                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <test.icon size={28} />
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">{test.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{test.description}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{test.price}</span>
                  <span className="text-sm text-gray-400 font-medium">Charitable Trust Rate</span>
                </div>

                {/* Updated Test Booking Button */}
                <button 
                  onClick={() => handleWhatsAppBooking(`Hello! I want to book a *${test.name}* at the Charitable Trust rate of ${test.price}. Please let me know the available time slots for home sample collection.`)}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Vaccination Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Immunization Services</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vaccines.map((vax, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-center py-2 font-semibold text-sm">
                  Available for Home Visit
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{vax.name}</h4>
                  <p className="text-blue-600 font-medium mb-4 text-sm">{vax.target}</p>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <span className="font-bold">Schedule:</span> {vax.schedule}
                    </p>
                  </div>

                  {/* Updated Vaccine Booking Button */}
                  <button
                    onClick={() => handleWhatsAppBooking(`Hello! I would like to inquire about the *${vax.name}* vaccination for ${vax.target}. Could you please provide the current pricing and schedule a home visit?`)}
                    className="w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:shadow-xl transform hover:scale-105"
                  >
                    Inquire for Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Test Footer - No Changes to style, just ensured service link */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Lab Profiles?</h4>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact Dr. Reshma Jeswani's team for custom test packages or to share your doctor's prescription directly.
          </p>
          <button 
            onClick={() => handleWhatsAppBooking("Hello! I have a custom prescription for lab tests from my doctor. Could you help me with the rates and schedule a home collection?")}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Contact Lab Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default LabServices;