import React from 'react';
import InsurerPolicyPage from '@/components/InsurerPolicyPage';
import policyAsset from '@/assets/insure-canada-policy.pdf.asset.json';
import { mshBenefits, mshExclusions, mshEmergency, mshClaims, mshEligibility } from '@/data/mshPolicyContent';

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
    planOptions={{
      title: 'Standard vs Enhanced Plan',
      items: [
        '<strong>Hospital room:</strong> ward rate under the Standard plan; <strong>semi-private room</strong> under the Enhanced plan. Intensive care and coronary care are covered when medically necessary under both.',
        '<strong>Prescriptions:</strong> up to $500 per prescription (Standard) or <strong>$1,000</strong> (Enhanced), limited to a 30-day supply unless hospitalized.',
        '<strong>Paramedical services:</strong> up to $300 per profession (Standard) or <strong>$500</strong> (Enhanced) for chiropractor, physiotherapist, podiatrist or osteopath.',
        '<strong>Dental accident:</strong> up to $1,000 (Standard) or <strong>$3,000</strong> (Enhanced); dental pain relief $300 (Standard) or <strong>$500</strong> (Enhanced).',
        '<strong>Repatriation of remains:</strong> up to $5,000 (Standard) or <strong>$10,000</strong> (Enhanced); cremation/burial at place of death $2,500 (Standard) or $5,000 (Enhanced).',
        '<strong>Enhanced plan only:</strong> Transportation to Bedside — round-trip economy airfare plus $150/day to a $3,000 maximum for one person if you are hospitalized 3+ consecutive days or must be identified after death.',
        '<strong>Plan 1 vs Plan 2:</strong> Plan 1 excludes all pre-existing conditions. Plan 2 covers stable pre-existing conditions (90 days up to age 69, 180 days for ages 70–84 with a completed medical declaration).',
        '<strong>Deductible:</strong> chosen at purchase and applied once per insured person, per covered emergency.',
      ],
    }}
    eligibility={mshEligibility}
    preExisting="Under <strong>Plan 1</strong> there is no coverage for any sickness, injury or medical condition that existed before the effective date. Under <strong>Plan 2</strong>, pre-existing conditions are covered if they were <strong>stable for 90 days</strong> before the effective date (up to age 69) or <strong>stable for 180 days</strong> (ages 70–84), provided every question on the medical declaration is answered “no”. If any declaration question is answered “yes”, pre-existing conditions are not covered whether or not stable. “Stable” means no hospitalization, no new diagnosis, treatment or medication, no change in treatment or medication, no new or worsening symptoms, no test results showing deterioration and no specialist referral or pending investigation."
    exclusions={mshExclusions}
    emergency={mshEmergency}
    claims={mshClaims}
  />
);

export default InsureCanadaSuperVisaDetails;