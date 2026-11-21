"use client";
import { useState } from "react";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/guides";
import { states } from "@/data/states";
import { Users } from "lucide-react";

export default function GuidesPage() {
  const [selectedState, setSelectedState] = useState("all");

  const filtered = selectedState === "all" ? guides : guides.filter((g) => g.stateId === selectedState);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <Users className="w-4 h-4" /> Verified Local Guides
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Connect with Local Guides</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Experience Northeast India through the eyes of locals. Our guides know the hidden trails, best food spots, and untold stories.
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedState("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedState === "all" ? "bg-emerald-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border"}`}
          >
            All States
          </button>
          {states.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedState(s.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedState === s.id ? "bg-emerald-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100 border"}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((g) => (
          <GuideCard key={g.id} guide={g} />
        ))}
      </div>
    </div>
  );
}
