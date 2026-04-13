import type { Metadata } from "next";
import { Clock, Shield, Star, Wrench, Settings, Zap, Flame, RotateCcw, AlertTriangle, Award, Users, CheckCircle } from "lucide-react";
import { PhoneCall, ClipboardCheck, ThumbsUp } from "lucide-react";
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
import { StickyContactBar } from "@/components/sticky-contact-bar";

export const metadata: Metadata = {
  title: "Appliances Pro - Expert Microwave Repair in Delhi NCR",
  description:
    "Professional microwave oven repair services for all brands. Magnetron repair, turntable fix, door switch repair. Solo, grill, convection microwave repair. Same-day service in Delhi NCR.",
  keywords: [
    "microwave repair Delhi NCR",
    "microwave repair near me Gurgaon",
    "microwave oven repair Noida",
    "microwave not heating Faridabad",
    "magnetron repair Ghaziabad",
    "convection microwave repair",
  ],
  openGraph: {
    title: "Appliances Pro - Expert Microwave Repair Service in Delhi NCR",
    description:
      "Professional microwave oven repair for all brands. Same-day service by certified technicians in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad.",
    type: "website",
    siteName: "Appliances Pro",
  },
  alternates: {
    canonical: "/microwave-repair",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Microwave Repair Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Appliances Pro"
  },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
  description: "Expert Microwave repair and maintenance service at your doorstep in Delhi NCR.",
  serviceType: "Microwave Oven Repair"
};

const heroData = {
  badge: "Trusted by 1,500+ Customers for Microwave Repair",
  title: "Expert Microwave Repair &",
  titleHighlight: "Service",
  description:
    "Fast, reliable microwave oven repair by certified technicians. Same-day service for all brands — Solo, Grill, and Convection microwaves.",
  heroImage: "/images/microwave.jpeg",
  heroImageAlt: "Professional technician repairing a microwave oven",
  whatsappPreText: "Hi, I need microwave oven repair service. Please share details.",
  features: [
    { icon: "Clock", label: "Same Day Service" },
    { icon: "Shield", label: "90-Day Warranty" },
    { icon: "Star", label: "Certified Technicians" },
  ],
};

const servicesData = {
  label: "Our Services",
  heading: "Professional Microwave Repair Services",
  subheading:
    "From magnetron replacement to turntable fixes, our certified technicians handle all microwave issues for every major brand.",
  services: [
    {
      icon: Flame,
      title: "Magnetron Repair",
      description:
        "Fix microwave not heating issues. Magnetron testing, repair, and replacement for all microwave types.",
      price: "Starting from Rs. 1,299",
    },
    {
      icon: RotateCcw,
      title: "Turntable Repair",
      description:
        "Fix turntable not rotating, motor replacement, roller guide repair, and glass plate replacement.",
      price: "Starting from Rs. 399",
    },
    {
      icon: Settings,
      title: "Door & Switch Repair",
      description:
        "Fix door latch, door switch, interlock system, and handle repair. Microwave not starting due to door issues.",
      price: "Starting from Rs. 499",
    },
    {
      icon: Zap,
      title: "Control Panel Fix",
      description:
        "Keypad repair, touchpad replacement, display fix, and circuit board repair for digital microwaves.",
      price: "Starting from Rs. 799",
    },
    {
      icon: AlertTriangle,
      title: "Sparking & Noise Fix",
      description:
        "Fix sparking inside microwave, burning smell, waveguide cover repair, and unusual noise during operation.",
      price: "Starting from Rs. 599",
    },
    {
      icon: Wrench,
      title: "Full Service & Cleaning",
      description:
        "Complete internal cleaning, cavity inspection, ventilation check, and performance optimization.",
      price: "Starting from Rs. 349",
    },
  ],
};

const whyUsData = {
  heading: "Premium Oven Repair Specialists",
  description:
    "A faulty microwave can disrupt meal prep drastically. Our dedicated kitchen appliance engineers possess deep expertise in diagnosing magnetron failures and replacing high-voltage capacitors safely in Solo, Grill, and Convection models.",
  features: [
    "Dedicated Kitchen Tech Units",
    "100% Safe High-Voltage Handling",
    "Flat Repair Fees With ZERO Hidden Costs",
    "Supporting Panasonic, Samsung & IFB",
    "Comprehensive 3-Month Fix Warranty",
    "On-Site Kitchen Diagnostics",
  ],
  image: "/images/microwave.jpeg",
  imageAlt: "Professional technician servicing a microwave oven",
  stats: [
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "1,500+", label: "Happy Customers", icon: Users },
    { value: "40+", label: "Expert Technicians", icon: CheckCircle },
    { value: "35 min", label: "Avg. Response Time", icon: Clock },
  ],
};

const processData = {
  heading: "Streamlined Heating Restoration",
  subheading:
    "Bringing warmth back to your meals with zero headaches.",
  steps: [
    { icon: PhoneCall, step: "01", title: "Submit Request", description: "Drop a chat detailing your oven's issue (e.g., Sparking inside)." },
    { icon: ClipboardCheck, step: "02", title: "Safety Audit", description: "An expert evaluates radiation leaks, door switches, and the central magnetron." },
    { icon: Wrench, step: "03", title: "Direct Solution", description: "We swap blown fuses, replace the turntable motor, or rebuild the circuit board." },
    { icon: ThumbsUp, step: "04", title: "Power Check", description: "A final water-heating test confirms the radiation output is perfectly optimized." },
  ],
};

const testimonialsData = {
  heading: "What Our Customers Say",
  subheading:
    "Join 1,500+ satisfied customers who trust AppliancesPro for their microwave repair needs.",
  reviews: [
    { name: "Geeta Sharma", location: "Delhi", rating: 5, text: "Microwave was not heating at all. Magnetron was replaced within an hour at my home. Excellent same-day service!" },
    { name: "Rajesh Patel", location: "Mumbai", rating: 5, text: "Turntable was not working. The technician replaced the motor and it works perfectly now. Very affordable pricing." },
    { name: "Ayesha Khan", location: "Hyderabad", rating: 5, text: "My IFB convection microwave had a control panel issue. They repaired the PCB instead of replacing. Saved me money!" },
    { name: "Sanjay Verma", location: "Bangalore", rating: 4, text: "Microwave was sparking inside. Waveguide cover was damaged. Quick fix and the technician was very knowledgeable." },
    { name: "Lakshmi Rao", location: "Chennai", rating: 5, text: "Door switch was faulty. Microwave would not start. Fixed in 30 minutes with genuine parts. Great service!" },
    { name: "Amit Gupta", location: "Pune", rating: 5, text: "Took the full service package. They cleaned everything thoroughly. Microwave works like new again!" },
  ],
};

const contactData = {
  heading: "Book Your Microwave Repair Now",
  subheading:
    "Fill out the form below and we will send your booking details directly to our team via WhatsApp for fast response.",
  serviceOptions: [
    { label: "Magnetron Repair", value: "Magnetron Repair" },
    { label: "Turntable Repair", value: "Turntable Repair" },
    { label: "Door & Switch Repair", value: "Door Switch Repair" },
    { label: "Control Panel Fix", value: "Control Panel Fix" },
    { label: "Sparking & Noise Fix", value: "Sparking Noise Fix" },
    { label: "Full Service & Cleaning", value: "Full Service Cleaning" },
  ],
  typeOptions: [
    { label: "Solo Microwave", value: "Solo Microwave" },
    { label: "Grill Microwave", value: "Grill Microwave" },
    { label: "Convection Microwave", value: "Convection Microwave" },
    { label: "Over-the-Range", value: "Over-the-Range" },
    { label: "Built-in Microwave", value: "Built-in Microwave" },
    { label: "Not Sure", value: "Not Sure" },
  ],
  typeLabel: "Microwave Type",
  messagePlaceholder:
    "E.g., Not heating, turntable stuck, sparking inside, door not closing...",
};

const faqData = {
  heading: "Microwave Repair FAQ",
  subheading:
    "Got questions? Find everything you need to know about our microwave repair services.",
  faqs: [
    { question: "Why is my microwave not heating food?", answer: "The most common cause is a faulty magnetron, which is the component that generates microwave energy. Other causes include a defective diode, capacitor, or door switch. Our technician will diagnose the exact issue for free." },
    { question: "Is it worth repairing a microwave or should I buy a new one?", answer: "In most cases, repair is much cheaper than buying a new microwave. Magnetron replacement costs Rs. 1,299-2,499 compared to Rs. 5,000-15,000 for a new unit. We always advise honestly." },
    { question: "Why is my microwave sparking inside?", answer: "Sparking is usually caused by a damaged waveguide cover, metal objects inside, or worn paint on the cavity walls. This is easily fixable and should be repaired immediately for safety." },
    { question: "What brands of microwaves do you repair?", answer: "We repair all major brands including Samsung, LG, IFB, Panasonic, Whirlpool, Godrej, Bajaj, Morphy Richards, and many more." },
    { question: "Can you repair a convection microwave's grill function?", answer: "Yes, we fix grill element issues, convection fan problems, temperature sensor faults, and heating element replacements in all convection microwaves." },
    { question: "My microwave turntable is not rotating. What is the issue?", answer: "Usually a faulty turntable motor, broken roller guide, or worn coupler. These are simple repairs starting from Rs. 399." },
    { question: "Do you provide warranty on microwave repairs?", answer: "Yes, we provide a 90-day warranty on all repairs and a 6-month warranty on replaced spare parts like magnetrons and motors." },
    { question: "Is microwave repair done at home?", answer: "Yes, most microwave repairs are done at your home itself. Our technician carries common spare parts. Only complex PCB repairs may require workshop-level service." },
  ],
};

export default function MicrowaveRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HeroSection data={heroData} type="Microwave" />
        <ServicesSection data={servicesData} />
        <WhyUsSection data={whyUsData} />
        <ProcessSection data={processData} />
        <TestimonialsSection data={testimonialsData} />
        <ContactSection data={contactData} />
        <FaqSection data={faqData} />
        <AllServicesGrid />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <StickyContactBar />
      <Chatbot defaultService="Microwave Repair" />
    </>
  );
}
