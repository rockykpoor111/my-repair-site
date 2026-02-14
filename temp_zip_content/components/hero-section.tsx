import Image from "next/image";
import { Phone, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_NUMBER = "+919876543210";
const WHATSAPP_NUMBER = "919876543210";

export interface HeroData {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  whatsappPreText: string;
  features: { icon: typeof Clock; label: string }[];
}

const defaultHero: HeroData = {
  badge: "Rated 4.8/5 by 2,500+ Happy Customers",
  title: "Expert AC Repair &",
  titleHighlight: "Service",
  description:
    "Fast, reliable, and affordable AC repair by certified technicians. Same-day service for all brands — Split AC, Window AC, and Central AC systems.",
  heroImage: "/images/hero-ac.jpg",
  heroImageAlt: "Professional AC repair technician servicing an air conditioner",
  whatsappPreText: "Hi%2C%20I%20need%20AC%20repair%20service.%20Please%20share%20details.",
  features: [
    { icon: Clock, label: "Same Day Service" },
    { icon: Shield, label: "90-Day Warranty" },
    { icon: Star, label: "Certified Technicians" },
  ],
};

export function HeroSection({ data }: { data?: HeroData }) {
  const d = data ?? defaultHero;
  return (
    <section className="relative overflow-hidden bg-foreground" aria-label="Hero">
      <div className="absolute inset-0 z-0">
        <Image
          src={d.heroImage || "/placeholder.svg"}
          alt={d.heroImageAlt}
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            {d.badge}
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            {d.title}{" "}
            <span className="text-accent">{d.titleHighlight}</span> at Your Doorstep
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            {d.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="lg" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold shadow-lg">
                <Phone className="h-5 w-5" />
                Call Now - Free Estimate
              </Button>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${d.whatsappPreText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
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
      </div>
    </section>
  );
}
