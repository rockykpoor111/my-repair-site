import { Header } from "@/components/header";
import { HomeHeroSection } from "@/components/home-hero-section";
import { StatsSection } from "@/components/stats-section";
import { AllServicesGrid } from "@/components/all-services-grid";
import { FairPolicySection } from "@/components/fair-policy-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { FloatingButtons } from "@/components/floating-buttons";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { Chatbot } from "@/components/chatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AppliancesPro - Best Home Appliance Repair in Delhi | AC, Washing Machine, TV, Microwave Repair",
  description:
    "Best home appliance repair service in Delhi NCR. Expert AC repair, washing machine repair, TV repair & microwave repair. Certified technicians, same-day service, 90-day warranty. Call now!",
  keywords: [
    "best home appliance repair in Delhi",
    "appliance repair near me",
    "AC repair Delhi",
    "washing machine repair Delhi",
    "TV repair Delhi",
    "microwave repair Delhi",
    "home appliance service Delhi NCR",
    "fridge repair Delhi",
    "same day appliance repair",
    "affordable appliance repair",
    "AppliancesPro",
    "appliance repair Noida",
    "appliance repair Gurgaon",
    "best AC service Delhi",
    "emergency appliance repair",
  ],
  openGraph: {
    title: "AppliancesPro - Best Home Appliance Repair in Delhi",
    description:
      "Expert repair for AC, Washing Machine, TV, Microwave & more. Same-day service, 90-day warranty, certified technicians in Delhi NCR.",
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
};

const homeFaqs = {
  heading: "Frequently Asked Questions",
  subheading:
    "Everything you need to know about our home appliance repair services in Delhi NCR.",
  faqs: [
    {
      question:
        "Which appliances do you repair?",
      answer:
        "We repair all major home appliances including Air Conditioners (Split, Window, Central), Washing Machines (Front Load, Top Load), TVs (LED, OLED, Smart TV), Microwaves, Refrigerators, Geysers, Water Purifiers, and more.",
    },
    {
      question: "Do you provide same-day service in Delhi?",
      answer:
        "Yes! We offer same-day service across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Our average response time is 30 minutes during regular hours.",
    },
    {
      question: "What is your warranty policy?",
      answer:
        "We provide a 90-day warranty on all repairs and a 6-month warranty on replaced spare parts. If the same issue recurs within the warranty period, we fix it absolutely free.",
    },
    {
      question: "Are your technicians verified and trained?",
      answer:
        "Absolutely. All our 50+ technicians are ID-verified, background-checked, and undergo regular training. They are certified professionals with years of hands-on experience.",
    },
    {
      question: "How much does a repair cost?",
      answer:
        "Our prices start as low as Rs. 299 depending on the appliance and issue. We always provide a transparent estimate before starting any work — no hidden charges ever.",
    },
    {
      question: "What brands do you service?",
      answer:
        "We service all major brands including Samsung, LG, Whirlpool, Sony, Daikin, Voltas, Blue Star, Hitachi, IFB, Bosch, Panasonic, Godrej, Lloyd, Haier, and many more.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Cash, UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and net banking. Payment is collected only after the service is completed to your satisfaction.",
    },
    {
      question: "Can I book a service through WhatsApp?",
      answer:
        "Yes! Simply WhatsApp us at +91 98765 43210 with your name, appliance details, and issue. Our team will confirm your booking instantly.",
    },
  ],
};

const homeContact = {
  heading: "Book Your Appliance Repair Now",
  subheading:
    "Fill out the form and get a free estimate. Our team responds within 15 minutes via WhatsApp.",
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
  messagePlaceholder:
    "E.g., AC not cooling, washing machine leaking, TV no display...",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HomeHeroSection />
        <StatsSection />
        <AllServicesGrid />
        <FairPolicySection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection data={homeContact} />
        <FaqSection data={homeFaqs} />
      </main>
      <Footer />
      <FloatingButtons />
      <StickyContactBar />
      <Chatbot />
    </>
  );
}
