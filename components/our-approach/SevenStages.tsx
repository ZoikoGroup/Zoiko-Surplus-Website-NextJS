"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface Stage {
  step: number;
  name: string;
  description: string;
  input: string;
  output: string;
}

const stages: Stage[] = [
  {
    step: 1,
    name: "Qualify",
    description:
      "Confirm condition, quantity, provenance and the category requirements a lot must meet before it can move.",
    input: "Lot record",
    output: "Qualified lot",
  },
  {
    step: 2,
    name: "Govern",
    description:
      "Apply category safety checks, brand rules, legal controls and approved market eligibility before any buyer exposure.",
    input: "Qualified lot",
    output: "Policy-cleared lot",
  },
  {
    step: 3,
    name: "Match",
    description:
      "Connect qualified lots with verified, seller-approved business buyers under private permission settings.",
    input: "Policy-cleared lot",
    output: "Matched buyer group",
  },
  {
    step: 4,
    name: "Optimize",
    description:
      "Evaluate authorized disposition pathways on expected net recovery while remaining inside policy constraints.",
    input: "Matched buyer group",
    output: "Selected route",
  },
  {
    step: 5,
    name: "Transact",
    description:
      "Execute governed offers, orders or institutional transfers where a market and category are formally activated.",
    input: "Selected route",
    output: "Agreed disposition",
  },
  {
    step: 6,
    name: "Prove",
    description:
      "Capture decision logs, inspection evidence, chain-of-custody records and completion artifacts.",
    input: "Agreed disposition",
    output: "Evidence record",
  },
  {
    step: 7,
    name: "Resolve",
    description:
      "Handle exceptions, holds, disputes or claims through structured, accountable review workflows.",
    input: "Exception / claim",
    output: "Resolved outcome",
  },
];

export default function SevenStages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = stages[activeIndex];

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % stages.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + stages.length) % stages.length);
    }
  };

  return (
    <section
      id="seven-stages"
      aria-labelledby="seven-stages-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              THE SEVEN STAGES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="seven-stages-heading"
            className="mt-3.5 max-w-[1120px] text-[34px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#0c1e38] sm:text-[40px] lg:text-[44px]"
          >
            Qualify &rarr; Govern &rarr; Match &rarr; Optimize &rarr; Transact
            <br />
            &rarr; Prove &rarr; Resolve.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Select a stage to see what it does in plain English. On a keyboard, use the arrow keys.
          </p>

          {/* 7 Stage Tabs */}
          <div
            role="tablist"
            aria-label="Seven governed stages"
            onKeyDown={handleKeyDown}
            className="mt-10 grid grid-cols-7 gap-3"
          >
            {stages.map((stage, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={stage.name}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-start rounded-[10px] border px-4 py-3.5 text-left transition-all ${
                    isActive
                      ? "border-[#0f172a] bg-[#0f172a] text-white shadow-sm"
                      : "border-slate-200/90 bg-white text-[#0c1e38] hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold ${
                      isActive ? "text-slate-300" : "text-[#64748b]"
                    }`}
                  >
                    {stage.step}
                  </span>
                  <span className="mt-1 text-[13.5px] font-extrabold">
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Card */}
          <div
            role="tabpanel"
            className="mt-5 flex flex-col items-center justify-between gap-8 rounded-[18px] border border-slate-200/90 bg-white p-7 sm:flex-row sm:p-8 shadow-2xs"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-[6px] bg-[#009b72] text-[13px] font-extrabold text-white">
                  {current.step}
                </span>
                <h3 className="text-[22px] font-extrabold text-[#0c1e38]">
                  {current.name}
                </h3>
              </div>

              <p className="mt-3.5 max-w-[540px] text-[14.5px] leading-relaxed text-[#556987]">
                {current.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f8fafc] px-3.5 py-1 text-[11.5px] text-[#556987]">
                  <span className="size-1.5 rounded-full bg-[#009b72]" />
                  <span>Input: {current.input}</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f8fafc] px-3.5 py-1 text-[11.5px] text-[#556987]">
                  <span className="size-1.5 rounded-full bg-[#926016]" />
                  <span>Output: {current.output}</span>
                </span>
              </div>
            </div>

            <div className="relative h-[145px] w-full shrink-0 overflow-hidden rounded-[14px] bg-slate-100 sm:w-[240px]">
              <Image
                src="/images/Zoiko-Surplus-Our-Approach/soa5.png"
                alt="Stage inspection and documentation record"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Evidence Footnote */}
          <div className="mt-5 flex items-center gap-2 text-[11.5px] text-[#64748b]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            THE SEVEN STAGES
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Qualify &rarr; Govern &rarr; Match &rarr; Optimize &rarr; Transact &rarr; Prove &rarr; Resolve.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            A sequence for explaining the model. It is not a checkout flow, and a stage described here is not a promise that it is live in every market.
          </p>

          {/* Quick Anchor Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {stages.map((s) => (
              <a
                key={s.step}
                href={`#mobile-stage-${s.step}`}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-[#0c1e38] shadow-2xs"
              >
                {s.step} {s.name}
              </a>
            ))}
          </div>

          {/* 7 Stacked Stage Cards with Boundaries */}
          <div className="mt-5 flex flex-col gap-3.5">
            {[
              {
                step: 1,
                name: "Qualify",
                desc: "Assess inventory identity, ownership evidence, condition and eligibility.",
                boundary: "No seller-declared product or certified condition.",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                ),
              },
              {
                step: 2,
                name: "Govern",
                desc: "Apply seller permissions, category policies, market and corridor gates.",
                boundary: "Approval is never automatic or invisible.",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                step: 3,
                name: "Match",
                desc: "Expose eligible opportunities to authorized business demand.",
                boundary: "No universal discovery or open retail publicity.",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                ),
              },
              {
                step: 4,
                name: "Optimize",
                desc: "Support approved recovery and disposition pathway comparison.",
                boundary: "No guaranteed highest price or environmental impact.",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                ),
              },
              {
                step: 5,
                name: "Transact",
                desc: "Coordinate authorized offers and execution processes.",
                boundary: "Zoiko does not act as merchant of record or payment custodian by default.",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <polyline points="7 23 3 19 7 15" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                ),
              },
              {
                step: 6,
                name: "Prove",
                desc: "Preserve relevant decision, movement and outcome records where configured.",
                boundary: "No third-party verified impact or unlimited audit guarantee.",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                ),
              },
              {
                step: 7,
                name: "Resolve",
                desc: "Provide appropriate exception, dispute and remediation routes.",
                boundary: "No promise of universal refunds or unlimited legal remedies.",
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                id={`mobile-stage-${item.step}`}
                className="rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={`${sora} text-[9.5px] font-extrabold tracking-[0.14em] text-[#009b72] uppercase`}>
                      STAGE {item.step}
                    </p>
                    <h3 className="mt-1 text-[17px] font-extrabold text-[#0c1e38]">
                      {item.name}
                    </h3>
                  </div>

                  <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#e6f7f2] text-[#009b72]">
                    {item.icon}
                  </div>
                </div>

                <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.desc}
                </p>

                <div className="mt-3.5 rounded-[10px] bg-[#fbf4e6] p-3.5">
                  <p className={`${sora} text-[9px] font-extrabold tracking-[0.12em] text-[#926016] uppercase`}>
                    BOUNDARY
                  </p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[#6b583f]">
                    {item.boundary}
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
