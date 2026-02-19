"use client";

import React, { createContext, useContext, useState } from "react";
import { X, Loader2 } from "lucide-react";

interface WhatsAppPopupContextType {
    openPopup: (defaultService?: string) => void;
    closePopup: () => void;
}

const WhatsAppPopupContext = createContext<WhatsAppPopupContextType | undefined>(
    undefined
);

export function useWhatsAppPopup() {
    const context = useContext(WhatsAppPopupContext);
    if (!context) {
        throw new Error(
            "useWhatsAppPopup must be used within a WhatsAppPopupProvider"
        );
    }
    return context;
}

export function WhatsAppPopupProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [service, setService] = useState("");

    // Form State
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [area, setArea] = useState("");

    const openPopup = (defaultService?: string) => {
        setService(defaultService && defaultService !== "Home Appliance Repair" ? defaultService : "");
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        // Reset form
        setName("");
        setMobile("");
        setArea("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate mobile number
        const cleanDigits = mobile.replace(/\D/g, "");
        if (cleanDigits.length < 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        // Send to API in background (don't await)
        fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name.trim(),
                phone: cleanDigits,
                service: service,
                type: "WhatsApp Form Lead",
                city: area,
            }),
        }).catch((error) => console.error("Error submitting form silently:", error));

        // Instantly Redirect to WhatsApp
        const whatsappNumber = "918076418358";
        const message = `Hi, I am ${name.trim()}, need repair for ${service} at ${area}`;
        const encodedMessage = encodeURIComponent(message);

        closePopup();
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <WhatsAppPopupContext.Provider value={{ openPopup, closePopup }}>
            {children}

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-200">

                        <div className="bg-[#25D366] text-white p-4 flex justify-between items-center">
                            <h2 className="font-bold text-lg">Quick WhatsApp Inquiry</h2>
                            <button
                                onClick={closePopup}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 mb-6 text-sm">
                                Please fill briefly to connect instantly on WhatsApp.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all"
                                        placeholder="10-digit Mobile Number"
                                        pattern="^[0-9\s\-\+]+$"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                    <select
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        required
                                        className={`w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all bg-white ${service === "" ? "text-gray-500" : "text-gray-900"}`}
                                    >
                                        <option value="" disabled className="text-gray-500">Select Service</option>
                                        <option value="AC Repair" className="text-gray-900">AC Repair</option>
                                        <option value="LED TV Repair" className="text-gray-900">LED TV Repair</option>
                                        <option value="Washing Machine Repair" className="text-gray-900">Washing Machine Repair</option>
                                        <option value="Fridge Repair" className="text-gray-900">Fridge Repair</option>
                                        <option value="Microwave Repair" className="text-gray-900">Microwave Repair</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                                    <select
                                        value={area}
                                        onChange={(e) => setArea(e.target.value)}
                                        required
                                        className={`w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition-all bg-white ${area === "" ? "text-gray-500" : "text-gray-900"}`}
                                    >
                                        <option value="" disabled className="text-gray-500">Select Area/City</option>
                                        <option value="Delhi" className="text-gray-900">Delhi</option>
                                        <option value="Noida" className="text-gray-900">Noida</option>
                                        <option value="Ghaziabad" className="text-gray-900">Ghaziabad</option>
                                        <option value="Faridabad" className="text-gray-900">Faridabad</option>
                                        <option value="Gurgaon" className="text-gray-900">Gurgaon</option>
                                    </select>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-lg flex justify-center items-center transition-colors"
                                    >
                                        Continue to WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </WhatsAppPopupContext.Provider>
    );
}
