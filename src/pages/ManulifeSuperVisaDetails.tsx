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
    planComparison={{
      title: 'Plan A vs Plan B — Side by Side',
      subtitle:
        'Both plans pay the same emergency medical benefits. The only real difference is how pre-existing medical conditions are treated — and what you have to declare to get them covered.',
      planALabel: 'Plan A',
      planBLabel: 'Plan B',
      planANote: 'Lower premium — no pre-existing coverage',
      planBNote: 'Covers stable pre-existing conditions',
      rows: [
        { feature: 'Pre-existing conditions', a: '<strong>Not covered.</strong> Any condition — diagnosed or undiagnosed — that existed or was investigated in the <strong>180 days before the effective date</strong> is excluded.', b: '<strong>Covered if stable</strong> in the <strong>180 days before the effective date</strong>.' },
        { feature: 'Medical questionnaire', a: '<strong>Not required</strong>', b: '<strong>Required for applicants age 40 and over</strong>' },
        { feature: 'Family Coverage', a: '<strong>Available</strong> (parents under age 60, children 30 days to under 21)', b: '<strong>Not available</strong> — each person is insured individually' },
        { feature: 'Emergency medical maximum', a: '<strong>$100,000 / $150,000</strong> (and higher limits where offered)', b: '<strong>$100,000 / $150,000</strong> (and higher limits where offered)' },
        { feature: 'Deductible', a: 'Default <strong>$75 per claim</strong>; options <strong>$0, $500, $1,000, $2,500, $5,000</strong>', b: 'Default <strong>$75 per claim</strong>; options <strong>$0, $500, $1,000, $2,500, $5,000</strong>' },
        { feature: 'Waiting period', a: '<strong>48 hours</strong> for sickness if bought <strong>after arriving</strong> in Canada; <strong>none</strong> if bought before you leave home', b: '<strong>48 hours</strong> for sickness if bought <strong>after arriving</strong> in Canada; <strong>none</strong> if bought before you leave home' },
        { feature: 'Emergency dental', a: 'Up to <strong>$4,000</strong> (accident) and <strong>$300</strong> (pain relief)', b: 'Up to <strong>$4,000</strong> (accident) and <strong>$300</strong> (pain relief)' },
        { feature: 'Paramedical services', a: '<strong>$70 per visit</strong> to a <strong>$700 maximum</strong>', b: '<strong>$70 per visit</strong> to a <strong>$700 maximum</strong>' },
        { feature: 'Bedside visit', a: 'Up to <strong>$3,000</strong> airfare after <strong>5 days</strong> in hospital, plus <strong>$500</strong> hotel and meals', b: 'Up to <strong>$3,000</strong> airfare after <strong>5 days</strong> in hospital, plus <strong>$500</strong> hotel and meals' },
        { feature: 'Always excluded on both', a: 'Heart condition needing <strong>nitroglycerine</strong> or lung condition needing <strong>oxygen / Prednisone</strong> in the prior <strong>180 days</strong>', b: 'Heart condition needing <strong>nitroglycerine</strong> or lung condition needing <strong>oxygen / Prednisone</strong> in the prior <strong>180 days</strong>' },
        { feature: 'Age limits', a: '<strong>30 days to 85 years</strong> (<strong>69</strong> for $150,000 coverage)', b: '<strong>30 days to 85 years</strong> (<strong>69</strong> for $150,000 coverage)' },
      ],
    }}
    planOptions={{
      title: 'Other Coverage Rules',
      items: [
        '<strong>Family Coverage:</strong> parents must be <strong>under age 60</strong>; dependent children must be at least <strong>30 days and under 21</strong> (any age if mentally or physically disabled) and <strong>named on the confirmation</strong>.',
        '<strong>Side trips:</strong> covered outside Canada (<strong>excluding your country of origin</strong>) if the trip <strong>starts and ends in Canada</strong> and does not exceed the lesser of <strong>30 days or 49% of your coverage days</strong>.',
        '<strong>Automatic extension:</strong> <strong>72 hours</strong> for a common carrier delay; up to <strong>365 days while hospitalized</strong> plus <strong>5 days after discharge</strong>; <strong>5 days</strong> if a physician confirms you cannot travel.',
        '<strong>Trip break:</strong> with prior Assistance Centre approval you may go home without cancelling — coverage is <strong>suspended</strong> and resumes on return (<strong>no premium refund</strong> for those days).',
        'Coverage cannot exceed <strong>365 days</strong> and you may <strong>not be covered under more than one plan</strong> during your trip.',
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
    preExisting={[
      '<strong>Plan A — no pre-existing coverage.</strong> Any condition, <strong>diagnosed or undiagnosed</strong>, that existed or was advised on, investigated or treated in the <strong>180 days before your effective date</strong> is excluded.',
      '<strong>Plan B — stable conditions covered.</strong> A pre-existing condition is covered only if it was <strong>stable for the full 180 days</strong> before the effective date.',
      '<strong>Questionnaire:</strong> Plan B applicants <strong>age 40 and over must complete the medical questionnaire</strong> — answers must be <strong>truthful and accurate</strong> or the claim can be denied.',
      '<strong>Excluded on both plans:</strong> heart conditions requiring <strong>nitroglycerine</strong> for angina, and lung conditions requiring <strong>oxygen or Prednisone</strong>, in that <strong>180-day window</strong>.',
      '<strong>Excluded on both plans:</strong> any pre-existing condition you were hospitalized for <strong>more than once</strong>, or for <strong>2+ consecutive days</strong>, in the <strong>12 months</strong> before your effective date.',
    ]}
    exclusions={[
      'Any sickness that first appears during the <strong>48-hour waiting period</strong>, even if the expenses are incurred later.',
      '<strong>Pre-existing conditions</strong> as described above (<strong>Plan A:</strong> any condition in the prior <strong>180 days</strong>; <strong>Plan B:</strong> conditions <strong>not stable for 180 days</strong>).',
      'Any pre-existing condition you were hospitalized for <strong>more than once</strong>, or for <strong>2+ consecutive days</strong>, in the <strong>12 months</strong> before the effective date.',
      'Charges exceeding <strong>reasonable and customary</strong> rates, or exceeding the <strong>maximum insured amount</strong> of the plan you purchased.',
      'Any claim where your application was <strong>not truthful and accurate</strong>, or you did not meet the <strong>eligibility requirements</strong>.',
      '<strong>20% of eligible expenses</strong> if you do not contact the Assistance Centre <strong>within 24 hours of hospitalization</strong> (waived when it was medically impossible to call).',
      'Any treatment that is <strong>not for an emergency</strong>, and continued treatment after the emergency is <strong>declared over</strong>.',
      '<strong>MRI, CAT scans, sonograms, ultrasounds, biopsies, cardiac catheterization, angioplasty, cardiovascular surgery</strong> and any surgery <strong>not authorized in advance</strong> by the Assistance Centre.',
      'A condition you knew would need treatment during your trip, had <strong>planned investigation</strong> for, produced <strong>symptoms in the 3 months</strong> before leaving home, or that your physician advised you not to travel with.',
      'Injury or sickness that started or was treated during a <strong>trip break</strong>, or after the <strong>permitted days outside Canada</strong>.',
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