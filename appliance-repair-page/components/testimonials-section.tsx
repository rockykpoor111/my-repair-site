import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface TestimonialsData {
  heading: string;
  subheading: string;
  reviews: Testimonial[];
}

const defaultData: TestimonialsData = {
  heading: "What Our Customers Say",
  subheading:
    "Join 2,500+ satisfied customers who trust AppliancesPro for their AC repair and maintenance needs.",
  reviews: [
    { name: "Rahul Sharma", location: "New Delhi", rating: 5, text: "Excellent service! The technician came within 30 minutes and fixed my split AC in no time. Very professional and transparent pricing." },
    { name: "Priya Patel", location: "Mumbai", rating: 5, text: "Best AC repair service I have ever used. They did a thorough gas refill and deep cleaning. My AC is cooling like brand new now!" },
    { name: "Ahmed Khan", location: "Hyderabad", rating: 5, text: "Called them for an emergency repair at night. They responded quickly and fixed the compressor issue. Highly recommend AppliancesPro!" },
    { name: "Sneha Reddy", location: "Bangalore", rating: 4, text: "Professional technicians who know their work. They installed my new split AC perfectly with neat piping. Great value for money." },
    { name: "Vikram Singh", location: "Pune", rating: 5, text: "I took the annual maintenance contract and it has been worth every penny. Regular service keeps my AC running efficiently." },
    { name: "Fatima Begum", location: "Chennai", rating: 5, text: "The deep cleaning service was amazing. The technician explained everything he was doing. Very trustworthy and skilled team." },
  ],
};

export function TestimonialsSection({ data }: { data?: TestimonialsData }) {
  const d = data ?? defaultData;
  return (
    <section id="testimonials" className="bg-card py-20" aria-label="Customer Testimonials">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Customer Reviews
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold text-card-foreground sm:text-4xl">
            {d.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {d.subheading}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {d.reviews.map((review) => (
            <Card key={review.name} className="border-border bg-background">
              <CardContent className="p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-accent text-accent" : "fill-border text-border"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {`"${review.text}"`}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
