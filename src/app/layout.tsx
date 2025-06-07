import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elden Ring - The Lands Between Guide",
  description: "Explore the classes, weapons, and lore of Elden Ring. Your guide to The Lands Between.",
  keywords: ["elden ring", "classes", "weapons", "fromsoft", "dark souls", "guides"],
  authors: [{ name: "Elden Ring Fan" }],
  creator: "Elden Ring Fan",
  openGraph: {
    title: "Elden Ring - The Lands Between Guide",
    description: "Explore the classes, weapons, and lore of Elden Ring",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased bg-background text-foreground`}
      >

        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
