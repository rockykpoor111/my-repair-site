import Link from "next/link";
import { Wind, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Wind className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">AppliancesPro</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Your trusted partner for all AC repair and maintenance needs.
              Professional, reliable, and affordable service since 2015.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Our Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2" role="list">
              {[
                { label: "AC Repair", href: "/" },
                { label: "Washing Machine Repair", href: "/washing-machine" },
                { label: "TV Repair", href: "/tv-repair" },
                { label: "Microwave Repair", href: "/microwave-repair" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2" role="list">
              {[
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Our Process", href: "#process" },
                { label: "Customer Reviews", href: "#testimonials" },
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Contact Info
            </h3>
            <ul className="mt-4 flex flex-col gap-3" role="list">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:info@appliancespro.com"
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground"
                >
                  info@appliancespro.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/60">
                  Serving All Major Cities
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
          <p>
            {`\u00A9 ${new Date().getFullYear()} AppliancesPro. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
