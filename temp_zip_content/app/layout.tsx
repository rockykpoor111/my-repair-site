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
  title: {
    default:
      "AppliancesPro - Best Home Appliance Repair in Delhi | AC, Washing Machine, TV, Microwave",
    template: "%s | AppliancesPro",
  },
  description:
    "Best home appliance repair service in Delhi NCR. Expert AC repair, washing machine repair, TV repair & microwave repair. Certified technicians, same-day service, 90-day warranty.",
  keywords: [
    "best home appliance repair in Delhi",
    "appliance repair near me",
    "AC repair Delhi",
    "washing machine repair",
    "TV repair service",
    "microwave repair",
    "fridge repair Delhi",
    "home appliance service",
    "AppliancesPro",
    "same day appliance repair",
    "affordable repair service Delhi NCR",
  ],
  openGraph: {
    title: "AppliancesPro - Best Home Appliance Repair in Delhi",
    description:
      "Expert repair for AC, Washing Machine, TV, Microwave & more. Same-day service in Delhi NCR.",
    type: "website",
    locale: "en_IN",
    siteName: "AppliancesPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppliancesPro - Best Home Appliance Repair in Delhi",
    description:
      "Expert repair for AC, Washing Machine, TV, Microwave & more. Same-day service in Delhi NCR.",
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
              name: "AppliancesPro AC Repair",
              description:
                "Professional AC repair, installation and maintenance services",
              telephone: "+91-9876543210",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Your City",
                addressRegion: "Your State",
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
                name: "AC Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AC Repair",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AC Installation",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AC Gas Refill",
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
