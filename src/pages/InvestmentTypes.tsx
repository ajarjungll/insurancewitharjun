import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, PiggyBank, Building, Globe, Shield, DollarSign } from 'lucide-react';

const InvestmentTypes = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519037433887-140ffa5b4bbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80")'
        }}
      />
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Explore Investment Types</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Secure your financial future with diverse investment options tailored to your goals.
            </p>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Options</h2>
              <p className="text-xl text-gray-600">Discover a range of investment opportunities</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
                <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Stocks</h3>
                <p className="text-gray-600">
                  Invest in publicly traded companies and benefit from their growth.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
                <PiggyBank className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bonds</h3>
                <p className="text-gray-600">
                  Lend money to governments or corporations and earn fixed interest.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
                <Building className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate</h3>
                <p className="text-gray-600">
                  Invest in physical properties for rental income or appreciation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mutual Funds</h3>
                <p className="text-gray-600">
                  Diversify your investments with professionally managed funds.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Annuities</h3>
                <p className="text-gray-600">
                  Provide a steady income stream in retirement with insurance contracts.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
                <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ETFs</h3>
                <p className="text-gray-600">
                  Trade like stocks but with diversified holdings in a specific sector or index.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Disclaimer */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Investment involves risk, including the potential loss of principal. Past performance
              is not indicative of future results. Consult with a qualified financial advisor
              before making any investment decisions.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default InvestmentTypes;
