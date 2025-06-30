import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Car, Home, Heart, Building, Umbrella, Shield, FileText } from 'lucide-react';

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
        "24/7 emergency assistance services"
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
        "24/7 emergency assistance hotline",
        "Easy online claims submission process"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Insurance Types We Offer</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive coverage options for every aspect of your life. From protecting your 
            health to securing your family's future, we have the right insurance solution for you.
          </p>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {insuranceTypes.map((insurance, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 1 ? 'bg-gray-50 -mx-4 px-4 py-12 rounded-xl' : ''}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center mb-6">
                    {insurance.icon}
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
                  
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Get Quote for {insurance.title}
                  </button>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Coverage Options:</h3>
                  <div className="space-y-4">
                    {insurance.coverage.map((coverage, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                        <p className="text-gray-700">{coverage}</p>
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Coverage You Need?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experienced agents are here to help you understand your options and choose 
            the right coverage for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsuranceTypes;
