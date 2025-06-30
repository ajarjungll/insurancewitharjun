
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Car, Home, Heart, Building, Umbrella, FileText, Phone, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Critical Illness Insurance",
      description: "Financial protection when you're diagnosed with a serious illness",
      features: [
        "Cancer Coverage",
        "Heart Attack & Stroke Protection",
        "Major Organ Transplant Coverage",
        "Lump Sum Benefit Payment",
        "No Restrictions on Fund Usage",
        "Family History Considerations"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Dental Insurance",
      description: "Comprehensive dental care coverage for you and your family",
      features: [
        "Preventive Care Coverage",
        "Basic Procedures Protection",
        "Major Dental Work Coverage",
        "Orthodontic Benefits",
        "Emergency Dental Care",
        "Family Plan Options"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Life Insurance",
      description: "Secure your family's financial future",
      features: [
        "Term Life Insurance",
        "Whole Life Insurance",
        "Universal Life Insurance",
        "Final Expense Insurance",
        "Accidental Death & Dismemberment",
        "Living Benefits Riders"
      ]
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: "Business Insurance",
      description: "Comprehensive protection for your business",
      features: [
        "General Liability",
        "Property Insurance",
        "Workers' Compensation",
        "Professional Liability",
        "Cyber Liability",
        "Business Interruption"
      ]
    },
    {
      icon: <Umbrella className="w-12 h-12 text-blue-600" />,
      title: "Super Visa Insurance",
      description: "Mandatory health coverage for Super Visa applicants",
      features: [
        "Minimum $100,000 Coverage",
        "Valid for Minimum 1 Year",
        "Emergency Medical Coverage",
        "Hospital & Doctor Visits",
        "Prescription Drug Coverage",
        "Repatriation Benefits"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      title: "Student Insurance",
      description: "Comprehensive coverage for students studying abroad",
      features: [
        "Emergency Medical Coverage",
        "Prescription Drug Benefits",
        "Dental & Vision Care",
        "Mental Health Support",
        "Sports Injury Coverage",
        "Trip Interruption Protection"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Phone className="w-8 h-8 text-orange-500" />,
      title: "Free Consultations",
      description: "Schedule a no-obligation consultation to review your insurance needs"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Policy Reviews",
      description: "Annual policy reviews to ensure you have the right coverage at the best price"
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis to identify potential coverage gaps"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Insurance Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to protect what matters most to you. 
            From personal to commercial coverage, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Products We Offer</h2>
            <p className="text-xl text-gray-600">Protecting your assets with comprehensive coverage options</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Going beyond insurance to serve you better</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
            <p className="text-xl text-gray-600">Getting the right insurance has never been easier</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600">Call, email, or visit us to discuss your insurance needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Quotes</h3>
              <p className="text-gray-600">We'll compare rates from multiple carriers to find you the best deal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Coverage</h3>
              <p className="text-gray-600">Select the policy that best fits your needs and budget</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Protected</h3>
              <p className="text-gray-600">Enjoy peace of mind with ongoing support and service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Contact us today for a free consultation 
            and find out how we can protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
