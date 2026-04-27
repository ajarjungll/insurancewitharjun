
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Phone, ArrowLeft, CheckCircle, MapPin, Shield, Clock, Heart, DollarSign, Users, Activity, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import heroBg from '@/assets/hero-bg-trucker.jpg';

const TravelInsuranceTruckersDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/55 to-orange-700/40 pointer-events-none" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <Link to="/insurance-types" className="inline-flex items-center text-orange-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Insurance Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-orange-50 mr-6">
                <Truck className="w-16 h-16 text-orange-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">Travel Insurance for Truckers</h1>
                <p className="text-xl text-orange-100">Roadside EDGE Package — Specialized Coverage for Professional Drivers</p>
              </div>
            </div>
            <p className="text-xl text-orange-100 max-w-4xl">
              The Roadside EDGE Package combines Loss of Income, Accidental Death &amp; Dismemberment, Accident
              Medical, and up to $5 million in Travel Medical Emergency coverage — built specifically for
              Canadian truck drivers and transportation professionals.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Roadside EDGE Package Overview</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Roadside is a complete package of benefits designed for professional drivers. It bundles
                    Injury Loss of Income protection, 24-hour coverage, up to $5 million in Travel Medical
                    Emergency coverage, Accidental Death &amp; Dismemberment of up to $300,000, and $110,000 in
                    Accident Medical Benefits — all in one plan.
                  </p>
                  <p className="text-lg text-gray-600">
                    Available to Canadian Citizens and Permanent Residents aged 18–64 (with coverage to age 75),
                    and to non-residents holding a valid Canadian work permit with provincial health coverage in force.
                  </p>
                </div>

                {/* Eligibility */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility</h3>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl card-3d border-l-4 border-orange-600">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Canadian Citizens &amp; Permanent Residents aged <strong>18–64</strong>, with coverage to <strong>age 75</strong>.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Non-residents holding a valid <strong>Canadian work permit</strong> where a provincial health plan or equivalent insurance is in force.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Benefit Periods available: <strong>2 years*, 5 years, or to age 70</strong>.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <span>Elimination Periods: <strong>0, 30, or 112 days</strong>.</span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">*Injury only with a 2-year Benefit Period is available to non-residents in Canada with a valid work permit.</p>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <DollarSign className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-xl font-semibold">Injury Loss of Income</h4>
                      </div>
                      <p className="text-gray-600">Monthly benefits of <strong>$1,000 to $5,000</strong> available. 24-hour coverage that terminates at age 75.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Heart className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Travel Medical Emergency</h4>
                      </div>
                      <p className="text-gray-600">Up to <strong>$5 million</strong> for emergency medical expenses. 24/7 emergency assistance, unlimited trips, first 30 days of each trip. May be waived if not required.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Accidental Death &amp; Dismemberment</h4>
                      </div>
                      <p className="text-gray-600">Principal sum up to <strong>$300,000</strong> paid in the event of Death, Paraplegia, Hemiplegia, or Quadriplegia. Terminates at age 70.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Activity className="w-8 h-8 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Accident Medical Benefits</h4>
                      </div>
                      <p className="text-gray-600"><strong>$110,000 total:</strong> AMTB up to $10,000 (under LOI) and AMRB up to $100,000 within 3 years (under AD&amp;D).</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Partial Disability Benefit</h4>
                      <p className="text-gray-600">50% of benefits payable for up to <strong>180 days</strong> when partially disabled.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Waiver of Premium</h4>
                      <p className="text-gray-600">After <strong>30 days of Total Disability</strong> while benefits are payable (Disability and AD&amp;D).</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Return to Work Assistance</h4>
                      <p className="text-gray-600">Rehabilitation and financial assistance to help you get back behind the wheel.</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Single or Family Coverage</h4>
                      <p className="text-gray-600">Travel Medical Emergency and AD&amp;D coverage extends to spouse and/or dependent children. (Loss of Income / AMTB are not applicable to family members.)</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Fleet Discount Available</h4>
                      <p className="text-gray-600">Large case discounts available for qualifying fleets of <strong>20+ lives</strong>.</p>
                    </div>
                  </div>
                </div>

                {/* Optional Upgrades */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Roadside Package Upgrades</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: Activity, label: "Illness Loss of Income coverage (terminates at age 70)" },
                      { icon: Briefcase, label: "Business Overhead Expense coverage" },
                      { icon: Shield, label: "Soft Tissue Extension Option" },
                      { icon: Users, label: "Permanent Total Disability" },
                    ].map(({ icon: Icon, label }, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg card-3d">
                        <Icon size={22} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insurer Disclosure */}
                <div className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Underwritten By</h4>
                  <p className="text-xs text-gray-600">
                    Roadside EDGE Package is insured by <strong>Co-operators Life Insurance Company</strong> (Loss of Income,
                    Business Overhead Expense, Soft Tissue Extension, Accident Medical Treatment Benefit), <strong>Chubb Life
                    Insurance Company of Canada</strong> (Accidental Death &amp; Dismemberment, Accident Medical Reimbursement
                    Benefit, Permanent Total Disability), and <strong>Beneva Inc.</strong> (Monthly Travel Medical Emergency Coverage).
                    This is a brief overview of benefits — please refer to the Policy Booklet for complete details.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-orange-50 p-8 rounded-xl card-3d-super sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Roadside EDGE</h3>
                  <p className="text-gray-600 mb-6">
                    Protect your income, your health, and your family with a plan built for professional drivers.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+14313382078" className="block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <Link to="/insurance-types/travel-truckers/calculator" className="block bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-800 transition-colors font-semibold btn-3d text-center">
                      Premium Calculator
                    </Link>
                    <Link to="/quote" className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-orange-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Coverage Highlights</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Travel Medical:</span>
                        <span className="font-semibold">Up to $5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">AD&amp;D:</span>
                        <span className="font-semibold">Up to $300K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Accident Medical:</span>
                        <span className="font-semibold">$110,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly LOI:</span>
                        <span className="font-semibold">$1K – $5K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Eligibility:</span>
                        <span className="font-semibold">Ages 18–64</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage To:</span>
                        <span className="font-semibold">Age 75</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default TravelInsuranceTruckersDetails;
