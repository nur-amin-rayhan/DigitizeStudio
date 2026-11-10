'use client';

import React from 'react';
import { HudCard } from '@digitize/ui';

export default function DashboardAnalyticsPage() {
  const channels = [
    { name: 'Google Ads (Search & Shopping)', share: 38, roas: '6.36x', conv: '2,480', lift: '+24%' },
    { name: 'Meta Ads (Direct-Response)', share: 32, roas: '6.28x', conv: '3,620', lift: '+18%' },
    { name: 'TikTok Ads (Viral Performance)', share: 15, roas: '5.34x', conv: '1,890', lift: '+42%' },
    { name: 'LinkedIn Enterprise ABM', share: 10, roas: '5.79x', conv: '540', lift: '+12%' },
    { name: 'Organic SEO Matrix', share: 5, roas: '6.82x', conv: '1,420', lift: '+85%' },
  ];

  const funnelStages = [
    { stage: '1. IMPRESSIONS', volume: '5,265,000', dropoff: '4.5% CTR', rate: '100%' },
    { stage: '2. QUALIFIED SESSIONS', volume: '237,300', dropoff: '18.2% Engagement', rate: '4.5%' },
    { stage: '3. INTAKE INITIATED', volume: '24,120', dropoff: '41.2% Completion', rate: '0.46%' },
    { stage: '4. HIGH-TICKET CONVERSIONS', volume: '9,950', dropoff: 'Final Goal', rate: '0.19%' },
  ];

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            GROWTH NODE // MULTI-CHANNEL ATTRIBUTION
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            FUNNEL TELEMETRY & ATTRIBUTION MATRIX
          </h1>
        </div>

        <div className="text-xs text-slate-400">
          CONFIDENCE: <span className="text-[#00F2FE] font-bold">99.8% (BAYESIAN MODEL)</span>
        </div>
      </div>

      <HudCard
        code="FUNNEL /// 01"
        title="END-TO-END CONVERSION FLOW TELEMETRY"
        subtitle="Tracking micro-conversion velocity from ad auction to closed sale"
        statusBadge="OPTIMAL"
        statusColor="cyan"
      >
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-2">
          {funnelStages.map((st, idx) => (
            <div key={idx} className="p-4 bg-[#080C10] border border-[#2A363F] rounded-lg relative overflow-hidden">
              <div className="text-[10px] text-[#00F2FE] font-bold uppercase mb-1">{st.stage}</div>
              <div className="text-xl font-black text-white">{st.volume}</div>
              <div className="text-[10px] text-emerald-400 mt-1">{st.dropoff}</div>
              <div className="mt-3 pt-2 border-t border-[#2A363F] text-[10px] text-slate-500 flex justify-between">
                <span>STAGE REACH:</span>
                <span className="text-[#00F2FE] font-bold">{st.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </HudCard>

      <HudCard
        code="CHANNELS /// 02"
        title="TRAFFIC & REVENUE SHARE BY AD NETWORK"
        subtitle="Cross-channel spend efficiency comparisons"
        statusBadge="ACTIVE"
        statusColor="cyan"
      >
        <div className="space-y-4 py-2">
          {channels.map((ch, idx) => (
            <div key={idx} className="space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">{ch.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-[#00F2FE] font-bold">{ch.roas} ROAS</span>
                  <span className="text-slate-400">{ch.conv} conv</span>
                  <span className="text-emerald-400">{ch.lift}</span>
                </div>
              </div>
              <div className="w-full h-2 bg-[#080C10] rounded-full overflow-hidden border border-[#2A363F]">
                <div
                  className="h-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] rounded-full"
                  style={{ width: `${ch.share}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </HudCard>
    </div>
  );
}

