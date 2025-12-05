import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, PiggyBank, Home, GraduationCap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const InvestmentTypes = () => {
  const navigate = useNavigate();

  const investmentProducts = [
    {
      icon: <PiggyBank className="w-12 h-12 text-blue-600" />,
      title: "RRSP",
      subtitle: "Registered Retirement Savings Plan",
      description: "Tax-deferred retirement savings that reduce your taxable income while building wealth for the future.",
      features: ["Tax-deductible contributions", "Tax-free growth until withdrawal", "Home Buyers' Plan eligible"],
      detailPage: "/investment-types/rrsp"
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "FHSA",
      subtitle: "First Home Savings Account",
      description: "The best of both worlds - tax-deductible contributions and tax-free withdrawals for your first home.",
      features: ["Double tax advantage", "$8,000 annual contribution", "No repayment required"],
      detailPage: "/investment-types/fhsa"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "TFSA",
      subtitle: "Tax-Free Savings Account",
      description: "Completely tax-free growth and withdrawals - the most flexible registered account in Canada.",
      features: ["Tax-free growth forever", "Tax-free withdrawals", "Flexible contribution room"],
      detailPage: "/investment-types/tfsa"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-orange-600" />,
      title: "RESP",
      subtitle: "Registered Education Savings Plan",
      description: "Save for your child's education with government grants that boost your contributions.",
      features: ["20% government grant", "Tax-deferred growth", "Up to $50,000 lifetime"],
      detailPage: "/investment-types/resp"
    }
  ];

  const openDetailPage = (detailPage: string) => {
    navigate(detailPage);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
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
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <TrendingUp className="w-20 h-20 text-blue-200" />
              </div>
              <h1 className="text-5xl font-bold mb-6">Investment & Savings Plans</h1>
              <p className="text-xl text-blue-100 mb-8">
                Build your financial future with comprehensive investment and savings solutions. From retirement planning to education savings, we help you maximize your potential.
              </p>
            </div>
          </div>
        </section>

        {/* Investment Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {investmentProducts.map((product, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 card-3d-super">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gray-50 rounded-full card-3d">
                        {product.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{product.title}</h3>
                    <p className="text-sm text-blue-600 mb-4 text-center">{product.subtitle}</p>
                    <p className="text-gray-600 mb-6 text-center">{product.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <button 
                        onClick={() => openDetailPage(product.detailPage)}
                        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold btn-3d"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Choosing the Right Investment?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our financial experts are here to help you find the perfect savings and investment strategy for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                Get Free Consultation
              </Link>
              <a href="tel:+14313382078" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Call (431) 338-2078
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default InvestmentTypes;
