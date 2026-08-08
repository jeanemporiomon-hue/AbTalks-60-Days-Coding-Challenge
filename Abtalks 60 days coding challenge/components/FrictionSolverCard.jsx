import React, { useState } from 'react';
import { Copy, Check, Moon, Sparkles, FileText } from 'lucide-react';

export const FrictionSolverCard = ({ templateText, githubUrl }) => {
  const formattedTemplate = templateText.replace(
    '{githubUrl}',
    githubUrl || 'https://github.com/your-username/abtalks-day12-pricing'
  );

  const [postContent, setPostContent] = useState(formattedTemplate);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(postContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 rounded-2xl p-4 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <Moon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
              Late Night Friction Solver
            </h3>
            <p className="text-[10px] text-indigo-300/80">
              Tired? Copy-paste this pre-written LinkedIn template
            </p>
          </div>
        </div>
        <span className="px-2 py-0.5 text-[9px] font-mono font-semibold uppercase rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          Fast-Draft
        </span>
      </div>

      {/* Editable Template Textarea */}
      <div className="relative mt-2">
        <textarea
          rows={7}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="w-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono leading-relaxed focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 resize-none selection:bg-indigo-500/30"
        />
        <button
          onClick={handleCopy}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[11px] font-bold transition shadow-lg cursor-pointer active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-300" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Template</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" /> Auto-synced with day's criteria
        </span>
        <span>{postContent.length} chars</span>
      </div>
    </div>
  );
};
