"use client";

import Link from "next/link";
import SystemTray from "./SystemTray";

const windowLabels: Record<string, string> = {
  music: "Music",
  videos: "Videos",
  contact: "Contact",
};

interface TopNavProps {
  openWindows?: string[];
  onWindowClick?: (id: string) => void;
}

export default function TopNav({ openWindows = [], onWindowClick }: TopNavProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-2 px-3 h-[44px] border-b-2 border-b-[#404040] border-t-2 border-t-white bg-[#C0C0C0]/85 backdrop-blur-sm">
      <Link href="/" className="win95-button text-base px-5 py-1 h-[32px] flex items-center font-bold mr-auto gap-2">
        <span className="inline-flex items-center justify-center w-5 h-5 bg-[#000080] text-white text-xs font-bold leading-none">S</span>
        SUNDESI
      </Link>
      {openWindows.map((id) => (
        <button
          key={id}
          className="win95-button win95-button-pressed text-base px-5 py-1 h-[32px] flex items-center"
          onClick={() => onWindowClick?.(id)}
        >
          {windowLabels[id] || id}
        </button>
      ))}
      <SystemTray />
    </div>
  );
}
