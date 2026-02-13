import type { Metadata } from "next";
import Window from "@/components/Window";
import TopNav from "@/components/TopNav";
import MusicContent from "@/components/MusicContent";

export const metadata: Metadata = {
  title: "Music | SUNDESI",
};

export default function MusicPage() {
  return (
    <>
      <TopNav />
      <div className="p-4 md:p-8 pt-[48px]">
        <Window title="Music - SUNDESI" className="max-w-5xl mx-auto">
          <MusicContent />
        </Window>
      </div>
    </>
  );
}
