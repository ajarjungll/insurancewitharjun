
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, Shield, Clock, Award } from 'lucide-react';

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [insuranceType, setInsuranceType] = useState('');

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            It only takes a few minutes to get a personalized insurance quote. 
            Compare rates from multiple carriers and find the best coverage for your needs.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Free Quotes</h3>
              <p className="text-sm text-gray-600">No cost or obligation</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Quick Process</h3>
              <p className="text-sm text-gray-600">Takes just 5 minutes</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Multiple Options</h3>
              <p className="text-sm text-gray-600">Compare 20+ carriers</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Expert Advice</h3>
              <p className="text-sm text-gray-600">Professional guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      currentStep >= step ? 'bg-blue-600' : 'bg-gray-300'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-20 h-1 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-600">Step {currentStep} of 3</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              {/* Step 1: Insurance Type */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What type of insurance do you need?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { value: 'critical-illness', title: 'Critical Illness Insurance', description: 'Financial protection for serious illness' },
                      { value: 'super-visa', title: 'Super Visa Insurance', description: 'Mandatory coverage for Super Visa applicants' },
                      { value: 'life', title: 'Life Insurance', description: 'Term and permanent life coverage' },
                      { value: 'loss-of-income', title: 'Loss of Income Insurance', description: 'Income protection and disability coverage' }
                    ].map((option) => (
                      <label key={option.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="insuranceType"
                          value={option.value}
                          checked={insuranceType === option.value}
                          onChange={(e) => setInsuranceType(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`p-6 rounded-xl border-2 transition-colors ${
                          insuranceType === option.value 
                            ? 'border-blue-600 bg-blue-50' 
                            : 'border-gray-200 bg-white hover:border-blue-300'
                        }`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                          <p className="text-gray-600">{option.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tell us about yourself</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      type="date"
                      placeholder="Date of Birth"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                      <option value="">Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                  <div className="mt-6">
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
                    />
                    <div className="grid md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option value="">State</option>
                        <option value="CA">California</option>
                        <option value="TX">Texas</option>
                        <option value="FL">Florida</option>
                        <option value="NY">New York</option>
                      </select>
                      <input
                        type="text"
                        placeholder="ZIP Code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Coverage Details */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Coverage preferences</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        When do you need coverage to start?
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option value="">Select start date</option>
                        <option value="immediately">Immediately</option>
                        <option value="within-week">Within a week</option>
                        <option value="within-month">Within a month</option>
                        <option value="future">Future date</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current insurance situation
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                        <option value="">Select current situation</option>
                        <option value="no-insurance">Currently no insurance</option>
                        <option value="have-insurance">Have insurance, looking to switch</option>
                        <option value="adding-coverage">Adding additional coverage</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred contact method
                      </label>
                      <div className="grid md:grid-cols-3 gap-4">
                        <label className="flex items-center">
                          <input type="radio" name="contact" value="phone" className="mr-2" />
                          Phone call
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="contact" value="email" className="mr-2" />
                          Email
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="contact" value="text" className="mr-2" />
                          Text message
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional information or questions
                      </label>
                      <textarea
                        placeholder="Tell us anything else that might help us provide you with the best quote..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-semibold ${
                    currentStep === 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gray-500 text-white hover:bg-gray-600'
                  }`}
                >
                  Back
                </button>
                
                {currentStep < 3 ? (
                  <button
                    onClick={handleNext}
                    disabled={currentStep === 1 && !insuranceType}
                    className={`px-8 py-3 rounded-lg font-semibold ${
                      (currentStep === 1 && !insuranceType)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
                    Get My Quote
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Get Your Quote With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed Professionals</h3>
              <p className="text-gray-600">Our experienced agents are licensed and trained to find you the best coverage.</p>
            </div>
            <div>
              <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compare Multiple Carriers</h3>
              <p className="text-gray-600">We work with over 20 insurance companies to find you the best rates.</p>
            </div>
            <div>
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Service</h3>
              <p className="text-gray-600">We take time to understand your needs and provide tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
