# DIGITIZESTUDIO /// Next-Gen Cyber-HUD Digital Marketing Monorepo

[![Domain](https://img.shields.io/badge/Domain-digitizestudio.qd.je-00F2FE?style=for-the-badge&logo=google-chrome&logoColor=black)](https://digitizestudio.qd.je)
[![Framework](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Turborepo](https://img.shields.io/badge/Architecture-Monorepo-0D1117?style=for-the-badge&logo=turborepo)](https://turbo.build/)
[![Theme](https://img.shields.io/badge/Style-Futuristic_HUD_Sci--Fi-FF5E3A?style=for-the-badge)](https://digitizestudio.qd.je)

A state-of-the-art **Digital Marketing Agency Monorepo** engineered for **DigitizeStudio** (`digitizestudio.qd.je`). Built with a high-tech Cyberpunk / Sci-Fi HUD design system directly inspired by aerospace telemetry dashboards, featuring 4 full-stack applications and shared modular packages.

---

## 🛰️ Monorepo Architecture

```
DigitizeStudio/
├── apps/
│   ├── frontend/         # [Node 01] Public Agency Portfolio (:3000)
│   │                     # Hero HUD, ROI Simulator, Services Matrix, Case Studies, Lead Ingest
│   ├── cms/              # [Node 02] Content Management Studio (:3001)
│   │                     # Ingested Leads CRM, Campaign Allocator, Case Studies, Domain Settings
│   ├── dashboard/        # [Node 03] Live Growth & Telemetry Dashboard (:3002)
│   │                     # Central Multi-Node Radial Reticle, Real-Time Conversion Stream, Funnel Analytics
│   └── whatsapp-crm/     # [Node 04] WhatsApp CRM Engine (:3003)
│                         # Imported from nur-amin-rayhan/wacrm (Inbox, Pipelines, Broadcasts)
│
├── packages/
│   ├── ui/               # Shared Sci-Fi HUD Design System (CircularGauge, TelemetryBar, HudCard, etc.)
│   ├── config/           # Shared Tailwind CSS, TypeScript, and ESLint configurations
│   ├── database/         # Prisma ORM client & multi-tenant schema
│   └── shared/           # Core TypeScript types, mock datasets, and synchronizer store
│
├── e2e/                  # Playwright End-to-End Test Suite across all 4 applications
├── turbo.json            # Turborepo task pipeline configuration
├── pnpm-workspace.yaml   # Workspace definitions
└── package.json          # Root orchestration scripts
```

---

## 🎨 Design System & Color Palette

Inspired by futuristic tactical HUD interfaces and algorithmic telemetry:

| Token | Hex Code | Visual Application |
|---|---|---|
| **Deep Space Void** | `#080C10` | Primary app background |
| **HUD Surface** | `#0D1117` | Card, container, and modal backdrops |
| **Telemetry Border** | `#2A363F` | Angled chamfers, grid lines, and dividers |
| **Neon Cyan / Teal** | `#00F2FE` / `#4FACFE` | Core active reticle, glowing nodes, primary buttons |
| **Alert Coral** | `#FF5E3A` | Hot metrics, live alerts, conversion pings |
| **Muted Slate** | `#8B949E` | Secondary telemetry text, status labels |

### Key HUD Components (`@digitize/ui`)
- **`CircularGauge`**: Radial multi-node dial featuring 16 orbital sensor nodes, rotating dashed rings, and glowing ROAS percentage readout.
- **`TelemetryBar`**: Frequency equalizer bars fluctuating in real-time with channel pacing.
- **`HudCard`**: Chamfered / clipped polygon corner framing with neon corner brackets `[ + ]`.
- **`CyberButton`**: Angular polygon buttons with hover bloom and sound wave triggers.
- **`HexIconRow`**: 7-segment cyber hexagonal badge row (`GEO`, `ATTRIB`, `ALGO`, `PULSE`, `COMMS`, `PACING`, `ROAS`).
- **`HudNavigation`**: Global monorepo cross-switcher linking all 4 applications and validating `digitizestudio.qd.je`.

---

## 🚀 Port Map & Local Development

Run the entire suite or individual applications concurrently:

| App | Purpose | Port | Start Command |
|---|---|---|---|
| **`frontend`** | Public Portfolio & Lead Gen | `http://localhost:3000` | `npm run dev:frontend` |
| **`cms`** | Content & Leads Management | `http://localhost:3001` | `npm run dev:cms` |
| **`dashboard`** | Performance Telemetry Radar | `http://localhost:3002` | `npm run dev:dashboard` |
| **`whatsapp-crm`**| WhatsApp Conversations & Inbox | `http://localhost:3003` | `npm run dev:whatsapp-crm` |

### Quick Start:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Generate Database Schema**:
   ```bash
   npm run db:generate --workspace=@digitize/database
   ```

3. **Start Applications**:
   ```bash
   # Launch Frontend Portfolio
   npm run dev:frontend

   # Launch CMS Studio (in another terminal)
   npm run dev:cms

   # Launch Growth Dashboard (in another terminal)
   npm run dev:dashboard

   # Launch WhatsApp CRM (in another terminal)
   npm run dev:whatsapp-crm
   ```

---

## 🧪 End-to-End (E2E) Testing

Automated Playwright test suite covering all critical workflows:

```bash
npm run test:e2e
```

**Tested User Flows**:
1. **Frontend Portfolio**: Navigation, responsive HUD reticle rendering, interactive ROI slider computations, and audit lead form submission.
2. **CMS Studio**: Ingested leads table display, lead status transition (`NEW` → `QUALIFIED`), campaign deployment form, and site settings with canonical domain check.
3. **Growth Dashboard**: Top KPI HUD dials, real-time conversion stream feed, funnel analytics breakdown, and printable executive audit brief.
4. **WhatsApp CRM**: Application route verification, auth redirect, and DigitizeStudio monorepo telemetry header.

---

## 🚢 Git & Deployment Guide

### Push to a New Git Repository:
```bash
# Initialize git repository (if not already initialized)
git init
git add .
git commit -m "feat: initial commit for DigitizeStudio cyber-hud monorepo"

# Link to your new GitHub / GitLab repository
git remote add origin https://github.com/<your-username>/DigitizeStudio.git
git branch -M main
git push -u origin main
```

### Vercel Multi-Project Deployment:
Because this is a monorepo, each app can be deployed independently on Vercel:
1. Import the repository in Vercel.
2. For each deployment, specify the **Root Directory**:
   - `apps/frontend` → Root Directory: `apps/frontend` (Domain: `digitizestudio.qd.je`)
   - `apps/cms` → Root Directory: `apps/cms` (e.g. `cms.digitizestudio.qd.je`)
   - `apps/dashboard` → Root Directory: `apps/dashboard` (e.g. `dash.digitizestudio.qd.je`)
   - `apps/whatsapp-crm` → Root Directory: `apps/whatsapp-crm` (e.g. `crm.digitizestudio.qd.je`)
3. Framework Preset: **Next.js**.

---

© 2026 **DigitizeStudio** (`digitizestudio.qd.je`). All rights reserved.
Precision Digital Growth Powered by Algorithmic Telemetry.

