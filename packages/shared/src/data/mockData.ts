import { ServiceItem, CaseStudy, Lead, Campaign, MarketingTelemetry } from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'perf-ads',
    title: 'Algorithmic PPC & Performance Marketing',
    tagline: 'High-Velocity Multi-Channel Ad Engines',
    category: 'performance',
    description: 'Autonomous bid pacing, machine-learning creative testing, and multi-touch attribution on Google Search, YouTube, Meta, and TikTok.',
    kpis: ['Average 5.2x ROAS', '-34% Lower CPA', 'Zero Ad Waste Pacing'],
    deliverables: ['Custom ML Bid Scripts', 'High-Converting Ad Creatives', 'Real-Time Telemetry Dashboard', 'Weekly Algorithmic Tuning'],
    icon: 'Target',
    status: 'ACTIVE',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'seo-matrix',
    title: 'Semantic SEO & Search Domination',
    tagline: 'Algorithmic Keyword Vector Engineering',
    category: 'seo',
    description: 'Next-generation semantic cluster architecture, programmatic content matrices, technical crawl budget optimization, and entity mapping.',
    kpis: ['+310% Organic Impressions', 'Top 3 Search Rankings', '4.2x Keyword Coverage'],
    deliverables: ['Entity-Driven Content Silos', 'Crawl Telemetry & Speed Fixes', 'Automated Schema Ingestion', 'Authority Backlink Networks'],
    icon: 'Search',
    status: 'ACTIVE',
    gradient: 'from-cyan-400 to-teal-500'
  },
  {
    id: 'cro-telemetry',
    title: 'Conversion Rate Telemetry & Funnels',
    tagline: 'Scientific Micro-Optimization & Heatmapping',
    category: 'cro',
    description: 'Behavioral telemetry, multivariate A/B testing with Bayesian statistical confidence, friction removal, and frictionless lead funnels.',
    kpis: ['+48% Checkout Conversion', '+120% Lead Capture', 'Sub-1.2s Funnel Speed'],
    deliverables: ['Multivariate Landing Pages', 'Session Flow Telemetry', 'Micro-Copy Conversion Tuning', 'Form Drop-Off Elimination'],
    icon: 'Zap',
    status: 'SCALING',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'social-growth',
    title: 'Viral Social Telemetry & UGC Engines',
    tagline: 'High-Impact Brand Resonance & Audience Matrix',
    category: 'social',
    description: 'Data-engineered viral video hooks, high-converting creator partnerships, and hyper-targeted custom audience segmentation.',
    kpis: ['12M+ Monthly Reach', '+280% Community Growth', '6.8x Engagement Lift'],
    deliverables: ['Viral Hook Frameworks', 'Creator Pipeline Management', 'Community Retargeting Loops', 'Cross-Platform Syndication'],
    icon: 'Share2',
    status: 'ACTIVE',
    gradient: 'from-cyan-300 to-emerald-500'
  },
  {
    id: 'marketing-automation',
    title: 'AI Marketing Automation & CRM Pipelines',
    tagline: 'Autonomous Nurture & Retention Engines',
    category: 'automation',
    description: 'Dynamic customer lifecycle triggers, predictive churn detection, multi-stage SMS/Email drip workflows, and synchronized lead routing.',
    kpis: ['+64% Customer LTV', '99.8% Lead Delivery Rate', '3.4x Faster Follow-up'],
    deliverables: ['Omnichannel Nurture Sequences', 'Predictive Scoring Matrix', 'CRM Bi-Directional Webhooks', 'Automated Re-engagement Funnels'],
    icon: 'Cpu',
    status: 'ACTIVE',
    gradient: 'from-indigo-500 to-cyan-500'
  },
  {
    id: 'creative-studio',
    title: 'High-Converting Visual Design & Brand HUD',
    tagline: 'Psychological Direct-Response Assets',
    category: 'creative',
    description: 'Cutting-edge sci-fi HUD aesthetics, interactive 3D web interfaces, high-converting motion graphics, and direct-response video assets.',
    kpis: ['+85% Click-Through Velocity', '2.4x Longer Watch Time', 'Modern Cyber Brand Equity'],
    deliverables: ['Motion Graphic Ad Packs', 'Custom Landing Page Design', 'Interactive ROI Calculators', 'Brand Design System'],
    icon: 'Sparkles',
    status: 'ACTIVE',
    gradient: 'from-cyan-400 to-pink-500'
  }
];

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-cybergear',
    title: 'CyberGear E-Commerce: Global Scaling to $4.8M',
    client: 'CyberGear Apparel & Hardware',
    industry: 'DTC E-Commerce & Techwear',
    roas: '6.4x',
    conversionLift: '+184%',
    revenueGenerated: '$4,820,000',
    summary: 'Restructured multi-channel ad architecture across Meta and Google Shopping. Implemented real-time audience bid pacing and cyber-aesthetic landing pages.',
    metrics: [
      { label: 'Return On Ad Spend (ROAS)', value: '6.4x', change: '+240%' },
      { label: 'Customer Acquisition Cost (CAC)', value: '$18.40', change: '-42%' },
      { label: 'Store Conversion Rate', value: '4.85%', change: '+184%' },
      { label: 'Total Revenue Generated', value: '$4.82M', change: '+310%' }
    ],
    tags: ['Meta Ads', 'Google Shopping', 'CRO', 'Custom Landers'],
    date: '2026-Q1'
  },
  {
    id: 'case-hypersaas',
    title: 'HyperSaaS: Scaling B2B Pipeline to $1.2M ARR in 90 Days',
    client: 'HyperSaaS AI Cloud',
    industry: 'Enterprise B2B Software',
    roas: '8.2x',
    conversionLift: '+215%',
    revenueGenerated: '$1,240,000 ARR',
    summary: 'Engineered high-intent Google Search intent clusters, automated LinkedIn ABM targeting, and streamlined interactive product tour funnels.',
    metrics: [
      { label: 'Pipeline Value Generated', value: '$3.4M', change: '+320%' },
      { label: 'Qualified Demos Booked', value: '840+', change: '+215%' },
      { label: 'Cost Per Demo (CPA)', value: '$68.00', change: '-55%' },
      { label: 'Close Rate', value: '28.4%', change: '+34%' }
    ],
    tags: ['B2B SEO', 'LinkedIn ABM', 'Google Search', 'Demo Funnel'],
    date: '2026-Q2'
  },
  {
    id: 'case-omnihealth',
    title: 'OmniHealth Clinic: 412% Surge in High-Ticket Patient Bookings',
    client: 'OmniHealth Medical Centers',
    industry: 'Healthcare & Wellness',
    roas: '5.8x',
    conversionLift: '+412%',
    revenueGenerated: '$2,150,000',
    summary: 'Localized hyper-targeted geo-fenced PPC ads, HIPAA-compliant lead qualification quiz funnels, and automated appointment reminders.',
    metrics: [
      { label: 'Monthly Booked Consults', value: '1,280', change: '+412%' },
      { label: 'Show-Up Rate', value: '92.4%', change: '+28%' },
      { label: 'Blended ROAS', value: '5.8x', change: '+180%' },
      { label: 'Avg Customer LTV', value: '$1,680', change: '+45%' }
    ],
    tags: ['Local SEO', 'Google Local Ads', 'Lead Funnel', 'SMS Automation'],
    date: '2026-Q3'
  },
  {
    id: 'case-fintech-matrix',
    title: 'FinTech Matrix: Rapid Mobile App User Acquisition (250k+ Installs)',
    client: 'Matrix Pay Neo-Bank',
    industry: 'FinTech & Mobile Banking',
    roas: '4.6x',
    conversionLift: '+330%',
    revenueGenerated: '$3,400,000',
    summary: 'Deployed TikTok UGC viral campaigns paired with Apple Search Ads (ASA) and deep-linked referral loops to trigger exponential viral app growth.',
    metrics: [
      { label: 'Verified App Installs', value: '254,000', change: '+330%' },
      { label: 'Cost Per Funded Account', value: '$7.20', change: '-48%' },
      { label: 'Day-30 Retention Rate', value: '41.2%', change: '+35%' },
      { label: 'Viral K-Factor Coefficient', value: '1.42', change: '+88%' }
    ],
    tags: ['TikTok Ads', 'Apple Search Ads', 'Viral Loops', 'Mobile Growth'],
    date: '2026-Q3'
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-101',
    name: 'Sarah Jenkins',
    email: 'sarah@vertexcloud.io',
    company: 'Vertex Cloud Systems',
    website: 'https://vertexcloud.io',
    budget: '$10,000 - $25,000/mo',
    serviceNeeded: 'Algorithmic PPC & Performance Marketing',
    message: 'We need to scale our Google Ads and LinkedIn pipeline while keeping our CAC under $95. Looking for a high-tech data-driven agency.',
    status: 'QUALIFIED',
    createdAt: '2026-11-09T14:20:00Z',
    sourceDomain: 'digitizestudio.qd.je'
  },
  {
    id: 'lead-102',
    name: 'David K. Vance',
    email: 'd.vance@neomorphic.design',
    company: 'Neomorphic Hardware',
    website: 'https://neomorphic.design',
    budget: '$25,000 - $50,000/mo',
    serviceNeeded: 'Conversion Rate Telemetry & Funnels',
    message: 'We are launching our next-gen peripheral line. Need end-to-end launch strategy, cyber aesthetic landing pages, and multi-channel traffic.',
    status: 'NEW',
    createdAt: '2026-11-10T08:45:00Z',
    sourceDomain: 'digitizestudio.qd.je'
  },
  {
    id: 'lead-103',
    name: 'Elena Rostova',
    email: 'elena@quantumcommerce.eu',
    company: 'Quantum Commerce',
    website: 'https://quantumcommerce.eu',
    budget: '$5,000 - $10,000/mo',
    serviceNeeded: 'Semantic SEO & Search Domination',
    message: 'Seeking aggressive organic keyword growth across European markets. Looking to replace our current legacy agency with DigitizeStudio.',
    status: 'CONTACTED',
    createdAt: '2026-11-08T19:12:00Z',
    sourceDomain: 'digitizestudio.qd.je'
  }
];

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-01',
    name: 'ALPHA /// Google Search Core Pacing',
    channel: 'Google Ads',
    budget: 45000,
    spent: 31200,
    impressions: 485000,
    clicks: 34200,
    conversions: 2480,
    revenue: 198400,
    roas: 6.36,
    cpa: 12.58,
    status: 'ACTIVE',
    health: 98,
    coreEngine: 'CORE A-ON'
  },
  {
    id: 'camp-02',
    name: 'BETA /// Meta Direct-Response Dynamic',
    channel: 'Meta Ads',
    budget: 60000,
    spent: 42100,
    impressions: 1280000,
    clicks: 58400,
    conversions: 3620,
    revenue: 264260,
    roas: 6.28,
    cpa: 11.63,
    status: 'ACTIVE',
    health: 95,
    coreEngine: 'CORE B-ON'
  },
  {
    id: 'camp-03',
    name: 'GAMMA /// TikTok UGC Viral Scaling',
    channel: 'TikTok Ads',
    budget: 25000,
    spent: 18400,
    impressions: 2450000,
    clicks: 72100,
    conversions: 1890,
    revenue: 98280,
    roas: 5.34,
    cpa: 9.74,
    status: 'OPTIMIZING',
    health: 91,
    coreEngine: 'CORE C-ON'
  },
  {
    id: 'camp-04',
    name: 'DELTA /// LinkedIn Enterprise ABM',
    channel: 'LinkedIn',
    budget: 35000,
    spent: 28900,
    impressions: 190000,
    clicks: 8400,
    conversions: 540,
    revenue: 167400,
    roas: 5.79,
    cpa: 53.52,
    status: 'ACTIVE',
    health: 96,
    coreEngine: 'CORE D-ON'
  },
  {
    id: 'camp-05',
    name: 'EPSILON /// Programmatic SEO Ingestion',
    channel: 'SEO Matrix',
    budget: 15000,
    spent: 12500,
    impressions: 890000,
    clicks: 64200,
    conversions: 1420,
    revenue: 85200,
    roas: 6.82,
    cpa: 8.80,
    status: 'ACTIVE',
    health: 99,
    coreEngine: 'CORE E-ON'
  }
];

export const INITIAL_TELEMETRY: MarketingTelemetry = {
  activeEngines: 8,
  totalSpend: 133100,
  totalRevenue: 813540,
  blendedRoas: 6.11,
  conversionRate: 4.28,
  avgCpa: 13.38,
  nodes: [
    { id: 'node-a', name: 'CORE A-ON', code: 'SYST 0451', status: 'ON', value: 96, metricLabel: 'Search Bidding' },
    { id: 'node-b', name: 'CORE B-ON', code: 'SYST 0459', status: 'ON', value: 94, metricLabel: 'Creative Synthesis' },
    { id: 'node-c', name: 'CORE C-ON', code: 'SYST 9231', status: 'ON', value: 91, metricLabel: 'Viral Pacing' },
    { id: 'node-d', name: 'CORE D-ON', code: 'SYST 1112', status: 'ON', value: 98, metricLabel: 'ABM Attribution' },
    { id: 'node-e', name: 'CORE E-ON', code: 'SYST 1118', status: 'ON', value: 99, metricLabel: 'Crawl Telemetry' },
    { id: 'node-f', name: 'CORE F-ON', code: 'SYST 1119', status: 'ON', value: 89, metricLabel: 'Bayesian Split' },
    { id: 'node-g', name: 'CORE G-ON', code: 'SYST 1120', status: 'ON', value: 93, metricLabel: 'Audience Clustering' },
    { id: 'node-h', name: 'CORE H-ON', code: 'SYST 1121', status: 'ON', value: 97, metricLabel: 'LTV Prediction' }
  ],
  liveEvents: [
    { id: 'ev-1', time: '14:22:04', type: 'CONVERSION', detail: 'E-commerce Purchase ($249.00) via Meta Ad #84', value: '+$249' },
    { id: 'ev-2', time: '14:21:48', type: 'LEAD', detail: 'New Enterprise Consultation captured on digitizestudio.qd.je', value: 'High Value' },
    { id: 'ev-3', time: '14:20:15', type: 'ALGO_TWEAK', detail: 'Google Search Bid pacing shifted to +14% for high-intent cluster', value: 'Optimal' },
    { id: 'ev-4', time: '14:18:30', type: 'CONVERSION', detail: 'SaaS Annual Plan ($1,200.00) via Google Search', value: '+$1,200' },
    { id: 'ev-5', time: '14:16:02', type: 'BUDGET_PACING', detail: 'TikTok viral boost activated for creative node #03', value: 'Active' }
  ]
};

