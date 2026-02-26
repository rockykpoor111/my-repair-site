import { Header } from "@/components/header";
import { HomeHeroSection } from "@/components/home-hero-section"; // Layout bilkul purana rahega
import { StatsSection } from "@/components/stats-section";
import { AllServicesGrid } from "@/components/all-services-grid";
import { FairPolicySection } from "@/components/fair-policy-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import Footer from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { Chatbot } from "@/components/chatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appliances Pro - Repair Services in Delhi NCR | Call 8076418358",
  description: "Expert AC, Fridge, Washing Machine repair in Delhi NCR. Same-day service by certified technicians. Call 8076418358. 90-day warranty. Book now & get 10% off!",
  keywords: ["best home appliance repair in Delhi", "appliance repair near me", "AC repair Delhi", "washing machine repair Delhi", "TV repair Delhi", "microwave repair Delhi", "home appliance service Delhi NCR", "fridge repair Delhi", "same day appliance repair", "affordable appliance repair", "AppliancesPro", "appliance repair Noida", "appliance repair Gurgaon", "best AC service Delhi", "emergency appliance repair"],
  openGraph: {
    title: "Appliances Pro - Repair Services in Delhi NCR | Call 8076418358",
    description: "Expert AC, Fridge, Washing Machine repair in Delhi NCR. Same-day service by certified technicians. Call 8076418358. 90-day warranty. Book now & get 10% off!",
    type: "website",
    locale: "en_IN",
    siteName: "AppliancesPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliances Pro - Repair Services in Delhi NCR | Call 8076418358",
    description: "Expert AC, Fridge, Washing Machine repair in Delhi NCR. Same-day service by certified technicians. Call 8076418358. 90-day warranty. Book now & get 10% off!",
  },
  alternates: {
    canonical: "/",
  },
};

const homeFaqs = {
  heading: "Frequently Asked Questions",
  subheading: "Everything you need to know about our home appliance repair services in Delhi NCR.",
  faqs: [
    { question: "Which appliances do you repair?", answer: "We repair all major home appliances including AC, Washing Machines, TVs, Microwaves, and Refrigerators." },
    { question: "Do you provide same-day service in Delhi?", answer: "Yes! We offer same-day service across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad." },
    { question: "What is your warranty policy?", answer: "We provide a 90-day warranty on all repairs and a 6-month warranty on replaced spare parts." },
    { question: "Are your technicians verified and trained?", answer: "Absolutely. All our 50+ technicians are ID-verified and background-checked." },
    { question: "How much does a repair cost?", answer: "Our prices start as low as Rs. 299 depending on the appliance and issue." },
    { question: "What brands do you service?", answer: "We service all major brands including Samsung, LG, Whirlpool, Sony, and many more." },
    { question: "What payment methods do you accept?", answer: "We accept Cash, UPI, credit/debit cards, and net banking." },
    { question: "Can I book a service through WhatsApp?", answer: "Yes! Simply WhatsApp us with your name, appliance details, and issue." },
  ],
};

const homeContact = {
  heading: "Book Your Appliance Repair Now",
  subheading: "Fill out the form and get a free estimate. Our team responds within 15 minutes via WhatsApp.",
  serviceOptions: [
    { label: "AC Repair", value: "AC Repair" },
    { label: "Washing Machine Repair", value: "Washing Machine Repair" },
    { label: "TV Repair", value: "TV Repair" },
    { label: "Microwave Repair", value: "Microwave Repair" },
    { label: "Fridge Repair", value: "Fridge Repair" },
    { label: "Other Appliance", value: "Other Appliance" },
  ],
  typeOptions: [
    { label: "Delhi", value: "Delhi" },
    { label: "Noida", value: "Noida" },
    { label: "Gurgaon", value: "Gurgaon" },
    { label: "Ghaziabad", value: "Ghaziabad" },
    { label: "Faridabad", value: "Faridabad" },
    { label: "Other City", value: "Other" },
  ],
  typeLabel: "City",
  messagePlaceholder: "E.g., AC not cooling, washing machine leaking, TV no display...",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Yahan image specify kar di taaki AC page wali photo yahan na aaye */}
        <HomeHeroSection bgImage="/images/home-bg.png" />

        <StatsSection />
        <AllServicesGrid />
        <FairPolicySection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection data={homeContact} />
        <FaqSection data={homeFaqs} />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <StickyContactBar />
      <Chatbot defaultService="Home Appliance Repair" />
    </>
  );
}