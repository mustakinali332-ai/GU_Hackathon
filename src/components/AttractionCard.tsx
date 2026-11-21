import { Star, Clock, Ticket } from "lucide-react";
import type { Attraction } from "@/data/attractions";

const typeColors: Record<string, string> = {
  nature: "bg-green-100 text-green-700",
  temple: "bg-orange-100 text-orange-700",
  adventure: "bg-blue-100 text-blue-700",
  lake: "bg-cyan-100 text-cyan-700",
  waterfall: "bg-indigo-100 text-indigo-700",
  heritage: "bg-amber-100 text-amber-700",
  wildlife: "bg-lime-100 text-lime-700",
  festival: "bg-pink-100 text-pink-700",
};

export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${attraction.image}')` }} />
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[attraction.type] || "bg-gray-100 text-gray-700"}`}>
            {attraction.type.charAt(0).toUpperCase() + attraction.type.slice(1)}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-semibold">{attraction.rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{attraction.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{attraction.description}</p>
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{attraction.timings}</span>
          <span className="flex items-center gap-1"><Ticket className="w-3.5 h-3.5" />{attraction.entryFee}</span>
        </div>
      </div>
    </div>
  );
}
