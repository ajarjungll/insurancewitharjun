
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plane, Phone, Shield, CheckCircle, Users, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';

const SuperVisaInsuranceDetails = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-800 rounded-full">
                  <Plane className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">Super Visa Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Mandatory Insurance for Parents & Grandparents - Meet Government of Canada requirements for super visa applications
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

        {/* What is Super Visa Insurance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">What is Super Visa Insurance?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    Super Visa Insurance is mandatory coverage required by the Government of Canada for parents and grandparents applying for a super visa to visit their children or grandchildren in Canada.
                  </p>
                  <p className="text-lg text-gray-600">
                    This specialized insurance provides comprehensive emergency medical coverage for visitors staying in Canada for up to 2 years at a time, ensuring they have access to quality healthcare without burdening the Canadian healthcare system.
                  </p>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Minimum $100,000 emergency medical coverage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Valid for minimum 1 year from entry date</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Purchased from Canadian insurance company</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Covers hospitalization and emergency care</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What's Covered</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Emergency Medical Care",
                    description: "Sudden illness or injury requiring immediate medical attention",
                    icon: <Shield className="w-12 h-12 text-red-600" />
                  },
                  {
                    title: "Hospitalization",
                    description: "Emergency hospital admission and related services",
                    icon: <MapPin className="w-12 h-12 text-blue-600" />
                  },
                  {
                    title: "Prescription Medications",
                    description: "Emergency prescription drugs related to covered conditions",
                    icon: <CheckCircle className="w-12 h-12 text-green-600" />
                  },
                  {
                    title: "Diagnostic Services",
                    description: "X-rays, lab tests, and other diagnostic procedures",
                    icon: <Shield className="w-12 h-12 text-purple-600" />
                  },
                  {
                    title: "Emergency Transportation",
                    description: "Ambulance services for emergency medical situations",
                    icon: <Plane className="w-12 h-12 text-orange-600" />
                  },
                  {
                    title: "Repatriation",
                    description: "Transportation back to home country if medically necessary",
                    icon: <Users className="w-12 h-12 text-indigo-600" />
                  }
                ].map((coverage, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border">
                    <div className="text-center mb-6">
                      {coverage.icon}
                      <h3 className="text-xl font-bold text-gray-900 mt-4">{coverage.title}</h3>
                    </div>
                    <p className="text-gray-600 text-center">{coverage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility & Application */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Eligibility & Application Process</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Apply</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Parents and grandparents of Canadian citizens or permanent residents</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Applicants from eligible countries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Must meet financial requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Pass medical examination if required</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Steps</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span className="text-gray-700">Purchase qualifying insurance policy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span className="text-gray-700">Gather required documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span className="text-gray-700">Submit super visa application</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      <span className="text-gray-700">Wait for approval decision</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Important Information</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Pre-Existing Conditions</h4>
                    <p className="text-gray-600 mb-4">Coverage may be limited for pre-existing medical conditions. Medical questionnaire may be required.</p>
                    
                    <h4 className="font-bold text-gray-900 mb-3">Age Restrictions</h4>
                    <p className="text-gray-600">Available for visitors typically up to age 85, with some insurers offering coverage to age 89.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Policy Duration</h4>
                    <p className="text-gray-600 mb-4">Must be valid for at least 1 year, but can be purchased for up to 2 years to match super visa validity.</p>
                    
                    <h4 className="font-bold text-gray-900 mb-3">Premium Payment</h4>
                    <p className="text-gray-600">Full premium must be paid before policy becomes effective and super visa application submission.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Apply for Super Visa Insurance?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the mandatory insurance coverage you need for your super visa application. Our experts will help ensure you meet all government requirements.
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

export default SuperVisaInsuranceDetails;
