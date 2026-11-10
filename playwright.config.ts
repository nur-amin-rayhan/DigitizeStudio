import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 60 * 1000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: false,
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: [
    {
      command: 'npm run start --workspace=frontend',
      port: 3100,
      reuseExistingServer: false,
      timeout: 120000,
    },
    {
      command: 'npm run start --workspace=cms',
      port: 3101,
      reuseExistingServer: false,
      timeout: 120000,
    },
    {
      command: 'npm run start --workspace=dashboard',
      port: 3102,
      reuseExistingServer: false,
      timeout: 120000,
    },
    {
      command: 'npm run dev --workspace=whatsapp-crm',
      port: 3103,
      reuseExistingServer: false,
      timeout: 120000,
    },
  ],
});
