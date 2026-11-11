"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function AvailabilityClarification() {
  const [region, setRegion] = useState("");

  return (
    <section
      id="availability-clarification"
      aria-labelledby="availability-clarification-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              AVAILABILITY CLARIFICATION
            </span>
          </div>

          {/* Heading */}
          <h2
            id="availability-clarification-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Choosing a region is not the same
            <br />
            as availability.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[580px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Services, eligibility and category access vary by market and approval status. Your region preference does not activate trading or grant access.
          </p>

          {/* Interactive Selector Box */}
          <div className="mt-8 rounded-[18px] border border-slate-200/90 bg-white p-6 shadow-2xs">
            <div className="flex flex-wrap items-center gap-4">
              <label htmlFor="region-preference-desktop" className="text-[12.5px] font-bold text-[#0c1e38]">
                Region preference
              </label>
              <select
                id="region-preference-desktop"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="h-[38px] min-w-[200px] rounded-[8px] border border-slate-200 bg-white px-3.5 text-[12.5px] font-medium text-[#0c1e38] focus:border-[#926016] focus:outline-none"
              >
                <option value="">Select a region (optional)</option>
                <option value="uk">United Kingdom</option>
                <option value="eu">European Union</option>
                <option value="na">North America</option>
                <option value="other">Other / Global</option>
              </select>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-[10px] border border-[#f5dfb8] bg-[#fdf7e7] px-3.5 py-2 text-[11.5px] text-[#7c5c2b]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                {region
                  ? "Region preference noted for inquiry routing only. Market availability is determined solely by approved policy data."
                  : "No region selected. Market availability is shown only from approved policy data, and is unknown here."}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            AVAILABILITY CLARIFICATION
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Choosing a region is not the same as availability.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Services, eligibility and category access vary by market and approval status. Your region preference does not activate trading or grant access.
          </p>

          <div className="mt-5 rounded-[16px] border border-slate-200/90 bg-white p-4.5 shadow-2xs">
            <label htmlFor="region-preference-mobile" className="block text-[12px] font-bold text-[#0c1e38]">
              Region preference
            </label>
            <select
              id="region-preference-mobile"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-2 h-[40px] w-full rounded-[8px] border border-slate-200 bg-white px-3.5 text-[12.5px] font-medium text-[#0c1e38] focus:border-[#926016] focus:outline-none"
            >
              <option value="">Select a region (optional)</option>
              <option value="uk">United Kingdom</option>
              <option value="eu">European Union</option>
              <option value="na">North America</option>
              <option value="other">Other / Global</option>
            </select>
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-[10px] border border-[#f5dfb8] bg-[#fdf7e7] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              {region
                ? "Region preference noted for inquiry routing only. Market availability is determined solely by approved policy data."
                : "No region selected. Market availability is shown only from approved policy data, and is unknown here."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
