import React, { useState } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../data/caseData';
import {
  Users,
  Award,
  BookOpen,
  CheckCircle2,
  FileCheck,
  Building,
  Target,
  Sparkles,
  X,
  Volume2,
  VolumeX,
  Quote
} from 'lucide-react';

interface TeamBriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamBriefingModal: React.FC<TeamBriefingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'authors' | 'problem' | 'thesis' | 'takeaways'>('thesis');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>TEAM PROMPT!PLEASE CASE BRIEFING</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Sri Venkateswara College & DTU</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              Executive Case Breakdown: SETU AI Strategy
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Official introductory presentation and thesis summary authored by Nimish Jain, Etant Rustagi, Kashvi Gupta, and Shagun Tomar.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 px-6 pt-4 border-b border-slate-200 bg-slate-50 overflow-x-auto">
          <button
            onClick={() => setActiveTab('thesis')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 shrink-0 ${
              activeTab === 'thesis'
                ? 'border-indigo-600 text-indigo-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            1. Core Executive Thesis
          </button>

          <button
            onClick={() => setActiveTab('problem')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 shrink-0 ${
              activeTab === 'problem'
                ? 'border-indigo-600 text-indigo-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            2. The Forcing Event & Urgency
          </button>

          <button
            onClick={() => setActiveTab('authors')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 shrink-0 ${
              activeTab === 'authors'
                ? 'border-indigo-600 text-indigo-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            3. The Team Behind the Case
          </button>

          <button
            onClick={() => setActiveTab('takeaways')}
            className={`pb-3 px-3 text-xs font-bold transition-all border-b-2 shrink-0 ${
              activeTab === 'takeaways'
                ? 'border-indigo-600 text-indigo-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            4. Strategic Principles (No Slop)
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-700 text-sm leading-relaxed">
          {activeTab === 'thesis' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                <div className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                  <Target className="w-4 h-4 text-indigo-700" />
                  <span>The Central Question Answered</span>
                </div>
                <p className="text-slate-900 font-semibold text-base leading-snug">
                  &ldquo;Should an Indian healthcare AI startup enter Mumbai or South India first, what specific layer should it build, and how can it scale sustainably under a ₹50 Crore envelope?&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center space-x-1.5 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>The Geographic Choice: Chennai First</span>
                  </div>
                  <p className="text-slate-600 leading-normal">
                    While Mumbai commands 46% of India&apos;s data center capacity (846 MW), it suffers critical water shortages (reservoirs &lt; 7% in June 2026), record peak grid strain (27,230 MW), and intense competitor crowding. Chennai offers 320 MW of rented capacity, a higher renewable grid mix, and immediate access to top healthcare conglomerates (Apollo, Fortis Malar, Kauvery, Global).
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center space-x-1.5 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>The Product Choice: Admin & Claims Layer</span>
                  </div>
                  <p className="text-slate-600 leading-normal">
                    Clinical AI (radiology, automated diagnosis) carries severe medical liability, clinical trial resistance, and regulatory hurdles. By contrast, healthcare administration (DPDP consent, Tamil/Telugu discharge translation, and IRDAI 1h/3h claims pre-check) provides immediate measurable ROI without clinical liability.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950">
                <div className="font-bold flex items-center space-x-1 text-amber-900">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Strategic Expansion Rule</span>
                </div>
                <p className="mt-1 text-slate-700 leading-normal">
                  Expand to Hyderabad as a regional spoke once product-market fit is locked in Chennai. Prepare for Mumbai entry <strong>only after &gt; 40% of pipeline</strong> originates from outside South India.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'problem' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 font-medium">TN CMCHIS Cover Surge</div>
                  <div className="text-2xl font-bold text-slate-900 font-mono mt-1">₹5L → ₹25L</div>
                  <div className="text-[11px] text-indigo-700 font-semibold mt-1">5× expansion in Aug 2026</div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 font-medium">IRDAI Cashless Clock</div>
                  <div className="text-2xl font-bold text-indigo-700 font-mono mt-1">1h / 3h</div>
                  <div className="text-[11px] text-slate-500 mt-1">Pre-auth & discharge deadlines</div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xs text-slate-500 font-medium">Empanelled Network</div>
                  <div className="text-2xl font-bold text-emerald-700 font-mono mt-1">2,157</div>
                  <div className="text-[11px] text-slate-500 mt-1">Hospitals statewide in TN</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                <h4 className="font-bold text-slate-900">Why This Creates Extreme Urgency:</h4>
                <p className="text-slate-600">
                  When insurance coverage increases 5x, claims jump into higher financial tiers where TPAs deploy automated algorithmic scrutiny and manual doctor panels. Hospital billing desks face an exponential increase in queries, missing document rejections, and delayed cash flows.
                </p>
                <p className="text-slate-600">
                  Simultaneously, the IRDAI 1h pre-authorisation and 3h final authorization timeline forces hospitals to prepare zero-defect claim packets before patients leave the room. Setu AI solves this exact administrative bottleneck.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'authors' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{member.name}</h4>
                      <div className="text-xs font-semibold text-indigo-700">{member.role}</div>
                      <div className="text-[11px] text-slate-500">{member.institution}</div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-xs">
                      {member.name[0]}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 pt-1 border-t border-slate-200">
                    <span className="font-semibold text-slate-800">Domain Focus: </span>
                    {member.focus}
                  </div>

                  <div className="text-[11px] italic text-slate-500 bg-white p-2 rounded border border-slate-200/60 flex items-start space-x-1.5">
                    <Quote className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                    <span>&ldquo;{member.quote}&rdquo;</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'takeaways' && (
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                <div className="font-bold flex items-center space-x-1.5 text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Principle 1: Anti-Hype & Defensibility over Generic LLMs</span>
                </div>
                <p className="mt-1 text-[11px] text-emerald-900 leading-normal">
                  Generic chatbots and multilingual wrappers are copyable within 12 months. Defensibility comes from hospital workflow embedding, deep HIS/EMR integrations, and the compounding Patient Twin AI data loop.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-950">
                <div className="font-bold flex items-center space-x-1.5 text-blue-900">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Principle 2: Rigorous Green Compute Discipline</span>
                </div>
                <p className="mt-1 text-[11px] text-blue-900 leading-normal">
                  Rented GPU inference with carbon-aware night scheduling and strict WUE ≤ 1.5 L/kWh targets. Targets (↓ 25% energy, ↓ 15% water, ↓ 20% carbon) are evaluated post-90 day telemetry setup.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
                <div className="font-bold flex items-center space-x-1.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-slate-600" />
                  <span>Principle 3: Fiduciary Capital Architecture</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-600 leading-normal">
                  ₹50 Cr total capital envelope: ₹40 Cr operational spend allocated across 24 months, while ₹10 Cr (20%) is strictly ring-fenced and remains intact at Month 24.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Authored for AI Studio Strategy Deck Benchmark
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
          >
            Close Briefing & Enter Workspace
          </button>
        </div>
      </div>
    </div>
  );
};
