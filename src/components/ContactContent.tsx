const channels = [
  { label: "Audio Surveillance Channel", platform: "Spotify" },
  { label: "Underground Network Monitor", platform: "SoundCloud" },
  { label: "Visual Intelligence Feed", platform: "Instagram" },
  { label: "Public Activity Monitor", platform: "YouTube" },
];

export default function ContactContent() {
  return (
    <>
      <div className="text-center p-4">
        <div className="text-4xl mb-3">🕵️</div>
        <h3 className="text-2xl font-bold mb-2">Submit Anonymous Tips</h3>
        <p className="text-sm mb-6">
          If you have information about Sundesi&apos;s whereabouts, contact through secure channels. All tips remain confidential.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {channels.map((ch) => (
            <a key={ch.platform} href="#" className="win95-button text-sm" title={ch.platform}>
              {ch.label}
            </a>
          ))}
        </div>
      </div>
      <div className="win95-status-bar flex gap-2">
        <span className="win95-status-bar-panel flex-1">4 active surveillance channels</span>
      </div>
    </>
  );
}
