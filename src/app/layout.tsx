import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Home-based Candle Manufacturer | Retail & Custom Candles",
  description:
    "Handmade candles manufactured from home. We are the manufacturer of candles and also deal in retail and customised candles for all occasions.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-amber-100 bg-black/95 px-6 py-4 shadow-sm dark:border-amber-900">
          {/* @author Cursor - global site logo header */}
          <div className="mx-auto flex max-w-5xl items-center gap-6">
            <Image
              src="/candle_logo.jpeg"
              alt="Royal Flame Candle logo"
              width={160}
              height={160}
              priority
              className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-wide text-amber-50 md:text-lg">
                Royal Flame Candle
              </span>
              <span className="text-xs text-amber-200/80 md:text-sm">
                Home-based candle manufacturer
              </span>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
