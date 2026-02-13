import type { Metadata } from "next";
import Window from "@/components/Window";
import TopNav from "@/components/TopNav";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | SUNDESI",
};

export default function ContactPage() {
  return (
    <>
      <TopNav />
      <div className="p-4 md:p-8 pt-[48px] flex items-center justify-center min-h-[calc(100vh-48px)]">
        <Window title="Contact - SUNDESI" className="max-w-md w-full">
          <ContactContent />
        </Window>
      </div>
    </>
  );
}
