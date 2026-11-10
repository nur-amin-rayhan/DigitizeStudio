import { Lead, Campaign, ServiceItem, CaseStudy, MarketingTelemetry } from '../types';
import { INITIAL_LEADS, INITIAL_CAMPAIGNS, INITIAL_SERVICES, INITIAL_CASE_STUDIES, INITIAL_TELEMETRY } from './mockData';

const STORAGE_KEYS = {
  LEADS: 'digitize_leads_data',
  CAMPAIGNS: 'digitize_campaigns_data',
  SERVICES: 'digitize_services_data',
  CASE_STUDIES: 'digitize_case_studies_data',
  TELEMETRY: 'digitize_telemetry_data'
};

function safeGetItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error(`Error reading ${key} from localStorage`, e);
    return defaultValue;
  }
}

function safeSetItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error(`Error writing ${key} to localStorage`, e);
  }
}

export const DataStore = {
  // Leads
  getLeads(): Lead[] {
    return safeGetItem<Lead[]>(STORAGE_KEYS.LEADS, INITIAL_LEADS);
  },
  addLead(lead: Omit<Lead, 'id' | 'createdAt' | 'status' | 'sourceDomain'>): Lead {
    const leads = this.getLeads();
    const newLead: Lead = {
      ...lead,
      id: `lead-${Date.now()}`,
      status: 'NEW',
      createdAt: new Date().toISOString(),
      sourceDomain: 'digitizestudio.qd.je'
    };
    const updated = [newLead, ...leads];
    safeSetItem(STORAGE_KEYS.LEADS, updated);
    return newLead;
  },
  updateLeadStatus(id: string, status: Lead['status']): Lead[] {
    const leads = this.getLeads().map(l => l.id === id ? { ...l, status } : l);
    safeSetItem(STORAGE_KEYS.LEADS, leads);
    return leads;
  },
  deleteLead(id: string): Lead[] {
    const leads = this.getLeads().filter(l => l.id !== id);
    safeSetItem(STORAGE_KEYS.LEADS, leads);
    return leads;
  },

  // Campaigns
  getCampaigns(): Campaign[] {
    return safeGetItem<Campaign[]>(STORAGE_KEYS.CAMPAIGNS, INITIAL_CAMPAIGNS);
  },
  updateCampaignStatus(id: string, status: Campaign['status']): Campaign[] {
    const campaigns = this.getCampaigns().map(c => c.id === id ? { ...c, status } : c);
    safeSetItem(STORAGE_KEYS.CAMPAIGNS, campaigns);
    return campaigns;
  },
  addCampaign(campaign: Omit<Campaign, 'id'>): Campaign {
    const campaigns = this.getCampaigns();
    const newCampaign: Campaign = {
      ...campaign,
      id: `camp-${Date.now()}`
    };
    const updated = [newCampaign, ...campaigns];
    safeSetItem(STORAGE_KEYS.CAMPAIGNS, updated);
    return newCampaign;
  },

  // Services
  getServices(): ServiceItem[] {
    return safeGetItem<ServiceItem[]>(STORAGE_KEYS.SERVICES, INITIAL_SERVICES);
  },
  updateService(service: ServiceItem): ServiceItem[] {
    const services = this.getServices().map(s => s.id === service.id ? service : s);
    safeSetItem(STORAGE_KEYS.SERVICES, services);
    return services;
  },

  // Case Studies
  getCaseStudies(): CaseStudy[] {
    return safeGetItem<CaseStudy[]>(STORAGE_KEYS.CASE_STUDIES, INITIAL_CASE_STUDIES);
  },

  // Telemetry
  getTelemetry(): MarketingTelemetry {
    return safeGetItem<MarketingTelemetry>(STORAGE_KEYS.TELEMETRY, INITIAL_TELEMETRY);
  }
};
