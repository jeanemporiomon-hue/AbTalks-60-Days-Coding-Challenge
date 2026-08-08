import React from 'react';
import { usePersona } from '../context/PersonaContext';

export const MobileFrame = ({ children }) => {
  const { isFrameMode } = usePersona();

  if (!isFrameMode) {
    return <div className="w-full min-h-screen bg-slate-950">{children}</div>;
  }

  return (
    <div className="w-full min-h-[calc(100vh-42px)] bg-slate-950 py-4 px-2 flex justify-center items-start overflow-x-hidden">
      {/* 390px Mobile Viewport Outer Container */}
      <div className="w-full max-w-[390px] min-h-[780px] bg-slate-950 border border-slate-800 rounded-[38px] shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_15px_rgba(245,158,11,0.15)] flex flex-col relative overflow-hidden transition-all duration-300">
        
        {/* Mobile Notch Indicator */}
        <div className="w-full bg-slate-950 pt-2 pb-1 px-6 flex justify-between items-center text-[10px] text-slate-400 font-mono select-none z-40 border-b border-slate-900">
          <span>9:41</span>
          <div className="w-20 h-3 bg-slate-900 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
          </div>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-4 h-2.5 border border-slate-400 rounded-xs p-0.5 flex items-center">
              <div className="h-full w-full bg-emerald-400" />
            </div>
          </div>
        </div>

        {/* Viewport Content */}
        <main className="flex-1 overflow-y-auto flex flex-col scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
};
