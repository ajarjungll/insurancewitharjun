import { describe, it, expect } from "vitest";
import {
  CCB_PERIODS,
  getCcbPeriod,
  computeAfni,
  incomeReduction,
  calculateCcb,
} from "./ccbRates";

const period = getCcbPeriod("2026-2027");

describe("CCB 2026–2027 configuration", () => {
  it("uses the official CRA amounts and thresholds", () => {
    expect(period.under6Annual).toBe(8157);
    expect(period.age6to17Annual).toBe(6883);
    expect(period.threshold1).toBe(38237);
    expect(period.threshold2).toBe(82847);
    expect(period.cdbAnnualPerChild).toBe(3480);
    expect(period.baseYear).toBe(2025);
  });

  it("is the default and only configured period", () => {
    expect(CCB_PERIODS).toHaveLength(1);
    expect(getCcbPeriod("unknown").id).toBe("2026-2027");
  });
});

describe("adjusted family net income", () => {
  it("combines both partners' incomes for a couple", () => {
    expect(
      computeAfni({ ownIncome: 50000, spouseIncome: 30000, uccbReceived: 0, rdspReceived: 0, uccbRepaid: 0, rdspRepaid: 0 })
    ).toBe(80000);
  });

  it("subtracts UCCB/RDSP received and adds back repayments", () => {
    expect(
      computeAfni({ ownIncome: 50000, spouseIncome: 30000, uccbReceived: 1000, rdspReceived: 500, uccbRepaid: 200, rdspRepaid: 100 })
    ).toBe(78800);
  });

  it("never goes below zero", () => {
    expect(
      computeAfni({ ownIncome: 0, spouseIncome: 0, uccbReceived: 5000, rdspReceived: 0, uccbRepaid: 0, rdspRepaid: 0 })
    ).toBe(0);
  });
});

describe("income reduction thresholds", () => {
  it("is zero at exactly the first threshold ($38,237)", () => {
    expect(incomeReduction(38237, 1, period)).toBe(0);
  });

  it("applies 7% immediately above the first threshold for one child", () => {
    expect(incomeReduction(38238, 1, period)).toBeCloseTo(0.07, 2);
  });

  it("uses the mid rate at exactly the second threshold ($82,847)", () => {
    expect(incomeReduction(82847, 1, period)).toBeCloseTo(0.07 * (82847 - 38237), 2);
  });

  it("switches to base + high rate immediately above the second threshold", () => {
    expect(incomeReduction(82848, 1, period)).toBeCloseTo(3123 + 0.032, 2);
  });
});

describe("income reduction child-count bands", () => {
  it("one child: $45,000 AFNI reduces by 7% of the excess (CRA example)", () => {
    expect(incomeReduction(45000, 1, period)).toBeCloseTo(473.41, 2);
  });

  it("two children: 13.5% mid rate", () => {
    expect(incomeReduction(60000, 2, period)).toBeCloseTo(0.135 * (60000 - 38237), 2);
  });

  it("three children: $8,476 + 8% above the second threshold", () => {
    expect(incomeReduction(100000, 3, period)).toBeCloseTo(8476 + 0.08 * (100000 - 82847), 2);
  });

  it("four or more children share the 23% / $10,260 + 9.5% band", () => {
    expect(incomeReduction(60000, 4, period)).toBeCloseTo(0.23 * (60000 - 38237), 2);
    expect(incomeReduction(60000, 5, period)).toBeCloseTo(0.23 * (60000 - 38237), 2);
    expect(incomeReduction(100000, 4, period)).toBeCloseTo(10260 + 0.095 * (100000 - 82847), 2);
  });
});

describe("full CCB calculation", () => {
  it("matches the CRA illustrative example: one child under 6, AFNI $45,000", () => {
    const result = calculateCcb({ afni: 45000, childrenDob: [new Date(2024, 0, 15)], period });
    expect(result.eligibleChildren).toBe(1);
    expect(result.maxBenefit).toBeCloseTo(8157, 2);
    expect(result.reduction).toBeCloseTo(473.41, 2);
    expect(result.annual).toBeCloseTo(7683.59, 2);
    expect(result.monthly).toBeCloseTo(640.3, 2);
  });

  it("pays the full maximum at or below the first threshold", () => {
    const result = calculateCcb({ afni: 30000, childrenDob: [new Date(2023, 5, 1), new Date(2015, 2, 1)], period });
    expect(result.annual).toBeCloseTo(8157 + 6883, 2);
  });

  it("never produces a negative benefit at very high income", () => {
    const result = calculateCcb({ afni: 500000, childrenDob: [new Date(2024, 0, 1)], period });
    expect(result.annual).toBe(0);
    expect(result.monthly).toBe(0);
  });

  it("handles a child turning 6 mid-year month by month", () => {
    // Born 10 Sep 2020: under 6 for Jul–Sep 2026 (still 5 on Sep 1), age 6–17 from Oct 2026.
    const result = calculateCcb({ afni: 0, childrenDob: [new Date(2020, 8, 10)], period });
    expect(result.maxBenefit).toBeCloseTo((3 * 8157) / 12 + (9 * 6883) / 12, 2);
  });

  it("stops payments the month after a child turns 18", () => {
    // Born 20 Aug 2008: under 18 on Jul 1 and Aug 1, so Jul–Aug 2026 are payable; Sep 2026 is not.
    const result = calculateCcb({ afni: 0, childrenDob: [new Date(2008, 7, 20)], period });
    expect(result.eligibleChildren).toBe(1);
    expect(result.maxBenefit).toBeCloseTo((2 * 6883) / 12, 2);
  });

  it("pays a child born during the benefit period from the birth month", () => {
    // Born 1 Jun 2027: eligible for June 2027 only.
    const result = calculateCcb({ afni: 0, childrenDob: [new Date(2027, 5, 1)], period });
    expect(result.eligibleChildren).toBe(1);
    expect(result.maxBenefit).toBeCloseTo(8157 / 12, 2);
  });

  it("excludes children who are 18+ or born after the period ends", () => {
    const result = calculateCcb({
      afni: 0,
      childrenDob: [new Date(2007, 0, 1), new Date(2027, 7, 1)],
      period,
    });
    expect(result.eligibleChildren).toBe(0);
    expect(result.maxBenefit).toBe(0);
    expect(result.annual).toBe(0);
  });
});
