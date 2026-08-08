import React, { useState } from 'react';
import { Github, Linkedin, CheckCircle2, Send, ExternalLink, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SubmissionForm = ({ dayNum, dayData, onSubmit }) => {
  const isCompleted = dayData?.status === 'completed';
  const [githubUrl, setGithubUrl] = useState(dayData?.githubUrl || '');
  const [linkedinUrl, setLinkedinUrl] = useState(dayData?.linkedinUrl || '');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl.trim()) {
      setError('Please provide a valid GitHub Commit URL');
      return;
    }
    if (!linkedinUrl.trim()) {
      setError('Please provide a valid LinkedIn Post URL');
      return;
    }

    setError('');
    onSubmit(dayNum, githubUrl, linkedinUrl);

    // Launch Confetti Celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect trigger', err);
    }

    setShowSuccessModal(true);
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
          <Send className="w-4 h-4 text-emerald-400" />
          Proof of Work Submission
        </h3>
        {isCompleted ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <CheckCircle2 className="w-3 h-3" /> Verified Complete
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            Pending Submission
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* GitHub Input */}
        <div>
          <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5 text-slate-400" />
            GitHub Commit / Repository URL <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/username/abtalks-day12-pricing"
              className="w-full bg-slate-950/90 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all font-mono"
            />
          </div>
        </div>

        {/* LinkedIn Input */}
        <div>
          <label className="block text-[11px] font-medium text-slate-300 mb-1 flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            LinkedIn Proof Post URL <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://linkedin.com/in/username/posts/abtalks-day12"
              className="w-full bg-slate-950/90 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all font-mono"
            />
          </div>
        </div>

        {error && (
          <p className="text-[11px] text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-lg p-2 font-medium">
            {error}
          </p>
        )}

        {/* Action Button */}
        <button
          type="submit"
          className={`w-full py-3 px-4 rounded-xl font-bold text-xs tracking-wide transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98] ${
            isCompleted
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-emerald-500/20'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Update Proof of Work
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 fill-current" />
              Submit Proof of Work
            </>
          )}
        </button>
      </form>

      {/* Success Modal Confirmation */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fade-in">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-5 max-w-xs w-full shadow-2xl text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100">Day {dayNum} Completed! 🔥</h4>
              <p className="text-xs text-slate-300 mt-1">
                Your proof of work has been submitted! Your streak has incremented and your profile is updated.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition cursor-pointer"
              >
                Keep Building 🔥
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
