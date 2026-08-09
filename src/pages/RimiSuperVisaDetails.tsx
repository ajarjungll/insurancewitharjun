import React from 'react';
import InsurerPolicyPage from '@/components/InsurerPolicyPage';
import policyAsset from '@/assets/rimi-policy.pdf.asset.json';
import { mshBenefits, mshExclusions, mshEmergency, mshClaims, mshEligibility, mshPlanComparison, mshPreExisting } from '@/data/mshPolicyContent';

const RimiSuperVisaDetails = () => (
  <InsurerPolicyPage
    insurer="RIMI"
    productName="RIMI Secure Travel — Visitors to Canada Insurance"
    underwriter="Industrial Alliance Insurance and Financial Services Inc., claims administered by MSH Assistance"
    logoSrc="/partner-logos/rimi.png"
    intro="Super Visa qualified emergency medical coverage from the Secure Travel Visitors to Canada plan, with Standard and Enhanced options and optional pre-existing condition coverage."
    documentUrl={policyAsset.url}
    documentFileName="RIMI-Visitors-to-Canada-Policy.pdf"
    documentLabel="Policy Wording (PDF)"
    documentDescription="Complete contract wording: benefits, exclusions, definitions, limitations and claim conditions."
    highlights={[
      { label: 'Maximum policy length', value: '365 days' },
      { label: 'Accidental Death & Dismemberment', value: 'Up to $100,000' },
      { label: 'Flight accident death benefit', value: 'Up to $50,000' },
      { label: 'Minimum premium', value: '$20 per policy' },
      { label: 'Side trips outside Canada', value: 'Up to 30 consecutive days / 49% of coverage' },
      { label: 'Automatic extension', value: 'Up to 72 hours, no extra premium' },
      { label: 'Claims administrator', value: 'MSH Assistance' },
    ]}
    benefits={mshBenefits}
    planComparison={mshPlanComparison}
    planOptions={{
      title: 'Other Plan Rules',
      items: [
        '<strong>Plan 1 vs Plan 2:</strong> <strong>Plan 1</strong> excludes <strong>all</strong> pre-existing conditions. <strong>Plan 2</strong> covers <strong>stable</strong> pre-existing conditions (<strong>90 days</strong> up to age 69, <strong>180 days</strong> ages 70–84) with a completed medical declaration.',
        '<strong>Policy extension:</strong> available <strong>before your expiry date</strong> if you remain eligible, your health has not changed and the premium is paid. Any condition <strong>treated during the first period is excluded</strong> from the extension.',
        '<strong>Minimum premium:</strong> <strong>$20 per policy</strong>. Deductible applies <strong>once per person, per emergency</strong>.',
        '<strong>Side trips:</strong> up to <strong>30 consecutive days</strong> outside Canada and no more than <strong>49% of your coverage period</strong>.',
      ],
    }}
    eligibility={mshEligibility}
    preExisting={mshPreExisting}
    exclusions={mshExclusions}
    emergency={mshEmergency}
    claims={mshClaims}
  />
);

export default RimiSuperVisaDetails;