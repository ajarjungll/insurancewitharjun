
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accessibility, Phone, ArrowLeft, CheckCircle, Shield, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const DisabilityInsuranceDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/insurance-types" className="inline-flex items-center text-purple-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Insurance Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-purple-50 mr-6">
                <Accessibility className="w-16 h-16 text-purple-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">Disability Insurance</h1>
                <p className="text-xl text-purple-100">Comprehensive Disability Protection</p>
              </div>
            </div>
            <p className="text-xl text-purple-100 max-w-4xl">
              Protect your financial future with comprehensive disability insurance. Get the support you need 
              when illness or injury prevents you from working and earning income.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Disability Insurance</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Disability insurance is designed to replace a portion of your income if you become unable to work 
                    due to illness or injury. It's one of the most important types of insurance you can have, as it 
                    protects your ability to earn a living - often your most valuable asset.
                  </p>
                  <p className="text-lg text-gray-600">
                    Most people understand the need for life insurance, but disability insurance is actually more likely 
                    to be needed during your working years. Statistics show that you're more likely to become disabled 
                    than to die during your career.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Disabilities Covered</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <Heart className="w-12 h-12 text-blue-600 mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Illness-Related Disabilities</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Cancer and cancer treatment</li>
                        <li>• Heart disease and stroke</li>
                        <li>• Mental health conditions</li>
                        <li>• Chronic diseases</li>
                        <li>• Autoimmune disorders</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <Shield className="w-12 h-12 text-green-600 mb-4" />
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Injury-Related Disabilities</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Workplace injuries</li>
                        <li>• Auto accidents</li>
                        <li>• Sports and recreational injuries</li>
                        <li>• Home accidents</li>
                        <li>• Repetitive stress injuries</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Coverage Options</h3>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Own Occupation Coverage</h4>
                      <p className="text-gray-600">Pays benefits if you can't perform the duties of your specific occupation, even if you could work in another field.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Any Occupation Coverage</h4>
                      <p className="text-gray-600">Pays benefits only if you can't work in any occupation for which you're reasonably qualified by education, training, or experience.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Modified Own Occupation</h4>
                      <p className="text-gray-600">A hybrid approach that considers both your specific occupation and your ability to work in other fields.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Policy Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Benefit Period</h5>
                        <p className="text-sm text-gray-600">How long benefits are paid (2 years, 5 years, to age 65, etc.)</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Elimination Period</h5>
                        <p className="text-sm text-gray-600">Waiting period before benefits begin (30, 90, 180 days)</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Benefit Amount</h5>
                        <p className="text-sm text-gray-600">Typically 60-80% of your pre-disability income</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Cost of Living Adjustment</h5>
                        <p className="text-sm text-gray-600">Increases benefits to keep up with inflation</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Partial Disability Benefits</h5>
                        <p className="text-sm text-gray-600">Pays reduced benefits for partial work capacity</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">Rehabilitation Benefits</h5>
                        <p className="text-sm text-gray-600">Covers costs of rehabilitation and retraining</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Needs Disability Insurance?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-purple-50 rounded-xl">
                      <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Working Professionals</h4>
                      <p className="text-gray-600">Anyone who depends on their income to maintain their lifestyle</p>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Self-Employed</h4>
                      <p className="text-gray-600">Business owners without employer disability benefits</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Breadwinners</h4>
                      <p className="text-gray-600">Primary income earners supporting families</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-purple-50 p-8 rounded-xl card-3d sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Secure Your Income</h3>
                  <p className="text-gray-600 mb-6">
                    Don't leave your financial future to chance. Protect your income with comprehensive disability insurance.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+14313382078" className="block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <Link to="/quote" className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-purple-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Disability Statistics</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">25%</div>
                        <div className="text-sm text-gray-600">of 20-year-olds will become disabled before retirement</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">90%</div>
                        <div className="text-sm text-gray-600">of disabilities are caused by illness, not accidents</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">2.5 years</div>
                        <div className="text-sm text-gray-600">average length of long-term disability claims</div>
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

export default DisabilityInsuranceDetails;
