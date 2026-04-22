import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";

const displayFont = Playfair_Display({
  variable: "--font-display-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altecho Driving School | Premium Driving Lessons in Lagos",
  description: "Master the art of driving with Altecho Driving School. FRSC certified instructors, premium training programs, and exceptional service in Lagos, Nigeria.",
  keywords: "driving school, driving lessons, Lagos, Ipaja, learn to drive, defensive driving, premium driving school",
  openGraph: {
    title: "Altecho Driving School | Premium Driving Lessons in Lagos",
    description: "Master the art of driving with Altecho Driving School. FRSC certified instructors and premium training.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505]">{children}<AIChatWidget /></body>
    </html>
  );
}
