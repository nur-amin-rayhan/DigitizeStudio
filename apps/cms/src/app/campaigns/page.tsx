'use client';

import React, { useState, useEffect } from 'react';
import { HudCard, CyberButton } from '@digitize/ui';
import { DataStore, Campaign } from '@digitize/shared';
import { Plus, Play, Pause, DollarSign, Activity } from 'lucide-react';

export default function CmsCampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: '',
    channel: 'Google Ads' as Campaign['channel'],
    budget: 20000,
    spent: 0,
    impressions: 0,
    clicks: 0,
    conversions: 0,
    revenue: 0,
    roas: 5.0,
    cpa: 15.0,
    status: 'ACTIVE' as Campaign['status'],
    health: 95,
    coreEngine: 'CORE F-ON'
  });

  useEffect(() => {
    setCampaigns(DataStore.getCampaigns());
  }, []);

  const handleToggleStatus = (id: string, currentStatus: Campaign['status']) => {
    const nextStatus = currentStatus === 'ACTIVE' ? 'PAUSED' : 'ACTIVE';
    const updated = DataStore.updateCampaignStatus(id, nextStatus);
    setCampaigns(updated);
  };

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCampaign.name) return;

    DataStore.addCampaign(newCampaign);
    setCampaigns(DataStore.getCampaigns());
    setShowAddForm(false);
    setNewCampaign({
      name: '',
      channel: 'Google Ads',
      budget: 20000,
      spent: 0,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      revenue: 0,
      roas: 5.0,
      cpa: 15.0,
      status: 'ACTIVE',
      health: 95,
      coreEngine: 'CORE F-ON'
    });
  };

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            CMS NODE // CAMPAIGN MANAGER
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            MARKETING CAMPAIGN ENGINES
          </h1>
        </div>

        <CyberButton
          variant="primary"
          size="sm"
          onClick={() => setShowAddForm(!showAddForm)}
          icon={<Plus className="w-4 h-4" />}
        >
          {showAddForm ? 'CANCEL' : 'DEPLOY NEW CAMPAIGN'}
        </CyberButton>
      </div>

      {showAddForm && (
        <HudCard
          code="DEPLOY /// NEW"
          title="INITIALIZE NEW AD CAMPAIGN PACING"
          statusBadge="CONFIGURATION"
          statusColor="cyan"
          glow={true}
        >
          <form onSubmit={handleCreateCampaign} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-1">CAMPAIGN IDENTIFIER *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ZETA /// High-Intent Search Scale"
                  value={newCampaign.name}
                  onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-white outline-none focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">TARGET AD NETWORK</label>
                <select
                  value={newCampaign.channel}
                  onChange={(e) => setNewCampaign({ ...newCampaign, channel: e.target.value as Campaign['channel'] })}
                  className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-white outline-none focus:border-[#00F2FE]"
                >
                  <option value="Google Ads">Google Ads (Search & Shopping)</option>
                  <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
                  <option value="TikTok Ads">TikTok Ads (Viral Performance)</option>
                  <option value="LinkedIn">LinkedIn B2B ABM</option>
                  <option value="SEO Matrix">SEO Matrix Programmatic</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-300 mb-1">MONTHLY ALLOCATION ($)</label>
                <input
                  type="number"
                  min="1000"
                  step="500"
                  value={newCampaign.budget}
                  onChange={(e) => setNewCampaign({ ...newCampaign, budget: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-white outline-none focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">TARGET ROAS MULTIPLIER</label>
                <input
                  type="number"
                  step="0.1"
                  value={newCampaign.roas}
                  onChange={(e) => setNewCampaign({ ...newCampaign, roas: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-white outline-none focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">TARGET CPA ($)</label>
                <input
                  type="number"
                  step="0.5"
                  value={newCampaign.cpa}
                  onChange={(e) => setNewCampaign({ ...newCampaign, cpa: Number(e.target.value) })}
                  className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-white outline-none focus:border-[#00F2FE]"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <CyberButton type="button" variant="secondary" size="sm" onClick={() => setShowAddForm(false)}>
                DISCARD
              </CyberButton>
              <CyberButton type="submit" variant="primary" size="sm">
                INITIALIZE CAMPAIGN
              </CyberButton>
            </div>
          </form>
        </HudCard>
      )}

      <div className="space-y-4">
        {campaigns.map((camp) => (
          <HudCard
            key={camp.id}
            code={camp.coreEngine}
            title={camp.name}
            subtitle={`Channel: ${camp.channel} | Health Index: ${camp.health}%`}
            statusBadge={camp.status}
            statusColor={camp.status === 'ACTIVE' ? 'green' : 'amber'}
          >
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs pt-1">
              <div className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                <div className="text-[10px] text-slate-500">ALLOCATION / SPENT</div>
                <div className="text-sm font-bold text-white">
                  ${camp.spent.toLocaleString()} / ${camp.budget.toLocaleString()}
                </div>
              </div>

              <div className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                <div className="text-[10px] text-slate-500">BLENDED ROAS</div>
                <div className="text-sm font-bold text-[#00F2FE]">
                  {camp.roas.toFixed(2)}x
                </div>
              </div>

              <div className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                <div className="text-[10px] text-slate-500">CONVERSIONS</div>
                <div className="text-sm font-bold text-emerald-400">
                  {camp.conversions.toLocaleString()}
                </div>
              </div>

              <div className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                <div className="text-[10px] text-slate-500">AVG CPA</div>
                <div className="text-sm font-bold text-slate-200">
                  ${camp.cpa.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center justify-center p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                <CyberButton
                  variant={camp.status === 'ACTIVE' ? 'secondary' : 'primary'}
                  size="sm"
                  onClick={() => handleToggleStatus(camp.id, camp.status)}
                  icon={camp.status === 'ACTIVE' ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                >
                  {camp.status === 'ACTIVE' ? 'PAUSE' : 'ACTIVATE'}
                </CyberButton>
              </div>
            </div>
          </HudCard>
        ))}
      </div>
    </div>
  );
}
