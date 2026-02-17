import { Check, Crown, Star, Zap, Shield, Users } from 'lucide-react';
import { handleWhatsAppBooking } from '../services/bookingService';
const Membership = () => {
  const benefits = [
    'Unlimited doctor consultations',
    'Free home sample collection',
    '20% discount on all lab tests',
    'Free annual health checkup',
    'Priority appointment booking',
    'Free medicine delivery',
    '24/7 emergency support',
    'Health insurance assistance',
    'Dedicated health manager',
    'Free vaccination consultations',
    'Complimentary diet planning',
    'Access to health workshops',
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Members' },
    { icon: Star, value: '4.9/5', label: 'Member Rating' },
    { icon: Shield, value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="membership" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Crown size={16} />
              Premium Membership
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Healthcare at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
              ₹3,000/Year
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of families who trust Divine Care for their complete healthcare needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <stat.icon size={32} />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
            <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Divine Care Premium</h3>
                    <p className="text-orange-100">Residential Membership Plan</p>
                  </div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse-slow">
                    <Crown size={40} />
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold">₹3,000</span>
                  <span className="text-xl text-orange-100">/ year</span>
                </div>

                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 inline-flex">
                  <Zap size={20} className="text-yellow-300" />
                  <span className="font-semibold">Save ₹15,000+ annually</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Check className="text-green-500" size={24} />
                  Complete Benefits Package
                </h4>

                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <Check size={14} />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 mb-6">
                <h5 className="font-bold text-gray-900 mb-4 text-lg">Perfect for Families</h5>
                <p className="text-gray-700 mb-4">
                  Cover your entire family under one plan. Add up to 6 family members at no extra cost.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Parents', 'Spouse', 'Children', 'In-laws'].map((member, index) => (
                    <span
                      key={index}
                      className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              <button 
  onClick={() => handleWhatsAppBooking("Hello Divine Care! I'm interested in the Premium Membership Plan (₹3,000/Year). Please help me with the enrollment.")}
  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
>
  <Crown size={24} />
  Join Premium Now
</button>

              <p className="text-center text-sm text-gray-500 mt-4">
                No hidden charges • Cancel anytime • Money-back guarantee
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Member Testimonials
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Rajesh Kumar',
                  review: 'Best healthcare decision for my family. Saved thousands on medical expenses!',
                  rating: 5,
                },
                {
                  name: 'Priya Sharma',
                  review: 'The priority support and free consultations are incredibly valuable.',
                  rating: 5,
                },
                {
                  name: 'Amit Patel',
                  review: 'Worth every rupee. The annual checkup alone covers the membership cost.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
