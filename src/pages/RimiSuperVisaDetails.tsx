import React from 'react';
import InsurerPolicyPage from '@/components/InsurerPolicyPage';
import policyAsset from '@/assets/rimi-policy.pdf.asset.json';
import { mshBenefits, mshExclusions, mshEmergency, mshClaims, mshEligibility } from '@/data/mshPolicyContent';

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
    planOptions={{
      title: 'Standard vs Enhanced Plan',
      items: [
        '<strong>Hospital room:</strong> ward rate under the Standard plan; <strong>semi-private room</strong> under the Enhanced plan.',
        '<strong>Prescriptions:</strong> up to $500 per prescription (Standard) or <strong>$1,000</strong> (Enhanced), limited to a 30-day supply unless hospitalized.',
        '<strong>Paramedical services:</strong> up to $300 per profession (Standard) or <strong>$500</strong> (Enhanced).',
        '<strong>Dental accident:</strong> up to $1,000 (Standard) or <strong>$3,000</strong> (Enhanced); dental pain relief $300 (Standard) or <strong>$500</strong> (Enhanced).',
        '<strong>Repatriation of remains:</strong> up to $5,000 (Standard) or <strong>$10,000</strong> (Enhanced); cremation/burial at place of death $2,500 (Standard) or $5,000 (Enhanced).',
        '<strong>Enhanced plan only:</strong> Transportation to Bedside — round-trip economy airfare plus $150/day to a $3,000 maximum.',
        '<strong>Plan 1 vs Plan 2:</strong> Plan 1 excludes all pre-existing conditions. Plan 2 covers stable pre-existing conditions (90 days up to age 69, 180 days for ages 70–84 with a completed medical declaration).',
        '<strong>Policy extension:</strong> available before your expiry date if you remain eligible, your health has not changed and the premium is paid. Any condition treated during the first period is excluded from the extension.',
      ],
    }}
    eligibility={mshEligibility}
    preExisting="Under <strong>Plan 1</strong> there is no coverage for any pre-existing sickness, injury or medical condition. Under <strong>Plan 2</strong>, pre-existing conditions are covered if <strong>stable for 90 days</strong> before the effective date (up to age 69) or <strong>stable for 180 days</strong> (ages 70–84), provided every medical declaration question is answered “no”. “Stable” means no hospitalization, no new diagnosis, treatment or medication, no change in treatment or medication, no new or worsening symptoms, no test results showing deterioration and no specialist referral or pending investigation."
    exclusions={mshExclusions}
    emergency={mshEmergency}
    claims={mshClaims}
  />
);

export default RimiSuperVisaDetails;