import React, { useState } from 'react';
import { SOUTH_VS_MUMBAI_TRADEOFFS, TradeOffMetric } from '../../data/caseData';
import { Scale, CheckCircle2, XCircle, Droplets, Zap, Building2, ShieldAlert, Filter, Sparkles } from 'lucide-react';

export const TradeOffMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [focusedDimension, setFocusedDimension] = useState<string>(SOUTH_VS_MUMBAI_TRADEOFFS[1].dimension); // Water availability

  const categories = ['All', 'Environment', 'Market', 'Infrastructure', 'Risk'];

  const filteredTradeoffs = selectedCategory === 'All'
    ? SOUTH_VS_MUMBAI_TRADEOFFS
    : SOUTH_VS_MUMBAI_TRADEOFFS.filter((t) => t.category === selectedCategory);

  const focusedItem = SOUTH_VS_MUMBAI_TRADEOFFS.find((t) => t.dimension === focusedDimension) || SOUTH_VS_MUMBAI_TRADEOFFS[0];

  // Calculate overall advantage score
  const chennaiWinsCount = SOUTH_VS_MUMBAI_TRADEOFFS.filter(t => t.chennai.score > t.mumbai.score).length;
  const mumbaiWinsCount = SOUTH_VS_MUMBAI_TRADEOFFS.filter(t => t.mumbai.score > t.chennai.score).length;

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
      {/* Header and Strategic Verdict */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase">
            <Scale className="w-4 h-4 text-emerald-600" />
            <span>Location Strategy & Risk Trade-Offs • Slide 2</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
            South (Chennai) vs West (Mumbai): Strategic Comparison
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Why Mumbai wins on raw capacity size, but Chennai wins on policy forcing event, vernacular gap, and green targets.
          </p>
        </div>

        {/* Executive Decision Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-950 max-w-sm">
          <div className="font-bold flex items-center space-x-1 text-emerald-900">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strategic Decision Gate</span>
          </div>
          <div className="mt-1 font-medium">
            Chennai first → Hyderabad next → Mumbai <span className="underline decoration-emerald-500">only after 40%</span> of pipeline originates outside the South.
          </div>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center space-x-2 mt-5 overflow-x-auto pb-2">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-xs text-slate-500 font-medium shrink-0">Filter by dimension:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors shrink-0 ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Tradeoff Table / Grid */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="py-3 px-4 font-semibold text-slate-700 w-1/4">Evaluation Dimension</th>
              <th className="py-3 px-4 font-semibold text-emerald-900 bg-emerald-50/60 w-1/3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Chennai / South India (Our Choice)</span>
                </div>
              </th>
              <th className="py-3 px-4 font-semibold text-slate-700 bg-slate-100/60 w-1/3">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span>Mumbai / Maharashtra (Alternate)</span>
                </div>
              </th>
              <th className="py-3 px-3 font-semibold text-slate-500 text-center">Score Delta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredTradeoffs.map((item) => {
              const isSelected = focusedDimension === item.dimension;
              const chennaiWins = item.chennai.score > item.mumbai.score;
              return (
                <tr
                  key={item.dimension}
                  onClick={() => setFocusedDimension(item.dimension)}
                  className={`cursor-pointer transition-colors ${
                    isSelected ? 'bg-indigo-50/50 font-medium' : 'hover:bg-slate-50'
                  }`}
                >
                  <td className="py-3 px-4 font-medium text-slate-800">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                        {item.category}
                      </span>
                      <span>{item.dimension}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 bg-emerald-50/30 text-emerald-950">
                    <div className="flex items-start space-x-2">
                      {chennaiWins ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <span className="w-4 h-4 shrink-0 text-slate-400 text-xs">○</span>
                      )}
                      <div>
                        <div className="font-bold">{item.chennai.value}</div>
                        <div className="text-[11px] text-slate-600 mt-0.5 leading-tight">
                          {item.chennai.details}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 bg-slate-50/30 text-slate-700">
                    <div className="flex items-start space-x-2">
                      {!chennaiWins ? (
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className="font-bold text-slate-900">{item.mumbai.value}</div>
                        <div className="text-[11px] text-slate-600 mt-0.5 leading-tight">
                          {item.mumbai.details}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                        chennaiWins
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {chennaiWins ? `+${item.chennai.score - item.mumbai.score} Chennai` : `+${item.mumbai.score - item.chennai.score} Mumbai`}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Focus Deep Dive Card */}
      <div className="mt-5 p-4 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Consultant Rationale: {focusedItem.dimension}</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed max-w-3xl">
            {focusedItem.executiveVerdict}
          </p>
        </div>

        <div className="shrink-0 flex items-center space-x-4 border-l border-slate-700 pl-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">{chennaiWinsCount} / 8</div>
            <div className="text-[11px] text-slate-400">Chennai Advantages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-400">{mumbaiWinsCount} / 8</div>
            <div className="text-[11px] text-slate-400">Mumbai Capacity Win</div>
          </div>
        </div>
      </div>
    </div>
  );
};
