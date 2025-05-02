import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Separator } from "@radix-ui/react-context-menu";
// import { DesktopSidebar } from "@/components/DesktopSidebar";
// import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import AppProviders from "@/components/providers/AppProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScrapeCraft",
  description: "Visual Scrapping and Data Extraction Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>
          <div className="flex h-screen">{children}</div>
        </AppProviders>
      </body>
    </html>
  );
}
