import type { Metadata } from "next";
import Window from "@/components/Window";
import TopNav from "@/components/TopNav";
import VideosContent from "@/components/VideosContent";

export const metadata: Metadata = {
  title: "Surveillance Archive | CASE #SD-2025-0113",
};

export default function VideosPage() {
  return (
    <>
      <TopNav />
      <div className="p-4 md:p-8 pt-[48px]">
        <Window title="Surveillance Archive - Video Evidence [CLASSIFIED]" className="max-w-5xl mx-auto">
          <VideosContent />
        </Window>
      </div>
    </>
  );
}
