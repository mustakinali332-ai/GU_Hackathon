"use client";
import { useState } from "react";
import { states } from "@/data/states";
import { IndianRupee, Calculator, TrendingDown } from "lucide-react";

const stayTypes = [
  { label: "Budget (Hostel/Homestay)", multiplier: 0.6 },
  { label: "Mid-Range (Hotel)", multiplier: 1 },
  { label: "Premium (Resort)", multiplier: 2 },
];

const budgetData: Record<string, { transport: number; food: number; stay: number; activities: number }> = {
  assam: { transport: 400, food: 400, stay: 800, activities: 200 },
  meghalaya: { transport: 500, food: 450, stay: 1000, activities: 300 },
  nagaland: { transport: 600, food: 500, stay: 1000, activities: 300 },
  manipur: { transport: 450, food: 400, stay: 800, activities: 200 },
  mizoram: { transport: 500, food: 450, stay: 900, activities: 250 },
  tripura: { transport: 350, food: 350, stay: 700, activities: 150 },
  "arunachal-pradesh": { transport: 700, food: 500, stay: 1200, activities: 400 },
  sikkim: { transport: 600, food: 500, stay: 1200, activities: 350 },
};

const savingTips = [
  "🚌 Use shared sumos and state transport buses instead of private cabs",
  "🏠 Stay in homestays for authentic experience at half the hotel price",
  "🍛 Eat at local dhabas and market stalls for the best food at lowest prices",
  "📅 Visit during off-season (monsoon months) for 30-40% lower prices",
  "👥 Travel in groups of 3-4 to share transport and accommodation costs",
  "🎫 Check for government tourism packages and combo tickets",
];

export default function BudgetPage() {
  const [selectedState, setSelectedState] = useState("assam");
  const [days, setDays] = useState(5);
  const [stayType, setStayType] = useState(1);

  const data = budgetData[selectedState] || budgetData.assam;
  const stayMultiplier = stayTypes[stayType].multiplier;
  const perDay = {
    transport: data.transport,
    food: data.food,
    stay: Math.round(data.stay * stayMultiplier),
    activities: data.activities,
  };
  const totalPerDay = perDay.transport + perDay.food + perDay.stay + perDay.activities;
  const totalTrip = totalPerDay * days;
  const stateName = states.find((s) => s.id === selectedState)?.name || selectedState;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <Calculator className="w-4 h-4" /> Budget Tool
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Budget Estimator</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Get an approximate cost breakdown for your Northeast India trip</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Select State</label>
            <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 bg-white">
              {states.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Number of Days: <span className="text-emerald-600">{days}</span></label>
            <input type="range" min={1} max={14} value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full accent-emerald-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Accommodation Type</label>
            <div className="space-y-2">
              {stayTypes.map((s, i) => (
                <button key={i} onClick={() => setStayType(i)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${stayType === i ? "bg-emerald-500 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Estimated Cost for {stateName}</h3>
            <div className="space-y-4">
              {[
                { label: "🚗 Transport", value: perDay.transport, color: "bg-blue-50 text-blue-700" },
                { label: "🍽️ Food", value: perDay.food, color: "bg-orange-50 text-orange-700" },
                { label: "🏨 Accommodation", value: perDay.stay, color: "bg-purple-50 text-purple-700" },
                { label: "🎫 Activities", value: perDay.activities, color: "bg-pink-50 text-pink-700" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-semibold">₹{item.value}/day</span>
                </div>
              ))}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">Per Day Total</span>
                  <span className="text-xl font-bold text-emerald-600">₹{totalPerDay.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
                  <span className="font-bold text-gray-900 text-lg">{days}-Day Trip Total</span>
                  <span className="text-2xl font-bold text-emerald-600">₹{totalTrip.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><TrendingDown className="w-5 h-5 text-emerald-500" /> Money-Saving Tips</h3>
            <ul className="space-y-3">
              {savingTips.map((tip, i) => <li key={i} className="text-gray-600 text-sm">{tip}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
