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
  ServiceItem,
  CaseStudy
} from '@digitize/shared';
import {
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
  ShieldAlert,
  Flame,
  Award,
  DollarSign
} from 'lucide-react';

export default function HomePage() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const [monthlySpend, setMonthlySpend] = useState<number>(15000);
  const [targetRoas, setTargetRoas] = useState<number>(5.5);

  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '$10,000 - $25,000/mo',
    serviceNeeded: 'Algorithmic PPC & Performance Marketing',
    message: ''
  });
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setServices(DataStore.getServices());
    setCaseStudies(DataStore.getCaseStudies());
  }, []);

  const filteredStudies = activeCategory === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.industry.toLowerCase().includes(activeCategory.toLowerCase()));

  const projectedRevenue = Math.round(monthlySpend * targetRoas);
  const estimatedProfit = Math.round(projectedRevenue - monthlySpend);
  const estimatedConversions = Math.round(monthlySpend / 18.5);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newLead = DataStore.addLead(leadForm);
      setSubmittedLeadId(newLead.id);
      setIsSubmitting(false);
      setLeadForm({
        name: '',
        email: '',
        company: '',
        website: '',
        budget: '$10,000 - $25,000/mo',
        serviceNeeded: 'Algorithmic PPC & Performance Marketing',
        message: ''
      });
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-16">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-6 pb-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00F2FE]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-[#00F2FE]/40 text-[#00F2FE] font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping" />
              <span>DIGITIZESTUDIO.QD.JE /// PRECISION MARKETING ENGINE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-mono tracking-tight text-white leading-tight">
              PRECISION DIGITAL <span className="text-[#00F2FE] drop-shadow-[0_0_20px_rgba(0,242,254,0.6)]">GROWTH</span> THROUGH ALGORITHMIC TELEMETRY.
            </h1>

            <p className="text-slate-300 font-mono text-sm sm:text-base leading-relaxed">
              We engineer high-velocity PPC bidding algorithms, semantic SEO cluster matrices, and scientific CRO funnels designed to turn raw ad spend into predictable 8-figure revenue.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
              <div className="p-3 bg-[#0D1117] border border-[#2A363F] rounded">
                <div className="text-xs text-slate-400">AVG ROAS</div>
                <div className="text-lg sm:text-2xl font-bold text-[#00F2FE]">6.11x</div>
                <div className="text-[10px] text-emerald-400">+140% vs Ind.</div>
              </div>
              <div className="p-3 bg-[#0D1117] border border-[#2A363F] rounded">
                <div className="text-xs text-slate-400">TOTAL REVENUE</div>
                <div className="text-lg sm:text-2xl font-bold text-white">$14.8M+</div>
                <div className="text-[10px] text-[#00F2FE]">Client Scale</div>
              </div>
              <div className="p-3 bg-[#0D1117] border border-[#2A363F] rounded">
                <div className="text-xs text-slate-400">RETENTION</div>
                <div className="text-lg sm:text-2xl font-bold text-[#FF5E3A]">99.4%</div>
                <div className="text-[10px] text-slate-400">Verified</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#consultation">
                <CyberButton variant="primary" size="lg" icon={<Zap className="w-4 h-4" />}>
                  INITIALIZE CAMPAIGN
                </CyberButton>
              </a>
              <a href="#calculator">
                <CyberButton variant="secondary" size="lg" icon={<TrendingUp className="w-4 h-4" />}>
                  CALCULATE ROI LIFT
                </CyberButton>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <HudCard
              code="SYS 0451"
              title="HOMESTEAD /// CORE R-ON"
              statusBadge="OP: YES"
              statusColor="cyan"
              glow={true}
              className="w-full max-w-md flex flex-col items-center"
            >
              <div className="py-2">
                <CircularGauge
                  value="6.4x"
                  label="OPTIMAL ROAS"
                  sublabel="ALGO PACING: 99.4%"
                  size={280}
                  highlightNodes={[0, 1, 3, 6, 8, 10, 13, 15]}
                />
              </div>

              <div className="w-full mt-4 pt-3 border-t border-[#2A363F] grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="flex items-center justify-between px-2 py-1 bg-[#080C10] rounded border border-[#2A363F]">
                  <span className="text-slate-400">CORE A-ON:</span>
                  <span className="text-[#00F2FE]">PPC BIDDING</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1 bg-[#080C10] rounded border border-[#2A363F]">
                  <span className="text-slate-400">CORE B-ON:</span>
                  <span className="text-[#00F2FE]">SEO MATRIX</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1 bg-[#080C10] rounded border border-[#2A363F]">
                  <span className="text-slate-400">CORE C-ON:</span>
                  <span className="text-[#FF5E3A]">VIRAL HOOKS</span>
                </div>
                <div className="flex items-center justify-between px-2 py-1 bg-[#080C10] rounded border border-[#2A363F]">
                  <span className="text-slate-400">CORE D-ON:</span>
                  <span className="text-emerald-400">CRO TELEMETRY</span>
                </div>
              </div>
            </HudCard>
          </div>
        </div>

        <div className="mt-10">
          <HexIconRow activeIndex={5} />
        </div>
      </section>

      {/* ================= LIVE COMMS & TELEMETRY STREAM ================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#00F2FE] font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E3A] animate-pulse" />
            LIVE CAMPAIGN EQUALIZER & BID TELEMETRY
          </span>
          <span className="text-slate-500">REFRESH FREQ: 1.8s</span>
        </div>

        <TelemetryBar title="DIGITIZE FREQUENCY MATRIX /// AUTOMATED AD PACING" />
      </section>

      {/* ================= INTERACTIVE ROI CALCULATOR ================= */}
      <section id="calculator" className="scroll-mt-24">
        <HudCard
          code="CALC /// 02"
          title="INTERACTIVE GROWTH & AD SPEND ROI SIMULATOR"
          subtitle="Model your projected return on ad spend (ROAS) and gross revenue scaling"
          statusBadge="CALIBRATED"
          statusColor="cyan"
          cornerCut="both"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 font-mono">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Target Monthly Ad Spend:</span>
                  <span className="text-xl font-bold text-[#00F2FE] bg-cyan-950/80 px-3 py-1 rounded border border-cyan-800">
                    ${monthlySpend.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="2500"
                  max="100000"
                  step="2500"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00F2FE]"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>$2,500/mo (Seed)</span>
                  <span>$50,000/mo (Growth)</span>
                  <span>$100,000/mo (Enterprise Scale)</span>
                </div>
              </div>

              <div className="space-y-2 font-mono">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Target ROAS Multiplier:</span>
                  <span className="text-xl font-bold text-[#FF5E3A] bg-rose-950/80 px-3 py-1 rounded border border-rose-800">
                    {targetRoas.toFixed(1)}x ROAS
                  </span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="10.0"
                  step="0.1"
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF5E3A]"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>3.0x (Baseline)</span>
                  <span>6.0x (DigitizeStudio Avg)</span>
                  <span>10.0x (High-Margin DTC)</span>
                </div>
              </div>

              <div className="p-3 bg-[#080C10] border border-[#2A363F] rounded text-xs font-mono text-slate-400 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                <span>
                  Our algorithmic campaign engine optimizes bid auctions every 90 seconds, eliminating ad fatigue and maximizing your marginal ROAS without human delay.
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#080C10] border border-[#2A363F] p-6 rounded-lg font-mono space-y-4">
              <div className="text-xs text-[#00F2FE] font-bold uppercase tracking-widest border-b border-[#2A363F] pb-2">
                PROJECTED TELEMETRY OUTPUT
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400">Projected Monthly Revenue</span>
                <div className="text-3xl font-black text-[#00F2FE] drop-shadow-[0_0_12px_rgba(0,242,254,0.4)]">
                  ${projectedRevenue.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-2.5 bg-[#0D1117] rounded border border-[#2A363F]">
                  <div className="text-[10px] text-slate-500">NET GAIN</div>
                  <div className="text-base font-bold text-emerald-400">
                    +${estimatedProfit.toLocaleString()}
                  </div>
                </div>
                <div className="p-2.5 bg-[#0D1117] rounded border border-[#2A363F]">
                  <div className="text-[10px] text-slate-500">EST. CONVERSIONS</div>
                  <div className="text-base font-bold text-white">
                    {estimatedConversions.toLocaleString()}
                  </div>
                </div>
              </div>

              <a href="#consultation" className="block pt-2">
                <CyberButton variant="primary" size="md" className="w-full">
                  CLAIM THIS GROWTH PACING
                </CyberButton>
              </a>
            </div>
          </div>
        </HudCard>
      </section>

      {/* ================= CORE SERVICES ================= */}
      <section id="services" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono">
          <div>
            <div className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
              CORE CAPABILITIES & ENGINES
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              DIGITAL MARKETING MATRIX
            </h2>
          </div>
          <div className="text-xs text-slate-400">
            ENGINEERED FOR SCALE /// REAL-TIME ATTRIBUTION
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <HudCard
              key={svc.id}
              code={svc.id.toUpperCase()}
              title={svc.title}
              subtitle={svc.tagline}
              statusBadge={svc.status}
              statusColor={svc.status === 'ACTIVE' ? 'cyan' : 'amber'}
              className="flex flex-col justify-between"
            >
              <div className="space-y-4">
                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  {svc.description}
                </p>

                <div className="space-y-1 font-mono">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    TARGET KPIS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.kpis.map((kpi, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/80 text-[#00F2FE] font-bold"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#2A363F] font-mono space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    DELIVERABLES:
                  </span>
                  <ul className="text-[11px] text-slate-300 space-y-1">
                    {svc.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#00F2FE] shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#2A363F]">
                <a
                  href="#consultation"
                  onClick={() => setLeadForm(prev => ({ ...prev, serviceNeeded: svc.title }))}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE] hover:underline"
                >
                  <span>INITIALIZE FOR THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </HudCard>
          ))}
        </div>
      </section>

      {/* ================= CASE STUDIES & PROOF ================= */}
      <section id="case-studies" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 font-mono">
          <div>
            <div className="text-xs text-[#00F2FE] font-bold uppercase tracking-wider">
              VERIFIED TRACK RECORD
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              TELEMETRY CASE STUDIES
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            {['all', 'E-Commerce', 'B2B', 'Healthcare', 'FinTech'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-3 py-1 rounded border transition-all ${
                  activeCategory === tab
                    ? 'bg-[#00F2FE]/20 border-[#00F2FE] text-[#00F2FE] font-bold'
                    : 'bg-[#0D1117] border-[#2A363F] text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStudies.map((study) => (
            <HudCard
              key={study.id}
              code={study.date}
              title={study.client}
              subtitle={study.industry}
              statusBadge={study.roas}
              statusColor="cyan"
              cornerCut="top-right"
            >
              <div className="space-y-4 font-mono">
                <h3 className="text-base font-bold text-white">
                  {study.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {study.summary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 bg-[#080C10] rounded border border-[#2A363F]">
                      <div className="text-[9px] text-slate-400 truncate">{m.label}</div>
                      <div className="text-sm font-bold text-[#00F2FE]">{m.value}</div>
                      <div className="text-[10px] text-emerald-400">{m.change}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#080C10] border border-[#2A363F] text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </HudCard>
          ))}
        </div>
      </section>

      {/* ================= LEAD CAPTURE & CONSULTATION FORM ================= */}
      <section id="consultation" className="scroll-mt-24">
        <HudCard
          code="INTAKE /// 01"
          title="INITIALIZE YOUR DIGITAL MARKETING AUDIT"
          subtitle="Direct link to DigitizeStudio strategic marketing command"
          statusBadge="ACCEPTING CLIENTS"
          statusColor="green"
          cornerCut="both"
          glow={true}
        >
          {submittedLeadId ? (
            <div className="py-12 text-center font-mono space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                TELEMETRY INTAKE CONFIRMED
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your consultation request has been recorded under identifier{' '}
                <span className="text-[#00F2FE] font-bold">{submittedLeadId}</span>.
                Our growth engineers are analyzing your market vector.
              </p>
              <div className="p-3 bg-[#080C10] border border-[#00F2FE]/40 max-w-md mx-auto rounded text-xs text-[#00F2FE]">
                View this lead in real-time inside the{' '}
                <a href="http://localhost:3001" className="underline font-bold text-white">
                  CMS Studio (:3001)
                </a>{' '}
                or monitor live ad spend in the{' '}
                <a href="http://localhost:3002" className="underline font-bold text-white">
                  Growth Dashboard (:3002)
                </a>.
              </div>
              <CyberButton
                variant="secondary"
                size="sm"
                onClick={() => setSubmittedLeadId(null)}
              >
                SUBMIT ANOTHER INQUIRY
              </CyberButton>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-5 font-mono py-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] rounded text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] rounded text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    COMPANY / BRAND NAME
                  </label>
                  <input
                    type="text"
                    value={leadForm.company}
                    onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                    placeholder="e.g. Nexus Dynamics"
                    className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] rounded text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    WEBSITE / CURRENT DOMAIN
                  </label>
                  <input
                    type="text"
                    value={leadForm.website}
                    onChange={(e) => setLeadForm({ ...leadForm, website: e.target.value })}
                    placeholder="https://nexus.io"
                    className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] rounded text-sm text-white placeholder-slate-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    MONTHLY AD BUDGET TIER
                  </label>
                  <select
                    value={leadForm.budget}
                    onChange={(e) => setLeadForm({ ...leadForm, budget: e.target.value })}
                    className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] rounded text-sm text-white outline-none"
                  >
                    <option value="$5,000 - $10,000/mo">$5,000 - $10,000 / month</option>
                    <option value="$10,000 - $25,000/mo">$10,000 - $25,000 / month</option>
                    <option value="$25,000 - $50,000/mo">$25,000 - $50,000 / month</option>
                    <option value="$50,000 - $100,000/mo">$50,000 - $100,000 / month</option>
                    <option value="$100,000+/mo">$100,000+ / month (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    PRIMARY SERVICE OBJECTIVE
                  </label>
                  <select
                    value={leadForm.serviceNeeded}
                    onChange={(e) => setLeadForm({ ...leadForm, serviceNeeded: e.target.value })}
                    className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] rounded text-sm text-white outline-none"
                  >
                    <option value="Algorithmic PPC & Performance Marketing">Algorithmic PPC & Performance Marketing</option>
                    <option value="Semantic SEO & Search Domination">Semantic SEO & Search Domination</option>
                    <option value="Conversion Rate Telemetry & Funnels">Conversion Rate Telemetry & Funnels</option>
                    <option value="Viral Social Telemetry & UGC Engines">Viral Social Telemetry & UGC Engines</option>
                    <option value="AI Marketing Automation & CRM">AI Marketing Automation & CRM</option>
                    <option value="Complete Agency Growth Matrix">Complete Agency Growth Matrix</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  CURRENT BOTTLENECKS OR GOALS
                </label>
                <textarea
                  rows={3}
                  value={leadForm.message}
                  onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                  placeholder="Detail your current ROAS, CAC challenges, target revenue targets..."
                  className="w-full px-3 py-2 bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] rounded text-sm text-white placeholder-slate-500 outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-400">
                  Target Domain: <strong className="text-[#00F2FE]">digitizestudio.qd.je</strong>
                </span>
                <CyberButton
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT AUDIT REQUEST'}
                </CyberButton>
              </div>
            </form>
          )}
        </HudCard>
      </section>

    </div>
  );
}

