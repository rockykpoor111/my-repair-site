import { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationsList, servicesList, getSeoMetadata, getDynamicContent } from "@/lib/seo-data";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { Chatbot } from "@/components/chatbot";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PhoneCall, ClipboardCheck, Wrench, ThumbsUp, Award, Users, CheckCircle, Clock, Monitor, Zap, Settings, Volume2, Wifi, Thermometer, Wind, Droplets } from "lucide-react";

// This generates all the static routes simultaneously at build time!
export function generateStaticParams() {
    const params = [];
    for (const loc of locationsList) {
        for (const srv of servicesList) {
            params.push({ city: loc.id, service: srv.id });
        }
    }
    return params;
}

type Params = Promise<{ city: string; service: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { city, service } = await params;
    const loc = locationsList.find(l => l.id === city);
    const srv = servicesList.find(s => s.id === service);
    
    if (!loc || !srv) return { title: "Service Not Found" };
    
    return getSeoMetadata(loc.name, srv.name);
}

export default async function DynamicLocationServicePage({ params }: { params: Params }) {
    const { city, service } = await params;
    const loc = locationsList.find(l => l.id === city);
    const srv = servicesList.find(s => s.id === service);
    
    if (!loc || !srv) {
        notFound();
    }

    const dynamicDesc = getDynamicContent(loc.name, srv.name);

    // Map the correct image for the background
    const imageMap: Record<string, string> = {
        "ac-repair": "/images/ac.jpeg",
        "fridge-repair": "/images/fridge.jpeg",
        "washing-machine-repair": "/images/washing.jpeg",
        "tv-repair": "/images/tv.jpeg",
        "microwave-repair": "/images/micro.jpeg",
    };

    const heroData = {
        badge: `#1 Rated ${srv.type} Repair in ${loc.name}`,
        title: `Expert ${srv.type} Repair`,
        titleHighlight: `in ${loc.name}`,
        description: dynamicDesc,
        heroImage: imageMap[srv.id] || "/images/ac.jpeg",
        heroImageAlt: `${srv.type} repair in ${loc.name}`,
        whatsappPreText: `Hi, I need ${srv.type} repair service in ${loc.name}.`
    };

    const contactData = {
        heading: `Book Your ${srv.type} Service Now`,
        subheading: "Fill out the form below and we will send your booking details directly to our team via WhatsApp for fast response.",
        serviceOptions: [
            { label: `${srv.type} Repair`, value: `${srv.type} Repair` },
            { label: `${srv.type} Service/Maintenance`, value: `${srv.type} Service/Maintenance` },
            { label: `${srv.type} Installation`, value: `${srv.type} Installation` },
            { label: "Emergency Repair", value: "Emergency Repair" },
        ],
        typeOptions: [
            { label: "Not Sure", value: "Not Sure" },
            { label: "Need Diagnosis", value: "Need Diagnosis" },
        ],
        typeLabel: `${srv.type} Category`,
        messagePlaceholder: `E.g., ${srv.type} not turning on, making noise, not cooling...`,
    };

    const processData = {
        heading: `How Our ${srv.type} Service Works`,
        subheading: `Getting your ${srv.type.toLowerCase()} fixed in ${loc.name} is quick and hassle-free.`,
        steps: [
            { icon: PhoneCall, step: "01", title: "Book a Service", description: "Call us, WhatsApp, or fill the form to book your appointment." },
            { icon: ClipboardCheck, step: "02", title: "Free Diagnosis", description: `Our certified technician visits your home in ${loc.name} and diagnoses the issue.` },
            { icon: Wrench, step: "03", title: "Expert Repair", description: "We fix the problem using genuine parts and industry-standard tools." },
            { icon: ThumbsUp, step: "04", title: "Quality Assured", description: "Post-service quality check with warranty on all repairs." },
        ],
    };

    let specificServices = [];
    if (srv.id === "ac-repair") {
        specificServices = [
            { icon: Wrench, title: "AC Repair", description: "Expert diagnosis and repair for all AC types. We fix compressor issues, electrical faults, and more.", price: "Starting from Rs. 499" },
            { icon: Thermometer, title: "AC Gas Refill", description: "Professional refrigerant gas refilling with leak detection. R22, R32, and R410A gas available.", price: "Starting from Rs. 1,499" },
            { icon: Wind, title: "AC Installation", description: "Complete split & window AC installation with copper piping, stand fitting, and electrical work.", price: "Starting from Rs. 1,999" },
            { icon: Settings, title: "AC Maintenance", description: "Annual maintenance contracts with deep cleaning, filter wash, coil cleaning, and performance check.", price: "Starting from Rs. 399" },
            { icon: Droplets, title: "AC Deep Cleaning", description: "Foam-based deep cleaning of indoor and outdoor units. Improves cooling and air quality.", price: "Starting from Rs. 599" },
            { icon: Zap, title: "Emergency Repair", description: "24/7 emergency AC repair service. Fast response time with expert technicians at your doorstep.", price: "Starting from Rs. 799" },
        ];
    } else if (srv.id === "tv-repair") {
        specificServices = [
            { icon: Monitor, title: "Panel Repair / Replacement", description: "Expert LCD, LED, and OLED panel repair. Fix dead pixels, cracked screens, color distortion.", price: "Starting from Rs. 2,499" },
            { icon: Zap, title: "Backlight Repair", description: "Fix dim screen, flickering backlight, and no display issues. LED strip replacement.", price: "Starting from Rs. 999" },
            { icon: Settings, title: "Motherboard Repair", description: "Main board diagnosis, chip-level repair. Fix power issues, HDMI port problems.", price: "Starting from Rs. 1,499" },
            { icon: Volume2, title: "Sound & Speaker Repair", description: "Fix no sound, distorted audio, buzzing noise, and speaker replacement.", price: "Starting from Rs. 699" },
            { icon: Wifi, title: "Smart TV Software Fix", description: "Fix WiFi connectivity, app crashes, firmware updates, slow performance.", price: "Starting from Rs. 499" },
            { icon: Wrench, title: "Power Supply Repair", description: "Fix TV not turning on, power board repair, capacitor replacement.", price: "Starting from Rs. 799" },
        ];
    } else {
        specificServices = [
            { icon: Wrench, title: `General ${srv.type} Repair`, description: `Expert diagnosis and speedy repair for your ${srv.type.toLowerCase()}. Fix all common faults.`, price: "Starting from Rs. 499" },
            { icon: Settings, title: "Part Replacement", description: "100% genuine and OEM verified parts for reliable performance.", price: "Starting from Rs. 899" },
            { icon: Thermometer, title: "Service & Maintenance", description: "Deep cleaning and performance optimization to extend lifespan.", price: "Starting from Rs. 399" },
            { icon: Zap, title: "Electrical Work", description: "Fixing internal wiring, power boards, and short circuits.", price: "Starting from Rs. 599" },
            { icon: Wind, title: "Installation", description: `Setup and demo of your new ${srv.type.toLowerCase()} safely.`, price: "Starting from Rs. 999" },
            { icon: Clock, title: "Emergency Repair", description: "24/7 fast doorstep repair. Technicians arrive in under an hour.", price: "Starting from Rs. 799" },
        ];
    }

    const servicesData = {
        label: "Our Services",
        heading: `Professional ${srv.type} Services in ${loc.name}`,
        subheading: `From quick fixes to complete overhauls, our certified technicians handle all ${srv.type.toLowerCase()} issues securely.`,
        services: specificServices,
    };

    const whyUsData = {
        heading: `Why We Are ${loc.name}'s Best For ${srv.name}`,
        description: `We specialize exclusively in ${srv.type.toLowerCase()} repair. Don't risk your expensive appliances with unauthorized local shops; our specialized engineers are verified and certified.`,
        features: [
            "Authorized-Level Diagnostics",
            "100% Authentic OEM Parts",
            "Upfront Quotes - No Surprises",
            "All Major Brands Supported",
            "90-Day Guarantee on Fixes",
            `Technician Visit anywhere in ${loc.name}`,
        ],
        image: imageMap[srv.id] || "/images/ac.jpeg",
        imageAlt: `Professional ${srv.type.toLowerCase()} mechanic`,
        stats: [
            { value: "10+", label: "Years Experience", icon: Award },
            { value: "15,000+", label: "Happy Customers", icon: Users },
            { value: "40+", label: "Expert Technicians", icon: CheckCircle },
            { value: "45 min", label: "Avg. Response Time", icon: Clock },
        ],
    };

    let specificReviews = [];
    if (srv.id === "ac-repair") {
        specificReviews = [
            { name: "Rahul Verma", location: loc.name, rating: 5, text: `My AC stopped cooling in the middle of summer. The technician arrived in ${loc.name} within an hour and fixed the gas leak perfectly. Lifesavers!` },
            { name: "Priya Sharma", location: loc.name, rating: 5, text: `Very professional AC deep cleaning service. The staff was polite and left no mess behind. Highly recommend them for ${srv.name}.` },
            { name: "Tariq Ali", location: loc.name, rating: 5, text: `They repaired my Split AC's compressor PCB instead of replacing the whole unit. Honest pricing and expert knowledge.` },
        ];
    } else if (srv.id === "tv-repair") {
        specificReviews = [
            { name: "Arun Kapoor", location: loc.name, rating: 5, text: `My ${srv.type.toLowerCase()} broke down unexpectedly with backlight issues. The technician from AppliancesPro fixed it at my home very quickly. Saved me a lot of hassle!` },
            { name: "Deepa Nair", location: loc.name, rating: 5, text: `Professional, polite, and very reasonable pricing for ${srv.name}. They fixed the motherboard chip right in front of me.` },
            { name: "Harpreet Singh", location: loc.name, rating: 5, text: `They did genuine panel repair instead of forcing a full replacement. Screen looks brand new now. Professional and affordable!` },
        ];
    } else if (srv.id === "fridge-repair") {
         specificReviews = [
             { name: "Neha Singh", location: loc.name, rating: 5, text: `My refrigerator stopped cooling and all my food was melting. They sent someone to ${loc.name} instantly. He refilled the gas and it works 100% fine now.` },
             { name: "Vikram Malhotra", location: loc.name, rating: 5, text: `Excellent ${srv.type} repair service! They diagnosed the faulty compressor and replaced it with a genuine OEM part with warranty.` },
             { name: "Zainab Fatima", location: loc.name, rating: 4, text: `Very affordable and quick response. The technician knew exactly what was wrong with my double-door fridge.` },
         ];
    } else if (srv.id === "washing-machine") {
         specificReviews = [
             { name: "Kavita Joshi", location: loc.name, rating: 5, text: `My washing machine was making a terrible noise during the spin cycle. The mechanic fixed the drum bearing locally in ${loc.name}. Very satisfied!` },
             { name: "Ramesh Tiwari", location: loc.name, rating: 5, text: `Booked them for front-load ${srv.type} repair. They fixed the water drainage issue in just 45 minutes. Brilliant service.` },
             { name: "Manjit Kaur", location: loc.name, rating: 5, text: `The motherboard of my automatic machine was dead. They did chip-level repair and saved me the cost of a new board.` },
         ];
    } else if (srv.id === "microwave-repair") {
         specificReviews = [
             { name: "Imran Khan", location: loc.name, rating: 5, text: `Excellent and speedy service for my ${srv.type.toLowerCase()}. The microwave was throwing sparks, they fixed the magnetron safely.` },
             { name: "Sneha Rajput", location: loc.name, rating: 5, text: `I highly recommend AppliancesPro for any ${srv.name} needs in ${loc.name}. Transparent pricing and genuine parts.` },
             { name: "Akshay Sharma", location: loc.name, rating: 5, text: `Quick response time! The touchpad wasn't working. They replaced the membrane keypad quickly.` },
         ];
    } else {
         specificReviews = [
             { name: "Gaurav Chawla", location: loc.name, rating: 5, text: `Excellent and speedy service for my ${srv.type.toLowerCase()}. The technician was very knowledgeable and polite.` },
             { name: "Pooja Reddy", location: loc.name, rating: 5, text: `I highly recommend AppliancesPro for any ${srv.name} needs in ${loc.name}. Transparent pricing and genuine parts.` },
             { name: "Aditya Jain", location: loc.name, rating: 5, text: `Quick response time and professional repair work. My ${srv.type.toLowerCase()} is working like brand new again.` },
         ];
    }

    const testimonialsData = {
        heading: "What Our Customers Say",
        subheading: `Join 15,000+ satisfied customers who trust AppliancesPro for their ${srv.type.toLowerCase()} repair needs in ${loc.name}.`,
        reviews: specificReviews,
    };

    const faqData = {
        heading: "Frequently Asked Questions",
        subheading: `Got questions? We have answers. Find everything you need to know about our ${srv.type.toLowerCase()} repair services in ${loc.name}.`,
        faqs: [
            { question: `How quickly can you send a technician for ${srv.type.toLowerCase()} repair in ${loc.name}?`, answer: `We offer same-day service in most cases. Usually, our technicians can reach anywhere in ${loc.name} within 45 to 90 minutes of your booking.` },
            { question: `What brands of ${srv.type}s do you repair?`, answer: "We repair all major household brands including LG, Samsung, Sony, Whirlpool, Voltas, Daikin, Bosch, Panasonic, IFB, and many more." },
            { question: "Do you provide warranty on repairs?", answer: "Yes, we provide a solid 90-day warranty on all repairs and up to a 6-month warranty on any genuine spare parts replaced." },
            { question: `Is the home diagnosis free in ${loc.name}?`, answer: "Our technician visit and diagnostic check is extremely affordable. If you choose to proceed with the actual repair with us, the diagnosis charge is completely waived off!" },
            { question: "What payment methods do you accept?", answer: "We accept all convenient digital payment methods including UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, as well as Cash." },
            { question: `Can you also install a new ${srv.type} that I recently purchased?`, answer: `Absolutely! Along with maintenance and repairs, we offer safe, fast, and professional installation & uninstallation services for ${srv.type}s.` },
        ],
    };

    return (
        <>
            <Header />
            <main>
                <HeroSection type={srv.type} data={heroData} />
                <ServicesSection data={servicesData} />
                <WhyUsSection data={whyUsData} />
                <ProcessSection data={processData} />
                <TestimonialsSection data={testimonialsData} />
                <ContactSection data={contactData} />
                <FaqSection data={faqData} />
            </main>
            <Footer />
            <StickyContactBar />
            <Chatbot defaultService={`${srv.type} Repair`} />
        </>
    );
}
