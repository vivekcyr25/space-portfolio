import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivek Sharma | Full Stack Developer Portfolio",
  description: "Futuristic Portfolio and Student Performance Dashboard by Vivek Sharma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${syne.variable} ${spaceGrotesk.variable} font-sans bg-[#030014] text-white overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
