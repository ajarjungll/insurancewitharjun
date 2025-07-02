import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Car, Home, Heart, Building, Umbrella, Shield, FileText, Phone } from 'lucide-react';

const InsuranceTypes = () => {
  const insuranceTypes = [
    {
      icon: <Heart className="w-16 h-16 text-blue-600" />,
      title: "Critical Illness Insurance",
      subtitle: "Financial Protection When You Need It Most",
      description: "Critical illness insurance provides a lump sum payment when you're diagnosed with a serious illness, giving you financial freedom to focus on recovery without worrying about expenses.",
      coverage: [
        "Cancer Coverage - Comprehensive protection for all types of cancer diagnoses",
        "Heart Attack & Stroke Protection - Coverage for cardiovascular emergencies",
        "Major Organ Transplant Coverage - Financial support for organ transplant procedures",
        "Kidney Failure Coverage - Protection against renal failure diagnosis",
        "Multiple Sclerosis Coverage - Support for chronic neurological conditions",
        "Parkinson's Disease Coverage - Financial assistance for degenerative disorders"
      ],
      benefits: [
        "Lump sum benefit payment upon diagnosis",
        "No restrictions on how funds are used",
        "Family history considerations in underwriting",
        "Return of premium options available"
      ]
    },
    {
      icon: <Home className="w-16 h-16 text-blue-600" />,
      title: "Dental Insurance",
      subtitle: "Comprehensive Oral Health Protection",
      description: "Dental insurance helps make oral healthcare affordable for you and your family, covering everything from routine cleanings to major dental procedures.",
      coverage: [
        "Preventive Care Coverage - Regular cleanings, exams, and X-rays at 100%",
        "Basic Procedures Protection - Fillings, extractions, and root canals",
        "Major Dental Work Coverage - Crowns, bridges, and dentures",
        "Orthodontic Benefits - Braces and alignment treatments for children and adults",
        "Emergency Dental Care - Urgent treatment for dental emergencies",
        "Periodontal Treatment - Coverage for gum disease treatment"
      ],
      benefits: [
        "Network of qualified dental professionals",
        "No waiting periods for preventive care",
        "Family plan options with discounts",
        "Direct billing to reduce out-of-pocket costs"
      ]
    },
    {
      icon: <Heart className="w-16 h-16 text-blue-600" />,
      title: "Life Insurance",
      subtitle: "Secure Your Family's Future",
      description: "Life insurance provides financial security for your loved ones when they need it most. We offer various life insurance options to fit your budget and coverage needs.",
      coverage: [
        "Term Life Insurance - Affordable coverage for a specific period",
        "Whole Life Insurance - Permanent coverage with cash value buildup",
        "Universal Life Insurance - Flexible premiums and death benefits",
        "Final Expense Insurance - Covers burial and final expenses",
        "Accidental Death & Dismemberment - Additional protection for accidents",
        "Living Benefits - Access to death benefit for terminal illness"
      ],
      benefits: [
        "No medical exam options available",
        "Competitive rates for all ages and health conditions",
        "Flexible payment schedules",
        "Professional guidance on coverage amounts"
      ]
    },
    {
      icon: <Building className="w-16 h-16 text-blue-600" />,
      title: "Business Insurance",
      subtitle: "Protect Your Business Investment",
      description: "Whether you're a sole proprietor or run a large company, we have business insurance solutions to protect your operations, employees, and assets.",
      coverage: [
        "General Liability - Protects against third-party injury and property damage claims",
        "Property Insurance - Covers your business building, equipment, and inventory",
        "Workers' Compensation - Required coverage for employee injuries",
        "Professional Liability - Protection against errors and omissions claims",
        "Cyber Liability - Covers data breaches and cyber attacks",
        "Business Interruption - Covers lost income during covered events"
      ],
      benefits: [
        "Industry-specific coverage options",
        "Risk management and safety resources",
        "Claims advocacy and support",
        "Flexible payment terms for businesses"
      ]
    },
    {
      icon: <Umbrella className="w-16 h-16 text-blue-600" />,
      title: "Super Visa Insurance",
      subtitle: "Mandatory Coverage for Super Visa Applicants",
      description: "Super Visa insurance is mandatory health coverage required for parents and grandparents applying for a Super Visa to visit Canada. Our policies meet all government requirements.",
      coverage: [
        "Minimum $100,000 Coverage - Meets Canadian government requirements",
        "Valid for Minimum 1 Year - Coverage duration as required by immigration",
        "Emergency Medical Coverage - Hospital and medical emergency expenses",
        "Hospital & Doctor Visits - Inpatient and outpatient medical care",
        "Prescription Drug Coverage - Necessary medications during stay",
        "Repatriation Benefits - Coverage for return to home country if needed"
      ],
      benefits: [
        "Government-compliant coverage amounts",
        "Fast approval and certificate issuance",
        "Competitive rates for extended stays",
        "Emergency assistance services"
      ]
    },
    {
      icon: <FileText className="w-16 h-16 text-blue-600" />,
      title: "Student Insurance",
      subtitle: "Comprehensive Coverage for Students Abroad",
      description: "Student insurance provides essential health coverage for students studying away from home, whether domestically or internationally, ensuring access to healthcare when needed.",
      coverage: [
        "Emergency Medical Coverage - Unexpected illness and injury treatment",
        "Prescription Drug Benefits - Coverage for necessary medications",
        "Dental & Vision Care - Basic dental and vision care coverage",
        "Mental Health Support - Counseling and mental health services",
        "Sports Injury Coverage - Protection for athletic activities",
        "Trip Interruption Protection - Coverage if studies are interrupted"
      ],
      benefits: [
        "Affordable rates designed for student budgets",
        "Coverage available for domestic and international students",
        "Emergency assistance hotline",
        "Easy online claims submission process"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Edmonton Downtown Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Shield className="absolute top-10 left-10 w-32 h-32 text-white/20" />
            <Heart className="absolute top-20 right-20 w-24 h-24 text-white/20" />
            <Home className="absolute bottom-20 left-1/4 w-28 h-28 text-white/20" />
            <Umbrella className="absolute bottom-10 right-1/3 w-20 h-20 text-white/20" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">Insurance Types We Offer</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive coverage options for every aspect of your life. From protecting your 
              health to securing your family's future, we have the right insurance solution for you.
            </p>
          </div>
        </section>

        {/* Insurance Types Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {insuranceTypes.map((insurance, index) => (
              <div key={index} className={`mb-16 ${index % 2 === 1 ? 'bg-gray-50/50 -mx-4 px-4 py-12 rounded-xl card-3d' : ''}`}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="card-3d bg-white p-8 rounded-xl">
                    <div className="flex items-center mb-6">
                      <div className="card-3d p-4 rounded-xl bg-blue-50">
                        {insurance.icon}
                      </div>
                      <div className="ml-4">
                        <h2 className="text-3xl font-bold text-gray-900">{insurance.title}</h2>
                        <p className="text-lg text-blue-600">{insurance.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">{insurance.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {insurance.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold btn-3d">
                        Get Quote for {insurance.title}
                      </button>
                      <a href="tel:+14313382078" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold btn-3d flex items-center justify-center gap-2">
                        <Phone size={18} />
                        Call Now
                      </a>
                    </div>
                  </div>
                  
                  <div className="card-3d bg-white p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Coverage Options:</h3>
                    <div className="space-y-4">
                      {insurance.coverage.map((coverage, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-sm border-l-4 border-blue-600 card-3d">
                          <p className="text-gray-700 font-medium">{coverage}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Phone className="absolute top-10 right-10 w-24 h-24 text-white/20" />
            <Shield className="absolute bottom-10 left-10 w-32 h-32 text-white/20" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Not Sure Which Coverage You Need?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our experienced agents are here to help you understand your options and choose 
              the right coverage for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors btn-3d">
                Schedule Consultation
              </button>
              <a href="tel:+14313382078" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors btn-3d flex items-center justify-center gap-2">
                <Phone size={20} />
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
