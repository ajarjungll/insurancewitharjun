import InsurerPolicyPage from '@/components/InsurerPolicyPage';
import policy from '@/assets/destination-canada-policy.pdf.asset.json';
import benefits from '@/assets/destination-canada-benefits.pdf.asset.json';

const DestinationCanadaSuperVisaDetails = () => (
  <InsurerPolicyPage
    insurer="Destination Canada"
    productName="Destination Canada — Visitors & Super Visa Insurance"
    underwriter="National Liability & Fire Insurance Company – Canada Branch, trading as Berkshire Hathaway Specialty Insurance (BHSI)"
    logoSrc="/partner-logos/destination-canada.png"
    intro="Emergency medical coverage for visitors, Super Visa applicants, newly landed immigrants, migrant workers and returning Canadians, subject to eligibility. Managed and distributed by The Destination: Travel Group Inc."
    documentUrl={policy.url}
    documentFileName="Destination-Canada-Policy-September-2026.pdf"
    documentLabel="Policy Wording (PDF)"
    documentDescription="September 2026 full policy: 47 pages of benefits, eligibility, exclusions, definitions, payment and claim conditions."
    additionalDocuments={[{ url: benefits.url, fileName: 'Destination-Canada-Benefits-July-2026.pdf', label: 'Summary of Benefits (PDF)', description: 'July 2026 summary of emergency medical benefits, coverage limits and pre-existing condition options. The full policy wording governs.' }]}
    highlights={[
      { label: 'Emergency medical coverage', value: '$25,000–$300,000' },
      { label: 'Maximum coverage per trip', value: '1 year' },
      { label: 'Hospital accommodation', value: 'Semi-private' },
      { label: 'Outpatient prescriptions', value: '$1,000 per policy' },
      { label: 'Deductible application', value: 'Each claim' },
      { label: 'Claims and assistance', value: 'Global Excel · 24/7' },
    ]}
    benefits={[
      '<strong>Emergency hospitalization:</strong> semi-private accommodation and eligible hospital services, supplies and inpatient medications, up to the selected sum insured.',
      '<strong>Emergency medical:</strong> physician, surgeon and anesthetist services; diagnostic laboratory tests and X-rays at the initial emergency; eligible medical appliances (rental not exceeding purchase price).',
      '<strong>Ambulance:</strong> reasonable and necessary local air, land or sea transportation to the nearest hospital, including mountain/sea evacuation, when pre-approved and arranged by the administrator.',
      '<strong>Private-duty nursing:</strong> registered nurse services up to <strong>$10,000</strong>, with pre-approval.',
      '<strong>Outpatient prescriptions:</strong> up to <strong>$1,000 per policy</strong>, limited to a <strong>one-time 30-day supply per prescription</strong> for a covered emergency. Vitamins and over-the-counter medications are excluded.',
      '<strong>Professional services:</strong> physician-ordered outpatient treatment for a covered injury by a physiotherapist, chiropractor, osteopath, chiropodist or podiatrist, up to <strong>$500 per practitioner category</strong>.',
      '<strong>Escorted medical repatriation:</strong> necessary transport to your country of origin, including eligible medical escort or air ambulance, pre-approved and arranged by the administrator.',
      '<strong>Family or friend transportation:</strong> up to <strong>$3,000</strong> round-trip economy transport plus <strong>$1,000</strong> reasonable costs after arrival when attendance is medically advised or legally required to identify remains.',
      '<strong>Attendant:</strong> after at least <strong>48 consecutive hours</strong> of emergency hospitalization, up to <strong>$50/day, maximum $500</strong>, for a qualifying attendant caring for accompanying children under 18 or disabled companions relying on you.',
      '<strong>Follow-up visits:</strong> up to <strong>$3,000</strong> for re-examination directly related to a reported initial emergency, subject to administrator approval. Excludes ongoing treatment and further diagnostic/investigative testing.',
      '<strong>Accidental dental:</strong> up to <strong>$3,000</strong> for emergency treatment of sound natural teeth following a direct accidental blow to the face; treatment must begin and end within <strong>90 days</strong> and before returning home.',
      '<strong>Dental pain:</strong> up to <strong>$500</strong> for immediate relief of acute pain; no coverage for previously treated/advised conditions. Treatment must begin and end within <strong>90 days</strong>, during coverage and before returning home.',
      '<strong>Meals and accommodation:</strong> up to <strong>$150/day, maximum $1,500 or 10 days</strong>, for eligible expenses when hospitalization prevents your scheduled return. Original itemized receipts are required.',
      '<strong>Emergency return without an escort:</strong> up to <strong>$3,000</strong> additional one-way economy transportation, including one covered family member, when pre-approved and arranged.',
      '<strong>Return of deceased:</strong> up to <strong>$10,000</strong> to prepare and return remains, or <strong>$4,000</strong> for local cremation/burial. Coffin/urn, headstone, flowers and reception costs are excluded.',
      '<strong>Accidental death and dismemberment:</strong> up to the selected sum insured, capped at <strong>$150,000</strong>; payout depends on the covered loss. <strong>Flight accident:</strong> up to <strong>$50,000</strong> as a fare-paying passenger on an eligible licensed public carrier.',
      '<strong>Side trips:</strong> eligible emergency medical coverage outside Canada if at least <strong>51% of the coverage period</strong> is spent in Canada. <strong>No coverage in your country of origin.</strong>',
    ]}
    planComparison={{
      title: 'Option 1 vs Option 2',
      subtitle: 'These options change pre-existing condition coverage, not the emergency benefit limits. Neither option is a Standard or Enhanced tier.',
      planALabel: 'Option 1', planBLabel: 'Option 2',
      planANote: 'Stable pre-existing conditions', planBNote: 'Pre-existing conditions excluded',
      rows: [
        { feature: 'Pre-existing conditions', a: 'Eligible conditions covered only if <strong>stable</strong> for the required period.', b: '<strong>All pre-existing medical conditions excluded</strong>, even if stable.' },
        { feature: 'Age 59 and under', a: '<strong>90 consecutive days</strong> stable before effective date.', b: 'No pre-existing condition coverage.' },
        { feature: 'Ages 60–69', a: '<strong>120 consecutive days</strong> stable before effective date.', b: 'No pre-existing condition coverage.' },
        { feature: 'Ages 70–79', a: '<strong>180 consecutive days</strong> stable before effective date.', b: 'No pre-existing condition coverage.' },
        { feature: 'Ages 80+', a: '<strong>Not available</strong> in the supplied rate schedule.', b: 'Ages <strong>80–85: $25,000/$50,000</strong>; ages <strong>86+: $25,000</strong> with mandatory <strong>$500 deductible</strong>, per supplied rates.' },
        { feature: 'Emergency benefits', a: 'Same policy benefit limits, subject to eligibility and exclusions.', b: 'Same policy benefit limits, subject to eligibility and exclusions.' },
      ],
    }}
    planOptions={{ title: 'Deductibles, Payments & Waiting Periods', items: [
      '<strong>Coverage choices:</strong> $25,000, $50,000, $100,000, $150,000, $200,000, $250,000 or $300,000, subject to age/option availability. Super Visa selections require at least <strong>$100,000</strong> and <strong>one year</strong> of coverage.',
      '<strong>Deductibles (July 2026 rate schedule):</strong> $0 (no discount), <strong>$250 (10%)</strong>, <strong>$500 (15%)</strong>, <strong>$1,000 (20%)</strong>, <strong>$2,500 (30%)</strong>, <strong>$5,000 (35%)</strong> or <strong>$10,000 (40%)</strong>. Ages <strong>86+</strong>: mandatory <strong>$500</strong>, no discount. Applies to <strong>each claim</strong>. Minimum premium <strong>$25</strong>.',
      '<strong>Monthly eligibility:</strong> at least <strong>180 days</strong> of coverage and at least <strong>$50,000</strong> sum insured. Each installment includes a <strong>$10 fee</strong>. Pay <strong>two installments at application</strong>, the <strong>third on the effective date</strong>, then recurring monthly installments according to the issued schedule. Confirm exact amounts with Arjun; other companies’ upfront-fee formula does not apply.',
      '<strong>Sickness waiting period:</strong> <strong>48 hours</strong> when purchased within <strong>30 days after departure</strong> from your country of origin; <strong>7 days</strong> when purchased <strong>30 days or more after departure</strong>. The wording overlaps at day 30; confirm that boundary before purchase.',
      '<strong>Waiting period waived:</strong> purchase <strong>before departure</strong>, or before existing Destination Canada/other health insurance expires with <strong>no gap</strong>. Proof of previous coverage is required. Sickness beginning during a waiting period remains excluded even if expenses occur later.',
      '<strong>Refunds:</strong> full refund within <strong>10 days of purchase</strong> only if coverage has not begun. Other refunds are conditional and generally subject to a <strong>$25 administration fee</strong> and <strong>$25 minimum refund</strong>; no refund if a claim is incurred, paid or pending. A <strong>$150</strong> pre-effective-date cancellation fee may apply to a one-year visa-required policy without proof of visa refusal. See full wording for request deadlines and conditions.',
    ] }}
    preExisting={[
      '<strong>Option 1:</strong> stability is required immediately before the effective date: <strong>90 days</strong> through age 59, <strong>120 days</strong> at 60–69, <strong>180 days</strong> at 70–79. All other policy eligibility and exclusions still apply.',
      '<strong>Option 2:</strong> excludes <strong>all pre-existing medical conditions</strong>, regardless of stability.',
      '<strong>Stable means:</strong> no new, changed or stopped treatment; no medication change/new prescription; no worsening or new/more frequent/severe symptoms; no hospitalization or specialist referral; no incomplete investigations, outstanding results or planned/pending treatment.',
      '<strong>Medication exceptions:</strong> routine adjustments of existing Coumadin, warfarin or insulin following regular blood tests, and changing a brand-name drug to a generic at the same dose, are not considered medication changes under the definition.',
      '<strong>Health changes before coverage:</strong> contact your broker if your health changes between application and effective date; changes may affect coverage or lead to a denied claim.',
    ]}
    eligibility={{ title: 'Who Can Apply?', items: [
      'You must be at least <strong>15 days old</strong> and meet <strong>all eligibility requirements</strong> as of the effective date. Age and coverage availability in the rate schedule also apply.',
      'You must <strong>not travel against physician advice</strong> or have a <strong>terminal illness</strong> (including the policy’s prognosis/palliative-care criteria).',
      'You must not have been diagnosed with or treated for <strong>pancreatic cancer, liver cancer or metastatic cancer</strong>.',
      'You must not have been prescribed/used <strong>home oxygen in the previous 12 months</strong>, have <strong>heart failure</strong>, or have received a <strong>major-organ, bone-marrow or stem-cell transplant</strong>.',
      'You must not have received <strong>kidney dialysis in the previous 12 months</strong> or have an unrepaired aneurysm <strong>4 cm or larger</strong> in length or diameter.',
    ] }}
    exclusions={[
      '<strong>Pre-existing conditions</strong> outside your selected option/stability requirements and <strong>sickness beginning during the waiting period</strong>.',
      '<strong>Routine checkups, ongoing/chronic care, elective/experimental treatment, rehabilitation</strong> and treatment that can reasonably wait until you return home; subsequent emergency-related treatment generally needs pre-approval.',
      '<strong>Pregnancy, delivery, miscarriage, abortion, related complications</strong> and losses associated with a child born during the trip.',
      '<strong>Alzheimer’s/dementia, minor mental or emotional disorders</strong>, and specified self-inflicted injuries, subject to the policy’s mental-health exception.',
      '<strong>Substance abuse, prohibited drugs, medication misuse or non-compliance with treatment</strong>; specified professional/high-risk sports and activities.',
      '<strong>War, terrorism, unlawful acts</strong> and applicable government travel-advisory exclusions. See the full wording for exceptions and the complete list.',
      '<strong>No coverage in your country of origin.</strong> Treatment during a temporary return also excludes that medical condition for the remaining coverage period.',
    ]}
    emergency={[
      '<strong>Global Excel, 24/7:</strong> Canada/USA <a href="tel:18552867467"><strong>1-855-286-7467</strong></a>; outside Canada/USA <a href="tel:+15199138034"><strong>+1-519-913-8034</strong></a> (collect where available).',
      'For a serious emergency, get to a hospital immediately. Contact assistance <strong>before treatment/surgery</strong> and within <strong>24 hours of hospital admission</strong>. If medically impossible, have someone call on your behalf as soon as possible.',
      'Without reasonable cause, failure to call before treatment means you pay <strong>20% of otherwise eligible medical expenses</strong>. Have your policy number, location and contact information ready.',
    ]}
    claims={[
      'Submit eligible out-of-pocket expenses through <a href="https://www.globalexcel.com/bhspecialty" target="_blank" rel="noopener noreferrer"><strong>globalexcel.com/bhspecialty</strong></a>.',
      'Keep <strong>original itemized receipts</strong>, proof of payment/travel and requested medical records. Direct billing is arranged where possible, but some providers require payment upfront.',
      'Report claims as soon as reasonably possible or within <strong>30 days</strong>; submit written proof as soon as possible or within <strong>90 days</strong>. The policy specifies an outer deadline of <strong>one year after occurrence</strong> for both.',
    ]}
  />
);

export default DestinationCanadaSuperVisaDetails;