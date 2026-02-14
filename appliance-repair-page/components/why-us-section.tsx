import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export interface WhyUsData {
  heading: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  stats: { value: string; label: string; icon: LucideIcon }[];
}

const defaultData: WhyUsData = {
  heading: "Trusted by Thousands of Homeowners",
  description:
    "AppliancesPro is a leading AC repair and maintenance service provider. We combine skilled technicians with modern tools to deliver reliable and affordable solutions.",
  features: [
    "Certified & Background-Verified Technicians",
    "Genuine Spare Parts with Warranty",
    "Transparent Pricing - No Hidden Charges",
    "All Major Brands Covered",
    "90-Day Service Warranty",
    "Same Day Service Available",
  ],
  image: "/images/ac-service.jpg",
  imageAlt: "Professional AC technician performing maintenance service",
  stats: [
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "2,500+", label: "Happy Customers", icon: Users },
    { value: "50+", label: "Expert Technicians", icon: CheckCircle },
    { value: "30 min", label: "Avg. Response Time", icon: Clock },
  ],
};

export function WhyUsSection({ data }: { data?: WhyUsData }) {
  const d = data ?? defaultData;
  return (
    <section id="why-us" className="bg-card py-20" aria-label="Why Choose Us">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold text-card-foreground sm:text-4xl">
              {d.heading}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {d.description}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2" role="list">
              {d.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={d.image || "/placeholder.svg"}
                alt={d.imageAlt}
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-xl">
              <p className="text-3xl font-bold">4.8</p>
              <p className="text-sm text-primary-foreground/80">Star Rating</p>
              <div className="mt-1 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i <= 4 ? "fill-accent text-accent" : "fill-accent/50 text-accent/50"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {d.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center"
            >
              <stat.icon className="mb-3 h-8 w-8 text-primary" />
              <p className="text-2xl font-bold text-foreground lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
