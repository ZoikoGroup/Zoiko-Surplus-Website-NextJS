"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const markets = [
  "United Kingdom",
  "European Union (Pilot)",
  "North America",
  "Middle East & APAC",
];

const categories = [
  "Apparel & Footwear",
  "Consumer Electronics",
  "Food & Grocery (Ambient)",
  "Home, Kitchen & General Merchandise",
  "Beauty & Personal Care",
];

export default function MarketPreflight() {
  const [selectedMarket, setSelectedMarket] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMarket || !selectedCategory) {
      setResultMessage("Please select both a market and a category to inspect current intake status.");
      return;
    }

    if (selectedMarket === "United Kingdom" && selectedCategory === "Apparel & Footwear") {
      setResultMessage("UK — Apparel & Footwear: Proposed first pilot intake currently accepting expressions of interest.");
    } else if (selectedCategory.includes("Food")) {
      setResultMessage(`${selectedMarket} — ${selectedCategory}: Intake gated separately pending food safety & regulatory verification.`);
    } else {
      setResultMessage(`${selectedMarket} — ${selectedCategory}: Not yet live. Pre-registration open for informational updates.`);
    }
  };

  return (
    <section id="market-preflight" aria-labelledby="market-preflight-heading" className={`${hanken} w-full order-2 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-[#0c1e38] text-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-white/90`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#009b72]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
              MARKET PREFLIGHT
            </span>
          </div>

          {/* Heading */}
          <h2
            id="market-preflight-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-white sm:text-[42px] lg:text-[46px]"
          >
            First, check your market.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#94a3b8] sm:text-[16px]">
            Buyer applications open by market and category. Check before you apply — this never grants access, it only tells you if intake is open.
          </p>

          {/* Interactive Form Card */}
          <div className="mt-10 max-w-[980px] rounded-[20px] bg-white p-6 text-[#0f172a] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <form onSubmit={handleCheck} className="grid grid-cols-1 items-end gap-4 sm:grid-cols-12">
              {/* Field 1: Market / Country */}
              <div className="sm:col-span-5">
                <label htmlFor="market-select" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                  Market / country
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="market-select"
                    value={selectedMarket}
                    onChange={(e) => {
                      setSelectedMarket(e.target.value);
                      setResultMessage(null);
                    }}
                    className="w-full appearance-none rounded-[10px] border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#0f172a] transition-all focus:border-[#009b72] focus:outline-none focus:ring-1 focus:ring-[#009b72]"
                  >
                    <option value="">Select a market...</option>
                    {markets.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#64748b]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Field 2: Category */}
              <div className="sm:col-span-5">
                <label htmlFor="category-select" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                  Category
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setResultMessage(null);
                    }}
                    className="w-full appearance-none rounded-[10px] border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#0f172a] transition-all focus:border-[#009b72] focus:outline-none focus:ring-1 focus:ring-[#009b72]"
                  >
                    <option value="">Select a category...</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#64748b]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="flex h-[42px] w-full items-center justify-center rounded-[10px] bg-[#926016] px-4 text-[13px] font-bold text-white shadow-xs transition-colors hover:bg-[#a66e1b]"
                >
                  Check availability
                </button>
              </div>
            </form>

            {/* Inline Result Message */}
            {resultMessage && (
              <div className="mt-4 flex items-center gap-2.5 rounded-[10px] bg-[#f8fafc] px-4 py-3 text-[12.5px] font-medium text-[#334155] border border-[#e2e8f0]">
                <span className="size-2 rounded-full bg-[#009b72]" />
                <span>{resultMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fcf8f2] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            MARKET PREFLIGHT
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          First, check your market.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Buyer applications open by market and category. Check before you apply — this never grants access, it only tells you if intake is open.
        </p>

        {/* Mobile Form Card */}
        <div className="mt-7 rounded-[20px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
          <form onSubmit={handleCheck} className="flex flex-col gap-4">
            {/* Field 1 */}
            <div>
              <label htmlFor="market-select-mobile" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                Market / country
              </label>
              <div className="relative mt-1.5">
                <select
                  id="market-select-mobile"
                  value={selectedMarket}
                  onChange={(e) => {
                    setSelectedMarket(e.target.value);
                    setResultMessage(null);
                  }}
                  className="w-full appearance-none rounded-[10px] border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#0f172a] focus:border-[#009b72] focus:outline-none"
                >
                  <option value="">Select a market...</option>
                  {markets.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#64748b]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Field 2 */}
            <div>
              <label htmlFor="category-select-mobile" className="block text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
                Category
              </label>
              <div className="relative mt-1.5">
                <select
                  id="category-select-mobile"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setResultMessage(null);
                  }}
                  className="w-full appearance-none rounded-[10px] border border-[#cbd5e1] bg-white px-3.5 py-2.5 text-[13px] font-medium text-[#0f172a] focus:border-[#009b72] focus:outline-none"
                >
                  <option value="">Select a category...</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#64748b]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-1 flex h-[46px] w-full items-center justify-center rounded-[10px] bg-[#926016] text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#a66e1b]"
            >
              Check availability
            </button>
          </form>

          {/* Inline Result Message on Mobile */}
          {resultMessage && (
            <div className="mt-4 flex items-start gap-2.5 rounded-[10px] bg-[#f8fafc] p-3 text-[12px] font-medium leading-relaxed text-[#334155] border border-[#e2e8f0]">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-[#009b72]" />
              <span>{resultMessage}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
