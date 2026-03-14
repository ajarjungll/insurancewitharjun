
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Calculator, HelpCircle, TrendingUp, Shield, DollarSign, Users, ChevronDown, ChevronUp } from 'lucide-react';

const CppEiContributions = () => {
  const [salary, setSalary] = useState<string>('70000');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const basicExemption = 3500;
  const cppRate = 0.0595;
  const eiRate = 0.0163;
  const maxPensionableEarnings = 74600;
  const maxInsurableEarnings = 68900;
  const maxCppBase = 4230.45;
  const maxCpp2 = 416;
  const maxEiEmployee = 1123.07;

  const calculateDeductions = (income: number) => {
    const pensionableEarnings = Math.min(income, maxPensionableEarnings);
    const cppDeduction = Math.min((pensionableEarnings - basicExemption) * cppRate, maxCppBase + maxCpp2);
    const insurableEarnings = Math.min(income, maxInsurableEarnings);
    const eiDeduction = Math.min(insurableEarnings * eiRate, maxEiEmployee);
    return {
      cpp: Math.max(0, cppDeduction),
      ei: Math.max(0, eiDeduction),
      total: Math.max(0, cppDeduction) + Math.max(0, eiDeduction),
    };
  };

  const numericSalary = parseFloat(salary) || 0;
  const deductions = calculateDeductions(numericSalary);

  const faqs = [
    {
      question: "What is CPP in Canada?",
      answer: "The Canada Pension Plan (CPP) is a government retirement program that provides monthly income to Canadians after retirement. Contributions are automatically deducted from employment income."
    },
    {
      question: "How much CPP do employees pay in 2026?",
      answer: "Employees contribute 5.95% of pensionable earnings up to the annual limit set by the government."
    },
    {
      question: "What is the maximum CPP contribution in 2026?",
      answer: "The maximum employee contribution for 2026 is approximately $4,646.45 including additional CPP contributions."
    },
    {
      question: "What is EI in Canada?",
      answer: "Employment Insurance (EI) is a federal program that provides temporary financial assistance to workers who lose their jobs or cannot work due to illness, maternity leave, or caregiving."
    },
    {
      question: "How much EI is deducted from salary?",
      answer: "Employees contribute 1.63% of insurable earnings up to the annual maximum earnings limit."
    },
    {
      question: "When do EI deductions stop?",
      answer: "EI deductions stop once an employee's income reaches the maximum insurable earnings limit of $68,900 for the year."
    }
  ];

  const TableWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto rounded-2xl shadow-xl card-3d">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-medium text-blue-100">2026 Tax Year</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              CPP & EI Contributions<br />in Canada (2026)
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Understand how much Canada Pension Plan (CPP) and Employment Insurance (EI) are deducted from your salary and how these programs support Canadians.
            </p>
            <p className="text-base text-blue-200 max-w-3xl mx-auto">
              Both the Canada Pension Plan (CPP) and Employment Insurance (EI) are mandatory payroll deductions for workers in Canada. These contributions help provide retirement income, temporary financial support during unemployment, and protection for families.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — CPP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Canada Pension Plan (CPP)</h2>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg mb-10 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">What is CPP?</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Canada Pension Plan is a national retirement program that provides monthly income to Canadians after retirement. It also provides disability benefits, survivor pensions, and death benefits.
              </p>
            </div>

            {/* CPP Contribution Rate */}
            <h3 className="text-2xl font-bold text-foreground mb-4">CPP Contribution Rate (2026)</h3>
            <TableWrapper>
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 to-blue-600">
                    <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                    <th className="px-6 py-4 text-right text-white font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Employee Contribution</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">5.95%</td>
                  </tr>
                  <tr className="bg-muted/30 border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Employer Contribution</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">5.95%</td>
                  </tr>
                  <tr className="bg-card hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Self-Employed</td>
                    <td className="px-6 py-4 text-right text-orange-600 font-bold">11.9%</td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>
            <p className="text-sm text-muted-foreground mt-3 italic">* Employers match employee contributions.</p>

            {/* CPP Income Limits */}
            <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">CPP Income Limits (2026)</h3>
            <TableWrapper>
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 to-blue-600">
                    <th className="px-6 py-4 text-left text-white font-semibold">Item</th>
                    <th className="px-6 py-4 text-right text-white font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Basic exemption</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$3,500</td>
                  </tr>
                  <tr className="bg-muted/30 border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Maximum pensionable earnings</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$74,600</td>
                  </tr>
                  <tr className="bg-card hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Additional earnings ceiling</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$85,000</td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>

            {/* Maximum CPP Contribution */}
            <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Maximum CPP Contribution (Employee)</h3>
            <TableWrapper>
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 to-blue-600">
                    <th className="px-6 py-4 text-left text-white font-semibold">Contribution Type</th>
                    <th className="px-6 py-4 text-right text-white font-semibold">Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Base CPP</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$4,230.45</td>
                  </tr>
                  <tr className="bg-muted/30 border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Additional CPP (CPP2)</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$416.00</td>
                  </tr>
                  <tr className="bg-card">
                    <td className="px-6 py-4 text-foreground font-bold">Total Maximum</td>
                    <td className="px-6 py-4 text-right text-green-600 font-bold text-lg">$4,646.45</td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>
          </div>
        </div>
      </section>

      {/* Section 2 — EI */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Employment Insurance (EI)</h2>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg mb-10 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">What is EI?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Employment Insurance provides temporary financial assistance to workers who lose their jobs or cannot work due to illness, maternity leave, or caregiving responsibilities. The program is administered by Service Canada under the Government of Canada.
              </p>
            </div>

            {/* EI Contribution Rate */}
            <h3 className="text-2xl font-bold text-foreground mb-4">EI Contribution Rate (2026)</h3>
            <TableWrapper>
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 to-orange-500">
                    <th className="px-6 py-4 text-left text-white font-semibold">Contributor</th>
                    <th className="px-6 py-4 text-right text-white font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Employee</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">1.63%</td>
                  </tr>
                  <tr className="bg-muted/30 hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Employer</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">2.28%</td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>

            {/* Maximum Insurable Earnings */}
            <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Maximum Insurable Earnings (2026)</h3>
            <TableWrapper>
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 to-orange-500">
                    <th className="px-6 py-4 text-left text-white font-semibold">Item</th>
                    <th className="px-6 py-4 text-right text-white font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Maximum insurable earnings</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$68,900</td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>

            {/* Maximum EI Contribution */}
            <h3 className="text-2xl font-bold text-foreground mt-10 mb-4">Maximum EI Contribution</h3>
            <TableWrapper>
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-600 to-orange-500">
                    <th className="px-6 py-4 text-left text-white font-semibold">Contributor</th>
                    <th className="px-6 py-4 text-right text-white font-semibold">Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Employee</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$1,123.07</td>
                  </tr>
                  <tr className="bg-muted/30 hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Employer</td>
                    <td className="px-6 py-4 text-right text-foreground font-semibold">$1,572.30</td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>
          </div>
        </div>
      </section>

      {/* Section 3 — Salary Deduction Example */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Salary Deduction Example</h2>
            </div>

            <p className="text-muted-foreground mb-6 text-lg">Example: Employee earning $70,000 per year</p>

            <div className="grid md:grid-cols-2 gap-8">
              <TableWrapper>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-700 to-green-600">
                      <th className="px-6 py-4 text-left text-white font-semibold">Deduction</th>
                      <th className="px-6 py-4 text-right text-white font-semibold">Annual Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">CPP contribution</td>
                      <td className="px-6 py-4 text-right text-foreground font-semibold">~$3,965</td>
                    </tr>
                    <tr className="bg-muted/30 border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">EI contribution</td>
                      <td className="px-6 py-4 text-right text-foreground font-semibold">~$1,123</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-6 py-4 text-foreground font-bold">Total annual deduction</td>
                      <td className="px-6 py-4 text-right text-green-600 font-bold text-lg">~$5,088</td>
                    </tr>
                  </tbody>
                </table>
              </TableWrapper>

              <TableWrapper>
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-700 to-green-600">
                      <th className="px-6 py-4 text-left text-white font-semibold">Deduction</th>
                      <th className="px-6 py-4 text-right text-white font-semibold">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">CPP</td>
                      <td className="px-6 py-4 text-right text-foreground font-semibold">~$330</td>
                    </tr>
                    <tr className="bg-muted/30 border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">EI</td>
                      <td className="px-6 py-4 text-right text-foreground font-semibold">~$94</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-6 py-4 text-foreground font-bold">Total Monthly</td>
                      <td className="px-6 py-4 text-right text-green-600 font-bold text-lg">~$424</td>
                    </tr>
                  </tbody>
                </table>
              </TableWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — CPP vs EI Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">CPP vs EI Comparison</h2>
            </div>

            <TableWrapper>
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-700 to-purple-600">
                    <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">CPP</th>
                    <th className="px-6 py-4 text-center text-white font-semibold">EI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Purpose</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">Retirement income</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-semibold">Temporary income support</td>
                  </tr>
                  <tr className="bg-muted/30 border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Contribution Rate</td>
                    <td className="px-6 py-4 text-center text-foreground font-semibold">5.95%</td>
                    <td className="px-6 py-4 text-center text-foreground font-semibold">1.63%</td>
                  </tr>
                  <tr className="bg-card border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Max Earnings</td>
                    <td className="px-6 py-4 text-center text-foreground font-semibold">$74,600</td>
                    <td className="px-6 py-4 text-center text-foreground font-semibold">$68,900</td>
                  </tr>
                  <tr className="bg-muted/30 hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 text-foreground font-medium">Benefit Type</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-semibold">Pension</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-semibold">Short-term payments</td>
                  </tr>
                </tbody>
              </table>
            </TableWrapper>
          </div>
        </div>
      </section>

      {/* Section 5 — Calculator */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">CPP & EI Deduction Calculator</h2>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border">
              <div className="mb-6">
                <label htmlFor="salary" className="block text-sm font-semibold text-foreground mb-2">
                  Enter your annual salary
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-lg">$</span>
                  <input
                    id="salary"
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 text-lg border-2 border-border rounded-xl bg-background text-foreground focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="70000"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Formula: CPP = (Salary − $3,500) × 5.95% &nbsp;|&nbsp; EI = Salary × 1.63%
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-xl p-5 text-center">
                  <p className="text-sm text-muted-foreground mb-1">CPP Deduction</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                    ${deductions.cpp.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ~${(deductions.cpp / 12).toFixed(0)}/month
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 rounded-xl p-5 text-center">
                  <p className="text-sm text-muted-foreground mb-1">EI Deduction</p>
                  <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                    ${deductions.ei.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ~${(deductions.ei / 12).toFixed(0)}/month
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20 rounded-xl p-5 text-center">
                  <p className="text-sm text-muted-foreground mb-1">Total Deduction</p>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                    ${deductions.total.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    ~${(deductions.total / 12).toFixed(0)}/month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Planning Your Retirement?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Understanding CPP and EI is an important part of financial planning. A professional advisor can help you build additional retirement income through investments and insurance strategies.
            </p>
            <p className="text-blue-200 mb-8">Book a free consultation today to discuss:</p>
            <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto mb-10 text-left">
              <div className="flex items-center gap-2 text-blue-100">
                <span className="text-green-400">✔</span> Retirement planning
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <span className="text-green-400">✔</span> Tax-efficient savings
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <span className="text-green-400">✔</span> Investment options
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <span className="text-green-400">✔</span> Insurance protection
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block">
                Book Free Consultation
              </a>
              <a href="tel:+14313382078" className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <Phone size={20} />
                Call (431) 338-2078
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CppEiContributions;
