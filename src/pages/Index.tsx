import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { Heart, Shield, HeartPulse, GraduationCap, Phone, Star, CheckCircle } from 'lucide-react';

const Index = () => {
  const insuranceTypes = [{
    icon: <Heart className="w-12 h-12 text-blue-600" />,
    title: "Life Insurance",
    description: "Secure your family's financial future with comprehensive life insurance coverage.",
    features: ["Term Life Insurance", "Whole Life Coverage", "Accidental Death Benefits", "Family Protection"]
  }, {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Super Visa Insurance",
    description: "Specialized insurance coverage for super visa applicants and their extended stays in Canada.",
    features: ["Medical Coverage", "Emergency Care", "Hospitalization", "Prescription Drugs"]
  }, {
    icon: <HeartPulse className="w-12 h-12 text-blue-600" />,
    title: "Critical Illness Insurance",
    description: "Financial protection when you're diagnosed with a serious illness, providing peace of mind during challenging times.",
    features: ["Cancer Coverage", "Heart Attack Protection", "Stroke Benefits", "Kidney Failure Coverage"]
  }, {
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    title: "Student Insurance",
    description: "Comprehensive insurance coverage designed specifically for students studying in Canada.",
    features: ["Health & Medical Coverage", "International Student Plans", "Emergency Services", "Prescription Benefits"]
  }];
  const testimonials = [{
    name: "Sarah Johnson",
    rating: 5,
    text: "Sharnjit Insurance has been amazing! They helped me save over $800 on my auto insurance while getting better coverage."
  }, {
    name: "Mike Chen",
    rating: 5,
    text: "Professional, knowledgeable, and always available when I need them. Highly recommend for all your insurance needs."
  }, {
    name: "Emily Rodriguez",
    rating: 5,
    text: "When I had a claim, they made the process so easy. Great customer service and fast claim processing."
  }];
  return <div className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Insurance Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Insurance Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage options tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceTypes.map((type, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  {type.icon}
                  <h3 className="text-xl font-bold text-gray-900 mt-4">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>)}
                </ul>
                <Link to="/quote" className="block mt-6 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </Link>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose  Insurance With Arjun?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trusted Experience</h3>
                    <p className="text-gray-600">Over 25 years of experience in the insurance industry with a proven track record.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                    <p className="text-gray-600">Direct access to your agent with personalized service and quick response times.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Star className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
                    <p className="text-gray-600">We work with multiple carriers to find you the best coverage at the most competitive rates.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote Today</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="">Select Insurance Type</option>
                  <option value="life">Life Insurance</option>
                  <option value="super-visa">Super Visa Insurance</option>
                  <option value="critical-illness">Critical Illness Insurance</option>
                  <option value="student">Student Insurance</option>
                </select>
                <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;
