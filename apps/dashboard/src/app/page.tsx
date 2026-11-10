'use client';

import React, { useState, useEffect } from 'react';
import {
  HudCard,
  CyberButton,
  CircularGauge,
  TelemetryBar,
  HexIconRow
} from '@digitize/ui';
import {
  DataStore,
  Campaign,
  MarketingTelemetry,
  INITIAL_TELEMETRY
} from '@digitize/shared';
import {
  Activity,
  TrendingUp,
  DollarSign,
  Zap,
  Target,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Radio,
  Flame
} from 'lucide-react';

export default function DashboardOverviewPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [telemetry, setTelemetry] = useState<MarketingTelemetry>(INITIAL_TELEMETRY);
  const [activeEngineIndex, setActiveEngineIndex] = useState(0);

  useEffect(() => {
    setCampaigns(DataStore.getCampaigns());
    setTelemetry(DataStore.getTelemetry());

    const interval = setInterval(() => {
      setActiveEngineIndex((prev) => (prev + 1) % 8);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const totalSpent = campaigns.reduce((acc, c) => acc + c.spent, 0);
  const totalRevenue = campaigns.reduce((acc, c) => acc + c.revenue, 0);
  const totalConversions = campaigns.reduce((acc, c) => acc + c.conversions, 0);
  const blendedRoas = totalSpent > 0 ? (totalRevenue / totalSpent).toFixed(2) : '6.11';

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
            <span>GROWTH COMMAND NODE /// REAL-TIME ATTRIBUTION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            CAMPAIGN TELEMETRY & ROAS RADAR
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded bg-[#0D1117] border border-[#2A363F] text-xs text-slate-300">
            AUTO-SYNC: 14ms
          </span>
          <a href="http://localhost:3000">
            <CyberButton variant="secondary" size="sm">
              VIEW LIVE SITE
            </CyberButton>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <HudCard code="SPEND /// 01" title="TOTAL AD INVESTMENT" statusBadge="ON PACING" statusColor="cyan">
          <div className="text-2xl sm:text-3xl font-black text-white">
            ${totalSpent.toLocaleString()}
          </div>
          <div className="text-[11px] text-[#00F2FE] mt-1 flex items-center justify-between">
            <span>Budget: ${campaigns.reduce((a, c) => a + c.budget, 0).toLocaleString()}</span>
            <span className="text-slate-400">92% Utilized</span>
          </div>
        </HudCard>

        <HudCard code="ROAS /// 02" title="BLENDED ROAS MULTIPLIER" statusBadge="OUTPERFORMING" statusColor="cyan" glow={true}>
          <div className="text-2xl sm:text-3xl font-black text-[#00F2FE] drop-shadow-[0_0_12px_rgba(0,242,254,0.4)]">
            {blendedRoas}x
          </div>
          <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+184% vs Industry Average</span>
          </div>
        </HudCard>

        <HudCard code="REV /// 03" title="CLIENT REVENUE GENERATED" statusBadge="VERIFIED" statusColor="green">
          <div className="text-2xl sm:text-3xl font-black text-white">
            ${totalRevenue.toLocaleString()}
          </div>
          <div className="text-[11px] text-emerald-400 mt-1">
            +${(totalRevenue - totalSpent).toLocaleString()} Net Lift
          </div>
        </HudCard>

        <HudCard code="CONV /// 04" title="TOTAL ATTRIBUTED CONVERSIONS" statusBadge="TRACKED" statusColor="cyan">
          <div className="text-2xl sm:text-3xl font-black text-[#FF5E3A]">
            {totalConversions.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Avg CPA: ${(totalSpent / (totalConversions || 1)).toFixed(2)}
          </div>
        </HudCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <HudCard
            code="CORE 0451"
            title="ALGORITHMIC CORE RETICLE & TELEMETRY"
            subtitle="Autonomous bidding and creative attribution clusters"
            statusBadge="CORE A-ON"
            statusColor="cyan"
            cornerCut="top-right"
            glow={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2">
              <div className="md:col-span-7 flex justify-center">
                <CircularGauge
                  value={`${blendedRoas}x`}
                  label="HOMESTEAD MATRIX"
                  sublabel="CORE RETICLE ACTIVE"
                  size={290}
                  highlightNodes={[activeEngineIndex, (activeEngineIndex + 3) % 16, (activeEngineIndex + 7) % 16]}
                />
              </div>

              <div className="md:col-span-5 space-y-2 text-xs">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest border-b border-[#2A363F] pb-1">
                  CORE NODES TELEMETRY
                </div>
                {telemetry.nodes.slice(0, 5).map((node, idx) => (
                  <div
                    key={node.id}
                    className={`flex items-center justify-between p-2 rounded border transition ${
                      idx === activeEngineIndex % 5
                        ? 'bg-cyan-950/60 border-[#00F2FE] text-[#00F2FE] font-bold'
                        : 'bg-[#080C10] border-[#2A363F] text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${idx === activeEngineIndex % 5 ? 'bg-[#00F2FE] animate-ping' : 'bg-slate-600'}`} />
                      <span>{node.name}</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">OP: YES</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#2A363F]">
              <HexIconRow activeIndex={4} />
            </div>
          </HudCard>
        </div>

        <div className="lg:col-span-5">
          <HudCard
            code="STREAM /// 01"
            title="REAL-TIME CONVERSION EVENT FEED"
            subtitle="Live attribution pings from digitizestudio.qd.je network"
            statusBadge="IN-SYNC"
            statusColor="cyan"
          >
            <div className="space-y-3 py-1">
              {telemetry.liveEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-3 bg-[#080C10] border border-[#2A363F] rounded-lg hover:border-[#00F2FE]/40 transition flex items-start justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500">{evt.time}</span>
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                        evt.type === 'CONVERSION'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : evt.type === 'LEAD'
                          ? 'bg-cyan-950 text-[#00F2FE] border border-cyan-800'
                          : 'bg-rose-950 text-[#FF5E3A] border border-rose-800'
                      }`}>
                        {evt.type}
                      </span>
                    </div>
                    <p className="text-slate-200 text-[11px] leading-relaxed">
                      {evt.detail}
                    </p>
                  </div>

                  {evt.value && (
                    <span className="text-xs font-bold text-[#00F2FE] shrink-0">
                      {evt.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[#2A363F] text-[10px] text-slate-400 flex items-center justify-between">
              <span>LATENCY: 12ms</span>
              <span className="text-[#00F2FE]">ENCRYPTION: AES-256 GCM</span>
            </div>
          </HudCard>
        </div>
      </div>

      <section>
        <TelemetryBar title="HOMESTEAD FREQUENCY COMMS /// CHANNEL PACING TELEMETRY" />
      </section>

      <section>
        <HudCard
          code="CHANNELS /// 05"
          title="ACTIVE AD NETWORKS & ALGORITHMIC ALLOCATIONS"
          subtitle="Real-time spend vs revenue attribution by advertising channel"
          statusBadge="ALL OPTIMIZING"
          statusColor="cyan"
        >
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#2A363F] text-slate-400 text-[10px] uppercase">
                  <th className="py-2.5 px-3">Engine & Network</th>
                  <th className="py-2.5 px-3">Allocated / Spent</th>
                  <th className="py-2.5 px-3">Clicks / Impressions</th>
                  <th className="py-2.5 px-3">ROAS</th>
                  <th className="py-2.5 px-3">Conversions</th>
                  <th className="py-2.5 px-3">Health Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A363F]/60">
                {campaigns.map((camp) => (
                  <tr key={camp.id} className="hover:bg-[#080C10]/50 transition">
                    <td className="py-3 px-3">
                      <div className="font-bold text-white flex items-center gap-2">
                        <span>{camp.name}</span>
                      </div>
                      <div className="text-[10px] text-[#00F2FE]">{camp.channel} ({camp.coreEngine})</div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="font-semibold text-white">
                        ${camp.spent.toLocaleString()} / ${camp.budget.toLocaleString()}
                      </div>
                      <div className="w-24 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-[#00F2FE] rounded-full"
                          style={{ width: `${Math.min(100, (camp.spent / camp.budget) * 100)}%` }}
                        />
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="text-white">{camp.clicks.toLocaleString()} clicks</div>
                      <div className="text-[10px] text-slate-400">{camp.impressions.toLocaleString()} imp</div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="text-base font-bold text-[#00F2FE]">
                        {camp.roas.toFixed(2)}x
                      </div>
                    </td>

                    <td className="py-3 px-3">
                      <div className="text-white font-semibold">
                        {camp.conversions.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-400">CPA: ${camp.cpa.toFixed(2)}</div>
                    </td>

                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        camp.status === 'ACTIVE'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-amber-950 text-amber-400 border border-amber-800'
                      }`}>
                        {camp.status} ({camp.health}%)
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </HudCard>
      </section>

    </div>
  );
}

