import Image from "next/image";

const tracks = [
  { title: "Midnight Drive", year: "2025", duration: "3:42", img: "https://picsum.photos/seed/track1/400/400", evidence: "EVIDENCE-A-001" },
  { title: "Neon Lights", year: "2025", duration: "4:15", img: "https://picsum.photos/seed/track2/400/400", evidence: "EVIDENCE-A-002" },
  { title: "City Rain", year: "2024", duration: "3:58", img: "https://picsum.photos/seed/track3/400/400", evidence: "EVIDENCE-A-003" },
  { title: "Golden Hour", year: "2024", duration: "4:30", img: "https://picsum.photos/seed/track4/400/400", evidence: "EVIDENCE-A-004" },
];

export default function MusicContent() {
  return (
    <>
      <div className="mb-3">
        <h3 className="text-2xl font-bold">Confiscated Audio Evidence</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tracks.map((track) => (
          <div key={track.title} className="win95-window relative">
            <div className="win95-title-bar text-xs">
              <span>{track.evidence}</span>
            </div>
            <div className="p-1">
              <div className="win95-inset relative aspect-square">
                <Image
                  src={track.img}
                  alt={track.title}
                  fill
                  className="object-cover"
                />
                <div className="confiscated-stamp">CONFISCATED</div>
              </div>
              <div className="mt-2 px-1">
                <p className="font-bold text-sm">{track.title}</p>
                <p className="text-xs text-[#404040]">Seized: {track.year} | Source: Unknown</p>
                <p className="text-xs text-[#808080]">{track.duration}</p>
              </div>
              <div className="mt-2 text-center">
                <button className="win95-button text-xs min-w-0 px-3">
                  ▶ Analyze
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="win95-status-bar flex gap-2 mt-4">
        <span className="win95-status-bar-panel flex-1">{tracks.length} audio evidence file(s)</span>
        <span className="win95-status-bar-panel">Evidence Locker</span>
      </div>
    </>
  );
}
