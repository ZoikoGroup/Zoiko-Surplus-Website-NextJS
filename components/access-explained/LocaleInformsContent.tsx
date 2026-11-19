"use client";

import React, { useState } from "react";
import { SlidersHorizontal, AlertTriangle, ShieldCheck, ChevronDown } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const markets = [
  "Select a market",
  "North America (US & Canada)",
  "European Union (EU)",
  "United Kingdom (UK)",
  "Asia-Pacific (APAC)",
  "Latin America (LATAM)",
];

const localeCards = [
  {
    badge: "Operation and control",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200/50",
    icon: <SlidersHorizontal className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Not universal",
    desc: "A check in one is not all categories.",
  },
  {
    badge: "Travel",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200/50",
    icon: <AlertTriangle className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Separate safety gate",
    desc: "Needs its own approval.",
  },
  {
    badge: "Continuous monitoring",
    badgeColor: "bg-orange-50 text-orange-800 border-orange-200/50",
    icon: <ShieldCheck className="size-4 text-[#c2410c]" strokeWidth={2.2} />,
    iconBg: "bg-[#ffedd5]",
    title: "Separate review",
    desc: "Status and approval change.",
  },
];

export default function LocaleInformsContent() {
  const [selectedMarket, setSelectedMarket] = useState("Select a market");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section aria-label="Market, Language and Category" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              MARKET, LANGUAGE AND CATEGORY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Locale informs content. It never authorizes service.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Choosing a language or market only changes what this page says.
          </p>

          {/* Market Selector Bar */}
          <div className="mt-10 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs">
            <div className="relative flex items-center">
              <span className="text-[13.5px] font-semibold text-[#0c1e38] mr-4">
                Market:
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[13.5px] text-[#0c1e38] hover:bg-slate-100"
                >
                  <span>{selectedMarket}</span>
                  <ChevronDown className="size-3.5 text-slate-500" />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-20 mt-1 min-w-[240px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                    {markets.map((m, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedMarket(m);
                          setDropdownOpen(false);
                        }}
                        className="w-full rounded-lg px-3 py-1.5 text-left text-[13px] text-[#0c1e38] hover:bg-slate-50"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Yellow Warning Callout */}
          <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[#fef3c7] bg-[#fffbeb] px-4 py-2.5 text-[12.5px] text-[#926016]">
            <AlertTriangle className="size-4 shrink-0 text-[#926016]" strokeWidth={2} />
            <span>
              {selectedMarket === "Select a market"
                ? "No market selected. Status shows only from approved data."
                : `Displaying localized educational content for ${selectedMarket}.`}
            </span>
          </div>

          {/* 3 Horizontal Cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {localeCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex size-8 items-center justify-center rounded-lg ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className={`${sora} mt-4 text-[16.5px] font-bold text-[#0c1e38]`}>
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#556987]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Mobile-Only Section: PUBLIC AND PROTECTED INFORMATION */}
          <div className="pb-12 mb-12 border-b border-slate-200/60">
            <div className="text-[11px] font-bold tracking-[0.14em] text-[#556987] uppercase">
              PUBLIC AND PROTECTED INFORMATION
            </div>
            <h3 className={`${sora} mt-2 text-[24px] font-bold leading-tight text-[#0c1e38]`}>
              Guidance is public.
              <br />
              Records are protected.
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
              Application records, KYB and invitations sit behind permission-scoped, secure sign-in.
            </p>

            <div className="mt-6 space-y-4">
              {/* Card 1: Public on this page (Teal) */}
              <div className="rounded-2xl border border-teal-100 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <span className="text-sm">📖</span>
                  </div>
                  <h4 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    Public on this page
                  </h4>
                </div>

                <ul className="mt-4 space-y-2.5 text-[12.5px] text-[#556987]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>How the gates work</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>Plain definitions of terms</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-600 font-bold shrink-0">✓</span>
                    <span>Where to find guidance</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Protected, after sign-in (Red) */}
              <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <span className="text-sm">🔒</span>
                  </div>
                  <h4 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    Protected, after sign-in
                  </h4>
                </div>

                <ul className="mt-4 space-y-2.5 text-[12.5px] text-[#556987]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">🔒</span>
                    <span>Application and KYB records</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">🔒</span>
                    <span>Invitations and open options</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">🔒</span>
                    <span>Status and permission changes</span>
                  </li>
                </ul>
              </div>

              {/* Warning Callout Box */}
              <div className="rounded-xl border border-[#fef3c7] bg-[#fffbeb] p-3.5 text-[#926016]">
                <div className="flex items-start gap-2">
                  <span className="text-sm">⚠️</span>
                  <p className="text-[11.5px] leading-snug">
                    Do not send identity documents to a generic contact. Protected status or seller invitations never go on public pages, only portals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 07 Header */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            MARKET, LANGUAGE AND CATEGORY
          </div>

          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Locale informs content. It never authorizes service.
          </h2>

          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Choosing a language or market only changes what this page says.
          </p>

          {/* Market Selector Bar */}
          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-[#0c1e38]">
                Market:
              </span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[12.5px] text-[#0c1e38]"
                >
                  <span>{selectedMarket}</span>
                  <ChevronDown className="size-3 text-slate-500" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full z-20 mt-1 min-w-[220px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg">
                    {markets.map((m, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedMarket(m);
                          setDropdownOpen(false);
                        }}
                        className="w-full rounded-lg px-3 py-1.5 text-left text-[12px] text-[#0c1e38] hover:bg-slate-50"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Yellow Warning Callout */}
          <div className="mt-3 flex items-start gap-2.5 rounded-xl border border-[#fef3c7] bg-[#fffbeb] p-3 text-[11.5px] text-[#926016]">
            <AlertTriangle className="size-4 shrink-0 mt-0.5 text-[#926016]" strokeWidth={2} />
            <span>
              {selectedMarket === "Select a market"
                ? "No market selected. Status shows only from approved data."
                : `Displaying localized educational content for ${selectedMarket}.`}
            </span>
          </div>

          {/* 3 Stacked Cards */}
          <div className="mt-5 space-y-3">
            {localeCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex size-8 items-center justify-center rounded-lg ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {card.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
