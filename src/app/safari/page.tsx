"use client";
import { useState } from "react";
import { safariPackages, SafariPackage } from "@/data/safaris";
import { Compass, MessageCircle, ShieldCheck, X, MapPin, Info } from "lucide-react";

export default function SafariPage() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedPark, setSelectedPark] = useState<string>("All");
  const [activeBookingPackage, setActiveBookingPackage] = useState<SafariPackage | null>(null);

  // Booking form state
  const [safariDate, setSafariDate] = useState<string>("2026-11-25");
  const [selectedSlot, setSelectedSlot] = useState<string>("Morning");
  const [passengerCount, setPassengerCount] = useState<number>(2);
  const [isForeigner, setIsForeigner] = useState<boolean>(false);

  const safariTypes = [
    { id: "All", label: "All Safaris" },
    { id: "Elephant", label: "🐘 Elephant Safaris (Dawn)" },
    { id: "Jeep", label: "🚙 4x4 Open Gypsy" },
    { id: "River/Walking", label: "🛶 River & Walking Safaris" },
  ];

  const parks = [
    "All",
    "Pobitora Wildlife Sanctuary",
    "Kaziranga National Park",
    "Manas National Park",
    "Orang National Park",
    "Nameri National Park",
  ];

  const filteredPackages = safariPackages.filter((pkg) => {
    const matchesType = selectedType === "All" || pkg.safariType === selectedType;
    const matchesPark = selectedPark === "All" || pkg.parkName === selectedPark;
    return matchesType && matchesPark;
  });

  const calculateTotal = (pkg: SafariPackage) => {
    const basePrice = pkg.safariType === "Elephant" ? pkg.pricePerVehicle * passengerCount : pkg.pricePerVehicle;
    const entryFee = (isForeigner ? pkg.entryFeeForeign : pkg.entryFeeIndian) * passengerCount;
    return basePrice + entryFee + pkg.guardFee;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <Compass className="w-4 h-4" /> Official Forest Gypsy &amp; Elephant Safaris
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Northeast Wildlife &amp; Safari Booking
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Experience the wild heartlands of Assam and the Northeast. Compare official <strong>Elephant Safaris</strong> through tall grass with high-speed <strong>4x4 Open Gypsy circuits</strong> across Kaziranga, Pobitora, Manas, Orang, and Nameri.
        </p>
      </div>

      {/* Educational Callout: Elephant vs Jeep Safaris */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-3xl p-6 sm:p-8 mb-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800 text-emerald-300 rounded-full text-xs font-semibold">
              <Info className="w-3.5 h-3.5" /> Safari Intelligence
            </span>
            <h3 className="text-2xl font-bold">Elephant Safari vs. 4x4 Gypsy: Which to Choose?</h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              <strong>🐘 Elephant Safaris</strong> operate strictly at dawn (5:00 AM – 7:30 AM). They enter 10-foot tall elephant grass where vehicles cannot go, allowing you to get within 5 meters of grazing rhinos without engine noise. Highly limited slots!<br />
              <strong>🚙 4x4 Jeep Safaris</strong> cover extensive forest circuits (up to 40 km) through grasslands, wetlands, and dense sal forests—ideal for spotting tigers, wild buffaloes, elephants, and migratory birds.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <span className="text-emerald-300 text-xs font-semibold block uppercase">Closest to Guwahati</span>
            <span className="text-xl font-bold block mt-0.5">Pobitora Sanctuary</span>
            <span className="text-xs text-gray-300">Just 48 km (~1.5 hrs) • Highest Rhino Density</span>
          </div>
        </div>
      </div>

      {/* Safari Type Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {safariTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedType === type.id
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Park Filter Dropdown */}
        <select
          value={selectedPark}
          onChange={(e) => setSelectedPark(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
        >
          {parks.map((p) => (
            <option key={p} value={p}>
              {p === "All" ? "All National Parks & Reserves" : p}
            </option>
          ))}
        </select>
      </div>

      {/* Safari Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 text-white text-xs font-bold rounded-full shadow-sm ${
                    pkg.safariType === "Elephant" ? "bg-amber-600" : pkg.safariType === "River/Walking" ? "bg-blue-600" : "bg-emerald-600"
                  }`}>
                    {pkg.vehicleType}
                  </span>
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                    {pkg.state}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" /> {pkg.parkName} • {pkg.district}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{pkg.rangeName}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pkg.description}
                </p>

                {/* Logistics Badges */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 text-center text-xs">
                  <div>
                    <span className="text-gray-400 block text-[11px]">Duration</span>
                    <span className="font-bold text-gray-900 mt-0.5 block">{pkg.duration}</span>
                  </div>
                  <div className="border-x border-gray-100">
                    <span className="text-gray-400 block text-[11px]">Capacity</span>
                    <span className="font-bold text-gray-900 mt-0.5 block">{pkg.capacity}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">From Guwahati</span>
                    <span className="font-bold text-emerald-700 mt-0.5 block">{pkg.distanceFromGuwahati}</span>
                  </div>
                </div>

                {/* Timings */}
                <div>
                  <span className="text-xs font-bold text-gray-900 block mb-1.5 uppercase tracking-wider">
                    Available Batches:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                    {pkg.timings.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-gray-100 rounded-lg font-medium">
                        🕒 {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Wildlife */}
                <div>
                  <p className="text-xs font-bold text-gray-900 mb-2 uppercase tracking-wider">
                    Key Wildlife:
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

            {/* Bottom Pricing & CTA */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block font-medium">Official Base Rate</span>
                <span className="text-2xl font-bold text-gray-900">
                  ₹{pkg.pricePerVehicle.toLocaleString()}
                </span>
                <span className="text-xs text-gray-500">
                  {pkg.safariType === "Elephant" ? "/rider" : "/vehicle (up to 6)"}
                </span>
              </div>

              <button
                onClick={() => setActiveBookingPackage(pkg)}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
              >
                <Compass className="w-4 h-4" /> Reserve Slot
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Drawer Modal */}
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
                Instant Forest Desk Reservation
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {activeBookingPackage.rangeName}
              </h3>
              <p className="text-xs text-gray-500">
                {activeBookingPackage.parkName} • {activeBookingPackage.vehicleType}
              </p>
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
                    <option value="Dawn / Morning">Dawn / Morning Batch</option>
                    <option value="Afternoon">Afternoon Batch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Passengers / Riders
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={activeBookingPackage.safariType === "Elephant" ? 4 : 6}
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
                    Traveling with Foreign Passport (Forest Entry: ₹{activeBookingPackage.entryFeeForeign}/pax)
                  </span>
                </label>
              </div>

              {/* Price Breakdown Calculation */}
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 space-y-1.5 text-xs text-gray-700">
                <div className="flex justify-between">
                  <span>
                    {activeBookingPackage.safariType === "Elephant" ? `Elephant Ride (${passengerCount} seats)` : `4x4 Gypsy Hire`}
                  </span>
                  <span className="font-semibold">
                    ₹{activeBookingPackage.safariType === "Elephant" ? activeBookingPackage.pricePerVehicle * passengerCount : activeBookingPackage.pricePerVehicle}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Forest Entry Permit ({passengerCount} pax)</span>
                  <span className="font-semibold">
                    ₹{(isForeigner ? activeBookingPackage.entryFeeForeign : activeBookingPackage.entryFeeIndian) * passengerCount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Mandatory Forest Armed Guard Fee</span>
                  <span className="font-semibold">₹{activeBookingPackage.guardFee}</span>
                </div>
                <div className="border-t border-emerald-200 pt-2 flex justify-between text-sm font-bold text-emerald-950">
                  <span>Total Payable at Ranger Desk</span>
                  <span className="text-emerald-700">
                    ₹{calculateTotal(activeBookingPackage).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hi Ranger Desk! I would like to reserve a ${activeBookingPackage.vehicleType} at ${activeBookingPackage.parkName} (${activeBookingPackage.rangeName}) on ${safariDate} for ${passengerCount} passengers (${selectedSlot} batch). Estimated total: ₹${calculateTotal(activeBookingPackage).toLocaleString()}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" /> Send Request to Forest Desk (WhatsApp)
              </a>
              <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Authorized government rates • Direct Eco-Society coordination
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
