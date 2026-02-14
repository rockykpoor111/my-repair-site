import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Thermometer,
  Wind,
  Settings,
  Droplets,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
}

export interface ServicesData {
  label: string;
  heading: string;
  subheading: string;
  services: ServiceItem[];
}

const defaultServices: ServicesData = {
  label: "Our Services",
  heading: "Professional AC Services for Every Need",
  subheading:
    "From quick repairs to complete installations, our certified technicians deliver top-quality AC services for all major brands.",
  services: [
    {
      icon: Wrench,
      title: "AC Repair",
      description:
        "Expert diagnosis and repair for all AC types. We fix compressor issues, electrical faults, and more.",
      price: "Starting from Rs. 499",
    },
    {
      icon: Thermometer,
      title: "AC Gas Refill",
      description:
        "Professional refrigerant gas refilling with leak detection. R22, R32, and R410A gas available.",
      price: "Starting from Rs. 1,499",
    },
    {
      icon: Wind,
      title: "AC Installation",
      description:
        "Complete split & window AC installation with copper piping, stand fitting, and electrical work.",
      price: "Starting from Rs. 1,999",
    },
    {
      icon: Settings,
      title: "AC Maintenance",
      description:
        "Annual maintenance contracts with deep cleaning, filter wash, coil cleaning, and performance check.",
      price: "Starting from Rs. 399",
    },
    {
      icon: Droplets,
      title: "AC Deep Cleaning",
      description:
        "Foam-based deep cleaning of indoor and outdoor units. Improves cooling and air quality.",
      price: "Starting from Rs. 599",
    },
    {
      icon: Zap,
      title: "Emergency Repair",
      description:
        "24/7 emergency AC repair service. Fast response time with expert technicians at your doorstep.",
      price: "Starting from Rs. 799",
    },
  ],
};

export function ServicesSection({ data }: { data?: ServicesData }) {
  const d = data ?? defaultServices;
  return (
    <section id="services" className="bg-background py-20" aria-label="Our Services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {d.label}
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {d.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {d.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {d.services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border bg-card transition-all hover:shadow-lg hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-bold text-primary">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
