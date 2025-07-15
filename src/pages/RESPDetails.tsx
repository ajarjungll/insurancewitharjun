
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Phone, ArrowLeft, CheckCircle, Gift, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const RESPDetails = () => {
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
        <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/investment-types" className="inline-flex items-center text-indigo-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Investment Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-indigo-50 mr-6">
                <GraduationCap className="w-16 h-16 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">RESP</h1>
                <p className="text-xl text-indigo-100">Registered Education Savings Plan</p>
              </div>
            </div>
            <p className="text-xl text-indigo-100 max-w-4xl">
              Save for your child's education with government grants that can add thousands of dollars 
              to your contributions. The smart way to fund post-secondary education in Canada.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an RESP?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    A Registered Education Savings Plan (RESP) is a government-registered savings plan designed to help 
                    families save for a child's post-secondary education. While contributions aren't tax-deductible, 
                    the investments grow tax-free until withdrawn for education expenses.
                  </p>
                  <p className="text-lg text-gray-600">
                    The real power of RESPs comes from the government grants and bonds that can be added to your account, 
                    essentially providing free money to help fund your child's education. The Canada Education Savings 
                    Grant (CESG) alone can add up to $7,200 per child over the lifetime of the plan.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Government Grants & Bonds</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Gift className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">Canada Education Savings Grant (CESG)</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 20% match on first $2,500 contributed annually</li>
                        <li>• Maximum $500 per year, $7,200 lifetime</li>
                        <li>• Available until child turns 17</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Gift className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Additional CESG (A-CESG)</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Extra 10% or 20% for eligible families</li>
                        <li>• Based on family net income</li>
                        <li>• Up to $100 additional per year</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Gift className="w-8 h-8 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">Canada Learning Bond (CLB)</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• $500 initial payment + $100 annually</li>
                        <li>• For low-income families (no contribution required)</li>
                        <li>• Up to $2,000 total per child</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Gift className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-xl font-semibold">Provincial Grants</h4>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li>• British Columbia: $1,200 one-time grant</li>
                        <li>• Quebec: QESI grants up to $3,600</li>
                        <li>• Saskatchewan: $250 + $50 annual</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Benefits</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Lifetime Contribution Limit</h4>
                      <p className="text-gray-600">Maximum $50,000 per beneficiary with no annual contribution limits - contribute as much or as little as you want each year.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Tax-Deferred Growth</h4>
                      <p className="text-gray-600">Investments grow tax-free inside the RESP until withdrawal, maximizing compound growth over time.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Beneficiary Options</h4>
                      <p className="text-gray-600">Change beneficiaries among siblings, extend the plan up to 35 years, or transfer to another family RESP.</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Educational Assistance Payments (EAPs)</h4>
                      <p className="text-gray-600">Growth and grants are taxed in the student's hands (usually lower tax rate) when used for qualifying education expenses.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Qualifying Education Programs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Full-Time Programs (3+ weeks)</h4>
                      <ul className="space-y-2">
                        {[
                          "Universities and colleges",
                          "Trade schools and apprenticeships",
                          "CEGEP programs in Quebec",
                          "Designated institutions worldwide"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle size={16} className="text-green-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Part-Time Programs (3+ weeks)</h4>
                      <ul className="space-y-2">
                        {[
                          "University courses (part-time)",
                          "College certificate programs",
                          "Professional development courses",
                          "Distance learning programs"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <CheckCircle size={16} className="text-green-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Options</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "Guaranteed Investment Certificates",
                      "Mutual Funds",
                      "Exchange-Traded Funds",
                      "Balanced Portfolios",
                      "Age-Based Portfolios",
                      "Conservative Income Funds",
                      "Growth Equity Funds",
                      "Target Date Funds",
                      "Index Funds"
                    ].map((option, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle size={16} className="text-green-500 mr-3" />
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What if My Child Doesn't Go to School?</h3>
                  <div className="bg-yellow-50 p-6 rounded-xl card-3d">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">You Have Options:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Users className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <span className="text-gray-600"><strong>Transfer to a sibling:</strong> Change the beneficiary to another child in the family</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-gray-600"><strong>Keep contributions:</strong> Your original contributions can be withdrawn tax-free</span>
                      </li>
                      <li className="flex items-start">
                        <Gift className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                        <span className="text-gray-600"><strong>Return grants:</strong> Government grants must be returned, but you keep the growth they generated</span>
                      </li>
                      <li className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                        <span className="text-gray-600"><strong>Transfer growth to RRSP:</strong> Up to $50,000 of growth can be transferred to your RRSP (if you have room)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-indigo-50 p-8 rounded-xl card-3d sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Child's RESP</h3>
                  <p className="text-gray-600 mb-6">
                    Don't miss out on thousands in government grants. Start your child's education savings plan today.
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Maximum Benefits</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">CESG Lifetime:</span>
                        <span className="font-semibold">$7,200</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">CLB Maximum:</span>
                        <span className="font-semibold">$2,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contribution Limit:</span>
                        <span className="font-semibold">$50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plan Duration:</span>
                        <span className="font-semibold">Up to 35 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-indigo-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Grant Calculator Example</h4>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Annual Contribution</div>
                        <div className="text-2xl font-bold text-indigo-600">$2,500</div>
                        <div className="text-sm text-gray-600 mt-2">CESG Match (20%)</div>
                        <div className="text-xl font-bold text-green-600">+ $500</div>
                        <div className="border-t border-gray-200 mt-2 pt-2">
                          <div className="text-sm text-gray-600">Total Annual Growth</div>
                          <div className="text-2xl font-bold text-gray-900">$3,000</div>
                        </div>
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

export default RESPDetails;
