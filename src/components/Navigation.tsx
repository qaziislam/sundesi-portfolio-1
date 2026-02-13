"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/music", label: "Music", icon: "🎵" },
  { href: "/videos", label: "Videos", icon: "📺" },
  { href: "/contact", label: "Contact", icon: "📧" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [startOpen, setStartOpen] = useState(false);
  const [time, setTime] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setStartOpen(false);
      }
    }
    if (startOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [startOpen]);

  const currentPage = links.find((l) => l.href === pathname);

  return (
    <nav className="win95-taskbar fixed bottom-0 left-0 z-50 w-full">
      <div className="flex items-center gap-1 w-full">
        {/* Start Button */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setStartOpen(!startOpen)}
            className={`win95-button flex items-center gap-1 font-bold text-sm px-2 py-0 min-w-0 h-[28px] ${
              startOpen ? "win95-button-pressed" : ""
            }`}
          >
            <span className="text-base leading-none">⊞</span>
            <span>Start</span>
          </button>

          {/* Start Menu */}
          {startOpen && (
            <div className="win95-start-menu absolute bottom-[32px] left-0 flex">
              <div className="win95-start-menu-sidebar">
                <span>SUNDESI</span>
              </div>
              <div className="flex-1 py-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setStartOpen(false)}
                    className="win95-start-menu-item"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
                <div className="border-t border-[#808080] mx-1 my-1" />
                <div className="win95-start-menu-item">
                  <span>💿</span>
                  <span className="text-xs text-[#404040]">&copy; {new Date().getFullYear()} SUNDESI</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="w-px h-[24px] border-l border-[#808080] border-r border-r-white mx-1" />

        {/* Active page button */}
        {currentPage && (
          <button className="win95-button win95-button-pressed flex items-center gap-1 text-sm px-2 py-0 min-w-0 h-[28px]">
            <span>{currentPage.icon}</span>
            <span>{currentPage.label}</span>
          </button>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Clock */}
        <div className="win95-inset px-3 py-0.5 text-xs flex items-center h-[22px]">
          <span className="text-[var(--win95-black)] bg-[var(--win95-gray)]">{time}</span>
        </div>
      </div>
    </nav>
  );
}
