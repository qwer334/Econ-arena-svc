import React from 'react';
import {
  Sparkles,
  Play,
  RotateCcw,
  Users,
  FileText,
  ShieldCheck,
  Layers,
  Scale,
  Wallet,
  UserCheck,
  ExternalLink
} from 'lucide-react';

export type AppViewMode =
  | 'deck'
  | 'prototype'
  | 'funnel'
  | 'tradeoff'
  | 'budget'
  | 'stakeholders';

interface HeaderProps {
  currentMode: AppViewMode;
  onSelectMode: (mode: AppViewMode) => void;
  onOpenTeamModal: () => void;
  onReplayNamaste: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  onOpenTeamModal,
  onReplayNamaste
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white px-4 sm:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left: Brand & Team */}
        <div className="flex items-center space-x-3">
          <div
            onClick={onReplayNamaste}
            className="cursor-pointer group flex items-center space-x-2"
            title="Click to replay Namaste Hindi Intro"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white text-base font-bold shadow-sm group-hover:scale-105 transition-transform">
              🙏
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-base tracking-tight text-white">SETU AI</span>
                <span className="text-amber-400 font-hindi text-sm">सेतु</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  PROTOTYPE
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Team Prompt!Please <span className="text-slate-600">•</span> SVC & DTU
              </div>
            </div>
          </div>
        </div>

        {/* Center: View Switcher */}
        <nav className="flex items-center space-x-1 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => onSelectMode('deck')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'deck'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Slide Deck (1–6)</span>
          </button>

          <button
            onClick={() => onSelectMode('prototype')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
              currentMode === 'prototype'
                ? 'bg-emerald-600 text-white shadow-xs ring-1 ring-emerald-400'
                : 'text-emerald-300 hover:text-emerald-100 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Live Working Engine</span>
          </button>

          <button
            onClick={() => onSelectMode('funnel')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'funnel'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Insight Funnel</span>
          </button>

          <button
            onClick={() => onSelectMode('tradeoff')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'tradeoff'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>South vs Mumbai</span>
          </button>

          <button
            onClick={() => onSelectMode('budget')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'budget'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>₹50 Cr Gantt</span>
          </button>

          <button
            onClick={() => onSelectMode('stakeholders')}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'stakeholders'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Stakeholders</span>
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={onOpenTeamModal}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
          >
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Team Intro</span>
          </button>

          <button
            onClick={onReplayNamaste}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-medium transition-colors"
            title="Replay 3-4s Namaste Hindi Greeting"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Namaste Intro</span>
          </button>

          <a
            href="/assets/aistudio/Team_PromptPlease_0c993d51.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700 transition-colors"
            title="View Original Case PDF"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">PDF</span>
          </a>
        </div>
      </div>
    </header>
  );
};
