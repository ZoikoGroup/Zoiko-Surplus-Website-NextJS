"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const marketOptions = [
  "Select a market",
  "United Kingdom",
  "United States",
  "Germany",
  "France",
  "Australia",
];

const cards = [
  {
    status: "Proposed pilot",
    title: "UK domestic apparel and footwear",
    description: "A proposed initial configuration, not active trading.",
    badgeStyle: "bg-[#e6f7f2] text-[#009b72]",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    status: "Configured later",
    title: "Other markets",
    description: "Opened market by market after approval.",
    badgeStyle: "bg-[#fef5e7] text-[#b45309]",
    iconBg: "bg-[#fef5e7] text-[#b45309]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    status: "Separately gated",
    title: "Food",
    description: "Needs safety and market approval first.",
    badgeStyle: "bg-[#fff1f2] text-[#be123c]",
    iconBg: "bg-[#fff1f2] text-[#be123c]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function MarketActivation() {
  const [selectedMarket, setSelectedMarket] = useState("Select a market");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section aria-label="Market Activation - Global by architecture. Local by activation" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              MARKET ACTIVATION
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Global by architecture. Local by activation.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            The page language you pick never switches a market on. Actual availability follows market, category and corridor policy.
          </p>

          {/* Market Selector Control */}
          <div className="mt-10 rounded-2xl border border-slate-200/90 bg-white p-5 lg:p-6 shadow-2xs">
            <div className="flex items-center gap-6">
              <span className="text-[14px] font-bold text-[#0c1e38]">Market</span>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex h-[42px] min-w-[220px] items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-[13.5px] font-medium text-[#475569] shadow-2xs transition-colors hover:border-slate-300"
                >
                  <span>{selectedMarket}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 z-20 mt-1.5 w-full rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
                    {marketOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSelectedMarket(opt);
                          setIsOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-[13px] transition-colors hover:bg-slate-50 ${
                          opt === selectedMarket ? "font-semibold text-[#009b72]" : "text-[#334155]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Warning / Informational Alert Box */}
            <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-4 py-3 text-[#926016]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-[12.5px] font-medium">
                {selectedMarket === "Select a market"
                  ? "No market selected. Status is shown only from approved data."
                  : `Selected market: ${selectedMarket}. Trade permissions require verified jurisdictional approvals.`}
              </span>
            </div>
          </div>

          {/* 3 Status Cards Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs"
              >
                <div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <div className="mt-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-[0.06em] uppercase ${card.badgeStyle}`}>
                      {card.status}
                    </span>
                  </div>
                  <h3 className={`${sora} mt-3 text-[18px] font-bold tracking-tight text-[#0c1e38]`}>
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-12">
          {/* Eyebrow */}
          <div className="text-[10.5px] font-bold tracking-[0.18em] text-[#926016] uppercase">
            MARKET ACTIVATION
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Global by architecture. Local by activation.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            The page language you pick never switches a market on. Actual availability follows market, category and corridor policy.
          </p>

          {/* Market Selector Control */}
          <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-2xs">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[13.5px] font-bold text-[#0c1e38] pl-1">Market</span>
              <div className="relative flex-1 max-w-[210px]">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex h-[38px] w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 text-[12.5px] font-medium text-[#475569] shadow-2xs"
                >
                  <span className="truncate">{selectedMarket}</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 ml-1.5 text-[#94a3b8] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute top-full right-0 z-30 mt-1.5 w-full rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
                    {marketOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setSelectedMarket(opt);
                          setIsOpen(false);
                        }}
                        className={`w-full px-3.5 py-1.5 text-left text-[12.5px] transition-colors ${
                          selectedMarket === opt
                            ? "bg-slate-50 font-semibold text-[#0c1e38]"
                            : "text-[#556987] hover:bg-slate-50 hover:text-[#0c1e38]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-3.5 py-2.5 text-[#926016]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-[12px] font-medium leading-relaxed">
              No market selected. Status is shown only from approved data.
            </span>
          </div>

          {/* 3 Status Cards Stacked */}
          <div className="mt-4 space-y-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-bold tracking-[0.05em] uppercase ${card.badgeStyle}`}>
                    {card.status}
                  </span>
                </div>
                <h3 className={`${sora} mt-3 text-[16px] font-bold text-[#0c1e38]`}>
                  {card.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
