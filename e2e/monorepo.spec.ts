import { test, expect } from '@playwright/test';

test.describe('DigitizeStudio Monorepo E2E Test Suite (All 4 Apps)', () => {

  // 1. FRONTEND PORTFOLIO (:3100)
  test('App 1 - Frontend (Portfolio) Loads & Form Works', async ({ page }) => {
    await page.goto('http://localhost:3100');
    await expect(page).toHaveTitle(/DigitizeStudio/);

    // Verify Domain Pill & Header
    await expect(page.locator('text=digitizestudio.qd.je').first()).toBeVisible();
    await expect(page.locator('h1')).toContainText('PRECISION DIGITAL');

    // Verify CircularGauge HUD & Telemetry Equalizer from Reference Image
    const gauge = page.locator('svg').filter({ hasText: /OPTIMAL ROAS/i }).first();
    await expect(gauge).toBeVisible();
    await expect(page.locator('text=DIGITIZE FREQUENCY MATRIX').first()).toBeVisible();

    // Test Interactive ROI Calculator
    const spendSlider = page.locator('input[type="range"]').first();
    await spendSlider.fill('35000');
    await expect(page.locator('text=$35,000 / mo')).toBeVisible();

    // Test Consultation / Lead Capture Form
    const nameInput = page.locator('input[placeholder*="Alex Mercer"]');
    await nameInput.fill('Rahim Chowdhury');

    const emailInput = page.locator('input[placeholder*="alex@company.com"]');
    await emailInput.fill('rahim@digitest.com');

    const companyInput = page.locator('input[placeholder*="Nexus Dynamics"]');
    await companyInput.fill('DigiTest Technologies');

    const messageInput = page.locator('textarea');
    await messageInput.fill('Looking to scale our Google PPC and Meta campaigns to $50k/mo with high ROAS.');

    const submitBtn = page.locator('button:has-text("TRANSMIT AUDIT REQUEST")');
    await submitBtn.click();

    // Verify Confirmation state
    await expect(page.locator('text=TELEMETRY INTAKE CONFIRMED')).toBeVisible({ timeout: 6000 });
  });

  // 2. CMS CONTENT MANAGEMENT STUDIO (:3101)
  test('App 2 - CMS (Content & Lead Studio) Operates Smoothly', async ({ page }) => {
    await page.goto('http://localhost:3101');
    await expect(page).toHaveTitle(/CMS/);
    await expect(page.locator('h1')).toContainText('DIGITIZESTUDIO COMMAND');

    // Verify Ingested Leads Table
    await expect(page.locator('text=INCOMING LEADS & CONSULTATION TELEMETRY')).toBeVisible();
    const table = page.locator('table');
    await expect(table).toBeVisible();

    // Navigate to Campaigns Manager
    await page.click('a:has-text("CAMPAIGN MANAGER")');
    await expect(page).toHaveURL('http://localhost:3101/campaigns');
    await expect(page.locator('h1')).toContainText('MARKETING CAMPAIGN ENGINES');
    await expect(page.locator('text=ALPHA /// Google Search Core Pacing')).toBeVisible();

    // Navigate to Site Settings & Check Domain
    await page.click('a:has-text("SITE SETTINGS")');
    await expect(page).toHaveURL('http://localhost:3101/settings');
    await expect(page.locator('input[value*="digitizestudio.qd.je"]')).toBeVisible();
  });

  // 3. GROWTH TELEMETRY DASHBOARD (:3102)
  test('App 3 - Dashboard (Growth Telemetry) Displays Live Metrics', async ({ page }) => {
    await page.goto('http://localhost:3102');
    await expect(page).toHaveTitle(/Growth & Telemetry Dashboard/);
    await expect(page.locator('h1')).toContainText('CAMPAIGN TELEMETRY & ROAS RADAR');

    // Verify Key Telemetry Metric Cards
    await expect(page.locator('text=BLENDED ROAS MULTIPLIER')).toBeVisible();
    await expect(page.locator('text=CLIENT REVENUE GENERATED')).toBeVisible();
    await expect(page.locator('text=REAL-TIME CONVERSION EVENT FEED')).toBeVisible();

    // Navigate to Funnel Analytics
    await page.click('a:has-text("FUNNEL ANALYTICS")');
    await expect(page).toHaveURL('http://localhost:3102/analytics');
    await expect(page.locator('h1')).toContainText('FUNNEL TELEMETRY & ATTRIBUTION MATRIX');

    // Navigate to Executive Audit Report
    await page.click('a:has-text("EXECUTIVE AUDIT")');
    await expect(page).toHaveURL('http://localhost:3102/reports');
    await expect(page.locator('h1')).toContainText('PERFORMANCE & ROAS AUDIT REPORT');
    await expect(page.locator('text=DIGITIZESTUDIO EXECUTIVE MARKETING BRIEF')).toBeVisible();
  });

  // 4. WHATSAPP CRM ROUTE CHECK (:3103)
  test('App 4 - WhatsApp CRM Route Check & Integration', async ({ page }) => {
    await page.goto('http://localhost:3103');

    // Check redirection or auth page
    await expect(page).toHaveURL(/localhost:3103\/(login|dashboard)/);

    // Verify DigitizeStudio Monorepo Integration Header
    await expect(page.locator('text=DIGITIZESTUDIO /// WHATSAPP CRM NODE')).toBeVisible();
    await expect(page.locator('text=digitizestudio.qd.je').first()).toBeVisible();
  });

});
