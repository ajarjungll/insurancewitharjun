
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, Phone, ArrowLeft, CheckCircle, DollarSign, Shield, Calculator, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const TFSADetails = () => {
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
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <Link to="/investment-types" className="inline-flex items-center text-purple-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Investment Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-3 md:p-4 rounded-xl bg-purple-50 mr-4 md:mr-6">
                <TrendingUp className="w-10 h-10 md:w-16 md:h-16 text-purple-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">TFSA</h1>
                <p className="text-base md:text-xl text-purple-100">Tax-Free Savings Account</p>
              </div>
            </div>
            <p className="text-base md:text-xl text-purple-100 max-w-4xl">
              Canada's most flexible savings account. Grow your money completely tax-free with no restrictions 
              on withdrawals and unlimited financial potential.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is a TFSA?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    The Tax-Free Savings Account (TFSA) is one of the most powerful savings tools available to Canadians. 
                    Despite its name, it's much more than a savings account - it's a flexible investment account where 
                    all growth and withdrawals are completely tax-free forever.
                  </p>
                  <p className="text-lg text-gray-600">
                    Unlike RRSPs, contributions to a TFSA are made with after-tax dollars (no tax deduction), but every 
                    dollar you earn inside the account and every withdrawal you make is completely tax-free. This makes 
                    it perfect for both short-term and long-term financial goals.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose a TFSA?</h3>
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 md:p-8 rounded-xl card-3d mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <TrendingUp className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Tax-Free Growth</h4>
                        <p className="text-gray-600">All investment gains are tax-free forever</p>
                      </div>
                      <div>
                        <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Tax-Free Withdrawals</h4>
                        <p className="text-gray-600">No tax on any amount you withdraw</p>
                      </div>
                      <div>
                        <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Complete Flexibility</h4>
                        <p className="text-gray-600">Access your money anytime, for any reason</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-purple-50 p-4 md:p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Calculator className="w-8 h-8 text-purple-600 mr-3 flex-shrink-0" />
                        <h4 className="text-lg md:text-xl font-semibold">Annual Contribution Room</h4>
                      </div>
                      <p className="text-gray-600">$7,000 for 2026, with room accumulating from age 18 even if you don't have an account.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Recontribution Rights</h4>
                      </div>
                      <p className="text-gray-600">Withdrawn amounts can be recontributed in the following calendar year.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">No Age Limit</h4>
                      </div>
                      <p className="text-gray-600">Continue contributing at any age, with no forced withdrawals or conversions.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <DollarSign className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-xl font-semibold">No Impact on Benefits</h4>
                      </div>
                      <p className="text-gray-600">TFSA income doesn't affect Old Age Security, Guaranteed Income Supplement, or other benefits.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For These Goals</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Emergency Fund</h4>
                      <p className="text-gray-600">Keep 3-6 months of expenses accessible while earning tax-free growth on high-interest savings.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Short to Medium-Term Goals</h4>
                      <p className="text-gray-600">Save for vacations, car purchases, home renovations, or other goals within 1-5 years.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Long-Term Wealth Building</h4>
                      <p className="text-gray-600">Invest in growth assets for decades of completely tax-free compound growth.</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Retirement Income</h4>
                      <p className="text-gray-600">Complement your RRSP with tax-free retirement income that doesn't affect your tax bracket.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Options</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "High-Interest Savings",
                      "Guaranteed Investment Certificates",
                      "Mutual Funds",
                      "Exchange-Traded Funds",
                      "Individual Stocks",
                      "Bonds and Fixed Income",
                      "Balanced Portfolios",
                      "Dividend Growth Stocks",
                      "International Investments"
                    ].map((option, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">TFSA vs Other Accounts</h3>
                  <div className="overflow-x-auto rounded-2xl shadow-[0_10px_40px_-10px_rgba(147,51,234,0.3)] card-3d border-2 border-purple-100">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-purple-700 to-purple-500 text-white">
                          <th className="px-3 md:px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Feature</th>
                          <th className="px-3 md:px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">TFSA ⭐</th>
                          <th className="px-3 md:px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">RRSP</th>
                          <th className="px-3 md:px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Non-Reg</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-purple-50 hover:bg-purple-100 transition-colors">
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm font-semibold text-purple-900">Tax on Contributions</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-gray-700">After-tax</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-gray-700">Deductible</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-gray-700">After-tax</td>
                        </tr>
                        <tr className="bg-white hover:bg-green-50 transition-colors">
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm font-semibold text-purple-900">Tax on Growth</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-green-600 font-bold">✅ Tax-free</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-gray-600">Deferred</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-red-500">Taxable</td>
                        </tr>
                        <tr className="bg-purple-50 hover:bg-green-50 transition-colors">
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm font-semibold text-purple-900">Tax on Withdrawals</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-green-600 font-bold">✅ Tax-free</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-red-500">Taxable</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-gray-600">On gains</td>
                        </tr>
                        <tr className="bg-white hover:bg-green-50 transition-colors">
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm font-semibold text-purple-900">Flexibility</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-green-600 font-bold">✅ Anytime</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-red-500">Penalties</td>
                          <td className="px-3 md:px-6 py-3 md:py-4 text-sm text-green-600 font-semibold">Anytime</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-purple-50 p-4 md:p-8 rounded-xl card-3d sticky top-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-[106px] h-[123px] rounded-lg overflow-hidden border-4 border-purple-300 shadow-lg mb-4">
                      <img 
                        src="/lovable-uploads/arjun-professional.jpg" 
                        alt="Arjun Singh Gill - Insurance & Investment Advisor"
                        className="w-full h-full object-cover object-top scale-[1.1]"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Arjun Singh Gill</h3>
                    <p className="text-sm text-purple-600 font-medium">Insurance & Investment Advisor</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Start Your TFSA Journey</h3>
                  <p className="text-gray-600 mb-6 text-center">
                    Open your TFSA today and start enjoying tax-free growth on all your investments.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+14313382078" className="block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold btn-3d text-center">
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <a href="mailto:insurancewitharjun@gmail.com" className="block bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold btn-3d text-center">
                      <Mail size={18} className="inline mr-2" />
                      insurancewitharjun@gmail.com
                    </a>
                    <a href="https://www.insurancewitharjun.com" target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold btn-3d text-center">
                      <Globe size={18} className="inline mr-2" />
                      www.insurancewitharjun.com
                    </a>
                    <Link to="/quote" className="block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold btn-3d text-center">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-purple-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">2026 Contribution Room</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Limit:</span>
                        <span className="font-semibold">$7,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Room (18+):</span>
                        <span className="font-semibold">$102,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Withdrawal Rules:</span>
                        <span className="font-semibold">Recontribute next year</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-purple-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Tips</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Maximize your contribution room early for maximum growth</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Perfect for emergency funds earning tax-free interest</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Consider growth investments for long-term goals</span>
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

export default TFSADetails;
