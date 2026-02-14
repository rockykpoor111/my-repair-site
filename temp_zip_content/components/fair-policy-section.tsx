import { IndianRupee, ShieldCheck, UserCheck } from "lucide-react";

const policies = [
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "No hidden charges, no surprises. Get a clear estimate before work begins. Pay only for what you need.",
    highlight: "100% Upfront Costs",
  },
  {
    icon: ShieldCheck,
    title: "90 Days Warranty",
    description:
      "Every repair backed by our 90-day service warranty. If the issue returns, we fix it for free — no questions asked.",
    highlight: "Risk-Free Repairs",
  },
  {
    icon: UserCheck,
    title: "Safe & Verified",
    description:
      "All our technicians are ID-verified, background-checked, and professionally trained. Your home is in safe hands.",
    highlight: "Background-Checked Pros",
  },
];

export function FairPolicySection() {
  return (
    <section
      className="bg-card py-20"
      aria-label="Our Fair Service Policy"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Promise
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold text-card-foreground sm:text-4xl">
            Fair, Honest & Reliable Service
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            We believe in building trust through transparency. Here is what
            makes AppliancesPro different from the rest.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="group relative flex flex-col items-center rounded-2xl border border-border bg-background p-8 text-center transition-all hover:shadow-xl hover:border-primary/30"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <policy.icon className="h-8 w-8" />
              </div>
              <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                {policy.highlight}
              </span>
              <h3 className="text-xl font-bold text-foreground">
                {policy.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {policy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
