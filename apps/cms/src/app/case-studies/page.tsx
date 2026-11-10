'use client';

import React, { useState, useEffect } from 'react';
import { HudCard } from '@digitize/ui';
import { DataStore, CaseStudy } from '@digitize/shared';

export default function CmsCaseStudiesPage() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    setStudies(DataStore.getCaseStudies());
  }, []);

  return (
    <div className="space-y-6 font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2A363F]">
        <div>
          <span className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
            CMS NODE // PORTFOLIO MANAGER
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            CLIENT SUCCESS TELEMETRY
          </h1>
        </div>

        <div className="text-xs text-slate-400">
          TOTAL PUBLISHED: <span className="text-[#00F2FE] font-bold">{studies.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {studies.map(study => (
          <HudCard
            key={study.id}
            code={study.date}
            title={study.client}
            subtitle={study.industry}
            statusBadge={`ROAS ${study.roas}`}
            statusColor="cyan"
          >
            <div className="space-y-3 text-xs">
              <h3 className="text-sm font-bold text-white">{study.title}</h3>
              <p className="text-slate-300 leading-relaxed">{study.summary}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {study.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 bg-[#080C10] rounded border border-[#2A363F]">
                    <div className="text-[10px] text-slate-400">{m.label}</div>
                    <div className="text-base font-bold text-[#00F2FE]">{m.value}</div>
                    <div className="text-[10px] text-emerald-400 font-bold">{m.change}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2">
                {study.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#080C10] border border-[#2A363F] text-[10px] text-slate-400">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </HudCard>
        ))}
      </div>
    </div>
  );
}
