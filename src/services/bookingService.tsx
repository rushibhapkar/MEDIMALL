
// src/services/bookingService.ts
export const AREAS = ['Magarpatta', 'Amanora', 'Hadapsar', 'Keshav Nagar', 'Mundhwa', 'Kharadi'];

export const handleWhatsAppBooking = (message: string = "Hello, I want to book an appointment.") => {
  const phone = "9096938883";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// NEW: Add this for the HomeCare cards specifically
export const handleServiceBooking = (serviceTitle: string, price: string) => {
  const message = `Hello Medimall! I want to book the *${serviceTitle}* service (Starting at ${price}). Please guide me with the next steps.`;
  handleWhatsAppBooking(message);
};