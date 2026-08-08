import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Flame } from 'lucide-react';

export const ProgressGrid = ({ days, currentDay }) => {
  const navigate = useNavigate();
  const [hoveredDay, setHoveredDay] = useState(null);

  const completedCount = days.filter((d) => d.status === 'completed').length;
  const missedCount = days.filter((d) => d.status === 'missed').length;
  const upcomingCount = days.filter((d) => d.status === 'upcoming').length;

  const getSquareStyle = (dayObj) => {
    switch (dayObj.status) {
      case 'completed':
        return 'bg-emerald-500 text-slate-950 border-emerald-400 hover:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]';
      case 'missed':
        return 'bg-rose-600/80 text-white border-rose-500/60 hover:bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.3)]';
      case 'current':
        return 'bg-amber-500/20 text-amber-300 border-2 border-amber-400 font-bold pulse-amber-ring shadow-[0_0_12px_rgba(245,158,11,0.5)]';
      default:
        return 'bg-slate-900 text-slate-600 border-slate-800/80 hover:border-slate-600 hover:text-slate-400';
    }
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-md">
      {/* Grid Header & Summary Legend */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
            60-Day Progress Grid
          </h3>
          <p className="text-[11px] text-slate-400">
            {completedCount} Completed • {missedCount} Missed • {upcomingCount} Ahead
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500" />
            <span className="text-slate-400">Done</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-xs bg-rose-500" />
            <span className="text-slate-400">Missed</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-xs bg-amber-400" />
            <span className="text-slate-400">Active</span>
          </div>
        </div>
      </div>

      {/* Dense 60-Square Grid */}
      <div className="grid grid-cols-10 gap-1.5 my-2">
        {days.map((dayObj) => {
          const isSelectedDay12 = dayObj.day === 12;
          return (
            <button
              key={dayObj.day}
              onMouseEnter={() => setHoveredDay(dayObj)}
              onMouseLeave={() => setHoveredDay(null)}
              onClick={() => navigate(`/day/${dayObj.day}`)}
              className={`h-7 rounded-md border flex items-center justify-center text-[11px] font-mono font-medium transition-all duration-150 cursor-pointer relative ${getSquareStyle(
                dayObj
              )} ${isSelectedDay12 ? 'ring-2 ring-amber-300 ring-offset-1 ring-offset-slate-950' : ''}`}
              title={`Day ${dayObj.day}: ${dayObj.title} (${dayObj.status})`}
            >
              {dayObj.status === 'completed' ? (
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              ) : dayObj.status === 'missed' ? (
                <X className="w-3.5 h-3.5 stroke-[2.5]" />
              ) : dayObj.status === 'current' ? (
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              ) : (
                dayObj.day
              )}
            </button>
          );
        })}
      </div>

      {/* Tooltip / Details Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
        <span>
          {hoveredDay ? (
            <span className="text-slate-200">
              <strong className="text-amber-400">Day {hoveredDay.day}:</strong> {hoveredDay.title}
            </span>
          ) : (
            'Tap any square to view details'
          )}
        </span>
        <span className="text-[10px] font-mono text-emerald-400">
          {Math.round((completedCount / 60) * 100)}% Complete
        </span>
      </div>
    </div>
  );
};
