// Canada Child Benefit (CCB) parameters and calculation engine.
// All official CRA amounts, thresholds and reduction rates for a benefit
// period live here — never hardcode them in the UI. When CRA publishes new
// rates, add a new entry to CCB_PERIODS from verified CRA publications only.

export interface CcbReductionBand {
  /** Number of eligible children this band applies to (4 = four or more). */
  children: number;
  /** Reduction rate on AFNI between threshold1 and threshold2. */
  midRate: number;
  /** Fixed reduction amount once AFNI exceeds threshold2. */
  highBase: number;
  /** Reduction rate on AFNI above threshold2. */
  highRate: number;
}

export interface CcbBenefitPeriod {
  id: string;
  label: string;
  /** Tax year whose net income (line 23600) drives this benefit period. */
  baseYear: number;
  /** First month of the benefit period (July). */
  start: { year: number; month: number };
  under6Annual: number;
  age6to17Annual: number;
  threshold1: number;
  threshold2: number;
  /** Maximum Child Disability Benefit per eligible child per year. */
  cdbAnnualPerChild: number;
  bands: CcbReductionBand[];
}

export const CCB_PERIODS: CcbBenefitPeriod[] = [
  {
    id: "2026-2027",
    label: "July 2026 – June 2027",
    baseYear: 2025,
    start: { year: 2026, month: 7 },
    under6Annual: 8157,
    age6to17Annual: 6883,
    threshold1: 38237,
    threshold2: 82847,
    cdbAnnualPerChild: 3480,
    bands: [
      { children: 1, midRate: 0.07, highBase: 3123, highRate: 0.032 },
      { children: 2, midRate: 0.135, highBase: 6022, highRate: 0.057 },
      { children: 3, midRate: 0.19, highBase: 8476, highRate: 0.08 },
      { children: 4, midRate: 0.23, highBase: 10260, highRate: 0.095 },
    ],
  },
];

export const getCcbPeriod = (id: string): CcbBenefitPeriod =>
  CCB_PERIODS.find((p) => p.id === id) ?? CCB_PERIODS[0];

export interface AfniInput {
  ownIncome: number;
  spouseIncome: number;
  uccbReceived: number;
  rdspReceived: number;
  uccbRepaid: number;
  rdspRepaid: number;
}

/** CRA adjusted family net income: combined line 23600 − UCCB/RDSP received + UCCB/RDSP repaid. */
export function computeAfni(input: AfniInput): number {
  const combined = Math.max(0, input.ownIncome) + Math.max(0, input.spouseIncome);
  const afni =
    combined -
    Math.max(0, input.uccbReceived) -
    Math.max(0, input.rdspReceived) +
    Math.max(0, input.uccbRepaid) +
    Math.max(0, input.rdspRepaid);
  return Math.max(0, afni);
}

/** Income-based reduction for a given AFNI and number of eligible children. */
export function incomeReduction(
  afni: number,
  eligibleChildren: number,
  period: CcbBenefitPeriod
): number {
  if (eligibleChildren <= 0 || afni <= period.threshold1) return 0;
  const band = period.bands.find(
    (b) => b.children === Math.min(eligibleChildren, 4)
  )!;
  if (afni <= period.threshold2) {
    return band.midRate * (afni - period.threshold1);
  }
  return band.highBase + band.highRate * (afni - period.threshold2);
}

/** Age in whole years on the 1st day of the given month. */
export function ageAtStartOfMonth(dob: Date, year: number, month: number): number {
  let age = year - dob.getFullYear();
  const monthDiff = month - 1 - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && dob.getDate() > 1)) age--;
  return age;
}

export interface ChildResult {
  dob: Date;
  eligibleMonths: number;
  annualMax: number;
}

export interface CcbResult {
  eligibleChildren: number;
  maxBenefit: number;
  reduction: number;
  annual: number;
  monthly: number;
  perChild: ChildResult[];
}

/**
 * Month-by-month federal CCB estimate. A child is eligible for a month when
 * under 18 on the first day of that month; the under-6 rate applies while the
 * child is under 6 on the first day of that month, so a child turning 6 or 18
 * mid-year is handled month by month rather than with a single annual rate.
 */
export function calculateCcb(params: {
  afni: number;
  childrenDob: Date[];
  period: CcbBenefitPeriod;
}): CcbResult {
  const { afni, childrenDob, period } = params;
  const months: { year: number; month: number }[] = [];
  for (let i = 0; i < 12; i++) {
    const m = period.start.month - 1 + i;
    months.push({ year: period.start.year + Math.floor(m / 12), month: (m % 12) + 1 });
  }

  let maxBenefit = 0;
  let eligibleChildren = 0;
  const perChild: ChildResult[] = childrenDob.map((dob) => {
    let childTotal = 0;
    let eligibleMonths = 0;
    for (const { year, month } of months) {
      const age = ageAtStartOfMonth(dob, year, month);
      if (age < 0 || age >= 18) continue;
      eligibleMonths++;
      childTotal += (age < 6 ? period.under6Annual : period.age6to17Annual) / 12;
    }
    if (eligibleMonths > 0) eligibleChildren++;
    maxBenefit += childTotal;
    return { dob, eligibleMonths, annualMax: childTotal };
  });

  const reduction = incomeReduction(afni, eligibleChildren, period);
  const annual = Math.max(0, maxBenefit - reduction);
  return {
    eligibleChildren,
    maxBenefit,
    reduction,
    annual,
    monthly: annual / 12,
    perChild,
  };
}
