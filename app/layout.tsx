import type { Metadata } from "next";
import { allFonts } from "@/lib/fonts";
import { FontManager } from "@/components/FontManager";
import { Providers } from "@/components/providers";
import "./globals.css";

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
        className={`${fontVariables} antialiased transition-all duration-300 font-sans`}
      >
        <Providers>
          <FontManager />
          {children}
        </Providers>
      </body>
    </html>
  );
}
