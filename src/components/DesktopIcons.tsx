"use client";

import { useState } from "react";

function Win95Folder() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Folder tab */}
      <path d="M1 6 L1 4 L12 4 L14 6" fill="#FFC850" stroke="#000" strokeWidth="1" />
      {/* Folder body */}
      <rect x="1" y="6" width="29" height="21" fill="#FFC850" stroke="#000" strokeWidth="1" />
      {/* Highlight edges */}
      <line x1="2" y1="7" x2="2" y2="26" stroke="#FFE8A0" strokeWidth="1" />
      <line x1="2" y1="7" x2="29" y2="7" stroke="#FFE8A0" strokeWidth="1" />
      {/* Shadow edges */}
      <line x1="29" y1="7" x2="29" y2="26" stroke="#C09020" strokeWidth="1" />
      <line x1="2" y1="26" x2="29" y2="26" stroke="#C09020" strokeWidth="1" />
    </svg>
  );
}

function Win95UnknownFile() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Page body */}
      <path d="M4 1 L22 1 L28 7 L28 30 L4 30 Z" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
      {/* Dog ear */}
      <path d="M22 1 L22 7 L28 7" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
      {/* Question mark */}
      <text x="16" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#000080">?</text>
    </svg>
  );
}

const icons = [
  { id: "water", label: "Water.mov", type: "unknown" as const },
  { id: "music", label: "Music", type: "folder" as const },
  { id: "videos", label: "Videos", type: "folder" as const },
  { id: "contact", label: "Contact", type: "folder" as const },
];

interface DesktopIconsProps {
  onOpen: (id: string) => void;
}

export default function DesktopIcons({ onOpen }: DesktopIconsProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      className="flex gap-6 p-4 md:px-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) setSelected(null);
      }}
    >
      {icons.map((icon) => (
        <button
          key={icon.id}
          className={`win95-desktop-icon ${selected === icon.id ? "win95-desktop-icon-selected" : ""}`}
          onClick={() => setSelected(icon.id)}
          onDoubleClick={() => onOpen(icon.id)}
        >
          {icon.type === "unknown" ? <Win95UnknownFile /> : <Win95Folder />}
          <span className="text-xs mt-1">{icon.label}</span>
        </button>
      ))}
    </div>
  );
}
