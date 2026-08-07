import React from 'react';
import InsurerPolicyPage from '@/components/InsurerPolicyPage';
import policyAsset from '@/assets/manulife-policy.pdf.asset.json';
import manulifeLogo from '@/assets/manulife-logo.png';

const ManulifeSuperVisaDetails = () => (
  <InsurerPolicyPage
    insurer="Manulife"
    productName="Manulife Visitors to Canada Travel Insurance"
    underwriter="The Manufacturers Life Insurance Company and First North American Insurance Company"
    logoSrc={manulifeLogo}
    intro="Super Visa qualified emergency medical coverage for visitors, work permit holders and new immigrants, with Plan A and Plan B options and a 24/7 Assistance Centre."
    documentUrl={policyAsset.url}
    documentFileName="Manulife-Visitors-to-Canada-Policy.pdf"
    documentLabel="Policy Wording (PDF)"
    documentDescription="Full Manulife Visitors to Canada policy: benefits, exclusions, definitions and claim requirements."
    highlights={[
      { label: 'Maximum policy length', value: '365 days' },
      { label: 'Default deductible', value: '$75 per claim' },
      { label: 'Deductible options', value: '$0, $500, $1,000, $2,500, $5,000' },
      { label: 'Age limits', value: '30 days to 85 years (69 for $150,000 coverage)' },
      { label: 'Emergency dental (accident)', value: 'Up to $4,000' },
      { label: 'Side trips outside Canada', value: 'Lesser of 30 days or 49% of coverage days' },
      { label: 'Free look period', value: '10 days from purchase' },
    ]}
    benefits={[
      '<strong>Emergency medical attention</strong> — reasonable and customary charges for physician care in or out of hospital, a hospital room (semi-private when available, or intensive care when medically necessary), a licensed private duty nurse while hospitalized, rental or purchase of a hospital bed, wheelchair, brace or crutch, diagnostic tests, and prescription drugs. Follow-up visits are covered until the emergency is declared over.',
      '<strong>Paramedical services</strong> — licensed chiropractor, osteopath, acupuncturist, chiropodist, physiotherapist or podiatrist, up to <strong>$70 per visit to a $700 maximum</strong> for a covered injury.',
      '<strong>Ambulance transportation</strong> — reasonable and customary charges for local licensed ground ambulance to the nearest appropriate medical provider.',
      '<strong>Emergency dental treatment</strong> — up to <strong>$300</strong> for relief of dental pain, or up to <strong>$4,000</strong> to repair or replace natural or permanently attached artificial teeth after an accidental blow to the mouth.',
      '<strong>Expenses related to death</strong> — up to $3,000 to prepare the body and return it home, or $3,000 for preparation plus $3,000 for burial where you die, or $3,000 for cremation plus return of ashes. Return airfare plus $300 in hotel and meals is covered for someone legally required to identify the body.',
      '<strong>Expenses to bring you home</strong> — the extra cost of economy airfare, stretcher airfare, a qualified medical attendant, or air ambulance when medically necessary and approved by the Assistance Centre.',
      '<strong>Meals, hotel, phone and taxi</strong> — up to <strong>$150 per day to a $1,500 maximum</strong> when a medical emergency prevents you or your travel companion from returning home as planned.',
      '<strong>Bringing someone to your bedside</strong> — up to <strong>$3,000</strong> return economy airfare for one immediate family member or close friend if you travel alone and are hospitalized 5 days or more, plus up to $500 for their hotel and meals and coverage under the same plan.',
      '<strong>Childcare</strong> — up to <strong>$100 per day to a $300 maximum</strong> per trip for an attendant if you are admitted to hospital.',
      '<strong>Returning children under your care</strong> — the extra cost of the children’s economy airfare plus a qualified escort when the airline requires one.',
      '<strong>Returning your travel companion</strong> — one-way economy airfare home for a travel companion insured under a Manulife plan if you are repatriated or evacuated.',
      '<strong>Hospital allowance</strong> — up to <strong>$100 per 24 hours to a $300 maximum</strong> for telephone and television costs if hospitalized more than 72 hours.',
      '<strong>Trip break</strong> — with prior Assistance Centre approval you may return home without terminating the policy; coverage is suspended and resumes when you return to Canada (no premium refund for those days).',
      '<strong>Travel Accident Insurance</strong> — a benefit payable for accidental loss of life, limb or sight during your trip, subject to its own exclusions.',
      '<strong>Optional Trip Interruption Insurance</strong> — available as an add-on to cover interruption of your trip for a covered reason.',
      '<strong>Maple telemedicine</strong> — the Assistance Centre can connect you within minutes to a Canadian licensed primary care physician for assessment, diagnosis and prescription, 24/7, in most provinces and territories.',
    ]}
    planOptions={{
      title: 'Plan A vs Plan B, Deductibles and Coverage Rules',
      items: [
        '<strong>Plan A</strong> — no benefits for any medical condition, diagnosed or undiagnosed, that existed or for which you sought advice, consultation, investigation or treatment in the <strong>180 days before the effective date</strong>. Family Coverage is available under Plan A.',
        '<strong>Plan B</strong> — covers pre-existing conditions that were <strong>stable in the 180 days</strong> before the effective date. Applicants aged <strong>40 or over must complete the medical questionnaire</strong>.',
        'Both plans exclude any heart condition requiring nitroglycerine for angina, and any lung condition requiring oxygen or Prednisone, in the 180 days before the effective date.',
        '<strong>Deductible:</strong> $75 per claim by default, or $0, $500, $1,000, $2,500 or $5,000 if selected and paid for. It applies per person per emergency medical claim, after any other benefit plan pays.',
        '<strong>Family Coverage:</strong> parents must be under age 60; dependent children must be at least 30 days and under 21 (any age if mentally or physically disabled) and named on the confirmation.',
        '<strong>Waiting period:</strong> except for injury, coverage begins <strong>48 hours after the effective date</strong> if you buy after arriving in Canada or after an existing Manulife policy expires. There is no waiting period if you buy before leaving home.',
        '<strong>Side trips:</strong> covered outside Canada (excluding your country of origin) as long as the trip starts and ends in Canada and does not exceed the lesser of 30 days or 49% of your coverage days.',
        '<strong>Automatic extension:</strong> 72 hours for a common carrier delay; up to 365 days while hospitalized plus 5 days after discharge; 5 days if a physician confirms you cannot travel.',
        'Coverage cannot exceed 365 days and you may not be covered under more than one plan during your trip.',
      ],
    }}
    eligibility={{
      title: 'Who Can Apply — and Who Cannot',
      items: [
        '<strong>Eligible:</strong> visitors to Canada; Canadians not eligible for a government health plan; people in Canada on a work visa or Parent and Grandparent Super Visa; new immigrants awaiting government health coverage.',
        '<strong>Not eligible</strong> if you are travelling against the advice of a physician.',
        '<strong>Not eligible</strong> if you have been diagnosed with a terminal illness with less than 2 years to live.',
        '<strong>Not eligible</strong> if you have a kidney condition requiring dialysis.',
        '<strong>Not eligible</strong> if you used home oxygen in the 12 months before applying.',
        '<strong>Not eligible</strong> if you have been diagnosed with Alzheimer’s disease or any other form of dementia.',
        '<strong>Not eligible</strong> if you are under 30 days or over 85 years of age (over 69 for $150,000 emergency medical coverage).',
        '<strong>Not eligible</strong> if you reside in a nursing home, home for the aged, long-term care facility or rehabilitation centre.',
        '<strong>Not eligible</strong> if you require assistance with activities of daily living.',
      ],
    }}
    preExisting="Under <strong>Plan A</strong> there is no coverage for any medical condition — diagnosed or undiagnosed — that existed, or for which you sought or received advice, consultation, investigation or treatment, in the <strong>180 days before your effective date</strong>. Under <strong>Plan B</strong> a pre-existing condition is covered only if it was <strong>stable in the 180 days</strong> before the effective date. Both plans exclude heart conditions requiring nitroglycerine and lung conditions requiring oxygen or Prednisone in that 180-day window, and any pre-existing condition for which you were hospitalized more than once, or for at least two consecutive days, in the 12 months before your effective date."
    exclusions={[
      'Any sickness that first appears during the 48-hour waiting period, even if the expenses are incurred later.',
      'Pre-existing conditions as described above (Plan A: any condition in the prior 180 days; Plan B: conditions not stable for 180 days).',
      'Any pre-existing condition for which you were hospitalized more than once, or for at least two consecutive days, in the 12 months before the effective date.',
      'Charges exceeding reasonable and customary rates, or exceeding the maximum insured amount of the plan you purchased.',
      'Any claim where the information on your application was not truthful and accurate, or you did not meet the eligibility requirements.',
      '20% of eligible expenses if you do not contact the Assistance Centre within 24 hours of hospitalization (waived when it was medically impossible to call).',
      'Any treatment that is not for an emergency, and continued treatment after the medical advisors determine the emergency has ended.',
      'MRI, CAT scans, sonograms, ultrasounds, biopsies, cardiac catheterization, angioplasty, cardiovascular surgery and any surgery not authorized in advance by the Assistance Centre.',
      'A condition you knew or could reasonably expect would need treatment during your trip, had planned investigation for, produced symptoms in the 3 months before leaving home, or that your physician advised you not to travel with.',
      'Injury or sickness that started or was treated during a trip break, or after the permitted days outside Canada.',
      'Mountain climbing with specialized equipment, rock climbing, parachuting, skydiving, hang gliding, air-supported sporting devices, motorized speed contests, and professional participation in sport, snorkeling or diving.',
      'Self-inflicted injuries, unless medical evidence establishes they are related to a mental health illness.',
      'Committing or attempting to commit a criminal act.',
      'Not following a recommended or prescribed therapy or treatment.',
      'Acts of war or terrorism, and travel to a country, region or city under a Government of Canada advisory issued before your departure.',
      'Piloting or learning to pilot an aircraft, or acting as a member of an aircraft crew (Travel Accident Insurance).',
    ]}
    emergency={[
      'Call the <strong>Manulife Assistance Centre first</strong> — it is open 24 hours a day, every day of the year.',
      'Toll-free from Canada and the USA: <strong>1 877 878-0142</strong>.',
      'Collect to Canada from anywhere else in the world: <strong>+1 (519) 251-5166</strong>.',
      'If you do not call within <strong>24 hours of hospitalization</strong> or before treatment, you pay <strong>20% of the eligible medical expenses</strong> Manulife would normally cover. If it is medically impossible to call, have someone call for you.',
      'All surgery and major diagnostic tests must be authorized by the Assistance Centre in advance.',
      'The TravelAid mobile app gives instant access to the Assistance Centre, directions to the nearest medical facility and local emergency numbers.',
    ]}
    claims={[
      'Contact the Assistance Centre before any treatment or claim so your file is opened correctly.',
      'Keep all original receipts, invoices and medical documentation supporting the claim.',
      'For trip interruption claims, provide unused transportation tickets and vouchers, receipts for new tickets, and receipts for prepaid arrangements and extra hotel, meal, taxi and telephone costs.',
      'Manulife may obtain and review medical records from your attending physician to validate a claim.',
      'Legal action to recover money under the policy must be started within the time limits set out in the applicable Insurance Act or Limitations Act.',
      '<strong>10-day free look:</strong> notify Manulife within 10 days of purchase for a full refund if you have not departed and there is no claim in progress.',
    ]}
  />
);

export default ManulifeSuperVisaDetails;