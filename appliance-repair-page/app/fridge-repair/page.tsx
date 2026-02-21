import { Header } from "@/components/header";
import { HeroSection, type HeroData } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import Footer from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { Chatbot } from "@/components/chatbot";
import { Clock, Shield, Star, Snowflake, Wrench, Thermometer, Droplets, Settings, Zap } from "lucide-react";
// 1. Fridge Hero Data
const fridgeHero = {
  badge: "Trusted by 2,500+ Customers for Fridge Repair",
  title: "Expert Fridge Repair &", // Sirf itna rakhein
  titleHighlight: "Service",      // Ye yellow ho jayega
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

export default function FridgeRepairPage() {
  return (
    <>
      <Header />
      <main>
        {/* Yellow highlight ke liye title aur titleHighlight alag kar diye hain */}
        <HeroSection data={fridgeHero} type="Fridge" />

        {/* Services ka 6 items wala data yahan ja raha hai */}
        <ServicesSection data={fridgeServices} />

        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />

        {/* Fridge specific contact data yahan pass kar diya hai */}
        <ContactSection data={fridgeContactData} />

        <FaqSection />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <Chatbot defaultService="Fridge Repair" />
    </>
  );
}