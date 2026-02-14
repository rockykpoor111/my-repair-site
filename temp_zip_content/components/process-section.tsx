import type { LucideIcon } from "lucide-react";
import { PhoneCall, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";

export interface ProcessStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export interface ProcessData {
  heading: string;
  subheading: string;
  steps: ProcessStep[];
}

const defaultData: ProcessData = {
  heading: "Simple 4-Step Process",
  subheading:
    "Getting your AC repaired has never been easier. Follow these simple steps and we handle the rest.",
  steps: [
    {
      icon: PhoneCall,
      step: "01",
      title: "Book a Service",
      description:
        "Call us, WhatsApp, or fill the form to book your AC service appointment.",
    },
    {
      icon: ClipboardCheck,
      step: "02",
      title: "Free Diagnosis",
      description:
        "Our certified technician visits your home and diagnoses the issue for free.",
    },
    {
      icon: Wrench,
      step: "03",
      title: "Expert Repair",
      description:
        "We fix the problem using genuine parts and industry-standard tools.",
    },
    {
      icon: ThumbsUp,
      step: "04",
      title: "Quality Assured",
      description:
        "Post-service quality check with 90-day warranty on all repairs.",
    },
  ],
};

export function ProcessSection({ data }: { data?: ProcessData }) {
  const d = data ?? defaultData;
  return (
    <section id="process" className="bg-background py-20" aria-label="How It Works">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {d.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {d.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {d.steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {index < d.steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
              )}
              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                <item.icon className="h-7 w-7" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
