import type { Metadata } from "next";
import { Clock, Shield, Star, Wrench, Settings, Droplets, Zap, AlertTriangle, RotateCcw, Award, Users, CheckCircle } from "lucide-react";
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
  title: "Appliances Pro - Expert Washing Machine Repair in Delhi NCR",
  description:
    "Professional washing machine repair services for all brands. Front load, top load, semi-automatic repair. Drum repair, motor fix, water leakage solutions. Same-day service in Delhi NCR.",
  keywords: [
    "washing machine repair Delhi NCR",
    "washing machine service Noida",
    "washing machine repair near me Gurgaon",
    "front load washing machine repair Faridabad",
    "top load washing machine repair Ghaziabad",
    "drum repair",
    "washing machine motor repair",
  ],
  openGraph: {
    title: "Appliances Pro - Expert Washing Machine Repair Service in Delhi NCR",
    description:
      "Professional washing machine repair for all brands. Same-day service by certified technicians in Delhi, Noida, Gurgaon, Faridabad, Ghaziabad.",
    type: "website",
    siteName: "Appliances Pro",
  },
  alternates: {
    canonical: "/washing-machine",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Washing Machine Repair Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Appliances Pro"
  },
  areaServed: ["Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad"],
  description: "Expert Washing Machine repair and maintenance service at your doorstep in Delhi NCR.",
  serviceType: "Washing Machine Repair"
};

const heroData = {
  badge: "Trusted by 2,000+ Customers for Washing Machine Repair",
  title: "Expert Washing Machine Repair &",
  titleHighlight: "Service",
  description:
    "Fast, reliable washing machine repair by certified technicians. Same-day service for all brands — Front Load, Top Load, and Semi-Automatic machines.",
  heroImage: "/images/washing.jpeg",
  heroImageAlt: "Professional technician repairing a washing machine",
  whatsappPreText: "Hi, I need washing machine repair service. Please share details.",
  features: [
    { icon: "Clock", label: "Same Day Service" },
    { icon: "Shield", label: "90-Day Warranty" },
    { icon: "Star", label: "Certified Technicians" },
  ],
};

const servicesData = {
  label: "Our Services",
  heading: "Professional Washing Machine Services",
  subheading:
    "From drum repairs to complete overhauls, our certified technicians handle all washing machine issues for every major brand.",
  services: [
    {
      icon: Wrench,
      title: "Drum Repair",
      description:
        "Expert drum replacement and repair for front-load and top-load machines. Fix drum noise, wobbling, and rotation issues.",
      price: "Starting from Rs. 799",
    },
    {
      icon: Settings,
      title: "Motor Repair",
      description:
        "Professional motor diagnosis and repair. Fix spinning issues, burning smell, and motor overheating problems.",
      price: "Starting from Rs. 999",
    },
    {
      icon: Droplets,
      title: "Water Leakage Fix",
      description:
        "Complete water leakage diagnosis and repair. Fix inlet valve, drain pump, door seal, and hose pipe leaks.",
      price: "Starting from Rs. 499",
    },
    {
      icon: Zap,
      title: "PCB / Electronic Repair",
      description:
        "Circuit board repair, control panel fix, and electronic component replacement for smart washing machines.",
      price: "Starting from Rs. 1,299",
    },
    {
      icon: AlertTriangle,
      title: "Noise & Vibration Fix",
      description:
        "Diagnose and fix excessive noise, vibration, and shaking during wash or spin cycles. Bearing replacement included.",
      price: "Starting from Rs. 599",
    },
    {
      icon: RotateCcw,
      title: "Full Service & Cleaning",
      description:
        "Complete deep cleaning, descaling, and maintenance service. Improve washing quality and extend machine life.",
      price: "Starting from Rs. 449",
    },
  ],
};

const whyUsData = {
  heading: "Top Washing Machine Mechanics in NCR",
  description:
    "A broken washer disrupts daily life. We bring factory-grade training straight to your laundry room. Our rapid response teams are equipped to handle complex front-load PCB issues and standard top-load motor faults.",
  features: [
    "Factory-Trained Laundry Specialists",
    "Company Approved Motor/Drum Replacements",
    "Crystal Clear Estimates No Gimmicks",
    "Whirlpool, IFB, Bosch & All Brands",
    "3-Month Component Protection",
    "Express Same-Day Scheduling",
  ],
  image: "/images/washing.jpeg",
  imageAlt: "Professional technician servicing a washing machine drum",
  stats: [
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "2,000+", label: "Happy Customers", icon: Users },
    { value: "50+", label: "Expert Technicians", icon: CheckCircle },
    { value: "30 min", label: "Avg. Response Time", icon: Clock },
  ],
};

const processData = {
  heading: "Smooth Laundry Restoration Stages",
  subheading:
    "Resolving spin and drainage issues without removing your machine.",
  steps: [
    { icon: PhoneCall, step: "01", title: "Contact Dispatch", description: "Send a quick WhatsApp text specifying your washer type (e.g., Front Load)." },
    { icon: ClipboardCheck, step: "02", title: "At-Home Troubleshooting", description: "Our mechanic inspects the water inlet, drum bearings, and motherboard." },
    { icon: Wrench, step: "03", title: "Immediate Remedy", description: "We clear blockages, fit new drive belts, or repair the electronic panel." },
    { icon: ThumbsUp, step: "04", title: "Spin Cycle Validation", description: "We run a test wash cycle to guarantee zero leaks and perfect spinning." },
  ],
};

const testimonialsData = {
  heading: "What Our Customers Say",
  subheading:
    "Join 2,000+ satisfied customers who trust AppliancesPro for their washing machine repair needs.",
  reviews: [
    { name: "Meena Kumari", location: "Delhi", rating: 5, text: "My front-load washing machine had a drum issue. The technician came in 40 minutes and fixed it perfectly. Excellent service!" },
    { name: "Ravi Kumar", location: "Mumbai", rating: 5, text: "Motor was making loud noise. AppliancesPro fixed it same day with genuine parts. Very professional team." },
    { name: "Sunita Devi", location: "Bangalore", rating: 5, text: "Water leakage problem was fixed quickly. The technician explained everything and pricing was very transparent." },
    { name: "Ankit Verma", location: "Pune", rating: 4, text: "PCB board had issues in my Samsung washing machine. They repaired it instead of replacing, saved me a lot of money!" },
    { name: "Pooja Shah", location: "Hyderabad", rating: 5, text: "Took the AMC plan for my washing machine. Regular service keeps it running like new. Highly recommended!" },
    { name: "Imran Ali", location: "Chennai", rating: 5, text: "Emergency repair on Sunday evening. They came within an hour and fixed the drainage issue. Great service!" },
  ],
};

const contactData = {
  heading: "Book Your Washing Machine Service Now",
  subheading:
    "Fill out the form below and we will send your booking details directly to our team via WhatsApp for fast response.",
  serviceOptions: [
    { label: "Drum Repair", value: "Drum Repair" },
    { label: "Motor Repair", value: "Motor Repair" },
    { label: "Water Leakage Fix", value: "Water Leakage Fix" },
    { label: "PCB / Electronic Repair", value: "PCB Electronic Repair" },
    { label: "Noise & Vibration Fix", value: "Noise Vibration Fix" },
    { label: "Full Service & Cleaning", value: "Full Service Cleaning" },
  ],
  typeOptions: [
    { label: "Front Load", value: "Front Load" },
    { label: "Top Load", value: "Top Load" },
    { label: "Semi-Automatic", value: "Semi-Automatic" },
    { label: "Fully Automatic", value: "Fully Automatic" },
    { label: "Washer Dryer Combo", value: "Washer Dryer Combo" },
    { label: "Not Sure", value: "Not Sure" },
  ],
  typeLabel: "Machine Type",
  messagePlaceholder:
    "E.g., Machine not spinning, water leaking, making loud noise...",
};

const faqData = {
  heading: "Washing Machine Repair FAQ",
  subheading:
    "Got questions? Find everything you need to know about our washing machine repair services.",
  faqs: [
    { question: "How quickly can you send a technician for washing machine repair?", answer: "We offer same-day service in most areas. Our technician typically arrives within 30-60 minutes during regular hours. Emergency service is available 24/7." },
    { question: "What brands of washing machines do you repair?", answer: "We repair all major brands including Samsung, LG, Whirlpool, Bosch, IFB, Haier, Godrej, Panasonic, and many more. Our technicians are trained on all types." },
    { question: "Do you provide warranty on washing machine repairs?", answer: "Yes, we provide a 90-day warranty on all repairs and a 6-month warranty on replaced spare parts." },
    { question: "How much does a drum replacement cost?", answer: "Drum repair starts from Rs. 799 depending on the machine type and issue. Full drum replacement costs vary by brand and model." },
    { question: "My washing machine is not spinning. What could be the issue?", answer: "Common causes include a faulty motor, broken belt, worn-out clutch, or PCB issue. Our technician will diagnose the exact problem for free." },
    { question: "Can you repair front-load washing machine door seal leaks?", answer: "Yes, we specialize in door gasket/seal replacement for all front-load brands. This is a common issue we fix regularly." },
    { question: "Do you offer AMC for washing machines?", answer: "Yes, our AMC plans start from Rs. 1,499/year and include 2-4 service visits, priority support, and discounts on spare parts." },
    { question: "Is the diagnosis fee separate?", answer: "Diagnosis is completely free when you proceed with the repair. We always provide a transparent estimate before starting any work." },
  ],
};

export default function WashingMachinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Yahan 'type' add kar diya hai taaki AC ka form na dikhe */}
        <HeroSection data={heroData} type="Washing" />

        <ServicesSection data={servicesData} />
        <WhyUsSection data={whyUsData} />
        <ProcessSection data={processData} />
        <TestimonialsSection data={testimonialsData} />

        {/* Niche wala contact section ab aap skip bhi kar sakte hain 
            kyunki form ab Hero ke upar (Upside) aa chuka hai */}
        <ContactSection data={contactData} />

        <FaqSection data={faqData} />
        <AllServicesGrid />
      </main>
      <Footer />
      {/* <FloatingButtons /> Removed to avoid overlap with Chatbot */}
      <StickyContactBar />
      <Chatbot defaultService="Washing Machine Repair" />
    </>
  );
}
