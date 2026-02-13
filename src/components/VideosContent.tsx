const videos = [
  { label: "CAM-01 — City Streets [2025-01-10]", status: "ANALYZING..." },
  { label: "CAM-02 — Downtown Area [2025-01-05]", status: "ANALYZING..." },
  { label: "CAM-03 — Undisclosed Location", status: "FEED RESTRICTED" },
  { label: "CAM-04 — Transit Hub [2025-01-15]", status: "ANALYZING..." },
  { label: "CAM-05 — Studio Perimeter", status: "FEED RESTRICTED" },
  { label: "CAM-06 — Underground Venue", status: "ANALYZING..." },
];

export default function VideosContent() {
  return (
    <>
      <div className="mb-3">
        <h3 className="text-2xl font-bold">Surveillance Archive</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.label} className="win95-window">
            <div className="win95-title-bar text-xs">
              <span>{video.label}</span>
            </div>
            <div className="p-1">
              <div className="win95-inset relative aspect-video flex items-center justify-center">
                <div className="cam-label absolute top-1 left-1">{video.label.split(" — ")[0]}</div>
                <div className="flex flex-col items-center gap-2 text-[#C0C0C0]">
                  <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-xs cam-label">{video.status}</span>
                </div>
              </div>
              <div className="mt-2 px-1">
                <p className="font-bold text-sm">{video.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="win95-status-bar flex gap-2 mt-4">
        <span className="win95-status-bar-panel flex-1">{videos.length} surveillance file(s)</span>
        <span className="win95-status-bar-panel">Surveillance Archive</span>
      </div>
    </>
  );
}
