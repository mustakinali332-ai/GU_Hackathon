"use client";
import { useState } from "react";
import { safariPackages, SafariPackage } from "@/data/safaris";
import { Compass, Users, Clock, Calendar, MessageCircle, ShieldCheck, X } from "lucide-react";

export default function SafariPage() {
  const [selectedPark, setSelectedPark] = useState<string>("All");
  const [activeBookingPackage, setActiveBookingPackage] = useState<SafariPackage | null>(null);

  // Booking form state
  const [safariDate, setSafariDate] = useState<string>("2026-11-25");
  const [selectedSlot, setSelectedSlot] = useState<string>("Morning");
  const [passengerCount, setPassengerCount] = useState<number>(2);
  const [isForeigner, setIsForeigner] = useState<boolean>(false);

  const parks = ["All", "Kaziranga National Park", "Manas National Park", "Namdapha National Park"];

  const filteredPackages =
    selectedPark === "All"
      ? safariPackages
      : safariPackages.filter((p) => p.parkName === selectedPark);

  const calculateTotal = (pkg: SafariPackage) => {
    const entryFee = isForeigner ? pkg.entryFeeForeign : pkg.entryFeeIndian;
    const totalEntry = entryFee * passengerCount;
    const guardFee = 500; // Mandatory forest guard fee
    return pkg.pricePerVehicle + totalEntry + guardFee;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <Compass className="w-4 h-4" /> Official Forest Gypsy &amp; Elephant Safaris
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Wildlife Safaris &amp; Gypsy Booking
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Reserve registered 4x4 open safari gypsies and dawn elephant rides across Kaziranga, Manas, and Namdapha. Direct authorized rates with zero agency markups.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2">
          {parks.map((park) => (
            <button
              key={park}
              onClick={() => setSelectedPark(park)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selectedPark === park
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {park}
            </button>
          ))}
        </div>
      </div>

      {/* Safari Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full shadow-sm">
                    {pkg.vehicleType}
                  </span>
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                    {pkg.state}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    {pkg.parkName}
                  </p>
                  <h3 className="text-2xl font-bold">{pkg.rangeName}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pkg.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-600" /> {pkg.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" /> {pkg.bestSeason}
                  </span>
                </div>

                {/* Wildlife tags */}
                <div>
                  <p className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wider">
                    Target Wildlife:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.wildlifeHighlights.map((animal) => (
                      <span
                        key={animal}
                        className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-medium"
                      >
                        🦏 {animal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom pricing & CTA */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block font-medium">Official Rate</span>
                <span className="text-2xl font-bold text-gray-900">
                  ₹{pkg.pricePerVehicle.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500">
                  {pkg.vehicleType === "Elephant Safari" ? "/rider" : "/gypsy (up to 6)"}
                </span>
              </div>

              <button
                onClick={() => setActiveBookingPackage(pkg)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
              >
                <Compass className="w-4 h-4" /> Book Safari Slot
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {activeBookingPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveBookingPackage(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Instant Safari Reservation
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {activeBookingPackage.rangeName}
              </h3>
              <p className="text-xs text-gray-500">{activeBookingPackage.parkName}</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Safari Date
                </label>
                <input
                  type="date"
                  value={safariDate}
                  onChange={(e) => setSafariDate(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Slot Time
                  </label>
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                  >
                    <option value="Morning">Morning (6:30 AM)</option>
                    <option value="Afternoon">Afternoon (1:30 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Passengers
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(Number(e.target.value))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={isForeigner}
                    onChange={(e) => setIsForeigner(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600 accent-emerald-600"
                  />
                  <span className="text-xs font-medium text-gray-700">
                    Traveling with Foreign Passport (Applies ₹650/pax Forest Fee)
                  </span>
                </label>
              </div>

              {/* Price Breakdown Calculation */}
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 space-y-1.5 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>Vehicle Hire ({activeBookingPackage.vehicleType})</span>
                  <span className="font-semibold">₹{activeBookingPackage.pricePerVehicle}</span>
                </div>
                <div className="flex justify-between">
                  <span>Forest Entry Permit ({passengerCount} pax)</span>
                  <span className="font-semibold">
                    ₹{(isForeigner ? activeBookingPackage.entryFeeForeign : activeBookingPackage.entryFeeIndian) * passengerCount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mandatory Forest Armed Guard Fee</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="border-t border-emerald-200 pt-2 flex justify-between text-sm font-bold text-emerald-950">
                  <span>Estimated Total</span>
                  <span className="text-emerald-700">₹{calculateTotal(activeBookingPackage).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hi Ranger Desk! I would like to reserve a ${activeBookingPackage.vehicleType} at ${activeBookingPackage.parkName} (${activeBookingPackage.rangeName}) on ${safariDate} for ${passengerCount} passengers (${selectedSlot} slot). Estimated total: ₹${calculateTotal(activeBookingPackage)}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Send Request to Forest Desk (WhatsApp)
              </a>
              <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% authorized government rates • Zero booking fee
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
