
import React from 'react';
import Header from '../components/Header';
import LogoBanner from '../components/LogoBanner';
import Footer from '../components/Footer';
import { Heart, Phone, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const CriticalIllnessDetails = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        <LogoBanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-800 rounded-full">
                  <Heart className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">Critical Illness Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Financial Protection When You Need It Most - Comprehensive coverage for serious health conditions
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

        {/* What is Critical Illness Insurance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">What is Critical Illness Insurance?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    Critical illness insurance provides a lump sum payment when you're diagnosed with a serious illness covered under your policy. This tax-free benefit gives you financial freedom to focus on recovery without worrying about expenses.
                  </p>
                  <p className="text-lg text-gray-600">
                    Unlike health insurance that covers medical costs, critical illness insurance gives you cash to use however you need - whether for treatment, living expenses, or taking time off work.
                  </p>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Tax-free lump sum payment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">No restrictions on fund usage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Covers 25+ critical illnesses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Return of premium options</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Covered Conditions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Cancer", description: "All forms of life-threatening cancer" },
                  { title: "Heart Attack", description: "Acute myocardial infarction" },
                  { title: "Stroke", description: "Cerebrovascular accident" },
                  { title: "Kidney Failure", description: "End-stage renal failure" },
                  { title: "Multiple Sclerosis", description: "Chronic neurological condition" },
                  { title: "Parkinson's Disease", description: "Progressive neurological disorder" },
                  { title: "Major Organ Transplant", description: "Heart, lung, liver, kidney transplants" },
                  { title: "Paralysis", description: "Complete loss of muscle function" },
                  { title: "Blindness", description: "Permanent loss of sight" }
                ].map((condition, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{condition.title}</h3>
                    <p className="text-gray-600">{condition.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs It */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Who Needs Critical Illness Insurance?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">You Should Consider It If:</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You have dependents relying on your income</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You have a mortgage or significant debts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You want to maintain your lifestyle during illness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You have family history of critical illnesses</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-8 rounded-xl">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Peace of Mind For:</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Business owners and self-employed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Single parents</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Primary income earners</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Those with limited sick leave benefits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Future?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait until it's too late. Get a free quote today and secure your financial future against critical illness.
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

export default CriticalIllnessDetails;
