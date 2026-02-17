import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Appliances Pro - AC, Fridge, Washing Machine Repair in Delhi NCR | Call 8076418358",
  description:
    "Expert repair services for AC, Fridge, Washing Machines, Microwaves, and LED TVs in Delhi, Noida, Gurgaon, Ghaziabad. Call 8076418358 now!",
  keywords: [
    "AC repair",
    "Fridge repair",
    "Washing Machine Service",
    "Delhi",
    "Noida",
    "Gurgaon",
    "Microwave repair",
    "TV repair",
    "Appliance repair near me",
  ],
  openGraph: {
    title: "Appliances Pro - Repair Services in Delhi NCR | Call 8076418358",
    description:
      "Expert repair for AC, Washing Machine, Fridge & more. Same-day service in Delhi, Noida, Gurgaon.",
    url: "https://appliancespro.in",
    siteName: "Appliances Pro",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "Appliances Pro Repair Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliances Pro - Repair Services in Delhi NCR | Call 8076418358",
    description:
      "Expert repair for AC, Washing Machine, Fridge & more. Same-day service in Delhi, Noida, Gurgaon.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Appliances Pro",
              description:
                "Expert repair services for Air Conditioners (AC), Refrigerators (Fridge), Washing Machines, Microwaves, and LED TVs in Delhi NCR.",
              telephone: "8076418358",
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
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
