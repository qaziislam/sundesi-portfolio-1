import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const w95fa = localFont({
  src: "./fonts/W95FA.woff2",
  variable: "--font-w95fa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CASE #SD-2025-0113 | Criminal Investigation Department",
  description: "CID Workstation — Active investigation into the masked artist known as SUNDESI. All evidence classified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${w95fa.variable} ${w95fa.className}`}>
        <div className="min-h-screen bg-[#1B2A4A] text-black">
          {children}
        </div>
      </body>
    </html>
  );
}
