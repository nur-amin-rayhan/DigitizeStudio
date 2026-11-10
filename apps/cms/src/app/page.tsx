'use client';

import React, { useState, useEffect } from 'react';
import { HudCard, CyberButton } from '@digitize/ui';
import { DataStore, Lead, Campaign, CaseStudy } from '@digitize/shared';
import {
  Users,
  Megaphone,
  Briefcase,
  Download,
  Trash2,
  CheckCircle,
  Clock,
  Search,
  ExternalLink,
  Plus
} from 'lucide-react';

export default function CmsOverviewPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('ALL');

  useEffect(() => {
    setLeads(DataStore.getLeads());
    setCampaigns(DataStore.getCampaigns());
    setCaseStudies(DataStore.getCaseStudies());

    const handleStorage = () => {
      setLeads(DataStore.getLeads());
      setCampaigns(DataStore.getCampaigns());
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleStatusChange = (id: string, newStatus: Lead['status']) => {
    const updated = DataStore.updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleDeleteLead = (id: string) => {
    if (confirm('Confirm deleting this lead telemetry record?')) {
      const updated = DataStore.deleteLead(id);
      setLeads(updated);
    }
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(leads, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `digitizestudio-leads-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'ALL' || l.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            CMS NODE // SYSTEM OVERVIEW
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            DIGITIZESTUDIO COMMAND
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <CyberButton variant="secondary" size="sm" onClick={handleExportJson} icon={<Download className="w-3.5 h-3.5" />}>
            EXPORT LEADS
          </CyberButton>
          <a href="http://localhost:3002">
            <CyberButton variant="primary" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
              VIEW DASHBOARD
            </CyberButton>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <HudCard code="METRIC 01" title="TOTAL LEADS" statusBadge={`${leads.length}`} statusColor="cyan">
          <div className="text-2xl font-black text-white">{leads.length}</div>
          <div className="text-[10px] text-emerald-400 mt-1">
            {leads.filter(l => l.status === 'NEW').length} Pending Review
          </div>
        </HudCard>

        <HudCard code="METRIC 02" title="ACTIVE CAMPAIGNS" statusBadge={`${campaigns.filter(c => c.status === 'ACTIVE').length}`} statusColor="green">
          <div className="text-2xl font-black text-[#00F2FE]">
            {campaigns.filter(c => c.status === 'ACTIVE').length} / {campaigns.length}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">Pacing across 5 channels</div>
        </HudCard>

        <HudCard code="METRIC 03" title="CASE STUDIES" statusBadge={`${caseStudies.length}`} statusColor="cyan">
          <div className="text-2xl font-black text-white">{caseStudies.length}</div>
          <div className="text-[10px] text-slate-400 mt-1">Live on Frontend</div>
        </HudCard>

        <HudCard code="METRIC 04" title="MANAGED SPEND" statusBadge="HEALTHY" statusColor="cyan">
          <div className="text-2xl font-black text-[#FF5E3A]">
            ${campaigns.reduce((acc, c) => acc + c.budget, 0).toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">Monthly Budget Allocation</div>
        </HudCard>
      </div>

      <HudCard
        code="CRM /// 01"
        title="INCOMING LEADS & CONSULTATION TELEMETRY"
        subtitle="Real-time captured client inquiries from digitizestudio.qd.je"
        statusBadge="LIVE INTAKE"
        statusColor="cyan"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 mb-4 border-b border-[#2A363F]">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, company, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#080C10] border border-[#2A363F] rounded text-xs text-white placeholder-slate-500 outline-none focus:border-[#00F2FE]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2.5 py-1 rounded border transition ${
                  filterStatus === st
                    ? 'bg-[#00F2FE]/20 border-[#00F2FE] text-[#00F2FE] font-bold'
                    : 'bg-[#080C10] border-[#2A363F] text-slate-400 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {filteredLeads.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-xs">
            No matching lead telemetry found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#2A363F] text-slate-400 text-[10px] uppercase tracking-wider">
                  <th className="py-2 px-3">Lead & Company</th>
                  <th className="py-2 px-3">Budget Tier</th>
                  <th className="py-2 px-3">Objective</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A363F]/60">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#080C10]/50 transition">
                    <td className="py-3 px-3">
                      <div className="font-bold text-white flex items-center gap-2">
                        <span>{lead.name}</span>
                        {lead.status === 'NEW' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-ping" />
                        )}
                      </div>
                      <div className="text-[11px] text-[#00F2FE]">{lead.company}</div>
                      <div className="text-[10px] text-slate-400">{lead.email}</div>
                      {lead.website && (
                        <a
                          href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[9px] text-slate-500 hover:text-[#00F2FE] underline"
                        >
                          {lead.website}
                        </a>
                      )}
                    </td>

                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded bg-[#080C10] border border-[#2A363F] text-slate-200 text-[11px]">
                        {lead.budget}
                      </span>
                    </td>

                    <td className="py-3 px-3 max-w-xs">
                      <div className="font-semibold text-slate-200 truncate">
                        {lead.serviceNeeded}
                      </div>
                      {lead.message && (
                        <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5">
                          "{lead.message}"
                        </p>
                      )}
                    </td>

                    <td className="py-3 px-3">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        className={`text-[10px] font-bold px-2 py-1 rounded border outline-none bg-[#080C10] ${
                          lead.status === 'NEW'
                            ? 'text-[#00F2FE] border-[#00F2FE]/50'
                            : lead.status === 'QUALIFIED'
                            ? 'text-emerald-400 border-emerald-500/50'
                            : lead.status === 'CONTACTED'
                            ? 'text-amber-400 border-amber-500/50'
                            : 'text-slate-400 border-[#2A363F]'
                        }`}
                      >
                        <option value="NEW">NEW</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="QUALIFIED">QUALIFIED</option>
                        <option value="CONVERTED">CONVERTED</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                      </select>
                    </td>

                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-1 text-slate-500 hover:text-[#FF5E3A] transition"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </HudCard>
    </div>
  );
}

