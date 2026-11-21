"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs, BlogPost } from "@/data/blogs";
import { ArrowRight, Clock, X, Share2, Compass } from "lucide-react";

export default function BlogHomeSection() {
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  const handleShareWhatsApp = (b: BlogPost) => {
    const text = encodeURIComponent(
      `Check out this story from TravelMateNE: "${b.title}"\n\nRead more at: https://gu-hackathon.vercel.app/blogs`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header styled after competitor but elevated */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-amber-600" /> Travelers&apos; Expeditions &amp; Heritage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Read the latest from blog
            </h2>
            <p className="text-gray-500 mt-1 text-base">
              Know about North East India — Real travelers&apos; authentic photos, cultural immersion, and indigenous food diaries.
            </p>
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold text-sm shrink-0"
          >
            Explore All 8-State Stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Grid Cards - 3 on top, 3 on bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${post.coverImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold rounded-md">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-xs">
                    <div
                      className="w-6 h-6 rounded-full bg-cover bg-center border border-white"
                      style={{ backgroundImage: `url('${post.author.avatar}')` }}
                    />
                    <span className="font-medium drop-shadow">{post.author.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date Line (matches screenshot format) */}
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <span className="text-emerald-700">{post.state.toUpperCase()}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveBlog(post)}
                    className="font-bold text-gray-900 text-lg leading-snug group-hover:text-emerald-600 transition-colors line-clamp-2 cursor-pointer mb-3"
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Actions: Read More & Time */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                <button
                  onClick={() => setActiveBlog(post)}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1"
                >
                  Read More →
                </button>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Interactive Modal Reader */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveBlog(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                <span>{activeBlog.category}</span>
                <span>•</span>
                <span>{activeBlog.state}</span>
                <span>•</span>
                <span>{activeBlog.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                {activeBlog.title}
              </h2>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center border border-gray-200 shrink-0"
                  style={{ backgroundImage: `url('${activeBlog.author.avatar}')` }}
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{activeBlog.author.name}</h4>
                  <p className="text-xs text-gray-500">{activeBlog.author.role}</p>
                </div>
              </div>
            </div>

            {/* Modal Image */}
            <div
              className="h-64 rounded-2xl bg-cover bg-center mb-6 shadow-inner"
              style={{ backgroundImage: `url('${activeBlog.coverImage}')` }}
            />

            {/* Modal Body */}
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed mb-8">
              {activeBlog.content.map((p, idx) => (
                <p key={idx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Share and Action Footer */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => handleShareWhatsApp(activeBlog)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" /> Share Story on WhatsApp
              </button>

              <button
                onClick={() => setActiveBlog(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
