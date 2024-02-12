import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clif Codes",
  description: "Freelance Landing Page for Clif Codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${great_vibes.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
