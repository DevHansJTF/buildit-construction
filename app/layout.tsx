import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { LenisProvider } from "../components/lenis-provider";
import "./globals.css"; // Global styles

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BuildIt | Premium Construction & Engineering Platform",
  description:
    "Authoritative, highly credible, precise, large-scale, and premium construction management and design-build services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-900" suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
