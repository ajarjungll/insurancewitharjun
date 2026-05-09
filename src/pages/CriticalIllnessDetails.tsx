
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Phone, Shield, CheckCircle, AlertCircle, Users, FileText, Repeat, Baby, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';
import heroBg from '@/assets/hero-bg-critical.jpg';

const CriticalIllnessDetails = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/55 to-blue-700/40 pointer-events-none" aria-hidden="true" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-800 rounded-full">
                  <Heart className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">Critical Illness Insurance</h1>
              <p className="text-xl text-blue-100 mb-8">
                Financial Protection When You Need It Most - Comprehensive coverage for serious health conditions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  Get Free Quote
                </Button>
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

        {/* What is Critical Illness Insurance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">What is Critical Illness Insurance?</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg text-gray-600 mb-6">
                    Thanks to advances in medical research, more Canadians than ever survive a critical illness and go on to live productive lives. Critical Illness Insurance is a protection that gives insureds the tools to maintain their standard of living and ease their financial obligations following the diagnosis of a covered critical illness.
                  </p>
                  <p className="text-lg text-gray-600">
                    When the insured is diagnosed with a covered critical illness and survives a minimum waiting period of 30 days, a tax-free lump sum benefit is paid out. The insured can use the benefit however they see fit — there are no restrictions.
                  </p>
                </div>
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How the benefit can be used</h3>
                  <ul className="space-y-3">
                    {[
                      "Cover daily living expenses (mortgage, child care, credit cards)",
                      "Choose treatment in a private clinic or abroad",
                      "Pay for medications or medical expenses not covered by another plan",
                      "Refit your home or get nursing care at home",
                      "Cover business expenses while you recover",
                      "Replace income during an extended absence from work",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters - Statistics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Why You Should Consider It</h2>
              <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                A significant number of Canadians will face a critical illness in their lifetime. The numbers speak for themselves:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { stat: "40% / 45%", text: "of Canadian women / men will develop cancer in their lifetime" },
                  { stat: "70,000", text: "heart attacks each year in Canada — one every 7 minutes" },
                  { stat: "50,000+", text: "strokes occur in Canada each year — one every 10 minutes" },
                  { stat: "1,000", text: "new cases of multiple sclerosis diagnosed in Canada every year" },
                  { stat: "1 in 165", text: "children in Canada is diagnosed with autism" },
                  { stat: "1 in 3,600", text: "Canadian children is born with cystic fibrosis" },
                ].map((s, i) => (
                  <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-md">
                    <div className="text-3xl font-bold text-blue-700 mb-2">{s.stat}</div>
                    <p className="text-gray-700">{s.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center mt-6">
                Sources: Canadian Cancer Society, Heart and Stroke Foundation of Canada, MS Society of Canada, Autism Society Canada, Canadian Cystic Fibrosis Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Protection */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Types of Protection</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Basic Protection", count: "3", desc: "Covers the 3 most common critical illnesses: cancer, heart attack and stroke." },
                  { title: "Enhanced Protection", count: "25", desc: "Comprehensive coverage for 25 critical illnesses, ideal for adults wanting full protection." },
                  { title: "Child Protection", count: "29", desc: "29 covered illnesses, including conditions specific to children such as autism and cystic fibrosis." },
                ].map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-blue-600">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-5xl font-bold text-blue-700 mb-2">{t.count}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
                    <p className="text-gray-600">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Available Plans */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Available Plans</h2>
              <p className="text-lg text-gray-600 text-center mb-10">Choose between term and permanent options to fit your needs and budget.</p>
              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="min-w-full bg-white">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Plan</th>
                      <th className="px-6 py-4 text-left">Issue Ages</th>
                      <th className="px-6 py-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { plan: "T10 — Basic / Enhanced", age: "18 to 65", desc: "Term 10. Renewable up to age 75 and convertible up to age 65. Premiums level and guaranteed for the initial term." },
                      { plan: "T20 — Basic / Enhanced", age: "18 to 55", desc: "Term 20. Renewable up to age 75 and convertible up to age 65. Premiums level and guaranteed for the initial term." },
                      { plan: "T75 — Basic / Enhanced / Child", age: "18 to 65 (30 days–17 for Child)", desc: "Protection up to age 75. Premiums level and guaranteed." },
                      { plan: "T100 — Basic / Enhanced / Child", age: "18 to 65 (30 days–17 for Child)", desc: "Permanent protection up to age 100. Premiums level and guaranteed." },
                      { plan: "T100 Paid-Up 20 — Basic / Enhanced / Child", age: "18 to 50 (30 days–17 for Child)", desc: "Protection up to age 100, fully paid up after 20 years of premiums." },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-blue-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">{row.plan}</td>
                        <td className="px-6 py-4 text-gray-700">{row.age}</td>
                        <td className="px-6 py-4 text-gray-600">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">Insured's age is determined at the nearest birthday.</p>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Examples of Covered Conditions</h2>
              <p className="text-lg text-gray-600 text-center mb-10">A sample of the critical illnesses covered under the Basic, Enhanced and Child protections.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Cancer", description: "All forms of life-threatening cancer" },
                  { title: "Severe Heart Attack", description: "Acute myocardial infarction with heart muscle damage" },
                  { title: "Stroke (Cerebrovascular Accident)", description: "Acute event with neurological deficit lasting 30+ days" },
                  { title: "Kidney Failure", description: "End-stage renal failure" },
                  { title: "Multiple Sclerosis", description: "Chronic neurological condition" },
                  { title: "Parkinson's Disease", description: "Progressive neurological disorder" },
                  { title: "Major Organ Transplant", description: "Heart, lung, liver, kidney transplants" },
                  { title: "Paralysis", description: "Complete loss of muscle function" },
                  { title: "Blindness", description: "Permanent loss of sight" },
                  { title: "Coma", description: "Diagnosis of unresponsive unconsciousness" },
                  { title: "Aplastic Anemia", description: "Chronic persistent bone marrow failure" },
                  { title: "Benign Brain Tumour", description: "Non-cancerous tumour confirmed by a specialist" },
                  { title: "Severe Burns", description: "Third-degree burns over a significant body area" },
                  { title: "Loss of Independent Existence", description: "Inability to perform activities of daily living" },
                  { title: "Aortic Surgery", description: "Surgical replacement of the thoracic or abdominal aorta" },
                  { title: "Children's Conditions", description: "Autism, cystic fibrosis, muscular dystrophy, congenital heart disease and more" },
                ].map((condition, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{condition.title}</h3>
                    <p className="text-gray-600">{condition.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 text-center mt-8">
                This is a partial list. Full definitions and the complete list of covered illnesses are provided in your policy contract.
              </p>
            </div>
          </div>
        </section>

        {/* Return of Premiums & Additional Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Return of Premiums Riders</h2>
              <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                Optional riders allow you (or your beneficiary) to recover premiums paid into the policy under specific situations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                  { icon: Repeat, title: "Return of Premiums on Death", desc: "If the insured dies without ever having claimed a critical illness benefit, premiums paid are refunded to the beneficiary." },
                  { icon: FileText, title: "Return of Premiums at Expiry", desc: "Premiums are refunded if no claim has been made by the time the policy reaches its expiry date." },
                  { icon: CheckCircle, title: "Return of Premiums on Cancellation", desc: "Available after 15 or 20 years — recover premiums if you cancel the policy and have not received a benefit." },
                ].map((b, i) => (
                  <div key={i} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <b.icon className="w-10 h-10 text-blue-700 mb-3" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-gray-700">{b.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Additional Benefits</h2>
              <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">Strengthen your policy with optional add-ons to cover the whole family.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
                  <Baby className="w-10 h-10 text-orange-500 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Children's Critical Illness Rider</h3>
                  <p className="text-gray-600">Add coverage for your children (30 days to 17 years old) on the policyowner's policy.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                  <Shield className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Waiver of Premium</h3>
                  <p className="text-gray-600">Premiums are waived if the policyowner becomes totally disabled. Available up to the policy anniversary nearest to age 60.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-600">
                  <Activity className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Benefit in Case of Fracture</h3>
                  <p className="text-gray-600">Pays a benefit in the event of an accidental fracture or severance, in addition to the main critical illness coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How a Claim Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">How the Benefit Is Paid</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <ol className="space-y-6">
                  {[
                    { step: "1", title: "Diagnosis", text: "The insured is diagnosed with a critical illness covered under the policy." },
                    { step: "2", title: "30-day survival period", text: "The insured must survive at least 30 days after the diagnosis (longer for certain conditions, as defined in the contract)." },
                    { step: "3", title: "Tax-free lump sum", text: "A one-time, tax-free benefit is paid directly to the insured to use however they wish." },
                  ].map((s, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{s.title}</h3>
                        <p className="text-gray-600">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">
                Some illnesses are subject to specific waiting periods, definitions and exclusions — full details are in your policy contract.
              </p>
            </div>
          </div>
        </section>

        {/* Who Needs It */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Needs Critical Illness Insurance?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                This product is tailored to a wide client base — families, children, young couples, business owners and self-employed workers.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">You Should Consider It If:</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You have dependents relying on your income</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You have a mortgage or significant debts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You want to maintain your lifestyle during illness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">You have family history of critical illnesses</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-8 rounded-xl">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Peace of Mind For:</h3>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Business owners and self-employed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Single parents</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Primary income earners</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">Those with limited sick leave benefits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Future?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait until it's too late. Get a free quote today and secure your financial future against critical illness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                Get Free Quote Now
              </Button>
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

export default CriticalIllnessDetails;
