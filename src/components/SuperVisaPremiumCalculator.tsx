import React, { useMemo, useState } from 'react';
import { Calculator } from 'lucide-react';

type PlanTier = 'STANDARD' | 'ENHANCED';
type PlanType = 'A' | 'B';
type PayMode = 'annual' | 'monthly';

const AGE_BANDS = [
  '0-25', '26-35', '36-40', '41-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84',
] as const;
type AgeBand = typeof AGE_BANDS[number];

const DEDUCTIBLES = [0, 100, 250, 500, 1000] as const;
type Deductible = typeof DEDUCTIBLES[number];

// [Plan A, Plan B] per deductible column
type Row = Record<Deductible, [number, number]>;

const STANDARD: Record<AgeBand, Row> = {
  '0-25':  { 0:[1157.05,1124.20], 100:[1099.19,1067.99], 250:[1041.34,1011.78], 500:[983.49,955.57], 1000:[925.64,899.36] },
  '26-35': { 0:[1248.30,1157.05], 100:[1185.88,1099.19], 250:[1123.47,1047.34], 500:[1061.05,983.49], 1000:[998.64,925.64] },
  '36-40': { 0:[1273.85,1175.30], 100:[1210.15,1116.53], 250:[1146.46,1057.77], 500:[1082.77,999.01], 1000:[1019.08,940.24] },
  '41-54': { 0:[1441.75,1266.55], 100:[1369.66,1203.22], 250:[1297.57,1139.89], 500:[1225.48,1076.56], 1000:[1153.40,1013.24] },
  '55-59': { 0:[1616.95,1361.45], 100:[1536.10,1293.37], 250:[1455.25,1225.31], 500:[1374.47,1157.23], 1000:[1293.56,1089.16] },
  '60-64': { 0:[1660.75,1372.40], 100:[1577.71,1303.78], 250:[1494.67,1235.16], 500:[1411.63,1166.54], 1000:[1328.60,1097.92] },
  '65-69': { 0:[2102.40,1660.75], 100:[1997.28,1577.71], 250:[1892.16,1494.67], 500:[1787.04,1411.63], 1000:[1681.92,1328.60] },
  '70-74': { 0:[3463.85,2635.30], 100:[3290.65,2503.53], 250:[3117.46,2371.77], 500:[2944.27,2240.00], 1000:[2771.08,2108.24] },
  '75-79': { 0:[4098.95,2993.00], 100:[3894.00,2843.35], 250:[3689.05,2693.70], 500:[3484.10,2544.05], 1000:[3279.16,2394.40] },
  '80-84': { 0:[6726.95,4577.10], 100:[6390.60,4348.24], 250:[6054.25,4119.39], 500:[5717.91,3890.53], 1000:[5381.56,3661.68] },
};

const ENHANCED: Record<AgeBand, Row> = {
  '0-25':  { 0:[1314.00,1273.85], 100:[1248.30,1210.16], 250:[1182.00,1146.47], 500:[1116.90,1082.77], 1000:[1051.20,1019.08] },
  '26-35': { 0:[1416.20,1314.96], 100:[1345.39,1248.30], 250:[1274.58,1182.60], 500:[1203.77,1116.90], 1000:[1132.96,1051.20] },
  '36-40': { 0:[1445.40,1332.25], 100:[1373.13,1265.64], 250:[1300.86,1199.03], 500:[1228.59,1132.41], 1000:[1156.32,1065.80] },
  '41-54': { 0:[1638.85,1441.75], 100:[1556.91,1369.66], 250:[1474.97,1297.58], 500:[1393.02,1225.49], 1000:[1311.08,1153.40] },
  '55-59': { 0:[1835.95,1547.60], 100:[1744.15,1470.22], 250:[1652.36,1392.84], 500:[1560.56,1315.46], 1000:[1468.76,1238.08] },
  '60-64': { 0:[1825.00,1558.55], 100:[1733.75,1480.62], 250:[1642.50,1402.69], 500:[1551.25,1324.77], 1000:[1460.00,1246.84] },
  '65-69': { 0:[2281.25,1890.70], 100:[2167.19,1796.16], 250:[2053.13,1701.63], 500:[1939.06,1607.09], 1000:[1825.00,1512.56] },
  '70-74': { 0:[3777.75,2993.00], 100:[3588.86,2843.35], 250:[3399.97,2693.70], 500:[3211.09,2544.05], 1000:[3022.20,2394.40] },
  '75-79': { 0:[4504.10,3405.45], 100:[4278.90,3235.18], 250:[4053.69,3064.90], 500:[3828.49,2894.63], 1000:[3603.28,2724.36] },
  '80-84': { 0:[7387.60,5197.60], 100:[7018.22,4937.72], 250:[6648.84,4677.84], 500:[6279.46,4417.96], 1000:[5910.08,4158.08] },
};

const MONTHLY_FEE = 120;
const fmt = (n: number) => n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });

const SuperVisaPremiumCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(45);
  const [tier, setTier] = useState<PlanTier>('STANDARD');
  const [plan, setPlan] = useState<PlanType>('B');
  const [deductible, setDeductible] = useState<Deductible>(0);
  const [payMode, setPayMode] = useState<PayMode>('annual');

  const band: AgeBand | null = useMemo(() => {
    if (age < 0) return null;
    if (age <= 25) return '0-25';
    if (age <= 35) return '26-35';
    if (age <= 40) return '36-40';
    if (age <= 54) return '41-54';
    if (age <= 59) return '55-59';
    if (age <= 64) return '60-64';
    if (age <= 69) return '65-69';
    if (age <= 74) return '70-74';
    if (age <= 79) return '75-79';
    if (age <= 84) return '80-84';
    return null;
  }, [age]);

  const annualPremium = useMemo(() => {
    if (!band) return 0;
    const table = tier === 'STANDARD' ? STANDARD : ENHANCED;
    const [a, b] = table[band][deductible];
    return plan === 'A' ? a : b;
  }, [band, tier, plan, deductible]);

  const fee = payMode === 'monthly' ? MONTHLY_FEE : 0;
  const monthly = annualPremium / 12;
  const totalPayable = annualPremium + fee;
  // Monthly: upfront = last 2 monthly instalments + $120 policy fee
  const upfront = payMode === 'monthly' ? monthly * 2 + MONTHLY_FEE : annualPremium;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Calculator className="w-10 h-10 text-blue-700" />
              <h2 className="text-4xl font-bold text-gray-900">Super Visa Premium Calculator</h2>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-gray-600">Rates by</span>
              <img
                src="/partner-logos/insure-canada.png"
                alt="Insure Canada"
                className="h-10 w-auto object-contain"
              />
            </div>
            {band && (
              <div className="mt-6 inline-flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-sm uppercase tracking-wide text-blue-100">Age Group</span>
                <span className="text-2xl font-extrabold">{band}</span>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-white p-8 rounded-2xl card-3d border space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age (0–84)</label>
                <input
                  type="number"
                  min={0}
                  max={84}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-11 rounded-md border border-input px-3 text-base"
                />
                {band && <p className="text-xs text-gray-500 mt-1">Falls in age group: <strong>{band}</strong></p>}
                {!band && <p className="text-xs text-red-600 mt-1">Age must be between 0 and 84.</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Plan Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['STANDARD', 'ENHANCED'] as PlanTier[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`h-11 rounded-md border font-semibold transition ${
                        tier === t ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {t.charAt(0) + t.slice(1).toLowerCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pre-existing Conditions</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPlan('A')}
                    className={`h-11 rounded-md border font-semibold transition text-sm ${
                      plan === 'A' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Plan A — With Pre-existing
                  </button>
                  <button
                    onClick={() => setPlan('B')}
                    className={`h-11 rounded-md border font-semibold transition text-sm ${
                      plan === 'B' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Plan B — No Pre-existing
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Deductible (CAD)</label>
                <div className="grid grid-cols-5 gap-2">
                  {DEDUCTIBLES.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDeductible(d)}
                      className={`h-11 rounded-md border font-semibold transition ${
                        deductible === d ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      ${d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPayMode('annual')}
                    className={`h-11 rounded-md border font-semibold transition ${
                      payMode === 'annual' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Annual (No Fee)
                  </button>
                  <button
                    onClick={() => setPayMode('monthly')}
                    className={`h-11 rounded-md border font-semibold transition ${
                      payMode === 'monthly' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Monthly (+$120 Fee)
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-2xl card-3d">
              <h3 className="text-2xl font-bold mb-6">Your Premium</h3>
              {band ? (
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-sm text-blue-100">Annual Premium</div>
                    <div className="text-3xl font-bold">{fmt(annualPremium)}</div>
                  </div>
                  {payMode === 'monthly' && (
                    <div className="bg-white/10 rounded-xl p-4">
                      <div className="text-sm text-blue-100">Policy Issue Fee (Monthly)</div>
                      <div className="text-2xl font-bold">{fmt(MONTHLY_FEE)}</div>
                    </div>
                  )}
                  {payMode === 'monthly' ? (
                    <>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-sm text-blue-100">Monthly Instalment</div>
                        <div className="text-2xl font-bold">{fmt(monthly)} / month</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-4 border border-white/30">
                        <div className="text-sm text-blue-100">Total Payable (Annual + $120 Fee)</div>
                        <div className="text-3xl font-bold">{fmt(totalPayable)}</div>
                      </div>
                      <div className="bg-orange-500/90 rounded-xl p-4">
                        <div className="text-sm text-white/90">Charged Upfront (Last 2 Months + $120 Fee)</div>
                        <div className="text-2xl font-bold">{fmt(upfront)}</div>
                        <div className="text-xs text-white/80 mt-1">
                          {fmt(monthly)} × 2 + {fmt(MONTHLY_FEE)} policy fee
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="bg-orange-500/90 rounded-xl p-4">
                      <div className="text-sm text-white/90">Charged Upfront (Full Annual — No Fee)</div>
                      <div className="text-2xl font-bold">{fmt(upfront)}</div>
                    </div>
                  )}
                  <p className="text-xs text-blue-100 pt-2">
                    Rates shown are for <strong>Insure Canada</strong> Visitors & Super Visa Annual Plan. Medical declaration required above age 70. Stable pre-existing conditions can be covered up to age 84.
                  </p>
                </div>
              ) : (
                <p className="text-blue-100">Enter a valid age (0–84) to see your premium.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperVisaPremiumCalculator;