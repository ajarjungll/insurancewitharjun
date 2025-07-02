import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Shield, Users, Award, Phone, Mail, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80")'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        
        {/* Services Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600">Explore our comprehensive insurance solutions</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center card-3d">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Insurance</h3>
                <p className="text-gray-600">
                  Protect yourself and your loved ones with our tailored personal 
                  insurance plans.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg text-center card-3d">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Insurance</h3>
                <p className="text-gray-600">
                  Safeguard your business from potential risks with our comprehensive 
                  business insurance solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg text-center card-3d">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Services</h3>
                <p className="text-gray-600">
                  Secure your financial future with our expert financial planning 
                  and investment services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Insurance With Arjun?</h2>
              <p className="text-xl text-gray-600">We're committed to providing exceptional service and value</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Integrity</h3>
                <p className="text-gray-600">We operate with the highest ethical standards.</p>
              </div>
              
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h3>
                <p className="text-gray-600">We tailor our solutions to meet your unique needs.</p>
              </div>
              
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Advice</h3>
                <p className="text-gray-600">Benefit from our team's extensive industry knowledge.</p>
              </div>
              
              <div className="text-center">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">We're here for you whenever you need us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2">10+</h3>
                <p className="text-blue-100">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-blue-100">Satisfied Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">A+</h3>
                <p className="text-blue-100">BBB Rating</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">98%</h3>
                <p className="text-blue-100">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
                <p className="text-gray-600">
                  Contact us today for a free consultation and personalized insurance quote.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
