"use client";

import { useState } from "react";
import { Check, Clock, Lock, Globe, ChevronDown } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const cards = [
  {
    badge: "BY MARKET",
    badgeColor: "bg-[#e6f7f2] text-[#009b72]",
    title: "Requirements vary",
    description: "By product type and by market.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <Check className="size-4" strokeWidth={2.5} />,
  },
  {
    badge: "BY MARKET",
    badgeColor: "bg-[#fef5e7] text-[#d97706]",
    title: "Local rules",
    description: "Local law and activist list apply.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Clock className="size-4" strokeWidth={2.5} />,
  },
  {
    badge: "SEPARATE GATE",
    badgeColor: "bg-[#fef5e7] text-[#d97706]",
    title: "Food",
    description: "Never at all without safety approval.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Lock className="size-4" strokeWidth={2.5} />,
  },
];

export default function MarketAndCategoryDependence() {
  const [selectedMarket, setSelectedMarket] = useState("Select a market");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const markets = [
    "Select a market",
    "United Kingdom (UK)",
    "European Union (EU)",
    "United States (US)",
    "Global General",
  ];

  return (
    <section aria-label="Market and Category Dependence - Safety rules differ by market" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">04</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              MARKET AND CATEGORY DEPENDENCE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Safety rules differ by market.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Choosing a market only changes what this page says. It never confirms a product may be sold there.
          </p>

          {/* Market Selector Bar */}
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs">
            <span className="text-[13px] font-semibold text-[#556987] ml-2">
              Market
            </span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2 text-[13.5px] font-medium text-[#0c1e38] transition-colors hover:bg-slate-100"
              >
                <span>{selectedMarket}</span>
                <ChevronDown className="size-4 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 z-20 mt-1 w-56 rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
                  {markets.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setSelectedMarket(m);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-[13px] text-[#0c1e38] hover:bg-slate-50 transition-colors"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Warning Banner */}
          <div className="mt-6 flex items-center gap-2.5 rounded-xl border border-[#fbf3db] bg-[#fef9ee] px-4 py-3 text-[#926016]">
            <Globe className="size-3.5 shrink-0 text-[#926016]" />
            <p className="text-[12px] font-medium leading-relaxed">
              No market selected. Status is shown only from approved data.
            </p>
          </div>

          {/* 3 Status Cards Row */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs min-h-[135px]"
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div className="mt-4">
                  <h3 className={`${sora} text-[16px] font-bold tracking-tight text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
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
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            MARKET AND CATEGORY DEPENDENCE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Safety rules differ by market.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Choosing a market only changes what this page says. It never confirms a product may be sold there.
          </p>

          {/* Market Selector Dropdown */}
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
            <span className="text-[13px] font-semibold text-[#556987] ml-1">
              Market
            </span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-1.5 text-[13px] font-medium text-[#0c1e38]"
              >
                <span>{selectedMarket}</span>
                <ChevronDown className="size-3.5 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full z-20 mt-1 w-52 rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
                  {markets.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => {
                        setSelectedMarket(m);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-[12.5px] text-[#0c1e38] hover:bg-slate-50 transition-colors"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Yellow Banner */}
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#fbf3db] bg-[#fef9ee] p-3 text-[#926016]">
            <Globe className="size-3.5 shrink-0 text-[#926016]" />
            <p className="text-[11.5px] font-medium leading-snug">
              No market selected. Status is shown only from approved data.
            </p>
          </div>

          {/* 3 Stacked Cards */}
          <div className="mt-4 flex flex-col gap-3">
            {cards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div className="mt-3">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <h3 className={`${sora} mt-1.5 text-[16px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
