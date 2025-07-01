
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, PiggyBank, Home, Shield, Calculator, DollarSign } from 'lucide-react';

const InvestmentTypes = () => {
  const investmentTypes = [
    {
      icon: <PiggyBank className="w-16 h-16 text-blue-600" />,
      title: "RRSP (Registered Retirement Savings Plan)",
      subtitle: "Tax-Deferred Retirement Savings",
      description: "An RRSP is a retirement savings account registered with the Canadian government that allows you to save for retirement while reducing your taxable income. Contributions are tax-deductible, and your investments grow tax-free until withdrawal.",
      coverage: [
        "Tax-Deductible Contributions - Reduce your annual taxable income",
        "Tax-Free Growth - Investments grow without annual tax implications",
        "Contribution Room Accumulation - 18% of previous year's income up to annual limit",
        "Spousal RRSP Options - Income splitting strategies for retirement",
        "Home Buyers' Plan (HBP) - Withdraw up to $35,000 for first home purchase",
        "Lifelong Learning Plan (LLP) - Withdraw funds for education expenses"
      ],
      benefits: [
        "Immediate tax deduction on contributions",
        "Compound growth without annual taxation",
        "Flexible investment options (GICs, mutual funds, stocks)",
        "Contribution room carries forward if not used"
      ]
    },
    {
      icon: <Home className="w-16 h-16 text-blue-600" />,
      title: "FHSA (First Home Savings Account)",
      subtitle: "Tax-Free Home Ownership Savings",
      description: "The FHSA combines the best features of RRSPs and TFSAs, allowing first-time home buyers to save tax-free for their first home purchase. Contributions are tax-deductible and withdrawals for qualifying home purchases are tax-free.",
      coverage: [
        "Tax-Deductible Contributions - Up to $8,000 annually, $40,000 lifetime maximum",
        "Tax-Free Withdrawals - For qualifying first home purchases",
        "Tax-Free Growth - Investments grow without taxation",
        "15-Year Account Lifespan - Or until first qualifying withdrawal",
        "Flexible Investment Options - Similar to RRSP investment choices",
        "Transferable to RRSP - Unused funds can be transferred tax-free"
      ],
      benefits: [
        "Double tax advantage: deductible contributions and tax-free withdrawals",
        "No requirement to repay withdrawn funds",
        "Can be used in combination with HBP from RRSP",
        "Contribution room carries forward for up to one year"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Investment & Savings Plans</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Build your financial future with tax-advantaged investment accounts. From retirement 
            planning to homeownership goals, we help you maximize your savings potential.
          </p>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {investmentTypes.map((investment, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 1 ? 'bg-gray-50 -mx-4 px-4 py-12 rounded-xl' : ''}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center mb-6">
                    {investment.icon}
                    <div className="ml-4">
                      <h2 className="text-3xl font-bold text-gray-900">{investment.title}</h2>
                      <p className="text-lg text-blue-600">{investment.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{investment.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {investment.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Learn More About {investment.title}
                  </button>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Features & Details:</h3>
                  <div className="space-y-4">
                    {investment.coverage.map((coverage, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
                        <p className="text-gray-700">{coverage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">RRSP vs FHSA Comparison</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <PiggyBank className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">RRSP</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <DollarSign size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>18% of previous year's income (max $31,560 for 2024)</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Tax-deferred growth until retirement</span>
                </li>
                <li className="flex items-start">
                  <Calculator size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Withdrawals taxed as income</span>
                </li>
                <li className="flex items-start">
                  <Home size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>HBP allows $35,000 withdrawal for home purchase</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Home className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">FHSA</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <DollarSign size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>$8,000 annually, $40,000 lifetime maximum</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Tax-free growth and withdrawals</span>
                </li>
                <li className="flex items-start">
                  <Calculator size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>No tax on qualifying home purchase withdrawals</span>
                </li>
                <li className="flex items-start">
                  <Shield size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>15-year account lifespan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our financial advisors can help you choose the right investment accounts and 
            strategies to meet your retirement and homeownership goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Schedule Investment Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Call (431) 338-2078
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestmentTypes;
