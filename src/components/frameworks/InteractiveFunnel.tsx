import React, { useState, useEffect } from 'react';
import { INSIGHT_FUNNEL_STEPS, FunnelStep } from '../../data/caseData';
import { Play, Pause, RotateCcw, ChevronRight, CheckCircle2, AlertCircle, ArrowDownRight, Layers, Sparkles } from 'lucide-react';

export const InteractiveFunnel: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoAdvanceSpeed, setAutoAdvanceSpeed] = useState<number>(3500); // 3.5s per step

  const currentStep: FunnelStep = INSIGHT_FUNNEL_STEPS[activeStepIndex];

  // Auto-play step-by-step loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev >= INSIGHT_FUNNEL_STEPS.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, autoAdvanceSpeed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, autoAdvanceSpeed]);

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStepIndex(0);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setActiveStepIndex((prev) => Math.min(INSIGHT_FUNNEL_STEPS.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setActiveStepIndex((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden p-5 sm:p-6">
      {/* Header with Title and Executive Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-indigo-700 uppercase">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Executive Strategic Filter • Slide 2 Framework</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
            Insight Funnel: Why Healthcare & Chennai Hub?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
            Step-by-step narrowing from macro Indian AI opportunities to high-urgency consent & claims admin in Tamil Nadu.
          </p>
        </div>

        {/* Funnel Controls */}
        <div className="flex items-center space-x-2 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center space-x-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              isPlaying
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause Auto-Step</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Step-by-Step</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrev}
            disabled={activeStepIndex === 0}
            className="px-2.5 py-1.5 rounded text-xs font-medium text-slate-700 hover:bg-slate-200 disabled:opacity-40 transition-colors"
          >
            Prev
          </button>

          <button
            onClick={handleNext}
            disabled={activeStepIndex === INSIGHT_FUNNEL_STEPS.length - 1}
            className="px-2.5 py-1.5 rounded text-xs font-medium text-slate-700 hover:bg-slate-200 disabled:opacity-40 transition-colors"
          >
            Next
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            title="Reset to Step 1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Funnel Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
        {/* Left: Step-by-Step Animated Funnel Visualization (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-2.5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Funnel Filtration Sequence</span>
            <span className="font-mono text-indigo-600 font-bold">
              Stage {activeStepIndex + 1} of {INSIGHT_FUNNEL_STEPS.length}
            </span>
          </div>

          {INSIGHT_FUNNEL_STEPS.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isPassed = idx < activeStepIndex;
            // Funnel widths: 100%, 84%, 68%, 52%, 36%
            const widths = ['100%', '86%', '72%', '58%', '44%'];
            const stepWidth = widths[idx];

            return (
              <div
                key={step.id}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStepIndex(idx);
                }}
                className={`group cursor-pointer transition-all duration-300 relative ${
                  isCurrent ? 'scale-[1.02]' : 'hover:opacity-90'
                }`}
              >
                {/* Visual Trapeze/Bar Segment */}
                <div className="flex items-center space-x-2">
                  <div
                    className="relative transition-all duration-500 rounded-lg p-3 overflow-hidden border shadow-xs"
                    style={{
                      width: stepWidth,
                      backgroundColor: isCurrent
                        ? '#1e1b4b' // deep indigo
                        : isPassed
                        ? '#047857' // emerald passed
                        : '#f8fafc',
                      borderColor: isCurrent
                        ? '#6366f1'
                        : isPassed
                        ? '#10b981'
                        : '#e2e8f0',
                      color: isCurrent || isPassed ? '#ffffff' : '#475569'
                    }}
                  >
                    {/* Active pulse glow */}
                    {isCurrent && (
                      <div className="absolute inset-0 bg-indigo-500/10 animate-pulse pointer-events-none" />
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 truncate">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                            isCurrent
                              ? 'bg-amber-400 text-slate-950 font-bold'
                              : isPassed
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {isPassed ? '✓' : idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-bold truncate">
                          {step.title}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-mono font-bold shrink-0 ml-2 ${
                          isCurrent
                            ? 'text-amber-300'
                            : isPassed
                            ? 'text-emerald-100'
                            : 'text-slate-400'
                        }`}
                      >
                        {step.percentage}%
                      </span>
                    </div>

                    <div
                      className={`text-[11px] truncate mt-1 ${
                        isCurrent
                          ? 'text-indigo-200'
                          : isPassed
                          ? 'text-emerald-200'
                          : 'text-slate-500'
                      }`}
                    >
                      {step.subtitle}
                    </div>
                  </div>

                  {/* Drop-off callout */}
                  {idx > 0 && (
                    <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap hidden sm:flex items-center space-x-0.5">
                      <ArrowDownRight className="w-3 h-3 text-rose-500" />
                      <span>
                        -{INSIGHT_FUNNEL_STEPS[idx - 1].percentage - step.percentage}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Click any funnel tier to inspect rationale</span>
            <span className="text-emerald-600 font-semibold flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Zero Clinical Liability</span>
            </span>
          </div>
        </div>

        {/* Right: Step Rationale & Consultant Insight Card (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-50 rounded-xl border border-slate-200 p-5 relative overflow-hidden transition-all duration-300">
          {/* Stage Banner */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800">
                Stage 0{currentStep.stageNumber}: {currentStep.tag}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-medium text-slate-600">{currentStep.marketSize}</span>
            </div>
            <div className="text-xs font-mono font-semibold text-indigo-700 bg-white px-2 py-0.5 rounded border border-slate-200">
              Filter Retention: {currentStep.percentage}%
            </div>
          </div>

          {/* Headline Title */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span>{currentStep.title}</span>
              <ChevronRight className="w-4 h-4 text-indigo-500" />
              <span className="text-indigo-600 font-medium text-base">{currentStep.subtitle}</span>
            </h3>
          </div>

          {/* Deep Insight Box */}
          <div className="mt-4 bg-white rounded-lg p-4 border border-slate-200/80 shadow-xs">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-slate-700">Core Strategic Insight</span>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed font-normal">
              {currentStep.keyInsight}
            </p>
          </div>

          {/* 2-Column So What & Implication */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {/* Why This Choice */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3.5">
              <div className="flex items-center space-x-1.5 text-amber-900 text-xs font-bold uppercase tracking-wide mb-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>So What? (Why Chosen)</span>
              </div>
              <p className="text-xs text-amber-950 leading-normal">
                {currentStep.whyThisChoice}
              </p>
            </div>

            {/* Strategic Implication for Setu AI */}
            <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-lg p-3.5">
              <div className="flex items-center space-x-1.5 text-indigo-900 text-xs font-bold uppercase tracking-wide mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Setu AI Implication</span>
              </div>
              <p className="text-xs text-indigo-950 leading-normal">
                {currentStep.implication}
              </p>
            </div>
          </div>

          {/* Specific Data Evidence from Case Study */}
          <div className="mt-4 pt-3 border-t border-slate-200 flex items-start space-x-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-700">Case Evidence & Ground Truth: </span>
              <span className="text-xs text-slate-600">{currentStep.dataPoint}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
