import React, { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Baby,
  Calculator,
  Users,
  HelpCircle,
  Plus,
  Trash2,
  RotateCcw,
  Printer,
  ExternalLink,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
} from 'lucide-react';
import {
  CCB_PERIODS,
  getCcbPeriod,
  computeAfni,
  calculateCcb,
} from '@/data/ccbRates';

const cad = (n: number) =>
  n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 });

type FamilyStatus = 'single' | 'couple' | 'separated';

interface ChildEntry {
  id: number;
  dob: string; // yyyy-mm-dd
}

let nextChildId = 3;

const todayString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const ageToday = (dob: string): number | null => {
  if (!dob) return null;
  const birth = new Date(dob + 'T00:00:00');
  if (isNaN(birth.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
  return age;
};

const parseIncome = (v: string) => {
  const n = parseFloat(v);
  return isNaN(n) || n < 0 ? 0 : n;
};

const CcbCalculator = () => {
  const [status, setStatus] = useState<FamilyStatus>('couple');
  const [ownIncome, setOwnIncome] = useState('60000');
  const [spouseIncome, setSpouseIncome] = useState('40000');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [uccbReceived, setUccbReceived] = useState('0');
  const [rdspReceived, setRdspReceived] = useState('0');
  const [uccbRepaid, setUccbRepaid] = useState('0');
  const [rdspRepaid, setRdspRepaid] = useState('0');
  const [children, setChildren] = useState<ChildEntry[]>([
    { id: 1, dob: '2022-03-15' },
    { id: 2, dob: '2018-09-01' },
  ]);
  const [periodId, setPeriodId] = useState(CCB_PERIODS[0].id);
  const [cdbChecked, setCdbChecked] = useState(false);
  const [province, setProvince] = useState<'MB' | 'AB' | 'ON'>('MB');

  const period = getCcbPeriod(periodId);

  const afni = useMemo(
    () =>
      computeAfni({
        ownIncome: parseIncome(ownIncome),
        spouseIncome: status === 'couple' ? parseIncome(spouseIncome) : 0,
        uccbReceived: parseIncome(uccbReceived),
        rdspReceived: parseIncome(rdspReceived),
        uccbRepaid: parseIncome(uccbRepaid),
        rdspRepaid: parseIncome(rdspRepaid),
      }),
    [ownIncome, spouseIncome, status, uccbReceived, rdspReceived, uccbRepaid, rdspRepaid]
  );

  const childErrors = children.map((c) => {
    if (!c.dob) return 'Date of birth is required.';
    const birth = new Date(c.dob + 'T00:00:00');
    if (isNaN(birth.getTime())) return 'Enter a valid date.';
    if (birth.getTime() > Date.now()) return 'Date of birth cannot be in the future.';
    return null;
  });

  const validDobs = children
    .filter((c, i) => !childErrors[i])
    .map((c) => new Date(c.dob + 'T00:00:00'));

  const result = useMemo(
    () => calculateCcb({ afni, childrenDob: validDobs, period }),
    [afni, validDobs.map((d) => d.getTime()).join(','), period]
  );

  const addChild = () => {
    setChildren((prev) => [...prev, { id: nextChildId++, dob: '' }]);
  };

  const removeChild = (id: number) => {
    setChildren((prev) => prev.filter((c) => c.id !== id));
  };

  const updateChild = (id: number, dob: string) => {
    setChildren((prev) => prev.map((c) => (c.id === id ? { ...c, dob } : c)));
  };

  const resetCalculator = () => {
    setStatus('couple');
    setOwnIncome('60000');
    setSpouseIncome('40000');
    setUccbReceived('0');
    setRdspReceived('0');
    setUccbRepaid('0');
    setRdspRepaid('0');
    setShowAdvanced(false);
    setChildren([
      { id: 1, dob: '2022-03-15' },
      { id: 2, dob: '2018-09-01' },
    ]);
    setPeriodId(CCB_PERIODS[0].id);
    setCdbChecked(false);
    setProvince('MB');
  };

  const incomeField = (
    id: string,
    label: string,
    value: string,
    onChange: (v: string) => void,
    help?: string
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-blue-900 mb-1">
        {label}
        {help && (
          <span className="ml-1 inline-flex items-center text-blue-500" title={help} aria-label={help}>
            <HelpCircle size={14} />
          </span>
        )}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 font-semibold">$</span>
        <input
          id={id}
          type="number"
          min="0"
          step="100"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-8 pr-3 py-2.5 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-blue-900 font-medium bg-white"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Low-opacity Canadian city backdrop (matches other pages) */}
      <div
        className="fixed inset-0 z-0 opacity-10 pointer-events-none print:hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 relative overflow-hidden print:hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Baby size={18} />
              <span className="text-sm font-medium">Federal Benefit Estimator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Canada Child Benefit (CCB) Calculator</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Estimate your tax-free monthly Canada Child Benefit for the <strong>{period.label}</strong> benefit
              period, based on your <strong>{period.baseYear}</strong> adjusted family net income.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        {/* Benefit period */}
        <section className="bg-white rounded-2xl shadow-xl card-3d p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="text-blue-700" size={26} />
            <h2 className="text-2xl font-bold text-blue-900">Benefit Year</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 items-end">
            <div>
              <label htmlFor="benefit-year" className="block text-sm font-semibold text-blue-900 mb-1">
                Benefit period
              </label>
              <select
                id="benefit-year"
                value={periodId}
                onChange={(e) => setPeriodId(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-blue-900 font-medium bg-white"
              >
                {CCB_PERIODS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Income base year</div>
              <div className="text-xl font-bold text-blue-900">{period.baseYear} tax return</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Payments run</div>
              <div className="text-xl font-bold text-blue-900">{period.label}</div>
            </div>
          </div>
          <p className="text-sm text-blue-700 mt-3">
            Only benefit periods with official published CRA rates are offered. Future rates are never estimated.
          </p>
        </section>

        {/* Family information */}
        <section className="bg-white rounded-2xl shadow-xl card-3d p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="text-blue-700" size={26} />
            <h2 className="text-2xl font-bold text-blue-900">Your Family Information</h2>
          </div>

          <fieldset className="mb-6">
            <legend className="text-sm font-semibold text-blue-900 mb-2">Marital and family status</legend>
            <div className="flex flex-wrap gap-3">
              {(
                [
                  { value: 'single', label: 'Single parent / individual' },
                  { value: 'couple', label: 'Married or common-law' },
                  { value: 'separated', label: 'Separated or divorced' },
                ] as { value: FamilyStatus; label: string }[]
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setStatus(opt.value)}
                  aria-pressed={status === opt.value}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    status === opt.value
                      ? 'text-blue-700 bg-gradient-to-b from-blue-100 to-blue-200 shadow-[0_4px_0_0_#1e40af,0_6px_10px_rgba(30,64,175,0.3)]'
                      : 'text-blue-800 bg-gradient-to-b from-blue-50 to-blue-100 shadow-[0_4px_0_0_#3b82f6,0_6px_10px_rgba(59,130,246,0.25)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#3b82f6,0_4px_6px_rgba(59,130,246,0.25)]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>

          {status === 'separated' && (
            <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 text-sm text-amber-900">
              <strong>Separated or divorced?</strong> Your actual CCB depends on your custody arrangement and CRA
              rules (for example, shared-custody parents each receive 50%). This estimate uses only your own net
              income — a former partner's income is not combined automatically.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            {incomeField(
              'own-income',
              'Your net income (line 23600)',
              ownIncome,
              setOwnIncome,
              'Use line 23600 (net income) of your tax return — not your gross salary.'
            )}
            {status === 'couple' &&
              incomeField(
                'spouse-income',
                "Spouse's or common-law partner's net income",
                spouseIncome,
                setSpouseIncome,
                'Couples generally use both partners’ net incomes (line 23600) combined.'
              )}
          </div>

          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="mt-5 inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900"
            aria-expanded={showAdvanced}
          >
            {showAdvanced ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            Advanced: CRA income adjustments (UCCB / RDSP)
          </button>

          {showAdvanced && (
            <div className="grid md:grid-cols-2 gap-4 mt-4 bg-blue-50 rounded-xl p-4">
              {incomeField('uccb-received', 'UCCB income received', uccbReceived, setUccbReceived)}
              {incomeField('rdsp-received', 'RDSP income received', rdspReceived, setRdspReceived)}
              {incomeField('uccb-repaid', 'UCCB amounts repaid', uccbRepaid, setUccbRepaid)}
              {incomeField('rdsp-repaid', 'RDSP amounts repaid', rdspRepaid, setRdspRepaid)}
            </div>
          )}

          <div className="mt-5 flex items-center gap-2 bg-blue-900 text-white rounded-xl px-4 py-3 shadow-lg">
            <span className="font-semibold">Adjusted family net income (AFNI)</span>
            <span
              className="inline-flex items-center text-blue-200"
              title="AFNI = your (and, for couples, your partner’s) line 23600 net income, minus UCCB and RDSP income received, plus UCCB and RDSP amounts repaid."
              aria-label="AFNI = your (and, for couples, your partner’s) line 23600 net income, minus UCCB and RDSP income received, plus UCCB and RDSP amounts repaid."
            >
              <HelpCircle size={16} />
            </span>
            <span className="ml-auto text-xl font-bold">{cad(afni)}</span>
          </div>
        </section>

        {/* Children */}
        <section className="bg-white rounded-2xl shadow-xl card-3d p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Baby className="text-blue-700" size={26} />
            <h2 className="text-2xl font-bold text-blue-900">Children in Your Care</h2>
          </div>

          <div className="space-y-4">
            {children.map((child, index) => {
              const age = ageToday(child.dob);
              const error = childErrors[index];
              return (
                <div
                  key={child.id}
                  className="flex flex-wrap items-end gap-4 bg-blue-50 rounded-xl p-4 border border-blue-100"
                >
                  <div className="font-bold text-blue-900 w-20 shrink-0">Child {index + 1}</div>
                  <div className="flex-1 min-w-[200px]">
                    <label htmlFor={`child-dob-${child.id}`} className="block text-sm font-semibold text-blue-900 mb-1">
                      Date of birth
                    </label>
                    <input
                      id={`child-dob-${child.id}`}
                      type="date"
                      value={child.dob}
                      max={todayString()}
                      onChange={(e) => updateChild(child.id, e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-blue-900 font-medium bg-white"
                    />
                    {error && <p className="text-sm text-red-600 mt-1" role="alert">{error}</p>}
                  </div>
                  <div className="w-28 text-center">
                    <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Age today</div>
                    <div className="text-xl font-bold text-blue-900">{age === null ? '—' : age}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeChild(child.id)}
                    aria-label={`Remove child ${index + 1}`}
                    className="p-2.5 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors shadow-[0_3px_0_0_#dc2626] hover:translate-y-[2px] hover:shadow-[0_1px_0_0_#dc2626]"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={addChild}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-blue-800 bg-gradient-to-b from-blue-50 to-blue-100 shadow-[0_4px_0_0_#3b82f6,0_6px_10px_rgba(59,130,246,0.25)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#3b82f6,0_4px_6px_rgba(59,130,246,0.25)] transition-all"
          >
            <Plus size={18} /> Add Another Child
          </button>
          <p className="text-sm text-blue-700 mt-3">
            Children must be under 18 to qualify. If a child turns 6 or 18 during the benefit year, the estimate
            adjusts month by month automatically.
          </p>
        </section>

        {/* Results */}
        <section className="bg-white rounded-2xl shadow-xl card-3d p-6 md:p-8 mb-8" aria-live="polite">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Your Estimated Canada Child Benefit</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-6 text-center shadow-xl card-3d">
              <div className="text-sm font-semibold uppercase tracking-wide text-blue-200">Estimated monthly CCB</div>
              <div className="text-4xl font-extrabold mt-2">{cad(result.monthly)}</div>
              <div className="text-blue-200 text-sm mt-1">tax-free, paid monthly</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 text-center shadow-xl card-3d">
              <div className="text-sm font-semibold uppercase tracking-wide text-orange-100">Estimated annual CCB</div>
              <div className="text-4xl font-extrabold mt-2">{cad(result.annual)}</div>
              <div className="text-orange-100 text-sm mt-1">{period.label}</div>
            </div>
          </div>

          {result.annual === 0 && result.maxBenefit > 0 && (
            <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 text-sm text-amber-900">
              Under the entered assumptions the estimated federal benefit is <strong>$0</strong> because the
              income-based reduction equals or exceeds the maximum benefit. This does not mean your family is
              ineligible for every related benefit or credit — provincial programs and other credits may still apply.
            </div>
          )}
          {result.maxBenefit === 0 && (
            <div className="mb-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 text-sm text-amber-900">
              No eligible children were found for this benefit period. Add each child's date of birth above — children
              must be under 18.
            </div>
          )}

          <div className="overflow-x-auto rounded-xl border border-blue-100 mb-6">
            <table className="w-full text-left">
              <tbody>
                {[
                  ['Maximum benefit before reduction', cad(result.maxBenefit)],
                  ['Income-based reduction', '− ' + cad(result.reduction)],
                  ['Estimated annual federal CCB', cad(result.annual)],
                  ['Estimated monthly federal CCB', cad(result.monthly)],
                ].map(([label, amount], i) => (
                  <tr key={label} className={i % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-blue-900">{label}</td>
                    <td className="px-4 py-3 text-right font-bold text-blue-900">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-6">
            {[
              ['AFNI used', cad(afni)],
              ['Eligible children', String(result.eligibleChildren)],
              ['Benefit period', period.label],
              ['Income base year', String(period.baseYear)],
            ].map(([term, value]) => (
              <div key={term} className="bg-blue-50 rounded-lg p-3">
                <dt className="text-xs text-blue-600 font-semibold uppercase tracking-wide">{term}</dt>
                <dd className="text-sm font-bold text-blue-900 mt-1">{value}</dd>
              </div>
            ))}
          </dl>

          {/* Optional Child Disability Benefit */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={cdbChecked}
                onChange={(e) => setCdbChecked(e.target.checked)}
                className="mt-1 w-5 h-5 accent-blue-700"
              />
              <span className="text-sm text-blue-900">
                <strong>A child may qualify for the Child Disability Benefit (CDB)</strong> through eligibility for
                the Disability Tax Credit.
              </span>
            </label>
            {cdbChecked && (
              <div className="mt-3 ml-8 text-sm text-blue-900 bg-white rounded-lg p-3 border border-blue-100">
                For {period.label}, the published maximum CDB is{' '}
                <strong>{cad(period.cdbAnnualPerChild)} per year ({cad(period.cdbAnnualPerChild / 12)}/month) per
                eligible child</strong> — a possible <em>additional</em> amount of up to{' '}
                <strong>{cad(period.cdbAnnualPerChild * result.eligibleChildren)}</strong> for your{' '}
                {result.eligibleChildren} eligible {result.eligibleChildren === 1 ? 'child' : 'children'}. Income
                testing and other eligibility conditions apply, so this is shown separately and is{' '}
                <strong>not</strong> included in the estimate above.
              </div>
            )}
          </div>

          {/* Provincial note */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
            <label htmlFor="province" className="block text-sm font-semibold text-blue-900 mb-1">
              Your province or territory (optional)
            </label>
            <select
              id="province"
              value={province}
              onChange={(e) => setProvince(e.target.value as 'MB' | 'AB' | 'ON')}
              className="w-full md:w-64 px-3 py-2.5 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:outline-none text-blue-900 font-medium bg-white"
            >
              <option value="MB">Manitoba</option>
              <option value="AB">Alberta</option>
              <option value="ON">Ontario</option>
            </select>
            <p className="text-sm text-blue-900 mt-3">
              {province === 'ON' ? (
                <>
                  In Ontario, the <strong>Ontario Child Benefit</strong> may be available in addition to the federal
                  CCB. Eligibility and payment amounts are determined under the Ontario program's own rules.
                </>
              ) : (
                <>
                  Some families may qualify for additional provincial or territorial benefits on top of the federal
                  CCB.
                </>
              )}{' '}
              <strong>Provincial benefits are excluded from this estimate</strong> — only the federal CCB is
              calculated above.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-900 flex gap-3">
            <ShieldCheck className="shrink-0 text-amber-600" size={20} />
            <p>
              <strong>Disclaimer:</strong> This calculator provides an estimate for educational purposes only. It is
              not an official CRA calculation or a guarantee of eligibility or payment. Actual benefits depend on your
              circumstances, income, children's eligibility, custody arrangements, immigration and residency
              requirements, and applicable CRA rules. Verify your entitlement with the Canada Revenue Agency.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center print:hidden">
            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-blue-800 bg-gradient-to-b from-blue-50 to-blue-100 shadow-[0_4px_0_0_#3b82f6,0_6px_10px_rgba(59,130,246,0.25)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#3b82f6,0_4px_6px_rgba(59,130,246,0.25)] transition-all"
            >
              <RotateCcw size={18} /> Reset Calculator
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-b from-orange-500 to-orange-600 shadow-[0_4px_0_0_#c2410c,0_6px_10px_rgba(194,65,12,0.3)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#c2410c,0_4px_6px_rgba(194,65,12,0.3)] transition-all"
            >
              <Printer size={18} /> Print Results
            </button>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-2xl shadow-xl card-3d p-6 md:p-8 mb-8 print:hidden">
          <div className="flex items-center gap-3 mb-4">
            <HeartHandshake className="text-blue-700" size={26} />
            <h2 className="text-2xl font-bold text-blue-900">What Is the Canada Child Benefit?</h2>
          </div>
          <div className="prose prose-blue max-w-none text-blue-900 space-y-4 text-[15px] leading-relaxed">
            <p>
              The Canada Child Benefit is a <strong>tax-free monthly payment</strong> administered by the Canada
              Revenue Agency to help eligible families with the cost of raising children <strong>under age 18</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Who may qualify:</strong> you must live with the child, be primarily responsible for their
                care, be a resident of Canada for tax purposes, and you or your spouse or partner must meet the
                applicable status requirements.
              </li>
              <li>
                <strong>Income matters:</strong> the benefit is reduced as your adjusted family net income rises above
                the CRA thresholds, so lower-income families receive the most.
              </li>
              <li>
                <strong>Ages and number of children matter:</strong> children under 6 qualify for a higher annual
                amount than children aged 6–17, and the income reduction rate grows with the number of eligible
                children.
              </li>
              <li>
                <strong>Couples combine income:</strong> a married or common-law couple generally uses combined family
                net income, and both partners generally need to file their annual tax returns — even if one has no
                income.
              </li>
              <li>
                <strong>Recalculated every July:</strong> each July your benefit is recalculated using the previous
                year's tax return, which is why filing on time every year is so important.
              </li>
              <li>
                <strong>This is an estimate:</strong> a calculator can guide your planning, but only the CRA can make
                an official determination of your entitlement.
              </li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="font-bold text-blue-900 mb-1">Illustrative example</p>
              <p>
                A family with one eligible child under age 6 and an AFNI of $45,000 has a maximum annual federal CCB
                of <strong>$8,157</strong>. Under the 2026–2027 rules, the income reduction is 7% of ($45,000 −
                $38,237) = <strong>$473.41</strong>. The estimated annual CCB is <strong>$7,683.59</strong>, or
                approximately <strong>$640.30 per month</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* CRA links */}
        <section className="bg-white rounded-2xl shadow-xl card-3d p-6 md:p-8 print:hidden">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Official CRA Resources</h2>
          <ul className="space-y-3">
            {[
              ['How much you can get (CRA CCB calculation page)', 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit/how-much.html'],
              ['Official CRA child and family benefits calculator', 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html'],
              ['Who can apply (CRA eligibility information)', 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit/who-apply.html'],
            ].map(([label, url]) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 hover:underline"
                >
                  <ExternalLink size={16} /> {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CcbCalculator;
