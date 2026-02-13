export default function ContactContent() {
  return (
    <>
      <div className="text-center p-4">
        <div className="text-4xl mb-3">ℹ️</div>
        <h3 className="text-2xl font-bold mb-2">Let&apos;s Connect</h3>
        <p className="text-sm mb-6">
          For bookings, collaborations, or just to say hello &mdash; reach out through any of the platforms below.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Spotify", "SoundCloud", "Instagram", "YouTube"].map((platform) => (
            <a key={platform} href="#" className="win95-button text-sm">
              {platform}
            </a>
          ))}
        </div>
      </div>
      <div className="win95-status-bar flex gap-2">
        <span className="win95-status-bar-panel flex-1">4 connection(s) available</span>
      </div>
    </>
  );
}
