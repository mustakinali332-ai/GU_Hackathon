"use client";
import { useState } from "react";
import { permitsData } from "@/data/permits";
import { ShieldAlert, ShieldCheck, ExternalLink, FileText, Clock, IndianRupee, MapPin, Lightbulb, CheckCircle2, Search, HelpCircle } from "lucide-react";

export default function PermitsPage() {
  const [nationality, setNationality] = useState<"indian" | "foreign">("indian");
  const [filterStatus, setFilterStatus] = useState<"all" | "required" | "free">("all");
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const filteredPermits = permitsData.filter((p) => {
    const info = nationality === "indian" ? p.indianCitizens : p.foreignNationals;
    const matchesSearch = p.stateName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "required" && info.required) ||
      (filterStatus === "free" && !info.required);
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <ShieldCheck className="w-4 h-4" /> Official 2026 Guidelines
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Northeast Permits &amp; ILP Navigator
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Never get stuck at a border checkpost. Check the exact entry permits, Inner Line Permit (ILP), Protected Area Permit (PAP) requirements, official government links, and document checklists for all 8 states.
        </p>
      </div>

      {/* Control Bar: Nationality Toggle & Filters */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Nationality Switcher */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Select Your Nationality
            </label>
            <div className="inline-flex rounded-xl bg-gray-100 p-1">
              <button
                onClick={() => setNationality("indian")}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  nationality === "indian"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🇮🇳 Indian Citizen
              </button>
              <button
                onClick={() => setNationality("foreign")}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  nationality === "foreign"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🌍 Foreign National
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Search State
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="e.g. Arunachal, Sikkim..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Filter by Status
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-3 py-2 rounded-lg text-xs font-medium border ${
                  filterStatus === "all"
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                All States
              </button>
              <button
                onClick={() => setFilterStatus("required")}
                className={`px-3 py-2 rounded-lg text-xs font-medium border ${
                  filterStatus === "required"
                    ? "bg-amber-600 text-white border-amber-600"
                    : "bg-white text-amber-700 border-amber-200 hover:bg-amber-50"
                }`}
              >
                Permit Required
              </button>
              <button
                onClick={() => setFilterStatus("free")}
                className={`px-3 py-2 rounded-lg text-xs font-medium border ${
                  filterStatus === "free"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                }`}
              >
                Permit Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of States */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredPermits.map((item) => {
          const info = nationality === "indian" ? item.indianCitizens : item.foreignNationals;
          const isSelected = selectedState === item.stateId;

          return (
            <div
              key={item.stateId}
              className={`bg-white rounded-2xl shadow-md border transition-all duration-300 overflow-hidden ${
                info.required
                  ? "border-amber-200 hover:shadow-xl hover:border-amber-300"
                  : "border-emerald-100 hover:shadow-xl hover:border-emerald-200"
              }`}
            >
              {/* Header Banner */}
              <div
                className={`p-6 flex items-start justify-between ${
                  info.required ? "bg-amber-50/60" : "bg-emerald-50/60"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.stateName}</h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        info.required
                          ? "bg-amber-100 text-amber-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {info.required ? (
                        <>
                          <ShieldAlert className="w-3.5 h-3.5" /> Permit Required
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-3.5 h-3.5" /> Open / Permit-Free
                        </>
                      )}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{info.permitName}</span>
                  </div>
                </div>

                <a
                  href={info.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 bg-white rounded-xl shadow-sm text-gray-700 hover:text-emerald-600 hover:shadow transition-all border border-gray-200"
                >
                  Official Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Main Content */}
              <div className="p-6 space-y-5">
                <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 bg-gray-50 p-3.5 rounded-xl text-center">
                  <div>
                    <span className="block text-[11px] text-gray-400 uppercase font-semibold">
                      Validity
                    </span>
                    <span className="text-xs font-bold text-gray-900 mt-0.5 block">
                      {info.validity}
                    </span>
                  </div>
                  <div className="border-x border-gray-200">
                    <span className="block text-[11px] text-gray-400 uppercase font-semibold">
                      Fee
                    </span>
                    <span className="text-xs font-bold text-emerald-700 mt-0.5 block">
                      {info.fee}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[11px] text-gray-400 uppercase font-semibold">
                      Processing
                    </span>
                    <span className="text-xs font-bold text-gray-900 mt-0.5 block">
                      {info.processingTime.includes("Instant") ? "⚡ Instant" : "1-2 Days"}
                    </span>
                  </div>
                </div>

                {/* Documents Checklist */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-600" /> Required Documents Checklist:
                  </h4>
                  <ul className="space-y-1.5">
                    {info.documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Checkpoints */}
                {item.entryCheckpoints.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-500" /> Major Entry Checkposts:
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.entryCheckpoints.join(" • ")}
                    </p>
                  </div>
                )}

                {/* Pro Tips */}
                {item.proTips.length > 0 && (
                  <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3.5">
                    <h4 className="text-xs font-bold text-amber-900 mb-1 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600" /> Insider Tip:
                    </h4>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      {item.proTips[0]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 border border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Permit FAQs for Travelers</h2>
            <p className="text-gray-500 text-sm">
              Common questions travelers ask before visiting Northeast India
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">
                What is an Inner Line Permit (ILP) and who needs it?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                An Inner Line Permit (ILP) is an official travel document issued by the respective state governments to allow inward travel of an Indian citizen into a protected state. It is currently mandatory for <strong>Arunachal Pradesh, Nagaland, Mizoram, and Manipur</strong>.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Is an Aadhaar Card accepted for Nathula Pass or Gurudongmar in Sikkim?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="text-red-600 font-semibold">No!</span> Military border checkposts strictly do NOT accept Aadhaar cards as valid nationality proof for restricted border passes (Nathula Pass / North Sikkim). Always carry your physical <strong>Voter ID Card</strong> or <strong>Passport</strong> plus passport-size photos.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 text-base mb-1">
                Do I need a permit for Meghalaya or Assam?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Neither Assam nor Meghalaya requires an ILP for domestic Indian citizens. For Meghalaya, it is recommended to register on the free official <em>Meghalaya Tourism App</em> to get an e-invite QR code for quick check-ins at hotels and attractions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
