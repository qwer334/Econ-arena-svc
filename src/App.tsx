/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NamastePreloader } from './components/NamastePreloader';
import { Header, AppViewMode } from './components/Header';
import { SlideDeck } from './components/SlideDeck';
import { SetuPrototype } from './components/prototype/SetuPrototype';
import { InteractiveFunnel } from './components/frameworks/InteractiveFunnel';
import { TradeOffMatrix } from './components/frameworks/TradeOffMatrix';
import { BudgetSimulator } from './components/frameworks/BudgetSimulator';
import { StakeholderMatrix } from './components/StakeholderMatrix';
import { TeamBriefingModal } from './components/TeamBriefingModal';

export default function App() {
  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [currentMode, setCurrentMode] = useState<AppViewMode>('prototype');
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Namaste Hindi 3.8s Cultural Preloader */}
      {showPreloader && (
        <NamastePreloader
          durationSeconds={3.8}
          onComplete={() => setShowPreloader(false)}
        />
      )}

      {/* 2. Top Navigation Bar */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => setCurrentMode(mode)}
        onOpenTeamModal={() => setIsTeamModalOpen(true)}
        onReplayNamaste={() => setShowPreloader(true)}
      />

      {/* 3. Main Workspace View */}
      <main className="flex-1">
        {currentMode === 'deck' && (
          <SlideDeck
            onOpenTeamModal={() => setIsTeamModalOpen(true)}
            onOpenPrototype={() => setCurrentMode('prototype')}
          />
        )}

        {currentMode === 'prototype' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
            {/* Quick Context Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white px-5 py-3 rounded-xl border border-slate-200 text-xs text-slate-600 gap-2 shadow-xs">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-900">WORKING EXECUTIVE PROTOTYPE:</span>
                <span>Testing DPDP Consent, Multilingual Discharge & IRDAI 1h/3h Claims Pre-Check</span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentMode('funnel')}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  View Step-by-Step Funnel →
                </button>
                <button
                  onClick={() => setCurrentMode('deck')}
                  className="text-slate-700 hover:text-slate-900 font-semibold"
                >
                  View All 6 Slides →
                </button>
              </div>
            </div>

            {/* Live Interactive Engine */}
            <SetuPrototype />

            {/* Framework Preview Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              <InteractiveFunnel />
              <TradeOffMatrix />
            </div>
          </div>
        )}

        {currentMode === 'funnel' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            <InteractiveFunnel />
          </div>
        )}

        {currentMode === 'tradeoff' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            <TradeOffMatrix />
          </div>
        )}

        {currentMode === 'budget' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            <BudgetSimulator />
          </div>
        )}

        {currentMode === 'stakeholders' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-4">
            <StakeholderMatrix />
          </div>
        )}
      </main>

      {/* 4. Team Prompt!Please Case Briefing Modal */}
      <TeamBriefingModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />

      {/* 5. Minimalist Executive Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-4 px-4 sm:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold">SETU AI</span>
            <span>•</span>
            <span>Consent-First Healthcare Admin & Claims Intelligence</span>
            <span>•</span>
            <span className="text-amber-400 font-hindi">नमस्ते भारत</span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <span>Team Prompt!Please (Sri Venkateswara College & DTU)</span>
            <span>•</span>
            <button
              onClick={() => setIsTeamModalOpen(true)}
              className="text-amber-300 hover:text-white underline"
            >
              Case Introduction
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
