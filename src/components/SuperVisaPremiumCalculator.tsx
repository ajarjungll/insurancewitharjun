import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { destinationQuote, destinationDeductibles, type DestinationDeductible } from '@/data/destinationCanadaRates';
import destinationRateSheet from '@/assets/destination-canada-rates.pdf.asset.json';

type PlanTier = 'STANDARD' | 'ENHANCED';
type PayMode = 'annual' | 'monthly';
type Coverage = 25000 | 50000 | 100000 | 150000 | 200000 | 250000 | 300000 | 500000 | 1000000 | 2000000;
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

const COVERAGES: Coverage[] = [25000, 50000, 100000, 150000, 200000, 250000, 300000, 500000, 1000000, 2000000];
const GMS_MAX_COVERAGE = 150000;
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

type QuotePlan = { name: string; annual: number | null };
type CompanyQuote = {
  key: string; name: string; logo: string; band: string | null;
  plans: QuotePlan[]; note?: string; details: string[];
  sourceUrl?: string;
  monthlyQuoteOnly?: boolean;
};

const SuperVisaPremiumCalculator: React.FC = () => {
  const [ageInput, setAgeInput] = useState('45');
  const [coverage, setCoverage] = useState<Coverage>(100000);
  const [preExisting, setPreExisting] = useState(false);
  const [icDeductible, setIcDeductible] = useState<ICDed>(0);
  const [rimiDeductible, setRimiDeductible] = useState<CommonDed>(0);
  const [gmsDeductible, setGmsDeductible] = useState<CommonDed>(0);
  const [payMode, setPayMode] = useState<PayMode>('annual');
  const [purpose, setPurpose] = useState<'supervisa' | 'visitor'>('supervisa');
  const [destinationDeductible, setDestinationDeductible] = useState<DestinationDeductible>(0);
  const age = Number(ageInput);
  const validAge = ageInput.trim() !== '' && Number.isInteger(age) && age >= 0 && age <= 120;
  const ib = validAge ? icBand(age) : null;
  const rb = validAge ? rimiBand(age) : null;
  const gb = validAge ? gmsBand(age) : null;
  const quotedCoverage = coverage === 100000 || coverage === 150000 ? coverage : null;
  const dc = destinationQuote(validAge ? age : -1, coverage, preExisting ? '1' : '2', destinationDeductible);

  const icPrice = (tier: PlanTier) => {
    if (!ib || coverage < 100000) return null;
    const row = (tier === 'STANDARD' ? IC_STANDARD : IC_ENHANCED)[ib][icDeductible];
    return row[preExisting ? 0 : 1];
  };
  const rimiPrice = (tier: PlanTier) => {
    if (!rb || !quotedCoverage) return null;
    const row = (tier === 'STANDARD' ? RIMI_STANDARD : RIMI_ENHANCED)[rb][quotedCoverage];
    const rate = row[preExisting ? 1 : 0];
    const discount = (age >= 80 ? RIMI_DED_DISCOUNT_80PLUS : RIMI_DED_DISCOUNT_UNDER80)[rimiDeductible];
    if (rate == null || discount == null) return null;
    return rate * (1 - discount) * 365;
  };
  const stability = age <= 69 ? '90 days' : '180 days';
  const mshDetails = [
    'Hospital room: Standard covers ward rate; Enhanced covers semi-private.',
    'Prescription benefit: Standard up to $500; Enhanced up to $1,000.',
    'Accidental dental: Standard up to $1,000; Enhanced up to $3,000.',
    'Repatriation: Standard up to $5,000; Enhanced up to $10,000.',
    preExisting ? `Plan 2: pre-existing conditions must be stable for ${stability}; medical declaration and eligibility rules apply.` : 'Plan 1: all pre-existing conditions are excluded.',
  ];
  const companies: CompanyQuote[] = [
    { key: 'insure-canada', name: 'Insure Canada', logo: '/partner-logos/insure-canada.png', band: ib,
      plans: [{ name: 'Standard', annual: icPrice('STANDARD') }, { name: 'Enhanced', annual: icPrice('ENHANCED') }],
      note: coverage < 100000 ? 'No rate for this visitor coverage in the available schedule.' : 'Fixed annual rate-sheet estimate. The selected coverage amount is not applied to this schedule; confirm your coverage and price with Arjun.', details: mshDetails },
    { key: 'rimi', name: 'RIMI', logo: '/partner-logos/rimi.png', band: rb,
      plans: [{ name: 'Standard', annual: rimiPrice('STANDARD') }, { name: 'Enhanced', annual: rimiPrice('ENHANCED') }],
      note: !rb ? 'Rates available through age 89.' : !quotedCoverage ? 'Request a quote for coverage above $150,000.' : age >= 80 && deductible < 500 ? 'A $500 or $1,000 deductible is required at age 80+.' : age >= 85 && preExisting ? 'Pre-existing condition coverage is not available at age 85+.' : undefined,
      details: mshDetails },
    { key: 'gms', name: 'GMS', logo: '/partner-logos/gms.jpg', band: gb,
      plans: [{ name: 'Visitors to Canada', annual: gb && quotedCoverage ? GMS_RATES[gb][quotedCoverage][deductible] : null }],
      note: !gb ? 'Available for ages under 80.' : coverage > GMS_MAX_COVERAGE ? 'Maximum coverage is $150,000.' : undefined,
      details: ['One plan — no Standard / Enhanced tiers.', 'Pre-existing conditions must be stable for 180 days before coverage begins, subject to policy eligibility and exclusions.', 'Coverage options in this comparison: $100,000 or $150,000.', 'Deductible and benefit limits are subject to the GMS policy wording.'] },
    { key: 'destination-canada', name: 'Destination Canada', logo: '/partner-logos/destination-canada.png', band: dc.band,
      plans: [{ name: preExisting ? 'Option 1 — stable pre-existing conditions' : 'Option 2 — no pre-existing conditions', annual: dc.annual }],
      monthlyQuoteOnly: true, sourceUrl: destinationRateSheet.url,
      note: preExisting && age >= 80 ? 'Option 1 is available only through age 79.' : age >= 86 ? 'Age 86+: $25,000 visitor coverage only, with a mandatory $500 deductible. Not eligible for Super Visa coverage.' : age >= 80 ? 'Ages 80–85: Option 2 offers $25,000 or $50,000 visitor coverage only. No Super Visa rate.' : coverage > 300000 ? 'The supplied sheet has rates up to $300,000 only.' : undefined,
      details: [
        'Rate schedule effective July 1, 2026. Annual premium = daily rate × 365, less the deductible discount; minimum premium $25.',
        preExisting ? `Option 1 covers eligible pre-existing conditions stable immediately before the effective date: 90 days at ages 0–59, 120 days at ages 60–69, 180 days at ages 70–79.${dc.stability ? ` Your required stability: ${dc.stability} days.` : ''}` : 'Option 2 excludes all pre-existing medical conditions, regardless of stability.',
        'Optional deductibles, ages 0–85: $250 (10% off), $500 (15%), $1,000 (20%), $2,500 (30%), $5,000 (35%), $10,000 (40%). No $100 deductible.',
        'Monthly plan requires at least 180 days and $50,000 coverage. Installments, fees and upfront payment must be confirmed with the broker.',
        'Sickness waiting period: 48 hours if bought within 30 days after departure; 7 days if bought 30 days or more after departure. Confirm the exact 30-day boundary with the broker.',
        'Waiting period waived when purchased before departure or before existing health coverage expires with no gap.',
      ] },
  ];
  const controlClass = 'h-12 w-full rounded-md border border-input bg-background px-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring';

  return (
    <section id="calculator" className="scroll-mt-24 bg-quote-tint/70 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-start gap-4">
            <ShieldCheck className="mt-1 h-10 w-10 shrink-0 text-quote-brand drop-shadow-lg" aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Visitors & Super Visa Insurance Calculator</h2>
              <p className="mt-2 text-muted-foreground">Compare company plans · 365-day coverage · Prices in CAD</p>
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Insurance purpose">
            {(['supervisa', 'visitor'] as const).map(value => <Button key={value} variant={purpose === value ? 'default' : 'quote'} aria-pressed={purpose === value} onClick={() => { setPurpose(value); if (value === 'supervisa' && coverage < 100000) setCoverage(100000); }}>{value === 'supervisa' ? 'Super Visa' : 'Visitors to Canada'}</Button>)}
          </div>
          <div className="grid gap-5 border-y border-border py-6 sm:grid-cols-3">
            <div>
              <label htmlFor="supervisa-age" className="mb-2 block text-sm font-semibold">Traveller’s age</label>
              <Input id="supervisa-age" type="number" min={0} max={120} step={1} value={ageInput}
                onChange={e => setAgeInput(e.target.value)} className={controlClass} aria-invalid={!validAge} aria-describedby={!validAge ? 'supervisa-age-error' : undefined} />
              {!validAge && <p id="supervisa-age-error" className="mt-2 text-sm text-destructive">Enter a whole-number age from 0 to 120.</p>}
            </div>
            <div>
              <label htmlFor="supervisa-coverage" className="mb-2 block text-sm font-semibold">Coverage amount</label>
              <select id="supervisa-coverage" value={coverage} onChange={e => setCoverage(Number(e.target.value) as Coverage)} className={controlClass}>
                {COVERAGES.filter(c => purpose === 'visitor' || c >= 100000).map(c => <option key={c} value={c}>{fmtCov(c)}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="supervisa-deductible" className="mb-2 block text-sm font-semibold">Deductible</label>
              <select id="supervisa-deductible" value={deductible} onChange={e => setDeductible(Number(e.target.value) as CommonDed)} className={controlClass}>
                {COMMON_DEDUCTIBLES.map(d => <option key={d} value={d}>{fmt(d)}{d === 0 ? ' — no deductible' : ''}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-3 sm:col-span-3">
              <Switch id="supervisa-preexisting" checked={preExisting} onCheckedChange={setPreExisting} />
              <label htmlFor="supervisa-preexisting" className="text-sm font-medium">Include stable pre-existing conditions</label>
            </div>
          </div>

          <div className="my-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Company plans & prices</h3>
              <p className="mt-1 text-sm text-muted-foreground">{preExisting ? 'With stable pre-existing conditions' : 'Without pre-existing conditions'} · GMS includes eligible stable conditions</p>
            </div>
            <div className="flex gap-2" role="group" aria-label="Payment frequency">
              {(['annual', 'monthly'] as PayMode[]).map(mode => <Button key={mode} variant={payMode === mode ? 'default' : 'quote'} aria-pressed={payMode === mode} onClick={() => setPayMode(mode)}>
                {mode === 'annual' ? 'Yearly' : 'Monthly'}
              </Button>)}
            </div>
          </div>

          {validAge ? <div className="grid items-stretch gap-5 xl:grid-cols-2" aria-live="polite">
            {companies.map(company => <article key={company.key} aria-label={`${company.name} plans`} className="quote-card flex min-w-0 flex-col rounded-lg border border-border bg-card p-5 sm:p-6">
              <div className="flex min-h-16 items-center justify-between gap-4">
                <img src={company.logo} alt={`${company.name} logo`} className="h-12 w-32 object-contain object-left drop-shadow-md" />
                <span className="text-right text-xs text-muted-foreground">Age group<br /><strong className="text-foreground">{company.band ?? 'Not eligible'}</strong></span>
              </div>
              <h4 className="mt-4 text-xl font-bold">{company.name}</h4>
              {company.key === 'destination-canada' && <div className="mt-4 space-y-3">
                <div><label htmlFor="destination-option" className="mb-1 block text-sm font-medium">Destination Canada plan</label>
                  <select id="destination-option" className={controlClass} value={preExisting ? '1' : '2'} onChange={e => setPreExisting(e.target.value === '1')}>
                    <option value="1">Option 1 — with stable pre-existing</option><option value="2">Option 2 — no pre-existing</option>
                  </select>
                </div>
                <div><label htmlFor="destination-deductible" className="mb-1 block text-sm font-medium">Destination Canada deductible</label>
                  <select id="destination-deductible" className={controlClass} value={dc.deductible} disabled={age >= 86} onChange={e => setDestinationDeductible(Number(e.target.value) as DestinationDeductible)}>
                    {(age >= 86 ? [500] : destinationDeductibles).map(d => <option key={d} value={d}>{fmt(d)}</option>)}
                  </select>
                  <p className="mt-2 text-xs text-muted-foreground">{age >= 86 ? 'Mandatory $500 deductible; no discount.' : `${Math.round(dc.discount * 100)}% deductible discount · Destination Canada only`}</p>
                </div>
              </div>}
              <div className="my-4 divide-y divide-border border-y border-border">
                {company.plans.map(plan => <div key={plan.name} className="py-4">
                  <div className="mb-2 text-sm font-semibold text-quote-brand">{plan.name}</div>
                  {plan.annual == null ? <p className="text-sm font-medium text-muted-foreground">No rate for this selection</p> : company.monthlyQuoteOnly && payMode === 'monthly' ? <div className="space-y-2"><p className="font-semibold text-quote-brand">{dc.monthlyEligible ? 'Contact Arjun for monthly terms' : 'Monthly plan unavailable below $50,000'}</p><p className="text-sm text-muted-foreground">Annual premium: {fmt(plan.annual)} · No monthly fee or installment amount is supplied in this rate sheet.</p></div> : <>
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <strong className="text-3xl text-foreground">{fmt(payMode === 'annual' ? plan.annual : plan.annual / 12)}</strong>
                      <span className="text-sm text-muted-foreground">/ {payMode === 'annual' ? 'year' : 'month'}</span>
                    </div>
                    {payMode === 'monthly' && <dl className="mt-3 space-y-1 text-sm">
                      <div className="flex flex-wrap justify-between gap-2"><dt className="text-muted-foreground">Upfront estimate</dt><dd className="font-semibold">{fmt(plan.annual / 12 * 2 + MONTHLY_FEE)}</dd></div>
                      <div className="flex flex-wrap justify-between gap-2"><dt className="text-muted-foreground">Total with fee</dt><dd>{fmt(plan.annual + MONTHLY_FEE)}</dd></div>
                    </dl>}
                  </>}
                </div>)}
              </div>
              {company.note && <p className="mb-4 text-xs leading-relaxed text-muted-foreground">{company.note}</p>}
              <details className="mb-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 py-2 text-sm font-semibold text-quote-brand">Plan details <ChevronDown className="h-4 w-4" /></summary>
                <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {company.details.map(line => <li key={line} className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-quote-success" /><span>{line}</span></li>)}
                </ul>
              </details>
              {company.sourceUrl ? <div className="mt-auto flex flex-col gap-2"><Button asChild variant="quote"><a href={company.sourceUrl} target="_blank" rel="noopener noreferrer">July 2026 rate sheet <ArrowRight /></a></Button><Button asChild variant="outline"><a href="tel:+14313382078">Ask Arjun for a quote</a></Button></div> : <Button asChild variant="quote" className="mt-auto w-full"><Link to={`/insurance-types/super-visa/${company.key}`}>Full policy & benefits <ArrowRight /></Link></Button>}
            </article>)}
          </div> : <p className="border-y border-border py-8 text-muted-foreground">Enter the traveller’s age to see company prices.</p>}

          <div className="mt-6 space-y-2 text-xs leading-relaxed text-muted-foreground">
            {payMode === 'monthly' && <p><strong className="text-foreground">Monthly estimates for Insure Canada, RIMI and GMS:</strong> upfront = last two months of premium + one $120 fee. Company payment availability and fees must be confirmed before purchase. Destination Canada requires a broker quote; this formula is not applied.</p>}
            <p>Rate-sheet estimates, not binding quotes. Benefits, eligibility and stability requirements vary by company. Final premiums and selected coverage are confirmed before issuance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperVisaPremiumCalculator;
