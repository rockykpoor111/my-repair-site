import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import Footer from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { Chatbot } from "@/components/chatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appliances Pro - Expert AC Repair Service in Delhi NCR",
  description: "Best AC repair and service in Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. Split & Window AC repair, gas filling, and installation. Call 8076418358.",
  keywords: ["AC repair Delhi NCR", "AC service Noida", "Split AC repair Gurgaon", "Window AC installation Faridabad", "AC mechanic near me", "AC gas charging"],
  openGraph: {
    title: "Appliances Pro - Expert AC Repair Service in Delhi NCR",
    description: "Best AC repair and service in Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad.",
    type: "website",
    locale: "en_IN",
    siteName: "Appliances Pro",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AC Repair Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Appliances Pro"
  },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
  description: "Expert AC repair and maintenance service at your doorstep in Delhi NCR.",
  serviceType: "Air Conditioner Repair"
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HeroSection type="AC" />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <Chatbot defaultService="AC Repair" />
    </>
  );
}

