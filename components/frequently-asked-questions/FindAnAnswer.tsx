"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Layers,
  Building2,
  Users,
  ShoppingBag,
  ArrowLeftRight,
  ShieldCheck,
  Handshake,
  Headphones,
} from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const topics = [
  {
    image: "/images/Frequently-Asked-Questions/fa2.png",
    count: "3 QUESTIONS",
    title: "Platform",
    icon: <Layers className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#platform",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa3.png",
    count: "3 QUESTIONS",
    title: "Enterprise sellers",
    icon: <Building2 className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#sellers",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa4.png",
    count: "3 QUESTIONS",
    title: "Buyers",
    icon: <Users className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#buyers",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa5.png",
    count: "3 QUESTIONS",
    title: "Markets & categories",
    icon: <ShoppingBag className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#markets",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa6.png",
    count: "4 QUESTIONS",
    title: "Transactions",
    icon: <ArrowLeftRight className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#transactions",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa7.png",
    count: "2 QUESTIONS",
    title: "Trust & safety",
    icon: <ShieldCheck className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#safety",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa8.png",
    count: "1 QUESTION",
    title: "Partners",
    icon: <Handshake className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#partners",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa9.png",
    count: "1 QUESTION",
    title: "Support",
    icon: <Headphones className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#support",
  },
];

const mobileTopics = [
  {
    image: "/images/Frequently-Asked-Questions/fa29.jpg",
    count: "3 QUESTIONS",
    title: "Platform",
    icon: <Layers className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#platform",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa30.jpg",
    count: "3 QUESTIONS",
    title: "Enterprise sellers",
    icon: <Building2 className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#sellers",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa31.jpg",
    count: "3 QUESTIONS",
    title: "Buyers",
    icon: <Users className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#buyers",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa32.jpg",
    count: "3 QUESTIONS",
    title: "Markets & categories",
    icon: <ShoppingBag className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#markets",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa33.jpg",
    count: "4 QUESTIONS",
    title: "Transactions",
    icon: <ArrowLeftRight className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#transactions",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa34.jpg",
    count: "2 QUESTIONS",
    title: "Trust & safety",
    icon: <ShieldCheck className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#safety",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa35.jpg",
    count: "1 QUESTION",
    title: "Partners",
    icon: <Handshake className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#partners",
  },
  {
    image: "/images/Frequently-Asked-Questions/fa36.jpg",
    count: "1 QUESTION",
    title: "Support",
    icon: <Headphones className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    anchor: "#support",
  },
];

export default function FindAnAnswer() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <section
      id="search-faqs"
      aria-label="Find an answer - Search and Topics"
      className={`${hanken} w-full bg-white py-12 md:py-16`}
    >
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
          <h2
            className={`${sora} mt-3 text-[32px] font-bold tracking-tight text-[#0c1e38] lg:text-[38px]`}
          >
            Find an answer.
          </h2>
          <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-slate-600">
            Search runs in your browser only. Nothing you type is sent or stored.
          </p>

          {/* Search Box */}
          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs">
            <label
              htmlFor="faq-search-desktop"
              className="block text-[13.5px] font-semibold text-[#0c1e38]"
            >
              Search FAQs
            </label>
            <div className="mt-2.5 flex items-center gap-3">
              <input
                id="faq-search-desktop"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or topics"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[14px] text-[#0c1e38] placeholder-slate-400 outline-none transition-colors focus:border-[#926016]"
              />
              <button
                type="button"
                className="rounded-xl bg-[#926016] px-6 py-3 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-[13.5px] font-medium text-[#0c1e38] transition-colors hover:bg-slate-50"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Showing questions counter */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#fef3c7] bg-[#fffbeb] px-3.5 py-1.5 text-[12.5px] font-medium text-[#926016]">
            <FileText className="size-3.5" />
            <span>Showing all 20 questions</span>
          </div>

          {/* All Topics Heading */}
          <div className="mt-10">
            <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
              All topics
            </h3>
          </div>

          {/* 8 Topics Grid (4 cols x 2 rows) */}
          <div className="mt-4 grid grid-cols-4 gap-5">
            {topics.map((t, idx) => (
              <a
                key={idx}
                href={t.anchor}
                className="group relative flex h-[190px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 p-4.5 shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Background Photo */}
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1200px) 25vw, 320px"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182d]/90 via-[#08182d]/50 to-transparent" />

                {/* Top-Right Badge */}
                <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                  {t.icon}
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                    {t.count}
                  </span>
                  <h4 className={`${sora} mt-0.5 text-[16px] font-bold text-white`}>
                    {t.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly reserved for mobile layout)
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
            Find an answer.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
            Search runs in your browser only. Nothing you type is sent or stored.
          </p>

          {/* Search Box */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4.5 shadow-2xs">
            <label
              htmlFor="faq-search-mobile"
              className="block text-[13px] font-semibold text-[#0c1e38]"
            >
              Search FAQs
            </label>
            <div className="relative mt-2">
              <input
                id="faq-search-mobile"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or topics"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-[#0c1e38] placeholder-slate-400 outline-none transition-colors focus:border-[#926016]"
              />
            </div>

            <div className="mt-3.5 flex items-center gap-2.5">
              <button
                type="button"
                className="rounded-lg bg-[#926016] px-5 py-2 text-[13px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
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

          {/* Showing questions counter */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#fef3c7] bg-[#fffbeb] px-3.5 py-1.5 text-[12px] font-medium text-[#926016]">
            <FileText className="size-3.5" />
            <span>Showing all 20 questions</span>
          </div>

          {/* All Topics Heading */}
          <div className="mt-6">
            <h3 className={`${sora} text-[14px] font-bold text-[#0c1e38]`}>
              All topics
            </h3>
          </div>

          {/* 8 Vertically Stacked Mobile Topic Cards */}
          <div className="mt-3.5 flex flex-col gap-3.5">
            {mobileTopics.map((t, idx) => (
              <a
                key={idx}
                href={t.anchor}
                className="relative flex h-[160px] w-full flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 p-4 shadow-2xs"
              >
                {/* Background Photo */}
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182d]/90 via-[#08182d]/50 to-transparent" />

                {/* Top-Right Badge */}
                <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs">
                  {t.icon}
                </div>

                {/* Bottom Content */}
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                    {t.count}
                  </span>
                  <h4 className={`${sora} mt-0.5 text-[15.5px] font-bold text-white`}>
                    {t.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          {/* Top Questions: Four good places to start */}
          <div className="mt-12">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              TOP QUESTIONS
            </span>
            <h3 className={`${sora} mt-2 text-[24px] font-bold tracking-tight text-[#0c1e38]`}>
              Four good places to start.
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
              Direct answers to the common four before topics.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#platform"
                className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition-colors hover:border-slate-300"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e6f4f2] text-[#0d9488]">
                  <Layers className="size-4.5" />
                </div>
                <span className={`${sora} text-[13.5px] font-bold text-[#0c1e38]`}>
                  What is Zoiko Surplus?
                </span>
              </a>

              <a
                href="#platform"
                className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition-colors hover:border-slate-300"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e6f4f2] text-[#0d9488]">
                  <ShoppingBag className="size-4.5" />
                </div>
                <span className={`${sora} text-[13.5px] font-bold text-[#0c1e38]`}>
                  Is Zoiko Surplus an open shopping marketplace?
                </span>
              </a>

              <a
                href="#buyers"
                className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition-colors hover:border-slate-300"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e6f4f2] text-[#0d9488]">
                  <Users className="size-4.5" />
                </div>
                <span className={`${sora} text-[13.5px] font-bold text-[#0c1e38]`}>
                  Can any buyer browse listings or make offers?
                </span>
              </a>

              <a
                href="#transactions"
                className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition-colors hover:border-slate-300"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e6f4f2] text-[#0d9488]">
                  <ArrowLeftRight className="size-4.5" />
                </div>
                <span className={`${sora} text-[13.5px] font-bold text-[#0c1e38]`}>
                  Does Zoiko Surplus guarantee recovery value or a completed sale?
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
