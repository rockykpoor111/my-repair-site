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

const WHATSAPP_NUMBER = "919876543210";
const PHONE_NUMBER = "+919876543210";

export function HomeHeroSection() {
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const whatsappText = encodeURIComponent(
      `*Quick Booking Lead*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nCity: ${formData.city}`
    );
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section className="relative overflow-hidden bg-foreground" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ac.jpg"
          alt="Professional home appliance repair service by AppliancesPro"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          {/* Left Side - Catchy Text */}
          <div className="lg:col-span-3">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent">
              <Star className="h-4 w-4 fill-accent text-accent" />
              {"#1 Rated Appliance Repair in Delhi NCR"}
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Best Home Appliance{" "}
              <span className="text-accent">Repair Service</span> at Your
              Doorstep
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              AC, Washing Machine, TV, Microwave — get expert repair for all
              your home appliances. Certified technicians, same-day service, and
              transparent pricing in Delhi, Noida, Gurgaon & all major cities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button
                  size="lg"
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold shadow-lg"
                >
                  <Phone className="h-5 w-5" />
                  Call Now - Free Estimate
                </Button>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20appliance%20repair%20service%20in%20Delhi`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book on WhatsApp
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>90-Day Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent" />
                <span>4.8/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Booking Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-primary-foreground/10 bg-card p-6 shadow-2xl">
              <div className="mb-5 text-center">
                <h2 className="text-xl font-bold text-card-foreground">
                  Quick Booking
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Book now & get 10% off on first service
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    Booking Sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will contact you within 15 minutes.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="hero-name" className="text-xs font-medium text-card-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="hero-name"
                      name="name"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="hero-phone" className="text-xs font-medium text-card-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="hero-service" className="text-xs font-medium text-card-foreground">
                      Service Required
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, service: val }))
                      }
                    >
                      <SelectTrigger id="hero-service" className="bg-background">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AC Repair">AC Repair</SelectItem>
                        <SelectItem value="Washing Machine Repair">
                          Washing Machine Repair
                        </SelectItem>
                        <SelectItem value="TV Repair">TV Repair</SelectItem>
                        <SelectItem value="Microwave Repair">
                          Microwave Repair
                        </SelectItem>
                        <SelectItem value="Fridge Repair">
                          Fridge Repair
                        </SelectItem>
                        <SelectItem value="Other">Other Appliance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="hero-city" className="text-xs font-medium text-card-foreground">
                      Your City
                    </Label>
                    <Select
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, city: val }))
                      }
                    >
                      <SelectTrigger id="hero-city" className="bg-background">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
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

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-1 gap-2 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    Book Now - Free Estimate
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    No spam. Your data is 100% secure with us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
