
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Phone, ArrowLeft, CheckCircle, BookOpen, Shield, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const StudentInsuranceDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/insurance-types" className="inline-flex items-center text-indigo-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Insurance Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-indigo-50 mr-6">
                <GraduationCap className="w-16 h-16 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">Student Insurance</h1>
                <p className="text-xl text-indigo-100">Affordable Protection for Students</p>
              </div>
            </div>
            <p className="text-xl text-indigo-100 max-w-4xl">
              Comprehensive insurance coverage designed specifically for students. Protect your health, belongings, 
              and future while focusing on your education without financial worry.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Students Need Insurance</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Student life comes with unique risks and financial challenges. Whether you're living on campus, 
                    studying abroad, or starting your independent adult life, having proper insurance coverage is 
                    essential for protecting your health, belongings, and financial future.
                  </p>
                  <p className="text-lg text-gray-600">
                    Student insurance plans are specifically designed to be affordable while providing comprehensive 
                    coverage for the situations students commonly face. From health emergencies to laptop theft, 
                    we help ensure that unexpected events don't derail your education.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Student Coverage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-indigo-600 mr-3" />
                        <h4 className="text-xl font-semibold">Student Health Insurance</h4>
                      </div>
                      <p className="text-gray-600 mb-4">Comprehensive health coverage for students not covered by parental plans.</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Prescription drug coverage</li>
                        <li>• Dental and vision care</li>
                        <li>• Mental health services</li>
                        <li>• Emergency medical care</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Personal Property Coverage</h4>
                      </div>
                      <p className="text-gray-600 mb-4">Protection for laptops, textbooks, and personal belongings.</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Electronics and computers</li>
                        <li>• Textbooks and supplies</li>
                        <li>• Clothing and personal items</li>
                        <li>• Theft and damage coverage</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Plane className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Travel Insurance</h4>
                      </div>
                      <p className="text-gray-600 mb-4">Essential coverage for students studying abroad or traveling.</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• International health coverage</li>
                        <li>• Trip cancellation protection</li>
                        <li>• Emergency evacuation</li>
                        <li>• Lost luggage coverage</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Liability Protection</h4>
                      </div>
                      <p className="text-gray-600 mb-4">Coverage for accidents that may occur in dorms or off-campus.</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Personal liability coverage</li>
                        <li>• Property damage protection</li>
                        <li>• Legal expense coverage</li>
                        <li>• Tenant insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Special Considerations</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">International Students</h4>
                      <p className="text-gray-600">Mandatory health insurance requirements for study permits, plus coverage for travel home and family visits.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Graduate Students</h4>
                      <p className="text-gray-600">Extended coverage periods for research, thesis work, and potential gaps between student and professional insurance.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Study Abroad Programs</h4>
                      <p className="text-gray-600">Specialized coverage for exchange students, including academic interruption and emergency repatriation benefits.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Student Risks</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Laptop and electronics theft",
                      "Dorm room accidents",
                      "Sports and recreation injuries",
                      "Mental health challenges",
                      "International travel emergencies",
                      "Prescription medication costs",
                      "Dental emergencies",
                      "Vision care needs",
                      "Lost or damaged textbooks",
                      "Liability for roommate disputes",
                      "Study interruption due to illness",
                      "Emergency family travel"
                    ].map((risk, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Money-Saving Tips</h3>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-gray-700"><strong>Bundle policies:</strong> Combine health, property, and liability coverage for discounts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-gray-700"><strong>Good student discounts:</strong> Maintain good grades for insurance savings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-gray-700"><strong>Group coverage:</strong> Join student association plans for better rates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-gray-700"><strong>Higher deductibles:</strong> Accept higher deductibles to lower premiums</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-indigo-50 p-8 rounded-xl card-3d sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Student-Friendly Coverage</h3>
                  <p className="text-gray-600 mb-6">
                    Get affordable, comprehensive insurance coverage designed specifically for students and their unique needs.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+14313382078" className="block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <Link to="/quote" className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-indigo-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Student Discounts</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-lg font-bold text-indigo-600">Up to 25% Off</div>
                        <div className="text-sm text-gray-600">Student health insurance plans</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">Multi-Policy</div>
                        <div className="text-sm text-gray-600">Additional savings with bundled coverage</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">Good Grades</div>
                        <div className="text-sm text-gray-600">Discounts for academic achievement</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-indigo-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Coverage available from $20/month</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No medical exams required</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Coverage starts immediately</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>24/7 support available</span>
                      </li>
                    </ul>
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

export default StudentInsuranceDetails;
