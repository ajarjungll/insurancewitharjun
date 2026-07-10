import React, { useMemo, useState } from 'react';
import { Calculator } from 'lucide-react';

type PlanTier = 'STANDARD' | 'ENHANCED';
type PayMode = 'annual' | 'monthly';
type Coverage = 100000 | 150000;
type CommonDed = 0 | 100 | 500 | 1000;

// -------- INSURE CANADA (fixed annual schedule) --------
const IC_AGE_BANDS = ['0-25','26-35','36-40','41-54','55-59','60-64','65-69','70-74','75-79','80-84'] as const;
type ICBand = typeof IC_AGE_BANDS[number];
type ICDed = 0 | 100 | 250 | 500 | 1000;
type ICRow = Record<ICDed, [number, number]>; // [Plan A (with pre-existing), Plan B (no pre-existing)]

const IC_STANDARD: Record<ICBand, ICRow> = {
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

const IC_ENHANCED: Record<ICBand, ICRow> = {
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

// -------- RIMI (Daily rate × 365; Plan 1 = No Pre-existing, Plan 2 = With Pre-existing) --------
const RIMI_AGE_BANDS = ['0-25','26-35','36-40','41-54','55-59','60-64','65-69','70-74','75-79','80-84','85-89'] as const;
type RimiBand = typeof RIMI_AGE_BANDS[number];
type RimiCovRow = { 100000: [number, number | null]; 150000: [number, number | null] };

const RIMI_STANDARD: Record<RimiBand, RimiCovRow> = {
  '0-25':  { 100000:[3.00,3.09], 150000:[3.81,3.92] },
  '26-35': { 100000:[3.14,3.34], 150000:[3.99,4.24] },
  '36-40': { 100000:[3.09,3.40], 150000:[3.92,4.32] },
  '41-54': { 100000:[3.39,3.85], 150000:[4.31,4.89] },
  '55-59': { 100000:[3.67,4.32], 150000:[4.66,5.49] },
  '60-64': { 100000:[3.64,4.44], 150000:[4.62,5.64] },
  '65-69': { 100000:[4.44,5.62], 150000:[5.64,7.14] },
  '70-74': { 100000:[7.04,9.26], 150000:[8.94,11.76] },
  '75-79': { 100000:[8.00,10.96], 150000:[10.16,13.92] },
  '80-84': { 100000:[12.23,17.98], 150000:[15.53,22.83] },
  '85-89': { 100000:[17.12,null], 150000:[21.74,null] },
};

const RIMI_ENHANCED: Record<RimiBand, RimiCovRow> = {
  '0-25':  { 100000:[3.40,3.51], 150000:[4.52,4.66] },
  '26-35': { 100000:[3.56,3.79], 150000:[4.73,5.03] },
  '36-40': { 100000:[3.51,3.86], 150000:[4.66,5.12] },
  '41-54': { 100000:[3.85,4.38], 150000:[5.12,5.82] },
  '55-59': { 100000:[4.17,4.91], 150000:[5.54,6.52] },
  '60-64': { 100000:[4.14,4.88], 150000:[5.51,6.72] },
  '65-69': { 100000:[5.05,6.10], 150000:[6.71,8.50] },
  '70-74': { 100000:[8.00,10.10], 150000:[10.63,13.99] },
  '75-79': { 100000:[9.10,12.04], 150000:[12.10,16.57] },
  '80-84': { 100000:[13.89,19.75], 150000:[18.48,27.17] },
  '85-89': { 100000:[18.06,null], 150000:[24.05,null] },
};

// Deductible discount for ages 0-79 (RIMI)
const RIMI_DED_DISCOUNT_UNDER80: Record<CommonDed, number | null> = { 0: 0, 100: 0.05, 500: 0.15, 1000: 0.20 };
// Deductible discount for ages 80+ (RIMI): $0 & $100 not applicable, $500 = base, $1000 = 15% off
const RIMI_DED_DISCOUNT_80PLUS: Record<CommonDed, number | null> = { 0: null, 100: null, 500: 0, 1000: 0.15 };

// -------- GMS (Annual, single plan) --------
const GMS_AGE_BANDS = ['Under 18','18-34','35-54','55-59','60-64','65-69','70-74','75-79'] as const;
type GmsBand = typeof GMS_AGE_BANDS[number];
type GmsCovRow = { 100000: Record<CommonDed, number>; 150000: Record<CommonDed, number> };

const GMS_RATES: Record<GmsBand, GmsCovRow> = {
  'Under 18': {
    100000: { 0: 1186.25, 100: 1098.65, 500:  908.85, 1000:  872.35 },
    150000: { 0: 1350.50, 100: 1215.45, 500: 1149.75, 1000: 1080.40 },
  },
  '18-34': {
    100000: { 0: 1295.75, 100: 1160.70, 500: 1014.70, 1000:  952.65 },
    150000: { 0: 1507.45, 100: 1376.05, 500: 1295.75, 1000: 1211.80 },
  },
  '35-54': {
    100000: { 0: 1595.05, 100: 1467.30, 500: 1189.90, 1000: 1219.10 },
    150000: { 0: 2003.85, 100: 1795.80, 500: 1460.00, 1000: 1372.40 },
  },
  '55-59': {
    100000: { 0: 1602.35, 100: 1460.00, 500: 1299.40, 1000: 1222.75 },
    150000: { 0: 1989.25, 100: 1806.75, 500: 1452.70, 1000: 1372.40 },
  },
  '60-64': {
    100000: { 0: 1799.45, 100: 1649.80, 500: 1460.00, 1000: 1361.45 },
    150000: { 0: 2332.35, 100: 2087.80, 500: 1708.20, 1000: 1606.00 },
  },
  '65-69': {
    100000: { 0: 2405.35, 100: 2332.35, 500: 1825.00, 1000: 1711.85 },
    150000: { 0: 3350.70, 100: 3182.80, 500: 2277.60, 1000: 2146.20 },
  },
  '70-74': {
    100000: { 0: 4296.05, 100: 4000.40, 500: 3128.05, 1000: 2941.90 },
    150000: { 0: 5245.05, 100: 4657.40, 500: 4117.20, 1000: 3876.30 },
  },
  '75-79': {
    100000: { 0: 5533.40, 100: 5069.85, 500: 4401.90, 1000: 4044.20 },
    150000: { 0: 6726.95, 100: 6029.80, 500: 5106.35, 1000: 4814.35 },
  },
};

const COVERAGES: Coverage[] = [100000, 150000];
const COMMON_DEDUCTIBLES: CommonDed[] = [0, 100, 500, 1000];
const MONTHLY_FEE = 120;
const fmt = (n: number) => n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
const fmtCov = (n: number) => `$${(n / 1000).toFixed(0)},000`;

function icBand(age: number): ICBand | null {
  if (age < 0 || age > 84) return null;
  if (age <= 25) return '0-25';
  if (age <= 35) return '26-35';
  if (age <= 40) return '36-40';
  if (age <= 54) return '41-54';
  if (age <= 59) return '55-59';
  if (age <= 64) return '60-64';
  if (age <= 69) return '65-69';
  if (age <= 74) return '70-74';
  if (age <= 79) return '75-79';
  return '80-84';
}
function rimiBand(age: number): RimiBand | null {
  if (age < 0 || age > 89) return null;
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
  return '85-89';
}
function gmsBand(age: number): GmsBand | null {
  if (age < 0) return null;
  if (age < 18) return 'Under 18';
  if (age <= 34) return '18-34';
  if (age <= 54) return '35-54';
  if (age <= 59) return '55-59';
  if (age <= 64) return '60-64';
  if (age <= 69) return '65-69';
  if (age <= 74) return '70-74';
  if (age <= 79) return '75-79';
  return null;
}

const SuperVisaPremiumCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(45);
  const [coverage, setCoverage] = useState<Coverage>(100000);
  const [tier, setTier] = useState<PlanTier>('STANDARD');
  const [preExisting, setPreExisting] = useState<boolean>(false);
  const [deductible, setDeductible] = useState<CommonDed>(0);
  const [payMode, setPayMode] = useState<PayMode>('annual');

  const validAge = age >= 0 && age <= 89;
  const ib = icBand(age);
  const rb = rimiBand(age);
  const gb = gmsBand(age);

  const icPremium = useMemo<number | null>(() => {
    if (!ib) return null;
    const icDed = deductible as ICDed;
    const table = tier === 'STANDARD' ? IC_STANDARD : IC_ENHANCED;
    const [a, b] = table[ib][icDed];
    return preExisting ? a : b;
  }, [ib, tier, preExisting, deductible]);

  const rimiPremium = useMemo<number | null>(() => {
    if (!rb) return null;
    const table = tier === 'STANDARD' ? RIMI_STANDARD : RIMI_ENHANCED;
    const row = table[rb][coverage];
    const dailyRate = preExisting ? row[1] : row[0];
    if (dailyRate == null) return null;
    const is80Plus = age >= 80;
    const discount = is80Plus ? RIMI_DED_DISCOUNT_80PLUS[deductible] : RIMI_DED_DISCOUNT_UNDER80[deductible];
    if (discount == null) return null;
    return dailyRate * (1 - discount) * 365;
  }, [rb, tier, preExisting, coverage, deductible, age]);

  const gmsPremium = useMemo<number | null>(() => {
    if (!gb) return null;
    return GMS_RATES[gb][coverage][deductible];
  }, [gb, coverage, deductible]);

  const insurers: Array<{
    key: string; name: string; logo: string; band: string | null; annual: number | null; note?: string;
  }> = [
    { key: 'insure-canada', name: 'Insure Canada', logo: '/partner-logos/insure-canada.png', band: ib, annual: icPremium, note: 'Uses fixed annual schedule (coverage selection not applied).' },
    { key: 'rimi', name: 'RIMI', logo: '/partner-logos/rimi.png', band: rb, annual: rimiPremium },
    { key: 'gms', name: 'GMS', logo: '/partner-logos/gms.jpg', band: gb, annual: gmsPremium, note: gb ? undefined : 'GMS does not cover ages 80+.' },
  ];

  const monthlyFee = payMode === 'monthly' ? MONTHLY_FEE : 0;
  const computeBreakdown = (annual: number) => {
    const monthly = annual / 12;
    const totalPayable = annual + monthlyFee;
    const upfront = payMode === 'monthly' ? monthly * 2 + MONTHLY_FEE : annual;
    return { monthly, totalPayable, upfront };
  };

  const availableAnnuals = insurers
    .map(i => i.annual)
    .filter((v): v is number => v != null);
  const minAnnual = availableAnnuals.length ? Math.min(...availableAnnuals) : null;

  return (
    <section id="calculator" className="py-16 bg-gradient-to-br from-blue-50 to-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <Calculator className="w-10 h-10 text-blue-700" />
              <h2 className="text-4xl font-bold text-gray-900">Super Visa Insurance — Compare 3 Insurers</h2>
            </div>
            <p className="text-gray-600 mb-4">Live comparison of Insure Canada, RIMI, and GMS annual premiums.</p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <img src="/partner-logos/insure-canada.png" alt="Insure Canada" className="h-10 w-auto object-contain" />
              <img src="/partner-logos/rimi.png" alt="RIMI" className="h-10 w-auto object-contain" />
              <img src="/partner-logos/gms.jpg" alt="GMS" className="h-10 w-auto object-contain" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Inputs */}
            <div className="bg-white p-8 rounded-2xl card-3d border space-y-6 lg:col-span-1">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age (0–89)</label>
                <input
                  type="number"
                  min={0}
                  max={89}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-11 rounded-md border border-input px-3 text-base"
                />
                {!validAge && <p className="text-xs text-red-600 mt-1">Age must be between 0 and 89.</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Coverage Amount</label>
                <div className="grid grid-cols-2 gap-2">
                  {COVERAGES.map((c) => (
                    <button key={c} onClick={() => setCoverage(c)}
                      className={`h-11 rounded-md border font-semibold transition ${
                        coverage === c ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}>
                      {fmtCov(c)}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">Super Visa requires $100,000 minimum coverage.</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Plan Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['STANDARD', 'ENHANCED'] as PlanTier[]).map((t) => (
                    <button key={t} onClick={() => setTier(t)}
                      className={`h-11 rounded-md border font-semibold transition ${
                        tier === t ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}>
                      {t.charAt(0) + t.slice(1).toLowerCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pre-existing Conditions</label>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setPreExisting(true)}
                    className={`h-11 rounded-md border font-semibold transition text-sm ${
                      preExisting ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}>
                    With Pre-existing
                  </button>
                  <button onClick={() => setPreExisting(false)}
                    className={`h-11 rounded-md border font-semibold transition text-sm ${
                      !preExisting ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}>
                    No Pre-existing
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Deductible (CAD)</label>
                <div className="grid grid-cols-4 gap-2">
                  {COMMON_DEDUCTIBLES.map((d) => (
                    <button key={d} onClick={() => setDeductible(d)}
                      className={`h-11 rounded-md border font-semibold transition ${
                        deductible === d ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}>
                      ${d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Payment Mode</label>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => setPayMode('annual')}
                    className={`h-11 rounded-md border font-semibold transition ${
                      payMode === 'annual' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}>
                    Annual (No Fee)
                  </button>
                  <button onClick={() => setPayMode('monthly')}
                    className={`h-11 rounded-md border font-semibold transition ${
                      payMode === 'monthly' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}>
                    Monthly (+$120 Fee)
                  </button>
                </div>
              </div>
            </div>

            {/* Results — 3 insurer cards */}
            <div className="lg:col-span-2 space-y-4">
              {validAge ? (
                <>
                  {minAnnual != null && (
                    <div className="bg-green-600 text-white rounded-xl px-4 py-3 text-sm font-semibold shadow-md">
                      Best Price:{' '}
                      <span className="font-extrabold">
                        {insurers.find(i => i.annual === minAnnual)?.name}
                      </span>{' '}
                      at {fmt(minAnnual)} / year
                    </div>
                  )}

                  <div className="grid md:grid-cols-3 gap-4">
                    {insurers.map((ins) => {
                      const isCheapest = ins.annual != null && ins.annual === minAnnual;
                      return (
                        <div
                          key={ins.key}
                          className={`rounded-2xl p-5 card-3d border-2 flex flex-col ${
                            isCheapest ? 'border-green-500 bg-gradient-to-br from-white to-green-50' : 'border-gray-200 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <img src={ins.logo} alt={ins.name} className="h-10 w-auto object-contain" />
                            {isCheapest && (
                              <span className="text-xs font-bold bg-green-500 text-white px-2 py-1 rounded-full">
                                BEST
                              </span>
                            )}
                          </div>
                          <div className="text-lg font-bold text-gray-900">{ins.name}</div>
                          <div className="text-xs text-gray-500 mb-3">
                            Age band: <strong>{ins.band ?? '—'}</strong>
                          </div>
                          {ins.annual == null ? (
                            <div className="mt-2 bg-gray-100 rounded-lg p-3 text-sm text-gray-600">
                              Not available for this selection.
                              {ins.note && <div className="text-xs mt-1">{ins.note}</div>}
                            </div>
                          ) : (() => {
                            const bd = computeBreakdown(ins.annual);
                            return (
                              <div className="space-y-2">
                                <div className="bg-blue-50 rounded-lg p-3">
                                  <div className="text-xs text-blue-800">Annual Premium</div>
                                  <div className="text-2xl font-extrabold text-blue-900">{fmt(ins.annual)}</div>
                                </div>
                                {payMode === 'monthly' ? (
                                  <>
                                    <div className="bg-gray-50 rounded-lg p-3">
                                      <div className="text-xs text-gray-600">Monthly Instalment</div>
                                      <div className="text-lg font-bold text-gray-900">{fmt(bd.monthly)} / mo</div>
                                    </div>
                                    <div className="bg-orange-100 rounded-lg p-3">
                                      <div className="text-xs text-orange-800">Upfront (2 mo + $120 fee)</div>
                                      <div className="text-lg font-bold text-orange-900">{fmt(bd.upfront)}</div>
                                    </div>
                                    <div className="text-xs text-gray-500">Total payable: {fmt(bd.totalPayable)}</div>
                                  </>
                                ) : (
                                  <div className="bg-orange-100 rounded-lg p-3">
                                    <div className="text-xs text-orange-800">Charged Upfront</div>
                                    <div className="text-lg font-bold text-orange-900">{fmt(bd.upfront)}</div>
                                  </div>
                                )}
                                <div className="text-xs text-gray-500 mt-1">Coverage: {fmtCov(coverage)}</div>
                                {ins.note && <div className="text-[11px] text-gray-500 italic">{ins.note}</div>}
                              </div>
                            );
                          })()}
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-xs text-gray-600 pt-2">
                    Rates shown are illustrative and based on published rate sheets from each carrier. Medical
                    declaration may be required above age 70. Insure Canada uses a fixed annual schedule
                    (coverage selector applies to RIMI &amp; GMS only). GMS does not cover ages 80+. Final
                    premium is confirmed at issuance.
                  </p>
                </>
              ) : (
                <div className="bg-white rounded-2xl p-8 border">
                  <p className="text-gray-600">Enter a valid age (0–89) to compare premiums across all three insurers.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperVisaPremiumCalculator;