import type { Metadata } from 'next';
import './globals.css';
import { HudNavigation } from '@digitize/ui';
import { DashboardShell } from '@/components/DashboardShell';

export const metadata: Metadata = {
  title: 'DigitizeStudio /// Real-Time Growth & Telemetry Dashboard',
  description: 'Live Algorithmic Campaign Telemetry, Multi-Channel ROAS, and Attribution Command Center.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#080C10] text-slate-100 scanline">
        <HudNavigation currentApp="dashboard" />
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}

