
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Phone, Shield, CheckCircle, Users, Laptop } from 'lucide-react';
import { Button } from '../components/ui/button';

const BusinessInsuranceDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-800 rounded-full">
                  <Building className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">Business Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect Your Business Investment - Comprehensive coverage for businesses of all sizes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  Get Free Quote
                </Button>
                <a href="tel:+14313382078">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (431) 338-2078
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Business Insurance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Essential Business Coverage</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "General Liability",
                    description: "Protects against third-party injury and property damage claims",
                    icon: <Shield className="w-12 h-12 text-blue-600" />
                  },
                  {
                    title: "Property Insurance",
                    description: "Covers your business building, equipment, and inventory",
                    icon: <Building className="w-12 h-12 text-green-600" />
                  },
                  {
                    title: "Workers' Compensation",
                    description: "Required coverage for employee injuries on the job",
                    icon: <Users className="w-12 h-12 text-orange-600" />
                  },
                  {
                    title: "Professional Liability",
                    description: "Protection against errors and omissions claims",
                    icon: <Laptop className="w-12 h-12 text-purple-600" />
                  },
                  {
                    title: "Cyber Liability",
                    description: "Covers data breaches and cyber attacks",
                    icon: <Shield className="w-12 h-12 text-red-600" />
                  },
                  {
                    title: "Business Interruption",
                    description: "Covers lost income during covered events",
                    icon: <Building className="w-12 h-12 text-indigo-600" />
                  }
                ].map((insurance, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border">
                    <div className="text-center mb-6">
                      {insurance.icon}
                      <h3 className="text-xl font-bold text-gray-900 mt-4">{insurance.title}</h3>
                    </div>
                    <p className="text-gray-600 text-center">{insurance.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Business Today</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let unexpected events derail your business. Get comprehensive coverage tailored to your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Get Free Quote Now
              </Button>
              <a href="tel:+14313382078">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (431) 338-2078
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default BusinessInsuranceDetails;
