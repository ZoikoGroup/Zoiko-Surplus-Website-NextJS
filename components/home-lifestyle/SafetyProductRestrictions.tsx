"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface RuleItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const safetyRules: RuleItem[] = [
  {
    id: "recall-status",
    title: "Recall status",
    description:
      "Verification against active regulatory recalls and manufacturer safety alerts. Recalled products are hard-stopped and excluded.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 14 14" />
      </svg>
    ),
  },
  {
    id: "flammability",
    title: "Flammability",
    description:
      "Compliance with applicable regional fire resistance, textile flammability standards, and law labels for soft furnishings.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
  {
    id: "food-contact",
    title: "Food-contact",
    description:
      "Assessment of food-contact suitability, non-toxic material declarations, and coating integrity for kitchenware and tableware.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: "electrical",
    title: "Electrical",
    description:
      "Plug region compatibility, voltage suitability, cord integrity, and safety certifications for all powered small appliances.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "contamination",
    title: "Contamination",
    description:
      "Strict screening and zero-tolerance policy against moisture damage, pest contamination, chemical exposure, or compromised hygiene.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
];

export default function SafetyProductRestrictions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="safety-product-restrictions"
      aria-labelledby="safety-rules-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              SAFETY &amp; PRODUCT RESTRICTIONS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="safety-rules-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Safety rules differ by subcategory.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Mandatory, category- and market-specific review. Each control can stop a lot on its own; none implies a verified result here.
          </p>

          {/* 5 Rule Rows */}
          <div className="mt-10 flex flex-col gap-3">
            {safetyRules.map((rule) => {
              const isOpen = openId === rule.id;
              return (
                <div
                  key={rule.id}
                  className="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white transition-all hover:border-slate-300 shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggle(rule.id)}
                    className="flex w-full items-center justify-between p-4.5 px-5 text-left transition-colors hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
                        {rule.icon}
                      </div>
                      <span className="text-[14px] font-bold text-[#0c1e38]">
                        {rule.title}
                      </span>
                    </div>

                    <span
                      className={`text-[18px] font-light text-[#926016] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#f1ede6] px-5 pt-3 pb-4 text-[13px] leading-relaxed text-[#556987]">
                      {rule.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              SAFETY &amp; PRODUCT RESTRICTIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            Safety rules differ by subcategory.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Mandatory, category- and market-specific review. Each control can stop a lot on its own; none implies a verified result here.
          </p>

          {/* 5 Rule Accordion Rows */}
          <div className="mt-5 flex flex-col gap-2.5">
            {safetyRules.map((rule) => {
              const isOpen = openId === `m-${rule.id}`;
              return (
                <div
                  key={rule.id}
                  className="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggle(`m-${rule.id}`)}
                    className="flex w-full items-center justify-between p-3.5 px-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
                        {rule.icon}
                      </div>
                      <span className="text-[13.5px] font-bold text-[#0c1e38]">
                        {rule.title}
                      </span>
                    </div>

                    <span
                      className={`text-[16px] font-bold text-[#926016] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#f1ede6] px-4 pt-2.5 pb-3.5 text-[12px] leading-relaxed text-[#556987]">
                      {rule.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
