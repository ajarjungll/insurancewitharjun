import React, { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calculator, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Frequency = 'weekly' | 'biweekly' | 'monthly';

interface SIPCalculatorProps {
  accentColor?: 'green' | 'blue' | 'purple' | 'orange';
  buttonLabel?: string;
}

const accentMap = {
  green: { bg: 'bg-green-600', hover: 'hover:bg-green-700', text: 'text-green-600', soft: 'bg-green-50', border: 'border-green-200' },
  blue: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', text: 'text-blue-600', soft: 'bg-blue-50', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-600', hover: 'hover:bg-purple-700', text: 'text-purple-600', soft: 'bg-purple-50', border: 'border-purple-200' },
  orange: { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', text: 'text-orange-600', soft: 'bg-orange-50', border: 'border-orange-200' },
};

const SIPCalculator: React.FC<SIPCalculatorProps> = ({ accentColor = 'blue', buttonLabel = 'SIP Calculator' }) => {
  const c = accentMap[accentColor];
  const [amount, setAmount] = useState<number>(500);
  const [frequency, setFrequency] = useState<Frequency>('monthly');
  const [rate, setRate] = useState<number>(8);
  const [years, setYears] = useState<number>(10);
  const [months, setMonths] = useState<number>(0);

  const result = useMemo(() => {
    const periodsPerYear = frequency === 'weekly' ? 52 : frequency === 'biweekly' ? 26 : 12;
    const totalYears = years + months / 12;
    const n = Math.round(periodsPerYear * totalYears);
    const i = rate / 100 / periodsPerYear;
    let future = 0;
    if (i === 0) {
      future = amount * n;
    } else {
      future = amount * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }
    const invested = amount * n;
    const interest = future - invested;
    return { future, invested, interest, periods: n };
  }, [amount, frequency, rate, years, months]);

  const fmt = (v: number) =>
    v.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`inline-flex items-center gap-2 ${c.bg} ${c.hover} text-white px-5 py-3 rounded-xl font-semibold btn-3d shadow-lg`}
          aria-label="Open SIP Calculator"
        >
          <Calculator size={20} />
          {buttonLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <TrendingUp className={c.text} /> SIP Calculator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <div>
            <Label>Contribution Amount (CAD)</Label>
            <Input
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Frequency</Label>
            <div className="grid grid-cols-3 gap-2 mt-1">
              {(['weekly', 'biweekly', 'monthly'] as Frequency[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFrequency(f)}
                  className={`px-3 py-2 rounded-lg border-2 text-sm font-semibold capitalize transition ${
                    frequency === f
                      ? `${c.bg} text-white border-transparent`
                      : `bg-white ${c.border} text-gray-700 hover:${c.soft}`
                  }`}
                >
                  {f === 'biweekly' ? 'Bi-weekly' : f}
                </button>
              ))}
            </div>
          </div>

          <div>
            <Label>Expected Annual Interest Rate (%)</Label>
            <Input
              type="number"
              min={0}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value) || 0)}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Years</Label>
              <Input
                type="number"
                min={0}
                value={years}
                onChange={(e) => setYears(Number(e.target.value) || 0)}
                className="mt-1"
              />
            </div>
            <div>
              <Label>Months</Label>
              <Input
                type="number"
                min={0}
                max={11}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value) || 0)}
                className="mt-1"
              />
            </div>
          </div>

          <div className={`mt-4 p-5 rounded-xl ${c.soft} border-2 ${c.border} card-3d`}>
            <h4 className="font-bold text-gray-900 mb-3 text-lg">Results</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Contributions ({result.periods} payments):</span>
                <span className="font-bold text-gray-900">{fmt(result.invested)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Interest Earned:</span>
                <span className={`font-bold ${c.text}`}>{fmt(result.interest)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-300">
                <span className="text-gray-900 font-semibold">Future Value:</span>
                <span className={`font-bold text-xl ${c.text}`}>{fmt(result.future)}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Estimates assume contributions at the start of each period and constant rate. Actual returns may vary.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SIPCalculator;