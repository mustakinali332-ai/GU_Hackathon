import { notFound } from "next/navigation";
import { states } from "@/data/states";
import { getAttractionsByState } from "@/data/attractions";
import { getFestivalsByState } from "@/data/festivals";
import { guides } from "@/data/guides";
import AttractionCard from "@/components/AttractionCard";
import GuideCard from "@/components/GuideCard";
import { MapPin, Calendar, IndianRupee, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return states.map((s) => ({ slug: s.slug }));
}

export default async function StatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const state = states.find((s) => s.slug === slug);
  if (!state) notFound();

  const stateAttractions = getAttractionsByState(state.id);
  const stateFestivals = getFestivalsByState(state.id);
  const stateGuides = guides.filter((g) => g.stateId === state.id);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-80 sm:h-96 flex items-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${state.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <Link href="/explore" className="inline-flex items-center gap-1 text-emerald-400 text-sm mb-4 hover:text-emerald-300">
            <ArrowLeft className="w-4 h-4" /> Back to States
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{state.name}</h1>
          <p className="text-xl text-emerald-300 mb-4">{state.tagline}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Capital: {state.capital}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Best Time: {state.bestTime}</span>
            <span className="flex items-center gap-1"><IndianRupee className="w-4 h-4" /> From ₹{state.avgBudgetPerDay}/day</span>
            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> {state.language.join(", ")}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About {state.name}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{state.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {state.highlights.map((h) => (
              <span key={h} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">{h}</span>
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Attractions in {state.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateAttractions.map((a) => (
              <AttractionCard key={a.id} attraction={a} />
            ))}
          </div>
        </section>

        {/* Festivals */}
        {stateFestivals.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Festivals & Culture</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stateFestivals.map((f) => (
                <div key={f.id} className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🎭</span>
                    <h3 className="font-bold text-lg text-gray-900">{f.name}</h3>
                  </div>
                  <p className="text-emerald-600 text-sm font-medium mb-2">📅 {f.month}</p>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Guides */}
        {stateGuides.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Local Guides in {state.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stateGuides.map((g) => (
                <GuideCard key={g.id} guide={g} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
