"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Compass, Mail, Phone, MessageCircle } from "lucide-react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/explore", label: "STATES" },
  { href: "/attractions", label: "ATTRACTIONS" },
  { href: "/guides", label: "GUIDES" },
  { href: "/permits", label: "PERMITS & ILP" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* Top Utility Bar (Navy Blue like NorthEast Guide) */}
      <div className="bg-[#0B1E36] text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@travelmatene.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>contact@travelmatene.com</span>
            </a>
            <a
              href="tel:+919435012345"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 94350 12345 (Guwahati Desk)</span>
            </a>
          </div>

          {/* Right: Currency & WhatsApp Direct */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-300">
              <span className="font-semibold text-emerald-400">INR (₹)</span>
            </div>
            <a
              href="https://wa.me/919435012345?text=Hello%20TravelMateNE%20Desk%2C%20I%20need%20assistance%20with%20Northeast%20travel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white transition-all text-[11px] font-semibold border border-emerald-500/30"
            >
              <MessageCircle className="w-3 h-3" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-sm">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-black bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 bg-clip-text text-transparent block leading-tight">
                  TravelMateNE
                </span>
                <span className="text-[10px] text-gray-500 font-semibold tracking-wider block uppercase -mt-0.5">
                  Explore the Unexplored
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3.5 py-2 rounded-lg text-xs font-bold tracking-wider text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-3 space-y-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-bold text-gray-800 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100 space-y-2 text-xs text-gray-600 px-4 pb-2">
                <a href="tel:+919435012345" className="flex items-center gap-2 py-1 text-emerald-700 font-semibold">
                  <Phone className="w-3.5 h-3.5" /> +91 94350 12345 (Guwahati Desk)
                </a>
                <a href="mailto:contact@travelmatene.com" className="flex items-center gap-2 py-1 text-gray-600">
                  <Mail className="w-3.5 h-3.5" /> contact@travelmatene.com
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
