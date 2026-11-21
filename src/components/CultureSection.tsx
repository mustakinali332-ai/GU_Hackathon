"use client";

import Link from "next/link";
import { cultureHighlights } from "@/data/culture";
import { Sparkles, ArrowRight, Eye } from "lucide-react";

export default function CultureSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Living Heritage of 8 Northeast States
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Tribal Traditions, Sacred Arts &amp; Festivals
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base max-w-2xl">
              From 500-year-old river island mask makers to ancient matrilineal folk dances and 17 Naga warrior morungs. Click any cultural tradition to explore that state.
            </p>
          </div>

          <Link
            href="/explore"
            className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold text-sm bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 shrink-0"
          >
            Explore All 8 States <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Cards Grid (4 columns on lg, 2 on md, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureHighlights.map((item) => (
            <Link
              key={item.id}
              href={`/state/${item.stateSlug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image with overlay tags */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-1 bg-amber-600 text-white text-[11px] font-bold rounded-md shadow-sm">
                      {item.state}
                    </span>
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium rounded-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-base leading-snug drop-shadow-md group-hover:text-amber-300 transition-colors">
                      {item.traditionName}
                    </h3>
                  </div>
                </div>

                {/* Body info */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs text-amber-800 font-semibold mb-2 line-clamp-1">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1">
                    {item.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-medium rounded-md"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="px-4 sm:px-5 py-3 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-500 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-gray-400" /> Explore State
                </span>
                <span className="font-bold text-emerald-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  View {item.state} →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
