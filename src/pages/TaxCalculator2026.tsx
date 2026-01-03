import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, ArrowLeft, DollarSign, PiggyBank, Home, TrendingDown, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// 2026 Federal Tax Brackets (estimated based on indexation)
const federalBrackets = [
  { min: 0, max: 57375, rate: 0.15 },
  { min: 57375, max: 114750, rate: 0.205 },
  { min: 114750, max: 177882, rate: 0.26 },
  { min: 177882, max: 253414, rate: 0.29 },
  { min: 253414, max: Infinity, rate: 0.33 },
];

// 2026 Manitoba Tax Brackets (estimated based on indexation)
const manitobaBrackets = [
  { min: 0, max: 47564, rate: 0.108 },
  { min: 47564, max: 101200, rate: 0.1275 },
  { min: 101200, max: Infinity, rate: 0.174 },
];

// Basic Personal Amounts for 2026 (estimated)
const federalBPA = 16129;
const manitobaBPA = 15780;

const calculateTax = (income: number, brackets: typeof federalBrackets): number => {
  let tax = 0;
  let remainingIncome = income;

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;
    const taxableInBracket = Math.min(remainingIncome, bracket.max - bracket.min);
    tax += taxableInBracket * bracket.rate;
    remainingIncome -= taxableInBracket;
  }

  return tax;
};

const TaxCalculator2026 = () => {
  const [grossIncome, setGrossIncome] = useState<string>('');
  const [rrspContribution, setRrspContribution] = useState<string>('');
  const [fhsaContribution, setFhsaContribution] = useState<string>('');

  const calculations = useMemo(() => {
    const income = parseFloat(grossIncome) || 0;
    const rrsp = Math.min(parseFloat(rrspContribution) || 0, 32490); // 2026 RRSP limit
    const fhsa = Math.min(parseFloat(fhsaContribution) || 0, 8000); // FHSA annual limit

    const taxableIncome = Math.max(0, income - rrsp - fhsa);
    
    // Calculate federal tax
    const federalTaxBeforeCredits = calculateTax(taxableIncome, federalBrackets);
    const federalTaxCredit = federalBPA * 0.15;
    const federalTax = Math.max(0, federalTaxBeforeCredits - federalTaxCredit);

    // Calculate Manitoba tax
    const manitobaTaxBeforeCredits = calculateTax(taxableIncome, manitobaBrackets);
    const manitobaTaxCredit = manitobaBPA * 0.108;
    const manitobaTax = Math.max(0, manitobaTaxBeforeCredits - manitobaTaxCredit);

    const totalTax = federalTax + manitobaTax;
    const taxSavingsFromRRSP = rrsp > 0 ? calculateTax(income, federalBrackets) + calculateTax(income, manitobaBrackets) - 
      (calculateTax(income - rrsp, federalBrackets) + calculateTax(income - rrsp, manitobaBrackets)) : 0;
    const taxSavingsFromFHSA = fhsa > 0 ? calculateTax(income - rrsp, federalBrackets) + calculateTax(income - rrsp, manitobaBrackets) - 
      (calculateTax(income - rrsp - fhsa, federalBrackets) + calculateTax(income - rrsp - fhsa, manitobaBrackets)) : 0;

    const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
    const netIncome = income - totalTax;

    return {
      grossIncome: income,
      rrspContribution: rrsp,
      fhsaContribution: fhsa,
      taxableIncome,
      federalTax,
      manitobaTax,
      totalTax,
      taxSavingsFromRRSP,
      taxSavingsFromFHSA,
      totalDeductions: rrsp + fhsa,
      effectiveRate,
      netIncome,
    };
  }, [grossIncome, rrspContribution, fhsaContribution]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4">
            <Link to="/investment-types" className="inline-flex items-center text-emerald-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Investment Types
            </Link>
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-emerald-50 mr-6">
                <Calculator className="w-16 h-16 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-4">2026 Income Tax Calculator</h1>
                <p className="text-xl text-emerald-100">Federal & Manitoba Tax Brackets</p>
              </div>
            </div>
            <p className="text-xl text-emerald-100 max-w-4xl">
              Calculate your 2026 income tax with RRSP and FHSA contribution deductions. 
              See how much you can save by contributing to registered accounts.
            </p>
          </div>
        </section>

        {/* Tax Brackets Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">2026 Tax Brackets</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Federal Tax Brackets */}
              <div className="bg-blue-50 p-8 rounded-xl card-3d">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
                  Federal Tax Brackets 2026
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-blue-200">
                        <th className="text-left py-3 px-2 text-gray-700">Income Range</th>
                        <th className="text-right py-3 px-2 text-gray-700">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">$0 - $57,375</td>
                        <td className="text-right py-3 px-2 font-semibold text-blue-600">15%</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">$57,375 - $114,750</td>
                        <td className="text-right py-3 px-2 font-semibold text-blue-600">20.5%</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">$114,750 - $177,882</td>
                        <td className="text-right py-3 px-2 font-semibold text-blue-600">26%</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-3 px-2">$177,882 - $253,414</td>
                        <td className="text-right py-3 px-2 font-semibold text-blue-600">29%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2">Over $253,414</td>
                        <td className="text-right py-3 px-2 font-semibold text-blue-600">33%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Basic Personal Amount:</strong> $16,129 (estimated)
                  </p>
                </div>
              </div>

              {/* Manitoba Tax Brackets */}
              <div className="bg-green-50 p-8 rounded-xl card-3d">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                  Manitoba Tax Brackets 2026
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-green-200">
                        <th className="text-left py-3 px-2 text-gray-700">Income Range</th>
                        <th className="text-right py-3 px-2 text-gray-700">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-green-100">
                        <td className="py-3 px-2">$0 - $47,564</td>
                        <td className="text-right py-3 px-2 font-semibold text-green-600">10.8%</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-3 px-2">$47,564 - $101,200</td>
                        <td className="text-right py-3 px-2 font-semibold text-green-600">12.75%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2">Over $101,200</td>
                        <td className="text-right py-3 px-2 font-semibold text-green-600">17.4%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Basic Personal Amount:</strong> $15,780 (estimated)
                  </p>
                </div>
              </div>
            </div>

            {/* Tax Calculator */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Income Tax Calculator</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Enter Your Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="grossIncome" className="text-gray-700 font-medium flex items-center mb-2">
                        <DollarSign className="w-5 h-5 text-gray-500 mr-2" />
                        Gross Annual Income
                      </Label>
                      <Input
                        id="grossIncome"
                        type="number"
                        placeholder="e.g., 75000"
                        value={grossIncome}
                        onChange={(e) => setGrossIncome(e.target.value)}
                        className="text-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="rrspContribution" className="text-gray-700 font-medium flex items-center mb-2">
                        <PiggyBank className="w-5 h-5 text-blue-500 mr-2" />
                        RRSP Contribution
                      </Label>
                      <Input
                        id="rrspContribution"
                        type="number"
                        placeholder="e.g., 10000"
                        value={rrspContribution}
                        onChange={(e) => setRrspContribution(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500 mt-1">2026 Limit: $32,490 or 18% of income</p>
                    </div>

                    <div>
                      <Label htmlFor="fhsaContribution" className="text-gray-700 font-medium flex items-center mb-2">
                        <Home className="w-5 h-5 text-green-500 mr-2" />
                        FHSA Contribution
                      </Label>
                      <Input
                        id="fhsaContribution"
                        type="number"
                        placeholder="e.g., 8000"
                        value={fhsaContribution}
                        onChange={(e) => setFhsaContribution(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500 mt-1">Annual Limit: $8,000</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-yellow-800">
                        This calculator provides estimates based on projected 2026 tax brackets. 
                        Actual rates may vary. Consult a tax professional for personalized advice.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Tax Calculation Results</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-emerald-200">
                      <span className="text-gray-600">Gross Income:</span>
                      <span className="font-semibold">{formatCurrency(calculations.grossIncome)}</span>
                    </div>

                    {calculations.totalDeductions > 0 && (
                      <>
                        <div className="flex justify-between py-2 border-b border-emerald-200">
                          <span className="text-gray-600 flex items-center">
                            <TrendingDown className="w-4 h-4 text-blue-500 mr-2" />
                            RRSP Deduction:
                          </span>
                          <span className="font-semibold text-blue-600">-{formatCurrency(calculations.rrspContribution)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-emerald-200">
                          <span className="text-gray-600 flex items-center">
                            <TrendingDown className="w-4 h-4 text-green-500 mr-2" />
                            FHSA Deduction:
                          </span>
                          <span className="font-semibold text-green-600">-{formatCurrency(calculations.fhsaContribution)}</span>
                        </div>
                      </>
                    )}

                    <div className="flex justify-between py-2 border-b border-emerald-200 bg-white/50 px-2 rounded">
                      <span className="text-gray-700 font-medium">Taxable Income:</span>
                      <span className="font-bold">{formatCurrency(calculations.taxableIncome)}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-emerald-200">
                      <span className="text-gray-600">Federal Tax:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(calculations.federalTax)}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-emerald-200">
                      <span className="text-gray-600">Manitoba Tax:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(calculations.manitobaTax)}</span>
                    </div>

                    <div className="flex justify-between py-3 bg-red-100 px-3 rounded-lg">
                      <span className="text-gray-900 font-bold">Total Tax:</span>
                      <span className="font-bold text-red-700 text-xl">{formatCurrency(calculations.totalTax)}</span>
                    </div>

                    <div className="flex justify-between py-3 bg-emerald-100 px-3 rounded-lg">
                      <span className="text-gray-900 font-bold">Net Income (After Tax):</span>
                      <span className="font-bold text-emerald-700 text-xl">{formatCurrency(calculations.netIncome)}</span>
                    </div>

                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Effective Tax Rate:</span>
                      <span className="font-semibold">{calculations.effectiveRate.toFixed(2)}%</span>
                    </div>

                    {(calculations.taxSavingsFromRRSP > 0 || calculations.taxSavingsFromFHSA > 0) && (
                      <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3">Your Tax Savings</h4>
                        {calculations.taxSavingsFromRRSP > 0 && (
                          <div className="flex justify-between mb-2">
                            <span className="text-green-700">RRSP Tax Savings:</span>
                            <span className="font-bold text-green-700">{formatCurrency(calculations.taxSavingsFromRRSP)}</span>
                          </div>
                        )}
                        {calculations.taxSavingsFromFHSA > 0 && (
                          <div className="flex justify-between mb-2">
                            <span className="text-green-700">FHSA Tax Savings:</span>
                            <span className="font-bold text-green-700">{formatCurrency(calculations.taxSavingsFromFHSA)}</span>
                          </div>
                        )}
                        <div className="flex justify-between pt-2 border-t border-green-300">
                          <span className="text-green-800 font-bold">Total Tax Refund:</span>
                          <span className="font-bold text-green-800 text-lg">
                            {formatCurrency(calculations.taxSavingsFromRRSP + calculations.taxSavingsFromFHSA)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-xl text-white text-center card-3d">
                <h3 className="text-2xl font-bold mb-4">Need Help Maximizing Your Tax Savings?</h3>
                <p className="mb-6 text-emerald-100">
                  Get personalized advice on RRSP and FHSA contributions to optimize your tax situation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/investment-types/rrsp" className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors btn-3d">
                    Learn About RRSP
                  </Link>
                  <Link to="/investment-types/fhsa" className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors btn-3d">
                    Learn About FHSA
                  </Link>
                  <Link to="/quote" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors btn-3d">
                    Get Free Quote
                  </Link>
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

export default TaxCalculator2026;