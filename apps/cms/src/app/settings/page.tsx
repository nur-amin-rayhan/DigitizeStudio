'use client';

import React, { useState } from 'react';
import { HudCard, CyberButton } from '@digitize/ui';
import { Globe, ShieldCheck, CheckCircle2, Save } from 'lucide-react';

export default function CmsSettingsPage() {
  const [domain, setDomain] = useState('digitizestudio.qd.je');
  const [metaTitle, setMetaTitle] = useState('DigitizeStudio /// Precision Digital Marketing & Telemetry');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            CMS NODE // SYSTEM CONFIGURATION
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            SITE & DOMAIN SETTINGS
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>SSL ENCRYPTED</span>
        </div>
      </div>

      <HudCard
        code="DOMAIN /// 01"
        title="PRIMARY CANONICAL DOMAIN ROUTING"
        subtitle="Configured domain node for the digital marketing agency"
        statusBadge="VERIFIED"
        statusColor="green"
      >
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 mb-1">CANONICAL DOMAIN HOST</label>
            <div className="flex items-center gap-2">
              <span className="px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-slate-400">
                https://
              </span>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-white outline-none focus:border-[#00F2FE] font-bold text-[#00F2FE]"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-1">SEO TITLE TEMPLATE</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] rounded text-white outline-none focus:border-[#00F2FE]"
            />
          </div>

          <div className="p-3 bg-[#080C10] border border-[#2A363F] rounded space-y-2">
            <div className="text-[#00F2FE] font-bold">PIXEL & ATTRIBUTION STATUS</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Tag Manager (GTM)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Meta Conversions API (CAPI)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>TikTok Events Pixel</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            {saved && (
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> SETTINGS PERSISTED
              </span>
            )}
            <div className="ml-auto">
              <CyberButton type="submit" variant="primary" size="md" icon={<Save className="w-4 h-4" />}>
                SAVE SETTINGS
              </CyberButton>
            </div>
          </div>
        </form>
      </HudCard>
    </div>
  );
}
