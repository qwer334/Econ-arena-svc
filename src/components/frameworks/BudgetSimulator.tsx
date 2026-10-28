import React, { useState } from 'react';
import { BUDGET_BREAKDOWN, TOTAL_BUDGET_SUMMARY, BudgetWorkstream } from '../../data/caseData';
import { Wallet, PieChart, Calendar, TrendingUp, ShieldCheck, ArrowRight, DollarSign } from 'lucide-react';

export const BudgetSimulator: React.FC = () => {
  const [selectedWorkstream, setSelectedWorkstream] = useState<string>(BUDGET_BREAKDOWN[0].workstream);
  const [activeHalf, setActiveHalf] = useState<string>('All');

  const selectedData = BUDGET_BREAKDOWN.find((b) => b.workstream === selectedWorkstream) || BUDGET_BREAKDOWN[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-blue-700 uppercase">
            <Wallet className="w-4 h-4 text-blue-600" />
            <span>₹50 Cr Capital Envelope & 24-Month Execution Gantt • Slide 3</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
            Capital Allocation & Spend Velocity
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Top-down allocation: ₹40 Cr operational spend with ₹10 Cr (20%) ring-fenced reserve intact at Month 24.
          </p>
        </div>

        {/* Big Numbers Badge */}
        <div className="flex items-center space-x-3 bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
          <div className="text-center px-2 border-r border-slate-200">
            <div className="text-xs text-slate-500 font-medium">Total Envelope</div>
            <div className="text-lg font-bold text-slate-900">₹50.0 Cr</div>
          </div>
          <div className="text-center px-2 border-r border-slate-200">
            <div className="text-xs text-slate-500 font-medium">24M Spend</div>
            <div className="text-lg font-bold text-blue-600">₹40.0 Cr</div>
          </div>
          <div className="text-center px-2">
            <div className="text-xs text-emerald-600 font-medium">Intact Reserve</div>
            <div className="text-lg font-bold text-emerald-600">₹10.0 Cr</div>
          </div>
        </div>
      </div>

      {/* 2-Column: Left Gantt / Workstream Matrix, Right Visual Spend / Share Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: Gantt Reconciliation Table (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>Gantt Workstream Allocation (₹ Crore)</span>
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">H1-H4 Half-Year Cycles</span>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <th className="py-2.5 px-3">Workstream</th>
                  <th className="py-2.5 px-2 text-right">H1 (M1-6)</th>
                  <th className="py-2.5 px-2 text-right">H2 (M7-12)</th>
                  <th className="py-2.5 px-2 text-right">H3 (M13-18)</th>
                  <th className="py-2.5 px-2 text-right">H4 (M19-24)</th>
                  <th className="py-2.5 px-3 text-right bg-blue-50/50 text-blue-900">Total</th>
                  <th className="py-2.5 px-2 text-right">Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {BUDGET_BREAKDOWN.map((row) => {
                  const isSelected = selectedWorkstream === row.workstream;
                  return (
                    <tr
                      key={row.workstream}
                      onClick={() => setSelectedWorkstream(row.workstream)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? 'bg-blue-50/80 font-semibold text-blue-950' : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <td className="py-2 px-3 flex items-center space-x-1.5">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            isSelected ? 'bg-blue-600 ring-2 ring-blue-300' : 'bg-slate-300'
                          }`}
                        />
                        <span className="truncate max-w-[140px]">{row.workstream}</span>
                      </td>
                      <td className="py-2 px-2 text-right font-mono">₹{row.h1.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right font-mono">₹{row.h2.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right font-mono">₹{row.h3.toFixed(2)}</td>
                      <td className="py-2 px-2 text-right font-mono">₹{row.h4.toFixed(2)}</td>
                      <td className="py-2 px-3 text-right font-mono font-bold bg-blue-50/30 text-blue-900">
                        ₹{row.total.toFixed(2)}
                      </td>
                      <td className="py-2 px-2 text-right font-mono text-slate-500">
                        {row.percentage}%
                      </td>
                    </tr>
                  );
                })}

                {/* Half-Year Spend Totals */}
                <tr className="bg-slate-100/80 font-bold text-slate-900 border-t-2 border-slate-300">
                  <td className="py-2 px-3">Half-Year Spend</td>
                  <td className="py-2 px-2 text-right font-mono">₹7.50</td>
                  <td className="py-2 px-2 text-right font-mono">₹9.20</td>
                  <td className="py-2 px-2 text-right font-mono">₹10.90</td>
                  <td className="py-2 px-2 text-right font-mono">₹12.40</td>
                  <td className="py-2 px-3 text-right font-mono text-blue-900 bg-blue-100/60">₹40.00</td>
                  <td className="py-2 px-2 text-right font-mono">80%</td>
                </tr>

                {/* Cumulative Cash Left */}
                <tr className="bg-emerald-50/70 font-bold text-emerald-900">
                  <td className="py-2 px-3 flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cash Remaining</span>
                  </td>
                  <td className="py-2 px-2 text-right font-mono">₹42.50</td>
                  <td className="py-2 px-2 text-right font-mono">₹33.30</td>
                  <td className="py-2 px-2 text-right font-mono">₹22.40</td>
                  <td className="py-2 px-2 text-right font-mono text-emerald-700">₹10.00</td>
                  <td className="py-2 px-3 text-right font-mono bg-emerald-100/60">Reserve</td>
                  <td className="py-2 px-2 text-right font-mono">20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Selected Workstream Detail */}
          <div className="p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs">
            <div className="font-bold text-blue-950 flex items-center justify-between">
              <span>{selectedData.workstream} (₹{selectedData.total.toFixed(2)} Cr • {selectedData.percentage}%)</span>
              <span className="text-[11px] font-mono text-blue-700">Detailed Scope</span>
            </div>
            <p className="mt-1 text-slate-700 leading-normal">{selectedData.description}</p>
            <div className="mt-2 text-[11px] font-medium text-blue-900 bg-white/80 p-2 rounded border border-blue-200/60">
              <span className="font-semibold">Execution Personnel & Assets: </span>
              {selectedData.keyPersonnelOrAssets}
            </div>
          </div>
        </div>

        {/* Right: Pie Distribution Visualizer & Spend Milestones (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
              <PieChart className="w-4 h-4 text-slate-500" />
              <span>Capital Pie Envelope (₹50 Cr)</span>
            </h3>
            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              100% Accounted
            </span>
          </div>

          {/* Visual Stack Bar representing Pie Shares */}
          <div className="w-full h-8 rounded-lg overflow-hidden flex border border-slate-300 shadow-xs">
            <div style={{ width: '38%' }} className="bg-indigo-600 h-full" title="People: 38% (₹19 Cr)" />
            <div style={{ width: '12%' }} className="bg-sky-500 h-full" title="Compute: 12% (₹6 Cr)" />
            <div style={{ width: '12%' }} className="bg-blue-600 h-full" title="Sales: 12% (₹6 Cr)" />
            <div style={{ width: '8%' }} className="bg-amber-500 h-full" title="Data: 8% (₹4 Cr)" />
            <div style={{ width: '6%' }} className="bg-purple-500 h-full" title="Compliance: 6% (₹3 Cr)" />
            <div style={{ width: '4%' }} className="bg-rose-500 h-full" title="Marketing: 4% (₹2 Cr)" />
            <div style={{ width: '20%' }} className="bg-emerald-500 h-full" title="Ring-Fenced Cash Reserve: 20% (₹10 Cr)" />
          </div>

          {/* Legend Items */}
          <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-indigo-600 shrink-0" />
              <span className="truncate">People & Delivery: 38%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-emerald-500 shrink-0" />
              <span className="truncate font-semibold text-emerald-900">Cash Reserve: 20%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-sky-500 shrink-0" />
              <span className="truncate">Rented Compute: 12%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-blue-600 shrink-0" />
              <span className="truncate">Sales & Support: 12%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-amber-500 shrink-0" />
              <span className="truncate">Data & Vernacular: 8%</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 rounded bg-purple-500 shrink-0" />
              <span className="truncate">Cybersecurity/Legal: 6%</span>
            </div>
          </div>

          {/* 24-Month Milestone Tracker */}
          <div className="mt-3 bg-slate-50 rounded-lg p-3 border border-slate-200">
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-2 flex items-center justify-between">
              <span>H1–H4 Milestones Roadmap</span>
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-white border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>H1 (M1–6): Foundation & Beta</span>
                  <span className="text-[10px] text-slate-500">2 Hospital Pilots</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  2 hospital design partners + 1 HIS/EMR partner. DPDP consent & MVP architecture.
                </p>
              </div>

              <div className="p-2 rounded bg-white border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>H2 (M7–12): Paid Pilots</span>
                  <span className="text-[10px] text-slate-500">First Annual Contract</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  3–5 geographic targets, initial productisation, commercial contract signed.
                </p>
              </div>

              <div className="p-2 rounded bg-white border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>H3 (M13–18): Commercial Expansion</span>
                  <span className="text-[10px] text-slate-500">5+ Paying Customers</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Expand into Hyderabad after Chennai validation; partner-led scale across South.
                </p>
              </div>

              <div className="p-2 rounded bg-white border border-slate-200">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span>H4 (M19–24): Scale & Profitability</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">10+ Paying Clients</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  Statewide Tamil Nadu → Hyderabad. Prepare Mumbai entry (only after &gt;40% pipeline outside South).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
