export interface TeamMember {
  name: string;
  role: string;
  institution: string;
  focus: string;
  quote: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Nimish Jain",
    role: "Strategy & GTM Lead",
    institution: "Sri Venkateswara College, Delhi University",
    focus: "Enterprise B2B Health Sales, Partner Ecosystems & Commercial Contracts",
    quote: "Building trust through measurable paid pilots in Chennai before expanding to Hyderabad."
  },
  {
    name: "Etant Rustagi",
    role: "Product & Clinical Workflow Lead",
    institution: "Delhi Technological University (DTU)",
    focus: "Claims-Denial Copilot, DPDP Consent & Workflow Integration IP",
    quote: "No clinical liability: solve documentation and claims friction at hospital admin level."
  },
  {
    name: "Kashvi Gupta",
    role: "Economics & Capital Architecture Lead",
    institution: "Sri Venkateswara College, Delhi University",
    focus: "₹50 Cr Capital Envelope, Outcome-Linked Pricing & Unit Economics",
    quote: "Disciplined allocation: ₹40 Cr 24-month spend with ₹10 Cr ring-fenced reserve."
  },
  {
    name: "Shagun Tomar",
    role: "Infrastructure & Green Compute Lead",
    institution: "Delhi Technological University (DTU)",
    focus: "Carbon-Aware Scheduling, PUE 1.4 & WUE ≤1.5 L/kWh Optimization",
    quote: "Rented GPU inference, zero owned DC capex, and 25% energy reduction targets."
  }
];

export interface FunnelStep {
  id: string;
  stageNumber: number;
  title: string;
  subtitle: string;
  percentage: number;
  marketSize: string;
  keyInsight: string;
  whyThisChoice: string;
  implication: string;
  dataPoint: string;
  tag: string;
}

export const INSIGHT_FUNNEL_STEPS: FunnelStep[] = [
  {
    id: "all-industries",
    stageNumber: 1,
    title: "All Industries",
    subtitle: "Vast horizontal AI opportunity landscape across India",
    percentage: 100,
    marketSize: "100% Total Addressable AI Scope",
    keyInsight: "Many AI opportunities exist across retail, finance, logistics, and legal, but all enterprise buyers require an auditable trust and compliance layer.",
    whyThisChoice: "Without DPDP compliance and auditability, enterprise adoption stalled across general business software.",
    implication: "Must build consent-first, tamper-evident audit logs into core architecture rather than an afterthought.",
    dataPoint: "DPDP Act rules require explicit, verifiable consent capture for all personal digital processing.",
    tag: "Broad Opportunity"
  },
  {
    id: "regulated-buyers",
    stageNumber: 2,
    title: "Regulated AI Buyers",
    subtitle: "High compliance burden industries (BFSI, Healthcare, Pharma)",
    percentage: 65,
    marketSize: "~65% Filtered Sector Value",
    keyInsight: "Health and financial data are strictly regulated under DPDP and sector-specific statutory guidelines. Consent and traceability are non-negotiable.",
    whyThisChoice: "Regulated buyers have designated budget lines for compliance and risk mitigation.",
    implication: "Build dedicated consent capture and regulatory audit layers, creating an institutional barrier to entry.",
    dataPoint: "Health data classified as sensitive personal data; penalties up to ₹250 Cr for non-compliance under DPDP.",
    tag: "Regulatory Moat"
  },
  {
    id: "healthcare",
    stageNumber: 3,
    title: "Healthcare Sector",
    subtitle: "Severe administrative friction, regional vernacular barrier",
    percentage: 38,
    marketSize: "~38% High-Friction Segment",
    keyInsight: "Healthcare AI risk governance is nascent; South India exhibits a deep linguistic barrier (Tamil/Telugu) that standard US/global LLMs fail to serve.",
    whyThisChoice: "Public health schemes expanding rapidly; clinical diagnostics faces huge liability while admin is high-margin whitespace.",
    implication: "Focus strictly on healthcare administration and language localization rather than clinical diagnosis.",
    dataPoint: "~15 Lakh international and cross-state medical tourists visit Tamil Nadu annually requiring multilingual papers.",
    tag: "Linguistic Whitespace"
  },
  {
    id: "admin-claims",
    stageNumber: 4,
    title: "Admin & Claims",
    subtitle: "Financial nerve center: IRDAI 1h/3h clock & CMCHIS 5x surge",
    percentage: 22,
    marketSize: "~22% Revenue-Critical Niche",
    keyInsight: "Tamil Nadu CMCHIS cover expanding 5x (₹5L → ₹25L in Aug 2026). Larger claims trigger intense insurer scrutiny, slow approvals, and higher denial rates.",
    whyThisChoice: "Direct ROI: Every 1% reduction in claim denial and every hour saved in discharge cycle translates directly to hospital cash flow.",
    implication: "Zero clinical liability (no diagnosis/treatment advice), purely workflow copilot, pre-check coding, and denial mitigation.",
    dataPoint: "IRDAI mandates 1h cashless pre-authorisation and 3h final discharge authorization.",
    tag: "Direct Financial ROI"
  },
  {
    id: "chennai-hub",
    stageNumber: 5,
    title: "Chennai Hub (South Anchor)",
    subtitle: "Beachhead market with concentrated private & scheme buyers",
    percentage: 12,
    marketSize: "Initial TAM Beachhead",
    keyInsight: "Chennai hosts Apollo, Fortis Malar, Global, Kauvery plus ~2,157 CMCHIS-empanelled hospitals. Clean administrative whitespace (5C Networks does imaging, not admin).",
    whyThisChoice: "320 MW rented DC capacity, stable water resources compared to Mumbai's acute shortage, and superior renewable energy grid mix.",
    implication: "Chennai-first beachhead, Hyderabad spoke expansion, Mumbai deferred until >40% pipeline outside South.",
    dataPoint: "320 MW data center capacity (18% of India), stable water, 200–600 bed hospital concentration.",
    tag: "Optimal Landing Beachhead"
  }
];

export interface TradeOffMetric {
  dimension: string;
  category: "Infrastructure" | "Environment" | "Market" | "Risk";
  chennai: {
    value: string;
    score: number; // 1-10
    details: string;
    advantage: boolean;
  };
  mumbai: {
    value: string;
    score: number;
    details: string;
    advantage: boolean;
  };
  executiveVerdict: string;
}

export const SOUTH_VS_MUMBAI_TRADEOFFS: TradeOffMetric[] = [
  {
    dimension: "Data Centre Capacity",
    category: "Infrastructure",
    chennai: {
      value: "320 MW (18% of India)",
      score: 8,
      details: "Adequate capacity for rented inference; no capex needed for owned DC",
      advantage: false
    },
    mumbai: {
      value: "846 MW (46% of India)",
      score: 10,
      details: "Dominant hyperscale hub with highest national density",
      advantage: true
    },
    executiveVerdict: "Mumbai wins on sheer megawatts, but Chennai's 320 MW is more than sufficient for Setu's cloud-rented API inference model without capex."
  },
  {
    dimension: "Water Availability & Risk",
    category: "Environment",
    chennai: {
      value: "Relatively Stable",
      score: 8,
      details: "Desalination infrastructure & industrial recycled water supply",
      advantage: true
    },
    mumbai: {
      value: "Critical: Reservoirs < 7%",
      score: 3,
      details: "June 2026: 10% general cut, 20% industrial-commercial cut. 100MW DC uses ~20L L/day",
      advantage: false
    },
    executiveVerdict: "Severe Mumbai water crisis puts hyperscale cooling at risk. Setu's strict WUE ≤1.5 target is unachievable in drought-impacted Mumbai zones."
  },
  {
    dimension: "Power Mix & Grid Strain",
    category: "Environment",
    chennai: {
      value: "Better Renewable Mix",
      score: 9,
      details: "Tamil Nadu leads India in wind (10+ GW) and solar integration; lower carbon intensity",
      advantage: true
    },
    mumbai: {
      value: "Record Peak 27,230 MW",
      score: 4,
      details: "Thermal-heavy coal generation, MSEDCL grid strain, AEML DC demand surging ~50→638 MW",
      advantage: false
    },
    executiveVerdict: "Tamil Nadu's green grid allows Setu to hit its 70% clean-energy ambition and maintain low emission intensity (0.7 kg CO2e/kWh)."
  },
  {
    dimension: "Vernacular Language Need",
    category: "Market",
    chennai: {
      value: "High Gap: Tamil / Telugu",
      score: 9,
      details: "Major unaddressed vernacular whitespace for clinical discharge & consent",
      advantage: true
    },
    mumbai: {
      value: "Low Gap: Marathi / Hindi",
      score: 5,
      details: "Hindi/English already well-covered by generic LLMs and Indian startups",
      advantage: false
    },
    executiveVerdict: "Tamil & Telugu hospital workflows represent deep defensible localization where generic LLMs fail hallucination benchmarks."
  },
  {
    dimension: "Policy & Growth Trigger",
    category: "Market",
    chennai: {
      value: "5x TN CMCHIS Expansion",
      score: 10,
      details: "₹5L → ₹25L cover announced Aug 2026; 2,157 empanelled hospitals with surge in claims scrutiny",
      advantage: true
    },
    mumbai: {
      value: "Gradual Growth",
      score: 6,
      details: "High competitor crowding (Qure.ai, Wadhwani AI, Tata Memorial, IHX)",
      advantage: false
    },
    executiveVerdict: "The 5x CMCHIS expansion is an immediate forcing event: higher value claims directly trigger insurer audit algorithms and denials."
  },
  {
    dimension: "Buyer Concentration",
    category: "Market",
    chennai: {
      value: "Dense Private Hospital Beachhead",
      score: 9,
      details: "Apollo, Fortis Malar, Global Health City, Kauvery, MGM in close geographic proximity",
      advantage: true
    },
    mumbai: {
      value: "Fragmented & Crowded",
      score: 6,
      details: "Incumbents heavily entrenched in radiology/imaging (not admin), longer sales cycles",
      advantage: false
    },
    executiveVerdict: "Chennai gives concentrated access to 200–600 bed private hospitals eager to reduce discharge turnaround times."
  },
  {
    dimension: "Flood & Coastal Risk",
    category: "Risk",
    chennai: {
      value: "Lower for Cloud Tenants",
      score: 7,
      details: "Inland data center clusters (Ambattur, Siruseri) outside coastal flood zones",
      advantage: true
    },
    mumbai: {
      value: "High Coastal Exposure",
      score: 4,
      details: "Low-lying coastal DC parks exposed to monsoon inundation and sea-level surges",
      advantage: false
    },
    executiveVerdict: "Chennai inland clusters offer safer resilience for outsourced cloud workloads."
  },
  {
    dimension: "Green Target Alignment",
    category: "Environment",
    chennai: {
      value: "Easier Compliance (WUE ≤ 1.5)",
      score: 9,
      details: "Enables carbon-aware batch scheduling and high renewable utilization",
      advantage: true
    },
    mumbai: {
      value: "At Acute Risk",
      score: 3,
      details: "High water usage and coal-heavy peak load violate sustainability charters",
      advantage: false
    },
    executiveVerdict: "South enables clean ESG audit reports required by global hospital chains and medical tourism certifications."
  }
];

export interface ExecutionPhase {
  phase: string;
  timeline: string;
  title: string;
  focus: string;
  deliverables: string[];
  geography: string;
  milestones: string;
}

export const ROADMAP_PHASES: ExecutionPhase[] = [
  {
    phase: "Phase 1",
    timeline: "Months 0–6 (H1)",
    title: "Consent & Documentation Foundation",
    focus: "Tamil/Telugu discharge summaries, DPDP consent capture, MVP integration",
    deliverables: [
      "Multilingual Discharge Summaries (Tamil, Telugu, English)",
      "DPDP Act compliant Consent Capture & Audit Trail",
      "Insurance Pre-Auth Paperwork Assistant",
      "Zero diagnosis / Zero clinical liability guardrails",
      "2 Hospital Design Partner Pilots + 1 HIS/EMR Partner"
    ],
    geography: "Chennai Beachhead (Apollo, Fortis Malar, Kauvery ecosystem)",
    milestones: "Product Beta, Privacy Architecture, Initial MVP"
  },
  {
    phase: "Phase 2",
    timeline: "Months 6–18 (H2 & H3)",
    title: "Claims-Denial Copilot & Commercial Scale",
    focus: "Claim pre-check, denial risk prediction, TPA/hospital workflow embedding",
    deliverables: [
      "Real-time Claim Pre-Check & ICD-10/CPT coding gap detection",
      "Predictive Denial Risk Scoring (flagging missing documents/implants)",
      "IRDAI 1h/3h cashless workflow auto-assembler",
      "TPA & Hospital HIS workflow integration",
      "5+ paying hospital customers across 3–5 regional clusters"
    ],
    geography: "Chennai Hub + Hyderabad Spoke Expansion",
    milestones: "First commercial annual contracts, Partner-led scale"
  },
  {
    phase: "Phase 3",
    timeline: "Months 18–24 (H4)",
    title: "Scale, Expansion & Patient Twin AI",
    focus: "Multi-state expansion, Patient Twin clinical intelligence moat, Mumbai entry prep",
    deliverables: [
      "Patient Twin AI: Historical treatment journey matching for claims",
      "Additional states & vernacular languages (Kannada, Malayalam, Hindi)",
      "Enterprise TPA & corporate hospital chains multi-year renewals",
      "10+ paying institutional clients reaching operational profitability",
      "Preparation for Mumbai entry (only after >40% pipeline outside South)"
    ],
    geography: "Tamil Nadu statewide + Telangana + Andhra Pradesh → Mumbai gateway",
    milestones: "10+ Paying Customers, State-wide TN, Renewals & Brand Scale"
  }
];

export interface BudgetWorkstream {
  workstream: string;
  h1: number; // in Cr
  h2: number;
  h3: number;
  h4: number;
  total: number;
  percentage: number;
  description: string;
  keyPersonnelOrAssets: string;
}

export const BUDGET_BREAKDOWN: BudgetWorkstream[] = [
  {
    workstream: "People & Product Delivery",
    h1: 3.50,
    h2: 4.50,
    h3: 5.00,
    h4: 6.00,
    total: 19.00,
    percentage: 38,
    description: "Core engineering, clinical workflow architects, NLP vernacular linguists, product leads",
    keyPersonnelOrAssets: "28 engineers, 4 clinical admin specialists, vernacular language researchers"
  },
  {
    workstream: "Compute & Infrastructure",
    h1: 0.50,
    h2: 1.00,
    h3: 2.00,
    h4: 2.50,
    total: 6.00,
    percentage: 12,
    description: "Rented GPU inference (100,000 GPU-hours), vector DBs, secure cloud endpoints",
    keyPersonnelOrAssets: "IndiaAI-eligible GPU clusters, zero owned DC capex, PUE 1.4 green routing"
  },
  {
    workstream: "Enterprise Sales & Integration Support",
    h1: 0.75,
    h2: 1.25,
    h3: 1.75,
    h4: 2.25,
    total: 6.00,
    percentage: 12,
    description: "Field deployment engineers, hospital integration specialists, enterprise account managers",
    keyPersonnelOrAssets: "HIS/EMR deployment engineers (MedSys, KareXpert, Napier connectors)"
  },
  {
    workstream: "Marketing & Demand Creation",
    h1: 0.25,
    h2: 0.40,
    h3: 0.60,
    h4: 0.75,
    total: 2.00,
    percentage: 4,
    description: "Hospital CFO roundtables, ROI demonstration workshops, medical conference showcases",
    keyPersonnelOrAssets: "C-level healthcare summits, clinical paper publications, case study films"
  },
  {
    workstream: "Data Acquisition & Localisation",
    h1: 1.25,
    h2: 1.25,
    h3: 1.00,
    h4: 0.50,
    total: 4.00,
    percentage: 8,
    description: "De-identified vernacular clinical records, regional insurance coding maps, dialect corpus",
    keyPersonnelOrAssets: "15,000+ curated multilingual discharge corpora (Tamil & Telugu dialects)"
  },
  {
    workstream: "Compliance, Cybersecurity & Legal",
    h1: 1.25,
    h2: 0.80,
    h3: 0.55,
    h4: 0.40,
    total: 3.00,
    percentage: 6,
    description: "DPDP audit certifications, ISO 27001, HIPAA-equivalent safeguards, legal retainers",
    keyPersonnelOrAssets: "Cert-In empanelled audits, data residency verification, indemnity coverage"
  }
];

export const TOTAL_BUDGET_SUMMARY = {
  envelope: 50.00,
  operationalSpend: 40.00,
  cashReserve: 10.00,
  reservePercentage: 20,
  spendByHalf: [
    { half: "H1 (M1–6)", spend: 7.50, cumulative: 7.50, cashLeft: 42.50 },
    { half: "H2 (M7–12)", spend: 9.20, cumulative: 16.70, cashLeft: 33.30 },
    { half: "H3 (M13–18)", spend: 10.90, cumulative: 27.60, cashLeft: 22.40 },
    { half: "H4 (M19–24)", spend: 12.40, cumulative: 40.00, cashLeft: 10.00 }
  ]
};

export interface BuyerSegment {
  id: string;
  priority: number;
  segmentName: string;
  type: string;
  geography: string;
  targetBuyer: string;
  painPoint: string;
  setuValueProp: string;
  salesCycle: string;
  pilotDuration: string;
  roiMetric: string;
}

export const BUYER_SEGMENTS: BuyerSegment[] = [
  {
    id: "beachhead-hospitals",
    priority: 1,
    segmentName: "Mid-size Private Multispecialty Hospitals",
    type: "Primary Beachhead (200–600 beds)",
    geography: "Chennai & Greater Tamil Nadu",
    targetBuyer: "Hospital CFO / COO / Head of Billing",
    painPoint: "Manual claim coding, slow pre-auth & discharge authorisations, high denial rates (18-28%)",
    setuValueProp: "Automated claim pre-check, instant missing item detection, 72% faster discharge",
    salesCycle: "4–6 months",
    pilotDuration: "8–12 weeks paid pilot",
    roiMetric: "Denial rate reduced from 22% to <6%; ₹1.4 Cr recovered per 100 beds/yr"
  },
  {
    id: "diagnostic-labs",
    priority: 2,
    segmentName: "Regional Diagnostic Laboratory Networks",
    type: "Adjacent Early Account",
    geography: "Chennai, Madurai, Coimbatore, Trichy",
    targetBuyer: "COO / Operations Director",
    painPoint: "High claim rejections for outsourced tests, manual multi-lingual patient consent capture",
    setuValueProp: "Instant Tamil/Telugu report generation, digital DPDP consent, automated pre-submission QC",
    salesCycle: "3–5 months",
    pilotDuration: "8–12 weeks paid pilot",
    roiMetric: "Reimbursement cycles down from 45 days to 14 days; zero DPDP infractions"
  },
  {
    id: "tpa-insurers",
    priority: 3,
    segmentName: "Health Insurance TPAs & Insurers",
    type: "Strategic Enterprise Account",
    geography: "Hyderabad Hub / Regional South Office",
    targetBuyer: "Head of Claims Operations / Chief Underwriting Officer",
    painPoint: "Severe document variability, manual adjudication bottlenecks under IRDAI 1h/3h rules",
    setuValueProp: "Scalable compliant pre-processing, structured JSON extraction from scans, fraud flags",
    salesCycle: "6–9 months",
    pilotDuration: "8–12 weeks paid pilot",
    roiMetric: "Claims adjudication capacity increased 4x per reviewer; compliance with 3h mandate"
  },
  {
    id: "govt-schemes",
    priority: 4,
    segmentName: "State Scheme Empanelled Hospitals (CMCHIS)",
    type: "High-Volume Expansion (Year 2+)",
    geography: "Tamil Nadu (2,157 empanelled facilities)",
    targetBuyer: "Scheme Coordinator / Medical Superintendent",
    painPoint: "Massive volume spike following ₹5L → ₹25L cover increase; complex package code rules",
    setuValueProp: "CMCHIS-specific package code matching, pre-audit against govt tariff guidelines",
    salesCycle: "9–12 months",
    pilotDuration: "12 weeks pilot",
    roiMetric: "99.4% tariff compliance; zero penalty deduction on scheme remittances"
  }
];

export interface ChannelMix {
  channel: string;
  share: number;
  tactics: string[];
  keyAsset: string;
}

export const GTM_CHANNELS: ChannelMix[] = [
  {
    channel: "Direct Enterprise ABM",
    share: 45,
    tactics: ["Founder-led sales", "CFO/COO outreach", "Paid pilot → contract conversion"],
    keyAsset: "Tailored Hospital Denial Audit (free 100-claim analysis demonstrating leakage)"
  },
  {
    channel: "HIS / EMR / LIS Partners",
    share: 30,
    tactics: ["Partner integrations", "Joint GTM revenue share", "Embedded workflow marketplace"],
    keyAsset: "Plug-and-play FHIR/HL7 connectors for regional HIS platforms"
  },
  {
    channel: "Healthcare Ecosystem Referrals",
    share: 15,
    tactics: ["Hospital network introductions", "Healthcare consultants & KOLs", "ROI workshops"],
    keyAsset: "Chennai Healthcare Leadership Council endorsements"
  },
  {
    channel: "Evidence-Led Inbound",
    share: 10,
    tactics: ["Peer-reviewed case studies", "Customer video references", "IRDAI compliance whitepapers"],
    keyAsset: "The 2026 Tamil Nadu Healthcare Claims Friction Benchmark Report"
  }
];

export interface EnvironmentalMetric {
  metric: string;
  value: string;
  calculationBridge: string;
  explanation: string;
}

export const ENVIRONMENTAL_METRICS: EnvironmentalMetric[] = [
  {
    metric: "24-Month Compute Volume",
    value: "100,000 GPU-hours",
    calculationBridge: "100,000 h allocated across rented GPU clusters for claims & document inference",
    explanation: "Shared cloud inference avoids massive embodied carbon of buying dedicated servers."
  },
  {
    metric: "Allocated IT Power",
    value: "0.7 kW / GPU",
    calculationBridge: "100,000 h × 0.7 kW = 70,000 kWh = 70 MWh (IT Energy)",
    explanation: "Energy consumed directly by accelerated compute nodes handling inference."
  },
  {
    metric: "Facility Electricity (PUE 1.4)",
    value: "98 MWh (Facility)",
    calculationBridge: "70 MWh (IT) × 1.4 Power Usage Effectiveness = 98 MWh facility power",
    explanation: "PUE of 1.4 reflects efficient modern air/liquid hybrid data center design in Chennai."
  },
  {
    metric: "Carbon Emissions",
    value: "68.6 tCO₂e",
    calculationBridge: "98,000 kWh × 0.7 kg CO₂e/kWh ÷ 1,000 = 68.6 tCO₂e",
    explanation: "Tamil Nadu grid renewable mix yields 0.7 kg/kWh vs national average of ~0.82 kg/kWh."
  },
  {
    metric: "Operational Water Footprint",
    value: "35,000 Litres",
    calculationBridge: "70,000 kWh IT × 0.5 L/kWh (WUE) = 35,000 L (Do not double-apply PUE)",
    explanation: "Strict WUE 0.5 L/kWh IT water metric ensures minimal evaporative cooling impact."
  }
];

export const GREEN_TARGETS = [
  {
    label: "Energy per Request",
    target: "↓ 25% Reduction",
    baseline: "Measured vs 90-day baseline after telemetry setup",
    mechanism: "Small models (SLMs) for routine classification; model cascading"
  },
  {
    label: "Water per 1,000 Requests",
    target: "↓ 15% Reduction",
    baseline: "Measured vs 90-day baseline",
    mechanism: "Shift non-urgent batch evaluation to off-peak cooler night hours"
  },
  {
    label: "Carbon per 1,000 Requests",
    target: "↓ 20% Reduction",
    baseline: "Measured vs 90-day baseline",
    mechanism: "Carbon-aware dynamic routing to high-renewable wind/solar grid intervals"
  }
];

export interface MoatItem {
  name: string;
  horizon: string;
  status: "Strong" | "Copyable / Weak";
  description: string;
  whyDefensible: string;
}

export const MOATS_ANALYSIS: MoatItem[] = [
  {
    name: "Patient Twin AI (Clinical Intelligence)",
    horizon: "12–18 months",
    status: "Strong",
    description: "Historical cases, treatment journeys, similar-patient twin match, and validated feedback loops.",
    whyDefensible: "Network effects: Every adjudicated claim enriches the localized graph of insurer denial patterns. Nearly impossible for new entrants to replicate without years of hospital history."
  },
  {
    name: "Post-Paid, Outcome-Linked Financial Model",
    horizon: "2–4 months launch / 6–9 months mature",
    status: "Strong",
    description: "Zero upfront risk for hospitals, milestone billing tied directly to measurable denial reduction.",
    whyDefensible: "Aligns revenue directly with hospital cash collected; creates massive switching barriers once embedded into billing cycles."
  },
  {
    name: "Workflow & HIS Integration IP",
    horizon: "6–9 months",
    status: "Strong",
    description: "Deep bi-directional hooks into MedSys, KareXpert, Napier, and regional billing software.",
    whyDefensible: "Hospitals resist replacing mission-critical billing integrations once staff are trained on copilot prompts."
  },
  {
    name: "Generic Multilingual Chatbots",
    horizon: "< 12 months",
    status: "Copyable / Weak",
    description: "Simple translation wrappers around public LLMs (OpenAI, Gemini generic).",
    whyDefensible: "NOT defensible. Any developer can prompt an LLM to translate; Setu wins through hospital administrative workflow embedding, not generic chat."
  },
  {
    name: "Standard Analytics Dashboards",
    horizon: "< 6 months",
    status: "Copyable / Weak",
    description: "Standard graphs showing claims processed and charts.",
    whyDefensible: "NOT defensible on its own; value lies in predictive risk scoring that prevents denial before submission."
  }
];
