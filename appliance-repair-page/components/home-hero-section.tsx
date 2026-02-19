"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Shield, Clock, Star, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useWhatsAppPopup } from "@/components/whatsapp-popup-provider";

const WHATSAPP_NUMBER = "918076418358";
const PHONE_NUMBER = "+918076418358";

export function HomeHeroSection({ bgImage = "/images/hero-ac.jpg" }: { bgImage?: string }) {
  const { openPopup } = useWhatsAppPopup();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validate Phone Number (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.match(phoneRegex)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Send email in background
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch((err) => console.error("Failed to send email lead", err));

    const whatsappText = encodeURIComponent(
      `*Quick Booking Lead*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nCity: ${formData.city}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section className="relative overflow-hidden bg-foreground" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Professional home appliance repair service"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* LEFT SIDE - TEXT CONTENT */}
          <div className="lg:col-span-3">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
              <Star className="h-4 w-4 fill-accent text-accent" />
              {"#1 Rated Appliance Repair in Delhi NCR"}
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Best Home Appliance <span className="text-accent">Repair Service</span> at Your Doorstep
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              AC, Fridge, Washing Machine, TV, Microwave — get expert repair for all your home appliances. Certified technicians, same-day service, and transparent pricing in Delhi, Noida, Gurgaon, Ghaziabad & all major cities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold shadow-lg">
                  <Phone className="h-5 w-5" /> Call Now - Free Estimate
                </Button>
              </a>
              <Button
                onClick={() => openPopup()}
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 text-base font-semibold"
              >
                <Send className="h-5 w-5" /> Book on WhatsApp
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE - FORM (LAYOUT AS PER IMAGE 1) */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-primary-foreground/10 bg-white p-6 shadow-2xl">
              <div className="mb-5 text-center">
                <h2 className="text-xl font-bold text-slate-900">Quick Booking</h2>
                <p className="mt-1 text-sm text-slate-500">Book now & get 10% off on first service</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center text-slate-900">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                  <h3 className="text-lg font-semibold">Booking Sent!</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-medium text-slate-700">Your Name</Label>
                    <Input name="name" placeholder="Enter your name" required onChange={handleChange} className="text-slate-900 border-slate-200" />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-medium text-slate-700">Phone Number</Label>
                    <Input name="phone" placeholder="+91 XXXXX XXXXX" required onChange={handleChange} className="text-slate-900 border-slate-200" />
                  </div>

                  {/* Service Dropdown - ADD/REMOVE SERVICES HERE */}
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-medium text-slate-700">Service Required</Label>
                    <Select onValueChange={(val) => setFormData((prev) => ({ ...prev, service: val }))}>
                      <SelectTrigger className="text-slate-900 border-slate-200"><SelectValue placeholder="Select service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AC Repair">AC Repair</SelectItem>
                        <SelectItem value="Washing Machine Repair">Washing Machine Repair</SelectItem>
                        <SelectItem value="TV Repair">TV Repair</SelectItem>
                        <SelectItem value="Microwave Repair">Microwave Repair</SelectItem>
                        <SelectItem value="Fridge Repair">Fridge Repair</SelectItem>
                        <SelectItem value="Other">Other Appliance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* City Dropdown - ADD/REMOVE CITIES HERE */}
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-xs font-medium text-slate-700">Your City</Label>
                    <Select onValueChange={(val) => setFormData((prev) => ({ ...prev, city: val }))}>
                      <SelectTrigger className="text-slate-900 border-slate-200"><SelectValue placeholder="Select city" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Noida">Noida</SelectItem>
                        <SelectItem value="Gurgaon">Gurgaon</SelectItem>
                        <SelectItem value="Ghaziabad">Ghaziabad</SelectItem>
                        <SelectItem value="Faridabad">Faridabad</SelectItem>
                        <SelectItem value="Mumbai">Mumbai</SelectItem>
                        <SelectItem value="Bangalore">Bangalore</SelectItem>
                        <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="Other">Other City</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="mt-1 gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-md h-12">
                    <Send className="h-4 w-4" /> Book Now - Free Estimate
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}