
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Heart, Smile, Building, Truck, DollarSign, Accessibility, Activity, GraduationCap, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';

const InsuranceTypes = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const insuranceProducts = [
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Critical Illness Insurance",
      description: "Financial protection when diagnosed with serious illnesses like cancer, heart attack, or stroke.",
      features: ["Tax-free lump sum payment", "25+ covered conditions", "No restrictions on fund usage"],
      link: "/insurance-types/critical-illness",
      details: {
        coverage: "Provides a tax-free lump sum payment upon diagnosis of covered critical illnesses including cancer, heart attack, stroke, and more.",
        benefits: ["Immediate financial support", "Cover medical expenses not covered by provincial health plans", "Replace lost income during recovery", "Pay for experimental treatments"],
        eligibility: "Available for individuals aged 18-65, subject to medical underwriting and health questionnaire."
      }
    },
    {
      icon: <Smile className="w-12 h-12 text-blue-600" />,
      title: "Dental Insurance",
      description: "Comprehensive coverage for dental care, from routine cleanings to major procedures.",
      features: ["100% preventive coverage", "Network of dentists", "Family plan options"],
      link: "/insurance-types/dental",
      details: {
        coverage: "Complete dental care coverage including preventive, basic, and major dental procedures with access to a wide network of dental providers.",
        benefits: ["Annual cleanings and check-ups", "Fillings and basic restorative work", "Major procedures like crowns and bridges", "Orthodontic coverage options"],
        eligibility: "Available for individuals and families with immediate coverage for preventive care and waiting periods for major work."
      }
    },
    {
      icon: <Heart className="w-12 h-12 text-green-600" />,
      title: "Life Insurance",
      description: "Protect your loved ones financially with term, whole, and universal life insurance options.",
      features: ["Affordable term options", "Cash value buildup", "Family protection"],
      link: "/insurance-types/life",
      details: {
        coverage: "Comprehensive life insurance solutions including term life, whole life, and universal life policies to protect your family's financial future.",
        benefits: ["Death benefit for beneficiaries", "Cash value accumulation (permanent policies)", "Tax-advantaged growth", "Estate planning benefits"],
        eligibility: "Available for ages 18-75 with various coverage amounts and premium payment options to fit your budget."
      }
    },
    {
      icon: <Building className="w-12 h-12 text-purple-600" />,
      title: "Business Insurance",
      description: "Comprehensive protection for your business against liability, property damage, and other risks.",
      features: ["General liability", "Property coverage", "Professional liability"],
      link: "/insurance-types/business",
      details: {
        coverage: "Complete business protection including general liability, property insurance, and professional liability coverage for businesses of all sizes.",
        benefits: ["Protection against lawsuits", "Property damage coverage", "Business interruption insurance", "Cyber liability protection"],
        eligibility: "Available for all business types including sole proprietorships, partnerships, and corporations across various industries."
      }
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-600" />,
      title: "Travel Insurance for Truckers",
      description: "Specialized coverage for truck drivers including medical emergencies and vehicle breakdowns.",
      features: ["Cross-border coverage", "Vehicle breakdown", "Medical emergencies"],
      link: "/insurance-types/travel-truckers",
      details: {
        coverage: "Specialized travel insurance designed for professional truck drivers covering medical emergencies, vehicle breakdowns, and cargo protection.",
        benefits: ["Emergency medical coverage across Canada and USA", "Vehicle breakdown assistance", "Trip interruption coverage", "Cargo protection"],
        eligibility: "Available for licensed commercial truck drivers with valid CDL and clean driving record."
      }
    },
    {
      icon: <DollarSign className="w-12 h-12 text-red-600" />,
      title: "Loss of Income Insurance",
      description: "Protect your income when you can't work due to illness, injury, or other covered circumstances.",
      features: ["Income replacement", "Short & long-term", "Rehabilitation benefits"],
      link: "/insurance-types/loss-of-income",
      details: {
        coverage: "Income replacement insurance that provides financial support when you're unable to work due to illness, injury, or disability.",
        benefits: ["Monthly income replacement up to 70% of salary", "Short-term and long-term options", "Rehabilitation and return-to-work programs", "Cost of living adjustments"],
        eligibility: "Available for employed individuals aged 18-64 with stable employment history and income verification."
      }
    },
    {
      icon: <Accessibility className="w-12 h-12 text-purple-600" />,
      title: "Disability Insurance",
      description: "Comprehensive protection when illness or injury prevents you from working.",
      features: ["Own occupation coverage", "Partial disability benefits", "Cost of living adjustments"],
      link: "/insurance-types/disability",
      details: {
        coverage: "Comprehensive disability insurance providing income protection when illness or injury prevents you from performing your occupation.",
        benefits: ["Own occupation and any occupation coverage", "Partial and residual disability benefits", "Future increase options", "Waiver of premium"],
        eligibility: "Available for working professionals aged 18-65 with medical underwriting and income verification required."
      }
    },
    {
      icon: <Activity className="w-12 h-12 text-green-600" />,
      title: "Health Insurance",
      description: "Fill gaps in provincial coverage with comprehensive health insurance plans.",
      features: ["Prescription drugs", "Paramedical services", "Vision & hearing"],
      link: "/insurance-types/health",
      details: {
        coverage: "Supplementary health insurance to cover expenses not included in provincial health plans including prescription drugs and paramedical services.",
        benefits: ["Prescription drug coverage", "Vision and dental care", "Paramedical services", "Private hospital rooms"],
        eligibility: "Available for Canadian residents with provincial health coverage as primary insurance."
      }
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-indigo-600" />,
      title: "Student Insurance",
      description: "Affordable protection for students including health, property, and travel coverage.",
      features: ["Student health coverage", "Personal property", "Study abroad protection"],
      link: "/insurance-types/student",
      details: {
        coverage: "Comprehensive insurance coverage designed specifically for students including health, personal property, and travel protection.",
        benefits: ["Extended health and dental coverage", "Personal property protection", "Study abroad coverage", "Emergency medical evacuation"],
        eligibility: "Available for full-time students aged 16-30 enrolled in eligible educational institutions."
      }
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Super Visa Insurance",
      description: "Mandatory insurance coverage for super visa applicants visiting Canada for extended stays.",
      features: ["$100,000 minimum coverage", "Valid for 1 year", "Emergency medical coverage"],
      link: "/insurance-types/super-visa",
      details: {
        coverage: "Specialized insurance meeting Government of Canada requirements for super visa applications, providing comprehensive medical coverage for visiting parents and grandparents.",
        benefits: ["Minimum $100,000 emergency medical coverage", "Valid for minimum 1 year", "Hospitalization and emergency care", "Prescription medications"],
        eligibility: "Required for super visa applicants - parents and grandparents of Canadian citizens or permanent residents aged 60+."
      }
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
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
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border">
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="p-3 bg-gray-50 rounded-full">
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
                          onClick={() => openModal(product)}
                          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                        >
                          Learn More
                        </button>
                      </div>
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

      {/* Modal for detailed information */}
      <Dialog open={!!selectedProduct} onOpenChange={closeModal}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  {selectedProduct.icon}
                  {selectedProduct.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Coverage Details</h4>
                  <p className="text-gray-600">{selectedProduct.details.coverage}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedProduct.details.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Eligibility</h4>
                  <p className="text-gray-600">{selectedProduct.details.eligibility}</p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link 
                    to="/quote" 
                    className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center"
                    onClick={closeModal}
                  >
                    Get Free Quote
                  </Link>
                  <a 
                    href="tel:+14313382078" 
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InsuranceTypes;
