import type { Metadata } from "next";
import { Clock, Shield, Star, Wrench, Settings, Zap, Monitor, Volume2, Wifi, Award, Users, CheckCircle } from "lucide-react";
import { PhoneCall, ClipboardCheck, ThumbsUp } from "lucide-react";
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

export const metadata: Metadata = {
  title: "AppliancesPro - Expert TV Repair Service | LED, LCD, OLED, Smart TV",
  description:
    "Professional TV repair services for all brands. LED, LCD, OLED, Smart TV repair. Panel fix, backlight repair, motherboard repair. Same-day service. Call now!",
  keywords: [
    "TV repair",
    "TV repair near me",
    "LED TV repair",
    "LCD TV repair",
    "OLED TV repair",
    "Smart TV repair",
    "TV panel repair",
    "TV backlight repair",
    "TV motherboard repair",
    "TV screen repair",
    "TV not turning on",
    "TV no display",
    "Samsung TV repair",
    "LG TV repair",
    "Sony TV repair",
    "AppliancesPro",
  ],
  openGraph: {
    title: "AppliancesPro - Expert TV Repair Service",
    description:
      "Professional TV repair for LED, LCD, OLED & Smart TVs. Same-day service by certified technicians.",
    type: "website",
    siteName: "AppliancesPro",
  },
};

const heroData = {
  badge: "Trusted by 1,800+ Customers for TV Repair",
  title: "Expert TV Repair &",
  titleHighlight: "Panel Fix",
  description:
    "Fast, reliable TV repair by certified technicians. Same-day service for all brands — LED, LCD, OLED, and Smart TVs.",
  heroImage: "/images/tv.jpeg",
  heroImageAlt: "Professional technician repairing a flat screen TV",
  whatsappPreText: "Hi, I need TV repair service. Please share details.",
  features: [
    { icon: "Clock", label: "Same Day Service" },
    { icon: "Shield", label: "90-Day Warranty" },
    { icon: "Star", label: "Certified Technicians" },
  ],
};

const servicesData = {
  label: "Our Services",
  heading: "Professional TV Repair Services",
  subheading:
    "From panel fixes to complete motherboard repair, our certified technicians handle all TV issues for every major brand.",
  services: [
    {
      icon: Monitor,
      title: "Panel Repair / Replacement",
      description:
        "Expert LCD, LED, and OLED panel repair. Fix dead pixels, cracked screens, color distortion, and display lines.",
      price: "Starting from Rs. 2,499",
    },
    {
      icon: Zap,
      title: "Backlight Repair",
      description:
        "Fix dim screen, flickering backlight, and no display issues. LED strip and backlight inverter repair for all TV sizes.",
      price: "Starting from Rs. 999",
    },
    {
      icon: Settings,
      title: "Motherboard Repair",
      description:
        "Main board diagnosis, chip-level repair, and replacement. Fix power issues, HDMI port problems, and boot failures.",
      price: "Starting from Rs. 1,499",
    },
    {
      icon: Volume2,
      title: "Sound & Speaker Repair",
      description:
        "Fix no sound, distorted audio, buzzing noise, and speaker replacement. Audio IC and amplifier repair available.",
      price: "Starting from Rs. 699",
    },
    {
      icon: Wifi,
      title: "Smart TV Software Fix",
      description:
        "Fix WiFi connectivity, app crashes, firmware updates, slow performance, and smart features not working.",
      price: "Starting from Rs. 499",
    },
    {
      icon: Wrench,
      title: "Power Supply Repair",
      description:
        "Fix TV not turning on, power board repair, capacitor replacement, and voltage stabilizer issues.",
      price: "Starting from Rs. 799",
    },
  ],
};

const whyUsData = {
  heading: "Trusted TV Repair Experts",
  description:
    "AppliancesPro is a leading TV repair service provider. Our technicians are trained in chip-level repair for LED, LCD, OLED, and Smart TVs of all major brands.",
  features: [
    "Chip-Level Repair Experts",
    "Genuine Spare Parts with Warranty",
    "Transparent Pricing - No Hidden Charges",
    "All Major TV Brands Covered",
    "90-Day Service Warranty",
    "Home Service Available",
  ],
  image: "/images/tv-service.jpg",
  imageAlt: "Professional technician working on TV circuit board",
  stats: [
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "1,800+", label: "Happy Customers", icon: Users },
    { value: "40+", label: "Expert Technicians", icon: CheckCircle },
    { value: "45 min", label: "Avg. Response Time", icon: Clock },
  ],
};

const processData = {
  heading: "Simple 4-Step Process",
  subheading:
    "Getting your TV repaired has never been easier. Follow these simple steps and we handle the rest.",
  steps: [
    { icon: PhoneCall, step: "01", title: "Book a Service", description: "Call us, WhatsApp, or fill the form to book your TV repair service." },
    { icon: ClipboardCheck, step: "02", title: "Free Diagnosis", description: "Our certified technician visits your home and diagnoses the TV issue for free." },
    { icon: Wrench, step: "03", title: "Expert Repair", description: "We fix the problem using genuine parts and chip-level repair tools." },
    { icon: ThumbsUp, step: "04", title: "Quality Assured", description: "Post-repair quality check with 90-day warranty on all repairs." },
  ],
};

const testimonialsData = {
  heading: "What Our Customers Say",
  subheading:
    "Join 1,800+ satisfied customers who trust AppliancesPro for their TV repair needs.",
  reviews: [
    { name: "Arun Kapoor", location: "Delhi", rating: 5, text: "My 55-inch Samsung LED had backlight issues. The technician fixed it at home in 2 hours. Saved me from buying a new TV!" },
    { name: "Deepa Nair", location: "Mumbai", rating: 5, text: "Smart TV was not connecting to WiFi and apps were crashing. They did a firmware update and it works perfectly now." },
    { name: "Suresh Reddy", location: "Hyderabad", rating: 5, text: "Sony TV motherboard had issues. They did chip-level repair instead of full replacement. Professional and affordable!" },
    { name: "Kavita Joshi", location: "Bangalore", rating: 4, text: "LG OLED had display lines. Panel repair was done expertly. The TV looks brand new again. Great value!" },
    { name: "Mohit Sharma", location: "Pune", rating: 5, text: "TV was not turning on at all. Power supply board was the issue. Fixed in one visit with 90-day warranty." },
    { name: "Nisha Gupta", location: "Chennai", rating: 5, text: "Speaker was giving distorted sound. They replaced the speaker and audio IC. Crystal clear sound now!" },
  ],
};

const contactData = {
  heading: "Book Your TV Repair Service Now",
  subheading:
    "Fill out the form below and we will send your booking details directly to our team via WhatsApp for fast response.",
  serviceOptions: [
    { label: "Panel Repair / Replacement", value: "Panel Repair" },
    { label: "Backlight Repair", value: "Backlight Repair" },
    { label: "Motherboard Repair", value: "Motherboard Repair" },
    { label: "Sound & Speaker Repair", value: "Sound Speaker Repair" },
    { label: "Smart TV Software Fix", value: "Smart TV Software Fix" },
    { label: "Power Supply Repair", value: "Power Supply Repair" },
  ],
  typeOptions: [
    { label: "LED TV", value: "LED TV" },
    { label: "LCD TV", value: "LCD TV" },
    { label: "OLED TV", value: "OLED TV" },
    { label: "Smart TV", value: "Smart TV" },
    { label: "Android TV", value: "Android TV" },
    { label: "Not Sure", value: "Not Sure" },
  ],
  typeLabel: "TV Type",
  messagePlaceholder:
    "E.g., TV not turning on, no display, flickering screen, no sound...",
};

const faqData = {
  heading: "TV Repair FAQ",
  subheading:
    "Got questions? Find everything you need to know about our TV repair services.",
  faqs: [
    { question: "Can you repair a cracked TV screen?", answer: "Yes, we offer panel replacement for cracked or damaged screens. The cost depends on the TV size and panel type (LED, LCD, OLED). We provide genuine replacement panels with warranty." },
    { question: "What brands of TVs do you repair?", answer: "We repair all major brands including Samsung, LG, Sony, TCL, Mi/Xiaomi, OnePlus, Vu, Panasonic, Philips, and many more." },
    { question: "My TV has vertical/horizontal lines on screen. Can it be fixed?", answer: "Yes, display lines are usually caused by panel connector issues or T-CON board problems. In most cases, this can be repaired without full panel replacement." },
    { question: "How much does a TV backlight repair cost?", answer: "Backlight repair starts from Rs. 999 depending on TV size and number of LED strips needed. This is much cheaper than panel replacement." },
    { question: "Can you fix a Smart TV that keeps restarting?", answer: "Yes, this is usually a firmware or motherboard issue. We can update firmware, reset software, or repair the main board as needed." },
    { question: "Do you provide home service for TV repair?", answer: "Yes, most TV repairs are done at your home. For complex chip-level repairs, we may need to take the unit to our service center with your consent." },
    { question: "My TV turns on but has no picture. What is the issue?", answer: "This is typically a backlight or T-CON board issue. Our technician will diagnose the exact cause for free and provide a repair estimate." },
    { question: "Do you provide warranty on TV repairs?", answer: "Yes, we provide a 90-day warranty on all repairs and a 6-month warranty on replaced spare parts including panels." },
  ],
};

export default function TvRepairPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection data={heroData} type="TV" />
        <ServicesSection data={servicesData} />
        <WhyUsSection data={whyUsData} />
        <ProcessSection data={processData} />
        <TestimonialsSection data={testimonialsData} />
        <ContactSection data={contactData} />
        <FaqSection data={faqData} />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <Chatbot defaultService="TV Repair" />
    </>
  );
}
