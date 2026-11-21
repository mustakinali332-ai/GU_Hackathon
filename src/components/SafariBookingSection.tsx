"use client";

import Link from "next/link";
import { ArrowRight, Compass, Heart } from "lucide-react";

interface SafariFeatureCard {
  title: string;
  slug: string;
  state: string;
  park: string;
  type: "Elephant" | "Jeep";
  startTime: string;
  duration: string;
  originalPrice?: number;
  price: number;
  discountPercent?: number;
  image: string;
}

const featuredSafaris: SafariFeatureCard[] = [
  {
    title: "Manas National Park Elephant Safari Booking",
    slug: "manas-national-park-elephant-safari-booking",
    state: "ASSAM",
    park: "Manas National Park",
    type: "Elephant",
    startTime: "6:00 AM",
    duration: "1H",
    originalPrice: 1400,
    price: 1100,
    discountPercent: 15,
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800&q=80",
  },
  {
    title: "Manas National Park Jeep Safari Booking",
    slug: "manas-national-park-jeep-safari-booking",
    state: "ASSAM",
    park: "Manas National Park",
    type: "Jeep",
    startTime: "06:30 AM",
    duration: "4H",
    originalPrice: 3500,
    price: 3000,
    discountPercent: 14,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
  {
    title: "Kaziranga Jeep Safari Booking (Bagori Range)",
    slug: "kaziranga-national-park-jeep-safari",
    state: "ASSAM",
    park: "Kaziranga National Park",
    type: "Jeep",
    startTime: "07:00 AM",
    duration: "3.5H",
    originalPrice: 3500,
    price: 2800,
    discountPercent: 20,
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
  },
  {
    title: "Kaziranga National Park Elephant Safari Booking",
    slug: "kaziranga-national-park-elephant-safari",
    state: "ASSAM",
    park: "Kaziranga National Park",
    type: "Elephant",
    startTime: "05:00 AM",
    duration: "1H",
    originalPrice: 1500,
    price: 1250,
    discountPercent: 16,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
];

export default function SafariBookingSection() {
  return (
    <section className="bg-gray-50/70 py-20 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" /> Wildlife &amp; Forest Reserves
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Safari Booking
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Authorized Elephant &amp; Open 4x4 Gypsy Safaris with Department-certified trackers.
            </p>
          </div>

          <Link
            href="/safari"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold text-sm shrink-0"
          >
            Explore All 8 Wildlife Reserves <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid - Styled like Competitor's Screenshot but much higher fidelity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSafaris.map((item) => (
            <Link
              key={item.slug}
              href={`/safari/${item.slug}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-52 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                  {/* Wishlist Heart Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-rose-400 transition-colors">
                    <Heart className="w-4 h-4" />
                  </div>

                  {/* Safari Type Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-md shadow-sm">
                      {item.type === "Elephant" ? "🐘 Elephant Ride" : "🚙 4x4 Gypsy"}
                    </span>
                  </div>

                  {/* Discount Badge if available */}
                  {item.discountPercent && (
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 bg-pink-600 text-white text-[11px] font-extrabold rounded-md shadow-md">
                        {item.discountPercent}% OFF
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-4 sm:p-5">
                  <span className="text-[11px] font-bold text-pink-600 tracking-wider uppercase block mb-1">
                    {item.state}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2 min-h-[44px]">
                    {item.title}
                  </h3>

                  <div className="mt-3 text-xs text-gray-500 font-medium">
                    Start Time: <span className="text-gray-900 font-semibold">{item.startTime}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Duration & Price */}
              <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {item.duration}
                </span>

                <div className="text-right">
                  <span className="text-xs text-gray-400 block font-normal leading-none mb-0.5">from</span>
                  <div className="flex items-center gap-1.5">
                    {item.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-base font-extrabold text-gray-900">
                      ₹{item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pobitora Guwahati Callout Banner */}
        <div className="mt-8 bg-emerald-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-2xl shrink-0">
              🦏
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg">Looking for a Safari Near Guwahati?</h4>
              <p className="text-emerald-200 text-xs sm:text-sm">
                <strong>Pobitora Wildlife Sanctuary</strong> has the world&apos;s highest rhino density, just 48 km (~1.5 hrs) from Guwahati with dawn elephant rides at ₹1,000!
              </p>
            </div>
          </div>
          <Link
            href="/safari/pobitora-wildlife-sanctuary-elephant-safari"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs sm:text-sm rounded-xl transition-all shrink-0"
          >
            Pobitora Dawn Elephant Ride →
          </Link>
        </div>

      </div>
    </section>
  );
}
