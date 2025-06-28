
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Phone, Clock, CheckCircle, AlertCircle, Users } from 'lucide-react';

const Claims = () => {
  const claimsProcess = [
    {
      step: 1,
      title: "Report Your Claim",
      description: "Contact us immediately after an incident occurs. We're available 24/7 to help you get started.",
      icon: <Phone className="w-8 h-8 text-white" />
    },
    {
      step: 2,
      title: "Document Everything",
      description: "Take photos, gather information, and keep all receipts related to your claim.",
      icon: <FileText className="w-8 h-8 text-white" />
    },
    {
      step: 3,
      title: "Claims Investigation",
      description: "Your insurance company will investigate the claim and determine coverage.",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      step: 4,
      title: "Settlement & Resolution",
      description: "Once approved, you'll receive your settlement and can move forward with repairs or replacement.",
      icon: <CheckCircle className="w-8 h-8 text-white" />
    }
  ];

  const claimTypes = [
    {
      title: "Auto Claims",
      description: "Accidents, theft, vandalism, or weather damage to your vehicle",
      tips: [
        "Call 911 if there are injuries or significant damage",
        "Exchange insurance information with other parties",
        "Take photos of all vehicles and the accident scene",
        "Don't admit fault or discuss details with other parties",
        "Contact your agent or insurance company immediately"
      ]
    },
    {
      title: "Home Claims",
      description: "Fire, theft, storm damage, or other covered perils to your home",
      tips: [
        "Ensure your safety first - evacuate if necessary",
        "Contact emergency services if needed",
        "Take photos/video of damage before cleaning up",
        "Make temporary repairs to prevent further damage",
        "Keep receipts for all expenses related to the claim"
      ]
    },
    {
      title: "Life Insurance Claims",
      description: "Filing a claim for life insurance benefits",
      tips: [
        "Contact the insurance company as soon as possible",
        "Obtain certified copies of the death certificate",
        "Gather all policy documents and information",
        "Complete all required claim forms accurately",
        "Provide any additional documentation requested"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">File a Claim</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            When you need to file a claim, we're here to help you every step of the way. 
            Our experienced team will guide you through the process and advocate for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Report a Claim Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Call 24/7 Hotline
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-12 bg-red-50 border-l-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-red-500 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-2">Emergency Claim Reporting</h2>
              <p className="text-red-700 mb-4">
                If you're experiencing an emergency situation, please call 911 first. 
                For immediate claim reporting outside of business hours:
              </p>
              <div className="bg-red-100 p-4 rounded-lg">
                <p className="text-red-800 font-bold text-lg">24/7 Claims Hotline: (555) 123-CLAIM</p>
                <p className="text-red-700">Available 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Claims Process</h2>
            <p className="text-xl text-gray-600">We make filing a claim as simple and stress-free as possible</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {claimsProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Step {process.step}: {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Claims We Handle</h2>
            <p className="text-xl text-gray-600">Important information for different types of claims</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {claimTypes.map((claimType, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{claimType.title}</h3>
                <p className="text-gray-600 mb-6">{claimType.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Tips:</h4>
                <ul className="space-y-3">
                  {claimType.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Response Time</h3>
                    <p className="text-gray-600">We'll respond to your claim within 24 hours and keep you updated throughout the process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Advocate</h3>
                    <p className="text-gray-600">Your dedicated claims advocate will guide you through every step and fight for the best outcome.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Clear Communication</h3>
                    <p className="text-gray-600">We'll explain the process in plain language and keep you informed at every stage.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Claim</h3>
              <form className="space-y-4">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option value="">Select Claim Type</option>
                  <option value="auto">Auto Claim</option>
                  <option value="home">Home Claim</option>
                  <option value="life">Life Insurance Claim</option>
                  <option value="business">Business Claim</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Policy Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Describe what happened..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Submit Claim
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help With Your Claim?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our claims team is here to support you. Don't hesitate to reach out 
            if you have questions or need assistance at any point in the process.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Phone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">(555) 123-4567</p>
            </div>
            <div>
              <FileText className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-blue-100">claims@sharnjitinsurance.com</p>
            </div>
            <div>
              <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Office Hours</h3>
              <p className="text-blue-100">Mon-Fri: 8AM-6PM<br />Sat: 9AM-1PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Claims;
