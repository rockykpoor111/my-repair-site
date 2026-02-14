"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  heading: string;
  subheading: string;
  faqs: FaqItem[];
}

const defaultData: FaqData = {
  heading: "Frequently Asked Questions",
  subheading:
    "Got questions? We have answers. Find everything you need to know about our AC repair services.",
  faqs: [
    { question: "How quickly can you send a technician for AC repair?", answer: "We offer same-day service in most areas. Once you book, our technician typically arrives within 30-60 minutes during regular hours. For emergency repairs, we have 24/7 availability." },
    { question: "What brands of AC do you repair?", answer: "We repair all major AC brands including Samsung, LG, Daikin, Voltas, Blue Star, Hitachi, Carrier, Panasonic, Whirlpool, Godrej, Lloyd, and many more." },
    { question: "Do you provide warranty on repairs?", answer: "Yes, we provide a 90-day warranty on all repairs and a 6-month warranty on replaced spare parts. If the same issue recurs within the warranty period, we fix it for free." },
    { question: "How much does AC gas refilling cost?", answer: "AC gas refilling starts from Rs. 1,499 depending on the gas type (R22, R32, R410A) and AC tonnage. We always check for leaks before refilling." },
    { question: "Is the diagnosis free?", answer: "Yes, our initial diagnosis is completely free when you proceed with the repair. We provide a transparent estimate before starting any work." },
    { question: "Do you offer annual maintenance contracts (AMC)?", answer: "Yes, we offer comprehensive AMC plans starting from Rs. 1,999/year that include 2-4 service visits, priority support, discounts on spare parts." },
    { question: "What payment methods do you accept?", answer: "We accept cash, UPI (Google Pay, PhonePe, Paytm), credit/debit cards, and net banking. Payment is collected only after the service is completed." },
    { question: "Can you install a new AC that I purchased?", answer: "Absolutely! We provide complete AC installation services including wall mounting, copper piping, electrical connections, and testing. Installation starts from Rs. 1,999." },
  ],
};

export function FaqSection({ data }: { data?: FaqData }) {
  const d = data ?? defaultData;
  return (
    <section id="faq" className="bg-background py-20" aria-label="Frequently Asked Questions">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            {d.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {d.subheading}
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {d.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
