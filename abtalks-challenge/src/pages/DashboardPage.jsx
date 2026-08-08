import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersona } from '../context/PersonaContext';
import { StreakBadge } from '../components/StreakBadge';
import { ProgressGrid } from '../components/ProgressGrid';
import { ArrowRight, Trophy, Sparkles, Calendar, Code, CheckCircle, AlertTriangle } from 'lucide-react';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { activePersona } = usePersona();

  const activeDayObj = activePersona.days.find((d) => d.day === activePersona.currentDay) || activePersona.days[11];
  const completedCount = activePersona.days.filter((d) => d.status === 'completed').length;
  const progressPercent = Math.round((completedCount / 60) * 100);

  return (
    <div className="flex-1 p-4 space-y-4 pb-8">
      {/* Header Profile Overview */}
      <header className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 shadow-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={activePersona.avatar}
              alt={activePersona.name}
              className="w-11 h-11 rounded-xl object-cover border border-amber-500/40 shadow-xs"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-bold text-slate-100">{activePersona.name}</h2>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${activePersona.badgeColor}`}>
                {activePersona.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Global Rank Badge */}
        <div className="text-right bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
          <div className="text-[9px] font-mono uppercase text-slate-400 font-semibold flex items-center justify-end gap-1">
            <Trophy className="w-3 h-3 text-amber-400" /> Rank
          </div>
          <div className="text-sm font-extrabold text-amber-300 font-mono">
            {activePersona.rank}
          </div>
        </div>
      </header>

      {/* Recovering Persona Motivation Alert (Persona C special case) */}
      {activePersona.hasMissedDays && (
        <div className="bg-gradient-to-r from-rose-950/60 via-amber-950/40 to-slate-900 border border-amber-500/40 rounded-xl p-3 flex items-start gap-2.5 shadow-md">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-amber-200">Streak Recovery Active</h4>
            <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
              You missed Days 13 & 14, but you're back! Complete Day 15 today to rekindle your fire.
            </p>
          </div>
        </div>
      )}

      {/* Gamified Streak Component */}
      <StreakBadge persona={activePersona} />

      {/* Current Task Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-4 shadow-lg space-y-3 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold">
            <Calendar className="w-3 h-3 text-amber-400" /> Today's Active Challenge
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            Day {activePersona.currentDay} of 60
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-100">
            {activeDayObj?.title || 'Build a Mobile-First Pricing Component'}
          </h3>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
            Build a responsive pricing tier card with monthly/annual billing toggle optimized strictly for mobile viewports.
          </p>
        </div>

        {/* Micro-Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>Overall Challenge Completion</span>
            <span className="text-emerald-400 font-bold">{progressPercent}% ({completedCount}/60 Days)</span>
          </div>
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800/80">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-500"
              style={{ width: `${Math.max(progressPercent, 3)}%` }}
            />
          </div>
        </div>

        {/* View Today's Task CTA Button */}
        <button
          onClick={() => navigate(`/day/${activePersona.currentDay}`)}
          className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
        >
          <span>View Today's Task (Day {activePersona.currentDay})</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Gamified 60-Day Progress Grid */}
      <ProgressGrid days={activePersona.days} currentDay={activePersona.currentDay} />
    </div>
  );
};
