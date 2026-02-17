import { Syringe, Calendar, Clock } from 'lucide-react';
import { VACCINATION_HUB_DATA } from '../data/vaccinationData';
import { handleWhatsAppBooking } from '../services/bookingService';

const Vaccination = () => {
  const vaccines = VACCINATION_HUB_DATA;

  return (
    <section id="vaccination" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 mx-auto w-fit">
              <Syringe size={16} />
              Vaccination & Immunization Hub
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Vaccination Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adult and Paediatric vaccines available under Dr. Rachna Jeswani (Paediatrician) and our specialist team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Calendar, title: 'Book Appointment', desc: 'Call 8408000554 to schedule' },
            { icon: Syringe, title: 'Paediatric & Adult', desc: 'Full range of WHO vaccines' },
            { icon: Clock, title: 'Home Vaccination', desc: 'Available for your convenience' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {vaccines.map((category, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-green-500 hover:shadow-xl transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <category.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{category.category}</h3>
                    <p className="text-white/90">{category.vaccines.length} options available</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.vaccines.map((vaccine, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {vaccine.name}
                        </h4>
                        <span className="text-sm font-bold text-green-600">{vaccine.price}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">{vaccine.age}</p>
                      <button 
                        onClick={() => handleWhatsAppBooking(`Hello, I want to book the ${vaccine.name} vaccine.`)}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Detailed Vaccine Schedule
            </h3>
            <p className="text-lg mb-8 text-green-50">
              For Japanese Encephalitis, Varicella, and Chronic Disease risk groups, please consult Dr. Rachna Jeswani.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleWhatsAppBooking("Please share the full Vaccination schedule for adults and children.")}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Inquire Schedule
              </button>
              <button 
                onClick={() => handleWhatsAppBooking("I want to talk to an expert about adult/pediatric vaccines.")}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50"
              >
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vaccination;