import type { Metadata } from 'next';
import './globals.css';
import { HudNavigation } from '@digitize/ui';

export const metadata: Metadata = {
  title: 'DigitizeStudio /// Precision Digital Marketing & Growth Telemetry',
  description: 'Next-generation digital marketing agency powering brands with algorithmic PPC, semantic SEO matrices, high-converting CRO funnels, and real-time telemetry.',
  metadataBase: new URL('https://digitizestudio.qd.je'),
  keywords: ['Digital Marketing', 'PPC Management', 'SEO Agency', 'CRO Optimization', 'Performance Marketing', 'DigitizeStudio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#080C10] text-slate-100 scanline">
        <HudNavigation currentApp="frontend" />
        <main className="flex-1">{children}</main>
        
        {/* Futuristic Agency Footer */}
        <footer className="border-t border-[#2A363F] bg-[#080C10]/95 py-10 px-4 sm:px-6 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs font-mono">
            <div>
              <div className="font-bold text-base text-white mb-2">
                DIGITIZE<span className="text-[#00F2FE]">STUDIO</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-3">
                Algorithmic Growth Telemetry & Precision Digital Marketing Infrastructure.
              </p>
              <div className="inline-block px-2 py-0.5 rounded bg-cyan-950 text-[#00F2FE] border border-cyan-800">
                DOMAIN: digitizestudio.qd.je
              </div>
            </div>

            <div>
              <div className="text-[#00F2FE] font-bold uppercase tracking-wider mb-3">
                Core Capabilities
              </div>
              <ul className="space-y-1.5 text-slate-400">
                <li>• Algorithmic PPC & Bidding</li>
                <li>• Semantic SEO Vector Matrices</li>
                <li>• Behavioral CRO Telemetry</li>
                <li>• High-Impact UGC & Viral Engines</li>
                <li>• Multi-Touch Attribution</li>
              </ul>
            </div>

            <div>
              <div className="text-[#00F2FE] font-bold uppercase tracking-wider mb-3">
                Monorepo Node Ecosystem
              </div>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <a href="http://localhost:3000" className="hover:text-[#00F2FE]">
                    [01] Public Portfolio (:3000)
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3001" className="hover:text-[#00F2FE]">
                    [02] Content & Lead CMS (:3001)
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3002" className="hover:text-[#00F2FE]">
                    [03] Live Growth Dashboard (:3002)
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3003" className="hover:text-[#00F2FE]">
                    [04] WhatsApp CRM Engine (:3003)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-[#00F2FE] font-bold uppercase tracking-wider mb-3">
                Live Status
              </div>
              <div className="p-3 bg-[#0D1117] border border-[#2A363F] rounded space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span>CORE ENGINES:</span>
                  <span className="text-emerald-400 font-bold">ONLINE [8/8]</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>AVG CLIENT ROAS:</span>
                  <span className="text-[#00F2FE] font-bold">6.11x</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>GLOBAL LATENCY:</span>
                  <span className="text-slate-400 font-bold">12ms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 border-t border-[#2A363F] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500">
            <div>© {new Date().getFullYear()} DIGITIZESTUDIO. ALL RIGHTS RESERVED.</div>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <span>SECURED WITH SHA-256</span>
              <span>HOST: QD.JE NETWORK</span>
              <span className="text-[#00F2FE]">SYS // 0451 OK</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
