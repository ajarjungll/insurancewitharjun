import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calculator, DollarSign, PiggyBank, Home, TrendingDown, Info, Truck, Briefcase, User, Users, Heart, MapPin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

type Province = 'manitoba' | 'alberta' | 'ontario';
type TaxYear = 2020 | 2025 | 2026;

const provinceNames: Record<Province, string> = {
  manitoba: 'Manitoba',
  alberta: 'Alberta',
  ontario: 'Ontario',
};

const provinceColors: Record<Province, { bg: string; text: string; border: string; light: string }> = {
  manitoba: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', light: 'bg-green-100' },
  alberta: { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', light: 'bg-sky-100' },
  ontario: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', light: 'bg-red-100' },
};

const taxData = {
  2020: {
    federalBrackets: [
      { min: 0, max: 48535, rate: 0.15 },
      { min: 48535, max: 97069, rate: 0.205 },
      { min: 97069, max: 150473, rate: 0.26 },
      { min: 150473, max: 214368, rate: 0.29 },
      { min: 214368, max: Infinity, rate: 0.33 },
    ],
    provincialBrackets: {
      manitoba: [
        { min: 0, max: 33389, rate: 0.108 },
        { min: 33389, max: 72164, rate: 0.1275 },
        { min: 72164, max: Infinity, rate: 0.174 },
      ],
      alberta: [
        { min: 0, max: 131220, rate: 0.10 },
        { min: 131220, max: 157464, rate: 0.12 },
        { min: 157464, max: 209952, rate: 0.13 },
        { min: 209952, max: 314928, rate: 0.14 },
        { min: 314928, max: Infinity, rate: 0.15 },
      ],
      ontario: [
        { min: 0, max: 44740, rate: 0.0505 },
        { min: 44740, max: 89482, rate: 0.0915 },
        { min: 89482, max: 150000, rate: 0.1116 },
        { min: 150000, max: 220000, rate: 0.1216 },
        { min: 220000, max: Infinity, rate: 0.1316 },
      ],
    },
    federalBPA: 13229,
    provincialBPA: { manitoba: 9838, alberta: 19369, ontario: 10783 },
    federalSpouseAmount: 13229,
    provincialSpouseAmount: { manitoba: 9134, alberta: 19369, ontario: 9156 },
    provincialLowestRate: { manitoba: 0.108, alberta: 0.10, ontario: 0.0505 },
    cpp1MaxEarnings: 58700,
    cpp2MaxEarnings: 58700,
    cppExemption: 3500,
    cpp1Rate: 0.0525,
    cpp2Rate: 0,
    eiMaxInsurableEarnings: 54200,
    eiRate: 0.0158,
    rrspLimit: 27230,
    fhsaLimit: 0,
    usdToCadRate: 1.34,
  },
  2025: {
    federalBrackets: [
      { min: 0, max: 57375, rate: 0.15 },
      { min: 57375, max: 114750, rate: 0.205 },
      { min: 114750, max: 177882, rate: 0.26 },
      { min: 177882, max: 253414, rate: 0.29 },
      { min: 253414, max: Infinity, rate: 0.33 },
    ],
    provincialBrackets: {
      manitoba: [
        { min: 0, max: 47000, rate: 0.108 },
        { min: 47000, max: 100000, rate: 0.1275 },
        { min: 100000, max: Infinity, rate: 0.174 },
      ],
      alberta: [
        { min: 0, max: 60000, rate: 0.08 },
        { min: 60000, max: 151234, rate: 0.10 },
        { min: 151234, max: 181481, rate: 0.12 },
        { min: 181481, max: 241974, rate: 0.13 },
        { min: 241974, max: 362961, rate: 0.14 },
        { min: 362961, max: Infinity, rate: 0.15 },
      ],
      ontario: [
        { min: 0, max: 51446, rate: 0.0505 },
        { min: 51446, max: 102894, rate: 0.0915 },
        { min: 102894, max: 150000, rate: 0.1116 },
        { min: 150000, max: 220000, rate: 0.1216 },
        { min: 220000, max: Infinity, rate: 0.1316 },
      ],
    },
    federalBPA: 16129,
    provincialBPA: { manitoba: 15780, alberta: 22323, ontario: 12747 },
    federalSpouseAmount: 16129,
    provincialSpouseAmount: { manitoba: 9134, alberta: 22323, ontario: 10823 },
    provincialLowestRate: { manitoba: 0.108, alberta: 0.08, ontario: 0.0505 },
    cpp1MaxEarnings: 71300,
    cpp2MaxEarnings: 81200,
    cppExemption: 3500,
    cpp1Rate: 0.0595,
    cpp2Rate: 0.04,
    eiMaxInsurableEarnings: 65700,
    eiRate: 0.0164,
    rrspLimit: 32490,
    fhsaLimit: 8000,
    usdToCadRate: 1.35,
  },
  2026: {
    federalBrackets: [
      { min: 0, max: 58523, rate: 0.14 },
      { min: 58523, max: 117045, rate: 0.205 },
      { min: 117045, max: 181440, rate: 0.26 },
      { min: 181440, max: 258482, rate: 0.29 },
      { min: 258482, max: Infinity, rate: 0.33 },
    ],
    provincialBrackets: {
      manitoba: [
        { min: 0, max: 47000, rate: 0.108 },
        { min: 47000, max: 100000, rate: 0.1275 },
        { min: 100000, max: Infinity, rate: 0.174 },
      ],
      alberta: [
        { min: 0, max: 61200, rate: 0.08 },
        { min: 61200, max: 154259, rate: 0.10 },
        { min: 154259, max: 185111, rate: 0.12 },
        { min: 185111, max: 246813, rate: 0.13 },
        { min: 246813, max: 370220, rate: 0.14 },
        { min: 370220, max: Infinity, rate: 0.15 },
      ],
      ontario: [
        { min: 0, max: 53891, rate: 0.0505 },
        { min: 53891, max: 107785, rate: 0.0915 },
        { min: 107785, max: 150000, rate: 0.1116 },
        { min: 150000, max: 220000, rate: 0.1216 },
        { min: 220000, max: Infinity, rate: 0.1316 },
      ],
    },
    federalBPA: 16452,
    provincialBPA: { manitoba: 15780, alberta: 22769, ontario: 12989 },
    federalSpouseAmount: 16452,
    provincialSpouseAmount: { manitoba: 9134, alberta: 22769, ontario: 11029 },
    provincialLowestRate: { manitoba: 0.108, alberta: 0.08, ontario: 0.0505 },
    cpp1MaxEarnings: 74600,
    cpp2MaxEarnings: 85000,
    cppExemption: 3500,
    cpp1Rate: 0.0595,
    cpp2Rate: 0.04,
    eiMaxInsurableEarnings: 68900,
    eiRate: 0.0163,
    rrspLimit: 33810,
    fhsaLimit: 8000,
    usdToCadRate: 1.36,
  },
};

// Profession-specific expense types
const professions = [
  { id: 'general', name: 'General Employee', hasExpenses: false },
  { id: 'long-haul-trucker', name: 'Long Haul Truck Driver', hasExpenses: true },
  { id: 'transport-employee', name: 'Other Transport Employee', hasExpenses: true },
  { id: 'sales-commission', name: 'Commission Sales Employee', hasExpenses: true },
];

// CRA meal rate in USD
const truckDriverMealRateUSD = 23;
const truckDriverMealDeductionRate = 0.80;
const maxMealsPerDay = 3;

const calculateTax = (income: number, brackets: { min: number; max: number; rate: number }[]): number => {
  let tax = 0;
  let remainingIncome = income;

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;
    const taxableInBracket = Math.min(remainingIncome, bracket.max - bracket.min);
    tax += taxableInBracket * bracket.rate;
    remainingIncome -= taxableInBracket;
  }

  return tax;
};

type FilingStatus = 'single' | 'couple';

const TaxCalculator = () => {
  const [selectedYear, setSelectedYear] = useState<TaxYear>(2026);
  const [selectedProvince, setSelectedProvince] = useState<Province>('manitoba');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [profession, setProfession] = useState<string>('general');
  const [grossIncome, setGrossIncome] = useState<string>('');
  const [spouseIncome, setSpouseIncome] = useState<string>('');
  const [rrspContribution, setRrspContribution] = useState<string>('');
  const [fhsaContribution, setFhsaContribution] = useState<string>('');
  const [daysAway, setDaysAway] = useState<string>('');
  const [lodgingExpenses, setLodgingExpenses] = useState<string>('');
  const [hourlyWage, setHourlyWage] = useState<string>('');
  const [hoursPerWeek, setHoursPerWeek] = useState<string>('40');

  const yearData = taxData[selectedYear];
  const provBrackets = yearData.provincialBrackets[selectedProvince];
  const provBPA = yearData.provincialBPA[selectedProvince];
  const provSpouseAmount = yearData.provincialSpouseAmount[selectedProvince];
  const provLowestRate = yearData.provincialLowestRate[selectedProvince];
  const provName = provinceNames[selectedProvince];
  const provColors = provinceColors[selectedProvince];
  const truckDriverMealRate = truckDriverMealRateUSD * yearData.usdToCadRate;

  const calculations = useMemo(() => {
    const income = parseFloat(grossIncome) || 0;
    const spouseInc = filingStatus === 'couple' ? (parseFloat(spouseIncome) || 0) : 0;
    const rrsp = Math.min(parseFloat(rrspContribution) || 0, yearData.rrspLimit);
    // FHSA allows up to 2x the annual limit ($16,000) if previous year's room was unused
    const fhsa = Math.min(parseFloat(fhsaContribution) || 0, yearData.fhsaLimit * 2);
    const days = parseFloat(daysAway) || 0;
    const lodging = parseFloat(lodgingExpenses) || 0;

    const cpp1Pensionable = Math.max(0, Math.min(income, yearData.cpp1MaxEarnings) - yearData.cppExemption);
    const cpp1Contribution = cpp1Pensionable * yearData.cpp1Rate;
    const cpp2Pensionable = Math.max(0, Math.min(income, yearData.cpp2MaxEarnings) - yearData.cpp1MaxEarnings);
    const cpp2Contribution = cpp2Pensionable * yearData.cpp2Rate;
    const totalCppContribution = cpp1Contribution + cpp2Contribution;

    const eiInsurable = Math.min(income, yearData.eiMaxInsurableEarnings);
    const eiContribution = eiInsurable * yearData.eiRate;

    let mealExpenses = 0;
    let mealDeduction = 0;
    let lodgingDeduction = 0;
    
    if (profession === 'long-haul-trucker' && days > 0) {
      mealExpenses = days * maxMealsPerDay * truckDriverMealRate;
      mealDeduction = mealExpenses * truckDriverMealDeductionRate;
      lodgingDeduction = lodging;
    } else if (profession === 'transport-employee' && days > 0) {
      mealExpenses = days * maxMealsPerDay * truckDriverMealRate;
      mealDeduction = mealExpenses * 0.50;
      lodgingDeduction = lodging;
    }

    const employmentExpenses = mealDeduction + lodgingDeduction;
    const taxableIncome = Math.max(0, income - rrsp - fhsa - employmentExpenses);
    
    let federalSpouseCredit = 0;
    let provincialSpouseCredit = 0;
    
    if (filingStatus === 'couple') {
      const federalSpouseClaimable = Math.max(0, yearData.federalSpouseAmount - spouseInc);
      federalSpouseCredit = federalSpouseClaimable * 0.15;
      const provincialSpouseClaimable = Math.max(0, provSpouseAmount - spouseInc);
      provincialSpouseCredit = provincialSpouseClaimable * provLowestRate;
    }
    
    const federalTaxBeforeCredits = calculateTax(taxableIncome, yearData.federalBrackets);
    const federalTaxCredit = yearData.federalBPA * 0.15;
    const federalCppEiCredit = (totalCppContribution + eiContribution) * 0.15;
    const federalTax = Math.max(0, federalTaxBeforeCredits - federalTaxCredit - federalCppEiCredit - federalSpouseCredit);

    const provincialTaxBeforeCredits = calculateTax(taxableIncome, provBrackets);
    const provincialTaxCredit = provBPA * provLowestRate;
    const provincialCppEiCredit = (totalCppContribution + eiContribution) * provLowestRate;
    const provincialTax = Math.max(0, provincialTaxBeforeCredits - provincialTaxCredit - provincialCppEiCredit - provincialSpouseCredit);

    const totalTax = federalTax + provincialTax;
    const totalSpouseCredit = federalSpouseCredit + provincialSpouseCredit;
    
    const incomeAfterRrsp = income - rrsp;
    const incomeAfterFhsa = incomeAfterRrsp - fhsa;
    
    const taxSavingsFromRRSP = rrsp > 0 ? calculateTax(income, yearData.federalBrackets) + calculateTax(income, provBrackets) - 
      (calculateTax(incomeAfterRrsp, yearData.federalBrackets) + calculateTax(incomeAfterRrsp, provBrackets)) : 0;
    const taxSavingsFromFHSA = fhsa > 0 ? calculateTax(incomeAfterRrsp, yearData.federalBrackets) + calculateTax(incomeAfterRrsp, provBrackets) - 
      (calculateTax(incomeAfterFhsa, yearData.federalBrackets) + calculateTax(incomeAfterFhsa, provBrackets)) : 0;

    const effectiveRate = income > 0 ? (totalTax / income) * 100 : 0;
    const netIncome = income - totalTax - totalCppContribution - eiContribution;

    return {
      grossIncome: income,
      spouseIncome: spouseInc,
      rrspContribution: rrsp,
      fhsaContribution: fhsa,
      cpp1Contribution,
      cpp2Contribution,
      totalCppContribution,
      eiContribution,
      mealExpenses,
      mealDeduction,
      lodgingDeduction,
      employmentExpenses,
      taxableIncome,
      federalTax,
      provincialTax,
      federalSpouseCredit,
      provincialSpouseCredit,
      totalSpouseCredit,
      totalTax,
      taxSavingsFromRRSP,
      taxSavingsFromFHSA,
      totalDeductions: rrsp + fhsa + employmentExpenses,
      effectiveRate,
      netIncome,
    };
  }, [grossIncome, spouseIncome, rrspContribution, fhsaContribution, profession, daysAway, lodgingExpenses, selectedYear, yearData, truckDriverMealRate, filingStatus, provBrackets, provBPA, provSpouseAmount, provLowestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const formatBracket = (min: number, max: number) => {
    if (max === Infinity) return `Over $${min.toLocaleString()}`;
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  };

  const downloadPDF = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 36;
    const contentTop = 96;
    const contentBottom = pageH - 70;

    // ---------- 3D card primitive ----------
    type RGB = [number, number, number];
    const shadowRect = (x: number, y: number, w: number, h: number, r = 8) => {
      doc.setFillColor(15, 23, 42);
      doc.setGState(new (doc as unknown as { GState: new (o: { opacity: number }) => unknown }).GState({ opacity: 0.18 }));
      doc.roundedRect(x + 3, y + 4, w, h, r, r, 'F');
      doc.setGState(new (doc as unknown as { GState: new (o: { opacity: number }) => unknown }).GState({ opacity: 1 }));
    };
    const card = (
      x: number, y: number, w: number, h: number,
      fill: RGB, border?: RGB, r = 8,
    ) => {
      shadowRect(x, y, w, h, r);
      doc.setFillColor(...fill);
      if (border) {
        doc.setDrawColor(...border);
        doc.setLineWidth(1.2);
        doc.roundedRect(x, y, w, h, r, r, 'FD');
      } else {
        doc.roundedRect(x, y, w, h, r, r, 'F');
      }
      // subtle top highlight for 3D feel
      doc.setGState(new (doc as unknown as { GState: new (o: { opacity: number }) => unknown }).GState({ opacity: 0.35 }));
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(x + 1, y + 1, w - 2, 6, r, r, 'F');
      doc.setGState(new (doc as unknown as { GState: new (o: { opacity: number }) => unknown }).GState({ opacity: 1 }));
    };

    // ---------- Header / Footer on every page ----------
    const drawHeaderFooter = () => {
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        // Header gradient stripes (blue → deep blue)
        doc.setFillColor(29, 78, 216); doc.rect(0, 0, pageW, 44, 'F');
        doc.setFillColor(30, 64, 175); doc.rect(0, 44, pageW, 26, 'F');
        doc.setFillColor(249, 115, 22); doc.rect(0, 70, pageW, 4, 'F');

        // Logo mark
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(margin, 14, 44, 44, 8, 8, 'F');
        doc.setTextColor(29, 78, 216);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(20);
        doc.text('IA', margin + 22, 43, { align: 'center' });

        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(17);
        doc.text('Insurance with Arjun', margin + 56, 34);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(219, 234, 254);
        doc.text('Licensed Insurance & Financial Advisor  •  Canada', margin + 56, 50);

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9.5);
        doc.text('(431) 338-2078', pageW - margin, 30, { align: 'right' });
        doc.text('insurancewitharjun@gmail.com', pageW - margin, 44, { align: 'right' });
        doc.setTextColor(253, 186, 116);
        doc.text('www.insurancewitharjun.com', pageW - margin, 58, { align: 'right' });

        // Footer
        doc.setFillColor(249, 115, 22); doc.rect(0, pageH - 54, pageW, 4, 'F');
        doc.setFillColor(30, 64, 175); doc.rect(0, pageH - 50, pageW, 50, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.text('Arjun  —  Insurance with Arjun', margin, pageH - 30);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(219, 234, 254);
        doc.text('(431) 338-2078   |   insurancewitharjun@gmail.com   |   www.insurancewitharjun.com', margin, pageH - 16);
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.text(`Page ${i} of ${pageCount}`, pageW - margin, pageH - 22, { align: 'right' });
      }
    };

    let cursorY = contentTop;
    const ensureSpace = (needed: number) => {
      if (cursorY + needed > contentBottom) {
        doc.addPage();
        cursorY = contentTop;
      }
    };

    // ---------- Title block ----------
    card(margin, cursorY, pageW - margin * 2, 62, [239, 246, 255], [191, 219, 254], 10);
    doc.setTextColor(30, 58, 138);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(19);
    doc.text(`${selectedYear} Canadian Income Tax Report`, margin + 18, cursorY + 26);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(51, 65, 85);
    doc.text(
      `Province: ${provName}   •   Filing Status: ${filingStatus === 'couple' ? 'Married / Common-law' : 'Single'}   •   Generated: ${new Date().toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}`,
      margin + 18, cursorY + 46,
    );
    cursorY += 78;

    // ---------- KPI cards row (Gross / Tax / Net) ----------
    const kpiH = 78;
    const kpiGap = 12;
    const kpiW = (pageW - margin * 2 - kpiGap * 2) / 3;

    const drawKpi = (
      x: number, label: string, value: string, fill: RGB, accent: RGB,
    ) => {
      card(x, cursorY, kpiW, kpiH, fill, accent, 10);
      // Accent stripe on left
      doc.setFillColor(...accent);
      doc.roundedRect(x, cursorY, 6, kpiH, 3, 3, 'F');
      doc.setTextColor(...accent);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text(label.toUpperCase(), x + 16, cursorY + 22);
      doc.setTextColor(17, 24, 39);
      doc.setFontSize(18);
      doc.text(value, x + 16, cursorY + 52);
    };

    drawKpi(margin, 'Gross Income', formatCurrency(calculations.grossIncome), [239, 246, 255], [37, 99, 235]);
    drawKpi(margin + kpiW + kpiGap, 'Total Tax & Deductions', formatCurrency(calculations.totalTax + calculations.totalCppContribution + calculations.eiContribution), [254, 242, 242], [220, 38, 38]);
    drawKpi(margin + (kpiW + kpiGap) * 2, 'Net Take-Home', formatCurrency(calculations.netIncome), [236, 253, 245], [22, 163, 74]);
    cursorY += kpiH + 18;

    // ---------- Section: Income Breakdown ----------
    const sectionHeader = (title: string, fill: RGB) => {
      ensureSpace(30);
      card(margin, cursorY, pageW - margin * 2, 26, fill, undefined, 6);
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text(title, margin + 14, cursorY + 17);
      cursorY += 34;
    };

    sectionHeader('Income Breakdown', [30, 64, 175]);

    autoTable(doc, {
      startY: cursorY,
      head: [['Item', 'Amount (CAD)']],
      body: [
        ['Gross Income', formatCurrency(calculations.grossIncome)],
        ['Taxable Income (after deductions)', formatCurrency(calculations.taxableIncome)],
        [`Federal Tax`, formatCurrency(calculations.federalTax)],
        [`${provName} Provincial Tax`, formatCurrency(calculations.provincialTax)],
        ['Total Income Tax', formatCurrency(calculations.totalTax)],
        ['CPP Contribution', formatCurrency(calculations.totalCppContribution)],
        ['EI Premium', formatCurrency(calculations.eiContribution)],
        ['Effective Tax Rate', `${calculations.effectiveRate.toFixed(2)}%`],
      ],
      theme: 'grid',
      headStyles: { fillColor: [30, 64, 175], textColor: 255, fontStyle: 'bold' },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      styles: { fontSize: 10.5, cellPadding: 7, lineColor: [226, 232, 240] },
      columnStyles: {
        1: {
          halign: 'right', fontStyle: 'bold', textColor: [185, 28, 28],
        },
      },
      didParseCell: (data) => {
        // Highlight positive rows (income) in blue instead of red
        if (data.section === 'body' && data.column.index === 1) {
          const label = String(data.row.raw[0]);
          if (label.includes('Gross') || label.includes('Taxable')) {
            data.cell.styles.textColor = [29, 78, 216];
          } else if (label.includes('Effective')) {
            data.cell.styles.textColor = [17, 24, 39];
          }
        }
      },
      margin: { left: margin, right: margin },
    });
    cursorY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 18;

    // ---------- Section: Deductions & Credits (savings in green) ----------
    const deductionRows: (string | number)[][] = [];
    if (calculations.rrspContribution > 0) deductionRows.push(['RRSP Contribution', formatCurrency(calculations.rrspContribution)]);
    if (calculations.fhsaContribution > 0) deductionRows.push(['FHSA Contribution', formatCurrency(calculations.fhsaContribution)]);
    if (calculations.mealDeduction > 0) deductionRows.push(['Meal Deduction (Trucker)', formatCurrency(calculations.mealDeduction)]);
    if (calculations.lodgingDeduction > 0) deductionRows.push(['Lodging Deduction', formatCurrency(calculations.lodgingDeduction)]);
    if (calculations.totalSpouseCredit > 0) deductionRows.push(['Spousal Tax Credit', formatCurrency(calculations.totalSpouseCredit)]);
    if (calculations.taxSavingsFromRRSP > 0) deductionRows.push(['Tax Refund from RRSP', formatCurrency(calculations.taxSavingsFromRRSP)]);
    if (calculations.taxSavingsFromFHSA > 0) deductionRows.push(['Tax Refund from FHSA', formatCurrency(calculations.taxSavingsFromFHSA)]);

    if (deductionRows.length > 0) {
      sectionHeader('Deductions, Credits & Tax Savings', [22, 163, 74]);
      autoTable(doc, {
        startY: cursorY,
        head: [['Item', 'Amount (CAD)']],
        body: deductionRows,
        theme: 'grid',
        headStyles: { fillColor: [22, 163, 74], textColor: 255, fontStyle: 'bold' },
        alternateRowStyles: { fillColor: [240, 253, 244] },
        styles: { fontSize: 10.5, cellPadding: 7, lineColor: [187, 247, 208] },
        columnStyles: { 1: { halign: 'right', fontStyle: 'bold', textColor: [21, 128, 61] } },
        margin: { left: margin, right: margin },
      });
      cursorY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable.finalY + 18;
    }

    // ---------- Per-hour breakdown ----------
    const wage = parseFloat(hourlyWage) || 0;
    const hrs = parseFloat(hoursPerWeek) || 0;
    const totalHours = hrs * 52;
    if (wage > 0 && totalHours > 0) {
      const perHourDeductions = (calculations.totalTax + calculations.totalCppContribution + calculations.eiContribution) / totalHours;
      const perHourTakeHome = wage - perHourDeductions;
      sectionHeader(`Per-Hour Breakdown  (${formatCurrency(wage)}/hr × ${hrs} hrs/wk)`, [139, 92, 246]);

      const cardH = 74;
      const cardW = (pageW - margin * 2 - kpiGap * 2) / 3;
      const drawMini = (x: number, label: string, value: string, fill: RGB, accent: RGB) => {
        card(x, cursorY, cardW, cardH, fill, accent, 8);
        doc.setFillColor(...accent);
        doc.roundedRect(x, cursorY, 5, cardH, 2, 2, 'F');
        doc.setTextColor(...accent);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.text(label.toUpperCase(), x + 14, cursorY + 20);
        doc.setTextColor(17, 24, 39);
        doc.setFontSize(17);
        doc.text(value, x + 14, cursorY + 48);
        doc.setTextColor(100, 116, 139);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.text('per hour', x + 14, cursorY + 62);
      };
      drawMini(margin, 'Gross', formatCurrency(wage), [239, 246, 255], [37, 99, 235]);
      drawMini(margin + cardW + kpiGap, 'Deductions', `-${formatCurrency(perHourDeductions)}`, [254, 242, 242], [220, 38, 38]);
      drawMini(margin + (cardW + kpiGap) * 2, 'Take-Home', formatCurrency(perHourTakeHome), [236, 253, 245], [22, 163, 74]);
      cursorY += cardH + 10;
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text(`Based on ${totalHours.toLocaleString()} working hours per year. Includes federal + provincial tax, CPP and EI.`, margin, cursorY);
      cursorY += 18;
    }

    // ---------- Educational cards (page 2) ----------
    doc.addPage();
    cursorY = contentTop;

    sectionHeader('Understanding Your Numbers', [30, 64, 175]);

    type Info = { title: string; body: string; fill: RGB; accent: RGB };
    const infos: Info[] = [
      {
        title: 'Federal & Provincial Tax',
        body: 'Canada uses a progressive tax system — you only pay the higher rate on the income within each bracket. Your provincial tax stacks on top of federal tax, so your total marginal rate is the sum of both brackets you fall into.',
        fill: [254, 242, 242], accent: [220, 38, 38],
      },
      {
        title: 'CPP & EI (Payroll Deductions)',
        body: 'Canada Pension Plan (CPP) funds your retirement pension, disability and survivor benefits. Employment Insurance (EI) protects your income if you lose your job or take parental/medical leave. Both are mandatory up to yearly limits.',
        fill: [245, 243, 255], accent: [139, 92, 246],
      },
      {
        title: 'RRSP — Registered Retirement Savings Plan',
        body: 'Contributions are deducted from your taxable income, giving an immediate refund at your marginal rate. Growth is tax-sheltered until withdrawal. Ideal if your income today is higher than it will be in retirement.',
        fill: [236, 253, 245], accent: [22, 163, 74],
      },
      {
        title: 'FHSA — First Home Savings Account',
        body: 'Combines the best of RRSP and TFSA: contributions are tax-deductible AND withdrawals for a first home are completely tax-free. Annual limit $8,000 (max $16,000 with carry-forward), lifetime limit $40,000.',
        fill: [239, 246, 255], accent: [37, 99, 235],
      },
      {
        title: 'TFSA — Tax-Free Savings Account',
        body: 'No deduction going in, but every dollar of growth and every withdrawal is 100% tax-free. Perfect for emergency funds, short-to-medium term goals, or retirement income you want to keep off your tax return.',
        fill: [255, 247, 237], accent: [249, 115, 22],
      },
      {
        title: 'Spousal Tax Credit',
        body: 'If your spouse or common-law partner earned less than the basic personal amount, you can claim the difference as a non-refundable credit — reducing both your federal and provincial tax.',
        fill: [253, 242, 248], accent: [219, 39, 119],
      },
    ];

    // Two-column grid of info cards
    const colGap = 12;
    const colW = (pageW - margin * 2 - colGap) / 2;
    const cardHt = 96;
    for (let i = 0; i < infos.length; i++) {
      const col = i % 2;
      const x = margin + col * (colW + colGap);
      if (col === 0 && i > 0) cursorY += cardHt + colGap;
      ensureSpace(cardHt + 10);
      const info = infos[i];
      card(x, cursorY, colW, cardHt, info.fill, info.accent, 8);
      doc.setFillColor(...info.accent);
      doc.roundedRect(x, cursorY, 5, cardHt, 2, 2, 'F');
      doc.setTextColor(...info.accent);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(info.title, x + 14, cursorY + 20);
      doc.setTextColor(51, 65, 85);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9.5);
      const wrapped = doc.splitTextToSize(info.body, colW - 22);
      doc.text(wrapped, x + 14, cursorY + 36);
    }
    cursorY += cardHt + 20;

    // ---------- Personalized advice card ----------
    ensureSpace(120);
    const adviceH = 108;
    card(margin, cursorY, pageW - margin * 2, adviceH, [255, 251, 235], [245, 158, 11], 10);
    doc.setFillColor(245, 158, 11);
    doc.roundedRect(margin, cursorY, 6, adviceH, 3, 3, 'F');
    doc.setTextColor(146, 64, 14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('Personalized Recommendation', margin + 18, cursorY + 24);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(120, 53, 15);
    const marginalGuess = calculations.taxableIncome > 150000 ? 43 : calculations.taxableIncome > 100000 ? 37 : calculations.taxableIncome > 55000 ? 30 : 25;
    const suggestedRRSP = Math.min(Math.round(calculations.grossIncome * 0.18 / 500) * 500, yearData.rrspLimit);
    const advice = `Based on your ${formatCurrency(calculations.grossIncome)} income in ${provName}, your marginal rate is roughly ${marginalGuess}%. Contributing about ${formatCurrency(suggestedRRSP)} to your RRSP could refund up to ${formatCurrency(suggestedRRSP * marginalGuess / 100)}. If you don't own a home yet, opening an FHSA and contributing $8,000 gives an additional tax-free savings vehicle. Ask Arjun to build a plan that layers RRSP, FHSA, TFSA and insurance to protect the family alongside the tax savings.`;
    const wrapped = doc.splitTextToSize(advice, pageW - margin * 2 - 30);
    doc.text(wrapped, margin + 18, cursorY + 44);
    cursorY += adviceH + 18;

    // ---------- Contact CTA card ----------
    ensureSpace(110);
    const ctaH = 96;
    card(margin, cursorY, pageW - margin * 2, ctaH, [30, 64, 175], [30, 58, 138], 10);
    // Orange stripe on right for accent
    doc.setFillColor(249, 115, 22);
    doc.roundedRect(pageW - margin - 8, cursorY, 8, ctaH, 3, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text('Ready to save more tax next year?', margin + 20, cursorY + 28);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    doc.setTextColor(219, 234, 254);
    doc.text('Book a free consultation with Arjun — insurance, investments and tax-smart planning across Canada.', margin + 20, cursorY + 48);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(253, 186, 116);
    doc.text('Call (431) 338-2078   •   insurancewitharjun@gmail.com', margin + 20, cursorY + 74);

    // ---------- Disclaimer ----------
    cursorY += ctaH + 14;
    if (cursorY < contentBottom - 30) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      const disc = doc.splitTextToSize(
        'Disclaimer: This report is generated for illustrative purposes only using publicly available tax brackets and does not constitute tax, legal or financial advice. Actual amounts may vary based on additional credits, deductions and personal circumstances. Please consult a qualified tax professional before making financial decisions.',
        pageW - margin * 2,
      );
      doc.text(disc, margin, cursorY);
    }

    drawHeaderFooter();
    doc.save(`Tax-Report-${selectedYear}-${provName}.pdf`);
  };

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-900 to-teal-700 text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/55 to-teal-700/40 pointer-events-none" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <div className="flex items-center mb-6">
              <div className="card-3d p-4 rounded-xl bg-emerald-50 mr-6">
                <Calculator className="w-16 h-16 text-emerald-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Income Tax Calculator</h1>
                <p className="text-lg md:text-xl text-emerald-100">Federal & Provincial Tax Brackets</p>
              </div>
            </div>
            <p className="text-lg md:text-xl text-emerald-100 max-w-4xl">
              Calculate your income tax with CPP, EI, RRSP, FHSA deductions and profession-specific expenses. 
              Choose your province: Manitoba, Alberta, or Ontario.
            </p>
          </div>
        </section>

        {/* Year & Province Selection */}
        <section className="py-8 bg-gray-100/80">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              {/* Year Tabs */}
              <div className="flex gap-4">
                {([2020, 2025, 2026] as TaxYear[]).map((year) => (
                  <Button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 md:px-6 py-4 text-base md:text-lg font-bold transition-all ${
                      selectedYear === year
                        ? 'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-[0_4px_0_0_#065f46,0_6px_10px_rgba(6,95,70,0.3)] hover:shadow-[0_2px_0_0_#065f46,0_4px_6px_rgba(6,95,70,0.3)] hover:translate-y-[2px]'
                        : 'bg-gradient-to-b from-gray-200 to-gray-300 text-gray-700 shadow-[0_4px_0_0_#6b7280,0_6px_10px_rgba(107,114,128,0.25)] hover:shadow-[0_2px_0_0_#6b7280,0_4px_6px_rgba(107,114,128,0.25)] hover:translate-y-[2px] hover:from-gray-300 hover:to-gray-400'
                    }`}
                  >
                    {year} Tax Year
                  </Button>
                ))}
              </div>

              {/* Province Selector */}
              <div className="flex gap-3">
                {(['manitoba', 'alberta', 'ontario'] as Province[]).map((prov) => (
                  <Button
                    key={prov}
                    onClick={() => setSelectedProvince(prov)}
                    className={`px-5 py-4 text-base font-bold transition-all flex items-center gap-2 ${
                      selectedProvince === prov
                        ? prov === 'manitoba'
                          ? 'bg-gradient-to-b from-green-500 to-green-600 text-white shadow-[0_4px_0_0_#166534,0_6px_10px_rgba(22,101,52,0.3)] hover:shadow-[0_2px_0_0_#166534,0_4px_6px_rgba(22,101,52,0.3)] hover:translate-y-[2px]'
                          : prov === 'alberta'
                          ? 'bg-gradient-to-b from-sky-500 to-sky-600 text-white shadow-[0_4px_0_0_#0369a1,0_6px_10px_rgba(3,105,161,0.3)] hover:shadow-[0_2px_0_0_#0369a1,0_4px_6px_rgba(3,105,161,0.3)] hover:translate-y-[2px]'
                          : 'bg-gradient-to-b from-red-500 to-red-600 text-white shadow-[0_4px_0_0_#991b1b,0_6px_10px_rgba(153,27,27,0.3)] hover:shadow-[0_2px_0_0_#991b1b,0_4px_6px_rgba(153,27,27,0.3)] hover:translate-y-[2px]'
                        : 'bg-gradient-to-b from-gray-200 to-gray-300 text-gray-700 shadow-[0_4px_0_0_#6b7280,0_6px_10px_rgba(107,114,128,0.25)] hover:shadow-[0_2px_0_0_#6b7280,0_4px_6px_rgba(107,114,128,0.25)] hover:translate-y-[2px] hover:from-gray-300 hover:to-gray-400'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    {provinceNames[prov]}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tax Brackets Section */}
        <section className="py-16 bg-white/85">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{selectedYear} Tax Brackets — {provName}</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Federal Tax Brackets */}
              <div className="bg-blue-50 p-8 rounded-xl card-3d">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 text-blue-600 mr-3" />
                  Federal Tax Brackets {selectedYear}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-blue-200">
                        <th className="text-left py-3 px-2 text-gray-700">Income Range</th>
                        <th className="text-right py-3 px-2 text-gray-700">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearData.federalBrackets.map((bracket, index) => (
                        <tr key={index} className={index < yearData.federalBrackets.length - 1 ? "border-b border-blue-100" : ""}>
                          <td className="py-3 px-2">{formatBracket(bracket.min, bracket.max)}</td>
                          <td className="text-right py-3 px-2 font-semibold text-blue-600">{(bracket.rate * 100).toFixed(1)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Basic Personal Amount:</strong> ${yearData.federalBPA.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Provincial Tax Brackets */}
              <div className={`${provColors.bg} p-8 rounded-xl card-3d`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className={`w-8 h-8 ${provColors.text} mr-3`} />
                  {provName} Tax Brackets {selectedYear}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`border-b-2 ${provColors.border}`}>
                        <th className="text-left py-3 px-2 text-gray-700">Income Range</th>
                        <th className="text-right py-3 px-2 text-gray-700">Tax Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {provBrackets.map((bracket, index) => (
                        <tr key={index} className={index < provBrackets.length - 1 ? `border-b ${provColors.border}` : ""}>
                          <td className="py-3 px-2">{formatBracket(bracket.min, bracket.max)}</td>
                          <td className={`text-right py-3 px-2 font-semibold ${provColors.text}`}>{(bracket.rate * 100).toFixed(2)}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className={`mt-4 p-3 ${provColors.light} rounded-lg`}>
                  <p className="text-sm text-gray-700">
                    <strong>Basic Personal Amount:</strong> ${provBPA.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* CPP/EI Info */}
            <div className="grid lg:grid-cols-3 gap-6 mb-16">
              <div className="bg-purple-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 text-purple-600 mr-2" />
                  CPP (Base) {selectedYear}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Earnings (YMPE):</span>
                    <span className="font-semibold">${yearData.cpp1MaxEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exemption:</span>
                    <span className="font-semibold">${yearData.cppExemption.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">{(yearData.cpp1Rate * 100).toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              {yearData.cpp2Rate > 0 ? (
                <div className="bg-indigo-50 p-6 rounded-xl card-3d">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <User className="w-6 h-6 text-indigo-600 mr-2" />
                    CPP2 (Enhanced) {selectedYear}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Earnings (YAMPE):</span>
                      <span className="font-semibold">${yearData.cpp2MaxEarnings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Range:</span>
                      <span className="font-semibold">${yearData.cpp1MaxEarnings.toLocaleString()} - ${yearData.cpp2MaxEarnings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rate:</span>
                      <span className="font-semibold">{(yearData.cpp2Rate * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-xl card-3d">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <User className="w-6 h-6 text-gray-500 mr-2" />
                    CPP2 (Enhanced) {selectedYear}
                  </h4>
                  <p className="text-sm text-gray-600">
                    CPP2 (second additional contribution) did not exist in {selectedYear}. It was introduced in 2024.
                  </p>
                </div>
              )}

              <div className="bg-orange-50 p-6 rounded-xl card-3d">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 text-orange-600 mr-2" />
                  EI {selectedYear}
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Insurable:</span>
                    <span className="font-semibold">${yearData.eiMaxInsurableEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span className="font-semibold">{(yearData.eiRate * 100).toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Premium:</span>
                    <span className="font-semibold">{formatCurrency(yearData.eiMaxInsurableEarnings * yearData.eiRate)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Calculator */}
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{selectedYear} Income Tax Calculator — {provName}</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Enter Your Information</h3>
                  
                  <div className="space-y-6">
                    {/* Hourly Wage Quick Fill */}
                    <div className="p-4 bg-emerald-50 rounded-lg border-2 border-emerald-200">
                      <Label className="text-gray-800 font-semibold flex items-center mb-3">
                        <DollarSign className="w-5 h-5 text-emerald-600 mr-2" />
                        Paid Hourly? Calculate Per-Hour Take-Home
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label htmlFor="hourlyWage" className="text-xs text-gray-600 mb-1 block">Hourly Wage (CAD)</Label>
                          <Input
                            id="hourlyWage"
                            type="number"
                            placeholder="e.g., 40"
                            value={hourlyWage}
                            onChange={(e) => setHourlyWage(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="hoursPerWeek" className="text-xs text-gray-600 mb-1 block">Hours / Week</Label>
                          <Input
                            id="hoursPerWeek"
                            type="number"
                            placeholder="e.g., 40"
                            value={hoursPerWeek}
                            onChange={(e) => setHoursPerWeek(e.target.value)}
                          />
                        </div>
                      </div>
                      <Button
                        type="button"
                        onClick={() => {
                          const w = parseFloat(hourlyWage) || 0;
                          const h = parseFloat(hoursPerWeek) || 0;
                          if (w > 0 && h > 0) setGrossIncome(String(Math.round(w * h * 52)));
                        }}
                        className="mt-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        Apply as Annual Income (× 52 weeks)
                      </Button>
                      <p className="text-xs text-gray-600 mt-2">
                        Fills gross income below. Per-hour take-home breakdown appears in results.
                      </p>
                    </div>

                    {/* Filing Status */}
                    <div>
                      <Label className="text-gray-700 font-medium flex items-center mb-2">
                        <Users className="w-5 h-5 text-gray-500 mr-2" />
                        Filing Status
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setFilingStatus('single')}
                          className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                            filingStatus === 'single'
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <User className="w-5 h-5" />
                          <span className="font-medium">Single</span>
                        </button>
                        <button
                          onClick={() => setFilingStatus('couple')}
                          className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                            filingStatus === 'couple'
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}
                        >
                          <Heart className="w-5 h-5" />
                          <span className="font-medium">Couple</span>
                        </button>
                      </div>
                    </div>

                    {/* Profession Selector */}
                    <div>
                      <Label htmlFor="profession" className="text-gray-700 font-medium flex items-center mb-2">
                        <Briefcase className="w-5 h-5 text-gray-500 mr-2" />
                        Select Your Profession
                      </Label>
                      <Select value={profession} onValueChange={setProfession}>
                        <SelectTrigger className="text-lg">
                          <SelectValue placeholder="Select profession" />
                        </SelectTrigger>
                        <SelectContent>
                          {professions.map((prof) => (
                            <SelectItem key={prof.id} value={prof.id}>
                              {prof.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="grossIncome" className="text-gray-700 font-medium flex items-center mb-2">
                        <DollarSign className="w-5 h-5 text-gray-500 mr-2" />
                        Your Gross Annual Income
                      </Label>
                      <Input
                        id="grossIncome"
                        type="number"
                        placeholder="e.g., 75000"
                        value={grossIncome}
                        onChange={(e) => setGrossIncome(e.target.value)}
                        className="text-lg"
                      />
                    </div>

                    {/* Spouse Income - only shown for couples */}
                    {filingStatus === 'couple' && (
                      <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                        <Label htmlFor="spouseIncome" className="text-gray-700 font-medium flex items-center mb-2">
                          <Heart className="w-5 h-5 text-pink-500 mr-2" />
                          Spouse's Net Income
                        </Label>
                        <Input
                          id="spouseIncome"
                          type="number"
                          placeholder="Enter 0 for non-working spouse"
                          value={spouseIncome}
                          onChange={(e) => setSpouseIncome(e.target.value)}
                          className="text-lg"
                        />
                        <p className="text-sm text-pink-700 mt-2">
                          You may claim a spousal tax credit if your spouse has low or no income. 
                          The credit is reduced by your spouse's net income.
                        </p>
                        <div className="mt-3 p-2 bg-pink-100 rounded text-xs text-pink-800">
                          <p className="font-semibold mb-1">{selectedYear} Spousal Amount Limits:</p>
                          <p>Federal: ${yearData.federalSpouseAmount.toLocaleString()} (max credit: ${(yearData.federalSpouseAmount * 0.15).toFixed(0)})</p>
                          <p>{provName}: ${provSpouseAmount.toLocaleString()} (max credit: ${(provSpouseAmount * provLowestRate).toFixed(0)})</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="rrspContribution" className="text-gray-700 font-medium flex items-center mb-2">
                        <PiggyBank className="w-5 h-5 text-blue-500 mr-2" />
                        RRSP Contribution
                      </Label>
                      <Input
                        id="rrspContribution"
                        type="number"
                        placeholder="e.g., 10000"
                        value={rrspContribution}
                        onChange={(e) => setRrspContribution(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-sm text-gray-500 mt-1">{selectedYear} Limit: ${yearData.rrspLimit.toLocaleString()} or 18% of income</p>
                    </div>

                    {yearData.fhsaLimit > 0 ? (
                      <div>
                        <Label htmlFor="fhsaContribution" className="text-gray-700 font-medium flex items-center mb-2">
                          <Home className="w-5 h-5 text-green-500 mr-2" />
                          FHSA Contribution
                        </Label>
                        <Input
                          id="fhsaContribution"
                          type="number"
                          placeholder="e.g., 8000"
                          value={fhsaContribution}
                          onChange={(e) => setFhsaContribution(e.target.value)}
                          className="text-lg"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Annual Limit: ${yearData.fhsaLimit.toLocaleString()} • Max ${(yearData.fhsaLimit * 2).toLocaleString()} if you didn't contribute last year (carry-forward)
                        </p>
                      </div>
                    ) : (
                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm text-amber-800">
                          <strong>FHSA not available in {selectedYear}.</strong> The First Home Savings Account launched on April 1, 2023.
                        </p>
                      </div>
                    )}

                    {/* Trucker-specific fields */}
                    {(profession === 'long-haul-trucker' || profession === 'transport-employee') && (
                      <div className="border-t pt-6 mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Truck className="w-5 h-5 text-orange-500 mr-2" />
                          {profession === 'long-haul-trucker' ? 'Long Haul Truck Driver Expenses' : 'Transport Employee Expenses'}
                        </h4>
                        
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="daysAway" className="text-gray-700 font-medium mb-2 block">
                              Days Away From Home (Eligible Trips)
                            </Label>
                            <Input
                              id="daysAway"
                              type="number"
                              placeholder="e.g., 200"
                              value={daysAway}
                              onChange={(e) => setDaysAway(e.target.value)}
                              className="text-lg"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                              Meals: ${truckDriverMealRate.toFixed(2)}/meal × 3 meals/day × {profession === 'long-haul-trucker' ? '80%' : '50%'} deductible
                            </p>
                          </div>

                          <div>
                            <Label htmlFor="lodgingExpenses" className="text-gray-700 font-medium mb-2 block">
                              Lodging Expenses (Total Annual)
                            </Label>
                            <Input
                              id="lodgingExpenses"
                              type="number"
                              placeholder="e.g., 5000"
                              value={lodgingExpenses}
                              onChange={(e) => setLodgingExpenses(e.target.value)}
                              className="text-lg"
                            />
                            <p className="text-sm text-gray-500 mt-1">100% deductible (keep receipts)</p>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <h5 className="font-semibold text-orange-800 mb-2">CRA Simplified Method Rates</h5>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Meal rate: <strong>$23 USD per meal</strong> (~${truckDriverMealRate.toFixed(2)} CAD)</li>
                            <li>• Maximum: 3 meals per day</li>
                            <li>• Long-haul truckers: <strong>80% deductible</strong></li>
                            <li>• Other transport: 50% deductible</li>
                            <li>• Lodging: 100% deductible (receipts required)</li>
                          </ul>
                          <p className="text-xs text-orange-600 mt-2">
                            * Long-haul = GVW &gt; 11,788 kg, 160+ km from base, 24+ hours away
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <Info className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-yellow-800">
                        This calculator provides estimates based on {selectedYear} tax brackets for {provName}. 
                        Actual rates may vary. Consult a tax professional for personalized advice.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl card-3d">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{selectedYear} Tax Results — {provName}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-emerald-200">
                      <span className="text-gray-600">Gross Income:</span>
                      <span className="font-semibold">{formatCurrency(calculations.grossIncome)}</span>
                    </div>

                    {/* CPP/EI Deductions */}
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Payroll Deductions</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-purple-700">CPP (Base):</span>
                          <span className="font-semibold text-purple-700">-{formatCurrency(calculations.cpp1Contribution)}</span>
                        </div>
                        {calculations.cpp2Contribution > 0 && (
                          <div className="flex justify-between">
                            <span className="text-purple-700">CPP2 (Enhanced):</span>
                            <span className="font-semibold text-purple-700">-{formatCurrency(calculations.cpp2Contribution)}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-purple-700">EI Premium:</span>
                          <span className="font-semibold text-purple-700">-{formatCurrency(calculations.eiContribution)}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-purple-200">
                          <span className="text-purple-800 font-medium">Total CPP + EI:</span>
                          <span className="font-bold text-purple-800">-{formatCurrency(calculations.totalCppContribution + calculations.eiContribution)}</span>
                        </div>
                      </div>
                    </div>

                    {calculations.totalDeductions > 0 && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Tax Deductions</h4>
                        <div className="space-y-2 text-sm">
                          {calculations.rrspContribution > 0 && (
                            <div className="flex justify-between">
                              <span className="text-blue-700 flex items-center">
                                <TrendingDown className="w-4 h-4 mr-1" />
                                RRSP:
                              </span>
                              <span className="font-semibold text-blue-700">-{formatCurrency(calculations.rrspContribution)}</span>
                            </div>
                          )}
                          {calculations.fhsaContribution > 0 && (
                            <div className="flex justify-between">
                              <span className="text-green-700 flex items-center">
                                <TrendingDown className="w-4 h-4 mr-1" />
                                FHSA:
                              </span>
                              <span className="font-semibold text-green-700">-{formatCurrency(calculations.fhsaContribution)}</span>
                            </div>
                          )}
                          {calculations.employmentExpenses > 0 && (
                            <>
                              <div className="flex justify-between">
                                <span className="text-orange-700 flex items-center">
                                  <TrendingDown className="w-4 h-4 mr-1" />
                                  Meal Deduction:
                                </span>
                                <span className="font-semibold text-orange-700">-{formatCurrency(calculations.mealDeduction)}</span>
                              </div>
                              {calculations.lodgingDeduction > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-orange-700 flex items-center">
                                    <TrendingDown className="w-4 h-4 mr-1" />
                                    Lodging Deduction:
                                  </span>
                                  <span className="font-semibold text-orange-700">-{formatCurrency(calculations.lodgingDeduction)}</span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Spousal Tax Credit */}
                    {calculations.totalSpouseCredit > 0 && (
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-pink-800 mb-2 flex items-center">
                          <Heart className="w-4 h-4 mr-2" />
                          Spousal Tax Credit
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-pink-700">Federal Spouse Credit:</span>
                            <span className="font-semibold text-pink-700">{formatCurrency(calculations.federalSpouseCredit)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-pink-700">{provName} Spouse Credit:</span>
                            <span className="font-semibold text-pink-700">{formatCurrency(calculations.provincialSpouseCredit)}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-pink-200">
                            <span className="text-pink-800 font-medium">Total Tax Savings:</span>
                            <span className="font-bold text-pink-800">{formatCurrency(calculations.totalSpouseCredit)}</span>
                          </div>
                        </div>
                        <p className="text-xs text-pink-600 mt-2">
                          * Based on spouse's net income of {formatCurrency(calculations.spouseIncome)}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between py-2 border-b border-emerald-200 bg-white/50 px-2 rounded">
                      <span className="text-gray-700 font-medium">Taxable Income:</span>
                      <span className="font-bold">{formatCurrency(calculations.taxableIncome)}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-emerald-200">
                      <span className="text-gray-600">Federal Tax:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(calculations.federalTax)}</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-emerald-200">
                      <span className="text-gray-600">{provName} Tax:</span>
                      <span className="font-semibold text-red-600">{formatCurrency(calculations.provincialTax)}</span>
                    </div>

                    <div className="flex justify-between py-3 bg-red-100 px-3 rounded-lg">
                      <span className="text-gray-900 font-bold">Total Income Tax:</span>
                      <span className="font-bold text-red-700 text-xl">{formatCurrency(calculations.totalTax)}</span>
                    </div>

                    <div className="flex justify-between py-3 bg-emerald-100 px-3 rounded-lg">
                      <span className="text-gray-900 font-bold">Net Income (After Tax & Deductions):</span>
                      <span className="font-bold text-emerald-700 text-xl">{formatCurrency(calculations.netIncome)}</span>
                    </div>

                    <div className="flex justify-between py-2 bg-gray-100 px-3 rounded-lg">
                      <span className="text-gray-700 font-medium">Effective Tax Rate:</span>
                      <span className="font-bold text-gray-900">{calculations.effectiveRate.toFixed(2)}%</span>
                    </div>

                    {(calculations.taxSavingsFromRRSP > 0 || calculations.taxSavingsFromFHSA > 0) && (
                      <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3">💰 Your Tax Savings from Investments</h4>
                        {calculations.taxSavingsFromRRSP > 0 && (
                          <div className="flex justify-between mb-2">
                            <span className="text-green-700">RRSP Tax Savings:</span>
                            <span className="font-bold text-green-700">{formatCurrency(calculations.taxSavingsFromRRSP)}</span>
                          </div>
                        )}
                        {calculations.taxSavingsFromFHSA > 0 && (
                          <div className="flex justify-between mb-2">
                            <span className="text-green-700">FHSA Tax Savings:</span>
                            <span className="font-bold text-green-700">{formatCurrency(calculations.taxSavingsFromFHSA)}</span>
                          </div>
                        )}
                        <div className="flex justify-between pt-2 border-t border-green-300">
                          <span className="text-green-800 font-bold">Total Tax Refund from Investments:</span>
                          <span className="font-bold text-green-800 text-lg">
                            {formatCurrency(calculations.taxSavingsFromRRSP + calculations.taxSavingsFromFHSA)}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Per-Hour Breakdown */}
                    {(() => {
                      const wage = parseFloat(hourlyWage) || 0;
                      const hrs = parseFloat(hoursPerWeek) || 0;
                      const totalHours = hrs * 52;
                      if (wage <= 0 || totalHours <= 0) return null;
                      const totalDeductionsPerYear = calculations.totalTax + calculations.totalCppContribution + calculations.eiContribution;
                      const perHourDeductions = totalDeductionsPerYear / totalHours;
                      const perHourTakeHome = wage - perHourDeductions;
                      return (
                        <div className="mt-4 p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg border-2 border-emerald-300">
                          <h4 className="font-bold text-emerald-900 mb-3 flex items-center">
                            <DollarSign className="w-5 h-5 mr-2" />
                            Per-Hour Breakdown ({formatCurrency(wage)}/hr × {hrs} hrs/week)
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-700">Gross Per Hour:</span>
                              <span className="font-semibold">{formatCurrency(wage)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-red-700">Tax + CPP + EI per Hour:</span>
                              <span className="font-semibold text-red-700">-{formatCurrency(perHourDeductions)}</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-emerald-300 bg-white/60 px-2 py-2 rounded">
                              <span className="text-emerald-900 font-bold">Take-Home Per Hour:</span>
                              <span className="font-bold text-emerald-700 text-lg">{formatCurrency(perHourTakeHome)}</span>
                            </div>
                            <p className="text-xs text-gray-600 mt-2">
                              Based on {totalHours.toLocaleString()} working hours/year. Deductions include federal + provincial tax, CPP, and EI.
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-xl text-white text-center card-3d">
                <h3 className="text-2xl font-bold mb-4">Need Help Maximizing Your Tax Savings?</h3>
                <p className="mb-6 text-emerald-100">
                  Get personalized advice on RRSP and FHSA contributions to optimize your tax situation.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/investment-types/rrsp" className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors btn-3d">
                    Learn About RRSP
                  </Link>
                  <Link to="/investment-types/fhsa" className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors btn-3d">
                    Learn About FHSA
                  </Link>
                  <Link to="/quote" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors btn-3d">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {calculations.grossIncome > 0 && (
        <button
          onClick={downloadPDF}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-4 rounded-2xl shadow-2xl border-2 border-white flex flex-col items-center gap-1 transition-all hover:scale-105 active:translate-y-1"
          title="Download PDF Report"
        >
          <Download className="w-6 h-6" />
          <span className="text-xs font-bold leading-tight">Download<br/>PDF</span>
        </button>
      )}
    </div>
  );
};

export default TaxCalculator;