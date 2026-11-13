"use client";

import { useId, useState } from "react";
import { Globe, Info } from "lucide-react";
import { markets } from "./shared";

const GLOBAL = "Global (informational)";

// Purely informational: choosing a market never reveals an availability status on this public page.
export default function MarketContext() {
  const [market, setMarket] = useState(GLOBAL);
  const id = useId();

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#e6e9ef] bg-white px-5 py-6 md:flex-row md:items-end md:gap-5 md:px-10">
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#3d4a60]"
        >
          <Globe aria-hidden="true" className="size-4" strokeWidth={1.75} />
          Market context
        </label>
        <select
          id={id}
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="min-h-12 rounded-full border border-[#e6e9ef] bg-[#f7f8fb] px-5 text-sm text-[#0f1f3a] focus:border-[#926016] focus:outline-none"
        >
          <option value={GLOBAL}>{GLOBAL}</option>
          {markets.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <p role="status" className="flex items-start gap-2.5 pb-3 text-sm leading-6 text-[#556987]">
        <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-[#a35d14]" strokeWidth={1.75} />
        {market === GLOBAL
          ? "Global view. Everything on this page is informational. No market or category is shown as active."
          : `${market}: no availability is shown on this page. Market and category status comes only from approved data.`}
      </p>
    </div>
  );
}
