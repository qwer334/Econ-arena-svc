import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  Leaf,
  Users,
  Send,
  RefreshCw,
  Cpu,
  Layers,
  ArrowRight,
  Download,
  QrCode
} from 'lucide-react';

interface PatientCase {
  id: string;
  name: string;
  ageGender: string;
  category: 'Scheme (TN CMCHIS)' | 'Medical Tourist' | 'Private Insurance';
  diagnosisSummary: string;
  admissionDate: string;
  dischargeDate: string;
  roomType: string;
  procedure: string;
  claimedAmount: number;
  schemeCoverCeiling: number; // ₹25L in Aug 2026
  icdCode: string;
  hospital: string;
  languages: {
    en: string;
    ta: string; // Tamil
    te: string; // Telugu
    hi: string; // Hindi
  };
  missingFlags: string[];
}

const SAMPLE_PATIENTS: PatientCase[] = [
  {
    id: "PT-TN-8492",
    name: "K. Subramanian",
    ageGender: "62 / Male",
    category: "Scheme (TN CMCHIS)",
    diagnosisSummary: "Bilateral Severe Osteoarthritis Knee - Total Knee Replacement (Left)",
    admissionDate: "2026-10-24",
    dischargeDate: "2026-10-28",
    roomType: "Semi-Private Scheme Ward (Apollo Chennai)",
    procedure: "Left Total Knee Arthroplasty with Stryker Triathlon Implant",
    claimedAmount: 285000,
    schemeCoverCeiling: 2500000, // ₹25 Lakh CMCHIS enhanced cover
    icdCode: "M17.12 (Unilateral primary osteoarthritis, left knee)",
    hospital: "Apollo Hospitals, Greams Road, Chennai",
    languages: {
      en: "Patient underwent successful Unilateral Total Knee Arthroplasty (Left). Vitals stable. Mobilizing with walker assistance. Wound clean and dry. Advised physical therapy, rivaroxaban 10mg OD for DVT prophylaxis, and follow-up in 10 days.",
      ta: "நோயாளிக்கு இடது முழங்கால் மூட்டு மாற்று அறுவை சிகிச்சை வெற்றிகரமாக செய்யப்பட்டது. உடல்நிலை சீராக உள்ளது. வாக்கர் உதவியுடன் நடக்கிறார். காயம் உலர்வாகவும் சுத்தமாகவும் உள்ளது. 10 நாட்களுக்குப் பிறகு மறு பரிசோதனைக்கு வர அறிவுறுத்தப்பட்டுள்ளது.",
      te: "రోగికి ఎడమ మోకాలి మార్పిడి శస్త్రచికిత్స విజయవంతంగా జరిగింది. ఆరోగ్య పరిస్థితి నిలకడగా ఉంది. వాకర్ సహాయంతో నడుస్తున్నారు. మందులు మరియు ఫిజియోథెరపీ సూచించబడ్డాయి. 10 రోజుల తర్వాత సమీక్ష అవసరం.",
      hi: "रोगी का बायां घुटना प्रत्यारोपण (Total Knee Replacement) सफलतापूर्वक संपन्न हुआ। स्थिति स्थिर है। वॉकर की सहायता से गतिशीलता सुचारू है। 10 दिनों बाद पुनः परीक्षण हेतु परामर्श दिया गया है।"
    },
    missingFlags: [
      "Implant batch sticker barcode scan unverified in HIS billing packet",
      "CMCHIS Pre-auth approval reference number not synced with state portal API",
      "Post-operative AP/Lateral X-ray radiology confirmation note unattached"
    ]
  },
  {
    id: "PT-INT-3021",
    name: "Fatima Al-Zahra",
    ageGender: "47 / Female",
    category: "Medical Tourist",
    diagnosisSummary: "Coronary Artery Disease - Drug-Eluting Stent Placement (LAD)",
    admissionDate: "2026-10-25",
    dischargeDate: "2026-10-28",
    roomType: "Deluxe International Suite (Fortis Malar)",
    procedure: "Percutaneous Coronary Intervention (PCI) with Onyx Stent 3.0x24mm",
    claimedAmount: 640000,
    schemeCoverCeiling: 2500000,
    icdCode: "I25.10 (Atherosclerotic heart disease of native coronary artery)",
    hospital: "Fortis Malar Hospital, Adyar, Chennai",
    languages: {
      en: "Patient presented with unstable angina; successfully treated via single drug-eluting stent to Proximal LAD. Ejection fraction 55%. Prescribed dual antiplatelet therapy (Aspirin + Ticagrelor). Medically fit to fly internationally after 72 hours.",
      ta: "நோயாளியின் கரோனரி தமனி அடைப்புக்கு ஸ்டென்ட் வெற்றிகரமாக பொருத்தப்பட்டது. இதய செயல்பாடு 55% ஆக சீராக உள்ளது. 72 மணி நேரத்திற்குப் பிறகு விமானப் பயணம் மேற்கொள்ள அனுமதி வழங்கப்படுகிறது.",
      te: "రోగికి గుండె రక్తనాళాల సమస్యకు స్టెంట్ విజయవంతంగా అమర్చబడింది. 72 గంటల తర్వాత విమాన ప్రయాణానికి అనుమతించబడింది.",
      hi: "रोगी को हृदय धमनी अवरोध हेतु स्टेंट सफलतापूर्वक लगाया गया। हृदय पंपिंग 55% सामान्य है। 72 घंटों के उपरांत अंतरराष्ट्रीय हवाई यात्रा की अनुमति प्रदान की गई है।"
    },
    missingFlags: [
      "Fit-to-fly cross-border medical escort clearance certificate pending signature",
      "Foreign passport & Medical Visa endorsement stamp copy missing in claims bundle"
    ]
  }
];

export const SetuPrototype: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discharge' | 'claims' | 'twin' | 'green'>('discharge');
  const [selectedPatient, setSelectedPatient] = useState<PatientCase>(SAMPLE_PATIENTS[0]);
  const [selectedLang, setSelectedLang] = useState<'en' | 'ta' | 'te' | 'hi'>('ta');
  const [isGenerating, setIsGenerating] = useState(false);
  const [consentGranted, setConsentGranted] = useState(true);

  // Claims state
  const [denialRiskScore, setDenialRiskScore] = useState<number>(38); // 38% High Risk initially
  const [isFixingClaim, setIsFixingClaim] = useState<boolean>(false);
  const [fixedClaim, setFixedClaim] = useState<boolean>(false);

  // Green compute state
  const [batchMode, setBatchMode] = useState<boolean>(true);
  const [cachedRequests, setCachedRequests] = useState<number>(1420);

  const handleGenerateSummary = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  };

  const handleRemediateClaim = () => {
    setIsFixingClaim(true);
    setTimeout(() => {
      setIsFixingClaim(false);
      setFixedClaim(true);
      setDenialRiskScore(4); // Drops to 4% (Green!)
    }, 1200);
  };

  const handleResetClaim = () => {
    setFixedClaim(false);
    setDenialRiskScore(38);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Prototype Header with Live Status */}
      <div className="bg-slate-900 text-white p-5 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE WORKING PROTOTYPE • SETU AI V2.4</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Chennai Cloud Node (320 MW Hub)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Setu Admin & Claims Intelligence Engine
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Zero clinical diagnosis liability — specialized in DPDP consent, Tamil/Telugu discharge translation, and IRDAI 1h/3h pre-submission adjudication.
            </p>
          </div>

          {/* IRDAI Live Countdown Clock simulation */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-lg p-3 flex items-center space-x-3 shrink-0">
            <Clock className="w-5 h-5 text-amber-400 animate-pulse" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                IRDAI Cashless Regulatory Clock
              </div>
              <div className="text-sm font-mono font-bold text-amber-300">
                02h : 18m : 42s <span className="text-xs font-normal text-slate-300">remaining</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prototype Navigation Tabs */}
        <div className="flex items-center space-x-2 mt-5 border-t border-slate-800 pt-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab('discharge')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              activeTab === 'discharge'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>1. Multilingual Discharge & DPDP</span>
          </button>

          <button
            onClick={() => setActiveTab('claims')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              activeTab === 'claims'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>2. Claims-Denial Copilot</span>
          </button>

          <button
            onClick={() => setActiveTab('twin')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              activeTab === 'twin'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>3. Patient Twin AI (Moat)</span>
          </button>

          <button
            onClick={() => setActiveTab('green')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              activeTab === 'green'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Leaf className="w-3.5 h-3.5" />
            <span>4. Green Compute Scheduler</span>
          </button>
        </div>
      </div>

      {/* Main Prototype Content Area */}
      <div className="p-5 sm:p-6 bg-slate-50 min-h-[480px]">
        {/* TAB 1: Multilingual Discharge & DPDP Consent Engine */}
        {activeTab === 'discharge' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                  Select Patient Record (Beachhead Hospitals)
                </span>
                <div className="flex items-center space-x-3 mt-1">
                  {SAMPLE_PATIENTS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPatient(p)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        selectedPatient.id === p.id
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-900 font-bold ring-1 ring-indigo-500'
                          : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {p.name} ({p.category})
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Switcher */}
              <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                <span className="text-[11px] text-slate-500 px-2 font-medium">Target Language:</span>
                {(['ta', 'te', 'en', 'hi'] as const).map((lang) => {
                  const labels = {
                    ta: 'தமிழ் (Tamil)',
                    te: 'తెలుగు (Telugu)',
                    en: 'English',
                    hi: 'हिन्दी (Hindi)'
                  };
                  return (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        handleGenerateSummary();
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                        selectedLang === lang
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {labels[lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Discharge Summary Sheet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {/* Summary Document (8 cols) */}
              <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 shadow-xs relative">
                {isGenerating && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-xs z-10 flex items-center justify-center rounded-xl">
                    <div className="flex items-center space-x-2 text-indigo-600 font-semibold text-sm">
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Generating Localized Vernacular Discharge Summary...</span>
                    </div>
                  </div>
                )}

                {/* Hospital Header */}
                <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Empanelled Healthcare Facility
                    </div>
                    <div className="text-base font-extrabold text-slate-900">
                      {selectedPatient.hospital}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Case ID: <span className="font-mono text-slate-700 font-bold">{selectedPatient.id}</span> • Admission: {selectedPatient.admissionDate} → Discharge: {selectedPatient.dischargeDate}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      DPDP Consent Verified
                    </span>
                    <div className="text-[11px] font-mono text-slate-400 mt-1">Hash: #a94f83b2</div>
                  </div>
                </div>

                {/* Patient Profile Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-b border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 block">Patient Name</span>
                    <span className="font-bold text-slate-800">{selectedPatient.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Age / Gender</span>
                    <span className="font-semibold text-slate-800">{selectedPatient.ageGender}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Category</span>
                    <span className="font-semibold text-indigo-700">{selectedPatient.category}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">ICD-10 Diagnosis</span>
                    <span className="font-mono text-slate-700 truncate block">{selectedPatient.icdCode}</span>
                  </div>
                </div>

                {/* Clinical Admin Procedure & Vernacular Translation */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Official Multilingual Discharge Instructions (No Clinical Diagnosis Liability)
                    </span>
                    <span className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      Audited by Setu Vernacular LLM
                    </span>
                  </div>

                  <div className="mt-2.5 p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="text-sm font-medium text-slate-900 leading-relaxed font-sans">
                      {selectedPatient.languages[selectedLang]}
                    </div>
                  </div>
                </div>

                {/* English Ground Truth Comparison */}
                {selectedLang !== 'en' && (
                  <div className="mt-3 p-3 bg-white border border-dashed border-slate-300 rounded-lg text-xs text-slate-600">
                    <span className="font-bold text-slate-700">English Source Verification: </span>
                    <span>{selectedPatient.languages.en}</span>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Compliant with Tamil Nadu Safe & Ethical AI Policy 2020</span>
                  </div>
                  <button
                    onClick={() => alert(`Exporting localized discharge summary for ${selectedPatient.name} in ${selectedLang.toUpperCase()}`)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Discharge Packet (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Right: DPDP Consent Architecture & Audit Token (4 cols) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>DPDP Act 2023 Consent Card</span>
                  </div>

                  <div className="text-xs text-slate-600 space-y-3">
                    <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg">
                      <div className="font-bold text-emerald-950 flex items-center justify-between">
                        <span>Consent Status: ACTIVE</span>
                        <span className="text-[10px] font-mono text-emerald-700">Verifiable</span>
                      </div>
                      <p className="mt-1 text-[11px] text-emerald-900 leading-normal">
                        Explicit digital consent recorded from patient for third-party billing, TPA adjudication, and vernacular discharge generation.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[11px] text-slate-500 font-medium">Consent Guardrails:</div>
                      <ul className="space-y-1 text-[11px] text-slate-700">
                        <li className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Purpose Limitation: Discharge & Claims only</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Zero LLM training on PHI (Private Data)</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>Tamil Nadu Residency Compliant</span>
                        </li>
                      </ul>
                    </div>

                    {/* QR Code Digital Token Simulation */}
                    <div className="border border-slate-200 rounded-lg p-3 flex items-center space-x-3 bg-slate-50">
                      <div className="w-12 h-12 bg-white rounded border border-slate-300 flex items-center justify-center text-slate-700 shrink-0">
                        <QrCode className="w-9 h-9 text-slate-800" />
                      </div>
                      <div>
                        <div className="font-mono text-[11px] font-bold text-slate-800">
                          DPDP-TOKEN-2026-TN-99
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Scan to verify consent timestamp & cryptographic signature
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scheme Trigger Notice */}
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 text-xs text-amber-950">
                  <div className="font-bold flex items-center space-x-1 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>TN CMCHIS 5× Cover Surge</span>
                  </div>
                  <p className="mt-1 text-[11px] text-amber-900 leading-normal">
                    Cover expanded from ₹5L → ₹25L in August 2026. Claims above ₹5L now encounter mandatory automated insurer audit rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Claims-Denial Copilot */}
        {activeTab === 'claims' && (
          <div className="space-y-6">
            {/* Top Stats Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Claim Amount</span>
                <div className="text-xl font-bold text-slate-900 mt-0.5">
                  ₹{selectedPatient.claimedAmount.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Within ₹25L CMCHIS ceiling</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">IRDAI Compliance Window</span>
                <div className="text-xl font-bold text-indigo-700 mt-0.5">
                  1h Pre / 3h Final
                </div>
                <div className="text-[11px] text-emerald-600 font-medium mt-1">Time Remaining: 02h : 18m</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs text-slate-500 font-medium">Predicted Denial Risk</span>
                <div
                  className={`text-xl font-bold mt-0.5 ${
                    denialRiskScore > 20 ? 'text-rose-600' : 'text-emerald-600'
                  }`}
                >
                  {denialRiskScore}% {denialRiskScore > 20 ? 'HIGH RISK' : 'APPROVED READY'}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {fixedClaim ? 'All 3 queries resolved' : '3 critical omissions detected'}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-center">
                {fixedClaim ? (
                  <button
                    onClick={handleResetClaim}
                    className="w-full py-2 px-3 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    Reset Inspection
                  </button>
                ) : (
                  <button
                    onClick={handleRemediateClaim}
                    disabled={isFixingClaim}
                    className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center space-x-1.5"
                  >
                    {isFixingClaim ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Auto-Remediating...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>1-Click Auto-Remediate</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Missing Items & Remediation Panel */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Pre-Submission Adjudication Audit: {selectedPatient.id}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Evaluating claim packet against TPA underwriting rules and Tamil Nadu CMCHIS tariffs.
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    fixedClaim
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-rose-100 text-rose-800 border border-rose-300'
                  }`}
                >
                  {fixedClaim ? 'STATUS: PASSED (READY FOR SUBMISSION)' : 'STATUS: QUERIES PENDING'}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {selectedPatient.missingFlags.map((flag, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-lg border text-xs transition-all ${
                      fixedClaim
                        ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                        : 'bg-rose-50/60 border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-2">
                        {fixedClaim ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <span className="font-bold">
                            {fixedClaim ? 'RESOLVED: ' : 'DEFICIENCY 0' + (idx + 1) + ': '}
                          </span>
                          <span>{flag}</span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono shrink-0 ml-2 font-semibold">
                        {fixedClaim ? 'Auto-Patched' : 'High Penalty Risk'}
                      </span>
                    </div>

                    {fixedClaim && (
                      <div className="mt-2 text-[11px] text-emerald-800 pl-6 border-l-2 border-emerald-400">
                        {idx === 0 && "Retrieved barcode #ST-TRI-89211 from OT implant registry and stamped onto billing annexure."}
                        {idx === 1 && "Synced with Tamil Nadu State Health Agency portal API v4; token #CMCHIS-PRE-884 confirmed."}
                        {idx === 2 && "Linked post-op digital radiology DICOM viewer report from Apollo PACS network."}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Final Copilot Recommendation */}
              <div className="mt-5 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Setu Claims Copilot Recommendation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {fixedClaim
                      ? 'All documentation flags resolved. Ready to auto-dispatch to Star Health TPA via ABDM cashless exchange. Estimated turnaround: 28 minutes.'
                      : 'Do not submit claim now. 3 missing attachments will trigger a 48-hour insurer query, violating the IRDAI 3h discharge mandate.'}
                  </p>
                </div>

                <button
                  disabled={!fixedClaim}
                  onClick={() => alert(`Claim ${selectedPatient.id} successfully transmitted to TPA claims portal under IRDAI 3h rule!`)}
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-slate-950 font-bold text-xs shrink-0 shadow-sm transition-all"
                >
                  Submit Clean Claim to TPA
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Patient Twin AI (Moat) */}
        {activeTab === 'twin' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-700">
                <Users className="w-4 h-4 text-indigo-600" />
                <span>Clinical Intelligence Moat • Slide 4 Architecture</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                Patient Twin AI: Historical Treatment Journey Matching
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Matches the incoming patient admission against 12,000+ de-identified past Chennai hospital claims to forecast queries and optimize treatment coding.
              </p>

              {/* Twin Match Results */}
              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-indigo-50/60 border border-indigo-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-950">Twin Match #1 (98.4%)</span>
                    <span className="text-[10px] bg-indigo-200 text-indigo-800 px-1.5 py-0.5 rounded font-mono font-bold">
                      Apollo Greams
                    </span>
                  </div>
                  <div className="text-xs text-slate-700 mt-2">
                    64M • Bilateral Knee • CMCHIS Claim
                  </div>
                  <div className="mt-3 pt-2 border-t border-indigo-200/60 text-[11px] text-indigo-900">
                    <span className="font-semibold">Outcome: </span>
                    Approved in 42 mins. Insurer queried implant invoice; Setu auto-attached batch sticker.
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Twin Match #2 (94.1%)</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">
                      Kauvery Hospital
                    </span>
                  </div>
                  <div className="text-xs text-slate-700 mt-2">
                    59M • Left TKR • Star Health Cashless
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-slate-700">
                    <span className="font-semibold">Outcome: </span>
                    Approved in 1h 12m. Zero deductions on consumable package tariff.
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Twin Match #3 (91.8%)</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono">
                      Fortis Malar
                    </span>
                  </div>
                  <div className="text-xs text-slate-700 mt-2">
                    61M • Unilateral Arthroplasty • Medi Assist TPA
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-slate-700">
                    <span className="font-semibold">Outcome: </span>
                    Approved in 55 mins. DVT prophylaxis medication justified by clinical note.
                  </div>
                </div>
              </div>

              {/* Moat Defensibility Callout */}
              <div className="mt-5 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                <div className="font-bold flex items-center space-x-1.5 text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Why This Moat Compounds Over Time</span>
                </div>
                <p className="mt-1 text-[11px] text-emerald-900 leading-relaxed">
                  Generic LLMs only have general web knowledge. Setu accumulates verified billing dispute patterns across Chennai and Hyderabad hospital networks. Each resolved claim strengthens future twin accuracy, creating high switching costs.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Green Compute Scheduler */}
        {activeTab === 'green' && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>Environmental Strategy & Rented Compute Simulation • Slide 4</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                Carbon-Aware Inference Routing & Green Compute Engine
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zero owned data centers. Rented GPU infrastructure with carbon-aware batch scheduling, caching, and PUE/WUE monitoring.
              </p>

              {/* Live Metric Cards from PDF Calculation Bridge */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 font-medium">Allocated IT Power</div>
                  <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">70 MWh</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">100k h × 0.7 kW</div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 font-medium">Facility Electricity</div>
                  <div className="text-xl font-bold text-blue-600 font-mono mt-0.5">98 MWh</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">70 MWh × 1.4 PUE</div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 font-medium">24M Carbon Emissions</div>
                  <div className="text-xl font-bold text-emerald-600 font-mono mt-0.5">68.6 tCO₂e</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">98k kWh × 0.7 kg/kWh</div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 font-medium">Operational Water</div>
                  <div className="text-xl font-bold text-cyan-600 font-mono mt-0.5">35,000 L</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">70k kWh × 0.5 L WUE</div>
                </div>
              </div>

              {/* Interactive Scheduler Toggle */}
              <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center space-x-1.5">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span>Dynamic Workload Scheduling Engine</span>
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">
                    Current Mode: {batchMode ? 'Night Batch & Renewable Routing (Active)' : 'Immediate Real-Time Only'}
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Routes non-urgent claims audits to off-peak night hours when Tamil Nadu wind share peaks.
                  </p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <button
                    onClick={() => setBatchMode(!batchMode)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      batchMode
                        ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {batchMode ? 'Carbon Optimizer ON' : 'Turn Optimizer ON'}
                  </button>
                </div>
              </div>

              {/* 3 Green Targets */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
                  <div className="font-bold text-emerald-950">Energy per Request</div>
                  <div className="text-lg font-bold text-emerald-700 mt-0.5">↓ 25% Reduction</div>
                  <div className="text-[11px] text-emerald-900 mt-1">
                    SLMs & prompt caching for routine ICD coding tasks.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-xs">
                  <div className="font-bold text-cyan-950">Water per 1k Requests</div>
                  <div className="text-lg font-bold text-cyan-700 mt-0.5">↓ 15% Reduction</div>
                  <div className="text-[11px] text-cyan-900 mt-1">
                    Avoiding peak ambient heat cooling in Chennai data parks.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-teal-50 border border-teal-200 text-xs">
                  <div className="font-bold text-teal-950">Carbon per 1k Requests</div>
                  <div className="text-lg font-bold text-teal-700 mt-0.5">↓ 20% Reduction</div>
                  <div className="text-[11px] text-teal-900 mt-1">
                    Leveraging Tamil Nadu's 10+ GW wind and solar capacity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
