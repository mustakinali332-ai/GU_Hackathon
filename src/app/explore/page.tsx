import StateCard from "@/components/StateCard";
import { states } from "@/data/states";
import { MapPin } from "lucide-react";

export const metadata = { title: "Explore Northeast States — TravelMateNE" };

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <MapPin className="w-4 h-4" /> 8 States to Explore
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Explore Northeast India</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From the tea gardens of Assam to the monasteries of Sikkim — discover a region of unparalleled beauty, diverse cultures, and warm hospitality.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {states.map((state, i) => (
          <StateCard key={state.id} state={state} index={i} />
        ))}
      </div>
    </div>
  );
}
