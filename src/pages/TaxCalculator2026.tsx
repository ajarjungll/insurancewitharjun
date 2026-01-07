import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, ArrowLeft, DollarSign, PiggyBank, Home, TrendingDown, Info, Truck, Briefcase, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

// 2026 CPP/EI rates (estimated)
const cpp1MaxEarnings = 71300; // YMPE - Year's Maximum Pensionable Earnings
const cpp2MaxEarnings = 81200; // YAMPE - Year's Additional Maximum Pensionable Earnings
const cppExemption = 3500;
const cpp1Rate = 0.0595; // CPP base contribution rate
const cpp2Rate = 0.04; // CPP2 enhanced contribution rate
const eiMaxInsurableEarnings = 65700;
const eiRate = 0.0164; // EI rate

// Profession-specific expense types
const professions = [
  { id: 'general', name: 'General Employee', hasExpenses: false },
  { id: 'long-haul-trucker', name: 'Long Haul Truck Driver', hasExpenses: true },
  { id: 'transport-employee', name: 'Other Transport Employee', hasExpenses: true },
  { id: 'sales-commission', name: 'Commission Sales Employee', hasExpenses: true },
];

// Long haul truck driver meal rates (CRA 2024 - applicable for 2025/2026 tax year)
// $23 USD per meal converted to CAD (avg USD/CAD rate ~1.36 for 2026)
const truckDriverMealRateUSD = 23;
const usdToCadRate = 1.36; // Average USD to CAD exchange rate for 2026
const truckDriverMealRate = truckDriverMealRateUSD * usdToCadRate; // ~$31.28 CAD per meal
const truckDriverMealDeductionRate = 0.80; // 80% deductible for long-haul truck drivers
const maxMealsPerDay = 3;

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
  const [profession, setProfession] = useState<string>('general');
  const [grossIncome, setGrossIncome] = useState<string>('');
  const [rrspContribution, setRrspContribution] = useState<string>('');
  const [fhsaContribution, setFhsaContribution] = useState<string>('');
  const [daysAway, setDaysAway] = useState<string>(''); // For truckers - days away from home
  const [lodgingExpenses, setLodgingExpenses] = useState<string>(''); // Actual lodging costs

  const calculations = useMemo(() => {
    const income = parseFloat(grossIncome) || 0;
    const rrsp = Math.min(parseFloat(rrspContribution) || 0, 32490); // 2026 RRSP limit
    const fhsa = Math.min(parseFloat(fhsaContribution) || 0, 8000); // FHSA annual limit
    const days = parseFloat(daysAway) || 0;
    const lodging = parseFloat(lodgingExpenses) || 0;

    // Calculate CPP contributions
    const cpp1Pensionable = Math.max(0, Math.min(income, cpp1MaxEarnings) - cppExemption);
    const cpp1Contribution = cpp1Pensionable * cpp1Rate;
    
    // CPP2 (enhanced) on earnings between YMPE and YAMPE
    const cpp2Pensionable = Math.max(0, Math.min(income, cpp2MaxEarnings) - cpp1MaxEarnings);
    const cpp2Contribution = cpp2Pensionable * cpp2Rate;
    
    const totalCppContribution = cpp1Contribution + cpp2Contribution;

    // Calculate EI
    const eiInsurable = Math.min(income, eiMaxInsurableEarnings);
    const eiContribution = eiInsurable * eiRate;

    // Calculate trucker-specific deductions
    let mealExpenses = 0;
    let mealDeduction = 0;
    let lodgingDeduction = 0;
    
    if (profession === 'long-haul-trucker' && days > 0) {
      // Using simplified method: $23 per meal, max 3 meals per day, 80% deductible
      mealExpenses = days * maxMealsPerDay * truckDriverMealRate;
      mealDeduction = mealExpenses * truckDriverMealDeductionRate;
      lodgingDeduction = lodging; // Lodging is 100% deductible
    } else if (profession === 'transport-employee' && days > 0) {
      // Regular transport employees get 50% deduction
      mealExpenses = days * maxMealsPerDay * truckDriverMealRate;
      mealDeduction = mealExpenses * 0.50;
      lodgingDeduction = lodging;
    }

    const employmentExpenses = mealDeduction + lodgingDeduction;
    const taxableIncome = Math.max(0, income - rrsp - fhsa - employmentExpenses);
    
    // Calculate federal tax
    const federalTaxBeforeCredits = calculateTax(taxableIncome, federalBrackets);
    const federalTaxCredit = federalBPA * 0.15;
    // CPP and EI create non-refundable tax credits
    const federalCppEiCredit = (totalCppContribution + eiContribution) * 0.15;
    const federalTax = Math.max(0, federalTaxBeforeCredits - federalTaxCredit - federalCppEiCredit);

    // Calculate Manitoba tax
    const manitobaTaxBeforeCredits = calculateTax(taxableIncome, manitobaBrackets);
    const manitobaTaxCredit = manitobaBPA * 0.108;
    const manitobaCppEiCredit = (totalCppContribution + eiContribution) * 0.108;
    const manitobaTax = Math.max(0, manitobaTaxBeforeCredits - manitobaTaxCredit - manitobaCppEiCredit);

    const totalTax = federalTax + manitobaTax;
    
    // Calculate tax savings from contributions
    const incomeAfterRrsp = income - rrsp;
    const incomeAfterFhsa = incomeAfterRrsp - fhsa;
    
    const taxSavingsFromRRSP = rrsp > 0 ? calculateTax(income, federalBrackets) + calculateTax(income, manitobaBrackets) - 
      (calculateTax(incomeAfterRrsp, federalBrackets) + calculateTax(incomeAfterRrsp, manitobaBrackets)) : 0;
    const taxSavingsFromFHSA = fhsa > 0 ? calculateTax(incomeAfterRrsp, federalBrackets) + calculateTax(incomeAfterRrsp, manitobaBrackets) - 
      (calculateTax(incomeAfterFhsa, federalBrackets) + calculateTax(incomeAfterFhsa, manitobaBrackets)) : 0;

    const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
    const netIncome = income - totalTax - totalCppContribution - eiContribution;

    return {
      grossIncome: income,
      rrspContribution: rrsp,
      fhsaContribution: fhsa,
      cpp1Contribution,
      cpp2Contribution,
      totalCppContribution,
      eiContribution,
      mealExpenses,
      mealDeduction,
      lodgingDeduction,
      employmentExpenses,
      taxableIncome,
      federalTax,
      manitobaTax,
      totalTax,
      taxSavingsFromRRSP,
      taxSavingsFromFHSA,
      totalDeductions: rrsp + fhsa + employmentExpenses,
      effectiveRate,
      netIncome,
    };
  }, [grossIncome, rrspContribution, fhsaContribution, profession, daysAway, lodgingExpenses]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const selectedProfession = professions.find(p => p.id === profession);

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
              Calculate your 2026 income tax with CPP, EI, RRSP, FHSA deductions and profession-specific expenses. 
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

            {/* CPP/EI Info */}
            <div className="grid lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-purple-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 text-purple-600 mr-2" />
                  CPP (Base) 2026
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Earnings (YMPE):</span>
                    <span className="font-semibold">$71,300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exemption:</span>
                    <span className="font-semibold">$3,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">5.95%</span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 text-indigo-600 mr-2" />
                  CPP2 (Enhanced) 2026
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Earnings (YAMPE):</span>
                    <span className="font-semibold">$81,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Range:</span>
                    <span className="font-semibold">$71,300 - $81,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">4.00%</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 text-orange-600 mr-2" />
                  EI 2026
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Insurable:</span>
                    <span className="font-semibold">$65,700</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">1.64%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Premium:</span>
                    <span className="font-semibold">$1,077.48</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Calculator */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Income Tax Calculator</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Enter Your Information</h3>
                  
                  <div className="space-y-6">
                    {/* Profession Selector */}
                    <div>
                      <Label htmlFor="profession" className="text-gray-700 font-medium flex items-center mb-2">
                        <Briefcase className="w-5 h-5 text-gray-500 mr-2" />
                        Select Your Profession
                      </Label>
                      <Select value={profession} onValueChange={setProfession}>
                        <SelectTrigger className="text-lg">
                          <SelectValue placeholder="Select profession" />
                        </SelectTrigger>
                        <SelectContent>
                          {professions.map((prof) => (
                            <SelectItem key={prof.id} value={prof.id}>
                              {prof.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

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

                    {/* Trucker-specific fields */}
                    {(profession === 'long-haul-trucker' || profession === 'transport-employee') && (
                      <div className="border-t pt-6 mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Truck className="w-5 h-5 text-orange-500 mr-2" />
                          {profession === 'long-haul-trucker' ? 'Long Haul Truck Driver Expenses' : 'Transport Employee Expenses'}
                        </h4>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="daysAway" className="text-gray-700 font-medium mb-2 block">
                              Days Away From Home (Eligible Trips)
                            </Label>
                            <Input
                              id="daysAway"
                              type="number"
                              placeholder="e.g., 200"
                              value={daysAway}
                              onChange={(e) => setDaysAway(e.target.value)}
                              className="text-lg"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                              Meals: ${truckDriverMealRate}/meal × 3 meals/day × {profession === 'long-haul-trucker' ? '80%' : '50%'} deductible
                            </p>
                          </div>

                          <div>
                            <Label htmlFor="lodgingExpenses" className="text-gray-700 font-medium mb-2 block">
                              Lodging Expenses (Total Annual)
                            </Label>
                            <Input
                              id="lodgingExpenses"
                              type="number"
                              placeholder="e.g., 5000"
                              value={lodgingExpenses}
                              onChange={(e) => setLodgingExpenses(e.target.value)}
                              className="text-lg"
                            />
                            <p className="text-sm text-gray-500 mt-1">100% deductible (keep receipts)</p>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <h5 className="font-semibold text-orange-800 mb-2">CRA Simplified Method Rates</h5>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Meal rate: <strong>$23 per meal</strong> (no receipts needed)</li>
                            <li>• Maximum: 3 meals per day</li>
                            <li>• Long-haul truckers: <strong>80% deductible</strong></li>
                            <li>• Other transport: 50% deductible</li>
                            <li>• Lodging: 100% deductible (receipts required)</li>
                          </ul>
                          <p className="text-xs text-orange-600 mt-2">
                            * Long-haul = GVW &gt; 11,788 kg, 160+ km from base, 24+ hours away
                          </p>
                        </div>
                      </div>
                    )}
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
                  
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-emerald-200">
                      <span className="text-gray-600">Gross Income:</span>
                      <span className="font-semibold">{formatCurrency(calculations.grossIncome)}</span>
                    </div>

                    {/* CPP/EI Deductions */}
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Payroll Deductions</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-purple-700">CPP (Base):</span>
                          <span className="font-semibold text-purple-700">-{formatCurrency(calculations.cpp1Contribution)}</span>
                        </div>
                        {calculations.cpp2Contribution > 0 && (
                          <div className="flex justify-between">
                            <span className="text-purple-700">CPP2 (Enhanced):</span>
                            <span className="font-semibold text-purple-700">-{formatCurrency(calculations.cpp2Contribution)}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-purple-700">EI Premium:</span>
                          <span className="font-semibold text-purple-700">-{formatCurrency(calculations.eiContribution)}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-purple-200">
                          <span className="text-purple-800 font-medium">Total CPP + EI:</span>
                          <span className="font-bold text-purple-800">-{formatCurrency(calculations.totalCppContribution + calculations.eiContribution)}</span>
                        </div>
                      </div>
                    </div>

                    {calculations.totalDeductions > 0 && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Tax Deductions</h4>
                        <div className="space-y-2 text-sm">
                          {calculations.rrspContribution > 0 && (
                            <div className="flex justify-between">
                              <span className="text-blue-700 flex items-center">
                                <TrendingDown className="w-4 h-4 mr-1" />
                                RRSP:
                              </span>
                              <span className="font-semibold text-blue-700">-{formatCurrency(calculations.rrspContribution)}</span>
                            </div>
                          )}
                          {calculations.fhsaContribution > 0 && (
                            <div className="flex justify-between">
                              <span className="text-green-700 flex items-center">
                                <TrendingDown className="w-4 h-4 mr-1" />
                                FHSA:
                              </span>
                              <span className="font-semibold text-green-700">-{formatCurrency(calculations.fhsaContribution)}</span>
                            </div>
                          )}
                          {calculations.employmentExpenses > 0 && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-orange-700 flex items-center">
                                  <TrendingDown className="w-4 h-4 mr-1" />
                                  Meal Deduction:
                                </span>
                                <span className="font-semibold text-orange-700">-{formatCurrency(calculations.mealDeduction)}</span>
                              </div>
                              {calculations.lodgingDeduction > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-orange-700 flex items-center">
                                    <TrendingDown className="w-4 h-4 mr-1" />
                                    Lodging Deduction:
                                  </span>
                                  <span className="font-semibold text-orange-700">-{formatCurrency(calculations.lodgingDeduction)}</span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
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
                      <span className="text-gray-900 font-bold">Total Income Tax:</span>
                      <span className="font-bold text-red-700 text-xl">{formatCurrency(calculations.totalTax)}</span>
                    </div>

                    <div className="flex justify-between py-3 bg-emerald-100 px-3 rounded-lg">
                      <span className="text-gray-900 font-bold">Net Income (After Tax & Deductions):</span>
                      <span className="font-bold text-emerald-700 text-xl">{formatCurrency(calculations.netIncome)}</span>
                    </div>

                    <div className="flex justify-between py-2 bg-gray-100 px-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Effective Tax Rate:</span>
                      <span className="font-bold text-gray-900">{calculations.effectiveRate.toFixed(2)}%</span>
                    </div>

                    {(calculations.taxSavingsFromRRSP > 0 || calculations.taxSavingsFromFHSA > 0) && (
                      <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3">💰 Your Tax Savings from Investments</h4>
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
                          <span className="text-green-800 font-bold">Total Tax Refund from Investments:</span>
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
