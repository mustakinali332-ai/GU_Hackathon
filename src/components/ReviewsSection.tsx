"use client";
import { useState } from "react";
import { initialReviews, Review } from "@/data/reviews";
import { Star, ShieldCheck, Plus, X } from "lucide-react";

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [tripTaken, setTripTaken] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newRev: Review = {
      id: `r-${Date.now()}`,
      author: name,
      location: location || "India",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80",
      rating,
      date: "Just now",
      tripTaken: tripTaken || "Northeast Explorer",
      comment,
      verified: true,
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsModalOpen(false);
    setName("");
    setLocation("");
    setTripTaken("");
    setComment("");
  };

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">4.9 / 5.0</span>
              <span className="text-xs text-gray-400">• Over 420+ Verified Travelers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Trusted by Adventurers Worldwide
            </h2>
            <p className="text-gray-600 mt-2 text-base">
              Real travelers sharing authentic experiences exploring the 8 states of Northeast India.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm shrink-0"
          >
            <Plus className="w-4 h-4" /> Write a Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-50/70 rounded-3xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full bg-cover bg-center ring-2 ring-emerald-100"
                      style={{ backgroundImage: `url('${rev.avatar}')` }}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{rev.author}</h3>
                      <p className="text-xs text-gray-400">{rev.location}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-gray-400 mt-0.5">{rev.date}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">
                    📍 {rev.tripTaken}
                  </span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {rev.verified && (
                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Verified Traveler Experience
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">Share Your Experience</h3>
            <p className="text-xs text-gray-500 mb-6">
              Help future travelers navigate the wonders of Northeast India.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your City / Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Guwahati, Assam"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Star Rating
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Trip / Circuit Taken
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kaziranga Safari & Shillong"
                  value={tripTaken}
                  onChange={(e) => setTripTaken(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Review &amp; Travel Tip
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what you loved, local guides who helped, or advice for permits..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all text-sm"
                >
                  Publish Verified Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
