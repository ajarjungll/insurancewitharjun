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
    <div className="min-h-screen relative">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/lovable-uploads/05222d16-48f5-4552-be91-faade99d71c2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Our Insurance Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to protect what matters most to you. 
            From personal to commercial coverage, we've got you covered.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Illusion Effect */}
        <div className="absolute inset-0 opacity-3">
          <div 
            className="absolute top-10 right-10 w-64 h-64"
            style={{
              backgroundImage: `url('/lovable-uploads/287673fd-2359-4e48-b6e0-f6a391443b6f.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div 
            className="absolute bottom-10 left-10 w-64 h-64"
            style={{
              backgroundImage: `url('/lovable-uploads/6c7fc101-7b93-4674-8552-8ac8048711c5.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72"
            style={{
              backgroundImage: `url('/lovable-uploads/1a0f32fd-a464-4bd2-add0-1924f0c7e575.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Products We Offer</h2>
            <p className="text-xl text-gray-600">Protecting your assets with comprehensive coverage options</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative bg-white rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-2 card-3d" 
                   style={{ 
                     boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                     background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mt-4">{service.title}</h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 shadow-sm"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-3">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      Get Quote
                    </button>
                    <a href="tel:+14313382078" className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
                      <Phone size={18} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/lovable-uploads/05222d16-48f5-4552-be91-faade99d71c2.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Going beyond insurance to serve you better</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-1 card-3d"
                   style={{ 
                     boxShadow: '0 15px 30px -8px rgba(0, 0, 0, 0.12), 0 6px 12px -2px rgba(0, 0, 0, 0.08)',
                     background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)'
                   }}>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
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
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/lovable-uploads/287673fd-2359-4e48-b6e0-f6a391443b6f.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Simple Process</h2>
            <p className="text-xl text-gray-600">Getting the right insurance has never been easier</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600">Call, email, or visit us to discuss your insurance needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Quotes</h3>
              <p className="text-gray-600">We'll compare rates from multiple carriers to find you the best deal</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Coverage</h3>
              <p className="text-gray-600">Select the policy that best fits your needs and budget</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Protected</h3>
              <p className="text-gray-600">Enjoy peace of mind with ongoing support and service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/6c7fc101-7b93-4674-8552-8ac8048711c5.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait until it's too late. Contact us today for a free consultation 
            and find out how we can protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Free Quote
            </button>
            <a href="tel:+14313382078" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Phone size={20} />
              Call (431) 338-2078
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
