const entries = [
  {
    day: "Day 1",
    date: "2025-01-01",
    text: "Initial report filed. Anonymous source reports a masked individual distributing unauthorized audio recordings across multiple platforms. Identity unknown. Codename assigned: SUNDESI.",
  },
  {
    day: "Day 5",
    date: "2025-01-05",
    text: "Four audio files intercepted from underground channels. Production quality is high — suspect has access to professional equipment. Samples traced to global sources. No fingerprints, no metadata.",
  },
  {
    day: "Day 12",
    date: "2025-01-12",
    text: "Multiple public sightings reported. Suspect appears masked in every instance. Visual intelligence feeds show growing following. Name origin confirmed: Hindi 'Sandesh' (सन्देश) = message. Suspect sees themselves as a messenger.",
  },
  {
    day: "Day 20",
    date: "2025-01-20",
    text: "Surveillance footage recovered but inconclusive. Suspect operates in shadows. Informant network activated but no leads on true identity. Dacoit-inspired aesthetic confirmed — Chambal valley influence.",
  },
  {
    day: "Ongoing",
    date: "——",
    text: "Investigation continues. Who is Sundesi? The message spreads faster than we can trace it. Every intercepted recording only raises more questions. This case is far from closed.",
  },
];

export default function CaseNotes() {
  return (
    <>
      <div className="case-file-header mb-3">
        FIELD NOTES — Inspector Devki Sharma
      </div>
      <div className="win95-inset p-3 bg-[#FFFFF0]" style={{ fontFamily: "monospace" }}>
        {entries.map((entry, i) => (
          <div key={i} className={i < entries.length - 1 ? "mb-4 pb-4 border-b border-dashed border-[#C0C0C0]" : "mb-1"}>
            <div className="flex items-center gap-2 mb-1">
              <span className="evidence-tag">{entry.day}</span>
              <span className="text-xs text-[#808080]">{entry.date}</span>
            </div>
            <p className="text-sm leading-relaxed">{entry.text}</p>
          </div>
        ))}
      </div>
      <div className="win95-status-bar flex gap-2 mt-3">
        <span className="win95-status-bar-panel flex-1">CASE #SD-2025-0113 — Field Notes</span>
        <span className="win95-status-bar-panel">CONFIDENTIAL</span>
      </div>
    </>
  );
}
