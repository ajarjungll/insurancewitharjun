import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Heart, Umbrella, DollarSign, Users, Car, Home, Briefcase } from 'lucide-react';

const InsuranceTypes = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80")'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Explore Our Insurance Types</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protect what matters most with our comprehensive insurance solutions. 
              From life and health to property and casualty, we've got you covered.
            </p>
          </div>
        </section>

        {/* Insurance Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Life Insurance */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Shield className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Life Insurance</h3>
                <p className="text-gray-600">Secure your family's financial future with our life insurance options.</p>
                <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
                  <li>Term Life</li>
                  <li>Whole Life</li>
                  <li>Universal Life</li>
                </ul>
              </div>

              {/* Health Insurance */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Heart className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Health Insurance</h3>
                <p className="text-gray-600">Stay protected from unexpected medical expenses with our health insurance plans.</p>
                <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
                  <li>Individual Health</li>
                  <li>Family Health</li>
                  <li>Supplemental Health</li>
                </ul>
              </div>

              {/* Auto Insurance */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Car className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Auto Insurance</h3>
                <p className="text-gray-600">Drive with confidence knowing you're covered with our auto insurance policies.</p>
                <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
                  <li>Liability Coverage</li>
                  <li>Collision Coverage</li>
                  <li>Comprehensive Coverage</li>
                </ul>
              </div>

              {/* Home Insurance */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Home className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Home Insurance</h3>
                <p className="text-gray-600">Protect your home and belongings from unexpected events with our home insurance options.</p>
                <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
                  <li>Homeowners Insurance</li>
                  <li>Renters Insurance</li>
                  <li>Condo Insurance</li>
                </ul>
              </div>

              {/* Business Insurance */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Briefcase className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Insurance</h3>
                <p className="text-gray-600">Safeguard your business from potential risks with our comprehensive business insurance solutions.</p>
                <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
                  <li>General Liability</li>
                  <li>Commercial Property</li>
                  <li>Workers' Compensation</li>
                </ul>
              </div>

              {/* Travel Insurance */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <Umbrella className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Travel Insurance</h3>
                <p className="text-gray-600">Travel worry-free with our travel insurance plans, providing coverage for unexpected events during your trips.</p>
                <ul className="list-disc list-inside mt-4 text-sm text-gray-600">
                  <li>Trip Cancellation</li>
                  <li>Medical Emergencies</li>
                  <li>Lost Luggage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Insurance With Arjun?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 card-3d">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Our experienced agents provide personalized advice to help you choose the right coverage.</p>
              </div>
              <div className="bg-white rounded-xl p-8 card-3d">
                <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Rates</h3>
                <p className="text-gray-600">We work with top insurance carriers to offer you the most competitive rates.</p>
              </div>
              <div className="bg-white rounded-xl p-8 card-3d">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">We are committed to providing exceptional service and ensuring your satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default InsuranceTypes;
