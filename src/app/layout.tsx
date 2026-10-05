import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { FooterImage } from "@/components/FooterImage";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: ["Jayant Singh", "Developer", "Portfolio", "Web Development", "AI", "Software Engineer"],
  authors: [{ name: "Jayant Singh" }],
  creator: "Jayant Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jayantsingh.com",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Jayant Singh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/hero-banner.jpg"],
    creator: "@jayantsingh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased font-sans`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
