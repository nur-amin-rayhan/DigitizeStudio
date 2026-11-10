'use client';

import React from 'react';

interface CircularGaugeProps {
  value?: number | string;
  label?: string;
  sublabel?: string;
  size?: number;
  nodeCount?: number;
  highlightNodes?: number[];
  className?: string;
}

export const CircularGauge: React.FC<CircularGaugeProps> = ({
  value = '003%',
  label = 'CORE ENGINE',
  sublabel = 'ACTIVE MATRIX',
  size = 320,
  nodeCount = 16,
  highlightNodes = [1, 2, 5, 8, 11, 14],
  className = ''
}) => {
  const center = size / 2;
  const radius = size * 0.38;
  const innerRadius = size * 0.22;
  const outerRingRadius = size * 0.46;

  const nodes = Array.from({ length: nodeCount }).map((_, i) => {
    const angle = (i * 2 * Math.PI) / nodeCount - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    const outerX = center + outerRingRadius * Math.cos(angle);
    const outerY = center + outerRingRadius * Math.sin(angle);
    const isHighlighted = highlightNodes.includes(i);

    return {
      id: i,
      x,
      y,
      outerX,
      outerY,
      isHighlighted
    };
  });

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#00F2FE" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#00F2FE" stopOpacity="0" />
          </radialGradient>
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Center Glow */}
        <circle cx={center} cy={center} r={innerRadius * 1.5} fill="url(#centerGlow)" />

        {/* Outer Tech Ring with Dashes */}
        <circle
          cx={center}
          cy={center}
          r={outerRingRadius}
          fill="none"
          stroke="#00F2FE"
          strokeWidth="1"
          strokeDasharray="4 8"
          strokeOpacity="0.35"
        />

        {/* Main Orbit Ring */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#2A363F"
          strokeWidth="1.5"
        />

        {/* Inner Hub Ring */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius}
          fill="#080C10"
          stroke="#00F2FE"
          strokeWidth="2"
          filter="url(#cyanGlow)"
          strokeOpacity="0.8"
        />
        <circle
          cx={center}
          cy={center}
          r={innerRadius - 6}
          fill="none"
          stroke="#4FACFE"
          strokeWidth="1"
          strokeDasharray="2 4"
          strokeOpacity="0.5"
          className="animate-spin-slow origin-center"
        />

        {/* Orbital Radial Lines to Outer Nodes */}
        {nodes.map((node) => (
          <line
            key={`line-${node.id}`}
            x1={node.x}
            y1={node.y}
            x2={node.outerX}
            y2={node.outerY}
            stroke={node.isHighlighted ? '#00F2FE' : '#2A363F'}
            strokeWidth={node.isHighlighted ? '1.5' : '1'}
            strokeOpacity={node.isHighlighted ? '0.7' : '0.3'}
          />
        ))}

        {/* Orbital Circular Nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`} className="transition-all duration-300">
            <circle
              cx={node.x}
              cy={node.y}
              r={size * 0.038}
              fill="#080C10"
              stroke={node.isHighlighted ? '#00F2FE' : '#2A363F'}
              strokeWidth={node.isHighlighted ? '1.5' : '1'}
              filter={node.isHighlighted ? 'url(#cyanGlow)' : undefined}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={size * 0.016}
              fill={node.isHighlighted ? '#00F2FE' : '#1e293b'}
            />
            <path
              d={`M ${node.x - 7} ${node.y} A 7 7 0 0 1 ${node.x + 7} ${node.y}`}
              fill="none"
              stroke={node.isHighlighted ? '#FF5E3A' : '#00F2FE'}
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
          </g>
        ))}

        {/* Center Digital Display Text */}
        <text
          x={center}
          y={center + 2}
          textAnchor="middle"
          dominantBaseline="central"
          className="font-mono text-[#00F2FE] font-bold tracking-widest text-xl fill-[#00F2FE]"
          style={{ filter: 'drop-shadow(0 0 8px rgba(0,242,254,0.7))' }}
        >
          {value}
        </text>

        <text
          x={center}
          y={center + 22}
          textAnchor="middle"
          className="font-mono text-[8px] fill-slate-400 tracking-wider"
        >
          {label}
        </text>
      </svg>

      <div className="mt-1 flex items-center gap-2 px-2.5 py-0.5 border border-[#00F2FE]/30 bg-cyan-950/20 rounded text-[10px] font-mono text-[#00F2FE]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-pulse shadow-[0_0_8px_#00F2FE]" />
        <span>{sublabel}</span>
      </div>
    </div>
  );
};
