"use client";

import { useId, useState } from "react";
import { Globe } from "lucide-react";
import { markets } from "./shared";

// Purely informational: picking a market never reveals an availability status on this public page.
export default function MarketPicker({ source = "approved" }: { source?: string }) {
  const [market, setMarket] = useState("");
  const id = useId();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-[#e6e9ef] bg-white px-5 py-4">
        <label htmlFor={id} className="text-sm font-semibold text-[#0f1f3a]">
          Market
        </label>
        <select
          id={id}
          value={market}
          onChange={(e) => setMarket(e.target.value)}
          className="min-h-11 rounded-lg border border-[#e6e9ef] bg-white px-4 text-sm text-[#0f1f3a] focus:border-[#926016] focus:outline-none"
        >
          <option value="">Select a market</option>
          {markets.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <p
        role="status"
        className="flex w-fit items-start gap-2.5 rounded-xl bg-[#fdf3e2] px-4 py-3 text-sm leading-5 text-[#3d2a0c]"
      >
        <Globe aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#8a5a14]" strokeWidth={1.75} />
        {market
          ? `${market}: availability is shown only from ${source} data, and none is shown on this page.`
          : `No market selected. Availability is shown only from ${source} data.`}
      </p>
    </div>
  );
}
