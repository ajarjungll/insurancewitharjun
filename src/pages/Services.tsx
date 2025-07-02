import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Heart, Car, Home, Briefcase, Umbrella, DollarSign, Users, Award, Clock } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80")'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We offer a wide range of insurance and investment services to meet your unique needs.
              Protecting your future, one policy at a time.
            </p>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Key Services</h2>
              <p className="text-xl text-gray-600">Comprehensive solutions for your insurance and investment needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-8 shadow-lg text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Solutions</h3>
                <p className="text-gray-600">
                  Protect yourself and your loved ones with our comprehensive insurance coverage options.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 shadow-lg text-center">
                <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Planning</h3>
                <p className="text-gray-600">
                  Grow your wealth and secure your financial future with our expert investment planning services.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 shadow-lg text-center">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Advice</h3>
                <p className="text-gray-600">
                  Receive personalized financial advice and guidance from our experienced advisors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">More Services We Offer</h2>
              <p className="text-xl text-gray-600">Explore our diverse range of specialized services</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Heart className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Life Insurance</h3>
                <p className="text-gray-600">Secure your family's future with our life insurance plans.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Car className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Auto Insurance</h3>
                <p className="text-gray-600">Protect your vehicle with our comprehensive auto insurance coverage.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Home className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Home Insurance</h3>
                <p className="text-gray-600">Safeguard your home and belongings with our home insurance policies.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Insurance</h3>
                <p className="text-gray-600">Protect your business from potential risks with our tailored insurance solutions.</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Umbrella className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Umbrella Insurance</h3>
                <p className="text-gray-600">Get extra liability coverage with our umbrella insurance policies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8 card-3d">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Our experienced advisors provide expert guidance and support.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-8 card-3d">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">We tailor our services to meet your specific needs and goals.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-8 card-3d">
                <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Support</h3>
                <p className="text-gray-600">We are committed to providing long-term support and building lasting relationships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Streamlined Process</h2>
              <p className="text-xl text-blue-100">Simple steps to protect your future</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Consultation</h3>
                <p className="text-blue-100">Discuss your needs with our experts.</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Custom Plan</h3>
                <p className="text-blue-100">We create a personalized plan for you.</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-blue-100">We provide continuous support and guidance.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Services;
