import React from 'react';
import Header from '../components/Header';
import LogoBanner from '../components/LogoBanner';
import Footer from '../components/Footer';
import { TrendingUp, PiggyBank, Home, Shield, Calculator, DollarSign, CreditCard, GraduationCap, Building, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-blue-600" />,
      title: "TFSA (Tax-Free Savings Account)",
      subtitle: "Tax-Free Flexible Savings",
      description: "A TFSA allows you to save and invest money tax-free. While contributions aren't tax-deductible, all growth and withdrawals are completely tax-free. It's the most flexible registered account in Canada.",
      coverage: [
        "Tax-Free Growth - All investment gains are tax-free forever",
        "Tax-Free Withdrawals - No tax on any amount withdrawn",
        "Flexible Contributions - Annual contribution room of $7,000 (2024)",
        "Recontribution Rights - Withdrawn amounts can be recontributed the following year",
        "No Age Limit - Can contribute at any age (18+)",
        "Wide Investment Options - Stocks, bonds, GICs, mutual funds, ETFs"
      ],
      benefits: [
        "Complete tax exemption on growth and withdrawals",
        "No required minimum withdrawals",
        "Contribution room accumulates from age 18",
        "Perfect for short to medium-term goals"
      ]
    },
    {
      icon: <GraduationCap className="w-16 h-16 text-blue-600" />,
      title: "RESP (Registered Education Savings Plan)",
      subtitle: "Education Savings with Government Grants",
      description: "An RESP helps you save for a child's post-secondary education with the added benefit of government grants. While contributions aren't tax-deductible, the growth is tax-deferred and withdrawals for education are taxed in the student's hands.",
      coverage: [
        "Canada Education Savings Grant (CESG) - 20% match up to $500 annually",
        "Additional Low-Income Grant (A-CESG) - Extra 10-20% for eligible families",
        "Canada Learning Bond (CLB) - Up to $2,000 for low-income families",
        "Lifetime Contribution Limit - $50,000 per beneficiary",
        "Tax-Deferred Growth - Investments grow tax-free until withdrawal",
        "Flexible Beneficiary Changes - Can transfer between siblings"
      ],
      benefits: [
        "Free government money through grants and bonds",
        "Tax-efficient education funding",
        "No annual contribution limits",
        "Investment growth is tax-sheltered"
      ]
    },
    {
      icon: <Building className="w-16 h-16 text-blue-600" />,
      title: "Group RRSP",
      subtitle: "Employer-Sponsored Retirement Savings",
      description: "A Group RRSP is an employer-sponsored retirement savings plan that combines the tax benefits of individual RRSPs with the convenience of payroll deductions and potential employer matching contributions.",
      coverage: [
        "Payroll Deduction Convenience - Automatic contributions from each paycheque",
        "Employer Matching - Many employers match a percentage of contributions",
        "Lower Investment Fees - Group buying power reduces management fees",
        "Professional Management - Access to institutional investment options",
        "Immediate Tax Savings - Tax deductions applied to each paycheque",
        "Portability - Can transfer to personal RRSP when leaving employer"
      ],
      benefits: [
        "Employer matching maximizes retirement savings",
        "Automatic saving builds discipline",
        "Reduced fees increase long-term returns",
        "Professional investment management"
      ]
    },
    {
      icon: <Shield className="w-16 h-16 text-blue-600" />,
      title: "GIC (Guaranteed Investment Certificate)",
      subtitle: "Safe, Guaranteed Returns",
      description: "GICs offer guaranteed returns with no risk to your principal investment. They're perfect for conservative investors or as a stable component of a diversified portfolio, available in both registered and non-registered accounts.",
      coverage: [
        "Principal Protection - Your initial investment is 100% guaranteed",
        "Guaranteed Interest Rates - Fixed returns for the entire term",
        "CDIC Insurance - Protected up to $100,000 per institution",
        "Flexible Terms - From 30 days to 10 years",
        "Compound Interest Options - Interest can be paid annually or compounded",
        "Laddering Strategies - Stagger maturity dates for flexibility"
      ],
      benefits: [
        "No risk of losing your principal investment",
        "Predictable returns for financial planning",
        "Government-backed insurance protection",
        "Can be held in any registered account"
      ]
    },
    {
      icon: <CreditCard className="w-16 h-16 text-blue-600" />,
      title: "Non-Registered Investment Account",
      subtitle: "Flexible Investment Without Limits",
      description: "Non-registered accounts offer complete flexibility for investing without contribution limits or withdrawal restrictions. While there are no immediate tax benefits, they provide unlimited investment potential and liquidity.",
      coverage: [
        "No Contribution Limits - Invest as much as you want, when you want",
        "Complete Liquidity - Access your money anytime without penalties",
        "Tax-Efficient Investing - Capital gains and dividend tax advantages",
        "Estate Planning Benefits - Easier to transfer to beneficiaries",
        "Investment Flexibility - Full range of investment options available",
        "No Age Restrictions - No forced withdrawals at any age"
      ],
      benefits: [
        "Unlimited investment potential",
        "Complete control over your investments",
        "Tax-efficient for long-term growth",
        "Perfect complement to registered accounts"
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Winnipeg Downtown Background */}
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
        <LogoBanner />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <TrendingUp className="absolute top-10 left-10 w-32 h-32 text-white/20" />
            <PiggyBank className="absolute top-20 right-20 w-24 h-24 text-white/20" />
            <Home className="absolute bottom-20 left-1/4 w-28 h-28 text-white/20" />
            <DollarSign className="absolute bottom-10 right-1/3 w-20 h-20 text-white/20" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">Investment & Savings Plans</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Build your financial future with comprehensive investment and savings solutions. From retirement 
              planning to education savings and everything in between, we help you maximize your financial potential.
            </p>
          </div>
        </section>

        {/* Investment Types Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {investmentTypes.map((investment, index) => (
              <div key={index} className={`mb-16 ${index % 2 === 1 ? 'bg-gradient-to-br from-gray-50 to-gray-100 -mx-4 px-4 py-12 rounded-xl card-3d hover:shadow-2xl transition-all duration-300' : ''}`}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="card-3d bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="card-3d p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                        {investment.icon}
                      </div>
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
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to={`/investment-types/${investment.title.toLowerCase().split(' ')[0]}`}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold btn-3d text-center shadow-lg"
                      >
                        Learn More About {investment.title}
                      </Link>
                      <a href="tel:+14313382078" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold btn-3d flex items-center justify-center gap-2 shadow-lg">
                        <Phone size={18} />
                        Call Now
                      </a>
                    </div>
                  </div>
                  
                  <div className="card-3d bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Features & Details:</h3>
                    <div className="space-y-4">
                      {investment.coverage.map((coverage, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow-md border-l-4 border-blue-600 card-3d hover:shadow-lg transition-all duration-300">
                          <p className="text-gray-700 font-medium">{coverage}</p>
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
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Account Comparison</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-xl card-3d hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="card-3d p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                    <PiggyBank className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">RRSP</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <DollarSign size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Tax-deductible contributions</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Tax-deferred growth</span>
                  </li>
                  <li className="flex items-start">
                    <Calculator size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Withdrawals taxed as income</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-xl card-3d hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="card-3d p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                    <TrendingUp className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">TFSA</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <DollarSign size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>After-tax contributions</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Tax-free growth forever</span>
                  </li>
                  <li className="flex items-start">
                    <Calculator size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Tax-free withdrawals</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-xl card-3d hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="card-3d p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                    <Home className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">FHSA</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <DollarSign size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Tax-deductible contributions</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Tax-free growth and withdrawals</span>
                  </li>
                  <li className="flex items-start">
                    <Home size={16} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>For first home purchase only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Phone className="absolute top-10 right-10 w-24 h-24 text-white/20" />
            <Calculator className="absolute bottom-10 left-10 w-32 h-32 text-white/20" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our financial advisors can help you choose the right investment accounts and 
              strategies to meet your retirement, homeownership, and education goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 btn-3d shadow-lg">
                Schedule Investment Consultation
              </button>
              <a href="tel:+14313382078" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 btn-3d flex items-center justify-center gap-2 shadow-lg">
                <Phone size={20} />
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
