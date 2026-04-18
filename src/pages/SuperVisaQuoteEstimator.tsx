import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Phone, Mail, MessageCircle, Loader2, CheckCircle2, Star, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ApplicantType = 'single' | 'couple';
type Gender = 'male' | 'female';
type YesNo = 'yes' | 'no';

interface QuoteOption {
  deductible: number;
  premium: number;
  highlight?: boolean;
}

const COVERAGE_OPTIONS = [100000, 150000, 200000, 500000, 1000000];
const DEDUCTIBLES = [0, 100, 500, 1000, 3000];

const calcAge = (dob: string): number => {
  if (!dob) return 0;
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

// Realistic Super Visa rate estimator (per person, 365 days)
// Based on typical Canadian Super Visa market rates (Manulife, GMS, Tugo, etc.)
const baseDailyRate = (age: number, coverage: number): number => {
  let rate = 0;
  if (age < 40) rate = 1.8;
  else if (age < 55) rate = 2.4;
  else if (age < 60) rate = 3.2;
  else if (age < 65) rate = 4.1;
  else if (age < 70) rate = 5.8;
  else if (age < 75) rate = 8.2;
  else if (age < 80) rate = 11.5;
  else if (age < 85) rate = 15.8;
  else rate = 21.0;

  // Coverage multiplier (baseline = $100k)
  const covMult =
    coverage === 100000 ? 1.0 :
    coverage === 150000 ? 1.18 :
    coverage === 200000 ? 1.32 :
    coverage === 500000 ? 1.85 :
    coverage === 1000000 ? 2.45 : 1.0;

  return rate * covMult;
};

const deductibleDiscount = (deductible: number): number => {
  switch (deductible) {
    case 0: return 1.15;
    case 100: return 1.0;
    case 500: return 0.92;
    case 1000: return 0.85;
    case 3000: return 0.74;
    default: return 1.0;
  }
};

const computeQuotes = (
  ages: number[],
  coverage: number,
  preExisting: boolean,
  days: number
): QuoteOption[] => {
  return DEDUCTIBLES.map((ded) => {
    const total = ages.reduce((sum, age) => {
      const daily = baseDailyRate(age, coverage) * deductibleDiscount(ded);
      const preMult = preExisting && age >= 60 ? 1.35 : preExisting ? 1.18 : 1.0;
      return sum + daily * days * preMult;
    }, 0);
    return { deductible: ded, premium: Math.round(total) };
  });
};

const SuperVisaQuoteEstimator = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<'form' | 'loading' | 'results'>('form');
  const [applicantType, setApplicantType] = useState<ApplicantType>('single');
  const [dob1, setDob1] = useState('');
  const [dob2, setDob2] = useState('');
  const [gender1, setGender1] = useState<Gender>('male');
  const [gender2, setGender2] = useState<Gender>('female');
  const [preExisting, setPreExisting] = useState<YesNo>('no');
  const [arrivalDate, setArrivalDate] = useState('');
  const [coverage, setCoverage] = useState<number>(100000);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quotes, setQuotes] = useState<QuoteOption[]>([]);

  const cheapest = useMemo(
    () => (quotes.length ? Math.min(...quotes.map((q) => q.premium)) : 0),
    [quotes]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob1 || !arrivalDate) {
      toast({ title: 'Missing info', description: 'Please fill all required fields.', variant: 'destructive' });
      return;
    }
    if (applicantType === 'couple' && !dob2) {
      toast({ title: 'Missing info', description: 'Please enter both dates of birth.', variant: 'destructive' });
      return;
    }
    const age1 = calcAge(dob1);
    if (age1 < 18 || age1 > 99) {
      toast({ title: 'Invalid age', description: 'Age must be between 18 and 99.', variant: 'destructive' });
      return;
    }
    const ages = applicantType === 'couple' ? [age1, calcAge(dob2)] : [age1];
    setStep('loading');
    setTimeout(() => {
      setQuotes(computeQuotes(ages, coverage, preExisting === 'yes', 365));
      setStep('results');
    }, 1800);
  };

  const buildLeadMessage = (selectedDed?: number, premium?: number) => {
    const ages = applicantType === 'couple'
      ? `${calcAge(dob1)} & ${calcAge(dob2)}`
      : `${calcAge(dob1)}`;
    return [
      `Hi Arjun, I'd like a Super Visa Insurance quote.`,
      ``,
      `Name: ${name || 'N/A'}`,
      `Phone: ${phone || 'N/A'}`,
      `Email: ${email || 'N/A'}`,
      `Type: ${applicantType === 'couple' ? 'Couple' : 'Single'}`,
      `Age(s): ${ages}`,
      `Gender: ${applicantType === 'couple' ? `${gender1} & ${gender2}` : gender1}`,
      `Pre-existing conditions: ${preExisting}`,
      `Arrival date: ${arrivalDate}`,
      `Coverage: $${coverage.toLocaleString()}`,
      selectedDed !== undefined ? `Selected deductible: $${selectedDed} (~$${premium?.toLocaleString()})` : '',
    ].filter(Boolean).join('\n');
  };

  const sendWhatsApp = (ded?: number, premium?: number) => {
    const msg = encodeURIComponent(buildLeadMessage(ded, premium));
    window.open(`https://wa.me/14313382078?text=${msg}`, '_blank');
  };

  const sendEmail = (ded?: number, premium?: number) => {
    const subject = encodeURIComponent('Super Visa Insurance Quote Request');
    const body = encodeURIComponent(buildLeadMessage(ded, premium));
    window.location.href = `mailto:insurancewitharjun@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Super Visa Insurance Quote Estimator</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Get instant estimated quotes for Super Visa Insurance. Compare deductible options and
            connect with Arjun for the best final price.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {step === 'form' && (
          <Card className="shadow-xl border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Tell us about the applicant(s)</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Applicant type */}
                <div>
                  <Label className="text-base font-semibold">Applicant Type</Label>
                  <RadioGroup
                    value={applicantType}
                    onValueChange={(v) => setApplicantType(v as ApplicantType)}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single">Single Person</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="couple" id="couple" />
                      <Label htmlFor="couple">Couple</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Applicant 1 */}
                <div className="grid md:grid-cols-2 gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                  <div className="md:col-span-2 font-semibold text-blue-900">
                    {applicantType === 'couple' ? 'Applicant 1' : 'Applicant'}
                  </div>
                  <div>
                    <Label htmlFor="dob1">Date of Birth *</Label>
                    <Input id="dob1" type="date" value={dob1} onChange={(e) => setDob1(e.target.value)} required />
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <RadioGroup value={gender1} onValueChange={(v) => setGender1(v as Gender)} className="flex gap-4 mt-2">
                      <div className="flex items-center space-x-2"><RadioGroupItem value="male" id="m1" /><Label htmlFor="m1">Male</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="female" id="f1" /><Label htmlFor="f1">Female</Label></div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Applicant 2 */}
                {applicantType === 'couple' && (
                  <div className="grid md:grid-cols-2 gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
                    <div className="md:col-span-2 font-semibold text-blue-900">Applicant 2</div>
                    <div>
                      <Label htmlFor="dob2">Date of Birth *</Label>
                      <Input id="dob2" type="date" value={dob2} onChange={(e) => setDob2(e.target.value)} required />
                    </div>
                    <div>
                      <Label>Gender</Label>
                      <RadioGroup value={gender2} onValueChange={(v) => setGender2(v as Gender)} className="flex gap-4 mt-2">
                        <div className="flex items-center space-x-2"><RadioGroupItem value="male" id="m2" /><Label htmlFor="m2">Male</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="female" id="f2" /><Label htmlFor="f2">Female</Label></div>
                      </RadioGroup>
                    </div>
                  </div>
                )}

                {/* Other details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="arrival">Date of Arrival in Canada *</Label>
                    <Input id="arrival" type="date" value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="coverage">Coverage Amount</Label>
                    <Select value={coverage.toString()} onValueChange={(v) => setCoverage(Number(v))}>
                      <SelectTrigger id="coverage"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {COVERAGE_OPTIONS.map((c) => (
                          <SelectItem key={c} value={c.toString()}>${c.toLocaleString()}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Pre-existing Medical Conditions?</Label>
                  <RadioGroup value={preExisting} onValueChange={(v) => setPreExisting(v as YesNo)} className="flex gap-6 mt-2">
                    <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="pno" /><Label htmlFor="pno">No</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="pyes" /><Label htmlFor="pyes">Yes</Label></div>
                  </RadioGroup>
                </div>

                {/* Contact (optional but encouraged) */}
                <div className="grid md:grid-cols-3 gap-4 p-4 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="md:col-span-3 font-semibold text-orange-900">Your contact info (optional — for follow-up)</div>
                  <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-6">
                  Get My Quotes
                </Button>

                <p className="text-xs text-gray-500 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Quotes shown are estimates based on standard market rates and are subject to underwriting and final approval by the insurer.
                </p>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 'loading' && (
          <div className="text-center py-20">
            <Loader2 className="w-16 h-16 text-blue-700 animate-spin mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Getting best quotes for you…</h2>
            <p className="text-gray-600">Comparing rates across deductible options</p>
          </div>
        )}

        {step === 'results' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Your Estimated Quotes</h2>
              <p className="text-gray-600">
                Coverage: <strong>${coverage.toLocaleString()}</strong> · Duration: <strong>365 days</strong> ·{' '}
                {applicantType === 'couple' ? '2 applicants' : '1 applicant'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {quotes.map((q) => {
                const isBest = q.premium === cheapest;
                return (
                  <Card
                    key={q.deductible}
                    className={`relative transition-all hover:shadow-lg ${
                      isBest ? 'border-2 border-orange-400 shadow-lg scale-105' : 'border-blue-100'
                    }`}
                  >
                    {isBest && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" /> BEST PRICE
                      </div>
                    )}
                    <CardHeader className="pb-2 text-center">
                      <p className="text-sm text-gray-500">Deductible</p>
                      <CardTitle className="text-2xl text-blue-900">${q.deductible.toLocaleString()}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-3">
                      <div>
                        <p className="text-3xl font-bold text-blue-700">${q.premium.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">total / year</p>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-1 text-left">
                        <li className="flex gap-1"><CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" /> Emergency medical</li>
                        <li className="flex gap-1"><CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" /> Hospitalization</li>
                        <li className="flex gap-1"><CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" /> Repatriation</li>
                      </ul>
                      <Button
                        size="sm"
                        className="w-full bg-blue-700 hover:bg-blue-800"
                        onClick={() => sendWhatsApp(q.deductible, q.premium)}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Quotes are estimates based on typical Canadian Super Visa market rates and are subject to underwriting and final approval by the insurer.
            </p>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-blue-900 to-blue-700 text-white border-0">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">Need Help? Contact Arjun Singh Gill</h3>
                <p className="text-blue-100">Get expert advice and the final approved price from real insurers.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button onClick={() => sendWhatsApp()} className="bg-green-600 hover:bg-green-700">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </Button>
                  <Button onClick={() => sendEmail()} className="bg-orange-500 hover:bg-orange-600">
                    <Mail className="w-4 h-4 mr-2" /> Email Quote
                  </Button>
                  <a href="tel:+14313382078">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                      <Phone className="w-4 h-4 mr-2" /> 431-338-2078
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="outline" onClick={() => setStep('form')}>
                ← Edit details & re-quote
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SuperVisaQuoteEstimator;
