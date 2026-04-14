import Link from "next/link";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { Chatbot } from "@/components/chatbot";
import { MapPin } from "lucide-react";
import { locationsList, servicesList } from "@/lib/seo-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Service Locations | Appliances Pro",
    description: "Browse our comprehensive list of appliance repair service locations across Delhi NCR, Gurgaon, Noida, and Ghaziabad.",
}

export default function LocationsDirectory() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col bg-slate-50">
                <section className="bg-primary py-16 text-white md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
                            Select Your Location
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-blue-100 md:text-xl">
                            Find specialized appliance repair services precisely in your neighborhood.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {locationsList.map((loc) => (
                            <div key={loc.id} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900">{loc.name}</h2>
                                </div>
                                
                                <ul className="space-y-3 pl-2">
                                    {servicesList.map(srv => (
                                        <li key={srv.id}>
                                            <Link 
                                                href={`/locations/${loc.id}/${srv.id}`}
                                                className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors"
                                            >
                                                {srv.name} in {loc.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
            <StickyContactBar />
            <Chatbot defaultService="Home Appliance Repair" />
        </>
    )
}
