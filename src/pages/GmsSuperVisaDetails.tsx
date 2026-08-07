import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Phone, Download, CheckCircle, AlertTriangle, FileText, Clock } from 'lucide-react';
import brochureAsset from '@/assets/gms-brochure.pdf.asset.json';
import policyAsset from '@/assets/gms-policy-wording.pdf.asset.json';
import heroBg from '@/assets/hero-bg-super-visa.jpg';

const benefits = [
  '<strong>In-Hospital Care</strong> — hospital accommodation up to a semi-private room, plus hospital services and supplies for an emergency. Medically necessary follow-up visits are covered (normally within 14 days of the emergency).',
  '<strong>Medical Services</strong> — treatment provided by a physician or surgeon during a covered medical emergency.',
  '<strong>Diagnostic Services</strong> — x-rays and other diagnostic tests. MRI, CT scans, sonograms, ultrasounds and biopsies require pre-authorization by GMS.',
  '<strong>Out-Patient Treatment</strong> — emergency room expenses when you are treated as an out-patient.',
  '<strong>Prescription Medication</strong> — drugs prescribed by the attending physician and dispensed by a licensed pharmacist, up to a 30-day supply. Refills are not covered.',
  '<strong>Ambulance</strong> — licensed road or air ambulance to the nearest hospital with adequate facilities. Air ambulance requires prior GMS approval; helicopter transport is excluded.',
  '<strong>Health Practitioners — $500</strong> — aggregate maximum of $500 per person for emergency services of an osteopath, optometrist, physiotherapist, chiropractor, chiropodist and/or podiatrist.',
  '<strong>Accidental Dental — $2,000</strong> — up to $2,000 per person to repair or replace natural teeth after an accidental blow to the mouth, plus up to $300 for relief of dental pain. Implants are excluded.',
  '<strong>Return of Remains — $10,000</strong> — up to $10,000 for preparation and transportation of the deceased, or up to $4,000 for cremation or burial at the place of death.',
  '<strong>Child Care — $500</strong> — up to $500, with prior GMS approval, for licensed care of dependent children travelling with you if you are hospitalized.',
  '<strong>Out-of-Pocket Expenses — $1,000</strong> — up to $150 per day to a $1,000 maximum for accommodation, meals, phone calls and taxi/bus fares for an accompanying family member if you are in hospital on your return date.',
  '<strong>Repatriation — $5,000+</strong> — up to $5,000 to return you home by commercial airline without a medical attendant (includes 1 insured family member). With a medical attendant or air ambulance, transport is covered when pre-approved and arranged by GMS.',
];

const GmsSuperVisaDetails = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10">
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-700/45 pointer-events-none" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-5 rounded-2xl card-3d inline-flex items-center justify-center">
                  <img src="/partner-logos/gms.jpg" alt="GMS — Group Medical Services logo" className="h-16 w-auto object-contain" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">GMS Super Visa &amp; Visitors Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Group Medical Services Immigrants &amp; Visitors to Canada plan — Super Visa qualified emergency medical coverage with pre-existing condition coverage when stable for 180 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/insurance-types/super-visa">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                    Compare Premiums
                  </Button>
                </Link>
                <a href="tel:+14313382078">
                  <Button variant="outline" className="bg-white border-2 border-white text-blue-900 hover:bg-blue-50 hover:text-blue-900 font-semibold px-8 py-3 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (431) 338-2078
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Download GMS Documents</h2>
              <p className="text-lg text-gray-600 mb-10 text-center">
                Read the full benefit brochure and the official policy wording before you buy.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href={brochureAsset.url}
                  download="GMS-Visitors-to-Canada-Brochure.pdf"
                  className="block bg-blue-50 p-8 rounded-2xl card-3d border text-left"
                >
                  <Download className="w-12 h-12 text-blue-700 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Benefits Brochure (PDF)</h3>
                  <p className="text-gray-600 mb-4">Plan overview, benefit summary and rate information for Immigrants &amp; Visitors to Canada.</p>
                  <span className="inline-block font-semibold text-blue-700">Download brochure →</span>
                </a>
                <a
                  href={policyAsset.url}
                  download="GMS-Immigrants-Visitors-Policy-Wording.pdf"
                  className="block bg-green-50 p-8 rounded-2xl card-3d border text-left"
                >
                  <FileText className="w-12 h-12 text-green-700 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Policy Wording (PDF)</h3>
                  <p className="text-gray-600 mb-4">Complete contract wording: eligibility, benefits, exclusions, definitions and claim conditions.</p>
                  <span className="inline-block font-semibold text-green-700">Download policy wording →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What GMS Covers</h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                GMS pays reasonable and customary charges for eligible expenses from an unexpected medical emergency, up to your policy limit and less your chosen deductible.
              </p>
              <div className="bg-white p-8 rounded-2xl card-3d border max-w-5xl mx-auto">
                <ul className="space-y-3">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deductibles & limits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Coverage Limits &amp; Deductibles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-xl card-3d">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy Limits</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" /><span>$100,000 and $150,000 options are Super Visa qualified (minimum $100,000 required by IRCC).</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" /><span>Maximum 365 days per policy — reapply and requalify to extend beyond one year.</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" /><span>Side trips outside Canada covered up to 30 days, if they start and end in Canada and are no more than 50% of your coverage period.</span></li>
                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" /><span>48 hours of transit coverage between Canada and your country of origin at no extra premium.</span></li>
                  </ul>
                </div>
                <div className="bg-green-50 p-8 rounded-xl card-3d">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Deductibles</h3>
                  <p className="text-gray-700 mb-4">
                    You choose your deductible at the time of purchase. A higher deductible lowers your premium. The deductible shown on your confirmation document is applied to <strong>each claim</strong>, and benefits are paid after it is deducted.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {['$0', '$100', '$250', '$500', '$1,000', '$3,000'].map((d) => (
                      <div key={d} className="bg-white rounded-lg py-3 text-center font-bold text-gray-900 card-3d border">{d}</div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">Available deductible options vary by plan and age — confirm on your quote.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waiting period */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">When Coverage Begins</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl card-3d border">
                  <Clock className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No waiting period</h3>
                  <p className="text-gray-600">If you apply before arriving in Canada, or you are continuing coverage with no gap from another Canadian insurer, coverage starts on the effective date.</p>
                </div>
                <div className="bg-white p-8 rounded-xl card-3d border">
                  <Clock className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2-day waiting period</h3>
                  <p className="text-gray-600">If you were uninsured and apply within the first 30 days of arriving in Canada, injuries are covered immediately; sickness has a 2-day wait.</p>
                </div>
                <div className="bg-white p-8 rounded-xl card-3d border">
                  <Clock className="w-10 h-10 text-red-500 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">7-day waiting period</h3>
                  <p className="text-gray-600">If you were uninsured and apply more than 30 days after arriving, injuries are covered immediately; sickness has a 7-day wait.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-existing + eligibility */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 rounded-xl card-3d mb-12">
                <div className="flex items-start">
                  <AlertTriangle className="w-10 h-10 text-yellow-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Pre-Existing Conditions — 180-Day Stability</h3>
                    <p className="text-gray-700">
                      GMS does not cover expenses from medical conditions that have <strong>not been stable for the 180 days immediately before your effective date</strong>. This applies to conditions you received treatment or consultation for, and to undiagnosed conditions with symptoms you sought treatment or advice for. Stability is judged by the policy's definition, regardless of a physician's opinion.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Eligibility</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-xl card-3d">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Under age 55 — not eligible if you</h3>
                  <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    <li>Have any reason to seek medical treatment (regular care of a chronic condition or a visa medical is fine)</li>
                    <li>Are already in Canada and have ever been denied similar coverage by another Canadian insurer</li>
                    <li>Are already in Canada and had more than $5,000 in medical treatment in Canada in the last 12 months</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-8 rounded-xl card-3d">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Age 55+ — not eligible if you</h3>
                  <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    <li>Are 80 or older on the policy effective date</li>
                    <li>Meet any of the under-55 conditions listed at left</li>
                    <li>Are expecting treatment for heart disease, waiting on tests for a suspected heart condition, or take heart medication while using insulin</li>
                    <li>Have an ICD, an untreated vascular aneurysm, use home oxygen, or take oral steroids for a lung condition</li>
                    <li>Are being treated for cancer or have metastatic cancer</li>
                    <li>Fainted or fell more than once without a diagnosis (syncope)</li>
                    <li>Have ever had a valve replacement, kidney dialysis, or an organ transplant</li>
                    <li>Were diagnosed or had treatment changes in the last 12 months for congestive heart failure, atrial flutter/fibrillation, peripheral vascular disease, stroke/TIA, AIDS, terminal illness, blood clots or gastrointestinal bleeding</li>
                    <li>Are 70+ and need help with activities of daily living</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-gray-500 mt-6">If any condition applies to you, contact GMS immediately — you are not covered. Notify GMS of any health change after applying.</p>
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Key Exclusions</h2>
              <p className="text-lg text-gray-600 mb-10 text-center">A summary only — the downloadable policy wording lists all 29 exclusions in full.</p>
              <div className="bg-white p-8 rounded-xl card-3d border">
                <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                  {[
                    'Expenses incurred in your country of origin',
                    'Conditions not stable for 180 days before the effective date',
                    'Regular care or continuation of a chronic condition',
                    'Non-emergency care: check-ups, elective, cosmetic or dental surgery',
                    'Treatment received against medical advice or the advice of GMS',
                    'Pregnancy, childbirth, abortion, miscarriage and related complications',
                    'Newborns until released from hospital for 48 hours and added as a dependant',
                    'Diagnostic facility treatment or air transport not pre-approved by GMS',
                    'Over-the-counter drugs, experimental drugs, vaccines and preventative medicine',
                    'Trips taken for the purpose of obtaining diagnosis or treatment',
                    'Claims involving alcohol, drug or intoxicant use or misuse of medication',
                    'Criminal or illegal acts, war, terrorism and armed forces service',
                    'Professional sport, racing and extreme sports (skydiving, bungee, mountaineering, etc.)',
                    'Motor vehicle accident costs payable by any other public or private auto insurance',
                    'Travel to destinations under a Canadian government "avoid travel" advisory',
                    'Services duplicated by a government or private health plan',
                  ].map((e, i) => (
                    <li key={i} className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Claims / emergency */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl card-3d">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">In a Medical Emergency</h3>
                <p className="text-gray-700 mb-4">
                  Call the GMS Travel Assistance centre <strong>before treatment where possible</strong>, and no later than <strong>24 hours</strong> after treatment or hospital admission. Benefits may be limited if you don't.
                </p>
                <p className="text-gray-900 font-bold">Toll-free (Canada &amp; US): 1.800.459.6604</p>
                <p className="text-gray-900 font-bold">Collect (all other locations): 905.762.5196</p>
                <p className="text-gray-600 mt-2">Available 24 hours a day, 7 days a week.</p>
              </div>
              <div className="bg-green-50 p-8 rounded-xl card-3d">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Making a Claim</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Submit expenses no later than <strong>12 months</strong> from the date of the last eligible expense.</li>
                  <li>GMS provides claim forms within 15 days of receiving notice of a claim.</li>
                  <li>Money payable is paid within 60 days of GMS receiving proof of claim.</li>
                  <li>Have travel dates, visa documents and medical records available if requested.</li>
                </ul>
                <p className="text-gray-900 font-semibold mt-4">General inquiries: 1.800.667.3699 · info@gms.ca</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Want a GMS Quote?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Compare GMS side by side with Insure Canada and RIMI using the Super Visa premium calculator, or call me and I'll walk you through the right plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/insurance-types/super-visa">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  Open Premium Calculator
                </Button>
              </Link>
              <a href="tel:+14313382078">
                <Button variant="outline" className="bg-white border-2 border-white text-blue-900 hover:bg-blue-50 hover:text-blue-900 font-semibold px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (431) 338-2078
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default GmsSuperVisaDetails;