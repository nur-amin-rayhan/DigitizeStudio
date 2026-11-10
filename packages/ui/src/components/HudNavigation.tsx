'use client';

import React from 'react';
import { Layers, ShieldCheck, Activity, Globe, MessageSquare, Terminal } from 'lucide-react';

interface HudNavigationProps {
  currentApp: 'frontend' | 'cms' | 'dashboard' | 'whatsapp-crm';
  className?: string;
}

export const HudNavigation: React.FC<HudNavigationProps> = ({ currentApp, className = '' }) => {
  const links = [
    {
      id: 'frontend',
      label: 'PORTFOLIO /// WEB',
      href: currentApp === 'frontend' ? '/' : 'http://localhost:3100',
      port: ':3100',
      icon: <Globe className="w-3.5 h-3.5" />
    },
    {
      id: 'cms',
      label: 'CMS STUDIO',
      href: currentApp === 'cms' ? '/' : 'http://localhost:3101',
      port: ':3101',
      icon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: 'dashboard',
      label: 'GROWTH DASHBOARD',
      href: currentApp === 'dashboard' ? '/' : 'http://localhost:3102',
      port: ':3102',
      icon: <Activity className="w-3.5 h-3.5" />
    },
    {
      id: 'whatsapp-crm',
      label: 'WHATSAPP CRM',
      href: currentApp === 'whatsapp-crm' ? '/' : 'http://localhost:3103',
      port: ':3103',
      icon: <MessageSquare className="w-3.5 h-3.5" />
    }
  ];

  return (
    <header className={`sticky top-0 z-50 w-full bg-[#080C10]/95 backdrop-blur-md border-b border-[#2A363F] shadow-[0_4px_20px_rgba(0,0,0,0.6)] ${className}`}>
      {/* Top Telemetry Ticker */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#0D1117] border-b border-[#2A363F] text-[10px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#00F2FE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-ping" />
            NODE STATUS: OPTIMAL
          </span>
          <span className="text-[#2A363F]">|</span>
          <span className="text-slate-300">CORE R-ON: OP:YES</span>
          <span className="text-[#2A363F]">|</span>
          <span className="text-[#4FACFE]">4 APPS MONOREPO ACTIVE</span>
          <span className="text-[#2A363F]">|</span>
          <span className="text-[#00F2FE]">LATENCY: 12ms</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">OFFICIAL DOMAIN:</span>
          <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-[#00F2FE]/40 text-[#00F2FE] font-bold shadow-[0_0_8px_rgba(0,242,254,0.3)]">
            digitizestudio.qd.je
          </span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> SSL VERIFIED
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded bg-[#0D1117] border border-[#00F2FE] flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.4)]">
            <Terminal className="w-5 h-5 text-[#00F2FE]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF5E3A] shadow-[0_0_6px_#FF5E3A]" />
          </div>
          <div>
            <a href="/" className="flex items-baseline gap-1.5">
              <span className="font-mono font-black text-lg sm:text-xl tracking-wider text-white">
                DIGITIZE<span className="text-[#00F2FE]">STUDIO</span>
              </span>
            </a>
            <div className="text-[9px] font-mono text-[#00F2FE]/80 tracking-widest uppercase">
              Algorithmic Growth Telemetry
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive = currentApp === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#00F2FE]/15 border-[#00F2FE] text-[#00F2FE] shadow-[0_0_12px_rgba(0,242,254,0.4)] font-bold'
                    : 'bg-[#0D1117] border-[#2A363F] text-slate-400 hover:text-[#00F2FE] hover:border-[#00F2FE]/50'
                }`}
              >
                {link.icon}
                <span className="hidden md:inline">{link.label}</span>
                <span className="text-[10px] text-[#00F2FE]/70 font-normal">{link.port}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
