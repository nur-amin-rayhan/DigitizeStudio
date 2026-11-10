import type { Metadata } from 'next';
import './globals.css';
import { HudNavigation } from '@digitize/ui';
import Link from 'next/link';
import { Activity, BarChart2, Cpu, FileText } from 'lucide-react';

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

        <div className="w-full bg-[#0D1117] border-b border-[#2A363F] px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-11 text-xs font-mono">
            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/"
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-950/40 text-[#00F2FE] border border-[#00F2FE]/40 font-bold hover:bg-cyan-900/40 transition"
              >
                <Activity className="w-3.5 h-3.5" />
                <span>OVERVIEW TELEMETRY</span>
              </Link>
              <Link
                href="/analytics"
                className="flex items-center gap-1.5 px-3 py-1 rounded text-slate-300 hover:text-[#00F2FE] transition"
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>FUNNEL ANALYTICS</span>
              </Link>
              <Link
                href="/campaigns"
                className="flex items-center gap-1.5 px-3 py-1 rounded text-slate-300 hover:text-[#00F2FE] transition"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>CAMPAIGN MATRIX</span>
              </Link>
              <Link
                href="/reports"
                className="flex items-center gap-1.5 px-3 py-1 rounded text-slate-300 hover:text-[#00F2FE] transition"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>EXECUTIVE AUDIT</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-3 text-slate-400 text-[11px]">
              <span className="flex items-center gap-1 text-[#00F2FE]">
                <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                STREAM: LIVE (14ms)
              </span>
              <span>HOST: digitizestudio.qd.je</span>
            </div>
          </div>
        </div>

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}

