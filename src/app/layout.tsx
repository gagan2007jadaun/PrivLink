import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { allFonts } from "@/lib/fonts";
import { FontManager } from "@/components/FontManager";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrivLink",
  description: "Secure detailed chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = allFonts.map((font) => font.variable).join(" ");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${fontVariables} antialiased transition-all duration-300`}
      >
        <Providers>
          <FontManager />
          {children}
        </Providers>
      </body>
    </html>
  );
}
