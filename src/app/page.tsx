"use client";

import { useState } from "react";
import DesktopIcons from "@/components/DesktopIcons";
import TopNav from "@/components/TopNav";
import Window from "@/components/Window";
import MusicContent from "@/components/MusicContent";
import VideosContent from "@/components/VideosContent";
import ContactContent from "@/components/ContactContent";

const windowConfig: Record<string, { title: string; content: React.ReactNode; className: string }> = {
  music: { title: "Music - SUNDESI", content: <MusicContent />, className: "max-w-5xl w-full" },
  videos: { title: "Videos - SUNDESI", content: <VideosContent />, className: "max-w-5xl w-full" },
  contact: { title: "Contact - SUNDESI", content: <ContactContent />, className: "max-w-md w-full" },
};

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>(["water"]);
  const [zMap, setZMap] = useState<Record<string, number>>({ water: 1 });
  const [zCounter, setZCounter] = useState(2);

  const bringToFront = (id: string) => {
    setZMap((prev) => ({ ...prev, [id]: zCounter }));
    setZCounter((c) => c + 1);
  };

  const openWindow = (id: string) => {
    setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]));
    bringToFront(id);
  };

  const closeWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((w) => w !== id));
  };

  return (
    <>
      <TopNav openWindows={openWindows} onWindowClick={openWindow} />
      <div className="pt-[48px] min-h-screen relative">
        <DesktopIcons onOpen={openWindow} />

        {openWindows.map((id) => {
          if (id === "water") {
            return (
              <div key={id} className="win95-desktop-overlay" style={{ zIndex: 40 + (zMap[id] || 0) }} onMouseDown={() => bringToFront(id)}>
                <Window title="Sundesi: The Messenger" className="max-w-2xl w-full" onClose={() => closeWindow(id)}>
                  <div className="win95-inset">
                    <video
                      src="/hero-video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full block"
                    />
                  </div>
                </Window>
              </div>
            );
          }
          const config = windowConfig[id];
          if (!config) return null;
          return (
            <div key={id} className="win95-desktop-overlay" style={{ zIndex: 40 + (zMap[id] || 0) }} onMouseDown={() => bringToFront(id)}>
              <Window title={config.title} className={config.className} onClose={() => closeWindow(id)}>
                {config.content}
              </Window>
            </div>
          );
        })}
      </div>
    </>
  );
}
