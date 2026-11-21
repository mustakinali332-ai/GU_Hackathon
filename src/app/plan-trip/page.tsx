"use client";
import { useState } from "react";
import { states } from "@/data/states";
import { Sparkles, Loader2, MapPin, Calendar, IndianRupee, Heart, Users, ChevronDown, ChevronUp, Lightbulb, AlertTriangle, Backpack, Printer, Share2 } from "lucide-react";

const interestOptions = ["Nature", "Adventure", "Culture", "Food", "Photography", "Wildlife", "Spirituality", "History"];
const styleOptions = ["Solo", "Couple", "Family", "Friends Group"];

interface TripPlan {
  title: string;
  summary: string;
  itinerary: Array<{
    day: number;
    title: string;
    location: string;
    activities: Array<{ time: string; activity: string; description: string; estimatedCost: string }>;
    accommodation: string;
    meals: string;
    tips: string;
  }>;
  budgetBreakdown: Record<string, string>;
  packingTips: string[];
  bestTimeToVisit: string;
  importantNotes: string[];
}

export default function PlanTripPage() {
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [days, setDays] = useState(5);
  const [budget, setBudget] = useState(15000);
  const [interests, setInterests] = useState<string[]>([]);
  const [travelStyle, setTravelStyle] = useState("Solo");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<TripPlan | null>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);
  const [error, setError] = useState("");

  const toggleState = (id: string) => {
    setSelectedStates((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) => prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]);
  };

  const generatePlan = async () => {
    if (selectedStates.length === 0) { setError("Please select at least one state"); return; }
    if (interests.length === 0) { setError("Please select at least one interest"); return; }
    setError("");
    setLoading(true);
    setPlan(null);
    try {
      const stateNames = selectedStates.map((id) => states.find((s) => s.id === id)?.name || id);
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ states: stateNames, days, budget, interests, travelStyle }),
      });
      if (!res.ok) throw new Error("Failed to generate plan");
      const data = await res.json();
      setPlan(data);
      setExpandedDay(0);
    } catch {
      setError("Failed to generate trip plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" /> Powered by AI
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">AI Trip Planner</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Tell us your preferences and our AI will create a personalized day-by-day itinerary with budget breakdown, food recommendations, and local tips.</p>
      </div>

      {!plan ? (
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Select States */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4"><MapPin className="w-5 h-5 text-emerald-500" /> Which states do you want to visit?</label>
              <div className="flex flex-wrap gap-2">
                {states.map((s) => (
                  <button key={s.id} onClick={() => toggleState(s.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedStates.includes(s.id) ? "bg-emerald-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Days */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4"><Calendar className="w-5 h-5 text-emerald-500" /> How many days? <span className="text-emerald-600">{days} days</span></label>
              <input type="range" min={1} max={14} value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>1 day</span><span>14 days</span></div>
            </div>

            {/* Budget */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4"><IndianRupee className="w-5 h-5 text-emerald-500" /> Budget: <span className="text-emerald-600">₹{budget.toLocaleString()}</span></label>
              <input type="range" min={3000} max={100000} step={1000} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>₹3,000</span><span>₹1,00,000</span></div>
            </div>

            {/* Interests */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4"><Heart className="w-5 h-5 text-emerald-500" /> Your interests</label>
              <div className="flex flex-wrap gap-2">
                {interestOptions.map((i) => (
                  <button key={i} onClick={() => toggleInterest(i)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${interests.includes(i) ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {i}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4"><Users className="w-5 h-5 text-emerald-500" /> Travel style</label>
              <div className="flex flex-wrap gap-2">
                {styleOptions.map((s) => (
                  <button key={s} onClick={() => setTravelStyle(s)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${travelStyle === s ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {error && <p className="text-red-500 text-sm flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> {error}</p>}

            <button onClick={generatePlan} disabled={loading} className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg">
              {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Generating your trip plan...</> : <><Sparkles className="w-5 h-5" /> Generate My Trip Plan</>}
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Plan Header */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">{plan.title}</h2>
            <p className="text-emerald-100 text-lg">{plan.summary}</p>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/20">
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">📅 {days} Days</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">💰 ₹{budget.toLocaleString()}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">👤 {travelStyle}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-sm transition-all"
                >
                  <Printer className="w-3.5 h-3.5" /> Print / PDF
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Check out my custom Northeast India trip itinerary: "${plan.title}" for ${days} days! Created with TravelMateNE: https://gu-hackathon.vercel.app/plan-trip`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share
                </a>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          {plan.itinerary && plan.itinerary.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Day-by-Day Itinerary</h3>
              {plan.itinerary.map((day, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
                  <button onClick={() => setExpandedDay(expandedDay === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                    <div>
                      <span className="text-emerald-600 font-bold">Day {day.day}</span>
                      <h4 className="text-lg font-semibold text-gray-900">{day.title}</h4>
                      <p className="text-gray-500 text-sm">{day.location}</p>
                    </div>
                    {expandedDay === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {expandedDay === idx && (
                    <div className="px-6 pb-6 space-y-4 border-t">
                      {day.activities?.map((act, ai) => (
                        <div key={ai} className="flex gap-4 pt-4">
                          <span className="text-sm font-medium text-emerald-600 w-20 shrink-0">{act.time}</span>
                          <div>
                            <p className="font-semibold text-gray-900">{act.activity}</p>
                            <p className="text-gray-600 text-sm">{act.description}</p>
                            {act.estimatedCost && <p className="text-emerald-600 text-xs mt-1">💰 {act.estimatedCost}</p>}
                          </div>
                        </div>
                      ))}
                      {day.accommodation && <div className="pt-4 border-t"><p className="text-sm"><span className="font-semibold">🏨 Stay:</span> {day.accommodation}</p></div>}
                      {day.meals && <p className="text-sm"><span className="font-semibold">🍽️ Food:</span> {day.meals}</p>}
                      {day.tips && <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-xl">💡 {day.tips}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Budget Breakdown */}
          {plan.budgetBreakdown && Object.keys(plan.budgetBreakdown).length > 0 && (
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Budget Breakdown</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(plan.budgetBreakdown).map(([key, value]) => (
                  <div key={key} className={`p-4 rounded-xl ${key === "total" ? "bg-emerald-50 col-span-2 sm:col-span-3" : "bg-gray-50"}`}>
                    <p className="text-sm text-gray-500 capitalize">{key}</p>
                    <p className={`text-lg font-bold ${key === "total" ? "text-emerald-600" : "text-gray-900"}`}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Packing Tips & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {plan.packingTips && plan.packingTips.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"><Backpack className="w-5 h-5 text-emerald-500" /> Packing Tips</h3>
                <ul className="space-y-2">
                  {plan.packingTips.map((t, i) => <li key={i} className="text-gray-600 text-sm flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span> {t}</li>)}
                </ul>
              </div>
            )}
            {plan.importantNotes && plan.importantNotes.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-amber-500" /> Important Notes</h3>
                <ul className="space-y-2">
                  {plan.importantNotes.map((n, i) => <li key={i} className="text-gray-600 text-sm flex items-start gap-2"><span className="text-amber-500 mt-0.5">⚠</span> {n}</li>)}
                </ul>
              </div>
            )}
          </div>

          {/* New Plan Button */}
          <div className="text-center">
            <button onClick={() => setPlan(null)} className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
              ← Plan Another Trip
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
