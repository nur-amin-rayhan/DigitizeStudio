'use client';

import React from 'react';

interface HudCardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  code?: string;
  statusBadge?: string;
  statusColor?: 'cyan' | 'red' | 'green' | 'amber';
  cornerCut?: 'top-right' | 'both' | 'none';
  className?: string;
  glow?: boolean;
}

export const HudCard: React.FC<HudCardProps> = ({
  children,
  title,
  subtitle,
  code,
  statusBadge,
  statusColor = 'cyan',
  cornerCut = 'top-right',
  className = '',
  glow = false
}) => {
  const statusColors = {
    cyan: 'text-[#00F2FE] border-[#00F2FE]/50 bg-cyan-950/40 shadow-[0_0_8px_rgba(0,242,254,0.4)]',
    red: 'text-[#FF5E3A] border-[#FF5E3A]/50 bg-rose-950/40 shadow-[0_0_8px_rgba(255,94,58,0.4)]',
    green: 'text-emerald-400 border-emerald-500/50 bg-emerald-950/40 shadow-[0_0_8px_rgba(16,185,129,0.4)]',
    amber: 'text-amber-400 border-amber-500/50 bg-amber-950/40 shadow-[0_0_8px_rgba(245,158,11,0.4)]'
  };

  return (
    <div
      className={`relative bg-[#0D1117] backdrop-blur-md border border-[#2A363F] p-5 rounded-lg transition-all duration-300 ${
        glow ? 'shadow-[0_0_25px_rgba(0,242,254,0.15)] border-[#00F2FE]/60' : 'hover:border-[#00F2FE]/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)]'
      } ${className}`}
      style={{
        clipPath:
          cornerCut === 'top-right'
            ? 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)'
            : cornerCut === 'both'
            ? 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)'
            : undefined
      }}
    >
      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00F2FE] pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00F2FE] pointer-events-none" />

      {(title || code || statusBadge) && (
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#2A363F]">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              {code && (
                <span className="text-[10px] font-mono text-[#00F2FE] bg-cyan-950/60 px-1.5 py-0.5 rounded border border-[#00F2FE]/40">
                  {code}
                </span>
              )}
              {title && (
                <h3 className="text-sm font-mono font-bold text-white tracking-wider uppercase">
                  {title}
                </h3>
              )}
            </div>
            {subtitle && (
              <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                {subtitle}
              </span>
            )}
          </div>

          {statusBadge && (
            <div className={`px-2 py-0.5 text-[10px] font-mono font-semibold rounded border uppercase ${statusColors[statusColor]}`}>
              {statusBadge}
            </div>
          )}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

