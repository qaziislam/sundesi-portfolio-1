import type { Metadata } from "next";
import Window from "@/components/Window";
import TopNav from "@/components/TopNav";
import VideosContent from "@/components/VideosContent";

export const metadata: Metadata = {
  title: "Videos | SUNDESI",
};

export default function VideosPage() {
  return (
    <>
      <TopNav />
      <div className="p-4 md:p-8 pt-[48px]">
        <Window title="Videos - SUNDESI" className="max-w-5xl mx-auto">
          <VideosContent />
        </Window>
      </div>
    </>
  );
}
