"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
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
import { MessageSquare, UsersRound } from "lucide-react";

// `useSearchParams` opts the component out of static prerendering
// unless it sits under a Suspense boundary. We split the form into
// a child component so the outer page can prerender the chrome
// (background, card frame) while the form hydrates with the query
// string on the client.
export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  );
}

function LoginPageInner() {
  const searchParams = useSearchParams();
  // Forwarded from `/join/<token>` when the visitor already has an
  // account. After a successful sign-in we send them to the join
  // page to accept rather than to /dashboard.
  const inviteToken = searchParams.get("invite");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (inviteToken) {
      router.push(`/join/${encodeURIComponent(inviteToken)}`);
    } else {
      router.push("/dashboard");
    }
  };

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
            <span>/// AUTH GATEWAY</span>
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
              {inviteToken ? "AUTHENTICATE INVITE" : "WHATSAPP CRM /// SIGN IN"}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground font-mono">
              {inviteToken
                ? "Verify credentials to accept workspace invitation."
                : "Enter authorized telemetry credentials for digitizestudio.qd.je"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              {error && (
                <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs font-mono text-red-400">
                  ERROR: {error}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  OPERATOR IDENTITY (EMAIL)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@digitizestudio.qd.je"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-10 border-border bg-muted/40 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    PASSKEY (PASSWORD)
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="font-mono text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    Reset?
                  </Link>
                </div>
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

              <Button
                type="submit"
                disabled={loading}
                className="mt-2 h-11 w-full bg-primary font-mono text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[0_0_15px_rgba(0,242,254,0.35)] hover:bg-primary-hover disabled:opacity-50 transition-all"
              >
                {loading ? "INITIALIZING SESSION..." : "AUTHENTICATE NODE"}
              </Button>
            </form>

            <div className="mt-5 border-t border-border/60 pt-4 text-center">
              <p className="font-mono text-xs text-muted-foreground">
                No active node?{" "}
                <Link
                  href={
                    inviteToken
                      ? `/signup?invite=${encodeURIComponent(inviteToken)}`
                      : "/signup"
                  }
                  className="font-semibold text-primary hover:underline"
                >
                  Request Provisioning
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
