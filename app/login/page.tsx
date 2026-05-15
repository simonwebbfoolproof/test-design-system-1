"use client";

import { useState, useRef, useEffect, useMemo, Fragment } from "react";
import s from "./login.module.css";

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

function Eye() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOff() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.88 5.09A10.94 10.94 0 0 1 12 5c7 0 10 7 10 7a17.35 17.35 0 0 1-3.39 4.36" />
      <path d="M6.61 6.61A17.35 17.35 0 0 0 2 12s3 7 10 7a10.94 10.94 0 0 0 5.39-1.39" />
      <path d="M14.12 14.12A3 3 0 0 1 9.88 9.88" />
      <path d="m2 2 20 20" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className={s.spin} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" />
      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Shared components                                                   */
/* ------------------------------------------------------------------ */

function LogoMark() {
  return (
    <div
      style={{ width: 48, height: 48, background: "var(--primary)", borderRadius: 12, display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      aria-hidden="true"
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 13 C4 7, 10 3, 13 3 C16 3, 22 7, 22 13 C22 19, 16 23, 13 23 C10 23, 4 19, 4 13 Z" stroke="white" strokeWidth="2" fill="none" />
        <path d="M8 13 C8 10, 10 8, 13 8 C16 8, 18 10, 18 13" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

function MailCheckGlyph() {
  return (
    <div
      style={{ width: 56, height: 56, borderRadius: "50%", background: "rgb(75 63 247 / 0.10)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      aria-hidden="true"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10" />
        <path d="m2 7 10 6 10-6" />
        <path d="m16 19 2 2 4-4" />
      </svg>
    </div>
  );
}

const CARD_STYLE: React.CSSProperties = {
  width: "100%",
  background: "var(--card)",
  borderRadius: "var(--radius-2xl)",
  boxShadow: "0 0 0 1px oklch(0.145 0 0 / 0.08), 0 1px 2px 0 rgb(0 0 0 / 0.04), 0 12px 32px -16px rgb(15 12 50 / 0.10)",
  padding: 28,
};

/* ------------------------------------------------------------------ */
/* Screen 1 — Sign in                                                  */
/* ------------------------------------------------------------------ */

function SignInScreen({ onSuccess }: { onSuccess: (email: string) => void }) {
  const [email, setEmail]           = useState("simon@foolproof.co.uk");
  const [password, setPassword]     = useState("••••••••");
  const [remember, setRemember]     = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) { setError("Enter a valid email address."); return; }
    if (!password)            { setError("Password is required.");        return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); onSuccess(email); }, 900);
  }

  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
      <div style={{ width: "100%", maxWidth: 420, display: "flex", flexDirection: "column", alignItems: "center" }}>

        <header style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <LogoMark />
          <h1 style={{ font: "600 24px/1.2 var(--font-sans)", letterSpacing: "-0.015em", margin: "4px 0 0", color: "var(--foreground)" }}>
            Sign in to your account
          </h1>
          <p style={{ font: "14px/1.55 var(--font-sans)", color: "var(--muted-foreground)", margin: 0, maxWidth: 320 }}>
            Welcome back — enter your details to continue.
          </p>
        </header>

        <section style={CARD_STYLE}>
          <form onSubmit={submit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label htmlFor="si-email" style={{ font: "500 13px var(--font-sans)", color: "var(--foreground)", lineHeight: 1.2 }}>
                Email address
              </label>
              <input
                id="si-email"
                type="email"
                className={s.authInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
                <label htmlFor="si-password" style={{ font: "500 13px var(--font-sans)", color: "var(--foreground)", lineHeight: 1.2 }}>
                  Password
                </label>
                <a href="#" className={s.link} onClick={(e) => e.preventDefault()}>Forgot password?</a>
              </div>
              <div className={s.authInputWrap} style={{ position: "relative" }}>
                <input
                  id="si-password"
                  type={showPassword ? "text" : "password"}
                  className={s.authInput}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className={s.reveal}
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label style={{ display: "inline-flex", alignItems: "center", gap: 10, font: "13px var(--font-sans)", color: "var(--muted-foreground)", cursor: "pointer", userSelect: "none", marginTop: -2 }}>
              <input
                type="checkbox"
                className={s.checkbox}
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>Remember me for 30 days</span>
            </label>

            {error ? <div className={s.authError}>{error}</div> : null}

            <button type="submit" className={s.btnPrimary} disabled={loading}>
              {loading ? <><Spinner /> Signing in…</> : "Sign in"}
            </button>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--muted-foreground)", font: "12px var(--font-sans)", margin: "2px 0" }}>
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              <span style={{ whiteSpace: "nowrap" }}>Or continue with</span>
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>

            {/* OAuth */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <button type="button" className={s.btnOutline} onClick={(e) => e.preventDefault()}>
                <GoogleIcon /> Google
              </button>
              <button type="button" className={s.btnOutline} onClick={(e) => e.preventDefault()}>
                <GitHubIcon /> GitHub
              </button>
            </div>

          </form>
        </section>

        <p style={{ marginTop: 24, font: "14px var(--font-sans)", color: "var(--muted-foreground)", textAlign: "center" }}>
          Not a member?{" "}
          <a href="#" className={s.link} onClick={(e) => e.preventDefault()}>Start a 14 day free trial</a>
        </p>

      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Screen 2 — Email verification                                       */
/* ------------------------------------------------------------------ */

function VerifyScreen({ email, onBack, onVerified }: { email: string; onBack: () => void; onVerified: () => void }) {
  const [digits, setDigits]     = useState(["", "", "", "", "", ""]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [resentAt, setResentAt] = useState<number | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const code   = digits.join("");
  const filled = code.length === 6;

  useEffect(() => { inputs.current[0]?.focus(); }, []);

  useEffect(() => {
    if (!cooldown) return;
    const t = setTimeout(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  function setDigit(i: number, v: string) {
    const clean = v.replace(/\D/g, "").slice(-1);
    setDigits((prev) => { const n = [...prev]; n[i] = clean; return n; });
    if (clean && i < 5) inputs.current[i + 1]?.focus();
    setError("");
  }

  function onKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (digits[i]) {
        setDigits((prev) => { const n = [...prev]; n[i] = ""; return n; });
      } else if (i > 0) {
        inputs.current[i - 1]?.focus();
        setDigits((prev) => { const n = [...prev]; n[i - 1] = ""; return n; });
      }
      e.preventDefault();
    } else if (e.key === "ArrowLeft"  && i > 0) { inputs.current[i - 1]?.focus(); e.preventDefault(); }
      else if (e.key === "ArrowRight" && i < 5) { inputs.current[i + 1]?.focus(); e.preventDefault(); }
  }

  function onPaste(e: React.ClipboardEvent) {
    const text = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    e.preventDefault();
    const next = ["", "", "", "", "", ""];
    for (let k = 0; k < text.length; k++) next[k] = text[k];
    setDigits(next);
    inputs.current[Math.min(text.length, 5)]?.focus();
    setError("");
  }

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!filled) { setError("Enter all six digits."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (code === "000000") {
        setError("That code didn't match. Try again or resend.");
        setDigits(["", "", "", "", "", ""]);
        inputs.current[0]?.focus();
        return;
      }
      onVerified();
    }, 900);
  }

  function resend() {
    if (cooldown) return;
    setResentAt(Date.now());
    setCooldown(30);
    setError("");
    setDigits(["", "", "", "", "", ""]);
    inputs.current[0]?.focus();
  }

  const maskedEmail = useMemo(() => {
    const [local = "", domain = ""] = email.split("@");
    if (!domain) return email;
    return `${local.slice(0, 1)}${"•".repeat(Math.max(1, local.length - 1))}@${domain}`;
  }, [email]);

  return (
    <div style={{ width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
      <div style={{ width: "100%", maxWidth: 420, display: "flex", flexDirection: "column", alignItems: "center" }}>

        <header style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <MailCheckGlyph />
          <h1 style={{ font: "600 24px/1.2 var(--font-sans)", letterSpacing: "-0.015em", margin: "4px 0 0", color: "var(--foreground)" }}>
            Check your email
          </h1>
          <p style={{ font: "14px/1.55 var(--font-sans)", color: "var(--muted-foreground)", margin: 0, maxWidth: 320 }}>
            We sent a 6-digit code to{" "}
            <strong style={{ color: "var(--foreground)", fontWeight: 500 }}>{maskedEmail}</strong>.
            {" "}The code expires in 10 minutes.
          </p>
        </header>

        <section style={CARD_STYLE}>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

            {/* OTP row */}
            <div
              style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", padding: "4px 0 2px" }}
              onPaste={onPaste}
              role="group"
              aria-label="6-digit verification code"
            >
              {digits.map((d, i) => (
                <Fragment key={i}>
                  <input
                    ref={(el) => { inputs.current[i] = el; }}
                    className={[s.otpCell, d ? s.otpCellFilled : "", error ? s.otpCellErr : ""].filter(Boolean).join(" ")}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    autoComplete={i === 0 ? "one-time-code" : "off"}
                    value={d}
                    onChange={(e) => setDigit(i, e.target.value)}
                    onKeyDown={(e) => onKeyDown(i, e)}
                    aria-label={`Digit ${i + 1}`}
                  />
                  {i === 2 ? (
                    <span style={{ width: 10, height: 1.5, background: "var(--border)", borderRadius: 1, flexShrink: 0 }} aria-hidden="true" />
                  ) : null}
                </Fragment>
              ))}
            </div>

            {error    ? <div className={s.authError}>{error}</div> : null}
            {resentAt && !error ? <div className={s.authInfo}>A new code has been sent.</div> : null}

            <button type="submit" className={s.btnPrimary} disabled={loading || !filled}>
              {loading ? <><Spinner /> Verifying…</> : "Verify"}
            </button>

            <button type="button" className={s.btnLink} onClick={resend} disabled={!!cooldown}>
              {cooldown ? `Resend code in ${cooldown}s` : "Resend code"}
            </button>

          </form>
        </section>

        <p style={{ marginTop: 24, font: "14px var(--font-sans)", color: "var(--muted-foreground)", textAlign: "center" }}>
          <a
            href="#"
            className={s.linkMuted}
            onClick={(e) => { e.preventDefault(); onBack(); }}
          >
            <span className={s.arrow} aria-hidden="true">←</span>
            Back to sign in
          </a>
        </p>

      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Success toast                                                       */
/* ------------------------------------------------------------------ */

function SuccessOverlay({ open, onDismiss }: { open: boolean; onDismiss: () => void }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onDismiss(), 2600);
    return () => clearTimeout(t);
  }, [open, onDismiss]);

  if (!open) return null;

  return (
    <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 60 }} className={s.toastSlide}>
      <div style={{
        background: "var(--popover)", color: "var(--popover-foreground)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "0 0 0 1px var(--border), 0 8px 24px rgb(0 0 0 / 0.08)",
        padding: "12px 14px", display: "flex", gap: 12, alignItems: "flex-start", width: 300,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.55 0.18 145)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
        <div>
          <div style={{ font: "500 14px var(--font-sans)" }}>You're signed in</div>
          <div style={{ font: "13px var(--font-sans)", color: "var(--muted-foreground)", marginTop: 2 }}>
            Welcome back. Redirecting to dashboard…
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* App shell                                                           */
/* ------------------------------------------------------------------ */

export default function LoginPage() {
  const [step, setStep]           = useState<"signin" | "verify">("signin");
  const [emailAddr, setEmailAddr] = useState("");
  const [success, setSuccess]     = useState(false);
  const [direction, setDirection] = useState<"fwd" | "back">("fwd");

  function go(next: "signin" | "verify") {
    setDirection(next === "verify" ? "fwd" : "back");
    setStep(next);
  }

  return (
    <div style={{
      minHeight: "100vh",
      position: "relative",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
      background: "radial-gradient(1200px 600px at 50% -10%, rgb(75 63 247 / 0.08), transparent 70%), rgb(75 63 247 / 0.05)",
      fontFamily: "var(--font-sans)",
      color: "var(--foreground)",
      WebkitFontSmoothing: "antialiased",
    }}>
      <div
        key={step}
        className={direction === "fwd" ? s.screenFwd : s.screenBack}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {step === "signin" ? (
          <SignInScreen onSuccess={(e) => { setEmailAddr(e); go("verify"); }} />
        ) : (
          <VerifyScreen
            email={emailAddr || "you@example.com"}
            onBack={() => go("signin")}
            onVerified={() => setSuccess(true)}
          />
        )}
      </div>

      <SuccessOverlay open={success} onDismiss={() => setSuccess(false)} />

      {/* Step pill — bottom left */}
      <div
        style={{
          position: "fixed", left: 20, bottom: 20,
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 10px",
          background: "var(--background)",
          borderRadius: "var(--radius-4xl)",
          boxShadow: "0 0 0 1px oklch(0.145 0 0 / 0.08), 0 4px 12px rgb(0 0 0 / 0.04)",
          font: "500 11px var(--font-mono)",
          color: "var(--muted-foreground)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
        aria-hidden="true"
      >
        <span style={step === "signin" ? { color: "var(--foreground)" } : undefined}>Sign in</span>
        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--border)" }} />
        <span style={step === "verify" ? { color: "var(--foreground)" } : undefined}>Verify</span>
      </div>
    </div>
  );
}
