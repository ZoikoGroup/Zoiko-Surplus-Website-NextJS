"use client";

import React, { useState } from "react";
import { Search as SearchIcon, FileText } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const categories = [
  "All",
  "Getting started",
  "Sellers",
  "Buyers",
  "Partners",
  "Account & access",
  "Safety & trust",
  "Markets",
];

export default function SearchHelpTopics() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClear = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <section id="search-topics" aria-label="Search and Topics" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">01</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              SEARCH AND TOPICS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Search help topics.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Choose a topic to find relevant public guidance. Search runs in your browser only.
          </p>

          {/* Search Box */}
          <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
            <label htmlFor="search-input" className="block text-[13.5px] font-semibold text-[#0c1e38]">
              Search help topics
            </label>
            <div className="relative mt-2">
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, guides, policies..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-[#0c1e38] placeholder-slate-400 outline-none transition-colors focus:border-[#926016]"
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-[12.5px] text-[#556987]">
                Do not enter private account or inventory details.
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  className="rounded-lg bg-[#926016] px-5 py-2 text-[13px] font-semibold text-white shadow-2xs transition-colors hover:bg-[#784f12]"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-[#0c1e38] transition-colors hover:bg-slate-50"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Filter Notice Banner */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#fef3c7] bg-[#fffbeb] px-3.5 py-2 text-[12.5px] font-medium text-[#926016]">
            <FileText className="size-3.5" />
            <span>Showing all 12 guides.</span>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-all ${
                    isActive
                      ? "bg-[#0c1e38] text-white shadow-xs"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile devices)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold text-[#0c1e38]">01</span>
            <span className="h-[1px] w-6 bg-[#926016]/50"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              SEARCH AND TOPICS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Search help topics.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#556987]">
            Choose a topic to find relevant public guidance. Search runs in your browser only.
          </p>

          {/* Search Input Box */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4.5 shadow-2xs">
            <label htmlFor="search-input-mobile" className="block text-[13px] font-semibold text-[#0c1e38]">
              Search help topics
            </label>
            <div className="relative mt-2">
              <input
                id="search-input-mobile"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, guides, policies..."
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-[#0c1e38] placeholder-slate-400 outline-none transition-colors focus:border-[#926016]"
              />
            </div>

            <p className="mt-2.5 text-[12px] text-[#556987]">
              Do not enter private account or inventory details.
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              <button
                type="button"
                className="rounded-lg bg-[#926016] px-5 py-2 text-[13px] font-semibold text-white shadow-2xs transition-colors hover:bg-[#784f12]"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-[#0c1e38] transition-colors hover:bg-slate-50"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Showing all guides counter */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#fef3c7] bg-[#fffbeb] px-3.5 py-1.5 text-[12px] font-medium text-[#926016]">
            <FileText className="size-3.5" />
            <span>Showing all 12 guides.</span>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 py-1 text-[12px] font-semibold transition-all ${
                    isActive
                      ? "bg-[#0c1e38] text-white shadow-xs"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
