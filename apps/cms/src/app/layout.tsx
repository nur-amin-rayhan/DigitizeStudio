import type { Metadata } from 'next';
import './globals.css';
import { HudNavigation } from '@digitize/ui';
import { CmsShell } from '@/components/CmsShell';

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
        <CmsShell>{children}</CmsShell>
      </body>
    </html>
  );
}

