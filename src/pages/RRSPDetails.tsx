
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PiggyBank, Phone, ArrowLeft, CheckCircle, TrendingUp, Shield, Calculator, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const RRSPDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/investment-types" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Investment Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-blue-50 mr-6">
                <PiggyBank className="w-16 h-16 text-blue-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">RRSP</h1>
                <p className="text-xl text-blue-100">Registered Retirement Savings Plan</p>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-4xl">
              Build your retirement savings with Canada's most popular tax-advantaged retirement account. 
              Reduce your taxes today while securing your financial future.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an RRSP?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    A Registered Retirement Savings Plan (RRSP) is a retirement savings account registered with the Canadian government. 
                    It's designed to help Canadians save for retirement while providing immediate tax benefits. Contributions to your RRSP 
                    are tax-deductible, meaning they reduce your taxable income for the year you contribute.
                  </p>
                  <p className="text-lg text-gray-600">
                    Your investments grow tax-free inside the RRSP until you withdraw them, typically in retirement when you may be 
                    in a lower tax bracket. This tax deferral can significantly boost your retirement savings over time.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Tax Deduction</h4>
                      </div>
                      <p className="text-gray-600">Contributions are tax-deductible, reducing your current year's taxable income dollar for dollar.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Tax-Free Growth</h4>
                      </div>
                      <p className="text-gray-600">Your investments grow tax-free until withdrawal, maximizing compound growth potential.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <PiggyBank className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-xl font-semibold">Flexible Contributions</h4>
                      </div>
                      <p className="text-gray-600">Contribute up to 18% of previous year's income or the annual limit, whichever is less.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Spousal Options</h4>
                      </div>
                      <p className="text-gray-600">Income splitting opportunities through spousal RRSPs for tax-efficient retirement planning.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Special Features</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Home Buyers' Plan (HBP)</h4>
                      <p className="text-gray-600">Withdraw up to $60,000 per person tax-free to purchase your first home. Must be repaid over 15 years.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Lifelong Learning Plan (LLP)</h4>
                      <p className="text-gray-600">Withdraw up to $20,000 to finance full-time education. Must be repaid over 10 years.</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Contribution Room Carryforward</h4>
                      <p className="text-gray-600">Unused contribution room carries forward indefinitely, allowing catch-up contributions in higher-income years.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Tax Refund Example (2026)</h3>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl card-3d border-2 border-green-200">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Manitoba Resident Scenario</h4>
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600 mb-1">Annual Income</p>
                          <p className="text-2xl font-bold text-gray-900">$100,000</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-gray-600 mb-1">RRSP Contribution</p>
                          <p className="text-2xl font-bold text-blue-600">$20,000</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900">Federal Tax Savings</span>
                          <span className="text-lg font-bold text-blue-600">$4,100</span>
                        </div>
                        <p className="text-sm text-gray-600">$20,000 × 20.50% (marginal rate)</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900">Manitoba Provincial Tax Savings</span>
                          <span className="text-lg font-bold text-blue-600">$2,550</span>
                        </div>
                        <p className="text-sm text-gray-600">$20,000 × 12.75% (marginal rate)</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-600 text-white p-6 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">Total Tax Refund</span>
                        <span className="text-3xl font-bold">$6,650</span>
                      </div>
                      <p className="text-green-100 mt-2 text-sm">33.25% effective tax savings on your RRSP contribution</p>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4 italic">
                      * Tax savings based on 2026 federal and Manitoba provincial tax brackets. Your actual savings may vary depending on your specific tax situation.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Increase Your Canada Child Benefit (CCB)</h3>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl card-3d border-2 border-purple-200">
                    <div className="mb-6">
                      <p className="text-lg text-gray-700 mb-4">
                        Did you know that RRSP contributions can increase your Canada Child Benefit (CCB) payments? 
                        CCB is calculated based on your <span className="font-semibold">family net income</span>, not gross income.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">How It Works:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle size={20} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">RRSP contributions <span className="font-semibold">reduce your net income</span> for tax purposes</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle size={20} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">Lower net income means <span className="font-semibold">higher CCB payments</span> from the government</p>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle size={20} className="text-purple-600 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">You get both an <span className="font-semibold">income tax refund AND increased CCB benefits</span></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">💡 Pro Tip:</span> Contributing to both RRSP and FHSA accounts 
                        maximizes your tax savings while boosting your monthly CCB payments, creating a double benefit for families.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Options</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Guaranteed Investment Certificates (GICs)",
                      "Mutual Funds",
                      "Exchange-Traded Funds (ETFs)",
                      "Individual Stocks",
                      "Bonds and Fixed Income",
                      "Balanced Portfolios"
                    ].map((option, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-blue-50 p-8 rounded-xl card-3d sticky top-8">
                  <div className="flex flex-col items-center mb-6">
                    <img 
                      src="/lovable-uploads/arjun-professional.jpg" 
                      alt="Arjun Singh Gill - Insurance & Investment Advisor"
                      className="w-28 h-36 rounded-lg object-cover object-top border-4 border-blue-300 shadow-lg mb-4 scale-[1.3]"
                    />
                    <h3 className="text-xl font-bold text-gray-900">Arjun Singh Gill</h3>
                    <p className="text-sm text-blue-600 font-medium">Insurance & Investment Advisor</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ready to Start Your RRSP?</h3>
                  <p className="text-gray-600 mb-6 text-center">
                    Get personalized advice on RRSP strategies and start building your retirement savings today.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+14313382078" className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <a href="mailto:insurancewitharjun@gmail.com" className="block bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold btn-3d text-center">
                      <Mail size={18} className="inline mr-2" />
                      insurancewitharjun@gmail.com
                    </a>
                    <a href="https://www.insurancewitharjun.com" target="_blank" rel="noopener noreferrer" className="block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold btn-3d text-center">
                      <Globe size={18} className="inline mr-2" />
                      www.insurancewitharjun.com
                    </a>
                    <Link to="/quote" className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-blue-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">2026 Contribution Limits</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Limit:</span>
                        <span className="font-semibold">$32,490</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Based on Income:</span>
                        <span className="font-semibold">18% of previous year</span>
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

export default RRSPDetails;
