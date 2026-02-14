"use client";

import { useState, useEffect } from "react";

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [dots, setDots] = useState("");
  const [phase, setPhase] = useState<"typing" | "authenticating" | "done">("typing");

  useEffect(() => {
    if (phase !== "typing") return;
    const maxDots = 8;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setDots("•".repeat(count));
      if (count >= maxDots) {
        clearInterval(interval);
        setPhase("authenticating");
      }
    }, 250);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase !== "authenticating") return;
    const timeout = setTimeout(() => {
      setPhase("done");
    }, 1200);
    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "done") return;
    const timeout = setTimeout(onLogin, 600);
    return () => clearTimeout(timeout);
  }, [phase, onLogin]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#000080] flex items-center justify-center">
      <div className="win95-window" style={{ width: 420 }}>
        <div className="win95-title-bar">
          <span>CID Workstation — Secure Login</span>
        </div>
        <div className="p-4">
          <div className="text-center mb-4">
            <div className="text-xs tracking-widest text-[#808080] mb-1">GOVERNMENT OF INDIA</div>
            <div className="text-base font-bold">CRIMINAL INVESTIGATION DEPARTMENT</div>
            <div className="text-xs text-[#808080] mt-1">SECURE TERMINAL v3.1.4</div>
          </div>

          <div className="win95-inset p-3 mb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-[#C0C0C0] w-20">Username:</span>
              <span className="text-sm text-[#00FF00] font-bold">Inspector Devki</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#C0C0C0] w-20">Password:</span>
              <span className="text-sm text-[#00FF00] font-bold">{dots}<span className="animate-pulse">_</span></span>
            </div>
          </div>

          <div className="text-center text-xs">
            {phase === "typing" && (
              <span className="text-[#404040]">Entering credentials...</span>
            )}
            {phase === "authenticating" && (
              <span className="text-[#404040]">Authenticating... Please wait.</span>
            )}
            {phase === "done" && (
              <span className="text-[#008000] font-bold">ACCESS GRANTED — Loading workstation...</span>
            )}
          </div>

          <div className="win95-status-bar mt-3 text-center text-xs">
            CASE #SD-2025-0113 — Active Investigation
          </div>
        </div>
      </div>
    </div>
  );
}
