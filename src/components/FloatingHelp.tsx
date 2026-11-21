"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingHelp() {
  const whatsappNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20TravelMateNE%20team!%20I%20am%20planning%20a%20trip%20to%20Northeast%20India%20and%20need%20assistance.`;

  return (
    <aside aria-label="Support chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-sm font-semibold pr-1">Ask Local Expert</span>
      </a>
    </aside>
  );
}
