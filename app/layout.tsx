import type { Metadata } from "next";
import { DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bambinos | Premium Kids Sensory & Messy Play Zone",
  description: "Discover the magic of sensory play at Bambinos. Sand, water, art, light, music & texture zones for children. Book sessions, parties & workshops. Trusted by parents.",
  keywords: "sensory play, messy play, kids activities, children play center, sensory gym, bambinos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fredoka.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
