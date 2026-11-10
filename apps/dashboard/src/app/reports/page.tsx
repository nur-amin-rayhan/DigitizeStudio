'use client';

import React from 'react';
import { HudCard, CyberButton } from '@digitize/ui';
import { FileText, Download, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';

export default function DashboardReportsPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            GROWTH NODE // EXECUTIVE AUDITS
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            PERFORMANCE & ROAS AUDIT REPORT
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <CyberButton variant="secondary" size="sm" onClick={handlePrint} icon={<Printer className="w-3.5 h-3.5" />}>
            PRINT AUDIT
          </CyberButton>
        </div>
      </div>

      <HudCard
        code="AUDIT /// 2026-Q4"
        title="DIGITIZESTUDIO EXECUTIVE MARKETING BRIEF"
        subtitle="Consolidated multi-channel telemetry and attribution report"
        statusBadge="VERIFIED"
        statusColor="green"
        glow={true}
      >
        <div className="space-y-6 py-2 text-xs leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#080C10] rounded-lg border border-[#2A363F]">
            <div>
              <span className="text-slate-500 text-[10px]">CLIENT BRAND</span>
              <div className="text-base font-bold text-white">DigitizeStudio Network</div>
              <div className="text-[#00F2FE] text-[11px]">digitizestudio.qd.je</div>
            </div>
            <div>
              <span className="text-slate-500 text-[10px]">AUDIT PERIOD</span>
              <div className="text-base font-bold text-white">Current Trajectory</div>
              <div className="text-emerald-400 text-[11px]">All 8 Engines Active</div>
            </div>
            <div>
              <span className="text-slate-500 text-[10px]">NET REVENUE DELIVERED</span>
              <div className="text-xl font-black text-[#00F2FE]">$813,540.00</div>
              <div className="text-emerald-400 text-[11px] font-bold">6.11x Blended ROAS</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase text-[#00F2FE]">
              1. EXECUTIVE HIGHLIGHTS
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Search Intent Optimization:</strong> Google Ads core engine maintained a 6.36x ROAS with zero budget waste, achieving top-of-page rate of 91.4%.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Direct-Response Scaling:</strong> Meta and TikTok campaigns generated over 5,500 qualified purchases with a 42% reduction in blended CAC.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Semantic SEO Trajectory:</strong> Programmatic cluster matrices unlocked top 3 positions for 48 high-intent commercial keywords.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-3 border-t border-[#2A363F]">
            <h3 className="text-sm font-bold text-white uppercase text-[#00F2FE]">
              2. STRATEGIC RECOMMENDATIONS FOR NEXT CYCLE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-[#080C10] rounded border border-[#2A363F]">
                <span className="text-[#00F2FE] font-bold">Pacing Increment:</span>
                <p className="text-slate-400 text-[11px] mt-1">
                  Scale monthly ad spend by +25% on Meta dynamic catalog creatives where marginal ROAS remains above 5.8x.
                </p>
              </div>
              <div className="p-3 bg-[#080C10] rounded border border-[#2A363F]">
                <span className="text-[#00F2FE] font-bold">CRO Refinement:</span>
                <p className="text-slate-400 text-[11px] mt-1">
                  Implement 1-click accelerated checkout on mobile landing pages to capture additional 18% abandoned funnel intent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HudCard>
    </div>
  );
}

