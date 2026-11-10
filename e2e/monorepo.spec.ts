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

  // 2. CMS CONTENT MANAGEMENT STUDIO (:3101) - PROTECTED WITH SUPABASE AUTH
  test('App 2 - CMS (Content & Lead Studio) Auth Gate & Supabase Login', async ({ page }) => {
    await page.goto('http://localhost:3101');
    
    // Verify unauthenticated access redirects to /login
    await expect(page).toHaveURL('http://localhost:3101/login');
    await expect(page).toHaveTitle(/CMS/);
    await expect(page.locator('h1')).toContainText('CMS STUDIO ACCESS GATEWAY');

    // Verify ID (Email) & Passkey fields
    const emailInput = page.locator('input[type="email"]');
    const passInput = page.locator('input[type="password"]');
    await expect(emailInput).toBeVisible();
    await expect(passInput).toBeVisible();

    // Verify Mode Switcher
    await expect(page.locator('text=OPERATOR SIGN IN')).toBeVisible();
    await page.click('button:has-text("PROVISION ACCOUNT")');
    await expect(page.locator('h1')).toContainText('PROVISION OPERATOR NODE');
    await page.click('button:has-text("OPERATOR SIGN IN")');

    // Verify Supabase Cloud telemetry badge
    await expect(page.locator('text=digitizestudio.qd.je').first()).toBeVisible();
  });

  // 3. GROWTH TELEMETRY DASHBOARD (:3102) - PROTECTED WITH SUPABASE AUTH
  test('App 3 - Dashboard (Growth Telemetry) Auth Gate & Supabase Login', async ({ page }) => {
    await page.goto('http://localhost:3102');
    
    // Verify unauthenticated access redirects to /login
    await expect(page).toHaveURL('http://localhost:3102/login');
    await expect(page).toHaveTitle(/Growth & Telemetry Dashboard/);
    await expect(page.locator('h1')).toContainText('GROWTH RADAR ACCESS');

    // Verify ID (Email) & Passkey fields
    const emailInput = page.locator('input[type="email"]');
    const passInput = page.locator('input[type="password"]');
    await expect(emailInput).toBeVisible();
    await expect(passInput).toBeVisible();

    // Verify Submit button
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    await expect(page.locator('text=digitizestudio.qd.je').first()).toBeVisible();
  });

  // 4. WHATSAPP CRM ROUTE CHECK (:3103) - PROTECTED WITH SUPABASE AUTH
  test('App 4 - WhatsApp CRM Route Check & Supabase Auth Integration', async ({ page }) => {
    await page.goto('http://localhost:3103');

    // Check redirection to auth login page
    await expect(page).toHaveURL(/localhost:3103\/(login|dashboard)/);

    // Verify DigitizeStudio Monorepo Integration Header & Login form
    await expect(page.locator('text=DIGITIZESTUDIO /// WHATSAPP CRM NODE')).toBeVisible();
    await expect(page.locator('text=digitizestudio.qd.je').first()).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

});
