import type { Metadata } from "next";
import { Inter, Sometype_Mono } from "next/font/google";
import { Great_Vibes } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const font = Sometype_Mono({
  weight: "400",
  subsets: ["latin"]
})

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
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${great_vibes.variable}`}>
      <body className={font.className}>{children}</body>
      <GoogleAnalytics gaId="G-HPCGNVPZPT" />
    </html>
  );
}
