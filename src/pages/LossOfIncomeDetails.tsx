
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, Phone, ArrowLeft, CheckCircle, Shield, TrendingDown, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const LossOfIncomeDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/insurance-types" className="inline-flex items-center text-red-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Insurance Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-red-50 mr-6">
                <DollarSign className="w-16 h-16 text-red-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">Loss of Income Insurance</h1>
                <p className="text-xl text-red-100">Protect Your Financial Future</p>
              </div>
            </div>
            <p className="text-xl text-red-100 max-w-4xl">
              Safeguard your income against unexpected events. Loss of income insurance provides financial 
              support when you can't work due to illness, injury, or other covered circumstances.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loss of Income Insurance?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Loss of income insurance, also known as disability insurance or income protection insurance, 
                    provides financial support when you're unable to work due to illness, injury, or other covered events. 
                    This coverage helps maintain your standard of living by replacing a portion of your lost income.
                  </p>
                  <p className="text-lg text-gray-600">
                    Unlike worker's compensation which only covers work-related injuries, loss of income insurance 
                    protects you from income loss due to any covered disability, whether it occurs at work, at home, 
                    or during recreational activities.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Coverage</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Short-Term Disability</h4>
                      </div>
                      <p className="text-gray-600 mb-4">Coverage for temporary disabilities lasting weeks to months.</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Typically covers 3-12 months</li>
                        <li>• Usually 60-70% of income</li>
                        <li>• Shorter waiting period</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Long-Term Disability</h4>
                      </div>
                      <p className="text-gray-600 mb-4">Protection for extended or permanent disabilities.</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Coverage until retirement age</li>
                        <li>• Usually 60-80% of income</li>
                        <li>• Longer waiting period (90+ days)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Benefits</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Income Replacement</h4>
                      <p className="text-gray-600">Receive a percentage of your pre-disability income to help maintain your lifestyle and meet financial obligations.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Own Occupation vs Any Occupation</h4>
                      <p className="text-gray-600">Choose between coverage that pays if you can't perform your specific job or only if you can't work in any occupation.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Rehabilitation Benefits</h4>
                      <p className="text-gray-600">Coverage for rehabilitation services to help you return to work, including retraining for a new career if necessary.</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost of Living Adjustments</h4>
                      <p className="text-gray-600">Optional inflation protection to ensure your benefits maintain purchasing power over time.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Conditions Covered</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Musculoskeletal injuries",
                      "Mental health conditions",
                      "Cardiovascular disease",
                      "Cancer treatment",
                      "Pregnancy complications",
                      "Chronic illnesses",
                      "Work-related injuries",
                      "Auto accident injuries",
                      "Surgical recovery",
                      "Chronic pain conditions",
                      "Neurological disorders",
                      "Recovery from illness"
                    ].map((condition, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-red-50 p-8 rounded-xl card-3d sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Protect Your Income</h3>
                  <p className="text-gray-600 mb-6">
                    Your ability to earn income is likely your most valuable asset. Protect it with comprehensive loss of income insurance.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+14313382078" className="block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <Link to="/quote" className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-red-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Did You Know?</h4>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="font-semibold text-gray-900">1 in 4 workers</div>
                        <div>will become disabled before retirement</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="font-semibold text-gray-900">90% of disabilities</div>
                        <div>are caused by illness, not injury</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <div className="font-semibold text-gray-900">Average claim duration</div>
                        <div>is 2.5 years for long-term disabilities</div>
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

export default LossOfIncomeDetails;
