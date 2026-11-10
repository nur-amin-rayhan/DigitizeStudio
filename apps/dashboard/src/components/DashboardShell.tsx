'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Activity, BarChart2, Cpu, FileText, LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  if (pathname === '/login') {
    return <main className="flex-1 w-full">{children}</main>;
  }

  const links = [
    { href: '/', label: 'OVERVIEW TELEMETRY', icon: Activity },
    { href: '/analytics', label: 'FUNNEL ANALYTICS', icon: BarChart2 },
    { href: '/campaigns', label: 'CAMPAIGN MATRIX', icon: Cpu },
    { href: '/reports', label: 'EXECUTIVE AUDIT', icon: FileText },
  ];

  return (
    <>
      <div className="w-full bg-[#0D1117] border-b border-[#2A363F] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-11 text-xs font-mono">
          <div className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded transition ${
                    isActive
                      ? 'bg-cyan-950/40 text-[#00F2FE] border border-[#00F2FE]/40 font-bold'
                      : 'text-slate-300 hover:text-[#00F2FE]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span className="hidden md:flex items-center gap-1 text-[#00F2FE]">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
              STREAM: LIVE (14ms)
            </span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-[#FF5E3A]/40 bg-[#FF5E3A]/10 text-[#FF5E3A] hover:bg-[#FF5E3A]/20 transition text-[11px] font-bold"
            >
              <LogOut className="w-3 h-3" />
              <span>DISCONNECT (SIGN OUT)</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {children}
      </main>
    </>
  );
}

