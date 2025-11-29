
import React from 'react';
import Header from '../components/Header';
import LogoBanner from '../components/LogoBanner';
import Footer from '../components/Footer';
import { Activity, Phone, ArrowLeft, CheckCircle, Heart, Shield, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const HealthInsuranceDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        <LogoBanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/insurance-types" className="inline-flex items-center text-green-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Insurance Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-green-50 mr-6">
                <Activity className="w-16 h-16 text-green-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">Health Insurance</h1>
                <p className="text-xl text-green-100">Comprehensive Healthcare Coverage</p>
              </div>
            </div>
            <p className="text-xl text-green-100 max-w-4xl">
              Protect your health and financial well-being with comprehensive health insurance coverage. 
              Access quality healthcare when you need it most, without worrying about the cost.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Health Insurance Matters</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Health insurance is essential for protecting both your health and your financial security. 
                    While Canada's public healthcare system covers many basic medical services, there are significant 
                    gaps that can leave you with substantial out-of-pocket expenses.
                  </p>
                  <p className="text-lg text-gray-600">
                    Private health insurance fills these gaps by covering services not included in provincial health plans, 
                    such as prescription drugs, dental care, vision care, and extended health services. It also provides 
                    access to private healthcare options and coverage when traveling abroad.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Typically Covered</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Stethoscope className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Medical Services</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Private hospital rooms</li>
                        <li>• Ambulance services</li>
                        <li>• Medical equipment and supplies</li>
                        <li>• Nursing services</li>
                        <li>• Home healthcare</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Heart className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Prescription Drugs</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Brand name medications</li>
                        <li>• Generic prescriptions</li>
                        <li>• Specialty drugs</li>
                        <li>• Injectable medications</li>
                        <li>• Compounded prescriptions</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Paramedical Services</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Physiotherapy</li>
                        <li>• Chiropractic care</li>
                        <li>• Massage therapy</li>
                        <li>• Psychology services</li>
                        <li>• Naturopathy</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Activity className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-xl font-semibold">Vision & Hearing</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Eye examinations</li>
                        <li>• Prescription glasses</li>
                        <li>• Contact lenses</li>
                        <li>• Hearing aids</li>
                        <li>• Laser eye surgery</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Health Insurance</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Individual/Family Plans</h4>
                      <p className="text-gray-600">Comprehensive coverage for individuals and families not covered by employer plans. Customizable benefits to meet your specific needs.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Group Benefits</h4>
                      <p className="text-gray-600">Employer-sponsored health insurance plans that provide coverage for employees and their dependents. Often more affordable than individual plans.</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Travel Health Insurance</h4>
                      <p className="text-gray-600">Essential coverage for medical emergencies while traveling outside your home province or internationally.</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Supplemental Health Plans</h4>
                      <p className="text-gray-600">Additional coverage to supplement existing health plans, filling gaps in coverage for specific services or higher benefit limits.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Prescription drug coverage",
                      "Private hospital rooms",
                      "Ambulance services",
                      "Physiotherapy treatments",
                      "Chiropractic care",
                      "Massage therapy",
                      "Psychology services",
                      "Eye examinations",
                      "Prescription glasses",
                      "Hearing aids",
                      "Medical equipment",
                      "Travel health coverage"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-green-50 p-8 rounded-xl card-3d sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Covered Today</h3>
                  <p className="text-gray-600 mb-6">
                    Don't wait for a health emergency to realize the importance of comprehensive health insurance coverage.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+14313382078" className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <Link to="/quote" className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-green-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Coverage Highlights</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Prescription Drugs:</span>
                        <span className="font-semibold">Up to 100%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Paramedical:</span>
                        <span className="font-semibold">$500-$2000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vision Care:</span>
                        <span className="font-semibold">$200-$500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Travel Coverage:</span>
                        <span className="font-semibold">Up to $5M</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-green-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Access to multiple insurance providers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Personalized coverage recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Competitive rates and flexible options</span>
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

export default HealthInsuranceDetails;
