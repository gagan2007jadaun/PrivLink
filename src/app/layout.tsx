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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Roboto:wght@300;400;500;700&family=Poppins:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&family=Rubik:wght@300;400;500;600&family=Roboto+Mono:wght@400;500&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedFont = localStorage.getItem("app-font");
                  if (savedFont) {
                    document.documentElement.style.setProperty("--app-font", "'"+savedFont+"', system-ui, sans-serif");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased transition-all duration-300"
      >
        <Providers>
          <FontManager />
          {children}
        </Providers>
      </body>
    </html>
  );
}
