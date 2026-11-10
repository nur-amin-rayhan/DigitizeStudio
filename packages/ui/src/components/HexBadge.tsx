'use client';

import React from 'react';
import { Shield, Zap, Target, Cpu, Activity, Radio, BarChart3 } from 'lucide-react';

interface HexBadgeProps {
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
  size?: number;
  className?: string;
}

export const HexBadge: React.FC<HexBadgeProps> = ({
  label,
  icon,
  active = true,
  size = 46,
  className = ''
}) => {
  return (
    <div className={`inline-flex flex-col items-center gap-1.5 select-none ${className}`}>
      <div
        className={`relative flex items-center justify-center transition-all duration-300 ${
          active
            ? 'text-[#00F2FE] drop-shadow-[0_0_10px_rgba(0,242,254,0.7)]'
            : 'text-slate-600'
        }`}
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="absolute inset-0"
        >
          <polygon
            points="50,4 92,26 92,74 50,96 8,74 8,26"
            fill={active ? 'rgba(0, 242, 254, 0.12)' : 'rgba(13, 17, 23, 0.4)'}
            stroke={active ? '#00F2FE' : '#2A363F'}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          <polygon
            points="50,14 82,32 82,68 50,86 18,68 18,32"
            fill="none"
            stroke={active ? '#00F2FE' : '#1e293b'}
            strokeWidth="1"
            strokeDasharray="3 3"
            strokeOpacity="0.6"
          />
        </svg>

        <div className="relative z-10 scale-90">{icon}</div>
      </div>

      {label && (
        <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase">
          {label}
        </span>
      )}
    </div>
  );
};

export const HexIconRow: React.FC<{ activeIndex?: number; className?: string }> = ({
  activeIndex = 2,
  className = ''
}) => {
  const items = [
    { id: '1', label: 'GEO', icon: <Target className="w-4 h-4" /> },
    { id: '2', label: 'ATTRIB', icon: <Shield className="w-4 h-4" /> },
    { id: '3', label: 'ALGO', icon: <Cpu className="w-4 h-4" /> },
    { id: '4', label: 'PULSE', icon: <Activity className="w-4 h-4" /> },
    { id: '5', label: 'COMMS', icon: <Radio className="w-4 h-4" /> },
    { id: '6', label: 'PACING', icon: <Zap className="w-4 h-4" /> },
    { id: '7', label: 'ROAS', icon: <BarChart3 className="w-4 h-4" /> }
  ];

  return (
    <div className={`flex items-center justify-center gap-3 sm:gap-4 p-3 bg-[#080C10] border border-[#2A363F] rounded-lg ${className}`}>
      {items.map((item, idx) => (
        <HexBadge
          key={item.id}
          label={item.label}
          icon={item.icon}
          active={idx <= activeIndex}
          size={44}
        />
      ))}
    </div>
  );
};
