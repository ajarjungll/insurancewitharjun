// Shared policy content for the MSH Assistance administered Visitors to Canada
// wordings used by Insure Canada and RIMI Secure Travel.

export const mshBenefits: string[] = [
  '<strong>Hospital accommodation</strong> — charges up to the ward rate (semi-private room on the Enhanced plan), intensive care or coronary care when medically necessary, emergency-room fees and emergency out-patient hospital services.',
  '<strong>Medical services</strong> — treatment by a legally licensed physician, surgeon, anesthetist or registered graduate nurse (not an immediate family member).',
  '<strong>Diagnostic services</strong> — laboratory tests and x-rays ordered by the attending physician. MRI, CAT scans, digital x-rays, sonograms, ultrasounds, biopsies and cardiac catheterization require prior approval from MSH Assistance.',
  '<strong>Prescription drugs</strong> — prescribed drugs, injectables and sera dispensed by a licensed pharmacist, limited to a 30-day supply and up to $500 per prescription ($1,000 on the Enhanced plan) unless hospitalized. Drugs to stabilize a chronic or pre-trip condition are not covered.',
  '<strong>Private duty nurse</strong> — professional services of a registered private duty nurse when prescribed and pre-approved, up to $5,000 when used in lieu of hospitalization.',
  '<strong>Follow-up visits</strong> — up to $1,000 for follow-up visits directly related to your emergency, when approved in advance.',
  '<strong>Paramedical services</strong> — licensed chiropractor, physiotherapist, podiatrist or osteopath (including x-rays) up to $300 per profession ($500 on the Enhanced plan), when pre-approved.',
  '<strong>Emergency dental</strong> — up to $1,000 ($3,000 Enhanced) to repair or replace sound natural teeth after an accidental blow to the face, and up to $300 ($500 Enhanced) for relief of dental pain. Treatment must start within 48 hours and finish within 90 days.',
  '<strong>Medical appliances</strong> — up to $5,000 for crutches, casts, splints, canes, slings, trusses, braces, walkers or temporary wheelchair rental, when prescribed and pre-approved.',
  '<strong>Emergency transportation</strong> — licensed ambulance (or taxi in lieu) to the nearest capable facility, transfers between hospitals, and — when approved and arranged by MSH Assistance — one-way economy airfare home, a medical attendant, or air ambulance where medically necessary.',
  '<strong>Accidental Death & Dismemberment</strong> — up to $100,000; 100% of the sum insured for loss of life, both hands, both feet or entire sight of both eyes, and 50% for loss of one hand, one foot or sight of one eye. Only the largest single amount is payable.',
  '<strong>Flight accident</strong> — up to $50,000 for death as a fare-paying passenger on a commercial airline, with the insurer’s total liability capped at $300,000 per accident.',
  '<strong>Repatriation of remains</strong> — up to $5,000 ($10,000 Enhanced) for preparation of remains, a standard shipping container and transportation home, or up to $2,500 ($5,000 Enhanced) for cremation or burial at the place of death. Casket, urn and funeral costs are not covered.',
  '<strong>Transportation to bedside (Enhanced plan)</strong> — round-trip economy airfare plus $150 per day to a $3,000 maximum for one person to be with you if you are hospitalized as an in-patient for at least 3 consecutive days, or to identify the deceased.',
  '<strong>Meals and accommodation</strong> — up to $150 per day to a $3,000 maximum for commercial accommodation, meals, essential calls, internet, bus/taxi/rental car and child care for dependents under 18, when pre-approved.',
  '<strong>Hospital allowance</strong> — up to $50 per day to a $500 maximum for incidental hospital charges such as telephone, television or internet while hospitalized.',
  '<strong>Return and escort of children</strong> — economy airfare to return accompanying dependent children plus an escort, when you are transported home under the Emergency Transportation benefit.',
  '<strong>Excess baggage return</strong> — up to $500 to return your excess baggage to the departure point when you are transported home under the Emergency Transportation benefit.',
];

export const mshEligibility = {
  title: 'Coverage Rules & Eligibility',
  items: [
    'Coverage runs for a maximum of <strong>365 days</strong> from the effective date and can be purchased before or after arriving in Canada.',
    '<strong>Family coverage</strong> requires the same coverage dates for every family member, a shared address while in Canada and the family premium paid before the effective date. Family means you and/or your spouse up to age 69, plus dependent children.',
    '<strong>Dependent children</strong> must be at least 15 days old and under 21, or under 26 and a full-time student, or have a mental or physical impairment.',
    'Coverage ends the earliest of: the expiry date on your confirmation, 365 days after the effective date, the date you become eligible for a government health plan in Canada, the date you return to your country of origin with no intention of returning, when you exceed 49% of your coverage period abroad, or the 31st day of a temporary visit to another country.',
    '<strong>Automatic 72-hour extension</strong> at no extra premium if a common carrier delay, medical unfitness to travel or hospitalization prolongs your stay past the expiry date — MSH Assistance must be notified.',
    'You may <strong>cancel within 10 days</strong> of purchase for a full refund if it is before the effective date. Super Visa refusal refunds require proof from IRCC. Refund requests must be submitted in writing within 60 days.',
    'The <strong>deductible applies once per insured person, per covered emergency</strong>, and is shown on your confirmation of insurance.',
  ],
};

export const mshExclusions: string[] = [
  'Pre-existing conditions — all of them under Plan 1; under Plan 2, any condition that was not stable for 90 days (up to age 69) or 180 days (ages 70–84) before the effective date.',
  'Any sickness or injury that would have caused an ordinarily prudent person to seek medical attention in the 90 days before the effective date.',
  'Non-emergency treatment, elective or cosmetic surgery, and any treatment that can reasonably be delayed until you return to your country of origin.',
  'Any medical treatment received in your country of origin, or a condition treated during a temporary visit there.',
  'Costs incurred outside Canada after 30 consecutive days in any other country during the coverage period.',
  'Travel against a physician’s advice, or a condition diagnosed as a terminal illness before the effective date.',
  'Ongoing or regular care of a chronic condition, home health care, investigative testing, rehabilitation or convalescent care after the initial emergency has ended.',
  'Trips taken specifically to obtain medical treatment outside your country of origin.',
  'Transplants, artificial joints, prosthetic devices and implants (implants to stabilize an emergency may be covered if pre-approved).',
  'Prescription replacement or renewal, over-the-counter drugs and vitamins, and drugs not registered in Canada.',
  'Loss or damage to hearing devices, eyeglasses, contact lenses or prosthetic teeth, limbs or devices.',
  'Routine pre-natal care, pregnancy or childbirth and complications in the 9 weeks before or after the expected delivery date.',
  'Congenital defects and related conditions for children under 2 years of age.',
  'Any benefit requiring prior MSH Assistance approval where that approval was not obtained.',
  'Emotional, psychological or mental disorders unless you are hospitalized.',
  'Losses contributed to by alcohol, prohibited drugs or other intoxicants.',
  'Illegal or criminal acts, suicide, attempted suicide or self-inflicted injury.',
  'Rock or mountain climbing, hang gliding, parachuting, bungee jumping, skydiving, motorized racing, professional sport, and uncertified or deep scuba diving.',
  'Operating or learning to operate an aircraft as pilot or crew.',
  'Travel to a destination under a Government of Canada advisory to avoid all or non-essential travel, where the loss relates to that advisory.',
  'War, invasion, hostilities, civil war, riot, rebellion, revolution, military power or an unlawful visit to any country.',
  'Radioactive contamination and weapons of mass destruction.',
  'Service in or training for any armed forces, national guard or reserve corps.',
  'Worsening or complications caused by your failure to follow a physician’s directions.',
];

export const mshEmergency: string[] = [
  'Call <strong>MSH Assistance before receiving treatment</strong>, and within <strong>24 hours</strong> of hospital admission and before any surgery.',
  'Toll-free from Canada and the USA: <strong>+1 (800) 203 8508</strong>.',
  'Collect where available: <strong>+1 (416) 646 3107</strong>. Email: <strong>mshassistance@mshassistance.com</strong>.',
  'If you do not call without reasonable cause, benefits are limited to <strong>80% of eligible expenses to a maximum of $25,000</strong> — you pay the remaining 20%.',
  'MSH Assistance must pre-approve any surgery, invasive procedure, diagnostic testing or treatment, including cardiac catheterization.',
  'Once you are deemed medically stable to return home or are discharged, the emergency is considered ended and further related treatment is no longer covered.',
];

export const mshClaims: string[] = [
  'Give <strong>written notice of claim within 30 days</strong> of the date the claim arises.',
  'Submit <strong>written proof of claim within 90 days</strong> of the date you received the covered services.',
  'Provide any additional information MSH Assistance requests after receiving your claim.',
  'Return the unused portion of your air ticket to MSH Assistance if the Emergency Transportation benefit was used.',
  'Your prior medical history may be reviewed when a claim is reported; if records cannot be obtained from your country of origin, your history will be based on your attending physician’s report and other sources.',
  'Keep original receipts from commercial organizations for accommodation, meals, transport and other reimbursable expenses.',
];