import { useState } from 'react';
import { Heart, MapPin, ShieldCheck, Zap, ArrowRight, Activity, PhoneCall } from 'lucide-react';
import { handleWhatsAppBooking } from '../services/bookingService';
import BookingModal from './BookingModal';

const Hero = () => {
  const stats = [
    { icon: MapPin, value: '5km', label: 'Radius Coverage' },
    { icon: Zap, value: 'Instant', label: 'Home Response' },
    { icon: Activity, value: 'Premium', label: 'Medical Mall' },
    { icon: ShieldCheck, value: 'Verified', label: 'Expert Care' },
  ];

  // Function to handle smooth scroll
  // Inside Hero.tsx
// Inside Hero.tsx
const scrollToServices = () => {
  // Change 'lab-services' back to 'services'
  const element = document.getElementById('services'); 
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden border-b border-gray-100">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content: Branding & Value Proposition */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-white border border-teal-100 text-teal-700 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              Serving Magarpatta, Amanora & Hadapsar
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              MEDIMALL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Divine Care
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience Pune's first integrated <span className="text-gray-900 font-bold">Medical Mall</span>. Professional hospital services, diagnostics, and specialist care delivered straight to your home.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToServices}
                className="group bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Service Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => handleWhatsAppBooking("Emergency Assistance Required")}
                className="bg-white text-red-600 border-2 border-red-100 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 hover:border-red-200 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={20} />
                Emergency 24/7
              </button>
            </div>

            {/* Stats/Trust Bar */}
            <div className="flex flex-wrap gap-8 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl font-black text-gray-900">{stat.value}</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual: Interactive Trust Card */}
          <div className="relative animate-fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-cyan-500/10 rounded-[3rem] blur-2xl"></div>
            
            <div className="relative bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl p-4 md:p-8 transform hover:rotate-1 transition-transform duration-500">
              {/* Main Service Card UI */}
              <div className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">Online Now</div>
                </div>
                
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl flex items-center justify-center text-white shadow-xl mb-6 transform -rotate-6 group-hover:rotate-0 transition-transform">
                  <Heart size={48} fill="currentColor" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Residential Care</h3>
                <p className="text-gray-500 text-sm mb-6">Expert nursing & diagnostics within a 5km radius of Magarpatta City.</p>
                
                <div className="space-y-3">
                   <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xs">Rx</div>
                      <span className="text-xs font-bold text-gray-700">Digital Prescription Support</span>
                   </div>
                   <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center font-bold text-xs">Lab</div>
                      <span className="text-xs font-bold text-gray-700">Blood Test @ Home within 60 mins</span>
                   </div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-8 flex justify-center">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden flex items-center justify-center text-[10px] font-bold">
                        Dr. {i}
                     </div>
                   ))}
                </div>
                <div className="ml-4 text-left">
                  <p className="text-xs font-black text-gray-900">Expert Panel</p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">10+ Specialist Doctors</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;