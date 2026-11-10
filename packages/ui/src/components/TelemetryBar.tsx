'use client';

import React, { useEffect, useState } from 'react';

interface TelemetryColumn {
  id: string;
  code: string;
  label: string;
  level: number;
}

interface TelemetryBarProps {
  title?: string;
  active?: boolean;
  className?: string;
}

const DEFAULT_COLUMNS: TelemetryColumn[] = [
  { id: '1', code: '9127', label: 'COMMS', level: 8 },
  { id: '2', code: '6118', label: 'COMMS', level: 6 },
  { id: '3', code: '9129', label: 'COMMS', level: 9 },
  { id: '4', code: '5120', label: 'COMMS', level: 5 },
  { id: '5', code: '5134', label: 'COMMS', level: 7 },
  { id: '6', code: '8119', label: 'COMMS', level: 9 },
  { id: '7', code: '5183', label: 'COMMS', level: 4 },
  { id: '8', code: '5102', label: 'COMMS', level: 7 }
];

export const TelemetryBar: React.FC<TelemetryBarProps> = ({
  title = 'HOMESTEAD COMMS /// TELEMETRY STREAM',
  active = true,
  className = ''
}) => {
  const [columns, setColumns] = useState<TelemetryColumn[]>(DEFAULT_COLUMNS);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setColumns((prev) =>
        prev.map((col) => {
          const delta = Math.floor(Math.random() * 3) - 1;
          const newLevel = Math.max(2, Math.min(10, col.level + delta));
          return { ...col, level: newLevel };
        })
      );
    }, 1800);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div
      className={`border border-[#2A363F] bg-[#080C10] p-3.5 rounded-lg shadow-[0_0_20px_rgba(0,242,254,0.06)] relative overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#2A363F] text-[10px] font-mono">
        <div className="flex items-center gap-2 text-[#00F2FE] font-bold tracking-widest uppercase">
          <span className="inline-block w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span className="text-[#FF5E3A]">ALERT: NOMINAL</span>
          <span className="text-[#00F2FE]">IN-SYNC [2C]</span>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
        {columns.map((col) => (
          <div key={col.id} className="flex flex-col items-center bg-[#0D1117] p-1.5 rounded border border-[#2A363F]">
            <span className="text-[10px] font-mono font-bold text-slate-300 tracking-wider">
              {col.code}
            </span>
            <span className="text-[7px] font-mono text-[#00F2FE]/70 mb-1.5">
              -CONTROL-
            </span>

            <div className="w-full flex flex-col-reverse gap-0.5 h-14 bg-[#080C10] p-1 rounded">
              {Array.from({ length: 10 }).map((_, idx) => {
                const isLit = idx < col.level;
                const isRed = idx >= 8;
                return (
                  <div
                    key={idx}
                    className={`h-1 w-full rounded-xs transition-all duration-300 ${
                      isLit
                        ? isRed
                          ? 'bg-[#FF5E3A] shadow-[0_0_4px_#FF5E3A]'
                          : 'bg-[#00F2FE] shadow-[0_0_4px_#00F2FE]'
                        : 'bg-slate-800/40'
                    }`}
                  />
                );
              })}
            </div>

            <span className="text-[8px] font-mono text-slate-400 mt-1 tracking-tighter">
              {col.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2 border-t border-[#2A363F] flex items-center justify-between text-[9px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-cyan-950 text-[#00F2FE] border border-cyan-800/60 rounded">
            SYS 0451
          </span>
          <span>CALIBRATED // 99.4% OPT</span>
        </div>
        <div className="text-[#00F2FE] font-bold">25 / 100 PACING</div>
      </div>
    </div>
  );
};

