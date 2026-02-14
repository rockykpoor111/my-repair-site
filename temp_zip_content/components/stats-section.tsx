import { Users, Wrench, MapPin, Award, ThumbsUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Customers",
    description: "Trust us with their appliances",
  },
  {
    icon: Wrench,
    value: "50+",
    label: "Expert Technicians",
    description: "Certified & background-verified",
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Cities Served",
    description: "Across India & growing",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    description: "In appliance repair industry",
  },
  {
    icon: ThumbsUp,
    value: "4.8/5",
    label: "Customer Rating",
    description: "On Google & social media",
  },
  {
    icon: Clock,
    value: "30 Min",
    label: "Avg. Response Time",
    description: "Fastest in the industry",
  },
];

export function StatsSection() {
  return (
    <section className="bg-primary py-14" aria-label="Our Achievements">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl text-balance">
            Why 10,000+ Customers Trust AppliancesPro
          </h2>
          <p className="mt-2 text-primary-foreground/70 text-sm">
            Numbers that speak louder than words
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm"
            >
              <stat.icon className="mb-2 h-7 w-7 text-accent" />
              <p className="text-2xl font-bold text-primary-foreground lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-primary-foreground/90">
                {stat.label}
              </p>
              <p className="mt-0.5 text-xs text-primary-foreground/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
