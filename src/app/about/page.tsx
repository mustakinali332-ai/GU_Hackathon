import Link from "next/link";
import { Compass, ShieldCheck, HeartHandshake, MapPin, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | TravelMateNE — Northeast India Tourism Explorer",
  description: "Learn about TravelMateNE, born in Guwahati, Assam to empower travelers, local guides, and indigenous communities across all 8 Northeast states.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: MapPin,
      title: "All 8 States Covered",
      description: "Unlike commercial agencies that only promote Assam and Meghalaya, TravelMateNE actively highlights all 8 states including Arunachal, Nagaland, Manipur, Mizoram, Tripura, and Sikkim.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Forest Desks",
      description: "We connect travelers directly with official Forest Department eco-development committees and certified drivers in Kaziranga, Manas, and Pobitora with zero hidden markups.",
    },
    {
      icon: HeartHandshake,
      title: "Community-First Tourism",
      description: "Every itinerary and guide recommendation supports registered local naturalists, indigenous tribal homestays, and regional artisans.",
    },
    {
      icon: Sparkles,
      title: "Smart Travel Intelligence",
      description: "Real-time Inner Line Permit (ILP) checklists, road advisory, weather windows, and transparent government tariff breakdowns.",
    },
  ];

  const milestones = [
    { metric: "8 States", label: "Complete Northeast coverage" },
    { metric: "30+ Attractions", label: "Curated cultural & natural destinations" },
    { metric: "100%", label: "Direct guide & forest desk connection" },
    { metric: "48 km", label: "Proximity to Pobitora Rhino Sanctuary from Guwahati HQ" },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-[#0B1E36] via-[#103254] to-emerald-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Compass className="w-4 h-4" /> Born in Guwahati • Built for the Northeast
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
            Connecting Travelers with the Soul of Northeast India
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TravelMateNE was envisioned right here in Guwahati to solve tourism fragmentation, eliminate permit confusion, and empower indigenous communities across all 8 states.
          </p>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 text-center">
          {milestones.map((m, i) => (
            <div key={i} className="p-2">
              <span className="text-3xl sm:text-4xl font-black text-emerald-700 block">{m.metric}</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium mt-1 block">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Origin Story Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
              Our Journey &amp; Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-6">
              Why We Built TravelMateNE
            </h2>
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                Northeast India is blessed with the world&apos;s highest rhino density in Pobitora, the living botanical root bridges of Meghalaya, sacred 400-year monasteries in Arunachal, and vibrant tribal festivals in Nagaland.
              </p>
              <p>
                Yet for years, travelers faced broken information: unclear Inner Line Permit (ILP) rules, inflated safari booking commissions by third-party aggregators, and minimal visibility for offbeat states like Manipur, Mizoram, and Tripura.
              </p>
              <p>
                As tech innovators rooted at Gauhati University, we engineered **TravelMateNE** to give travelers authentic, transparent, and direct access to local wildlife desks, verified naturalists, and indigenous culture.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="h-96 rounded-3xl bg-cover bg-center shadow-2xl overflow-hidden border-4 border-white"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 block">
                    Headquartered in Assam
                  </span>
                  <h3 className="text-xl font-bold">Jalukbari, Guwahati, Assam 781014</h3>
                  <p className="text-xs text-gray-300 mt-1">Gateway to the Seven Sisters and Sikkim</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Pillars */}
      <div className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">
              The TravelMateNE Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Our Guiding Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-sm sm:text-base">
              Built on transparency, community empowerment, and authentic exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsible Tourism Pledge */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
          Our Responsible Tourism Commitment
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
          We believe travel should enrich host communities. We strictly promote zero-single-use-plastic travel in ecologically sensitive Himalayan and forest zones, respectful tribal photography etiquette, and fair wages for local guides.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-700">
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-100 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Fair Mahout &amp; Driver Compensation
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-100 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Indigenous Cultural Respect
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-100 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Official Forest Department Compliance
          </span>
        </div>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all"
          >
            Get in Touch with Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
