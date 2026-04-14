import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locationsList, servicesList } from "@/lib/seo-data";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { Chatbot } from "@/components/chatbot";
import { Settings, Droplets, Snowflake, Thermometer, Zap, Wrench } from "lucide-react";

export function generateStaticParams() {
    return locationsList.map(loc => ({ city: loc.id }));
}

type Params = Promise<{ city: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { city } = await params;
    const loc = locationsList.find(l => l.id === city);
    if (!loc) return { title: "Not Found" };
    
    return {
        title: `Appliance Repair Services in ${loc.name} | Appliances Pro`,
        description: `Get the best doorstep repair for AC, Fridge, Washing Machine, and TV in ${loc.name}. Book an expert technician today!`,
    };
}

export default async function CityHubPage({ params }: { params: Params }) {
    const { city } = await params;
    const loc = locationsList.find(l => l.id === city);
    
    if (!loc) {
        notFound();
    }

    const icons: Record<string, JSX.Element> = {
        "ac-repair": <Snowflake className="h-6 w-6 text-primary" />,
        "fridge-repair": <Thermometer className="h-6 w-6 text-primary" />,
        "washing-machine-repair": <Droplets className="h-6 w-6 text-primary" />,
        "tv-repair": <Zap className="h-6 w-6 text-primary" />,
        "microwave-repair": <Settings className="h-6 w-6 text-primary" />
    };

    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col bg-slate-50">
                <section className="bg-primary py-16 text-white md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
                            Appliance Repair in {loc.name}
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-blue-100 md:text-xl">
                            We provide trusted and certified doorstep appliance repair services across {loc.name}. Choose your appliance below to get started.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-16">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {servicesList.map(srv => (
                            <Link 
                                href={`/locations/${loc.id}/${srv.id}`}
                                key={srv.id}
                                className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all hover:bg-slate-50 hover:shadow-md border border-gray-100"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                                    {icons[srv.id] || <Wrench className="h-6 w-6 text-primary" />}
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {srv.name}
                                    </h2>
                                    <p className="text-sm text-muted-foreground mt-1 text-gray-500">
                                        Same day service in {loc.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
            <StickyContactBar />
            <Chatbot defaultService="Home Appliance Repair" />
        </>
    );
}
