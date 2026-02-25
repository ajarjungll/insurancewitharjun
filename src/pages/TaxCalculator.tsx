import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, DollarSign, PiggyBank, Home, TrendingDown, Info, Truck, Briefcase, User, Users, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

type Province = 'manitoba' | 'alberta' | 'ontario';
type TaxYear = 2025 | 2026;

const provinceNames: Record<Province, string> = {
  manitoba: 'Manitoba',
  alberta: 'Alberta',
  ontario: 'Ontario',
};

const provinceColors: Record<Province, { bg: string; text: string; border: string; light: string }> = {
  manitoba: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-100' },
  alberta: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', light: 'bg-sky-100' },
  ontario: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', light: 'bg-red-100' },
};

const taxData = {
  2025: {
    federalBrackets: [
      { min: 0, max: 57375, rate: 0.15 },
      { min: 57375, max: 114750, rate: 0.205 },
      { min: 114750, max: 177882, rate: 0.26 },
      { min: 177882, max: 253414, rate: 0.29 },
      { min: 253414, max: Infinity, rate: 0.33 },
    ],
    provincialBrackets: {
      manitoba: [
        { min: 0, max: 47000, rate: 0.108 },
        { min: 47000, max: 100000, rate: 0.1275 },
        { min: 100000, max: Infinity, rate: 0.174 },
      ],
      alberta: [
        { min: 0, max: 148269, rate: 0.10 },
        { min: 148269, max: 177922, rate: 0.12 },
        { min: 177922, max: 237230, rate: 0.13 },
        { min: 237230, max: 355845, rate: 0.14 },
        { min: 355845, max: Infinity, rate: 0.15 },
      ],
      ontario: [
        { min: 0, max: 51446, rate: 0.0505 },
        { min: 51446, max: 102894, rate: 0.0915 },
        { min: 102894, max: 150000, rate: 0.1116 },
        { min: 150000, max: 220000, rate: 0.1216 },
        { min: 220000, max: Infinity, rate: 0.1316 },
      ],
    },
    federalBPA: 16129,
    provincialBPA: { manitoba: 15780, alberta: 21885, ontario: 11865 },
    federalSpouseAmount: 16129,
    provincialSpouseAmount: { manitoba: 9838, alberta: 21885, ontario: 10079 },
    provincialLowestRate: { manitoba: 0.108, alberta: 0.10, ontario: 0.0505 },
    cpp1MaxEarnings: 71300,
    cpp2MaxEarnings: 81200,
    cppExemption: 3500,
    cpp1Rate: 0.0595,
    cpp2Rate: 0.04,
    eiMaxInsurableEarnings: 65700,
    eiRate: 0.0164,
    rrspLimit: 32490,
    fhsaLimit: 8000,
    usdToCadRate: 1.35,
  },
  2026: {
    federalBrackets: [
      { min: 0, max: 58523, rate: 0.14 },
      { min: 58523, max: 117045, rate: 0.205 },
      { min: 117045, max: 181440, rate: 0.26 },
      { min: 181440, max: 258482, rate: 0.29 },
      { min: 258482, max: Infinity, rate: 0.33 },
    ],
    provincialBrackets: {
      manitoba: [
        { min: 0, max: 47000, rate: 0.108 },
        { min: 47000, max: 100000, rate: 0.1275 },
        { min: 100000, max: Infinity, rate: 0.174 },
      ],
      alberta: [
        { min: 0, max: 151234, rate: 0.10 },
        { min: 151234, max: 181481, rate: 0.12 },
        { min: 181481, max: 241974, rate: 0.13 },
        { min: 241974, max: 362962, rate: 0.14 },
        { min: 362962, max: Infinity, rate: 0.15 },
      ],
      ontario: [
        { min: 0, max: 52886, rate: 0.0505 },
        { min: 52886, max: 105775, rate: 0.0915 },
        { min: 105775, max: 150000, rate: 0.1116 },
        { min: 150000, max: 220000, rate: 0.1216 },
        { min: 220000, max: Infinity, rate: 0.1316 },
      ],
    },
    federalBPA: 16452,
    provincialBPA: { manitoba: 15780, alberta: 22323, ontario: 12199 },
    federalSpouseAmount: 16452,
    provincialSpouseAmount: { manitoba: 10038, alberta: 22323, ontario: 10365 },
    provincialLowestRate: { manitoba: 0.108, alberta: 0.10, ontario: 0.0505 },
    cpp1MaxEarnings: 74600,
    cpp2MaxEarnings: 85000,
    cppExemption: 3500,
    cpp1Rate: 0.0595,
    cpp2Rate: 0.04,
    eiMaxInsurableEarnings: 68900,
    eiRate: 0.0163,
    rrspLimit: 33810,
    fhsaLimit: 8000,
    usdToCadRate: 1.36,
  },
};

// Profession-specific expense types
const professions = [
  { id: 'general', name: 'General Employee', hasExpenses: false },
  { id: 'long-haul-trucker', name: 'Long Haul Truck Driver', hasExpenses: true },
  { id: 'transport-employee', name: 'Other Transport Employee', hasExpenses: true },
  { id: 'sales-commission', name: 'Commission Sales Employee', hasExpenses: true },
];

// CRA meal rate in USD
const truckDriverMealRateUSD = 23;
const truckDriverMealDeductionRate = 0.80;
const maxMealsPerDay = 3;

const calculateTax = (income: number, brackets: { min: number; max: number; rate: number }[]): number => {
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

type FilingStatus = 'single' | 'couple';

const TaxCalculator = () => {
  const [selectedYear, setSelectedYear] = useState<TaxYear>(2026);
  const [selectedProvince, setSelectedProvince] = useState<Province>('manitoba');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [profession, setProfession] = useState<string>('general');
  const [grossIncome, setGrossIncome] = useState<string>('');
  const [spouseIncome, setSpouseIncome] = useState<string>('');
  const [rrspContribution, setRrspContribution] = useState<string>('');
  const [fhsaContribution, setFhsaContribution] = useState<string>('');
  const [daysAway, setDaysAway] = useState<string>('');
  const [lodgingExpenses, setLodgingExpenses] = useState<string>('');

  const yearData = taxData[selectedYear];
  const provBrackets = yearData.provincialBrackets[selectedProvince];
  const provBPA = yearData.provincialBPA[selectedProvince];
  const provSpouseAmount = yearData.provincialSpouseAmount[selectedProvince];
  const provLowestRate = yearData.provincialLowestRate[selectedProvince];
  const provName = provinceNames[selectedProvince];
  const provColors = provinceColors[selectedProvince];
  const truckDriverMealRate = truckDriverMealRateUSD * yearData.usdToCadRate;

  const calculations = useMemo(() => {
    const income = parseFloat(grossIncome) || 0;
    const spouseInc = filingStatus === 'couple' ? (parseFloat(spouseIncome) || 0) : 0;
    const rrsp = Math.min(parseFloat(rrspContribution) || 0, yearData.rrspLimit);
    const fhsa = Math.min(parseFloat(fhsaContribution) || 0, yearData.fhsaLimit);
    const days = parseFloat(daysAway) || 0;
    const lodging = parseFloat(lodgingExpenses) || 0;

    const cpp1Pensionable = Math.max(0, Math.min(income, yearData.cpp1MaxEarnings) - yearData.cppExemption);
    const cpp1Contribution = cpp1Pensionable * yearData.cpp1Rate;
    const cpp2Pensionable = Math.max(0, Math.min(income, yearData.cpp2MaxEarnings) - yearData.cpp1MaxEarnings);
    const cpp2Contribution = cpp2Pensionable * yearData.cpp2Rate;
    const totalCppContribution = cpp1Contribution + cpp2Contribution;

    const eiInsurable = Math.min(income, yearData.eiMaxInsurableEarnings);
    const eiContribution = eiInsurable * yearData.eiRate;

    let mealExpenses = 0;
    let mealDeduction = 0;
    let lodgingDeduction = 0;
    
    if (profession === 'long-haul-trucker' && days > 0) {
      mealExpenses = days * maxMealsPerDay * truckDriverMealRate;
      mealDeduction = mealExpenses * truckDriverMealDeductionRate;
      lodgingDeduction = lodging;
    } else if (profession === 'transport-employee' && days > 0) {
      mealExpenses = days * maxMealsPerDay * truckDriverMealRate;
      mealDeduction = mealExpenses * 0.50;
      lodgingDeduction = lodging;
    }

    const employmentExpenses = mealDeduction + lodgingDeduction;
    const taxableIncome = Math.max(0, income - rrsp - fhsa - employmentExpenses);
    
    let federalSpouseCredit = 0;
    let provincialSpouseCredit = 0;
    
    if (filingStatus === 'couple') {
      const federalSpouseClaimable = Math.max(0, yearData.federalSpouseAmount - spouseInc);
      federalSpouseCredit = federalSpouseClaimable * 0.15;
      const provincialSpouseClaimable = Math.max(0, provSpouseAmount - spouseInc);
      provincialSpouseCredit = provincialSpouseClaimable * provLowestRate;
    }
    
    const federalTaxBeforeCredits = calculateTax(taxableIncome, yearData.federalBrackets);
    const federalTaxCredit = yearData.federalBPA * 0.15;
    const federalCppEiCredit = (totalCppContribution + eiContribution) * 0.15;
    const federalTax = Math.max(0, federalTaxBeforeCredits - federalTaxCredit - federalCppEiCredit - federalSpouseCredit);

    const provincialTaxBeforeCredits = calculateTax(taxableIncome, provBrackets);
    const provincialTaxCredit = provBPA * provLowestRate;
    const provincialCppEiCredit = (totalCppContribution + eiContribution) * provLowestRate;
    const provincialTax = Math.max(0, provincialTaxBeforeCredits - provincialTaxCredit - provincialCppEiCredit - provincialSpouseCredit);

    const totalTax = federalTax + provincialTax;
    const totalSpouseCredit = federalSpouseCredit + provincialSpouseCredit;
    
    const incomeAfterRrsp = income - rrsp;
    const incomeAfterFhsa = incomeAfterRrsp - fhsa;
    
    const taxSavingsFromRRSP = rrsp > 0 ? calculateTax(income, yearData.federalBrackets) + calculateTax(income, provBrackets) - 
      (calculateTax(incomeAfterRrsp, yearData.federalBrackets) + calculateTax(incomeAfterRrsp, provBrackets)) : 0;
    const taxSavingsFromFHSA = fhsa > 0 ? calculateTax(incomeAfterRrsp, yearData.federalBrackets) + calculateTax(incomeAfterRrsp, provBrackets) - 
      (calculateTax(incomeAfterFhsa, yearData.federalBrackets) + calculateTax(incomeAfterFhsa, provBrackets)) : 0;

    const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
    const netIncome = income - totalTax - totalCppContribution - eiContribution;

    return {
      grossIncome: income,
      spouseIncome: spouseInc,
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
      provincialTax,
      federalSpouseCredit,
      provincialSpouseCredit,
      totalSpouseCredit,
      totalTax,
      taxSavingsFromRRSP,
      taxSavingsFromFHSA,
      totalDeductions: rrsp + fhsa + employmentExpenses,
      effectiveRate,
      netIncome,
    };
  }, [grossIncome, spouseIncome, rrspContribution, fhsaContribution, profession, daysAway, lodgingExpenses, selectedYear, yearData, truckDriverMealRate, filingStatus, provBrackets, provBPA, provSpouseAmount, provLowestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatBracket = (min: number, max: number) => {
    if (max === Infinity) return `Over $${min.toLocaleString()}`;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
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
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-emerald-50 mr-6">
                <Calculator className="w-16 h-16 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Income Tax Calculator</h1>
                <p className="text-lg md:text-xl text-emerald-100">Federal & Provincial Tax Brackets</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-emerald-100 max-w-4xl">
              Calculate your income tax with CPP, EI, RRSP, FHSA deductions and profession-specific expenses. 
              Choose your province: Manitoba, Alberta, or Ontario.
            </p>
          </div>
        </section>

        {/* Year & Province Selection */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {/* Year Tabs */}
              <div className="flex gap-4">
                {([2025, 2026] as TaxYear[]).map((year) => (
                  <Button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 md:px-8 py-4 text-lg font-bold transition-all ${
                      selectedYear === year
                        ? 'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-[0_4px_0_0_#065f46,0_6px_10px_rgba(6,95,70,0.3)] hover:shadow-[0_2px_0_0_#065f46,0_4px_6px_rgba(6,95,70,0.3)] hover:translate-y-[2px]'
                        : 'bg-gradient-to-b from-gray-200 to-gray-300 text-gray-700 shadow-[0_4px_0_0_#6b7280,0_6px_10px_rgba(107,114,128,0.25)] hover:shadow-[0_2px_0_0_#6b7280,0_4px_6px_rgba(107,114,128,0.25)] hover:translate-y-[2px] hover:from-gray-300 hover:to-gray-400'
                    }`}
                  >
                    {year} Tax Year
                  </Button>
                ))}
              </div>

              {/* Province Selector */}
              <div className="flex gap-3">
                {(['manitoba', 'alberta', 'ontario'] as Province[]).map((prov) => (
                  <Button
                    key={prov}
                    onClick={() => setSelectedProvince(prov)}
                    className={`px-5 py-4 text-base font-bold transition-all flex items-center gap-2 ${
                      selectedProvince === prov
                        ? prov === 'manitoba'
                          ? 'bg-gradient-to-b from-green-500 to-green-600 text-white shadow-[0_4px_0_0_#166534,0_6px_10px_rgba(22,101,52,0.3)] hover:shadow-[0_2px_0_0_#166534,0_4px_6px_rgba(22,101,52,0.3)] hover:translate-y-[2px]'
                          : prov === 'alberta'
                          ? 'bg-gradient-to-b from-sky-500 to-sky-600 text-white shadow-[0_4px_0_0_#0369a1,0_6px_10px_rgba(3,105,161,0.3)] hover:shadow-[0_2px_0_0_#0369a1,0_4px_6px_rgba(3,105,161,0.3)] hover:translate-y-[2px]'
                          : 'bg-gradient-to-b from-red-500 to-red-600 text-white shadow-[0_4px_0_0_#991b1b,0_6px_10px_rgba(153,27,27,0.3)] hover:shadow-[0_2px_0_0_#991b1b,0_4px_6px_rgba(153,27,27,0.3)] hover:translate-y-[2px]'
                        : 'bg-gradient-to-b from-gray-200 to-gray-300 text-gray-700 shadow-[0_4px_0_0_#6b7280,0_6px_10px_rgba(107,114,128,0.25)] hover:shadow-[0_2px_0_0_#6b7280,0_4px_6px_rgba(107,114,128,0.25)] hover:translate-y-[2px] hover:from-gray-300 hover:to-gray-400'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    {provinceNames[prov]}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tax Brackets Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{selectedYear} Tax Brackets — {provName}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Federal Tax Brackets */}
              <div className="bg-blue-50 p-8 rounded-xl card-3d">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
                  Federal Tax Brackets {selectedYear}
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
                      {yearData.federalBrackets.map((bracket, index) => (
                        <tr key={index} className={index < yearData.federalBrackets.length - 1 ? "border-b border-blue-100" : ""}>
                          <td className="py-3 px-2">{formatBracket(bracket.min, bracket.max)}</td>
                          <td className="text-right py-3 px-2 font-semibold text-blue-600">{(bracket.rate * 100).toFixed(1)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Basic Personal Amount:</strong> ${yearData.federalBPA.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Provincial Tax Brackets */}
              <div className={`${provColors.bg} p-8 rounded-xl card-3d`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className={`w-8 h-8 ${provColors.text} mr-3`} />
                  {provName} Tax Brackets {selectedYear}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`border-b-2 ${provColors.border}`}>
                        <th className="text-left py-3 px-2 text-gray-700">Income Range</th>
                        <th className="text-right py-3 px-2 text-gray-700">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {provBrackets.map((bracket, index) => (
                        <tr key={index} className={index < provBrackets.length - 1 ? `border-b ${provColors.border}` : ""}>
                          <td className="py-3 px-2">{formatBracket(bracket.min, bracket.max)}</td>
                          <td className={`text-right py-3 px-2 font-semibold ${provColors.text}`}>{(bracket.rate * 100).toFixed(2)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={`mt-4 p-3 ${provColors.light} rounded-lg`}>
                  <p className="text-sm text-gray-700">
                    <strong>Basic Personal Amount:</strong> ${provBPA.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* CPP/EI Info */}
            <div className="grid lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-purple-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 text-purple-600 mr-2" />
                  CPP (Base) {selectedYear}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Earnings (YMPE):</span>
                    <span className="font-semibold">${yearData.cpp1MaxEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exemption:</span>
                    <span className="font-semibold">${yearData.cppExemption.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">{(yearData.cpp1Rate * 100).toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 text-indigo-600 mr-2" />
                  CPP2 (Enhanced) {selectedYear}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Earnings (YAMPE):</span>
                    <span className="font-semibold">${yearData.cpp2MaxEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Range:</span>
                    <span className="font-semibold">${yearData.cpp1MaxEarnings.toLocaleString()} - ${yearData.cpp2MaxEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">{(yearData.cpp2Rate * 100).toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 text-orange-600 mr-2" />
                  EI {selectedYear}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Insurable:</span>
                    <span className="font-semibold">${yearData.eiMaxInsurableEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">{(yearData.eiRate * 100).toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Premium:</span>
                    <span className="font-semibold">{formatCurrency(yearData.eiMaxInsurableEarnings * yearData.eiRate)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Calculator */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{selectedYear} Income Tax Calculator — {provName}</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Enter Your Information</h3>
                  
                  <div className="space-y-6">
                    {/* Filing Status */}
                    <div>
                      <Label className="text-gray-700 font-medium flex items-center mb-2">
                        <Users className="w-5 h-5 text-gray-500 mr-2" />
                        Filing Status
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setFilingStatus('single')}
                          className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                            filingStatus === 'single'
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <User className="w-5 h-5" />
                          <span className="font-medium">Single</span>
                        </button>
                        <button
                          onClick={() => setFilingStatus('couple')}
                          className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                            filingStatus === 'couple'
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <Heart className="w-5 h-5" />
                          <span className="font-medium">Couple</span>
                        </button>
                      </div>
                    </div>

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
                        Your Gross Annual Income
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

                    {/* Spouse Income - only shown for couples */}
                    {filingStatus === 'couple' && (
                      <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                        <Label htmlFor="spouseIncome" className="text-gray-700 font-medium flex items-center mb-2">
                          <Heart className="w-5 h-5 text-pink-500 mr-2" />
                          Spouse's Net Income
                        </Label>
                        <Input
                          id="spouseIncome"
                          type="number"
                          placeholder="Enter 0 for non-working spouse"
                          value={spouseIncome}
                          onChange={(e) => setSpouseIncome(e.target.value)}
                          className="text-lg"
                        />
                        <p className="text-sm text-pink-700 mt-2">
                          You may claim a spousal tax credit if your spouse has low or no income. 
                          The credit is reduced by your spouse's net income.
                        </p>
                        <div className="mt-3 p-2 bg-pink-100 rounded text-xs text-pink-800">
                          <p className="font-semibold mb-1">{selectedYear} Spousal Amount Limits:</p>
                          <p>Federal: ${yearData.federalSpouseAmount.toLocaleString()} (max credit: ${(yearData.federalSpouseAmount * 0.15).toFixed(0)})</p>
                          <p>{provName}: ${provSpouseAmount.toLocaleString()} (max credit: ${(provSpouseAmount * provLowestRate).toFixed(0)})</p>
                        </div>
                      </div>
                    )}

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
                      <p className="text-sm text-gray-500 mt-1">{selectedYear} Limit: ${yearData.rrspLimit.toLocaleString()} or 18% of income</p>
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
                      <p className="text-sm text-gray-500 mt-1">Annual Limit: ${yearData.fhsaLimit.toLocaleString()}</p>
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
                              Meals: ${truckDriverMealRate.toFixed(2)}/meal × 3 meals/day × {profession === 'long-haul-trucker' ? '80%' : '50%'} deductible
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
                            <li>• Meal rate: <strong>$23 USD per meal</strong> (~${truckDriverMealRate.toFixed(2)} CAD)</li>
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
                        This calculator provides estimates based on {selectedYear} tax brackets for {provName}. 
                        Actual rates may vary. Consult a tax professional for personalized advice.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{selectedYear} Tax Results — {provName}</h3>
                  
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

                    {/* Spousal Tax Credit */}
                    {calculations.totalSpouseCredit > 0 && (
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-pink-800 mb-2 flex items-center">
                          <Heart className="w-4 h-4 mr-2" />
                          Spousal Tax Credit
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-pink-700">Federal Spouse Credit:</span>
                            <span className="font-semibold text-pink-700">{formatCurrency(calculations.federalSpouseCredit)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-pink-700">{provName} Spouse Credit:</span>
                            <span className="font-semibold text-pink-700">{formatCurrency(calculations.provincialSpouseCredit)}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-pink-200">
                            <span className="text-pink-800 font-medium">Total Tax Savings:</span>
                            <span className="font-bold text-pink-800">{formatCurrency(calculations.totalSpouseCredit)}</span>
                          </div>
                        </div>
                        <p className="text-xs text-pink-600 mt-2">
                          * Based on spouse's net income of {formatCurrency(calculations.spouseIncome)}
                        </p>
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
                      <span className="text-gray-600">{provName} Tax:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(calculations.provincialTax)}</span>
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

export default TaxCalculator;