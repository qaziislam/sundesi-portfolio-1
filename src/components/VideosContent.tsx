const videos = [
  "Midnight Drive - Official Video",
  "Neon Lights - Lyric Video",
  "City Rain - Visualizer",
  "Golden Hour - Live Session",
  "Studio Vlog #1",
  "Behind the Scenes - Album Shoot",
];

export default function VideosContent() {
  return (
    <>
      <div className="mb-3">
        <h3 className="text-2xl font-bold">Videos</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((title) => (
          <div key={title} className="win95-window">
            <div className="win95-title-bar text-xs">
              <span>{title}</span>
            </div>
            <div className="p-1">
              <div className="win95-inset relative aspect-video flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-[#C0C0C0]">
                  <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-xs">Coming Soon</span>
                </div>
              </div>
              <div className="mt-2 px-1">
                <p className="font-bold text-sm">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="win95-status-bar flex gap-2 mt-4">
        <span className="win95-status-bar-panel flex-1">{videos.length} video(s)</span>
        <span className="win95-status-bar-panel">Media Player</span>
      </div>
    </>
  );
}
