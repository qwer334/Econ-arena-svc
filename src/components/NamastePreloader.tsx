import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Volume2, VolumeX, ShieldCheck } from 'lucide-react';

interface NamastePreloaderProps {
  onComplete: () => void;
  durationSeconds?: number;
}

export const NamastePreloader: React.FC<NamastePreloaderProps> = ({
  onComplete,
  durationSeconds = 3.8
}) => {
  const [progress, setProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentStageText, setCurrentStageText] = useState('आरम्भ • Initializing Consent Engine...');

  // Soft Indian meditative acoustic chime synthesizer via Web Audio API
  const playNamasteChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      // Tanpura/bell overtone frequencies (Sa - Pa - Sa high: C, G, C)
      const freqs = [261.63, 392.00, 523.25, 659.25];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);

        const startTime = ctx.currentTime + idx * 0.12;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.12 / (idx + 1), startTime + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 2.5);
      });
    } catch {
      // Audio autoplay gracefully handled if restricted
    }
  };

  useEffect(() => {
    const totalMs = durationSeconds * 1000;
    const intervalMs = 35;
    const increment = 100 / (totalMs / intervalMs);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }

        if (next < 25) {
          setCurrentStageText('चरण १: नमस्ते • सादर आमन्त्रणम् (Initializing Cultural Heritage & Trust Layer)');
        } else if (next < 55) {
          setCurrentStageText('चरण २: दक्षिण भारत वास्तुकला (Connecting Chennai 320MW & Hyderabad Nodes)');
        } else if (next < 85) {
          setCurrentStageText('चरण ३: DPDP सहमति एवं IRDAI १h/३h नियम (Loading Consent & Claims Rules)');
        } else {
          setCurrentStageText('चरण ४: सेतु एआई तैयार है (Setu AI Executive Prototype Ready)');
        }

        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [durationSeconds, onComplete]);

  const toggleSound = () => {
    if (!soundEnabled) {
      playNamasteChime();
      setSoundEnabled(true);
    } else {
      setSoundEnabled(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-radial from-[#1e1435] via-[#0d1021] to-[#060814] text-white px-4 select-none overflow-hidden">
      {/* Background Sacred Geometric Mandala Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <div className="w-[580px] h-[580px] rounded-full border border-amber-400/30 animate-spin duration-[40000ms] flex items-center justify-center">
          <div className="w-[440px] h-[440px] rounded-full border border-dashed border-amber-300/40 animate-spin duration-[25000ms] flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-amber-400/20" />
          </div>
        </div>
      </div>

      {/* Subtle Warm Gradient Glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />

      {/* Top Header info */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-wider text-slate-400 border-b border-white/10 pb-3">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-semibold text-slate-200">SETU AI</span>
          <span className="text-slate-500">|</span>
          <span className="text-amber-300/90 font-medium">TEAM PROMPT!PLEASE</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSound}
            className="flex items-center space-x-1.5 text-slate-300 hover:text-amber-300 transition-colors py-1 px-2.5 rounded bg-white/5 border border-white/10 text-[11px]"
            title="Toggle Namaste Chime"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
            <span>{soundEnabled ? 'Chime Active' : 'Enable Chime'}</span>
          </button>
          <button
            onClick={onComplete}
            className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors py-1 px-3 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-[11px] font-medium"
          >
            <span>Skip into Prototype</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Namaste Card */}
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        {/* Sacred Folding Hands Icon / Emblem */}
        <div className="relative mb-4 group cursor-pointer" onClick={() => playNamasteChime()}>
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/30 via-orange-600/20 to-indigo-950/80 p-0.5 shadow-2xl shadow-amber-500/20 border border-amber-400/40 flex items-center justify-center">
            {/* Traditional Namaste Hands SVG Motif */}
            <div className="w-full h-full bg-[#121429] rounded-[14px] flex items-center justify-center text-3xl">
              <span className="transform hover:scale-110 transition-transform select-none" role="img" aria-label="Namaste Hands">
                🙏
              </span>
            </div>
          </div>
          <div className="absolute -inset-2 rounded-2xl bg-amber-400/20 blur-md -z-10 animate-pulse" />
        </div>

        {/* Traditional Sanskrit / Hindi Salutation */}
        <div className="space-y-1 mb-2">
          <div className="text-amber-400/90 text-xs font-medium tracking-[0.25em] uppercase">
            वसुधैव कुटुम्बकम् • आरोग्यं परमं भाग्यम्
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 font-hindi drop-shadow-sm tracking-wide">
            नमस्ते
          </h1>
          <div className="text-xl sm:text-2xl font-light text-slate-200 font-serif-display tracking-wide">
            Welcome to <span className="font-semibold text-white">SETU AI</span>
          </div>
        </div>

        {/* Subtitle / Positioning */}
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mt-2 font-normal">
          A consent-first healthcare admin & claims AI layer for a more inclusive, resilient and sustainable India.
        </p>

        {/* Colleges & Authors badge */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300">
          <span className="bg-white/10 px-2.5 py-1 rounded border border-white/10 font-medium text-amber-200">
            Sri Venkateswara College, DU
          </span>
          <span className="text-slate-500">•</span>
          <span className="bg-white/10 px-2.5 py-1 rounded border border-white/10 font-medium text-amber-200">
            Delhi Technological University (DTU)
          </span>
        </div>

        {/* Authors line */}
        <div className="mt-2 text-[12px] text-slate-400 font-medium tracking-wide">
          Nimish Jain <span className="text-slate-600">|</span> Etant Rustagi <span className="text-slate-600">|</span> Kashvi Gupta <span className="text-slate-600">|</span> Shagun Tomar
        </div>

        {/* Live Step Progress Bar */}
        <div className="w-full max-w-md mt-7 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="truncate pr-2 font-mono-code text-[11px] text-amber-300/90">
              {currentStageText}
            </span>
            <span className="font-mono-code font-bold text-amber-400">
              {Math.min(100, Math.round(progress))}%
            </span>
          </div>

          <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden border border-white/10 relative p-0.5">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-400 rounded-full transition-all duration-75 shadow-lg shadow-amber-500/50"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Quick Pillars */}
          <div className="grid grid-cols-3 gap-2 pt-3 text-[11px] text-slate-400">
            <div className="flex items-center justify-center space-x-1 py-1 px-1.5 rounded bg-white/5 border border-white/5">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">DPDP Consent</span>
            </div>
            <div className="flex items-center justify-center space-x-1 py-1 px-1.5 rounded bg-white/5 border border-white/5">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="truncate">IRDAI 1h/3h Clock</span>
            </div>
            <div className="flex items-center justify-center space-x-1 py-1 px-1.5 rounded bg-white/5 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
              <span className="truncate">Green Compute</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Quote */}
      <div className="absolute bottom-4 text-center text-[11px] text-slate-500 max-w-lg px-4">
        &ldquo;Build for scale, with trust, access, and a lower environmental footprint.&rdquo;
      </div>
    </div>
  );
};
