import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Truck, Phone, ArrowLeft, Calculator, Shield, Heart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-bg-trucker.jpg';

// Class A — Loss of Income (Injury) monthly rates from EDGE 2026 rate guide.
// Rows: Elimination Period / Benefit Period. Cols: monthly benefit amount.
const BENEFIT_AMOUNTS = [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000] as const;

type EpBp = '0/70' | '0/5' | '0/2' | '30/70' | '30/5' | '30/2' | '112/70' | '112/5' | '112/2';

const LOI_INJURY_CLASS_A: Record<EpBp, number[]> = {
  '0/70':   [47.50, 71.25, 95.00, 118.75, 142.50, 166.25, 190.00, 213.75, 237.50],
  '0/5':    [34.20, 51.30, 68.40,  85.50, 102.60, 119.70, 136.80, 153.90, 171.00],
  '0/2':    [29.43, 44.15, 58.86,  73.58,  88.29, 103.01, 117.72, 132.44, 147.15],
  '30/70':  [32.50, 48.75, 65.00,  81.25,  97.50, 113.75, 130.00, 146.25, 162.50],
  '30/5':   [21.13, 31.69, 42.25,  52.81,  63.38,  73.94,  84.50,  95.07, 105.62],
  '30/2':   [17.47, 26.21, 34.94,  43.68,  52.41,  61.15,  69.88,  78.62,  87.35],
  '112/70': [24.40, 36.60, 48.80,  61.00,  73.20,  85.40,  97.60, 109.80, 122.00],
  '112/5':  [14.64, 21.96, 29.28,  36.60,  43.92,  51.24,  58.56,  65.88,  73.20],
  '112/2':  [11.90, 17.85, 23.80,  29.75,  35.70,  41.65,  47.60,  53.55,  59.50],
};

const EP_BP_OPTIONS: { value: EpBp; ep: string; bp: string }[] = [
  { value: '0/70',   ep: '0 days',   bp: 'To age 70' },
  { value: '0/5',    ep: '0 days',   bp: '5 years'   },
  { value: '0/2',    ep: '0 days',   bp: '2 years'   },
  { value: '30/70',  ep: '30 days',  bp: 'To age 70' },
  { value: '30/5',   ep: '30 days',  bp: '5 years'   },
  { value: '30/2',   ep: '30 days',  bp: '2 years'   },
  { value: '112/70', ep: '112 days', bp: 'To age 70' },
  { value: '112/5',  ep: '112 days', bp: '5 years'   },
  { value: '112/2',  ep: '112 days', bp: '2 years'   },
];

// Monthly Travel Medical Emergency rates (EDGE 2026, page 23)
const TRAVEL_MEDICAL = { single: 14.15, family: 24.78 };

// AD&D monthly rates (EDGE 2026, page 23). Index aligned with AMOUNTS.
const ADND_AMOUNTS = [0, 50000, 100000, 200000, 300000] as const;
const ADND_RATES = {
  single: [0,  6.00, 12.00, 24.00, 36.00],
  family: [0,  7.80, 15.60, 31.20, 46.80],
};
// Corresponding AMRB (Accident Medical Reimbursement Benefit) bundled with AD&D
const AMRB_BY_ADND = [0, 10000, 20000, 40000, 100000];

const formatMoney = (n: number) =>
  n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2 });

const formatLumpSum = (n: number) =>
  n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });

const TruckerInsuranceCalculator = () => {
  const [coverage, setCoverage] = useState<'single' | 'family'>('single');
  const [monthlyBenefit, setMonthlyBenefit] = useState<number>(3000);
  const [epBp, setEpBp] = useState<EpBp>('30/5');
  const [includeTravel, setIncludeTravel] = useState(true);
  const [adndAmount, setAdndAmount] = useState<number>(100000);

  const calculation = useMemo(() => {
    const benefitIdx = BENEFIT_AMOUNTS.indexOf(monthlyBenefit as typeof BENEFIT_AMOUNTS[number]);
    const loi = LOI_INJURY_CLASS_A[epBp][benefitIdx] ?? 0;

    const travel = includeTravel ? TRAVEL_MEDICAL[coverage] : 0;

    const adndIdx = ADND_AMOUNTS.indexOf(adndAmount as typeof ADND_AMOUNTS[number]);
    const adnd = ADND_RATES[coverage][adndIdx] ?? 0;
    const amrb = AMRB_BY_ADND[adndIdx] ?? 0;

    const monthlyTotal = loi + travel + adnd;
    const annualTotal = monthlyTotal * 12;

    return { loi, travel, adnd, amrb, monthlyTotal, annualTotal };
  }, [coverage, monthlyBenefit, epBp, includeTravel, adndAmount]);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/55 to-orange-700/40 pointer-events-none" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <Link to="/insurance-types/travel-truckers" className="inline-flex items-center text-orange-200 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Trucker Insurance
            </Link>
            <div className="flex items-center mb-4">
              <div className="card-3d p-4 rounded-xl bg-orange-50 mr-6">
                <Calculator className="w-14 h-14 text-orange-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Trucker Insurance Calculator</h1>
                <p className="text-lg text-orange-100">Estimate your Roadside EDGE premium — Travel Medical &amp; Loss of Income (Injury)</p>
              </div>
            </div>
            <p className="text-orange-100 max-w-3xl">
              Based on the EDGE 2026 <strong>Class A — Loss of Income (Injury)</strong> rate table for professional truck drivers.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Inputs */}
              <div className="lg:col-span-2 space-y-6">
                {/* Coverage Type */}
                <div className="bg-white p-6 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Coverage Type</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {(['single', 'family'] as const).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setCoverage(opt)}
                        className={`p-4 rounded-lg border-2 font-semibold transition-all btn-3d ${
                          coverage === opt
                            ? 'border-orange-600 bg-orange-50 text-orange-900'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
                        }`}
                      >
                        {opt === 'single' ? 'Single' : 'Family'}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Family extends Travel Medical &amp; AD&amp;D to spouse / dependent children. Loss of Income is for the insured only.
                  </p>
                </div>

                {/* Monthly Benefit */}
                <div className="bg-white p-6 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">2. Monthly Loss of Income Benefit</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    How much income do you want replaced each month if injured?
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                    {BENEFIT_AMOUNTS.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setMonthlyBenefit(amt)}
                        className={`p-3 rounded-lg border-2 font-semibold text-sm transition-all ${
                          monthlyBenefit === amt
                            ? 'border-orange-600 bg-orange-50 text-orange-900'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-orange-300'
                        }`}
                      >
                        ${amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* EP / BP */}
                <div className="bg-white p-6 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">3. Elimination &amp; Benefit Period</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Elimination Period (EP):</strong> waiting time before benefits start.{' '}
                    <strong>Benefit Period (BP):</strong> how long benefits continue.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-2 text-left">Select</th>
                          <th className="p-2 text-left">Elimination</th>
                          <th className="p-2 text-left">Benefit Period</th>
                          <th className="p-2 text-right">Monthly Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {EP_BP_OPTIONS.map((opt) => {
                          const idx = BENEFIT_AMOUNTS.indexOf(monthlyBenefit as typeof BENEFIT_AMOUNTS[number]);
                          const cost = LOI_INJURY_CLASS_A[opt.value][idx];
                          const selected = epBp === opt.value;
                          return (
                            <tr
                              key={opt.value}
                              onClick={() => setEpBp(opt.value)}
                              className={`cursor-pointer transition-colors ${
                                selected ? 'bg-orange-50' : 'hover:bg-gray-50'
                              }`}
                            >
                              <td className="p-2">
                                <input
                                  type="radio"
                                  checked={selected}
                                  onChange={() => setEpBp(opt.value)}
                                  className="accent-orange-600"
                                />
                              </td>
                              <td className="p-2 font-medium">{opt.ep}</td>
                              <td className="p-2">{opt.bp}</td>
                              <td className="p-2 text-right font-semibold">{formatMoney(cost)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Travel Medical */}
                <div className="bg-white p-6 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">4. Travel Medical Emergency (Optional)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Up to <strong>$5,000,000</strong> coverage for emergency medical expenses outside your province.
                    24/7 assistance, unlimited trips, first 30 days of each trip.
                  </p>
                  <label className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-orange-300">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={includeTravel}
                        onChange={(e) => setIncludeTravel(e.target.checked)}
                        className="w-5 h-5 mr-3 accent-orange-600"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">Add Monthly Travel Medical</div>
                        <div className="text-xs text-gray-500">{coverage === 'single' ? 'Single coverage' : 'Family coverage'}</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-orange-700">
                      {formatMoney(TRAVEL_MEDICAL[coverage])}/mo
                    </div>
                  </label>
                </div>

                {/* AD&D */}
                <div className="bg-white p-6 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">5. Accidental Death &amp; Dismemberment (Optional)</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Tax-free lump sum paid in the event of accidental death, paraplegia, hemiplegia or quadriplegia.
                    Includes <strong>Accident Medical Reimbursement Benefit (AMRB)</strong>.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {ADND_AMOUNTS.map((amt, i) => {
                      const cost = ADND_RATES[coverage][i];
                      const selected = adndAmount === amt;
                      return (
                        <button
                          key={amt}
                          onClick={() => setAdndAmount(amt)}
                          className={`p-3 rounded-lg border-2 transition-all text-left ${
                            selected
                              ? 'border-orange-600 bg-orange-50'
                              : 'border-gray-200 bg-white hover:border-orange-300'
                          }`}
                        >
                          <div className="font-bold text-gray-900 text-sm">
                            {amt === 0 ? 'None' : formatLumpSum(amt)}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {amt === 0 ? '—' : `${formatMoney(cost)}/mo`}
                          </div>
                          {amt > 0 && (
                            <div className="text-[10px] text-orange-700 mt-1">
                              AMRB: {formatLumpSum(AMRB_BY_ADND[i])}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-6 rounded-xl card-3d-super sticky top-8">
                  <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-start pb-3 border-b border-orange-400/40">
                      <div>
                        <div className="flex items-center text-orange-100 text-sm">
                          <DollarSign size={14} className="mr-1" /> Loss of Income (Injury)
                        </div>
                        <div className="text-xs text-orange-200 mt-1">
                          {formatLumpSum(monthlyBenefit)}/mo · EP {epBp.split('/')[0]}d · BP {epBp.split('/')[1] === '70' ? 'to 70' : `${epBp.split('/')[1]}y`}
                        </div>
                      </div>
                      <div className="font-bold whitespace-nowrap">{formatMoney(calculation.loi)}</div>
                    </div>

                    <div className="flex justify-between items-start pb-3 border-b border-orange-400/40">
                      <div>
                        <div className="flex items-center text-orange-100 text-sm">
                          <Heart size={14} className="mr-1" /> Travel Medical
                        </div>
                        <div className="text-xs text-orange-200 mt-1">
                          {includeTravel ? `Up to $5M · ${coverage}` : 'Not included'}
                        </div>
                      </div>
                      <div className="font-bold whitespace-nowrap">{formatMoney(calculation.travel)}</div>
                    </div>

                    <div className="flex justify-between items-start pb-3 border-b border-orange-400/40">
                      <div>
                        <div className="flex items-center text-orange-100 text-sm">
                          <Shield size={14} className="mr-1" /> AD&amp;D
                        </div>
                        <div className="text-xs text-orange-200 mt-1">
                          {adndAmount === 0 ? 'Not included' : `${formatLumpSum(adndAmount)} · ${coverage}`}
                        </div>
                      </div>
                      <div className="font-bold whitespace-nowrap">{formatMoney(calculation.adnd)}</div>
                    </div>
                  </div>

                  <div className="bg-white/15 backdrop-blur p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-orange-100 text-sm">Monthly Premium</span>
                      <span className="text-3xl font-bold">{formatMoney(calculation.monthlyTotal)}</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-2 border-t border-white/20">
                      <span className="text-orange-100 text-sm">Annual Premium</span>
                      <span className="text-xl font-bold">{formatMoney(calculation.annualTotal)}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="tel:+14313382078"
                      className="block bg-white text-orange-700 px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors font-bold btn-3d text-center"
                    >
                      <Phone size={18} className="inline mr-2" />
                      Call (431) 338-2078
                    </a>
                    <Link
                      to="/quote"
                      className="block bg-orange-900 text-white px-6 py-3 rounded-lg hover:bg-orange-950 transition-colors font-semibold btn-3d text-center"
                    >
                      Request Formal Quote
                    </Link>
                  </div>

                  <p className="text-[11px] text-orange-200 mt-4 leading-relaxed">
                    Estimates use 2026 EDGE Class A — Injury rates. Actual premiums depend on age, occupation class,
                    underwriting and applicable taxes. Final quote is provided by The Edge Benefits / Co-operators / Chubb / Beneva.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-7xl mx-auto mt-8 bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Truck size={18} className="mr-2 text-orange-600" /> About these rates
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rates shown are <strong>Class A — Loss of Income (Injury)</strong> monthly premiums from the EDGE 2026 rate guide
                (page 12). Class A is the standard rating for most professional drivers; certain occupations may be rated
                differently (Class AA, B, BB or Executive). Travel Medical Emergency monthly rates: Single $14.15, Family $24.78.
                AD&amp;D is guaranteed-issue for ages 18–64 with coverage to age 70. This calculator is for illustration only —
                please refer to the policy booklet for full terms, exclusions and limitations.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default TruckerInsuranceCalculator;