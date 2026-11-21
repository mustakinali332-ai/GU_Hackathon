"use client";

import { useState } from "react";
import { SafariPackage } from "@/data/safaris";
import { Calendar, Users, ShieldCheck, MessageCircle, Phone, CheckCircle } from "lucide-react";

interface SafariBookingWidgetProps {
  safari: SafariPackage;
}

export default function SafariBookingWidget({ safari }: SafariBookingWidgetProps) {
  const [date, setDate] = useState("2026-11-25");
  const [selectedTiming, setSelectedTiming] = useState(safari.timings[0] || "Dawn Slot");
  const [guests, setGuests] = useState(2);
  const [isForeigner, setIsForeigner] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");

  // Price calculations
  const baseRate = safari.safariType === "Elephant" ? safari.pricePerVehicle * guests : safari.pricePerVehicle;
  const entryFeePerPerson = isForeigner ? safari.entryFeeForeign : safari.entryFeeIndian;
  const totalEntryFee = entryFeePerPerson * guests;
  const guardFee = safari.guardFee;
  const grandTotal = baseRate + totalEntryFee + guardFee;

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello TravelMateNE Safari Desk! 🦏\n\nI want to book the following official safari:\n` +
      `🌿 *Package:* ${safari.parkName} - ${safari.vehicleType}\n` +
      `📍 *Range:* ${safari.rangeName}\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Batch/Slot:* ${selectedTiming}\n` +
      `👥 *Guests:* ${guests} person(s) (${isForeigner ? "Foreign National" : "Indian National"})\n` +
      `👤 *Lead Traveler:* ${guestName || "Guest"}\n` +
      `📱 *Phone:* ${phone || "Not provided"}\n` +
      `💰 *Estimated Forest Total:* ₹${grandTotal.toLocaleString()}\n\n` +
      `Please check current forest department slot availability and confirm permit formalities.`
    );
    window.open(`https://wa.me/919435012345?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 sticky top-24">
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
            Official Forest Desk Tariff
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-extrabold text-gray-900">
              ₹{safari.pricePerVehicle.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {safari.safariType === "Elephant" ? "/ person" : "/ vehicle (up to 6)"}
            </span>
          </div>
        </div>
        <div className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
          Govt Regulated
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {/* Safari Date */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-1.5">
            <Calendar className="w-4 h-4 text-emerald-600" /> Select Safari Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        {/* Batch / Timing Selector */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Available Dawn / Forest Batches
          </label>
          <div className="grid grid-cols-1 gap-2">
            {safari.timings.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTiming(t)}
                className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all ${
                  selectedTiming === t
                    ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold shadow-sm"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}
              >
                🕒 {t}
              </button>
            ))}
          </div>
        </div>

        {/* Guests Stepper */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
              <Users className="w-4 h-4 text-emerald-600" /> Travelers Count
            </label>
            <span className="text-xs text-gray-500">
              {safari.safariType === "Elephant" ? "Max 4 per elephant" : "Max 6 per Gypsy"}
            </span>
          </div>
          <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="w-10 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-700 font-bold hover:bg-gray-100"
            >
              -
            </button>
            <span className="flex-1 text-center font-bold text-sm text-gray-900">
              {guests} {guests === 1 ? "Traveler" : "Travelers"}
            </span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(safari.safariType === "Elephant" ? 4 : 6, g + 1))}
              className="w-10 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-700 font-bold hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Nationality Switch */}
        <div className="pt-2">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Nationality (Forest Department Requirement)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIsForeigner(false)}
              className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                !isForeigner
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              🇮🇳 Indian Resident
            </button>
            <button
              type="button"
              onClick={() => setIsForeigner(true)}
              className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                isForeigner
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              🌍 Foreign National
            </button>
          </div>
        </div>

        {/* Optional Traveler Details */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div>
            <label className="block text-[11px] font-medium text-gray-600 mb-1">Lead Traveler Name</label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-gray-600 mb-1">WhatsApp / Mobile</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Transparent Price Breakdown */}
      <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 space-y-2 mb-6 text-xs">
        <span className="font-bold text-emerald-950 uppercase tracking-wider block mb-1">
          Government Tariff Breakdown
        </span>
        <div className="flex justify-between text-gray-600">
          <span>
            {safari.safariType === "Elephant" ? `Elephant Seat (₹${safari.pricePerVehicle} × ${guests})` : "4x4 Gypsy Forest Hire"}
          </span>
          <span className="font-semibold text-gray-900">₹{baseRate.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Park Entry Permits ({guests} × ₹{entryFeePerPerson})</span>
          <span className="font-semibold text-gray-900">₹{totalEntryFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Armed Guard &amp; Forest Road Escort</span>
          <span className="font-semibold text-gray-900">₹{guardFee.toLocaleString()}</span>
        </div>
        <div className="border-t border-emerald-200 pt-2 flex justify-between items-baseline font-bold text-sm text-emerald-950">
          <span>Estimated Total</span>
          <span className="text-xl text-emerald-700">₹{grandTotal.toLocaleString()}</span>
        </div>
      </div>

      {/* Booking Actions */}
      <div className="space-y-3">
        <button
          onClick={handleWhatsAppBooking}
          className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" /> Book via Forest WhatsApp Desk
        </button>

        <a
          href="tel:+919435012345"
          className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
        >
          <Phone className="w-3.5 h-3.5" /> Call Forest Range Coordinator (+91 94350 12345)
        </a>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-[11px] text-gray-500">
        <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Official Department registered mahouts &amp; forest drivers</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>No hidden booking surcharge — Pay directly at check-in</span>
        </div>
      </div>
    </div>
  );
}
