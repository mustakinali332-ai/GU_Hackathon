"use client";
import { motion } from "framer-motion";
import { MapPin, Mountain, Sparkles, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: MapPin, label: "States", value: "8" },
  { icon: Mountain, label: "Attractions", value: "30+" },
  { icon: Sparkles, label: "Festivals", value: "50+" },
  { icon: Users, label: "Local Guides", value: "8+" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-6">
            🌿 Discover Northeast India
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Explore the{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Unexplored Paradise
            </span>
            <br />of Northeast India
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Plan affordable trips, discover hidden gems, connect with local guides, and immerse yourself in the rich culture and breathtaking landscapes of 8 beautiful states.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/plan-trip" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/25 text-lg">
              <Sparkles className="w-5 h-5" /> Plan Trip with AI <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/explore" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-lg">
              <MapPin className="w-5 h-5" /> Explore States
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <s.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
