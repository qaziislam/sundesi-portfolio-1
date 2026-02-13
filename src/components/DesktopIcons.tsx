"use client";

import { useState } from "react";

function Win95Folder() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6 L1 4 L12 4 L14 6" fill="#FFC850" stroke="#000" strokeWidth="1" />
      <rect x="1" y="6" width="29" height="21" fill="#FFC850" stroke="#000" strokeWidth="1" />
      <line x1="2" y1="7" x2="2" y2="26" stroke="#FFE8A0" strokeWidth="1" />
      <line x1="2" y1="7" x2="29" y2="7" stroke="#FFE8A0" strokeWidth="1" />
      <line x1="29" y1="7" x2="29" y2="26" stroke="#C09020" strokeWidth="1" />
      <line x1="2" y1="26" x2="29" y2="26" stroke="#C09020" strokeWidth="1" />
    </svg>
  );
}

function Win95UnknownFile() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 1 L22 1 L28 7 L28 30 L4 30 Z" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
      <path d="M22 1 L22 7 L28 7" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
      <text x="16" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#000080">?</text>
    </svg>
  );
}

function Win95EvidenceFile() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 1 L22 1 L28 7 L28 30 L4 30 Z" fill="#FFFFF0" stroke="#000" strokeWidth="1" />
      <path d="M22 1 L22 7 L28 7" fill="#C0C0C0" stroke="#000" strokeWidth="1" />
      {/* Red EVIDENCE stamp */}
      <rect x="6" y="14" width="20" height="8" fill="none" stroke="#CC0000" strokeWidth="1" rx="1" />
      <text x="16" y="20.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fontWeight="bold" fill="#CC0000">EVIDENCE</text>
    </svg>
  );
}

function Win95ClassifiedFolder() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6 L1 4 L12 4 L14 6" fill="#8B4513" stroke="#000" strokeWidth="1" />
      <rect x="1" y="6" width="29" height="21" fill="#8B4513" stroke="#000" strokeWidth="1" />
      <line x1="2" y1="7" x2="2" y2="26" stroke="#A0522D" strokeWidth="1" />
      <line x1="2" y1="7" x2="29" y2="7" stroke="#A0522D" strokeWidth="1" />
      <line x1="29" y1="7" x2="29" y2="26" stroke="#6B3410" strokeWidth="1" />
      <line x1="2" y1="26" x2="29" y2="26" stroke="#6B3410" strokeWidth="1" />
      {/* Classified label */}
      <rect x="5" y="13" width="21" height="7" fill="#000" rx="1" />
      <text x="15.5" y="18.5" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fontWeight="bold" fill="#FFD700">SECRET</text>
    </svg>
  );
}

const icons = [
  { id: "water", label: "EVIDENCE_001.mov", type: "evidence" as const },
  { id: "music", label: "Audio Evidence", type: "folder" as const },
  { id: "videos", label: "Surveillance", type: "folder" as const },
  { id: "contact", label: "Informant Network", type: "folder" as const },
  { id: "suspect", label: "Who is Sundesi?", type: "unknown" as const },
  { id: "notes", label: "Case Notes", type: "classified" as const },
];

function getIcon(type: string) {
  switch (type) {
    case "evidence": return <Win95EvidenceFile />;
    case "unknown": return <Win95UnknownFile />;
    case "classified": return <Win95ClassifiedFolder />;
    default: return <Win95Folder />;
  }
}

interface DesktopIconsProps {
  onOpen: (id: string) => void;
}

export default function DesktopIcons({ onOpen }: DesktopIconsProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div
      className="flex flex-wrap gap-6 p-4 md:px-8"
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
          {getIcon(icon.type)}
          <span className="text-xs mt-1">{icon.label}</span>
        </button>
      ))}
    </div>
  );
}
