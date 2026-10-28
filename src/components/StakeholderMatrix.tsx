import React, { useState } from 'react';
import {
  Building2,
  Stethoscope,
  ShieldCheck,
  Landmark,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

interface Stakeholder {
  id: string;
  role: string;
  entity: string;
  representative: string;
  primaryIncentive: string;
  painPoints: string[];
  setuIntervention: string;
  economicImpact: string;
  adoptionFriction: 'Low' | 'Medium' | 'High';
  contractType: string;
}

const STAKEHOLDERS: Stakeholder[] = [
  {
    id: "hospital-cfo",
    role: "Hospital Leadership",
    entity: "Mid-size Private Multispecialty Hospitals (200–600 beds)",
    representative: "CFO / Chief Operating Officer",
    primaryIncentive: "Accelerate cash flow, shorten patient bed turnaround, and eliminate claim deductions",
    painPoints: [
      "IRDAI 3h discharge authorization penalty if paperwork delays hold up room vacancy",
      "Average 18–24% claim queries causing 45–60 day payment delays from TPAs",
      "High nursing and billing staff fatigue from manual coding"
    ],
    setuIntervention: "Automated claim pre-check, missing document detection, and instant bilingual discharge summaries",
    economicImpact: "Reduces claim denials by 70%; recaptures ₹1.2–₹1.8 Cr annually in delayed working capital per 300 beds",
    adoptionFriction: "Medium",
    contractType: "8–12 week paid pilot → Post-paid outcome-linked annual SaaS"
  },
  {
    id: "diagnostic-ops",
    role: "Diagnostic Laboratory Networks",
    entity: "Regional Pathology & Imaging Chains (Chennai, Madurai, Coimbatore)",
    representative: "Chief Operating Officer / Billing Director",
    painPoints: [
      "High rejection rate of outpatient test claims by TPAs due to non-standardized doctor prescription formats",
      "Vernacular patient queries delaying diagnostic report delivery in tier-2/3 towns",
      "Manual DPDP consent paperwork logging"
    ],
    primaryIncentive: "Fast reimbursement for outsourced panels and automated multilingual reporting",
    setuIntervention: "Automated test-to-ICD coding, DPDP cryptographic consent capture, Tamil & Telugu diagnostic reports",
    economicImpact: "Reimbursement collection time cut from 42 days to 14 days",
    adoptionFriction: "Low",
    contractType: "3–5 month sales cycle; usage-based per test report"
  },
  {
    id: "tpa-claims-head",
    role: "TPA & Health Insurers",
    entity: "Third-Party Administrators (Medi Assist, Vidal, Star Health, ICICI Lombard)",
    representative: "Head of Claims Operations / Chief Medical Officer",
    primaryIncentive: "Strict compliance with IRDAI 1h pre-auth and 3h final authorization without inflating claims fraud",
    painPoints: [
      "Extreme document formatting variability from 2,000+ empanelled hospitals",
      "Manual medical review team overwhelmed by claim volume spikes following policy expansions",
      "Regulatory penalties from IRDAI for missed turnaround deadlines"
    ],
    setuIntervention: "Pre-structured FHIR/JSON claim packets with tamper-evident audit trails and fraud-risk signals",
    economicImpact: "4x reviewer throughput; 100% adherence to 1h/3h statutory clocks",
    adoptionFriction: "High",
    contractType: "Enterprise master service agreement with SLA penalties"
  },
  {
    id: "govt-cmchis",
    role: "Government Health Authority",
    entity: "Tamil Nadu CMCHIS (State Health Agency)",
    representative: "Scheme Director / Principal Secretary Health",
    primaryIncentive: "Universal, seamless healthcare delivery under the enhanced ₹25L coverage ceiling",
    painPoints: [
      "5x cover increase (₹5L → ₹25L in Aug 2026) creating audit bottlenecks across 2,157 empanelled facilities",
      "Disputes over package code tariffs and implant pricing",
      "Lack of clean digital audit trails for public fund utilization"
    ],
    setuIntervention: "Rule-based tariff engine mapped directly to CMCHIS guidelines; tamper-proof DPDP consent logs",
    economicImpact: "Zero leakage in state subsidy disbursement; near-instant pre-auth for critical surgeries",
    adoptionFriction: "Medium",
    contractType: "Public-Private Partnership / State GTM enablement in Year 2+"
  },
  {
    id: "patients-tourists",
    role: "Patients & Families",
    entity: "Domestic Patients (~85%) & International Medical Tourists (~15 Lakh/yr in TN)",
    representative: "Patient / Attendant / Medical Tourism Facilitator",
    primaryIncentive: "Zero administrative harassment at discharge, dignity in vernacular language, transparent billing",
    painPoints: [
      "Stranded in hospital lobby for 4–8 hours awaiting TPA discharge clearance",
      "Discharge papers only in English; patient cannot understand home recovery medications",
      "Fear of unauthorized health data sharing"
    ],
    setuIntervention: "Discharge instructions in native Tamil/Telugu/Arabic/English; digital DPDP consent privacy guarantee",
    economicImpact: "Zero out-of-pocket administrative delay expenses; instant peaceful discharge",
    adoptionFriction: "Low",
    contractType: "Delivered free-of-cost via hospital admin layer"
  }
];

export const StakeholderMatrix: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(STAKEHOLDERS[0].id);

  const activeStakeholder = STAKEHOLDERS.find((s) => s.id === selectedId) || STAKEHOLDERS[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
      {/* Header */}
      <div className="pb-5 border-b border-slate-100">
        <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-700 uppercase">
          <UserCheck className="w-4 h-4 text-indigo-600" />
          <span>Stakeholder Ecosystem & Incentives Alignment</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
          Who Wins with Setu AI? Full Stakeholder Economics
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          A sustainable healthtech business must deliver clear economic surplus to hospitals, TPAs, government schemes, and patients simultaneously.
        </p>
      </div>

      {/* Stakeholder Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-5">
        {STAKEHOLDERS.map((s) => {
          const isSelected = s.id === selectedId;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`p-3 rounded-lg text-left transition-all border ${
                isSelected
                  ? 'bg-indigo-50/90 border-indigo-500 text-indigo-950 font-semibold shadow-xs ring-1 ring-indigo-500'
                  : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="text-[10px] font-mono text-indigo-700 uppercase tracking-wider">
                {s.role}
              </div>
              <div className="text-xs font-bold truncate mt-0.5">{s.representative}</div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Card */}
      <div className="mt-5 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">
              {activeStakeholder.role}
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">
              {activeStakeholder.entity}
            </h3>
            <div className="text-xs text-slate-600 font-medium">
              Key Decision Maker: <span className="font-bold text-slate-800">{activeStakeholder.representative}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-500 font-medium">Adoption Friction:</span>
            <span
              className={`px-2.5 py-0.5 rounded text-xs font-bold font-mono ${
                activeStakeholder.adoptionFriction === 'Low'
                  ? 'bg-emerald-100 text-emerald-800'
                  : activeStakeholder.adoptionFriction === 'Medium'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-rose-100 text-rose-800'
              }`}
            >
              {activeStakeholder.adoptionFriction} Friction
            </span>
          </div>
        </div>

        {/* 3 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Pain Points */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
            <div className="text-xs font-bold text-rose-700 uppercase tracking-wide flex items-center space-x-1.5 mb-2">
              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>Current Friction & Bottlenecks</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {activeStakeholder.painPoints.map((p, idx) => (
                <li key={idx} className="flex items-start space-x-1.5">
                  <span className="text-rose-500 font-bold shrink-0">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Setu Intervention */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
            <div className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center space-x-1.5 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>Setu AI Intervention</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {activeStakeholder.setuIntervention}
            </p>
            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-indigo-900 font-medium bg-indigo-50/50 p-2 rounded">
              <span className="font-bold">Commercial Engagement: </span>
              {activeStakeholder.contractType}
            </div>
          </div>

          {/* Measurable Economic ROI */}
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide flex items-center space-x-1.5 mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Measurable Economic ROI</span>
            </div>
            <p className="text-xs font-semibold text-emerald-950 leading-relaxed bg-emerald-50/70 p-2.5 rounded border border-emerald-200">
              {activeStakeholder.economicImpact}
            </p>
            <div className="mt-3 text-[11px] text-slate-500">
              Primary Incentive: <span className="text-slate-800 font-medium">{activeStakeholder.primaryIncentive}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
