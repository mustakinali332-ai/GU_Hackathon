"use client";
import { useState } from "react";
import { blogs, BlogPost } from "@/data/blogs";
import { BookOpen, Clock, Calendar, ArrowRight, X, Share2 } from "lucide-react";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  const categories = ["All", "Culture", "Food Tour", "Offbeat Travel", "Trekking", "Wildlife"];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" /> Travel Stories &amp; Field Guides
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Northeast Expedition Journal
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Practical safari tips, high-altitude trekking routes, cultural etiquette, and hidden culinary gems written by local naturalists and expedition leaders.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
          >
            <div className="relative h-60 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${blog.coverImage}')` }}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                  {blog.category}
                </span>
                <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                  {blog.state}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {blog.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-snug">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center ring-2 ring-emerald-100"
                    style={{ backgroundImage: `url('${blog.author.avatar}')` }}
                  />
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">{blog.author.name}</h3>
                    <p className="text-[11px] text-gray-400">{blog.author.role}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveBlog(blog)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-4 py-2 rounded-xl transition-all group-hover:bg-emerald-600 group-hover:text-white"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {activeBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setActiveBlog(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${activeBlog.coverImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex gap-2 mb-2">
                  <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
                    {activeBlog.category}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                    {activeBlog.state}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  {activeBlog.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center ring-2 ring-emerald-200"
                    style={{ backgroundImage: `url('${activeBlog.author.avatar}')` }}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{activeBlog.author.name}</h3>
                    <p className="text-gray-400">{activeBlog.author.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p>{activeBlog.date}</p>
                  <p className="text-emerald-600 font-semibold">{activeBlog.readTime}</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700 text-base leading-relaxed">
                {activeBlog.content.map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={() => setActiveBlog(null)}
                  className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-xl transition-all"
                >
                  Close Article
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Check out this travel guide on TravelMateNE: "${activeBlog.title}" https://gu-hackathon.vercel.app/blogs`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-xl transition-all shadow-md"
                >
                  <Share2 className="w-4 h-4" /> Share Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
