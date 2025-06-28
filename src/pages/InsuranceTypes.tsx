
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Car, Home, Heart, Building, Umbrella, Shield } from 'lucide-react';

const InsuranceTypes = () => {
  const insuranceTypes = [
    {
      icon: <Car className="w-16 h-16 text-blue-600" />,
      title: "Auto Insurance",
      subtitle: "Protect Your Vehicle and Yourself",
      description: "Comprehensive auto insurance coverage to protect you on the road. Whether you drive a car, truck, motorcycle, or RV, we have the right coverage for you.",
      coverage: [
        "Liability Coverage - Protects against bodily injury and property damage claims",
        "Collision Coverage - Covers damage to your vehicle from accidents",
        "Comprehensive Coverage - Protects against theft, vandalism, and weather damage",
        "Uninsured/Underinsured Motorist - Protection when others don't have adequate coverage",
        "Personal Injury Protection - Medical expenses and lost wages coverage",
        "Rental Car Reimbursement - Transportation while your car is being repaired"
      ],
      benefits: [
        "Competitive rates with multiple carrier options",
        "Discounts for safe driving, multiple vehicles, and bundling",
        "24/7 claims service and roadside assistance",
        "Flexible payment options"
      ]
    },
    {
      icon: <Home className="w-16 h-16 text-blue-600" />,
      title: "Home Insurance",
      subtitle: "Protect Your Most Valuable Asset",
      description: "Your home is likely your largest investment. Our homeowner's insurance policies provide comprehensive protection for your dwelling, personal belongings, and liability exposure.",
      coverage: [
        "Dwelling Coverage - Protects the structure of your home",
        "Personal Property - Covers your belongings inside and outside your home",
        "Liability Protection - Covers legal responsibility for injuries on your property",
        "Additional Living Expenses - Covers extra costs if you can't live in your home",
        "Medical Payments - Covers medical expenses for injuries on your property",
        "Natural Disaster Coverage - Protection against storms, hail, and other perils"
      ],
      benefits: [
        "Replacement cost coverage for your home and belongings",
        "Discounts for security systems and safety features",
        "Claims assistance and preferred contractor networks",
        "Bundle with auto insurance for additional savings"
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
      title: "Umbrella Insurance",
      subtitle: "Extra Protection When You Need It Most",
      description: "Umbrella insurance provides additional liability coverage above and beyond your existing auto and home insurance policies, protecting your assets and future earnings.",
      coverage: [
        "Additional Liability Coverage - Extends beyond your primary policies",
        "Personal Injury Protection - Covers libel, slander, and invasion of privacy",
        "Property Damage - Additional coverage for damage you cause to others' property",
        "Legal Defense Costs - Covers attorney fees and court costs",
        "Worldwide Coverage - Protection anywhere in the world",
        "False Arrest and Imprisonment - Coverage for wrongful detention claims"
      ],
      benefits: [
        "Affordable way to increase liability protection",
        "Covers gaps in your existing policies",
        "Protects your assets and future income",
        "Peace of mind for high-net-worth individuals"
      ]
    },
    {
      icon: <Shield className="w-16 h-16 text-blue-600" />,
      title: "Specialty Insurance",
      subtitle: "Unique Coverage for Unique Needs",
      description: "We offer specialized insurance products for unique situations and valuable items that may not be fully covered by standard policies.",
      coverage: [
        "Motorcycle Insurance - Coverage for bikes, scooters, and ATVs",
        "Boat Insurance - Protection for watercraft and marine equipment",
        "RV Insurance - Coverage for recreational vehicles and travel trailers",
        "Valuable Items Coverage - Protection for jewelry, art, and collectibles",
        "Flood Insurance - Essential coverage not included in standard home policies",
        "Renters Insurance - Protection for tenants' personal property and liability"
      ],
      benefits: [
        "Specialized coverage for unique risks",
        "Expert knowledge of specialty markets",
        "Competitive rates with specialty carriers",
        "Personalized service for unique needs"
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
            vehicle to securing your family's future, we have the right insurance solution for you.
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
