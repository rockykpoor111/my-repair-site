import { Header } from "@/components/header";
import { HeroSection, type HeroData } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { AllServicesGrid } from "@/components/all-services-grid";
import Footer from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { Chatbot } from "@/components/chatbot";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { Clock, Shield, Star, Snowflake, Wrench, Thermometer, Droplets, Settings, Zap, Award, Users, CheckCircle, PhoneCall, ClipboardCheck, ThumbsUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appliances Pro - Expert Fridge & Refrigerator Repair in Delhi NCR",
  description: "Top-rated Fridge and Refrigerator repair services in Delhi, Noida, Gurgaon, Ghaziabad. Single Door, Double Door, Side-by-Side repair. Same-day service.",
  keywords: ["Fridge repair Delhi NCR", "Refrigerator service Gurgaon", "Fridge gas filling Noida", "Double door fridge repair", "Fridge mechanic near me"],
  openGraph: {
    title: "Appliances Pro - Expert Fridge Repair Service in Delhi NCR",
    description: "Top-rated Fridge and Refrigerator repair services in Delhi, Noida, Gurgaon, Ghaziabad.",
    type: "website",
    locale: "en_IN",
    siteName: "Appliances Pro",
  },
  alternates: {
    canonical: "/fridge-repair",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fridge Repair Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Appliances Pro"
  },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
  description: "Expert Refrigerator repair and maintenance service at your doorstep in Delhi NCR.",
  serviceType: "Refrigerator Repair"
};
// 1. Fridge Hero Data
const fridgeHero = {
  badge: "Trusted by 2,500+ Customers for Fridge Repair",
  title: "Expert Doorstep Fridge",
  titleHighlight: "Repair in Delhi NCR",
  description: "Fast, reliable refrigerator repair by certified experts. Same-day service for all brands—Single Door,Dubble Door,Side By Side.",
  heroImage: "/images/fridge.png",
  heroImageAlt: "Fridge Repair Service",
  whatsappPreText: "Hi, I need Fridge repair service.",
  features: [
    { icon: "Clock", label: "Same Day Service" },
    { icon: "Shield", label: "90-Day Warranty" },
    { icon: "Star", label: "Certified Technicians" },
  ],
};

// 2. Fridge Services Data
const fridgeServices = {
  label: "Our Services",
  heading: "Expert Refrigerator Solutions",
  subheading: "Complete repair services for Single Door, Double Door, and Side-by-Side fridges.",
  services: [
    { icon: Snowflake, title: "Gas Charging", description: "Safe and high-quality refrigerant refill for instant cooling.", price: "Starting from ₹1,499" },
    { icon: Wrench, title: "Compressor Repair", description: "Diagnosis and replacement of faulty compressors with warranty.", price: "Starting from ₹2,999" },
    { icon: Thermometer, title: "Cooling Issues", description: "Fixing thermostat, sensor, and fan motor problems quickly.", price: "Starting from ₹599" },
    { icon: Droplets, title: "Water Leakage Fix", description: "Clearing drain pipe blocks and fixing internal water leaking issues.", price: "Starting from ₹499" },
    { icon: Settings, title: "Door Gaskit Repair", description: "Fixing air leaks by replacing worn-out magnetic door gaskets.", price: "Starting from ₹799" },
    { icon: Zap, title: "PCB Repair", description: "Chip-level repair for inverter fridge main-boards and power cards.", price: "Starting from ₹1,299" },
  ],
};
const fridgeContactData = {
  heading: "Book Your Fridge Repair Now",
  subheading: "Professional cooling and compressor service at your doorstep.",
  serviceOptions: [
    { label: "Gas Charging", value: "Gas Charging" },
    { label: "Compressor Repair", value: "Compressor Repair" },
    { label: "Cooling Issues", value: "Cooling Issues" },
    { label: "Not Cooling", value: "Not Cooling" },
  ],
  typeOptions: [
    { label: "Single Door", value: "Single Door" },
    { label: "Double Door", value: "Double Door" },
    { label: "Side-by-Side", value: "Side-by-Side" },
  ],
  typeLabel: "Fridge Type",
  messagePlaceholder: "Describe your fridge problem here...",
};

const whyUsData = {
  heading: "Top Rated Fridge Repair Experts in Delhi",
  description: "AppliancesPro leads the market in Fridge and Refrigerator repair. Our technicians easily fix cooling, compressor, and gas leak issues.",
  features: ["Specialized Fridge Techs", "100% Original Spare Parts", "Fixed Prices", "All Fridge Brands", "90-Day Warranty", "Immediate Service"],
  image: "/images/fridge.png",
  imageAlt: "Fridge repair service technician",
  stats: [{ value: "10+", label: "Years Experience", icon: Award }, { value: "4,500+", label: "Customers", icon: Users }, { value: "40 min", label: "Response", icon: Clock }],
};

const processData = {
  heading: "4 Steps to Restore Cooling",
  subheading: "Get your Fridge working flawlessly fast.",
  steps: [
    { icon: PhoneCall, step: "01", title: "Reach Out", description: "Contact us via WhatsApp to book a Fridge inspection." },
    { icon: ClipboardCheck, step: "02", title: "Diagnosis", description: "Our expert visits to check the compressor and thermostat." },
    { icon: Wrench, step: "03", title: "Immediate Fix", description: "We repair leaks, refill gas, or replace faulty parts." },
    { icon: ThumbsUp, step: "04", title: "Cooling Tested", description: "We verify the temperature drop and provide a 90-day warranty." },
  ],
};

const testimonialsData = {
  heading: "Trusted by Fridge Owners",
  subheading: "Read what customers say about our Fridge repair.",
  reviews: [
    { name: "Suresh", location: "Delhi", rating: 5, text: "My Double Door Fridge wasn't cooling. They refilled gas and it's perfect!" },
    { name: "Meena", location: "Gurgaon", rating: 5, text: "Fridge PCB repair done in 45 mins. Very professional." },
    { name: "Rahul", location: "Noida", rating: 4, text: "Affordable Fridge service and no hidden charges." },
    { name: "Priya", location: "Faridabad", rating: 5, text: "Compressor replaced quickly with original warranty." },
    { name: "Amit", location: "Ghaziabad", rating: 5, text: "Same-day service, saved all my food from spoiling." },
    { name: "Neha", location: "Delhi", rating: 5, text: "Honest diagnosis and reasonable price." },
  ],
};

const faqData = {
  heading: "Fridge Repair Questions",
  subheading: "Common queries regarding Fridge service.",
  faqs: [
    { question: "How long does Fridge gas refilling take?", answer: "Usually 45 to 60 minutes including leak testing." },
    { question: "Do you repair Side-by-Side Inverter Fridges?", answer: "Yes, our technicians are highly trained in all advanced Fridge models." },
    { question: "Can a faulty compressor be repaired?", answer: "In most cases, a faulty compressor requires a replacement." },
    { question: "What is your Fridge repair warranty?", answer: "We give 90 days warranty on standard Fridge repairs and 6 months on spare parts." },
  ],
};

export default function FridgeRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Yellow highlight ke liye title aur titleHighlight alag kar diye hain */}
        <HeroSection data={fridgeHero} type="Fridge" />

        {/* Services ka 6 items wala data yahan ja raha hai */}
        <ServicesSection data={fridgeServices} />

        <WhyUsSection data={whyUsData} />
        <ProcessSection data={processData} />
        <TestimonialsSection data={testimonialsData} />

        {/* Fridge specific contact data yahan pass kar diya hai */}
        <ContactSection data={fridgeContactData} />

        <FaqSection data={faqData} />
        <AllServicesGrid />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <StickyContactBar />
      <Chatbot defaultService="Fridge Repair" />
    </>
  );
}