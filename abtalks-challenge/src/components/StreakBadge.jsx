import React from 'react';
import { Flame, Zap, AlertCircle } from 'lucide-react';

export const StreakBadge = ({ persona }) => {
  const { streak, hasMissedDays, motivationMessage } = persona;

  if (streak === 0) {
    return (
      <div className="bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-4 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Streak Status
              </div>
              <h3 className="text-base font-bold text-slate-100">
                0-Day Active Streak
              </h3>
            </div>
          </div>
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
            {hasMissedDays ? 'Recovery Mode' : 'Day 1 Starter'}
          </span>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-start gap-2 text-xs text-amber-200/90">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-snug">
            {motivationMessage || "Start your streak today! Submit Day 1 proof of work to spark your fire."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 border border-amber-500/40 rounded-2xl p-4 shadow-[0_0_25px_rgba(245,158,11,0.15)] relative overflow-hidden">
      {/* Background Flame Glow */}
      <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            Active Streak
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 tracking-tight">
              {streak}
            </span>
            <span className="text-sm font-bold text-amber-200 uppercase tracking-wide">
              {streak === 1 ? 'Day' : 'Days'} Active
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-inner">
            <Flame className="w-9 h-9 text-amber-400 animate-bounce" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <span className="text-slate-400">Streak Fire Rank:</span>
        <span className="font-semibold text-emerald-400 flex items-center gap-1">
          🔥 Top 15% Consistent Builders
        </span>
      </div>
    </div>
  );
};
