import { Heart } from 'lucide-react';
import { PHARMACY_PRODUCTS, PHARMACY_FEATURES } from '../data/pharmacyData';
import { handleWhatsAppBooking } from '../services/bookingService';
import { useState } from 'react';

const Pharmacy = () => {
  // Mapping the imported data to the local constants used in your JSX
  const features = PHARMACY_FEATURES;
  const products = PHARMACY_PRODUCTS;
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const toggleLike = (index: number) => {
  setLikedProducts(prev => 
    prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
  );
};
  return (
    <section id="pharmacy" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Online Pharmacy & Equipment Store
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Medicines &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Medical Equipment
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genuine medicines and certified medical equipment delivered to your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <feature.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2"
            >
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-8">
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {product.discount}
                  </span>
                </div>

                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <product.icon size={48} />
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-1">{product.name}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => handleWhatsAppBooking(`Hello Medimall! I want to order *${product.name}* (Price: ${product.price}). Please let me know the availability and delivery details.`)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Order Now
                  </button>
                 <button 
  onClick={() => toggleLike(index)}
  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform active:scale-125 ${
    likedProducts.includes(index) ? 'bg-red-50' : 'bg-gray-100'
  }`}
>
  <Heart 
    size={20} 
    className={`transition-colors duration-300 ${
      likedProducts.includes(index) ? 'fill-red-500 text-red-500' : 'text-gray-600'
    }`} 
  />
</button>
                </div>

                {product.inStock && (
                  <p className="text-center text-xs text-green-600 mt-3 font-medium">
                    ✓ In Stock - Ships Today
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Upload Prescription & Order
              </h3>
              <p className="text-lg mb-6 text-green-50">
                Simply upload your prescription and we'll deliver your medicines within 2 hours
              </p>
              <button 
                onClick={() => handleWhatsAppBooking("Hello Medimall! I have a prescription I'd like to upload for a medicine order. Please guide me on how to proceed.")}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Upload Prescription
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-green-50">Take a photo or upload prescription</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-green-50">Our pharmacist will verify it</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-green-50">Medicines delivered to your door</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pharmacy;