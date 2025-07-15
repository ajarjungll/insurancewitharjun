
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, Phone, ArrowLeft, CheckCircle, TrendingUp, Shield, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const FHSADetails = () => {
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
        <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/investment-types" className="inline-flex items-center text-green-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Investment Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-green-50 mr-6">
                <Home className="w-16 h-16 text-green-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">FHSA</h1>
                <p className="text-xl text-green-100">First Home Savings Account</p>
              </div>
            </div>
            <p className="text-xl text-green-100 max-w-4xl">
              The ultimate savings account for first-time homebuyers. Get both tax-deductible contributions 
              and tax-free withdrawals for your first home purchase.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is an FHSA?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    The First Home Savings Account (FHSA) is Canada's newest registered account, launched in 2023. 
                    It combines the best features of both RRSPs and TFSAs, offering tax-deductible contributions 
                    like an RRSP and tax-free withdrawals like a TFSA - but only for qualifying first home purchases.
                  </p>
                  <p className="text-lg text-gray-600">
                    This account is specifically designed for first-time homebuyers and provides the most tax-efficient 
                    way to save for your first home. You can contribute up to $8,000 annually with a lifetime maximum of $40,000.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Double Tax Advantage</h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl card-3d mb-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="text-center">
                        <Calculator className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Tax-Deductible Going In</h4>
                        <p className="text-gray-600">Contributions reduce your taxable income, just like an RRSP</p>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Tax-Free Coming Out</h4>
                        <p className="text-gray-600">Withdrawals for home purchases are completely tax-free</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Home className="w-8 h-8 text-green-600 mr-3" />
                        <h4 className="text-xl font-semibold">First-Time Buyers Only</h4>
                      </div>
                      <p className="text-gray-600">Must be a first-time homebuyer or not have owned a home in the past 4 years.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                        <h4 className="text-xl font-semibold">Annual Contributions</h4>
                      </div>
                      <p className="text-gray-600">Contribute up to $8,000 per year, with unused room carrying forward for one year.</p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                        <h4 className="text-xl font-semibold">Lifetime Maximum</h4>
                      </div>
                      <p className="text-gray-600">Maximum total contributions of $40,000 over the account's lifetime.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl card-3d">
                      <div className="flex items-center mb-4">
                        <Shield className="w-8 h-8 text-purple-600 mr-3" />
                        <h4 className="text-xl font-semibold">15-Year Limit</h4>
                      </div>
                      <p className="text-gray-600">Account must be closed by the end of the 15th year after opening.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Qualifying Home Purchase</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Property Types</h4>
                      <p className="text-gray-600">Detached homes, condos, townhouses, mobile homes, and shares in housing cooperatives in Canada.</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Principal Residence</h4>
                      <p className="text-gray-600">Must be your principal place of residence and occupied within one year of purchase.</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">No Repayment Required</h4>
                      <p className="text-gray-600">Unlike the HBP, funds withdrawn for home purchase don't need to be repaid to the account.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Options</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      "High-Interest Savings",
                      "Guaranteed Investment Certificates",
                      "Mutual Funds",
                      "Exchange-Traded Funds",
                      "Individual Stocks",
                      "Bonds and Fixed Income"
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
                <div className="bg-green-50 p-8 rounded-xl card-3d sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your FHSA Today</h3>
                  <p className="text-gray-600 mb-6">
                    Begin saving for your first home with the most tax-efficient account available to first-time buyers.
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">2024 Contribution Limits</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Annual Limit:</span>
                        <span className="font-semibold">$8,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lifetime Maximum:</span>
                        <span className="font-semibold">$40,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Lifespan:</span>
                        <span className="font-semibold">15 years</span>
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

export default FHSADetails;
