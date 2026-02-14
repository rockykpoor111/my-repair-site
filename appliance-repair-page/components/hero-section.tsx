"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Shield, Clock, Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+918076418358";
const WHATSAPP_NUMBER = "918076418358";

export interface HeroData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  whatsappPreText: string;
  features: { icon: any; label: string }[];
}

const defaultHero: HeroData = {
  badge: "Rated 4.8/5 by 2,500+ Happy Customers",
  title: "Expert AC Repair &",
  titleHighlight: "Service",
  description: "Fast, reliable, and affordable AC repair by certified technicians. Same-day service for all brands.",
  heroImage: "/images/ac.jpeg",
  heroImageAlt: "Professional AC repair technician",
  whatsappPreText: "Hi%2C%20I%20need%20AC%20repair%20service.",
  features: [
    { icon: Clock, label: "Same Day Service" },
    { icon: Shield, label: "90-Day Warranty" },
    { icon: Star, label: "Certified Technicians" },
  ],
};

// Yahan humne type ko extend kar diya hai
export function HeroSection({ data, type = "AC" }: { data?: HeroData, type?: "AC" | "Fridge" | "Washing" | "TV" | "Microwave" }) {
  const d = data ?? defaultHero;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const preText = decodeURIComponent(d.whatsappPreText).replace(/\./g, ""); // Remove trailing dot if any
    const message = `*${preText}*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nIssue: ${formData.issue || "General Service"}\nType: ${type}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  // Har appliance ki alag list
  const problemOptions = {
    AC: ["Jet Servicing", "Gas Charging", "Installation", "Not Cooling", "Leaking Water", "Other Problem"],
    Fridge: ["Not Cooling", "Gas Charging", "Compressor Repair", "Water Leakage", "Door Gasket Fix", "Other Problem"],
    Washing: ["Not Spinning", "Drain Issue", "PCB Repair", "Heavy Noise", "Drum Replacement", "Other Problem"],
    TV: ["No Display", "Screen Lines", "Sound Issue", "Backlight Repair", "Power Problem", "Other Problem"],
    Microwave: ["Not Heating", "Button Not Working", "Sparking Inside", "Plate Not Rotating", "Power Issue", "Other Problem"]
  };

  return (
    <section className="relative overflow-hidden bg-foreground py-12 lg:py-24" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Image
          src={d.heroImage || "/placeholder.svg"}
          alt={d.heroImageAlt}
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* LEFT: Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              {d.badge}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              {d.title} <span className="text-accent">{d.titleHighlight}</span> at Your Doorstep
            </h1>
            <p className="mt-6 max-w-lg text-lg text-primary-foreground/80 leading-relaxed">
              {d.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-lg">
                  <Phone className="h-5 w-5" /> Call Now
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
              {d.features.map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <f.icon className="h-5 w-5 text-accent" />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Dynamic Form */}
          <div className="relative rounded-2xl bg-white p-6 shadow-2xl lg:p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Book {type} Service</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-accent outline-none"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-accent outline-none"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <select
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-accent outline-none"
                required
                value={formData.issue}
                onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
              >
                <option value="">Select {type} Issue</option>
                {/* Yahan logic hai jo sahi options dikhayega */}
                {(problemOptions[type] || problemOptions.AC).map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              <Button type="submit" className="w-full bg-accent text-accent-foreground py-6 text-lg font-bold hover:bg-accent/90 shadow-lg">
                <Send className="mr-2 h-5 w-5" /> Book Now - Free Estimate
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}