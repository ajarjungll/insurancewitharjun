import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Heart, Smile, Building, Truck, DollarSign, Accessibility, Activity, GraduationCap, Plane } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const InsuranceTypes = () => {
  const navigate = useNavigate();

  const insuranceProducts = [
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Critical Illness Insurance",
      description: "Financial protection when diagnosed with serious illnesses like cancer, heart attack, or stroke.",
      features: ["Tax-free lump sum payment", "25+ covered conditions", "No restrictions on fund usage"],
      detailPage: "/insurance-types/critical-illness"
    },
    {
      icon: <Smile className="w-12 h-12 text-blue-600" />,
      title: "Dental Insurance",
      description: "Comprehensive coverage for dental care, from routine cleanings to major procedures.",
      features: ["100% preventive coverage", "Network of dentists", "Family plan options"],
      detailPage: "/insurance-types/dental"
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "Life Insurance",
      description: "Protect your loved ones financially with term, whole, and universal life insurance options.",
      features: ["Affordable term options", "Cash value buildup", "Family protection"],
      detailPage: "/insurance-types/life"
    },
    {
      icon: <Building className="w-12 h-12 text-purple-600" />,
      title: "Business Insurance",
      description: "Comprehensive protection for your business against liability, property damage, and other risks.",
      features: ["General liability", "Property coverage", "Professional liability"],
      detailPage: "/insurance-types/business"
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-600" />,
      title: "Travel Insurance for Truckers",
      description: "Specialized coverage for truck drivers including medical emergencies and vehicle breakdowns.",
      features: ["Cross-border coverage", "Vehicle breakdown", "Medical emergencies"],
      detailPage: "/insurance-types/travel-truckers"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-red-600" />,
      title: "Loss of Income Insurance",
      description: "Protect your income when you can't work due to illness, injury, or other covered circumstances.",
      features: ["Income replacement", "Short & long-term", "Rehabilitation benefits"],
      detailPage: "/insurance-types/loss-of-income"
    },
    {
      icon: <Accessibility className="w-12 h-12 text-purple-600" />,
      title: "Disability Insurance",
      description: "Comprehensive protection when illness or injury prevents you from working.",
      features: ["Own occupation coverage", "Partial disability benefits", "Cost of living adjustments"],
      detailPage: "/insurance-types/disability"
    },
    {
      icon: <Activity className="w-12 h-12 text-green-600" />,
      title: "Health Insurance",
      description: "Fill gaps in provincial coverage with comprehensive health insurance plans.",
      features: ["Prescription drugs", "Paramedical services", "Vision & hearing"],
      detailPage: "/insurance-types/health"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-indigo-600" />,
      title: "Student Insurance",
      description: "Affordable protection for students including health, property, and travel coverage.",
      features: ["Student health coverage", "Personal property", "Study abroad protection"],
      detailPage: "/insurance-types/student"
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Super Visa Insurance",
      description: "Mandatory insurance coverage for super visa applicants visiting Canada for extended stays.",
      features: ["$100,000 minimum coverage", "Valid for 1 year", "Emergency medical coverage"],
      detailPage: "/insurance-types/super-visa"
    }
  ];

  const openDetailPage = (detailPage: string) => {
    navigate(detailPage);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Shield className="w-20 h-20 text-blue-200" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Insurance Products</h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive protection for you, your family, and your business. Explore our range of insurance solutions designed to safeguard what matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Insurance Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {insuranceProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-8 card-3d-super">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-full card-3d">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{product.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{product.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <button 
                      onClick={() => openDetailPage(product.detailPage)}
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold btn-3d"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Choosing the Right Coverage?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our insurance experts are here to help you find the perfect coverage for your unique needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Get Free Quote
              </Link>
              <a href="tel:+14313382078" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Call (431) 338-2078
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default InsuranceTypes;
