import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FOOTER_AREAS, FOOTER_SERVICES, FOOTER_CERTIFICATIONS, CONTACT_INFO } from '../data/footerData';
import logo from '../assets/logo.png';
const Footer = () => {
  // Mapping labels to IDs for navigation
  const quickLinks = [
    { name: 'About Our Doctors', href: '#doctors' },
    { name: 'Laboratory Services', href: '#lab' },
    { name: 'Online Consultation', href: '#consultation' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
  ];

  // Helping map the footer services from your data to your section IDs
  const getServiceHref = (service: string) => {
    const s = service.toLowerCase();
    if (s.includes('lab')) return '#lab';
    if (s.includes('pharmacy')) return '#pharmacy';
    if (s.includes('care')) return '#home-care';
    if (s.includes('member')) return '#membership';
    if (s.includes('vax') || s.includes('vaccination')) return '#vaccination';
    return '#';
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Service Coverage Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Service Coverage Areas</h3>
            <p className="text-teal-100 text-lg">
              Priority home care and delivery across East Pune
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {FOOTER_AREAS.map((area, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-teal-400 group-hover:text-teal-200 transition-colors" />
                  <span className="font-medium text-sm">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
    <img 
      src={logo} 
      alt="MEDIMALL Logo" 
      className="w-full h-full object-contain p-1.5" 
    />
  </div>
              <div>
                <h3 className="text-2xl font-bold">MEDIMALL</h3>
                <p className="text-teal-300 text-sm">Specialist Health Hub</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Founded by the Jeswani family to provide expert Cardiology, Paediatrics, and Laboratory services to the Hadapsar community.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-teal-300">Our Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service, index) => (
                <li key={index}>
                  <a href={getServiceHref(service)} className="text-gray-300 hover:text-teal-300 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-teal-400 rounded-full group-hover:scale-150 transition-all"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-teal-300">Resources</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-teal-300 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-teal-300">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-400 text-xs">Available 24/7 for Emergency</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">{CONTACT_INFO.email}</p>
                  <p className="text-gray-400 text-xs">Reports & Appointments</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {FOOTER_CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full"
              >
                <cert.icon size={20} className="text-teal-400" />
                <span className="font-semibold text-sm">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Divine Care Hadapsar. Registered Health Hub.
            </p>
            <div className="flex gap-6 text-xs text-gray-400">
              <a href="#" className="hover:text-teal-300">Privacy Policy</a>
              <a href="#" className="hover:text-teal-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;