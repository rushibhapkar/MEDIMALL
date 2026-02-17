import React, { useState } from 'react';
import { X, User, Phone, ClipboardList, Calendar, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const BookingModal = ({ isOpen, onClose, initialService = "" }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    date: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatting the WhatsApp message
    const text = `*New Appointment Request*%0A` +
                 `--------------------------%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Date:* ${formData.date}%0A` +
                 `*Note:* ${formData.message || 'No additional notes'}`;

    window.open(`https://wa.me/918408000554?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-fadeInUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white text-center relative">
          <button onClick={onClose} className="absolute right-4 top-4 hover:rotate-90 transition-transform">
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold">Book Appointment</h3>
          <p className="text-teal-50 text-sm">Fill in details to connect via WhatsApp</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-teal-600" size={20} />
            <input
              required
              type="text"
              placeholder="Patient Full Name"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 text-teal-600" size={20} />
            <input
              required
              type="tel"
              placeholder="Contact Number"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="relative">
            <ClipboardList className="absolute left-3 top-3 text-teal-600" size={20} />
            <select
              required
              defaultValue={initialService}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none appearance-none bg-white transition-all"
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="" disabled>Select Service</option>
              <option value="Doctor Consultation">Doctor Consultation</option>
              <option value="Vaccination">Vaccination</option>
              <option value="Lab Test">Lab Test</option>
              <option value="Equipment Rental">Equipment Rental</option>
              <option value="Home Nursing">Home Nursing</option>
            </select>
          </div>

          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-teal-600" size={20} />
            <input
              required
              type="date"
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-2"
          >
            <Send size={20} />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;