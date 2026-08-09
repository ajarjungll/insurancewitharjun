import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Button } from './ui/button';
import { Phone, Download, CheckCircle, AlertTriangle, FileText, Info } from 'lucide-react';
import heroBg from '@/assets/hero-bg-super-visa.jpg';

export interface PolicySection {
  title: string;
  items: string[];
}

export interface PlanComparison {
  title: string;
  subtitle?: string;
  planALabel: string;
  planBLabel: string;
  planANote?: string;
  planBNote?: string;
  rows: { feature: string; a: string; b: string }[];
}

export interface InsurerPolicyPageProps {
  insurer: string;
  productName: string;
  underwriter: string;
  logoSrc: string;
  intro: string;
  documentUrl: string;
  documentFileName: string;
  documentLabel: string;
  documentDescription: string;
  highlights: { label: string; value: string }[];
  benefits: string[];
  planComparison?: PlanComparison;
  planOptions: PolicySection;
  eligibility: PolicySection;
  preExisting: string[];
  exclusions: string[];
  emergency: string[];
  claims: string[];
}

const List = ({ items, tone = 'blue' }: { items: string[]; tone?: 'blue' | 'red' }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start text-gray-700 leading-relaxed">
        {tone === 'red' ? (
          <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
        ) : (
          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
        )}
        <span dangerouslySetInnerHTML={{ __html: item }} />
      </li>
    ))}
  </ul>
);

const ComparisonTable = ({ c }: { c: PlanComparison }) => (
  <div className="bg-white rounded-2xl card-3d border overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-4 w-1/4 text-base font-bold">Benefit</th>
            <th className="p-4 w-[37.5%] text-base font-bold">
              {c.planALabel}
              {c.planANote && <span className="block text-xs font-normal text-blue-200 mt-1">{c.planANote}</span>}
            </th>
            <th className="p-4 w-[37.5%] text-base font-bold bg-blue-800">
              {c.planBLabel}
              {c.planBNote && <span className="block text-xs font-normal text-blue-200 mt-1">{c.planBNote}</span>}
            </th>
          </tr>
        </thead>
        <tbody>
          {c.rows.map((r, i) => (
            <tr key={r.feature} className={i % 2 ? 'bg-gray-50' : 'bg-white'}>
              <th scope="row" className="p-4 align-top font-bold text-gray-900">{r.feature}</th>
              <td className="p-4 align-top text-gray-700 border-l" dangerouslySetInnerHTML={{ __html: r.a }} />
              <td className="p-4 align-top text-gray-700 border-l bg-blue-50/60" dangerouslySetInnerHTML={{ __html: r.b }} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const InsurerPolicyPage: React.FC<InsurerPolicyPageProps> = (p) => {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
                  <img src={p.logoSrc} alt={`${p.insurer} logo`} className="h-16 w-auto object-contain" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">{p.productName}</h1>
              <p className="text-xl text-blue-100 mb-4">{p.intro}</p>
              <p className="text-blue-200 mb-8">Underwritten by {p.underwriter}</p>
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

        {/* Highlights + download */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl card-3d border">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Plan at a Glance</h2>
                <dl className="space-y-3">
                  {p.highlights.map((h) => (
                    <div key={h.label} className="flex justify-between gap-4 border-b border-blue-100 pb-2">
                      <dt className="text-gray-600">{h.label}</dt>
                      <dd className="font-semibold text-gray-900 text-right">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <a
                href={p.documentUrl}
                download={p.documentFileName}
                className="block bg-green-50 p-8 rounded-2xl card-3d border text-left"
              >
                <Download className="w-12 h-12 text-green-700 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{p.documentLabel}</h2>
                <p className="text-gray-600 mb-4">{p.documentDescription}</p>
                <span className="inline-block font-semibold text-green-700">Download PDF →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Benefits list */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What {p.insurer} Covers</h2>
              <p className="text-lg text-gray-600 mb-10 text-center">
                Reasonable and customary charges for eligible emergency expenses, up to your sum insured and less your deductible.
              </p>
              <div className="bg-white p-8 rounded-2xl card-3d border">
                <List items={p.benefits} />
              </div>
            </div>
          </div>
        </section>

        {/* Plan comparison */}
        {p.planComparison && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">{p.planComparison.title}</h2>
                {p.planComparison.subtitle && (
                  <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">{p.planComparison.subtitle}</p>
                )}
                <ComparisonTable c={p.planComparison} />
              </div>
            </div>
          </section>
        )}

        {/* Plan options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">{p.planOptions.title}</h2>
              <div className="bg-blue-50 p-8 rounded-2xl card-3d border">
                <List items={p.planOptions.items} />
              </div>
            </div>
          </div>
        </section>

        {/* Pre-existing + eligibility */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-yellow-50 border-l-8 border-yellow-400 p-8 rounded-xl card-3d mb-12">
                <div className="flex items-start">
                  <Info className="w-10 h-10 text-yellow-600 mr-4 flex-shrink-0" />
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Pre-Existing Conditions</h3>
                    <ul className="space-y-3">
                      {p.preExisting.map((line, i) => (
                        <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-yellow-500 mr-3 mt-2 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: line }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">{p.eligibility.title}</h2>
              <div className="bg-white p-8 rounded-2xl card-3d border">
                <List items={p.eligibility.items} />
              </div>
            </div>
          </div>
        </section>

        {/* Exclusions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Key Exclusions</h2>
              <p className="text-lg text-gray-600 mb-10 text-center">
                A summary only — the downloadable policy wording lists every exclusion in full.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl card-3d border">
                <List items={p.exclusions} tone="red" />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency + claims */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-2xl card-3d border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">In a Medical Emergency</h3>
                <List items={p.emergency} />
              </div>
              <div className="bg-green-50 p-8 rounded-2xl card-3d border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Making a Claim</h3>
                <List items={p.claims} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Want a {p.insurer} Quote?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Compare plans side by side with the Super Visa premium calculator, or call me and I'll walk you through the right option.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/insurance-types/super-visa">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  Open Premium Calculator
                </Button>
              </Link>
              <a href="tel:+14313382078">
                <Button variant="outline" className="bg-white border-2 border-white text-blue-900 hover:bg-blue-50 hover:text-blue-900 font-semibold px-8 py-4 text-lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Talk to Arjun
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

export default InsurerPolicyPage;