import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-family",
});

export const metadata: Metadata = {
  title: "Next.js E-commerce",
  description: "A fully optimized e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
