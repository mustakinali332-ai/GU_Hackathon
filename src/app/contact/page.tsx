"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stateInterest: "Assam",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instant form submission & WhatsApp redirection
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello TravelMateNE Guwahati Team! 👋\n\nI would like to inquire about Northeast travel planning and permits.\n` +
      `👤 *Name:* ${formData.name || "Guest"}\n` +
      `📍 *State of Interest:* ${formData.stateInterest}\n` +
      `💬 *Message:* ${formData.message || "General inquiry"}`
    );
    window.open(`https://wa.me/919435012345?text=${text}`, "_blank");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#0B1E36] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-3.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
            Guwahati Head Office • Direct Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Contact TravelMateNE
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about Inner Line Permits, national park elephant safaris, or custom multi-state itineraries? Our local team in Guwahati is here to assist.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Guwahati Headquarters</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Jalukbari, Near Gauhati University Campus<br />
                Guwahati, Assam 781014, India
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Direct Phone Support</h3>
              <p className="text-xs text-gray-500 mb-2">Available Mon – Sat, 8:00 AM – 8:00 PM IST</p>
              <a
                href="tel:+919435012345"
                className="text-sm font-bold text-emerald-700 hover:underline block"
              >
                +91 94350 12345
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1">Email Inquiries</h3>
              <p className="text-xs text-gray-500 mb-2">We typically reply within 2 business hours</p>
              <a
                href="mailto:contact@travelmatene.com"
                className="text-sm font-bold text-emerald-700 hover:underline block"
              >
                contact@travelmatene.com
              </a>
            </div>

            {/* Instant WhatsApp Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <h4 className="font-bold text-base">Instant WhatsApp Helpdesk</h4>
              </div>
              <p className="text-xs text-emerald-100 mb-4 leading-relaxed">
                Need immediate confirmation for tomorrow&apos;s Pobitora or Kaziranga dawn elephant ride? Chat with our duty ranger.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full py-2.5 bg-white text-emerald-900 font-bold rounded-xl text-xs hover:bg-emerald-50 transition-all shadow-md"
              >
                Open WhatsApp Chat
              </button>
            </div>
          </div>

          {/* Right 2 Columns: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Message Received!</h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Our Guwahati desk has received your request and will contact you via WhatsApp/Email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                    <p className="text-xs text-gray-500">
                      Fill out the form below or chat directly on WhatsApp.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanku Goswami"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        WhatsApp / Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Primary State of Interest
                      </label>
                      <select
                        value={formData.stateInterest}
                        onChange={(e) => setFormData({ ...formData, stateInterest: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 text-gray-800"
                      >
                        <option value="Assam">Assam (Kaziranga, Manas, Pobitora)</option>
                        <option value="Meghalaya">Meghalaya (Root Bridges, Dawki)</option>
                        <option value="Nagaland">Nagaland (Hornbill, Dzukou Valley)</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh (Tawang, Ziro)</option>
                        <option value="Manipur">Manipur (Loktak Lake, Keibul Lamjao)</option>
                        <option value="Sikkim">Sikkim (Gurudongmar, Nathula Pass)</option>
                        <option value="Mizoram">Mizoram (Reiek Peak, Vantawng)</option>
                        <option value="Tripura">Tripura (Neermahal, Unakoti)</option>
                        <option value="Multi-State">All 8 States / Multi-State Tour</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Your Message / Travel Requirement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your expected travel dates, group size, or questions regarding permits and safaris..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="w-4 h-4" /> Submit Inquiry
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all text-xs flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" /> Send via WhatsApp Instead
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Privacy — We never share your contact information.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prompt local response from Guwahati team.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
