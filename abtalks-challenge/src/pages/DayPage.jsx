import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePersona } from '../context/PersonaContext';
import { DAY_12_DETAILS } from '../data/mockData';
import { SubmissionForm } from '../components/SubmissionForm';
import { FrictionSolverCard } from '../components/FrictionSolverCard';
import { ArrowLeft, CheckCircle2, Clock, Award, Code, Check, Zap, Eye } from 'lucide-react';

export const DayPage = () => {
  const { dayNum } = useParams();
  const navigate = useNavigate();
  const { activePersona, submitDayProof } = usePersona();

  const targetDayNum = parseInt(dayNum || '12', 10);
  const dayData = activePersona.days.find((d) => d.day === targetDayNum) || activePersona.days[11];
  const isCompleted = dayData?.status === 'completed';

  // Demo interactive state for Day 12 Pricing Component
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="flex-1 p-4 space-y-4 pb-12">
      {/* Header Navigation */}
      <header className="flex items-center justify-between">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          <span>Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400">Day {targetDayNum} of 60</span>
          {isCompleted ? (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Completed
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
              Pending Submission
            </span>
          )}
        </div>
      </header>

      {/* Task Specification Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-4">
        {/* Title & Metadata */}
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 mb-1">
            <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400 font-semibold">
              {DAY_12_DETAILS.track}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" /> {DAY_12_DETAILS.estTime}
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3 h-3 text-emerald-400" /> +{DAY_12_DETAILS.points} XP
            </span>
          </div>
          <h2 className="text-lg font-black text-slate-100 leading-snug">
            {DAY_12_DETAILS.title}
          </h2>
        </div>

        {/* Task Description */}
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 border border-slate-800/80 rounded-xl p-3">
          {DAY_12_DETAILS.description}
        </p>

        {/* Requirements Checklist */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-emerald-400" /> Challenge Requirements
          </h3>
          <ul className="space-y-2">
            {DAY_12_DETAILS.requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                <span className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Micro Demo Component (Build Spec Showcase) */}
      <div className="bg-slate-950 border border-amber-500/30 rounded-2xl p-4 shadow-xl space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5 font-mono">
            <Eye className="w-4 h-4 text-amber-400" /> Live Demo Showcase (390px Pricing Tier)
          </span>
          <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
            Interactive
          </span>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-3 bg-slate-900 p-1.5 rounded-xl border border-slate-800 w-fit mx-auto">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-3 py-1 text-[11px] font-bold rounded-lg transition cursor-pointer ${
              !isAnnual ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-3 py-1 text-[11px] font-bold rounded-lg transition cursor-pointer flex items-center gap-1 ${
              isAnnual ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Annual <span className="text-[9px] bg-slate-950 text-amber-400 px-1.5 py-0.5 rounded-full font-mono">20% OFF</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="space-y-2.5 pt-1">
          {/* Pro Plan (Highlighted) */}
          <div
            onClick={() => setSelectedPlan('pro')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer relative ${
              selectedPlan === 'pro'
                ? 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : 'bg-slate-900/60 border-slate-800'
            }`}
          >
            <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-amber-400 text-slate-950 font-extrabold text-[9px] uppercase tracking-wider rounded-full shadow-xs">
              ★ Most Popular
            </span>
            <div className="flex justify-between items-baseline">
              <div>
                <h4 className="text-sm font-bold text-slate-100">Pro Developer</h4>
                <p className="text-[10px] text-slate-400">For active daily challenge builders</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-amber-300">${isAnnual ? '15' : '19'}</span>
                <span className="text-[10px] text-slate-400 font-mono">/mo</span>
              </div>
            </div>
            <ul className="mt-2.5 pt-2.5 border-t border-slate-800 space-y-1 text-[11px] text-slate-300">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Unlimited daily project submissions</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Automated GitHub commit verification</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400" /> Recruiter leaderboard profile badge</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Proof of Work Form */}
      <SubmissionForm dayNum={targetDayNum} dayData={dayData} onSubmit={submitDayProof} />

      {/* Late-Night Friction Solver Feature */}
      <FrictionSolverCard
        templateText={DAY_12_DETAILS.frictionSolverTemplate}
        githubUrl={dayData?.githubUrl}
      />
    </div>
  );
};
