import HeroSection from "@/components/HeroSection";
import StateCard from "@/components/StateCard";
import { states } from "@/data/states";
import { attractions } from "@/data/attractions";
import AttractionCard from "@/components/AttractionCard";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const featuredAttractions = attractions.filter((a) => a.rating >= 4.7).slice(0, 6);

  return (
    <div>
      <HeroSection />

      {/* Featured States */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Explore 8 Northeast States</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Each state has its own unique culture, cuisine, and breathtaking landscapes waiting to be discovered.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state, i) => (
            <StateCard key={state.id} state={state} index={i} />
          ))}
        </div>
      </section>

      {/* Featured Attractions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Top-Rated Attractions</h2>
              <p className="text-gray-600">Must-visit destinations handpicked for you</p>
            </div>
            <Link href="/attractions" className="hidden sm:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAttractions.map((a) => (
              <AttractionCard key={a.id} attraction={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Permits & ILP Callout Section */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3.5 py-1 bg-emerald-800 text-emerald-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                🛂 Hassle-Free Travel Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Confused about Northeast Entry Permits (ILP)?
              </h2>
              <p className="text-emerald-100 text-base leading-relaxed">
                4 states require Inner Line Permits (ILP) and Sikkim requires border passes. Access our interactive permit checklist, document requirements, and official state government portals in one place.
              </p>
            </div>
            <Link
              href="/permits"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-all shrink-0 shadow-lg"
            >
              Check Permits &amp; Rules <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 text-white">
            <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Plan Your Perfect Trip with AI</h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Tell us your budget, duration, and interests — our AI will create a personalized day-by-day itinerary with local food, stays, and hidden gems.
            </p>
            <Link href="/plan-trip" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all text-lg">
              <Sparkles className="w-5 h-5" /> Start Planning <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
