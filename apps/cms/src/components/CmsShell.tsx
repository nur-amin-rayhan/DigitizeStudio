'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Users, Megaphone, FolderGit2, Settings, Shield, LogOut } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export function CmsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  // If visiting the login page, render full width without sidebar
  if (pathname === '/login') {
    return <main className="flex-1 w-full">{children}</main>;
  }

  const navLinks = [
    { href: '/', label: 'OVERVIEW & CRM', icon: LayoutDashboard },
    { href: '/leads', label: 'LEADS INTAKE', icon: Users },
    { href: '/campaigns', label: 'CAMPAIGN MANAGER', icon: Megaphone },
    { href: '/case-studies', label: 'PORTFOLIO STUDIES', icon: FolderGit2 },
    { href: '/settings', label: 'SITE SETTINGS', icon: Settings },
  ];

  return (
    <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
      <aside className="md:col-span-3 space-y-4">
        <div className="p-4 bg-[#0D1117] border border-[#2A363F] rounded-lg font-mono">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2A363F]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#00F2FE]">
              <Shield className="w-4 h-4" />
              <span>CMS COMMAND NODE</span>
            </div>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <nav className="space-y-1.5 text-xs">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded transition ${
                    isActive
                      ? 'bg-cyan-950/40 text-[#00F2FE] border border-[#00F2FE]/40 font-bold'
                      : 'text-slate-300 hover:bg-[#080C10] hover:text-[#00F2FE]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-3 border-t border-[#2A363F] text-[10px] text-slate-500 space-y-1">
            <div>HOST: digitizestudio.qd.je</div>
            <div className="text-cyan-400">AUTH: SUPABASE CLOUD</div>
            <div className="text-emerald-400">STATE: SYNCHRONIZED</div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#2A363F]">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded border border-[#FF5E3A]/40 bg-[#FF5E3A]/10 text-[#FF5E3A] hover:bg-[#FF5E3A]/20 transition text-xs font-bold"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>DISCONNECT NODE (SIGN OUT)</span>
            </button>
          </div>
        </div>
      </aside>

      <main className="md:col-span-9">{children}</main>
    </div>
  );
}
