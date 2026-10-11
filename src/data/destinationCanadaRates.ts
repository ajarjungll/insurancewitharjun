// Source: DTC_Rate_Sheet_EN_0726.pdf, effective July 1, 2026.
export const destinationCoverages = [25000, 50000, 100000, 150000, 200000, 250000, 300000] as const;
export const destinationDeductibles = [0, 250, 500, 1000, 2500, 5000, 10000] as const;
export type DestinationDeductible = typeof destinationDeductibles[number];
export type DestinationOption = '1' | '2';
const discounts: Record<DestinationDeductible, number> = { 0: 0, 250: .10, 500: .15, 1000: .20, 2500: .30, 5000: .35, 10000: .40 };
const bands = [25, 40, 60, 64, 69, 74, 79, 85, Infinity];
const labels = ['0–25', '26–40', '41–60', '61–64', '65–69', '70–74', '75–79', '80–85', '86+'];
const option1: number[][] = [
  [2.37,2.72,3.46,4.24,5.16,6.07,6.98],
  [2.60,2.82,3.67,4.76,5.65,6.56,7.46],
  [3.05,3.24,4.61,6.23,7.35,8.48,9.60],
  [4.07,4.58,5.19,7.25,8.40,9.55,10.69],
  [5.26,5.85,7.41,9.35,10.46,11.57,12.67],
  [7.83,9.33,11.79,14.50,16.21,17.92,19.63],
  [9.62,11.95,14.63,17.94,20.95,23.96,26.97],
];
const option2: number[][] = [
  [1.74,1.91,2.57,3.06,3.69,4.33,4.96],
  [2.03,2.21,3.16,3.96,4.69,5.41,6.14],
  [2.44,2.80,3.98,4.98,5.80,6.63,7.46],
  [3.10,3.72,4.45,5.53,6.34,7.14,7.95],
  [3.47,4.13,5.70,6.40,7.41,8.42,9.42],
  [4.83,6.92,7.84,9.62,11.03,12.44,13.84],
  [5.70,8.04,9.73,11.00,12.67,14.34,16.01],
  [10.35,11.14],
  [15.95],
];
export function destinationQuote(age: number, coverage: number, option: DestinationOption, requestedDeductible: DestinationDeductible) {
  const validAge = Number.isInteger(age) && age >= 0;
  const index = validAge ? bands.findIndex(max => age <= max) : -1;
  const column = destinationCoverages.findIndex(value => value === coverage);
  const deductible = age >= 86 ? 500 : requestedDeductible;
  const daily = (option === '1' ? option1 : option2)[index]?.[column];
  const discount = age >= 86 ? 0 : discounts[deductible];
  const annual = daily == null ? null : Math.max(25, Math.round(daily * 365 * (1 - discount) * 100) / 100);
  const stability = option === '1' && age <= 79 ? (age <= 59 ? 90 : age <= 69 ? 120 : 180) : null;
  return { band: labels[index] ?? null, daily: daily ?? null, annual, deductible, discount, stability,
    monthlyEligible: annual != null && coverage >= 50000 };
}