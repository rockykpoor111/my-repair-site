"use client";

import { Phone } from "lucide-react";
import { useWhatsAppPopup } from "@/components/whatsapp-popup-provider";

const WHATSAPP_NUMBER = "919876543210";
const PHONE_NUMBER = "+919876543210";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-56 md:bottom-48 right-6 z-50 flex flex-col gap-3">
      {/* New Animated Red Call Button (As per user request) */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform hover:scale-110 focus:outline-none"
        aria-label="Urgent Call for repair"
      >
        <span className="absolute inline-flex h-full w-full animate-[ping_2s_ease-in-out_infinite] rounded-full bg-red-400 opacity-75"></span>
        <Phone className="relative h-6 w-6 animate-pulse text-white" />
      </a>
    </div>
  );
}
