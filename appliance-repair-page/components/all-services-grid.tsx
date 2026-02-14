import Link from "next/link";
import {
  Wind,
  WashingMachine,
  Tv,
  Microwave,
  Refrigerator,
  Plug,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wind,
    title: "AC Repair",
    description:
      "Split AC, Window AC, Central AC repair, gas refill, installation & deep cleaning.",
    price: "Starting Rs. 399",
    href: "/",
    color: "bg-sky-500/10 text-sky-600",
    hoverColor: "group-hover:bg-sky-500 group-hover:text-white",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    description:
      "Drum repair, motor fix, water leakage, PCB repair for all brands.",
    price: "Starting Rs. 449",
    href: "/washing-machine",
    color: "bg-blue-500/10 text-blue-600",
    hoverColor: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: Tv,
    title: "TV Repair",
    description:
      "Panel fix, backlight repair, motherboard repair, smart TV software fix.",
    price: "Starting Rs. 499",
    href: "/tv-repair",
    color: "bg-indigo-500/10 text-indigo-600",
    hoverColor: "group-hover:bg-indigo-500 group-hover:text-white",
  },
  {
    icon: Microwave,
    title: "Microwave Repair",
    description:
      "Magnetron repair, turntable fix, door & switch repair, control panel fix.",
    price: "Starting Rs. 349",
    href: "/microwave-repair",
    color: "bg-orange-500/10 text-orange-600",
    hoverColor: "group-hover:bg-orange-500 group-hover:text-white",
  },
  {
    icon: Refrigerator,
    title: "Fridge Repair",
    description:
      "Compressor repair, gas refill, thermostat fix, door seal replacement.",
    price: "Starting Rs. 499",
    href: "#contact",
    color: "bg-teal-500/10 text-teal-600",
    hoverColor: "group-hover:bg-teal-500 group-hover:text-white",
  },
  {
    icon: Plug,
    title: "Other Appliances",
    description:
      "Geyser, water purifier, chimney, dishwasher & more appliance repairs.",
    price: "Starting Rs. 299",
    href: "#contact",
    color: "bg-rose-500/10 text-rose-600",
    hoverColor: "group-hover:bg-rose-500 group-hover:text-white",
  },
];

export function AllServicesGrid() {
  return (
    <section
      id="services"
      className="bg-background py-20"
      aria-label="All Repair Services"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Expert Repair for All Home Appliances
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            From AC to TV, washing machine to microwave — we repair every major
            home appliance with certified technicians and genuine spare parts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full border-border bg-card transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${service.color} ${service.hoverColor}`}
                  >
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">
                      {service.price}
                    </span>
                    <span className="text-xs font-medium text-primary group-hover:underline">
                      {"Learn More \u2192"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
