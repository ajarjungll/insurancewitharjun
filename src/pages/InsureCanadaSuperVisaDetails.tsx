import React from 'react';
import InsurerPolicyPage from '@/components/InsurerPolicyPage';
import policyAsset from '@/assets/insure-canada-policy.pdf.asset.json';
import { mshBenefits, mshExclusions, mshEmergency, mshClaims, mshEligibility, mshPlanComparison, mshPreExisting } from '@/data/mshPolicyContent';

const InsureCanadaSuperVisaDetails = () => (
  <InsurerPolicyPage
    insurer="Insure Canada"
    productName="Insure Canada Visitors to Canada Insurance"
    underwriter="certain Lloyd's Underwriters through MSH International (Canada) Ltd."
    logoSrc="/partner-logos/insure-canada.png"
    intro="Super Visa qualified emergency medical coverage with Standard and Enhanced plans, optional pre-existing condition coverage and 24/7 MSH Assistance."
    documentUrl={policyAsset.url}
    documentFileName="Insure-Canada-Visitors-Policy.pdf"
    documentLabel="Policy Wording (PDF)"
    documentDescription="Complete contract wording: benefits, exclusions, definitions, limitations and claim conditions."
    highlights={[
      { label: 'Maximum policy length', value: '365 days' },
      { label: 'Accidental Death & Dismemberment', value: 'Up to $100,000' },
      { label: 'Flight accident death benefit', value: 'Up to $50,000' },
      { label: 'Side trips outside Canada', value: 'Up to 30 consecutive days / 49% of coverage' },
      { label: 'Automatic extension', value: 'Up to 72 hours, no extra premium' },
      { label: 'Free look period', value: '10 days from purchase (before effective date)' },
      { label: 'Claims administrator', value: 'MSH Assistance' },
    ]}
    benefits={mshBenefits}
    planComparison={mshPlanComparison}
    planOptions={{
      title: 'Other Plan Rules',
      items: [
        '<strong>Plan 1 vs Plan 2:</strong> <strong>Plan 1</strong> excludes <strong>all</strong> pre-existing conditions. <strong>Plan 2</strong> covers <strong>stable</strong> pre-existing conditions (<strong>90 days</strong> up to age 69, <strong>180 days</strong> ages 70–84) with a completed medical declaration.',
        '<strong>Deductible:</strong> chosen at purchase and applied <strong>once per insured person, per covered emergency</strong>.',
        '<strong>Side trips:</strong> up to <strong>30 consecutive days</strong> outside Canada and no more than <strong>49% of your coverage period</strong>.',
        '<strong>Free look:</strong> cancel within <strong>10 days</strong> of purchase for a full refund if it is before the effective date.',
      ],
    }}
    eligibility={mshEligibility}
    preExisting={mshPreExisting}
    exclusions={mshExclusions}
    emergency={mshEmergency}
    claims={mshClaims}
  />
);

export default InsureCanadaSuperVisaDetails;