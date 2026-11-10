import type { Metadata } from 'next';
import './globals.css';
import { HudNavigation } from '@digitize/ui';
import Link from 'next/link';
import { LayoutDashboard, Users, Megaphone, FolderGit2, Settings, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'DigitizeStudio CMS /// Marketing Content & Lead Studio',
  description: 'Content Management System & Lead Ingestion Command Center for DigitizeStudio.',
};

export default function CmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#080C10] text-slate-100 scanline">
        <HudNavigation currentApp="cms" />

        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <aside className="md:col-span-3 space-y-4">
            <div className="p-4 bg-[#0D1117] border border-[#2A363F] rounded-lg font-mono">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#2A363F] text-xs font-bold text-[#00F2FE]">
                <Shield className="w-4 h-4" />
                <span>CMS COMMAND NODE</span>
              </div>

              <nav className="space-y-1.5 text-xs">
                <Link
                  href="/"
                  className="flex items-center gap-2.5 px-3 py-2 rounded bg-cyan-950/40 text-[#00F2FE] border border-[#00F2FE]/40 font-bold hover:bg-cyan-900/40 transition"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>OVERVIEW & CRM</span>
                </Link>

                <Link
                  href="/leads"
                  className="flex items-center gap-2.5 px-3 py-2 rounded text-slate-300 hover:bg-[#080C10] hover:text-[#00F2FE] transition"
                >
                  <Users className="w-4 h-4" />
                  <span>LEADS INTAKE</span>
                </Link>

                <Link
                  href="/campaigns"
                  className="flex items-center gap-2.5 px-3 py-2 rounded text-slate-300 hover:bg-[#080C10] hover:text-[#00F2FE] transition"
                >
                  <Megaphone className="w-4 h-4" />
                  <span>CAMPAIGN MANAGER</span>
                </Link>

                <Link
                  href="/case-studies"
                  className="flex items-center gap-2.5 px-3 py-2 rounded text-slate-300 hover:bg-[#080C10] hover:text-[#00F2FE] transition"
                >
                  <FolderGit2 className="w-4 h-4" />
                  <span>PORTFOLIO STUDIES</span>
                </Link>

                <Link
                  href="/settings"
                  className="flex items-center gap-2.5 px-3 py-2 rounded text-slate-300 hover:bg-[#080C10] hover:text-[#00F2FE] transition"
                >
                  <Settings className="w-4 h-4" />
                  <span>SITE SETTINGS</span>
                </Link>
              </nav>

              <div className="mt-6 pt-3 border-t border-[#2A363F] text-[10px] text-slate-500 space-y-1">
                <div>HOST: digitizestudio.qd.je</div>
                <div>AUTH: ADMIN COMMAND</div>
                <div className="text-emerald-400">STATE: SYNCHRONIZED</div>
              </div>
            </div>
          </aside>

          <main className="md:col-span-9">{children}</main>
        </div>
      </body>
    </html>
  );
}
