export type ServiceCategory = 'performance' | 'seo' | 'cro' | 'social' | 'automation' | 'creative';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: ServiceCategory;
  description: string;
  kpis: string[];
  deliverables: string[];
  icon: string;
  status: 'ACTIVE' | 'SCALING' | 'MAINTENANCE';
  gradient: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  roas: string;
  conversionLift: string;
  revenueGenerated: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    change: string;
  }[];
  tags: string[];
  date: string;
}

export type LeadStatus = 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'ARCHIVED';

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  website?: string;
  budget: string;
  serviceNeeded: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
  sourceDomain: string;
}

export type CampaignStatus = 'ACTIVE' | 'OPTIMIZING' | 'PAUSED' | 'SCHEDULED';

export interface Campaign {
  id: string;
  name: string;
  channel: 'Google Ads' | 'Meta Ads' | 'TikTok Ads' | 'LinkedIn' | 'SEO Matrix';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
  roas: number;
  cpa: number;
  status: CampaignStatus;
  health: number;
  coreEngine: string;
}

export interface TelemetryNode {
  id: string;
  name: string;
  code: string;
  status: 'ON' | 'CALIBRATING' | 'STANDBY';
  value: number;
  metricLabel: string;
}

export interface MarketingTelemetry {
  activeEngines: number;
  totalSpend: number;
  totalRevenue: number;
  blendedRoas: number;
  conversionRate: number;
  avgCpa: number;
  nodes: TelemetryNode[];
  liveEvents: {
    id: string;
    time: string;
    type: 'CONVERSION' | 'LEAD' | 'ALGO_TWEAK' | 'BUDGET_PACING';
    detail: string;
    value?: string;
  }[];
}

