import React from 'react';
import { usePersona } from '../context/PersonaContext';
import { UserCheck, Flame, AlertTriangle, Monitor, Smartphone, RefreshCw } from 'lucide-react';

export const PersonaSwitcher = () => {
  const { personas, activePersonaId, switchPersona, resetPersonas, isFrameMode, setIsFrameMode } = usePersona();

  const getPersonaIcon = (id) => {
    switch (id) {
      case 'personaA': return <UserCheck className="w-3.5 h-3.5 text-blue-400" />;
      case 'personaB': return <Flame className="w-3.5 h-3.5 text-amber-400" />;
      case 'personaC': return <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />;
      default: return null;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/30 px-3 py-2 text-xs shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Indicator */}
        <div className="flex items-center gap-1.5 font-mono text-[11px] text-amber-400 uppercase tracking-wider">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold">Reviewer Mode:</span>
        </div>

        {/* Center: Persona Toggle Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-lg border border-slate-800">
          {Object.values(personas).map((p) => {
            const isActive = p.id === activePersonaId;
            return (
              <button
                key={p.id}
                onClick={() => switchPersona(p.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all text-[11px] font-medium cursor-pointer ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/50 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
                title={p.title}
              >
                {getPersonaIcon(p.id)}
                <span className="hidden sm:inline">{p.title.split(':')[0]}</span>
                <span className="sm:hidden">{p.id.replace('persona', 'P-')}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Controls (Frame toggle & Reset state) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFrameMode(!isFrameMode)}
            className="flex items-center gap-1 px-2 py-1 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded border border-slate-700 transition cursor-pointer text-[11px]"
            title={isFrameMode ? "Switch to Full Screen Width" : "Switch to 390px Mobile Viewport Frame"}
          >
            {isFrameMode ? (
              <>
                <Smartphone className="w-3 h-3 text-amber-400" />
                <span className="hidden md:inline">390px Frame</span>
              </>
            ) : (
              <>
                <Monitor className="w-3 h-3 text-blue-400" />
                <span className="hidden md:inline">Fluid Width</span>
              </>
            )}
          </button>

          <button
            onClick={resetPersonas}
            className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 rounded transition cursor-pointer"
            title="Reset Mock State"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
};
