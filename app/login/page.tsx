"use client";

import { useState } from "react";

const PRIMARY = "#4B3FF7";
const PRIMARY_HOVER = "#3d33cc";

export default function LoginBlock() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f5f5ff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>

      {/* Logo mark */}
      <div style={{ marginBottom: "1.25rem", textAlign: "center" }}>
        <div style={{
          width: 48, height: 48,
          background: PRIMARY,
          borderRadius: "12px",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 1rem",
        }}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M4 13 C4 7, 10 3, 13 3 C16 3, 22 7, 22 13 C22 19, 16 23, 13 23 C10 23, 4 19, 4 13 Z" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M8 13 C8 10, 10 8, 13 8 C16 8, 18 10, 18 13" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <h1 style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "#111",
          margin: 0,
          letterSpacing: "-0.02em",
        }}>Sign in to your account</h1>
      </div>

      {/* Card */}
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid #e8e8f0",
        padding: "2rem",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 4px 24px rgba(75,63,247,0.06)",
      }}>
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#222",
              marginBottom: "6px",
              fontFamily: "system-ui, sans-serif",
            }}>Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{
                width: "100%",
                height: "42px",
                padding: "0 12px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "14px",
                fontFamily: "system-ui, sans-serif",
                color: "#111",
                background: "#fff",
                boxSizing: "border-box",
                outline: "none",
                transition: "border-color 0.15s",
              }}
              onFocus={e => e.target.style.borderColor = PRIMARY}
              onBlur={e => e.target.style.borderColor = "#ddd"}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{
              display: "block",
              fontSize: "14px",
              fontWeight: "500",
              color: "#222",
              marginBottom: "6px",
              fontFamily: "system-ui, sans-serif",
            }}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  height: "42px",
                  padding: "0 40px 0 12px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                  fontFamily: "system-ui, sans-serif",
                  color: "#111",
                  background: "#fff",
                  boxSizing: "border-box",
                  outline: "none",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => e.target.style.borderColor = PRIMARY}
                onBlur={e => e.target.style.borderColor = "#ddd"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute", right: "10px", top: "50%",
                  transform: "translateY(-50%)",
                  background: "none", border: "none", cursor: "pointer",
                  color: "#999", fontSize: "13px", fontFamily: "system-ui, sans-serif",
                  padding: "0",
                }}
              >{showPassword ? "Hide" : "Show"}</button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}>
            <label style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontSize: "14px", color: "#444",
              fontFamily: "system-ui, sans-serif",
              cursor: "pointer",
            }}>
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                style={{
                  width: "16px", height: "16px",
                  accentColor: PRIMARY,
                  cursor: "pointer",
                }}
              />
              Remember me
            </label>
            <a href="#" style={{
              fontSize: "14px",
              color: PRIMARY,
              textDecoration: "none",
              fontFamily: "system-ui, sans-serif",
              fontWeight: "500",
            }}>Forgot password?</a>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              height: "44px",
              background: loading ? "#7b72f5" : PRIMARY,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "500",
              fontFamily: "system-ui, sans-serif",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.15s",
              letterSpacing: "-0.01em",
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.background = PRIMARY_HOVER; }}
            onMouseLeave={e => { if (!loading) e.currentTarget.style.background = PRIMARY; }}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>

          {/* Divider */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: "12px", margin: "1.5rem 0",
          }}>
            <div style={{ flex: 1, height: "1px", background: "#eee" }} />
            <span style={{ fontSize: "13px", color: "#aaa", fontFamily: "system-ui, sans-serif" }}>Or continue with</span>
            <div style={{ flex: 1, height: "1px", background: "#eee" }} />
          </div>

          {/* Social buttons */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[
              {
                label: "Google",
                icon: <svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/></svg>
              },
              {
                label: "GitHub",
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="#111"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "8px", height: "42px",
                  background: "#fff", border: "1px solid #e0e0e0",
                  borderRadius: "8px", fontSize: "14px", fontWeight: "500",
                  fontFamily: "system-ui, sans-serif",
                  color: "#222", cursor: "pointer",
                  transition: "border-color 0.15s, background 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#fafafa"; e.currentTarget.style.borderColor = "#ccc"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e0e0e0"; }}
              >
                {icon} {label}
              </button>
            ))}
          </div>

        </form>
      </div>

      {/* Footer */}
      <p style={{
        marginTop: "1.5rem",
        fontSize: "14px",
        color: "#888",
        fontFamily: "system-ui, sans-serif",
      }}>
        Not a member?{" "}
        <a href="#" style={{ color: PRIMARY, fontWeight: "500", textDecoration: "none" }}>
          Start a 14 day free trial
        </a>
      </p>

    </div>
  );
}
