import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { WhatsAppPopupProvider } from "@/components/whatsapp-popup-provider";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appliancespro.in"),
  title: {
    default: "Appliances Pro - AC, Fridge, Washing Machine, Microwave, TV Repair in Delhi NCR | Call 8076418358",
    template: "%s | Appliances Pro",
  },
  description:
    "Expert AC, Fridge, Washing Machine repair in Delhi NCR. Same-day service by certified technicians. Call 8076418358. 90-day warranty. Book now & get 10% off!",
  keywords: [
    "AC repair near me",
    "AC service Noida",
    "Split AC installation Delhi",
    "Window AC repair Gurgaon",
    "Fridge repair mechanic",
    "Refrigerator gas filling Ghaziabad",
    "Washing machine repair Faridabad",
    "Fully automatic washing machine service",
    "Microwave oven repair near me",
    "LED TV repair Delhi NCR",
    "Samsung AC repair",
    "LG fridge repair",
    "Whirlpool washing machine service",
    "Daikin AC service",
    "IFB microwave repair",
    "Appliances Pro",
    "home appliance mechanic",
    "doorstep repair service",
    "urgent AC repair",
    "cheap appliance repair Delhi",
  ],
  openGraph: {
    title: "Appliances Pro - Expert Repair Services in Delhi NCR",
    description: "Expert AC, Fridge, Washing Machine repair in Delhi NCR. Same-day service by certified technicians. Call 8076418358. 90-day warranty. Book now & get 10% off!",
    type: "website",
    locale: "en_IN",
    siteName: "Appliances Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliances Pro - Expert Repair Services in Delhi NCR",
    description: "Expert AC, Fridge, Washing Machine repair in Delhi NCR. Same-day service by certified technicians. Call 8076418358. 90-day warranty. Book now & get 10% off!",
  },
  alternates: {
    canonical: "https://appliancespro.in",
  },
  verification: {
    google: "2XwA-ZqTRKwsDFyFWbNBoHlxQ7NK3nMTPHKEsR-cpxw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1a7fd4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Appliances Pro",
  description:
    "Expert repair services for Air Conditioners (AC), Refrigerators (Fridge), Washing Machines, Microwaves, and LED TVs in Delhi NCR.",
  telephone: "8076418358",
  url: "https://appliancespro.in",
  image: "https://appliancespro.in/images/home-bg.png",
  areaServed: [
    "Delhi",
    "New Delhi",
    "Noida",
    "Greater Noida",
    "Gurugram",
    "Ghaziabad",
    "Faridabad"
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 08:00-22:00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2500",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Appliance Repair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Repair & Service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fridge (Refrigerator) Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Washing Machine Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Microwave Oven Repair",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "LED TV Repair",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <WhatsAppPopupProvider>
          {children}
        </WhatsAppPopupProvider>
      </body>
    </html>
  );
}
