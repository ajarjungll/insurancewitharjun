
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Phone, Shield, CheckCircle, Users, Home, TrendingUp, DollarSign, Sparkles, Calendar, PiggyBank, Gift } from 'lucide-react';
import { Button } from '../components/ui/button';
import heroBg from '@/assets/hero-bg-life.jpg';

const LifeInsuranceDetails = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/55 to-blue-700/40 pointer-events-none" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-800 rounded-full">
                  <Heart className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">Life Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Secure Your Family's Future - Protect your loved ones with comprehensive life insurance coverage
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  Get Free Quote
                </Button>
                <a href="tel:+14313382078">
                  <Button variant="outline" className="bg-white border-2 border-white text-blue-900 hover:bg-blue-50 hover:text-blue-900 font-semibold px-8 py-3 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (431) 338-2078
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Life Insurance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Types of Life Insurance</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Term Life Insurance</h3>
                  <p className="text-gray-600 mb-6">Affordable coverage for a specific period (10, 20, or 30 years). Perfect for protecting your family during your working years.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Lower premiums</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Flexible terms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Convertible options</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Whole Life Insurance</h3>
                  <p className="text-gray-600 mb-6">Permanent coverage with cash value buildup. Provides lifelong protection with investment component.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Lifetime coverage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Cash value growth</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Loan options</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Universal Life Insurance</h3>
                  <p className="text-gray-600 mb-6">Flexible premiums and death benefits with investment options. Adjust coverage as your needs change.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Flexible premiums</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Investment options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Adjustable coverage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Final Expense Insurance</h3>
                  <p className="text-gray-600 mb-6">Smaller coverage amounts designed to cover funeral costs and final expenses. No medical exam required.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">No medical exam</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Quick approval</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">Affordable premiums</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Universal Life Real Example - Power of Compounding */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/40 px-4 py-1.5 rounded-full text-orange-700 text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  Real Example
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                  The Power of Compounding in <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Universal Life Insurance</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  See how a 30-year-old male non-smoker can build wealth and protect his family at the same time.
                </p>
              </div>

              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 card-3d border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-orange-600" />
                  Sample Client Profile
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-orange-50 p-4 rounded-xl text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Age</div>
                    <div className="text-2xl font-bold text-gray-900">30 yrs</div>
                    <div className="text-xs text-gray-600">Male, Non-Smoker</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Coverage</div>
                    <div className="text-2xl font-bold text-gray-900">$500K</div>
                    <div className="text-xs text-gray-600">Death Benefit</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Premium</div>
                    <div className="text-2xl font-bold text-gray-900">$300/mo</div>
                    <div className="text-xs text-gray-600">For 25 Years</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Assumed Return</div>
                    <div className="text-2xl font-bold text-gray-900">7%</div>
                    <div className="text-xs text-gray-600">Annual Rate</div>
                  </div>
                </div>
              </div>

              {/* Result Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-xl card-3d">
                  <Calendar className="w-10 h-10 mb-3 text-blue-200" />
                  <div className="text-sm uppercase tracking-wide text-blue-200 mb-1">Pay Premiums For</div>
                  <div className="text-3xl font-extrabold mb-2">25 Years</div>
                  <p className="text-sm text-blue-100">Total contribution: $90,000 over 25 years. After that, no more premiums needed.</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-6 rounded-2xl shadow-xl card-3d">
                  <Shield className="w-10 h-10 mb-3 text-emerald-200" />
                  <div className="text-sm uppercase tracking-wide text-emerald-200 mb-1">Lifetime Coverage</div>
                  <div className="text-3xl font-extrabold mb-2">Up to Age 100</div>
                  <p className="text-sm text-emerald-100">Your $500,000 life insurance protection stays in force for life.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-6 rounded-2xl shadow-xl card-3d">
                  <TrendingUp className="w-10 h-10 mb-3 text-orange-100" />
                  <div className="text-sm uppercase tracking-wide text-orange-100 mb-1">Value at Age 100</div>
                  <div className="text-3xl font-extrabold mb-2">$2.5 Million</div>
                  <p className="text-sm text-orange-50">Total benefit thanks to tax-deferred compounding growth.</p>
                </div>
              </div>

              {/* Breakdown */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 card-3d border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Inside the $2.5 Million?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-5 bg-blue-50 rounded-xl">
                    <div className="p-3 bg-blue-600 rounded-xl flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Life Insurance Death Benefit</div>
                      <div className="text-2xl font-bold text-gray-900">$500,000</div>
                      <p className="text-sm text-gray-600 mt-1">Guaranteed protection for your family.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-emerald-50 rounded-xl">
                    <div className="p-3 bg-emerald-600 rounded-xl flex-shrink-0">
                      <PiggyBank className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Cash Value (Tax-Sheltered)</div>
                      <div className="text-2xl font-bold text-gray-900">$2,000,000</div>
                      <p className="text-sm text-gray-600 mt-1">Withdraw any time during your life.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-6 md:p-8 shadow-2xl card-3d">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Gift className="w-7 h-7 text-orange-300" />
                  Key Benefits of This Strategy
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Tax-Free to Beneficiary</div>
                      <p className="text-sm text-blue-100">In case of death, the entire $2.5M passes to your beneficiary tax-free.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Access to Cash Anytime</div>
                      <p className="text-sm text-blue-100">Withdraw or borrow against your cash value at any point in your life.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Tax-Deferred Growth</div>
                      <p className="text-sm text-blue-100">Your investment compounds inside the policy with no annual tax drag.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Lifetime Protection</div>
                      <p className="text-sm text-blue-100">Coverage stays in force for life — peace of mind that never expires.</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-blue-200 italic border-t border-blue-700 pt-4">
                  * Illustration based on a 7% assumed annual rate of return. Actual results may vary depending on market performance, fees, and policy terms. This is for illustration purposes only and is not a contract or guarantee. Please contact us for a personalized quote.
                </p>
              </div>

              {/* Year-by-Year Projection Table */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-8 card-3d border border-orange-100">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/40 px-4 py-1.5 rounded-full text-orange-700 text-sm font-semibold mb-3">
                    <TrendingUp className="w-4 h-4" />
                    Year-by-Year Projection
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Watch Your Wealth Grow at <span className="text-orange-600">7% Compounding</span>
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Detailed projection from age 56 through age 100 showing total benefit upon death, your $500,000 life insurance protection, and the growing tax-sheltered cash value.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0">
                      <tr>
                        <th className="px-3 py-3 text-left font-semibold">End of Year</th>
                        <th className="px-3 py-3 text-left font-semibold">Age</th>
                        <th className="px-3 py-3 text-right font-semibold">Annual Premium</th>
                        <th className="px-3 py-3 text-right font-semibold">Total Upon Death</th>
                        <th className="px-3 py-3 text-right font-semibold">Life Cover</th>
                        <th className="px-3 py-3 text-right font-semibold">Cash Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { y: 22, age: 56, prem: '$3,600', death: '$662,041', cover: '$500,000', cash: '$162,041' },
                        { y: 23, age: 57, prem: '$3,600', death: '$677,430', cover: '$500,000', cash: '$177,430' },
                        { y: 24, age: 58, prem: '$3,600', death: '$693,869', cover: '$500,000', cash: '$193,869' },
                        { y: 25, age: 59, prem: '$3,600', death: '$711,416', cover: '$500,000', cash: '$211,416', highlight: 'Last premium year' },
                        { y: 26, age: 60, prem: '—', death: '$726,448', cover: '$500,000', cash: '$226,448' },
                        { y: 27, age: 61, prem: '—', death: '$742,400', cover: '$500,000', cash: '$242,400' },
                        { y: 28, age: 62, prem: '—', death: '$759,370', cover: '$500,000', cash: '$259,370' },
                        { y: 29, age: 63, prem: '—', death: '$777,400', cover: '$500,000', cash: '$277,400' },
                        { y: 30, age: 64, prem: '—', death: '$796,541', cover: '$500,000', cash: '$296,541' },
                        { y: 31, age: 65, prem: '—', death: '$816,839', cover: '$500,000', cash: '$316,839' },
                        { y: 32, age: 66, prem: '—', death: '$838,347', cover: '$500,000', cash: '$338,347' },
                        { y: 33, age: 67, prem: '—', death: '$861,166', cover: '$500,000', cash: '$361,166' },
                        { y: 34, age: 68, prem: '—', death: '$885,355', cover: '$500,000', cash: '$385,355' },
                        { y: 35, age: 69, prem: '—', death: '$910,972', cover: '$500,000', cash: '$410,972' },
                        { y: 36, age: 70, prem: '—', death: '$938,079', cover: '$500,000', cash: '$438,079' },
                        { y: 37, age: 71, prem: '—', death: '$966,739', cover: '$500,000', cash: '$466,739' },
                        { y: 38, age: 72, prem: '—', death: '$996,680', cover: '$500,000', cash: '$496,680' },
                        { y: 39, age: 73, prem: '—', death: '$1,027,844', cover: '$500,000', cash: '$527,844' },
                        { y: 40, age: 74, prem: '—', death: '$1,060,142', cover: '$500,000', cash: '$560,142' },
                        { y: 41, age: 75, prem: '—', death: '$1,093,449', cover: '$500,000', cash: '$593,449' },
                        { y: 42, age: 76, prem: '—', death: '$1,127,593', cover: '$500,000', cash: '$627,593' },
                        { y: 43, age: 77, prem: '—', death: '$1,164,095', cover: '$500,000', cash: '$664,095' },
                        { y: 44, age: 78, prem: '—', death: '$1,203,135', cover: '$500,000', cash: '$703,135' },
                        { y: 45, age: 79, prem: '—', death: '$1,244,900', cover: '$500,000', cash: '$744,900' },
                        { y: 46, age: 80, prem: '—', death: '$1,289,605', cover: '$500,000', cash: '$789,605' },
                        { y: 47, age: 81, prem: '—', death: '$1,337,470', cover: '$500,000', cash: '$837,470' },
                        { y: 48, age: 82, prem: '—', death: '$1,387,253', cover: '$500,000', cash: '$887,253' },
                        { y: 49, age: 83, prem: '—', death: '$1,438,868', cover: '$500,000', cash: '$938,868' },
                        { y: 50, age: 84, prem: '—', death: '$1,492,195', cover: '$500,000', cash: '$992,195' },
                        { y: 51, age: 85, prem: '—', death: '$1,547,066', cover: '$500,000', cash: '$1,047,066' },
                        { y: 52, age: 86, prem: '—', death: '$1,603,264', cover: '$500,000', cash: '$1,103,264' },
                        { y: 53, age: 87, prem: '—', death: '$1,660,422', cover: '$500,000', cash: '$1,160,422' },
                        { y: 54, age: 88, prem: '—', death: '$1,718,164', cover: '$500,000', cash: '$1,218,164' },
                        { y: 55, age: 89, prem: '—', death: '$1,776,019', cover: '$500,000', cash: '$1,276,019' },
                        { y: 56, age: 90, prem: '—', death: '$1,833,430', cover: '$500,000', cash: '$1,333,430' },
                        { y: 57, age: 91, prem: '—', death: '$1,889,702', cover: '$500,000', cash: '$1,389,702' },
                        { y: 58, age: 92, prem: '—', death: '$1,950,497', cover: '$500,000', cash: '$1,450,497' },
                        { y: 59, age: 93, prem: '—', death: '$2,016,178', cover: '$500,000', cash: '$1,516,178' },
                        { y: 60, age: 94, prem: '—', death: '$2,087,139', cover: '$500,000', cash: '$1,587,139' },
                        { y: 61, age: 95, prem: '—', death: '$2,163,803', cover: '$500,000', cash: '$1,663,803' },
                        { y: 62, age: 96, prem: '—', death: '$2,246,629', cover: '$500,000', cash: '$1,746,629' },
                        { y: 63, age: 97, prem: '—', death: '$2,336,112', cover: '$500,000', cash: '$1,836,112' },
                        { y: 64, age: 98, prem: '—', death: '$2,432,787', cover: '$500,000', cash: '$1,932,787' },
                        { y: 65, age: 99, prem: '—', death: '$2,537,233', cover: '$500,000', cash: '$2,037,233', highlight: 'Peak value' },
                        { y: 66, age: 100, prem: '—', death: '$2,508,541', cover: '$500,000', cash: '$2,008,541', highlight: 'Age 100' },
                      ].map((row) => (
                        <tr
                          key={row.y}
                          className={
                            row.age === 100
                              ? 'bg-gradient-to-r from-orange-100 to-amber-100 font-bold'
                              : row.age === 99
                              ? 'bg-emerald-50 font-semibold'
                              : row.age % 2 === 0
                              ? 'bg-gray-50'
                              : 'bg-white'
                          }
                        >
                          <td className="px-3 py-2.5 text-gray-700">
                            {row.y}
                            {row.highlight && (
                              <span className="ml-2 text-xs text-orange-600 font-semibold">★ {row.highlight}</span>
                            )}
                          </td>
                          <td className="px-3 py-2.5 text-gray-700">{row.age}</td>
                          <td className="px-3 py-2.5 text-right text-gray-700">{row.prem}</td>
                          <td className="px-3 py-2.5 text-right text-blue-700 font-semibold">{row.death}</td>
                          <td className="px-3 py-2.5 text-right text-gray-700">{row.cover}</td>
                          <td className="px-3 py-2.5 text-right text-emerald-700 font-semibold">{row.cash}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Total Premiums Paid</div>
                    <div className="text-xl font-bold text-blue-900">$90,000</div>
                    <div className="text-xs text-gray-600">$300/mo × 25 years</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Cash Value at Age 99</div>
                    <div className="text-xl font-bold text-emerald-700">$2,037,233</div>
                    <div className="text-xs text-gray-600">22× your contributions</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-xl text-center">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Total Benefit at Age 99</div>
                    <div className="text-xl font-bold text-orange-700">$2,537,233</div>
                    <div className="text-xs text-gray-600">Tax-free to beneficiary</div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 italic mt-6 text-center">
                  Source: Beneva Universal Life illustration, March 6, 2026 — Male, Non-Smoker, $500,000 YRT, $300/month for 25 years, 7% assumed annual return. This illustration is not a contract or guarantee; actual results vary based on market performance and policy terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Life Insurance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Who Needs Life Insurance?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Parents</h3>
                  <p className="text-gray-600">Protect your children's future and ensure they can pursue their dreams even if you're not there.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Homeowners</h3>
                  <p className="text-gray-600">Ensure your mortgage is paid off and your family can keep their home.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Breadwinners</h3>
                  <p className="text-gray-600">Replace your income to maintain your family's standard of living.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Protect What Matters Most</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Life insurance is a gift of love for your family. Get a free quote and secure their future today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Get Free Quote Now
              </Button>
              <a href="tel:+14313382078">
                <Button variant="outline" className="bg-white border-2 border-white text-blue-900 hover:bg-blue-50 hover:text-blue-900 font-semibold px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (431) 338-2078
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default LifeInsuranceDetails;
