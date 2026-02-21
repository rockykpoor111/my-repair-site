import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
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
import { Clock, Shield, Star, Wrench, Settings, Droplets, Zap, AlertTriangle, RotateCcw, Award, Users, CheckCircle, PhoneCall, ClipboardCheck, ThumbsUp } from "lucide-react";
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

const whyUsData = {
  heading: "Top Rated AC Repair Experts in Delhi",
  description: "AppliancesPro leads the market in Split and Window AC repair. Our technicians are specialized in diagnosing cooling issues and fixing gas leaks.",
  features: ["Specialized Cooling Techs", "100% Original Gas Refills", "Fixed Prices", "All AC Brands", "90-Day Warranty", "Immediate Service"],
  image: "/images/ac.jpeg",
  imageAlt: "AC repair technician filling gas",
  stats: [{ value: "15+", label: "Years Experience", icon: Award }, { value: "6,000+", label: "Customers", icon: Users }, { value: "30 min", label: "Response", icon: Clock }],
};

const processData = {
  heading: "4 Steps to Instant AC Cooling",
  subheading: "Get your AC working flawlessly fast.",
  steps: [
    { icon: PhoneCall, step: "01", title: "Reach Out", description: "Contact us via WhatsApp to book an AC inspection." },
    { icon: ClipboardCheck, step: "02", title: "Diagnosis", description: "Our AC mechanic visits to check the compressor and gas levels." },
    { icon: Wrench, step: "03", title: "Immediate Fix", description: "We repair leaks, refill gas, or service the AC on the spot." },
    { icon: ThumbsUp, step: "04", title: "Cooling Tested", description: "We verify the temperature and provide a 90-day warranty." },
  ],
};

const testimonialsData = {
  heading: "What Delhi Says About Us",
  subheading: "Trusted by thousands for AC repairs.",
  reviews: [
    { name: "Rahul Verma", location: "Delhi", rating: 5, text: "My Window AC was not cooling. They refilled gas and cleaned it. Fantastic cooling now!" },
    { name: "Priya Singh", location: "Gurgaon", rating: 5, text: "Split AC repair done in 45 mins. Very professional mechanic." },
    { name: "Amit Sharma", location: "Noida", rating: 4, text: "Affordable AC service and no hidden charges." },
    { name: "Neha Gupta", location: "Faridabad", rating: 5, text: "Excellent AMC service for all my home ACs." },
    { name: "Vikas Patel", location: "Ghaziabad", rating: 5, text: "PCB repair saved me thousands of rupees replacing the AC." },
    { name: "Anjali Rao", location: "Delhi", rating: 5, text: "Right on time. Highly recommended AC service." },
  ],
};

const contactData = {
  heading: "Schedule Your AC Repair",
  subheading: "Book now and get a certified AC mechanic at your door.",
  serviceOptions: [{ label: "Gas Refill", value: "Gas Refill" }, { label: "Not Cooling", value: "Not Cooling" }, { label: "Water Leakage", value: "Water Leakage" }],
  typeOptions: [{ label: "Split AC", value: "Split AC" }, { label: "Window AC", value: "Window AC" }],
  typeLabel: "AC Type",
  messagePlaceholder: "Mention AC ton and issue...",
};

const faqData = {
  heading: "AC Repair Questions",
  subheading: "Common queries regarding AC service.",
  faqs: [
    { question: "How long does AC gas refilling take?", answer: "Usually 45 to 60 minutes including leak testing." },
    { question: "Do you repair Inverter ACs?", answer: "Yes, our technicians are highly trained in Inverter AC PCB repairs." },
    { question: "Is AC servicing required every year?", answer: "Yes, annual deep cleaning optimizes performance and saves electricity." },
    { question: "What is your AC repair warranty?", answer: "We give 90 days warranty on standard AC repairs and 6 months on spare parts." },
  ],
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
        <WhyUsSection data={whyUsData} />
        <ProcessSection data={processData} />
        <TestimonialsSection data={testimonialsData} />
        <ContactSection data={contactData} />
        <FaqSection data={faqData} />
        <AllServicesGrid />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <Chatbot defaultService="AC Repair" />
    </>
  );
}

