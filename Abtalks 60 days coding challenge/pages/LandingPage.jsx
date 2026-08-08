import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TRACK_HIGHLIGHTS, TIMELINE_STEPS } from '../data/mockData';
import { Flame, Layers, Database, Sparkles, ArrowRight, Code2, ShieldCheck, Trophy, CheckCircle } from 'lucide-react';

export const LandingPage = () => {
  const navigate = useNavigate();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-between pb-24 relative">
      {/* Background Subtle Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] h-96 bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-transparent pointer-events-none blur-3xl" />

      {/* Header Branding */}
      <header className="p-4 flex items-center justify-between border-b border-slate-900 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-md">
            <Flame className="w-5 h-5 text-slate-950 fill-current" />
          </div>
          <div>
            <h1 className="text-sm font-extrabold text-slate-100 tracking-tight leading-none">
              ABTalks <span className="text-amber-400">60-Day</span>
            </h1>
            <span className="text-[10px] font-mono text-slate-400">Coding Challenge</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition cursor-pointer"
        >
          Dashboard <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* Main Content Area */}
      <div className="p-4 space-y-6 z-10">
        {/* Hero Section */}
        <section className="space-y-3 text-center pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-medium">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Proof-of-Work Accelerator
          </span>

          <h2 className="text-2xl font-black text-slate-100 tracking-tight leading-tight">
            60 Days. 60 Projects.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">
              Build Consistent Proof-of-Work.
            </span>
          </h2>

          <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
            Stop tutorial hell. Ship one verified code project daily, maintain your fire streak, and build an unshakeable developer portfolio recruiters respect.
          </p>

          <div className="flex items-center justify-center gap-3 text-[11px] font-mono text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> 100% Free
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Peer Ranked
            </span>
          </div>
        </section>

        {/* Track Highlights Badges */}
        <section className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
            Available Skill Tracks
          </h3>
          <div className="space-y-2">
            {TRACK_HIGHLIGHTS.map((track) => (
              <div
                key={track.id}
                className={`bg-gradient-to-r ${track.color} border rounded-xl p-3 flex items-center justify-between shadow-xs transition hover:scale-[1.01]`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    {getIcon(track.icon)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">{track.name}</h4>
                    <p className="text-[10px] font-mono text-slate-400 mt-0.5">{track.tech}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-800">
                  60 Tasks
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Clarity/Trust 3-Step Timeline */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
          <h3 className="text-xs font-bold text-slate-200 flex items-center gap-1.5 font-mono uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            How It Works (3 Simple Steps)
          </h3>

          <div className="space-y-3">
            {TIMELINE_STEPS.map((step) => (
              <div key={step.step} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                  {step.step}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-100">{step.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky CTA (Mobile Bottom Fixed Button) */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-slate-950/95 border-t border-slate-800 backdrop-blur-md z-40 max-w-[390px] mx-auto">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Commit to the Challenge</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
