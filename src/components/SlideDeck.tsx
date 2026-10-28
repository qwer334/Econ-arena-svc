import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Play,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Info,
  CheckCircle2,
  Layers,
  Shield,
  Activity,
  Cpu,
  Droplets,
  Zap,
  Building,
  Scale,
  Award,
  ArrowRight
} from 'lucide-react';
import { InteractiveFunnel } from './frameworks/InteractiveFunnel';
import { TradeOffMatrix } from './frameworks/TradeOffMatrix';
import { BudgetSimulator } from './frameworks/BudgetSimulator';

interface SlideDeckProps {
  onOpenTeamModal: () => void;
  onOpenPrototype: () => void;
}

export const SlideDeck: React.FC<SlideDeckProps> = ({ onOpenTeamModal, onOpenPrototype }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [appendixTab, setAppendixTab] = useState<number>(1);

  const totalSlides = 6;

  const nextSlide = () => setCurrentSlide((prev) => Math.min(totalSlides, prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(1, prev - 1));

  return (
    <div className="bg-slate-100 min-h-screen pb-16">
      {/* Slide Navigation Header Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded">
            SLIDE {currentSlide} OF {totalSlides}
          </span>
          <span className="text-sm font-bold text-slate-800 hidden sm:inline">
            {currentSlide === 1 && 'Slide 1: Team Prompt!Please Cover & Strategic Vision'}
            {currentSlide === 2 && 'Slide 2: Setu AI Executive Strategy & Location Choice'}
            {currentSlide === 3 && 'Slide 3: Customer Acquisition & 24-Month Execution Blueprint'}
            {currentSlide === 4 && 'Slide 4: Product Stack, Moats & Environmental Strategy'}
            {currentSlide === 5 && 'Slide 5: Appendix A1 — Defining Our Numbers & Mathematical Bridge'}
            {currentSlide === 6 && 'Slide 6: Appendix A2 — Verified Evidence & Policy Reference Register'}
          </span>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-2">
          {/* Slide thumbnail pills */}
          <div className="hidden md:flex items-center space-x-1 mr-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentSlide(num)}
                className={`w-7 h-7 rounded-md text-xs font-mono font-bold transition-all ${
                  currentSlide === num
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-30 transition-colors"
            title="Previous Slide (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-30 transition-colors"
            title="Next Slide (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenPrototype}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Launch Live Engine</span>
          </button>
        </div>
      </div>

      {/* Main Slide Canvas Container (16:9 Presentation Aspect Ratio feel) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-6">
        {/* SLIDE 1: Cover & Team Presentation */}
        {currentSlide === 1 && (
          <div className="bg-gradient-to-br from-slate-900 via-[#101426] to-[#0c1020] rounded-2xl border border-slate-800 text-white p-6 sm:p-12 shadow-xl relative overflow-hidden min-h-[580px] flex flex-col justify-between">
            {/* Tech Network Lines Background Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Top Node Badges */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center space-x-3">
                <div className="px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-mono text-emerald-400">
                  SOUTH INDIA NODE: CHENNAI & HYDERABAD
                </div>
                <div className="hidden sm:flex items-center space-x-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>320 MW Capacity</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <span className="text-amber-400 font-bold">SRI VENKATESWARA COLLEGE, DU</span>
                <span className="text-slate-600">×</span>
                <span className="text-amber-400 font-bold">DELHI TECHNOLOGICAL UNIVERSITY</span>
              </div>
            </div>

            {/* Center Hero Title */}
            <div className="relative z-10 my-10 max-w-4xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Executive Case Competition Entry • Team Prompt!Please</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                SETU AI <span className="text-slate-500 font-light">|</span> EXECUTIVE STRATEGY
              </h1>

              <p className="text-xl sm:text-2xl font-light text-slate-200 mt-3 font-serif-display max-w-3xl leading-snug">
                Chennai first, Hyderabad next — a consent-first healthcare admin AI layer for a more inclusive and sustainable India.
              </p>

              {/* Team Members List */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <div className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                  TEAM PROMPT!PLEASE
                </div>
                <div className="text-base sm:text-lg font-bold text-amber-300 mt-1 tracking-wide">
                  NIMISH JAIN <span className="text-slate-500">|</span> ETANT RUSTAGI <span className="text-slate-500">|</span> KASHVI GUPTA <span className="text-slate-500">|</span> SHAGUN TOMAR
                </div>
              </div>
            </div>

            {/* Bottom 4 Architecture Pillars */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="font-bold text-emerald-400">South India Beachhead</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Chennai 320MW hub, high renewable grid</div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="font-bold text-indigo-400">Healthcare Admin</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Zero clinical liability, DPDP consent capture</div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="font-bold text-amber-400">Claims Workflows</div>
                <div className="text-slate-400 text-[11px] mt-0.5">TN cover 5× surge, IRDAI 1h/3h mandate</div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="font-bold text-teal-400">Green Compute</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Rented GPUs, WUE ≤1.5, carbon-aware routing</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTeamModal}
                className="px-4 py-2 rounded-lg bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center space-x-1.5 shadow-sm"
              >
                <span>Read Full Team Case Introduction</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={nextSlide}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors flex items-center space-x-1.5"
              >
                <span>Proceed to Slide 2 (Executive Strategy)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* SLIDE 2: Executive Strategy (Why South + Healthcare & Insight Funnel) */}
        {currentSlide === 2 && (
          <div className="space-y-6">
            {/* Top Fact Banners */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs font-mono text-indigo-700 font-bold">
                  <span>POLICY FORCING EVENT</span>
                  <span>AUG 2026</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mt-1">5× Cover</div>
                <div className="text-sm font-bold text-indigo-600">TN CMCHIS: ₹5L → ₹25L</div>
                <p className="text-xs text-slate-500 mt-1">
                  Larger claims mean intense documentation scrutiny, automated denials, and direct hospital cash-flow friction.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-700 font-bold">
                  <span>VERNACULAR DEMAND</span>
                  <span>TAMIL NADU</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mt-1">~15 Lakh</div>
                <div className="text-sm font-bold text-emerald-700">International & Domestic Patients</div>
                <p className="text-xs text-slate-500 mt-1">
                  Every patient needs multilingual discharge, statutory DPDP consent, and standardized insurance translation.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between text-xs font-mono text-blue-700 font-bold">
                  <span>RENTED CAPACITY</span>
                  <span>18% OF INDIA</span>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mt-1">320 MW</div>
                <div className="text-sm font-bold text-blue-700">Chennai Data Centre Capacity</div>
                <p className="text-xs text-slate-500 mt-1">
                  Sufficient for cloud-rented API inference; zero requirement to own or build expensive data centres.
                </p>
              </div>
            </div>

            {/* Embedded Step-by-Step Insight Funnel (User Highlighted Requirement) */}
            <InteractiveFunnel />

            {/* Tradeoff Matrix: South vs Mumbai */}
            <TradeOffMatrix />

            {/* Phased Roadmap (Phase 1, 2, 3) */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                What Setu Builds (Phased 24-Month Roadmap)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-indigo-900 text-sm">Phase 1 (0–6 months)</div>
                  <div className="text-slate-500 font-medium">Consent & Documentation</div>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    <li>• Multilingual discharge summaries (Tamil/Telugu)</li>
                    <li>• Consent capture (DPDP Act compliance)</li>
                    <li>• Insurance pre-auth paperwork</li>
                    <li className="font-bold text-emerald-700">• No diagnosis, no clinical liability</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-indigo-50/70 border border-indigo-200">
                  <div className="font-bold text-indigo-950 text-sm">Phase 2 (6–18 months)</div>
                  <div className="text-indigo-700 font-medium">Claims-Denial Copilot</div>
                  <ul className="mt-2 space-y-1 text-slate-800">
                    <li>• Claim pre-check & ICD coding gap audit</li>
                    <li>• Denial risk prediction score</li>
                    <li>• TPA / hospital workflow integration</li>
                    <li>• Expand to Hyderabad spoke</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm">Phase 3 (18–24 months)</div>
                  <div className="text-slate-500 font-medium">Scale & Expansion</div>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    <li>• More states & languages (Kannada, Malayalam)</li>
                    <li>• Patient Twin AI clinical intelligence moat</li>
                    <li>• Multi-year enterprise insurance contracts</li>
                    <li className="font-semibold text-slate-900">• Prepare for Mumbai entry (&gt;40% non-South pipeline)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 3: Customer Acquisition & 24-Month Execution Blueprint */}
        {currentSlide === 3 && (
          <div className="space-y-6">
            {/* Top Context Banner */}
            <div className="bg-slate-900 text-white p-5 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  GTM ARCHITECTURE & BUYER URGENCY
                </span>
                <h3 className="text-xl font-bold mt-1">
                  A Chennai-first healthcare GTM can convert claims friction into a scalable business
                </h3>
              </div>
              <div className="flex items-center space-x-3 text-xs shrink-0">
                <div className="bg-slate-800 px-3 py-1.5 rounded border border-slate-700">
                  <span className="text-slate-400 block text-[10px]">IRDAI Timeline</span>
                  <span className="font-mono font-bold text-amber-300">1h Pre / 3h Final</span>
                </div>
                <div className="bg-slate-800 px-3 py-1.5 rounded border border-slate-700">
                  <span className="text-slate-400 block text-[10px]">TN CMCHIS Network</span>
                  <span className="font-mono font-bold text-emerald-400">~2,157 Hospitals</span>
                </div>
              </div>
            </div>

            {/* Buyer Priority & Sales Cycles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                    1. Primary Beachhead
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Sales: 4–6 mos</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  200–600-bed Private Multispecialty Hospital
                </div>
                <div className="text-xs text-slate-500 mt-1">Buyer: Hospital CFO / COO</div>
                <div className="mt-2 text-xs text-rose-700 bg-rose-50 p-2 rounded border border-rose-200">
                  Friction: Manual claims, slow approvals, high deduction leakage
                </div>
                <div className="mt-2 text-xs text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                  Setu: Faster, cleaner claims with measurable cash ROI
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  Pilot: 8–12 weeks paid
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                    2. Adjacent Early Account
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Sales: 3–5 mos</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  Regional Diagnostic Laboratory Network
                </div>
                <div className="text-xs text-slate-500 mt-1">Buyer: COO / Operations Director</div>
                <div className="mt-2 text-xs text-rose-700 bg-rose-50 p-2 rounded border border-rose-200">
                  Friction: High claim rejections, manual consent paperwork
                </div>
                <div className="mt-2 text-xs text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                  Setu: Automated claims processing & quicker reimbursement
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  Pilot: 8–12 weeks paid
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                    3. Strategic Enterprise
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Sales: 6–9 mos</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  Health-Insurance TPA / Insurer Claims Unit
                </div>
                <div className="text-xs text-slate-500 mt-1">Buyer: Head of Claims / COO</div>
                <div className="mt-2 text-xs text-rose-700 bg-rose-50 p-2 rounded border border-rose-200">
                  Friction: High document variability, manual QC bottlenecks
                </div>
                <div className="mt-2 text-xs text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200">
                  Setu: Scalable, compliant claims pre-processing
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-mono">
                  Pilot: 8–12 weeks paid
                </div>
              </div>
            </div>

            {/* Budget & Execution Gantt Blueprint */}
            <BudgetSimulator />

            {/* How We Reach Buyers (45% / 30% / 15% / 10%) */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                How We Reach Buyers (Qualified Opportunity Channel Mix)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold text-indigo-700">45%</div>
                  <div className="font-bold text-slate-900 mt-0.5">Direct Enterprise ABM</div>
                  <ul className="mt-1 space-y-0.5 text-slate-600 text-[11px]">
                    <li>• Founder-led sales</li>
                    <li>• CFO/COO outreach</li>
                    <li>• Paid pilot → contract</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold text-blue-700">30%</div>
                  <div className="font-bold text-slate-900 mt-0.5">HIS / EMR Partners</div>
                  <ul className="mt-1 space-y-0.5 text-slate-600 text-[11px]">
                    <li>• Partner integrations</li>
                    <li>• Joint GTM revenue-share</li>
                    <li>• Embedded workflows</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold text-emerald-700">15%</div>
                  <div className="font-bold text-slate-900 mt-0.5">Ecosystem Referrals</div>
                  <ul className="mt-1 space-y-0.5 text-slate-600 text-[11px]">
                    <li>• Hospital networks</li>
                    <li>• Consultants & KOLs</li>
                    <li>• ROI workshops</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-bold text-slate-700">10%</div>
                  <div className="font-bold text-slate-900 mt-0.5">Evidence-Led Inbound</div>
                  <ul className="mt-1 space-y-0.5 text-slate-600 text-[11px]">
                    <li>• Published case studies</li>
                    <li>• Customer references</li>
                    <li>• Targeted marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 4: Product & Moat | Build-Buy-Borrow | Environmental Strategy */}
        {currentSlide === 4 && (
          <div className="space-y-6">
            {/* Build vs Buy/Borrow Grid */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Product Stack: Build vs Buy / Borrow Architecture
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* SETU BUILDS */}
                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-950 uppercase tracking-wide">
                      SETU BUILDS | Core Differentiated Product Layer
                    </span>
                    <span className="text-[11px] font-mono text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">
                      High Moat
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mt-3 text-xs">
                    <div className="bg-white p-2.5 rounded border border-indigo-200">
                      <div className="font-bold text-slate-900">Workflow Copilot</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Claims-readiness & document intelligence</div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-indigo-200">
                      <div className="font-bold text-slate-900">Consent & Audit Layer</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Approvals traceability, compliance logs</div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-indigo-200">
                      <div className="font-bold text-slate-900">Hospital Ops Intelligence</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">Bed flow & discharge coordination</div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-indigo-200">
                      <div className="font-bold text-slate-900">Integration Orchestration</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">HIS/EMR/LIS connectors & routing</div>
                    </div>
                  </div>
                </div>

                {/* SETU BUYS / BORROWS */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                      SETU BUYS / BORROWS | Commodity Infrastructure
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Zero DC Capex
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mt-3 text-xs">
                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="font-bold text-slate-800">Foundation Models</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Third-party or open-source API inference</div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="font-bold text-slate-800">Rented Compute</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">IndiaAI-eligible GPU cloud access</div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="font-bold text-slate-800">Infra Tools</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Vector DB, monitoring & security tooling</div>
                    </div>

                    <div className="bg-white p-2.5 rounded border border-slate-200">
                      <div className="font-bold text-slate-800">Partner Rails</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">HIS/EMR partner implementation rails</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Moats: Patient Twin & Post-Paid Financial Moat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                    Clinical Intelligence Moat
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Horizon: 12–18 months</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-1">Patient Twin AI</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Historical cases → Treatment journeys → Similar-patient twin → Validated feedback. Accumulates clinical intelligence that is harder to replicate over time.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                    Financial Alignment Moat
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Launch: 2–4 mos / Mature: 6–9 mos</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-1">Post-Paid, Outcome-Linked Pricing</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Low upfront risk → Pilot deployment → KPI measurement → Milestone billing. Aligns revenue directly with hospital denial reduction and creates sticky renewals.
                </p>
              </div>
            </div>

            {/* Environmental Strategy & Carbon Calculations */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                Environmental Strategy: Illustrative 24-Month Impact
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Rigorous calculation bridge: 100,000 GPU-hours × 0.7 kW = 70 MWh (IT). 70 × 1.4 PUE = 98 MWh. 98,000 kWh × 0.7 kg = 68.6 tCO₂e. 70,000 kWh × 0.5 L = 35,000 L water.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">GPU Workload</div>
                  <div className="text-lg font-bold font-mono text-slate-900 mt-1">100,000 h</div>
                  <div className="text-[10px] text-slate-400">Rented inference</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">IT Energy</div>
                  <div className="text-lg font-bold font-mono text-slate-900 mt-1">70 MWh</div>
                  <div className="text-[10px] text-slate-400">0.7 kW allocated</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">Facility Energy</div>
                  <div className="text-lg font-bold font-mono text-blue-700 mt-1">98 MWh</div>
                  <div className="text-[10px] text-slate-400">1.4 PUE factor</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">Carbon Footprint</div>
                  <div className="text-lg font-bold font-mono text-emerald-700 mt-1">68.6 tCO₂e</div>
                  <div className="text-[10px] text-slate-400">0.7 kg/kWh grid</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-slate-500">Operational Water</div>
                  <div className="text-lg font-bold font-mono text-cyan-700 mt-1">35,000 L</div>
                  <div className="text-[10px] text-slate-400">0.5 L/kWh WUE</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 5: Appendix A1 | Defining Our Numbers */}
        {currentSlide === 5 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                APPENDIX A1 | DEFINING OUR NUMBERS
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Calculation Bridge, Evidence Status & Management Assumptions
              </h2>
              <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-2">
                <span>[F] Reported Fact</span>
                <span>•</span>
                <span>[D] Derived Arithmetic</span>
                <span>•</span>
                <span>[A] Team Assumption</span>
                <span>•</span>
                <span>[T] Target</span>
                <span>•</span>
                <span>All values in ₹ Crore unless stated</span>
              </div>
            </div>

            {/* Sub-Tabs for the 6 Sections of Appendix A1 */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
              {[
                { id: 1, label: '01 | Capital Allocation' },
                { id: 2, label: '02 | Gantt Reconciliation' },
                { id: 3, label: '03 | GTM & Milestones' },
                { id: 4, label: '04 | Regional Facts' },
                { id: 5, label: '05 | Green Compute Bridge' },
                { id: 6, label: '06 | Targets & Caveats' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setAppendixTab(tab.id)}
                  className={`p-2 rounded-lg text-xs font-semibold text-center transition-all ${
                    appendixTab === tab.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Appendix Tab Content Panels */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-3">
              {appendixTab === 1 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">01 | Capital Allocation & Pie — Slide 2</h4>
                  <p>• Top-down allocations, not a headcount × salary cost build.</p>
                  <p>• ₹40 cr operational spend = 19 (People) + 6 (Compute) + 6 (Sales) + 2 (Marketing) + 4 (Data) + 3 (Compliance).</p>
                  <p>• ₹10 cr cash reserve (20%) is strictly ring-fenced and not considered expenditure.</p>
                  <p>• No government subsidy or grant is assumed in the base financial model.</p>
                </div>
              )}

              {appendixTab === 2 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">02 | Gantt Reconciliation — Slide 2</h4>
                  <p>• H1–H4 correspond to Months 1–6, 7–12, 13–18, and 19–24.</p>
                  <p>• Cumulative spend: H1 ₹7.50 Cr → H2 ₹16.70 Cr → H3 ₹27.60 Cr → H4 ₹40.00 Cr.</p>
                  <p>• Cash remaining: H1 ₹42.50 Cr → H2 ₹33.30 Cr → H3 ₹22.40 Cr → H4 ₹10.00 Cr (Reserve intact).</p>
                </div>
              )}

              {appendixTab === 3 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">03 | GTM, Buyers & Milestones — Slides 1–2</h4>
                  <p>• Channel mix: 45% ABM / 30% IT Partners / 15% Referrals / 10% Inbound per 100 qualified opportunities.</p>
                  <p>• Sales cycle: Labs 3–5m, Hospitals 4–6m, TPAs 6–9m, Chains 9–12m; Paid pilots 8–12 weeks.</p>
                  <p>• H1 goal: 2 hospital design partners + 1 HIS/EMR partner. H4 goal: 10+ paying organisations cumulative.</p>
                  <p>• Expansion: Hyderabad after Chennai validation; Mumbai only after &gt;40% of pipeline is outside South.</p>
                </div>
              )}

              {appendixTab === 4 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">04 | Regional Facts & Scope — Slides 1–2</h4>
                  <p>• Cover [F/D]: ₹25L ÷ ₹5L = 5× cover (+400%). Announced Aug 2026; not evidence of 5× claims volume yet.</p>
                  <p>• TN Scale [F/D]: ~15 lakh patients/year minister-reported, not TAM. 942 govt + 1,215 private = 2,157 empanelled hospitals.</p>
                  <p>• Capacity [F/D]: 846 MW (Mumbai) + 320 MW (Chennai) + ~660 MW (Rest) = ~1,826 MW total (46% / 18% / 36%).</p>
                  <p>• Water [F]: 6.93% Mumbai reservoir stock (29 Jun 2026); 10% general / 20% industrial cuts.</p>
                  <p>• Claims [F]: 1h cashless pre-authorisation / 3h final authorisation IRDAI timeline.</p>
                </div>
              )}

              {appendixTab === 5 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">05 | Environmental Calculation Bridge — Slide 3</h4>
                  <p>• Scenario inputs [A]: 100,000 GPU-hours over 24m; 0.7 kW allocated IT power; PUE 1.4; grid 0.7 kg CO₂e/kWh; WUE 0.5 L/kWh IT.</p>
                  <p>• IT energy [D]: 100,000 h × 0.7 kW = 70,000 kWh = 70 MWh.</p>
                  <p>• Facility energy [D]: 70 MWh × 1.4 PUE = 98 MWh = 98,000 kWh.</p>
                  <p>• Emissions [D]: 98,000 kWh × 0.7 kg/kWh ÷ 1,000 = 68.6 tCO₂e.</p>
                  <p>• Water [D]: 70,000 kWh IT × 0.5 L/kWh = 35,000 L. (Note: Do not apply WUE to facility energy or double-count PUE).</p>
                </div>
              )}

              {appendixTab === 6 && (
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">06 | Targets, Build Times & Caveats — Slides 1–3</h4>
                  <p>• 90-day baseline [T]: M24 intensity = baseline × (1 - reduction). Energy/request 0.75×; water/1k 0.85×; carbon/1k 0.80×.</p>
                  <p>• Ambitions [T]: WUE ≤ 1.5 L/kWh and ≥70% clean-energy share are provider-selection criteria.</p>
                  <p>• Build horizons [A]: Workflow integration 6–9m; consent/audit 3–6m; operational loop 9–15m; Patient Twin 12–18m.</p>
                  <p>• Critical caveat: Targets are not achieved savings yet; volume expansion can increase total emissions.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SLIDE 6: Appendix A2 | Reference Register */}
        {currentSlide === 6 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                APPENDIX A2 | REFERENCE REGISTER
              </span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">
                Evidence, Policy & Competitor Sources Supporting the Setu AI Case
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Full citation log across infrastructure, government statutory policies, competitor benchmarks, and environmental standards.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {/* Category 1: Regional & Infra */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Regional Evidence & Infrastructure
                </div>
                <div className="divide-y divide-slate-100 p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span><strong>R1 · CMCHIS ₹5L → ₹25L announcement:</strong> 19 Aug 2026</span>
                    <span className="text-indigo-600 font-medium">New Indian Express Circular</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>R2 · H1 2026 capacity:</strong> Mumbai 846 MW / Chennai 320 MW</span>
                    <span className="text-indigo-600 font-medium">Savills H1 2026 Report</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>R3 · Mumbai reservoir stock:</strong> 6.93% reservoir stock & 20% cuts</span>
                    <span className="text-indigo-600 font-medium">PTI / Rediff Water Report</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>R4 · AEML demand projection:</strong> ~50 → 638 MW by 2027</span>
                    <span className="text-indigo-600 font-medium">TechPolicy.Press Report</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>R5 · 100-MW hyperscaler cooling:</strong> ~20 lakh litres/day benchmark</span>
                    <span className="text-indigo-600 font-medium">CEEW Data Centre Study</span>
                  </div>
                </div>
              </div>

              {/* Category 2: Policy & Claims */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Policy, Claims, Privacy & Compute
                </div>
                <div className="divide-y divide-slate-100 p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span><strong>P1 · IRDAI cashless timelines:</strong> 1h pre-authorisation / 3h final authorisation</span>
                    <span className="text-indigo-600 font-medium">PIB Official Release</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>P2 · Tamil Nadu Safe & Ethical AI Policy 2020:</strong> Framework</span>
                    <span className="text-indigo-600 font-medium">TN Govt Policy Document</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>P3 · DPDP Act Rules:</strong> Phased enforcement and consent mandates</span>
                    <span className="text-indigo-600 font-medium">MeitY / PIB Notification</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>P4 · SPDI Rules 2011:</strong> Medical records processing safeguards</span>
                    <span className="text-indigo-600 font-medium">WIPO Lex Text</span>
                  </div>
                </div>
              </div>

              {/* Category 3: Competitor & Ecosystem */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 font-bold text-slate-800 uppercase tracking-wider text-[11px]">
                  Competitor & Adjacent-Ecosystem Landscape
                </div>
                <div className="divide-y divide-slate-100 p-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span><strong>C1 · IHX:</strong> Direct overlap in claims infrastructure, document & discharge</span>
                    <span className="text-slate-600">IHX Payer/Provider Solutions</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>C2 · Yellow.ai:</strong> Healthcare chatbots & patient support</span>
                    <span className="text-slate-600">Yellow.ai Healthcare Solutions</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>C3 · Wadhwani AI:</strong> Social impact & public health AI (imaging focus)</span>
                    <span className="text-slate-600">Wadhwani AI Platform</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span><strong>C4 · Tata Memorial Centre:</strong> Hospital/research ecosystem</span>
                    <span className="text-slate-600">TMC Official Site</span>
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
