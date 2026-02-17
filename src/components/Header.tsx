import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { NavItem } from '../types';
import { AREAS, handleWhatsAppBooking } from '../services/bookingService';
import BookingModal from './BookingModal';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState('Magarpatta');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navItems: NavItem[] = [
    { label: 'Home Care', href: '#home-care' },
    { label: 'Pharmacy', href: '#pharmacy' },
    { label: 'Membership', href: '#membership' },
    { label: 'Lab Services', href: '#lab' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Consultation', href: '#consultation' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Calculate offset for sticky header
      const offset = 120; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sticky Container for both Top Bar and Header */}
      <div className="sticky top-0 z-50 w-full">
        {/* Top Bar */}
        <div className="bg-teal-700 text-white py-2 px-4 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone size={14} className="animate-pulse" />
                <button onClick={() => handleWhatsAppBooking()} className="hover:underline font-medium">
                  Emergency: 9096938883
                </button>
              </div>
            </div>
            <div className="text-[10px] md:text-sm font-medium italic opacity-90">
              A Charitable Trust Initiative
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`transition-all duration-300 ${
            isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md border border-gray-100">
                  <img
                    src={logo}
                    alt="MEDIMALL Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">MEDIMALL</h1>
                  <p className="text-[10px] md:text-xs text-teal-600 font-bold uppercase tracking-widest hidden md:block">
                    Divine Care Hospital
                  </p>
                </div>
              </div>

              <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="hidden lg:block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Book Appointment
                </button>

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          
          {/* Menu Content - top-[100px] accounts for TopBar + Header height */}
          <div className="absolute top-[100px] left-0 right-0 bg-white shadow-2xl rounded-b-3xl p-6 mx-4 animate-slideDown flex flex-col z-50 max-h-[calc(100vh-120px)] overflow-hidden">
            <div className="overflow-y-auto flex-1 pr-2">
              <nav className="flex flex-col gap-2">
                <div className="flex items-center gap-2 p-4 bg-teal-50 rounded-xl text-teal-800 mb-2">
                  <MapPin size={18} className="text-teal-600" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold opacity-60">Service Area</span>
                    <span className="font-bold text-sm">{selectedArea}</span>
                  </div>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-gray-700 hover:text-teal-600 font-semibold py-4 px-4 rounded-xl hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsBookingModalOpen(true);
                }}
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-teal-200 active:scale-95 transition-transform"
              >
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Header;