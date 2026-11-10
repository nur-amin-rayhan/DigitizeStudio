'use client';

import React, { useState, useEffect } from 'react';
import { HudCard, CyberButton } from '@digitize/ui';
import { DataStore, Campaign } from '@digitize/shared';

export default function DashboardCampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    setCampaigns(DataStore.getCampaigns());
    const handleStorage = () => setCampaigns(DataStore.getCampaigns());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleToggle = (id: string, current: Campaign['status']) => {
    const next = current === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
    const updated = DataStore.updateCampaignStatus(id, next);
    setCampaigns(updated);
  };

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            GROWTH NODE // ENGINE MATRIX
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            CAMPAIGN PACING & BID CONTROLLERS
          </h1>
        </div>

        <div className="text-xs text-slate-400">
          ACTIVE ENGINES: <span className="text-emerald-400 font-bold">{campaigns.filter(c => c.status === 'ACTIVE').length} / {campaigns.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map(camp => (
          <HudCard
            key={camp.id}
            code={camp.coreEngine}
            title={camp.name}
            subtitle={`Channel: ${camp.channel} | Status: ${camp.status}`}
            statusBadge={`${camp.health}% HEALTH`}
            statusColor={camp.status === 'ACTIVE' ? 'cyan' : 'amber'}
            cornerCut="top-right"
          >
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                  <div className="text-[10px] text-slate-500">BLENDED ROAS</div>
                  <div className="text-base font-bold text-[#00F2FE]">{camp.roas.toFixed(2)}x</div>
                </div>
                <div className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                  <div className="text-[10px] text-slate-500">SPENT</div>
                  <div className="text-base font-bold text-white">${camp.spent.toLocaleString()}</div>
                </div>
                <div className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                  <div className="text-[10px] text-slate-500">CONVERSIONS</div>
                  <div className="text-base font-bold text-emerald-400">{camp.conversions}</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Monthly Pacing</span>
                  <span>{Math.round((camp.spent / camp.budget) * 100)}% of ${camp.budget.toLocaleString()}</span>
                </div>
                <div className="w-full h-2 bg-[#080C10] rounded-full overflow-hidden border border-[#2A363F]">
                  <div
                    className="h-full bg-[#00F2FE] rounded-full shadow-[0_0_8px_#00F2FE]"
                    style={{ width: `${Math.min(100, (camp.spent / camp.budget) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#2A363F]">
                <span className="text-[10px] text-slate-400">CPA: ${camp.cpa.toFixed(2)}</span>
                <CyberButton
                  variant={camp.status === 'ACTIVE' ? 'secondary' : 'primary'}
                  size="sm"
                  onClick={() => handleToggle(camp.id, camp.status)}
                >
                  {camp.status === 'ACTIVE' ? 'PAUSE ENGINE' : 'RESUME PACING'}
                </CyberButton>
              </div>
            </div>
          </HudCard>
        ))}
      </div>
    </div>
  );
}
