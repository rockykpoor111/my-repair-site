"use client";

import React from "react";
import { useState } from "react";
import { Send, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useWhatsAppPopup } from "@/components/whatsapp-popup-provider";

const WHATSAPP_NUMBER = "918076418358";
const PHONE_NUMBER = "+918076418358";

export interface ContactData {
  heading: string;
  subheading: string;
  serviceOptions: { label: string; value: string }[];
  typeOptions: { label: string; value: string }[];
  typeLabel: string;
  messagePlaceholder: string;
}

const defaultData: ContactData = {
  heading: "Book Your AC Service Now",
  subheading:
    "Fill out the form below and we will send your booking details directly to our team via WhatsApp for fast response.",
  serviceOptions: [
    { label: "AC Repair", value: "AC Repair" },
    { label: "AC Gas Refill", value: "AC Gas Refill" },
    { label: "AC Installation", value: "AC Installation" },
    { label: "AC Maintenance", value: "AC Maintenance" },
    { label: "AC Deep Cleaning", value: "AC Deep Cleaning" },
    { label: "Emergency Repair", value: "Emergency Repair" },
  ],
  typeOptions: [
    { label: "Split AC", value: "Split AC" },
    { label: "Window AC", value: "Window AC" },
    { label: "Central AC", value: "Central AC" },
    { label: "Cassette AC", value: "Cassette AC" },
    { label: "Tower AC", value: "Tower AC" },
    { label: "Not Sure", value: "Not Sure" },
  ],
  typeLabel: "AC Type",
  messagePlaceholder:
    "E.g., AC not cooling, making noise, water leaking...",
};

export function ContactSection({ data }: { data?: ContactData }) {
  const { openPopup } = useWhatsAppPopup();
  const d = data ?? defaultData;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    applianceType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Fetch API to hit email first in background
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        issue: formData.message,
        type: `Contact Form - ${formData.applianceType}`
      }),
    }).catch((err) => console.error("Failed to send contact email lead", err));

    const whatsappText = encodeURIComponent(
      `*New Service Lead*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\n${d.typeLabel}: ${formData.applianceType}\nMessage: ${formData.message || "N/A"}`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`,
      "_blank"
    );
  }

  return (
    <section id="contact" className="bg-card py-20" aria-label="Contact and Book Service">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get a Free Quote
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold text-card-foreground sm:text-4xl">
              {d.heading}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {d.subheading}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select
                    onValueChange={(val) =>
                      setFormData((prev) => ({ ...prev, service: val }))
                    }
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      {d.serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="applianceType">{d.typeLabel}</Label>
                  <Select
                    onValueChange={(val) =>
                      setFormData((prev) => ({
                        ...prev,
                        applianceType: val,
                      }))
                    }
                  >
                    <SelectTrigger id="applianceType">
                      <SelectValue placeholder={`Select ${d.typeLabel.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {d.typeOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Describe Your Issue (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={d.messagePlaceholder}
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="h-5 w-5" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          <div className="flex flex-col gap-6 lg:pt-16">
            <Card className="border-border bg-background">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Call Us Directly</h3>
                  <p className="text-sm text-muted-foreground">Speak to our experts right away</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="mt-1 inline-block text-lg font-bold text-primary"
                  >
                    +91 80764 18358
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                  <MessageCircle className="h-7 w-7 text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp Us</h3>
                  <p className="text-sm text-muted-foreground">Quick chat for instant booking</p>
                  <button
                    onClick={() => openPopup()}
                    className="mt-1 inline-block text-lg font-bold text-[#25D366] text-left hover:underline"
                  >
                    Chat Now
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-primary/20 bg-primary">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-primary-foreground">Service Hours</h3>
                <div className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/80">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold text-primary-foreground">8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-primary-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergency Service</span>
                    <span className="font-semibold text-accent">24/7 Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
