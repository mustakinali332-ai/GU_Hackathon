"use client";
import { useState } from "react";
import { attractions, attractionTypes } from "@/data/attractions";
import { states } from "@/data/states";
import AttractionCard from "@/components/AttractionCard";
import { Search, Filter } from "lucide-react";

export default function AttractionsPage() {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const filtered = attractions.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase());
    const matchState = selectedState === "all" || a.stateId === selectedState;
    const matchType = selectedType === "all" || a.type === selectedType;
    return matchSearch && matchState && matchType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Discover Attractions</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Browse 30+ handpicked destinations across Northeast India</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search attractions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          >
            <option value="all">All States</option>
            {states.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          >
            {attractionTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <p className="text-gray-500 mb-6 flex items-center gap-2"><Filter className="w-4 h-4" /> Showing {filtered.length} attractions</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <AttractionCard key={a.id} attraction={a} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl">No attractions found matching your filters.</p>
          <p className="mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
