"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, CheckCircle, UsersRound } from "lucide-react";

// `useSearchParams` opts the component out of static prerendering
// unless wrapped in Suspense — same pattern as /login.
export default function SignupPage() {
  return (
    <Suspense fallback={null}>
      <SignupPageInner />
    </Suspense>
  );
}

function SignupPageInner() {
  const searchParams = useSearchParams();
  // When the user lands here from `/join/<token>` we carry the
  // invite token in the query so it survives the signup → email
  // verification → redirect round-trip. `emailRedirectTo` below
  // points back at /join/<token> so the user lands on the redeem
  // step after verifying instead of being dropped on /dashboard.
  const inviteToken = searchParams.get("invite");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    // If we have an invite token, point Supabase's verification
    // email back at the join page so the user can accept after
    // verifying. Without a token, Supabase uses its default
    // redirect (the app root).
    const emailRedirectTo = inviteToken
      ? `${window.location.origin}/join/${encodeURIComponent(inviteToken)}`
      : undefined;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        ...(emailRedirectTo ? { emailRedirectTo } : {}),
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="w-full max-w-md border-border bg-card">
          <CardHeader className="items-center text-center">
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl text-foreground">
              Check your email
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              We&apos;ve sent a confirmation link to{" "}
              <span className="text-foreground">{email}</span>. Please check your
              inbox and click the link to verify your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href={
                inviteToken
                  ? `/login?invite=${encodeURIComponent(inviteToken)}`
                  : "/login"
              }
            >
              <Button
                variant="outline"
                className="w-full border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                Back to sign in
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-4 py-8">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Top telemetry badge */}
        <div className="mb-4 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,242,254,0.8)] animate-pulse" />
            <span className="text-primary font-bold">DIGITIZESTUDIO</span>
            <span>/// PROVISION NODE</span>
          </div>
          <span className="text-muted-foreground/80">PORT: 3103</span>
        </div>

        <Card className="border-border/80 bg-card/90 shadow-[0_0_35px_rgba(0,242,254,0.06)] backdrop-blur-xl">
          <CardHeader className="items-center text-center pb-4">
            <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 shadow-[0_0_16px_rgba(0,242,254,0.3)]">
              {inviteToken ? (
                <UsersRound className="h-7 w-7 text-primary" />
              ) : (
                <MessageSquare className="h-7 w-7 text-primary" />
              )}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            </div>
            <CardTitle className="text-xl font-bold tracking-tight text-foreground font-mono">
              {inviteToken ? "JOIN WORKSPACE" : "PROVISION NEW OPERATOR"}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground font-mono">
              {inviteToken
                ? "Verify credentials, then accept node invitation."
                : "Register operator account for DigitizeStudio WhatsApp CRM"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="flex flex-col gap-4">
              {error && (
                <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs font-mono text-red-400">
                  ERROR: {error}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="fullName" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  OPERATOR FULL NAME
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Alex Mercer"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="h-10 border-border bg-muted/40 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  COMMUNICATION EMAIL
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="operator@digitizestudio.qd.je"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 border-border bg-muted/40 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  PASSKEY (MIN 6 CHARS)
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-10 border-border bg-muted/40 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="confirmPassword" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  CONFIRM PASSKEY
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="h-10 border-border bg-muted/40 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-2 h-11 w-full bg-primary font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[0_0_15px_rgba(0,242,254,0.35)] hover:bg-primary-hover disabled:opacity-50 transition-all"
              >
                {loading ? "PROVISIONING..." : "REGISTER OPERATOR NODE"}
              </Button>
            </form>

            <div className="mt-5 border-t border-border/60 pt-4 text-center">
              <p className="font-mono text-xs text-muted-foreground">
                Already registered?{" "}
                <Link
                  href={
                    inviteToken
                      ? `/login?invite=${encodeURIComponent(inviteToken)}`
                      : "/login"
                  }
                  className="font-semibold text-primary hover:underline"
                >
                  Authenticate
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Monorepo Quick Switcher links */}
        <div className="mt-4 flex items-center justify-center gap-3 font-mono text-[11px] text-muted-foreground">
          <a
            href="http://localhost:3100"
            className="hover:text-primary transition-colors"
          >
            ← Portfolio (:3100)
          </a>
          <span>•</span>
          <a
            href="http://localhost:3101"
            className="hover:text-primary transition-colors"
          >
            CMS (:3101)
          </a>
          <span>•</span>
          <a
            href="http://localhost:3102"
            className="hover:text-primary transition-colors"
          >
            Dashboard (:3102)
          </a>
        </div>
      </div>
    </div>
  );
}
