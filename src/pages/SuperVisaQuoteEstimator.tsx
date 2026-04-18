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
import seniorCoupleBanner from '@/assets/senior-couple-banner.jpg';

type ApplicantType = 'single' | 'couple';
type Gender = 'male' | 'female';
type YesNo = 'yes' | 'no';

const calcAge = (dob: string): number => {
  if (!dob) return 0;
  const birth = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

interface InsurerQuote {
  id: string;
  name: string;
  plan: string;
  logo: string; // path to logo (placeholder for now)
  premium: number;
  monthly: number;
  deductible: number;
  highlights: string[];
}

const COVERAGE_OPTIONS = [100000, 150000, 200000, 500000, 1000000];

// Per-insurer rate models (annual premium per applicant), tuned from public 2025 Canadian Super Visa rate cards.
// Each returns daily rate in CAD per applicant for the given age + coverage.
const insurerRateModels = {
  rimi: (age: number, cov: number, pre: boolean) => {
    let r = age < 40 ? 1.65 : age < 55 ? 2.20 : age < 60 ? 2.95 : age < 65 ? 3.85 : age < 70 ? 5.40 : age < 75 ? 7.70 : age < 80 ? 10.80 : age < 85 ? 14.90 : 19.80;
    const cm = cov === 100000 ? 1 : cov === 150000 ? 1.20 : cov === 200000 ? 1.34 : cov === 500000 ? 1.88 : 2.50;
    return r * cm * (pre ? (age >= 60 ? 1.32 : 1.16) : 1);
  },
  ingle: (age: number, cov: number, pre: boolean) => {
    let r = age < 40 ? 1.85 : age < 55 ? 2.45 : age < 60 ? 3.25 : age < 65 ? 4.20 : age < 70 ? 5.95 : age < 75 ? 8.40 : age < 80 ? 11.80 : age < 85 ? 16.20 : 21.50;
    const cm = cov === 100000 ? 1 : cov === 150000 ? 1.18 : cov === 200000 ? 1.32 : cov === 500000 ? 1.85 : 2.45;
    return r * cm * (pre ? (age >= 60 ? 1.36 : 1.18) : 1);
  },
  gms: (age: number, cov: number, pre: boolean) => {
    let r = age < 40 ? 1.72 : age < 55 ? 2.30 : age < 60 ? 3.05 : age < 65 ? 3.95 : age < 70 ? 5.55 : age < 75 ? 7.90 : age < 80 ? 11.10 : age < 85 ? 15.30 : 20.40;
    const cm = cov === 100000 ? 1 : cov === 150000 ? 1.19 : cov === 200000 ? 1.33 : cov === 500000 ? 1.86 : 2.48;
    return r * cm * (pre ? (age >= 60 ? 1.34 : 1.17) : 1);
  },
  destination: (age: number, cov: number, pre: boolean) => {
    let r = age < 40 ? 1.78 : age < 55 ? 2.38 : age < 60 ? 3.15 : age < 65 ? 4.05 : age < 70 ? 5.75 : age < 75 ? 8.10 : age < 80 ? 11.40 : age < 85 ? 15.70 : 20.90;
    const cm = cov === 100000 ? 1 : cov === 150000 ? 1.20 : cov === 200000 ? 1.35 : cov === 500000 ? 1.90 : 2.52;
    return r * cm * (pre ? (age >= 60 ? 1.35 : 1.18) : 1);
  },
  travelance: (age: number, cov: number, pre: boolean) => {
    let r = age < 40 ? 1.92 : age < 55 ? 2.55 : age < 60 ? 3.38 : age < 65 ? 4.35 : age < 70 ? 6.15 : age < 75 ? 8.65 : age < 80 ? 12.10 : age < 85 ? 16.60 : 22.10;
    const cm = cov === 100000 ? 1 : cov === 150000 ? 1.21 : cov === 200000 ? 1.36 : cov === 500000 ? 1.92 : 2.55;
    return r * cm * (pre ? (age >= 60 ? 1.37 : 1.19) : 1);
  },
};

const INSURERS: Array<{
  id: keyof typeof insurerRateModels;
  name: string;
  plan: string;
  logo: string;
  deductible: number;
  highlights: string[];
}> = [
  {
    id: 'rimi',
    name: 'RIMI Insurance',
    plan: 'Super Visa Plan',
    logo: '/partner-logos/rimi.png',
    deductible: 250,
    highlights: ['Stable pre-existing 180 days', 'Refunds available', 'Monthly payment option'],
  },
  {
    id: 'ingle',
    name: 'Ingle International',
    plan: 'Visitors to Canada',
    logo: '/partner-logos/ingle.png',
    deductible: 500,
    highlights: ['24/7 emergency assistance', 'Direct billing to hospitals', 'Family rates available'],
  },
  {
    id: 'gms',
    name: 'GMS Insurance',
    plan: 'Immigrants & Visitors',
    logo: '/partner-logos/gms.jpg',
    deductible: 250,
    highlights: ['Trusted Canadian insurer', 'Pre-existing condition coverage', 'Easy online claims'],
  },
  {
    id: 'destination',
    name: 'Destination Canada',
    plan: 'Visitors to Canada Emergency Medical',
    logo: '/partner-logos/destination-canada.png',
    deductible: 500,
    highlights: ['Side-trips coverage', 'Emergency dental', 'Repatriation included'],
  },
  {
    id: 'travelance',
    name: 'Travelance',
    plan: 'Essential Plan',
    logo: '/partner-logos/travelance.png',
    deductible: 1000,
    highlights: ['Premier reputation', 'Generous benefits', 'Stability period 180 days'],
  },
];

const computeInsurerQuotes = (
  ages: number[],
  coverage: number,
  preExisting: boolean,
  days: number
): InsurerQuote[] => {
  return INSURERS.map((ins) => {
    const total = ages.reduce((sum, age) => {
      return sum + insurerRateModels[ins.id](age, coverage, preExisting) * days;
    }, 0);
    const annual = Math.round(total);
    return {
      id: ins.id,
      name: ins.name,
      plan: ins.plan,
      logo: ins.logo,
      deductible: ins.deductible,
      highlights: ins.highlights,
      premium: annual,
      monthly: Math.round(annual / 12),
    };
  }).sort((a, b) => a.premium - b.premium);
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
  const [quotes, setQuotes] = useState<InsurerQuote[]>([]);

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
      setQuotes(computeInsurerQuotes(ages, coverage, preExisting === 'yes', 365));
      setStep('results');
    }, 1800);
  };

  const buildLeadMessage = (selected?: { insurer: string; premium: number; deductible: number }) => {
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
      selected ? `Selected plan: ${selected.insurer} (deductible $${selected.deductible}, ~$${selected.premium.toLocaleString()}/year)` : '',
    ].filter(Boolean).join('\n');
  };

  const sendWhatsApp = (selected?: { insurer: string; premium: number; deductible: number }) => {
    const msg = encodeURIComponent(buildLeadMessage(selected));
    window.open(`https://wa.me/14313382078?text=${msg}`, '_blank');
  };

  const sendEmail = (selected?: { insurer: string; premium: number; deductible: number }) => {
    const subject = encodeURIComponent('Super Visa Insurance Quote Request');
    const body = encodeURIComponent(buildLeadMessage(selected));
    window.location.href = `mailto:insurancewitharjun@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      {/* Hero with senior couple background */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${seniorCoupleBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-800/70" aria-hidden="true" />
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <Shield className="w-14 h-14 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Super Visa Insurance Quote Estimator</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Compare instant estimates from RIMI, Ingle, GMS, Destination Canada and Travelance.
            Then connect with Arjun for the final approved price.
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
            <p className="text-gray-600">Comparing rates from RIMI, Ingle, GMS, Destination Canada & Travelance</p>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quotes.map((q) => {
                const isBest = q.premium === cheapest;
                return (
                  <Card
                    key={q.id}
                    className={`relative transition-all hover:shadow-2xl card-3d ${
                      isBest ? 'border-2 border-orange-400 shadow-2xl ring-2 ring-orange-200' : 'border-blue-100'
                    }`}
                  >
                    {isBest && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10">
                        <Star className="w-3 h-3 fill-white" /> BEST PRICE
                      </div>
                    )}
                    <CardHeader className="pb-3">
                      {/* Logo slot */}
                      <div className="h-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 p-2 border border-gray-200">
                        <img
                          src={q.logo}
                          alt={`${q.name} logo`}
                          className="max-h-12 max-w-full object-contain"
                          onError={(e) => {
                            // Fallback to insurer name if logo file is missing
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).parentElement!.innerHTML =
                              `<span class="text-blue-900 font-bold text-lg">${q.name}</span>`;
                          }}
                        />
                      </div>
                      <CardTitle className="text-lg text-blue-900 leading-tight">{q.name}</CardTitle>
                      <p className="text-sm text-gray-500">{q.plan}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center py-2 bg-blue-50/60 rounded-lg">
                        <p className="text-3xl font-extrabold text-blue-700">${q.premium.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">CAD total / year</p>
                        <p className="text-sm text-gray-600 mt-1">≈ ${q.monthly.toLocaleString()}/month</p>
                      </div>
                      <div className="text-xs text-gray-600 flex justify-between border-y py-2">
                        <span>Deductible</span>
                        <strong>${q.deductible.toLocaleString()}</strong>
                      </div>
                      <ul className="text-xs text-gray-600 space-y-1.5">
                        {q.highlights.map((h, i) => (
                          <li key={i} className="flex gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" /> {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-green-600 hover:bg-green-700"
                          onClick={() => sendWhatsApp({ insurer: q.name, premium: q.premium, deductible: q.deductible })}
                        >
                          <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-blue-700 text-blue-700 hover:bg-blue-50"
                          onClick={() => sendEmail({ insurer: q.name, premium: q.premium, deductible: q.deductible })}
                        >
                          <Mail className="w-3.5 h-3.5 mr-1" /> Email
                        </Button>
                      </div>
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
