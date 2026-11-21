"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Heart, ChevronLeft, ChevronRight } from "lucide-react";

interface SafariFeatureCard {
  title: string;
  slug: string;
  state: string;
  park: string;
  type: "Elephant" | "Jeep" | "River/Walking";
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
    image: "/images/safaris/manas-elephant.jpg",
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
    image: "/images/safaris/manas-gypsy.jpg",
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
    image: "/images/safaris/kaziranga-gypsy.jpg",
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
    image: "/images/safaris/kaziranga-elephant.jpg",
  },
  {
    title: "Pobitora Rhino Elephant Safari (48 km from Guwahati)",
    slug: "pobitora-wildlife-sanctuary-elephant-safari",
    state: "ASSAM",
    park: "Pobitora Wildlife Sanctuary",
    type: "Elephant",
    startTime: "06:30 AM",
    duration: "1H",
    originalPrice: 1300,
    price: 1000,
    discountPercent: 23,
    image: "/images/safaris/pobitora-elephant.jpg",
  },
  {
    title: "Orang National Park 4x4 Gypsy Safari (Mini Kaziranga)",
    slug: "orang-national-park-jeep-safari",
    state: "ASSAM",
    park: "Orang National Park",
    type: "Jeep",
    startTime: "07:00 AM",
    duration: "3H",
    originalPrice: 2800,
    price: 2400,
    discountPercent: 14,
    image: "/images/safaris/orang-gypsy.jpg",
  },
  {
    title: "Nameri River Rafting & Armed Walking Forest Safari",
    slug: "nameri-national-park-river-rafting-walking-safari",
    state: "ASSAM",
    park: "Nameri National Park",
    type: "River/Walking",
    startTime: "06:30 AM",
    duration: "4H",
    originalPrice: 3200,
    price: 2800,
    discountPercent: 12,
    image: "/images/safaris/nameri-rafting.jpg",
  },
];

export default function SafariBookingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50/70 py-16 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" /> Wildlife &amp; Forest Reserves
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Safari Booking
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Authorized Elephant &amp; Open 4x4 Gypsy Safaris with Department-certified trackers. Swipe horizontally to view all.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Scroll Navigation Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 flex items-center justify-center shadow-sm transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 flex items-center justify-center shadow-sm transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/safari"
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100"
            >
              All Reserves <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Horizontally Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "thin" }}
        >
          {featuredSafaris.map((item) => (
            <Link
              key={item.slug}
              href={`/safari/${item.slug}`}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                  {/* Wishlist Heart Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white/90 hover:text-rose-400 transition-colors">
                    <Heart className="w-4 h-4" />
                  </div>

                  {/* Safari Type Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-emerald-600 text-white text-[11px] font-bold rounded-md shadow-sm">
                      {item.type === "Elephant" ? "🐘 Elephant Ride" : item.type === "River/Walking" ? "🛶 River & Walk" : "🚙 4x4 Gypsy"}
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
        <div className="mt-6 bg-emerald-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-2xl shrink-0">
              🦏
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg">Looking for a Safari Near Guwahati?</h4>
              <p className="text-emerald-200 text-xs sm:text-sm">
                <strong>Pobitora Wildlife Sanctuary</strong> has the world&apos;s highest rhino density, just 48 km (~1.5 hrs) from Gauhati University with dawn elephant rides at ₹1,000!
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
