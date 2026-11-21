"use client";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { State } from "@/data/states";

export default function StateCard({ state, index }: { state: State; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <Link href={`/state/${state.slug}`}>
        <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80">
          <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${state.image}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-1 text-emerald-400 text-sm mb-2"><MapPin className="w-4 h-4" />{state.capital}</div>
            <h3 className="text-2xl font-bold text-white mb-1">{state.name}</h3>
            <p className="text-gray-300 text-sm mb-3">{state.tagline}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{state.attractionCount} attractions • From ₹{state.avgBudgetPerDay}/day</span>
              <span className="flex items-center gap-1 text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Explore <ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
