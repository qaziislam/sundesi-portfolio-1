"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type ActivePopup = "clock" | "network" | null;

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const rows: (number | null)[][] = [];
  let row: (number | null)[] = new Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) {
    row.push(d);
    if (row.length === 7) {
      rows.push(row);
      row = [];
    }
  }
  if (row.length > 0) {
    while (row.length < 7) row.push(null);
    rows.push(row);
  }
  return rows;
}

const SOCIAL_LINKS = [
  { label: "Spotify", href: "https://open.spotify.com/artist/5uNJsvLTSFN0WkGJthx3AF" },
  { label: "SoundCloud", href: "https://soundcloud.com/sundesi" },
  { label: "Instagram", href: "https://instagram.com/sundesimusic" },
  { label: "YouTube", href: "https://youtube.com/@sundesi" },
];

export default function SystemTray() {
  const [activePopup, setActivePopup] = useState<ActivePopup>(null);
  const [time, setTime] = useState<string>("");
  const trayRef = useRef<HTMLDivElement>(null);

  // Clock tick
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 || 12;
      setTime(`${h12}:${m.toString().padStart(2, "0")} ${ampm}`);
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  // Close popup on outside click (defer listener to avoid catching the opening click)
  useEffect(() => {
    if (!activePopup) return;
    const handler = (e: MouseEvent) => {
      if (trayRef.current && !trayRef.current.contains(e.target as Node)) {
        setActivePopup(null);
      }
    };
    // Use requestAnimationFrame so the listener isn't active during the current click
    const raf = requestAnimationFrame(() => {
      document.addEventListener("mousedown", handler);
    });
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousedown", handler);
    };
  }, [activePopup]);

  const toggle = useCallback((popup: ActivePopup) => {
    setActivePopup((prev) => (prev === popup ? null : popup));
  }, []);

  const now = new Date();
  const calendarRows = getCalendarDays(now.getFullYear(), now.getMonth());
  const today = now.getDate();
  const monthName = now.toLocaleString("default", { month: "long", year: "numeric" });

  return (
    <div ref={trayRef} className="relative ml-auto flex items-center">
      <div className="win95-system-tray">
        {/* Network icon */}
        <button
          className="flex items-center justify-center w-6 h-6 cursor-pointer bg-transparent border-none p-0"
          onClick={() => toggle("network")}
          aria-label="Network"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="3" width="6" height="5" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
            <rect x="9" y="3" width="6" height="5" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
            <line x1="4" y1="8" x2="4" y2="11" stroke="#000" strokeWidth="1" />
            <line x1="12" y1="8" x2="12" y2="11" stroke="#000" strokeWidth="1" />
            <line x1="4" y1="11" x2="12" y2="11" stroke="#000" strokeWidth="1" />
            <line x1="8" y1="11" x2="8" y2="13" stroke="#000" strokeWidth="1" />
            <rect x="2" y="4" width="1" height="1" fill="#00FF00" />
            <rect x="10" y="4" width="1" height="1" fill="#00FF00" />
          </svg>
        </button>

        {/* Clock */}
        <button
          className="bg-transparent border-none p-0 cursor-pointer text-xs font-inherit text-[var(--win95-black)] whitespace-nowrap"
          onClick={() => toggle("clock")}
        >
          {time}
        </button>
      </div>

      {/* Clock popup */}
      {activePopup === "clock" && (
        <div className="win95-tray-popup right-0">
          <div className="win95-window" style={{ width: 240 }}>
            <div className="win95-title-bar">
              <span>Date/Time Properties</span>
              <div className="win95-title-bar-buttons">
                <button className="win95-title-btn" onClick={() => setActivePopup(null)}>✕</button>
              </div>
            </div>
            <div className="p-2">
              <div className="text-center text-xs font-bold mb-1">{monthName}</div>
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr>
                    {DAYS.map((d) => (
                      <th key={d} className="text-center py-0.5 font-normal text-[var(--win95-dark-gray)]">
                        {d}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {calendarRows.map((row, i) => (
                    <tr key={i}>
                      {row.map((day, j) => (
                        <td
                          key={j}
                          className={`text-center py-0.5 ${
                            day === today
                              ? "bg-[var(--win95-title-bar)] text-white font-bold"
                              : ""
                          }`}
                        >
                          {day ?? ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="win95-status-bar text-center text-xs mt-2">No upcoming events</div>
            </div>
          </div>
        </div>
      )}

      {/* Network popup */}
      {activePopup === "network" && (
        <div className="win95-tray-popup right-0">
          <div className="win95-window" style={{ width: 200 }}>
            <div className="win95-title-bar">
              <span>Network</span>
              <div className="win95-title-bar-buttons">
                <button className="win95-title-btn" onClick={() => setActivePopup(null)}>✕</button>
              </div>
            </div>
            <div className="py-1">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win95-start-menu-item"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
