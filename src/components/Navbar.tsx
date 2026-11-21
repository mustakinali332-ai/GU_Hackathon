"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore States" },
  { href: "/attractions", label: "Attractions" },
  { href: "/plan-trip", label: "AI Trip Planner" },
  { href: "/guides", label: "Local Guides" },
  { href: "/budget", label: "Budget Estimator" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">TravelMateNE</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors">{l.label}</Link>
            ))}
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
