"use client";

import { useState } from "react";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className="dark">
      <head>
        <title>Elden Ring - The Lands Between Guide</title>
        <meta name="description" content="Explore the classes, weapons, and lore of Elden Ring. Your guide to The Lands Between." />
        <meta name="keywords" content="elden ring, classes, weapons, fromsoft, dark souls, guides" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elden Ring - The Lands Between Guide" />
        <meta property="og:description" content="Explore the classes, weapons, and lore of Elden Ring. Your guide to The Lands Between." />
        <meta property="og:image" content="og-image.jpg" />
        <meta property="og:url" content="https://example.com/elden-ring-web/" />
        <meta property="og:site_name" content="Elden Ring Guide" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elden Ring - The Lands Between Guide" />
        <meta name="twitter:description" content="Explore the classes, weapons, and lore of Elden Ring. Your guide to The Lands Between." />
        <meta name="twitter:image" content="og-image.jpg" />
        <meta name="twitter:url" content="https://example.com/elden-ring-web/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased bg-background text-foreground`}
      >
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        <Navigation onMenuClick={() => setSidebarOpen(true)} />
        <main className="pt-20 lg:pl-64 transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
