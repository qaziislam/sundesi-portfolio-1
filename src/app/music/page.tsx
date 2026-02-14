import type { Metadata } from "next";
import Window from "@/components/Window";
import TopNav from "@/components/TopNav";
import MusicContent from "@/components/MusicContent";

export const metadata: Metadata = {
  title: "Audio Evidence | CASE #SD-2025-0113",
};

export default function MusicPage() {
  return (
    <>
      <TopNav />
      <div className="p-4 md:p-8 pt-[48px]">
        <Window title="Evidence Locker - Audio Files [CASE #SD-2025-0113]" className="max-w-5xl mx-auto">
          <MusicContent />
        </Window>
      </div>
    </>
  );
}
