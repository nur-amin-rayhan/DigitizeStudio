'use client';

import React, { useState, useEffect } from 'react';
import { HudCard, CyberButton } from '@digitize/ui';
import { DataStore, Lead } from '@digitize/shared';
import { Download, Trash2, Mail, Globe, Search } from 'lucide-react';

export default function CmsLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  useEffect(() => {
    setLeads(DataStore.getLeads());
    const handleStorage = () => setLeads(DataStore.getLeads());
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleStatusChange = (id: string, newStatus: Lead['status']) => {
    const updated = DataStore.updateLeadStatus(id, newStatus);
    setLeads(updated);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this record?')) {
      const updated = DataStore.deleteLead(id);
      setLeads(updated);
    }
  };

  const filtered = leads.filter(l => {
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'ALL' || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            CMS NODE // CLIENT PIPELINE
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            LEAD INTAKE REPOSITORY
          </h1>
        </div>

        <div className="text-xs text-slate-400">
          DOMAIN INGEST: <span className="text-[#00F2FE] font-bold">digitizestudio.qd.je</span>
        </div>
      </div>

      <HudCard
        code="PIPELINE /// 01"
        title="ALL INCOMING CONSULTATION REQUESTS"
        subtitle={`${filtered.length} leads matching telemetry criteria`}
        statusBadge="MONITORED"
        statusColor="cyan"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 mb-4 border-b border-[#2A363F]">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#080C10] border border-[#2A363F] rounded text-xs text-white outline-none focus:border-[#00F2FE]"
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            {['ALL', 'NEW', 'QUALIFIED', 'CONTACTED', 'CONVERTED'].map(st => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 rounded border ${
                  statusFilter === st ? 'bg-[#00F2FE]/20 border-[#00F2FE] text-[#00F2FE] font-bold' : 'bg-[#080C10] border-[#2A363F] text-slate-400'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map(lead => (
            <div key={lead.id} className="p-4 bg-[#080C10] border border-[#2A363F] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-base text-white">{lead.name}</span>
                  <span className="text-[#00F2FE] font-semibold">{lead.company}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[#0D1117] border border-[#2A363F] text-slate-300">
                    {lead.budget}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1 text-[#00F2FE]">
                    <Mail className="w-3 h-3" /> {lead.email}
                  </span>
                  {lead.website && (
                    <span className="flex items-center gap-1 text-slate-400">
                      <Globe className="w-3 h-3" /> {lead.website}
                    </span>
                  )}
                  <span>Recv: {new Date(lead.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="text-[11px] text-slate-300 pt-1">
                  <strong className="text-slate-400">Request:</strong> {lead.serviceNeeded} — "{lead.message}"
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <select
                  value={lead.status}
                  onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                  className="text-xs font-bold px-2.5 py-1.5 rounded border border-[#00F2FE]/40 bg-[#080C10] text-[#00F2FE] outline-none"
                >
                  <option value="NEW">NEW</option>
                  <option value="CONTACTED">CONTACTED</option>
                  <option value="QUALIFIED">QUALIFIED</option>
                  <option value="CONVERTED">CONVERTED</option>
                  <option value="ARCHIVED">ARCHIVED</option>
                </select>

                <button
                  onClick={() => handleDelete(lead.id)}
                  className="p-1.5 text-slate-500 hover:text-[#FF5E3A] rounded hover:bg-slate-800 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </HudCard>
    </div>
  );
}

