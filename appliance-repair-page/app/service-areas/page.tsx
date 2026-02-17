import { MapPin, ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { type Metadata } from "next"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { StickyContactBar } from "@/components/sticky-contact-bar"
import { Chatbot } from "@/components/chatbot"

export const metadata: Metadata = {
    title: "Service Areas - Appliances Pro | AC, Fridge, Washing Machine Repair Delhi NCR",
    description: "Appliances Pro offers doorstep repair services in every corner of Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Find your locality.",
}

type AreaCategory = {
    category: string;
    areas: string[];
}

type CityData = {
    city: string;
    sections: AreaCategory[];
}

const serviceData: CityData[] = [
    {
        city: "Noida (The Hubs)",
        sections: [
            {
                category: "Key Sectors",
                areas: ["Sector 15", "Sector 18 (Atta)", "Sector 29", "Sector 37", "Sector 41", "Sector 50", "Sector 51", "Sector 52", "Sector 61", "Sector 62"]
            },
            {
                category: "7X & New Sectors",
                areas: ["Sector 74", "Sector 75", "Sector 76", "Sector 77", "Sector 78", "Sector 79"]
            },
            {
                category: "Expressway Belt",
                areas: ["Sector 93 (ATS)", "Sector 100", "Sector 104", "Sector 107", "Sector 110", "Sector 128", "Sector 137 (Paras/Logix)", "Sector 143", "Sector 150"]
            },
            {
                category: "Extension",
                areas: ["Sector 1", "Sector 4", "Sector 16 (Noida Extension)"]
            }
        ]
    },
    {
        city: "Greater Noida (Premium Belts)",
        sections: [
            {
                category: "Alpha/Beta",
                areas: ["Alpha I & II", "Beta I & II", "Gamma I & II", "Delta I, II & III"]
            },
            {
                category: "Key Landmarks",
                areas: ["Pari Chowk", "Jagat Farm", "Knowledge Park (1, 2, 3)", "Tech Zone IV"]
            },
            {
                category: "Societies",
                areas: ["Gaur City", "Omni Cron I, II & III", "Zeta", "Eta", "Sigma sectors"]
            },
            {
                category: "Yamuna Expressway",
                areas: ["Jaypee Greens", "Sports City"]
            }
        ]
    },
    {
        city: "Ghaziabad (Residential Hubs)",
        sections: [
            {
                category: "Trans-Hindon",
                areas: ["Indirapuram (Ahinsa Khand, Niti Khand, Shakti Khand)", "Vaishali (Sec 1-9)", "Vasundhara"]
            },
            {
                category: "City Side",
                areas: ["Raj Nagar Extension", "Raj Nagar (RDC)", "Kavi Nagar", "Crossings Republik"]
            },
            {
                category: "Others",
                areas: ["Kaushambi", "Shalimar Garden", "Sahibabad", "Mohan Nagar"]
            }
        ]
    },
    {
        city: "Gurgaon (Gurugram Premium Areas)",
        sections: [
            {
                category: "DLF Phases",
                areas: ["DLF Phase 1", "DLF Phase 2", "DLF Phase 3", "DLF Phase 4", "DLF Phase 5"]
            },
            {
                category: "Key Roads",
                areas: ["Golf Course Road", "Sohna Road", "MG Road", "Cyber City"]
            },
            {
                category: "Sectors",
                areas: ["Sector 14", "Sector 15", "Sector 17", "Sector 21", "Sector 23", "Sector 31", "Sector 40", "Sector 45", "Sector 55", "Sector 56", "Sector 57"]
            },
            {
                category: "Landmarks",
                areas: ["Sushant Lok (I, II, III)", "Nirvana Country", "South City", "Palam Vihar", "Udyog Vihar", "Manesar (IMT)"]
            }
        ]
    },
    {
        city: "Faridabad (Prime Locations)",
        sections: [
            {
                category: "Sectors",
                areas: ["Sector 14", "Sector 15", "Sector 16", "Sector 16A", "Sector 17", "Sector 21C", "Sector 28", "Sector 29", "Sector 37", "Sector 46"]
            },
            {
                category: "NIT",
                areas: ["NIT 1", "NIT 2", "NIT 3", "NIT 4", "NIT 5 (Faridabad New Town)"]
            },
            {
                category: "Posh Colonies",
                areas: ["Green Fields Colony", "Sainik Colony", "Charmwood Village", "Surajkund Area", "Ashoka Enclave"]
            }
        ]
    },
    {
        city: "North & Central Delhi",
        sections: [
            {
                category: "North West Delhi",
                areas: ["Adarsh Nagar", "Ashok Vihar", "Bawana", "Begum Pur", "Haqiqat Nagar", "Karala", "Keshav Puram", "Narela", "Pitam Pura", "Rohini", "Rani Bagh", "Shalimar Bagh", "Shastri Nagar"]
            },
            {
                category: "North Delhi",
                areas: ["Azadpur", "Civil Lines", "Derawal Nagar", "Gulabi Bagh", "Kamla Nagar", "Kashmiri Gate", "Daryaganj", "Model Town", "Sadar Bazaar", "Sarai Rohilla", "Shakti Nagar", "Tis Hazari", "Timarpur", "Wazirabad", "GTB Nagar", "Urdu Bazaar", "Mukherjee Nagar", "Majnu-ka-tilla"]
            },
            {
                category: "North East Delhi",
                areas: ["Babarpur", "Bhajanpura", "Dayal Pur", "Karawal Nagar", "Naveen Shahdara", "Nand Nagri", "Shahdara", "Shastri Park", "Seelampur", "Yamuna Vihar", "Gandhi Nagar"]
            },
            {
                category: "Central Delhi",
                areas: ["Ashok Nagar", "Chandni Chowk (Old Delhi)", "Dariba Kalan", "Karol Bagh", "South Patel Nagar", "Paharganj", "Rajender Nagar"]
            }
        ]
    },
    {
        city: "East & New Delhi",
        sections: [
            {
                category: "New Delhi",
                areas: ["Barakhamba Road", "Chanakyapuri", "Connaught Place", "Gole Market", "Golf Links", "INA Colony", "Inder Puri", "Jaffrabad", "Laxmibai Nagar", "Lodhi Colony", "Lutyens' Delhi", "Mahipalpur", "Pragati Maidan", "Raisina Hill", "Rajendra Place"]
            },
            {
                category: "East Delhi",
                areas: ["East Vinod Nagar", "Krishna Nagar", "Laxmi Nagar", "Mayur Vihar", "Pandav Nagar", "Preet Vihar", "Anand Vihar", "Shreshtha Vihar", "Vasundhara Enclave", "Vivek Vihar", "Seemapuri", "Dilshad Garden"]
            }
        ]
    },
    {
        city: "South Delhi",
        sections: [
            {
                category: "South Delhi",
                areas: ["Geetanjali Enclave", "Green Park", "Gulmohar Park", "Hauz Khas", "Khanpur", "Kailash Colony", "Malviya Nagar", "Maharani Bagh", "Moti Bagh", "New Moti Bagh", "Mehrauli", "Munirka", "Netaji Nagar", "Pamposh Enclave", "Safdarjung Enclave", "Sainik Farm", "Saket", "Sarojini Nagar", "Sarvodaya Enclave", "Shaheen Bagh", "Siri Fort", "South Extension", "Shahpur Jat", "Sriniwaspuri"]
            },
            {
                category: "South East Delhi",
                areas: ["Ashram Chowk", "Khan Market", "Nizamuddin East", "Nizamuddin West", "Sarai Kale Khan", "Jangpura", "Defence Colony", "Lajpat Nagar", "New Friends Colony", "Nehru Place", "Chittaranjan Park", "Govindpuri", "Greater Kailash", "Okhla", "Sarita Vihar", "Tughlaqabad", "Badarpur", "Pul Pehladpur"]
            }
        ]
    },
    {
        city: "West Delhi",
        sections: [
            {
                category: "South West Delhi",
                areas: ["Ber Sarai", "Dabri", "Dashrath Puri", "Dwarka Sub City", "Delhi Cantonment", "Dhaula Kuan", "Ghitorni", "Janakpuri", "Najafgarh", "Naraina", "Palam", "Rama Krishna Puram", "Sagar Pur", "Vasant Kunj", "Vasant Vihar", "Kalkaji"]
            },
            {
                category: "West Delhi",
                areas: ["Bali Nagar", "Fateh Nagar", "Kirti Nagar", "Meera Bagh", "Mayapuri", "Moti Nagar", "Nangloi Jat", "Paschim Vihar", "Patel Nagar", "Punjabi Bagh", "Rajouri Garden", "Shivaji Place", "Shadipur Depot", "Shiv Ram Park", "Tihar Village", "Tilak Nagar", "Tikri Kalan", "Vikas Nagar", "Vikaspuri", "West Patel Nagar", "Uttam Nagar"]
            }
        ]
    }
]

export default function ServiceAreasPage() {
    return (
        <>
            <Header />
            <main className="flex min-h-screen flex-col bg-slate-50">
                {/* Hero Section */}
                <section className="bg-primary py-16 text-white md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
                            We Serve All Across Delhi NCR
                        </h1>
                        <p className="mx-auto max-w-3xl text-lg text-blue-100 md:text-xl">
                            We cover the entire Delhi NCR region. From Gurgaon to Ghaziabad, getting an expert technician is just a call away.
                        </p>
                    </div>
                </section>

                {/* Service Areas Content */}
                <section className="container mx-auto flex-1 px-4 py-16">
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {serviceData.map((cityData) => (
                            <div
                                key={cityData.city}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="border-b border-gray-100 bg-gray-50/50 p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900">{cityData.city}</h2>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-6">
                                        {cityData.sections.map((section) => (
                                            <div key={section.category}>
                                                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                                                    {section.category}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {section.areas.map((area) => (
                                                        <span
                                                            key={area}
                                                            className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
                                                        >
                                                            {area}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
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
    )
}
