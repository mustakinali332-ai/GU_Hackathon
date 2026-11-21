import { Compass, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TravelMateNE</span>
            </div>
            <p className="text-gray-400 max-w-md">Discover the unexplored paradise of Northeast India. Plan affordable trips, find local guides, and explore the rich culture of 8 beautiful states.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/explore" className="hover:text-emerald-400 transition-colors">All States</Link></li>
              <li><Link href="/attractions" className="hover:text-emerald-400 transition-colors">Attractions</Link></li>
              <li><Link href="/plan-trip" className="hover:text-emerald-400 transition-colors">AI Trip Planner</Link></li>
              <li><Link href="/guides" className="hover:text-emerald-400 transition-colors">Local Guides</Link></li>
              <li><Link href="/permits" className="hover:text-emerald-400 transition-colors">Permits &amp; ILP Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">NE States</h3>
            <ul className="space-y-2">
              <li><Link href="/state/assam" className="hover:text-emerald-400 transition-colors">Assam</Link></li>
              <li><Link href="/state/meghalaya" className="hover:text-emerald-400 transition-colors">Meghalaya</Link></li>
              <li><Link href="/state/sikkim" className="hover:text-emerald-400 transition-colors">Sikkim</Link></li>
              <li><Link href="/state/arunachal-pradesh" className="hover:text-emerald-400 transition-colors">Arunachal Pradesh</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p className="flex items-center justify-center gap-1.5 text-sm">Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline shrink-0" /> for Northeast India | TravelMateNE &copy; 2026</p>
        </div>
      </div>
    </footer>
  );
}
