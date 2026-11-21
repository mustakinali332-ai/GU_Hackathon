import { Star, MessageCircle, Globe, Award } from "lucide-react";
import type { Guide } from "@/data/guides";
import { states } from "@/data/states";

export default function GuideCard({ guide }: { guide: Guide }) {
  const state = states.find((s) => s.id === guide.stateId);
  const whatsappUrl = `https://wa.me/${guide.phone}?text=Hi%20${encodeURIComponent(guide.name)}%2C%20I%20found%20you%20on%20TravelMateNE%20and%20would%20like%20to%20book%20a%20tour%20in%20${encodeURIComponent(state?.name || "")}`;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-cover bg-center shrink-0 ring-2 ring-emerald-200" style={{ backgroundImage: `url('${guide.photo}')` }} />
        <div>
          <h3 className="font-bold text-lg text-gray-900">{guide.name}</h3>
          <p className="text-emerald-600 text-sm font-medium">{state?.name}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold">{guide.rating}</span>
            <span className="text-xs text-gray-400">({guide.reviews} reviews)</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{guide.bio}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"><Award className="w-3 h-3" /> {guide.speciality}</span>
        <span className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"><Globe className="w-3 h-3" /> {guide.languages.join(", ")}</span>
      </div>
      <div className="flex items-center justify-between pt-4 border-t">
        <div>
          <span className="text-2xl font-bold text-gray-900">₹{guide.pricePerDay.toLocaleString()}</span>
          <span className="text-gray-500 text-sm">/day</span>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
