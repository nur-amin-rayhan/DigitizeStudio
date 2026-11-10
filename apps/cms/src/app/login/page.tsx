'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Shield, Lock, Mail, ArrowRight, UserPlus, CheckCircle2, AlertCircle } from 'lucide-react';
import { CyberButton } from '@digitize/ui';

export default function CmsLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(false);

    if (!email || !password) {
      setError('Operator Email and Passkey are required.');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'signin') {
        const { error: signInErr } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInErr) {
          setError(signInErr.message);
          setLoading(false);
          return;
        }

        // Success - navigate to CMS Overview
        router.push('/');
        router.refresh();
      } else {
        // Sign up
        const { error: signUpErr, data } = await supabase.auth.signUp({
          email,
          password,
        });

        if (signUpErr) {
          setError(signUpErr.message);
          setLoading(false);
          return;
        }

        if (data.session) {
          setSuccessMsg('Operator account provisioned & authenticated! Accessing node...');
          setTimeout(() => {
            router.push('/');
            router.refresh();
          }, 1000);
        } else {
          setSuccessMsg('Operator registration successful! Please verify your email or sign in with your credentials.');
          setMode('signin');
          setLoading(false);
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Authentication error encountered.');
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#00F2FE]/10 blur-[130px]" />
      </div>

      <div className="relative w-full max-w-md font-mono">
        {/* Top Telemetry Header */}
        <div className="mb-4 flex items-center justify-between text-[10px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse shadow-[0_0_8px_#00F2FE]" />
            <span className="text-[#00F2FE] font-bold">DIGITIZESTUDIO</span>
            <span>/// CMS COMMAND</span>
          </div>
          <span className="text-slate-500">NODE: 3101</span>
        </div>

        {/* Auth Frame */}
        <div className="bg-[#0D1117]/95 border border-[#2A363F] shadow-[0_0_35px_rgba(0,242,254,0.08)] rounded-xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
          {/* Top chamfer accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00F2FE] to-transparent" />

          {/* Icon Reticle */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative w-14 h-14 rounded-xl border border-[#00F2FE]/40 bg-[#00F2FE]/10 flex items-center justify-center text-[#00F2FE] shadow-[0_0_18px_rgba(0,242,254,0.3)] mb-3">
              <Shield className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#FF5E3A] shadow-[0_0_6px_#FF5E3A]" />
            </div>
            <h1 className="text-lg sm:text-xl font-black tracking-wider text-white">
              {mode === 'signin' ? 'CMS STUDIO ACCESS GATEWAY' : 'PROVISION OPERATOR NODE'}
            </h1>
            <p className="text-[11px] text-slate-400 mt-1 max-w-xs">
              Synchronized with Supabase Authentication Cloud for domain <span className="text-[#00F2FE]">digitizestudio.qd.je</span>
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 gap-2 mb-6 p-1 bg-[#080C10] border border-[#2A363F] rounded-lg text-xs">
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setError(null);
                setSuccessMsg(null);
              }}
              className={`py-1.5 rounded transition text-center font-bold ${
                mode === 'signin'
                  ? 'bg-[#00F2FE]/15 border border-[#00F2FE]/60 text-[#00F2FE]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              OPERATOR SIGN IN
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setError(null);
                setSuccessMsg(null);
              }}
              className={`py-1.5 rounded transition text-center font-bold ${
                mode === 'signup'
                  ? 'bg-[#00F2FE]/15 border border-[#00F2FE]/60 text-[#00F2FE]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PROVISION ACCOUNT
            </button>
          </div>

          {/* Alert Banners */}
          {error && (
            <div className="mb-4 p-3 rounded bg-red-950/40 border border-[#FF5E3A]/60 text-[#FF5E3A] text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 p-3 rounded bg-emerald-950/40 border border-emerald-500/60 text-emerald-400 text-xs flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Login / Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
                <span>Operator Identity (Email)</span>
                <Mail className="w-3.5 h-3.5 text-slate-500" />
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="operator@digitizestudio.qd.je"
                className="w-full bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none transition shadow-inner"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 flex items-center justify-between">
                <span>Passkey (Password)</span>
                <Lock className="w-3.5 h-3.5 text-slate-500" />
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#080C10] border border-[#2A363F] focus:border-[#00F2FE] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none transition shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 px-4 rounded-lg bg-[#00F2FE] text-[#080C10] font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:bg-[#4FACFE] transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>INITIALIZING NODE...</span>
              ) : mode === 'signin' ? (
                <>
                  <span>AUTHENTICATE CMS NODE</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>REGISTER OPERATOR NODE</span>
                  <UserPlus className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Ecosystem Links */}
          <div className="mt-6 pt-4 border-t border-[#2A363F] text-center">
            <div className="text-[10px] text-slate-500 mb-2">ECOSYSTEM ACCESS NODES</div>
            <div className="flex items-center justify-center gap-3 text-[11px]">
              <a href="http://localhost:3100" className="text-slate-400 hover:text-[#00F2FE] transition">
                ← Portfolio (:3100)
              </a>
              <span className="text-slate-700">•</span>
              <a href="http://localhost:3102" className="text-slate-400 hover:text-[#00F2FE] transition">
                Dashboard (:3102)
              </a>
              <span className="text-slate-700">•</span>
              <a href="http://localhost:3103" className="text-slate-400 hover:text-[#00F2FE] transition">
                WA CRM (:3103)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
