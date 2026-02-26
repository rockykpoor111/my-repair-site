import { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { BrandLogo } from "@/components/brand-logo";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { Chatbot } from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Authorized Brands Serviced | Samsung, LG, Whirlpool Repair in Delhi NCR",
  description:
    "We provide expert repair and genuine spare parts for all major appliance brands including Samsung, LG, Daikin, IFA, Whirlpool, Bosch, and Godrej. 90-day warranty.",
  keywords: ["Samsung AC repair", "LG fridge repair", "Whirlpool washing machine service", "Daikin AC service", "IFB microwave repair", "Bosch appliance repair", "authorized service center alternative"],
};

const brands = [
  { name: "Samsung", domain: "samsung.com", category: "AC, Fridge, Washing Machine, TV, Microwave" },
  { name: "LG", domain: "lg.com", category: "AC, Fridge, Washing Machine, TV, Microwave" },
  { name: "Whirlpool", domain: "whirlpool.com", category: "Fridge, Washing Machine, AC" },
  { name: "Daikin", domain: "daikin.com", category: "Air Conditioners (AC)" },
  { name: "Voltas", domain: "voltas.com", category: "Air Conditioners (AC), Fridge" },
  { name: "IFB", domain: "ifbappliances.com", category: "Washing Machine, Microwave, AC" },
  { name: "Bosch", domain: "bosch.com", category: "Washing Machine, Fridge" },
  { name: "Godrej", domain: "godrej.com", category: "Fridge, AC, Washing Machine" },
  { name: "Hitachi", domain: "hitachi.com", category: "Air Conditioners (AC), Fridge" },
  { name: "Sony", domain: "sony.com", category: "LED & Smart TV" },
  { name: "Panasonic", domain: "panasonic.com", category: "AC, TV, Microwave, Washing Machine" },
  { name: "Haier", domain: "haier.com", category: "AC, Fridge, Washing Machine" },
];

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-slate-900 py-16 lg:py-24 px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-accent">Brands</span> We Service
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
              Our certified technicians are trained to repair all major home appliance brands using genuine spare parts. We ensure your appliances perform like new.
            </p>
          </div>
        </section>

        {/* Brand Grid Section */}
        <section className="py-20 px-4 bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brands.map((brand) => (
                <div key={brand.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="h-16 w-16 bg-white text-primary rounded-full flex flex-col items-center justify-center mb-4 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] overflow-hidden">
                    <BrandLogo name={brand.name} domain={brand.domain} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">{brand.name}</h3>
                  <p className="text-sm text-slate-500 mt-2">{brand.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Text Content */}
        <section className="py-20 px-4 bg-white">
          <div className="mx-auto max-w-4xl prose prose-slate">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Premium Repair Service for Top Brands</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                When your <strong>Samsung Refrigerator</strong> stops cooling or your <strong>LG Air Conditioner</strong> isn't performing adequately, you need a service provider that understands the intricate technology inside modern appliances. At Appliances Pro, we pride ourselves on delivering specialized repair services tailored to the unique specifications of every major brand.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mt-10">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Genuine Spare Parts</h3>
                  <p className="text-sm">We strictly use OEM (Original Equipment Manufacturer) and high-quality compatible spare parts for all brands, ensuring longevity and optimal performance.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Brand-Trained Experts</h3>
                  <p className="text-sm">Our technical team undergoes rigorous training on the latest models, handling complex PCB issues, inverter technology, and advanced smart appliances.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why is Brand Expertise Important?</h3>
              <p>
                Every brand has a distinct engineering architecture. An <strong>IFB washing machine</strong> operates on different sensor mechanisms compared to a <strong>Whirlpool</strong>. Attempting repairs without specific brand knowledge can lead to further damage and voided warranties. Our precise diagnostics save you money and protect your investment.
              </p>

              <div className="mt-10 p-6 bg-blue-50 rounded-xl text-center">
                <h4 className="font-bold text-slate-900 mb-2">Don't see your brand listed here?</h4>
                <p className="text-sm text-slate-600 mb-4">Chances are, our versatile team can fix it too. Contact us to confirm!</p>
                <a href="tel:+918076418358">
                  <Button className="bg-primary hover:bg-primary/90">Call to Enquire</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-white shadow-xl md:px-12 md:py-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Book a Service?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90">
                Our expert technicians are just a call away. Get same-day service in your area.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="tel:8076418358"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-lg font-bold text-primary transition-transform hover:scale-105 active:scale-95"
                >
                  <Phone className="h-5 w-5" /> Call 8076418358
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Back to Home <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContactBar />
      <Chatbot defaultService="Home Appliance Repair" />
    </>
  );
}
