"use client";

import Image from "next/image";
import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface Stage {
  id: number;
  name: string;
  description: string;
  input: string;
  output: string;
  image: string;
  alt: string;
}

const stages: Stage[] = [
  {
    id: 1,
    name: "Qualify",
    description:
      "Confirm condition, quantity, provenance and the category requirements a lot must meet before it can move.",
    input: "Lot record",
    output: "Qualified lot",
    image: "/images/How-the-Platform-Works/htpw5.png",
    alt: "Qualify stage - Confirming surplus goods condition and lot records",
  },
  {
    id: 2,
    name: "Govern",
    description:
      "Apply category safety checks, brand rules, legal controls and approved market eligibility before any buyer exposure.",
    input: "Qualified lot",
    output: "Policy-cleared lot",
    image: "/images/How-the-Platform-Works/htpw6.png",
    alt: "Govern stage - Policy clearance and regulatory safety checks",
  },
  {
    id: 3,
    name: "Match",
    description:
      "Connect qualified lots with verified, seller-approved business buyers under private permission settings.",
    input: "Policy-cleared lot",
    output: "Matched buyer group",
    image: "/images/How-the-Platform-Works/htpw7.png",
    alt: "Match stage - Connecting lots with seller-approved business buyers",
  },
  {
    id: 4,
    name: "Optimize",
    description:
      "Evaluate authorized disposition pathways on expected net recovery while remaining inside policy constraints.",
    input: "Matched buyer group",
    output: "Selected route",
    image: "/images/How-the-Platform-Works/htpw8.png",
    alt: "Optimize stage - Evaluating net recovery and disposition pathways",
  },
  {
    id: 5,
    name: "Transact",
    description:
      "Execute governed offers, orders or institutional transfers where a market and category are formally activated.",
    input: "Selected route",
    output: "Agreed disposition",
    image: "/images/How-the-Platform-Works/htpw9.jpg",
    alt: "Transact stage - Executing binding orders and governed transfers",
  },
  {
    id: 6,
    name: "Prove",
    description:
      "Capture decision logs, inspection evidence, chain-of-custody records and completion artifacts.",
    input: "Agreed disposition",
    output: "Evidence record",
    image: "/images/How-the-Platform-Works/htpw10.jpg",
    alt: "Prove stage - Capturing chain-of-custody and verification artifacts",
  },
  {
    id: 7,
    name: "Resolve",
    description:
      "Handle exceptions, holds, disputes or claims through structured, accountable review workflows.",
    input: "Exception / claim",
    output: "Resolved outcome",
    image: "/images/How-the-Platform-Works/htpw11.jpg",
    alt: "Resolve stage - Structured review and outcome resolution workflows",
  },
];

export default function SevenStages() {
  const [activeStageId, setActiveStageId] = useState<number>(1);
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section aria-label="Seven Stages - Connected Operating Model" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">02</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              SEVEN STAGES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Seven connected stages. Each has checks, an owner
            <br />
            and an exception path.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            These stages describe a controlled operating model. Not every workflow is available in every market or category.
          </p>

          {/* 7 Horizontal Tabs */}
          <div className="mt-10 grid grid-cols-7 gap-3">
            {stages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  type="button"
                  className={`flex flex-col items-start rounded-xl p-3.5 text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0f1926] text-white shadow-sm ring-1 ring-[#0f1926]"
                      : "bg-white text-[#556987] border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded text-[11px] font-bold mb-1.5 transition-colors ${
                      isActive ? "bg-[#009b72] text-white" : "text-[#8a9bb2]"
                    }`}
                  >
                    {stage.id}
                  </span>
                  <span
                    className={`text-[13.5px] font-semibold tracking-tight transition-colors ${
                      isActive ? "text-white" : "text-[#1e293b]"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Card */}
          <div className="mt-5 rounded-2xl border border-slate-200/80 bg-[#fbfcfd] p-8 lg:p-10 shadow-2xs">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Stage Info */}
              <div className="flex flex-col justify-center lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#009b72] text-[13.5px] font-bold text-white shadow-xs">
                    {activeStage.id}
                  </span>
                  <h3 className={`${sora} text-[24px] lg:text-[28px] font-bold tracking-tight text-[#0c1e38]`}>
                    {activeStage.name}
                  </h3>
                </div>

                <p className="mt-4 max-w-xl text-[15px] lg:text-[15.5px] leading-relaxed text-[#556987]">
                  {activeStage.description}
                </p>

                {/* Input / Output Pills */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[12.5px] font-medium text-[#334155] shadow-2xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                    <span>Input: {activeStage.input}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[12.5px] font-medium text-[#334155] shadow-2xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#009b72]"></span>
                    <span>Output: {activeStage.output}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Stage Image */}
              <div className="w-full lg:col-span-5">
                <div className="relative h-[260px] lg:h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-sm">
                  <Image
                    key={activeStage.id}
                    src={activeStage.image}
                    alt={activeStage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footnote / Disclaimer */}
          <div className="mt-4 flex items-center gap-2 text-[12px] leading-relaxed text-[#8a9bb2]">
            <span className="text-[14px] leading-none text-[#8a9bb2]">ℹ</span>
            <p>Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.</p>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#8a9bb2] uppercase">
            SEVEN STAGES
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-[1.2] tracking-[-0.025em] text-[#0c1e38]`}>
            Seven connected stages. Each has checks, an owner and an exception path.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            These stages describe a controlled operating model. Not every workflow is available in every market or category.
          </p>

          {/* 7 Vertical Stage Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Stage 1 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/How-the-Platform-Works/htpw30.jpg"
                  alt="Qualify stage - Confirming lot condition and provenance"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <span className="text-[11px] font-bold text-[#0c1e38]">01</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    STAGE 01
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Qualify
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Confirm lot condition, quantity, provenance, and policy readiness.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[12px] font-semibold">Exception:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Missing evidence &rarr; return to seller for clarification.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/How-the-Platform-Works/htpw31.jpg"
                  alt="Govern stage - Policy clearance and regulatory safety checks"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <span className="text-[11px] font-bold text-[#0c1e38]">02</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    STAGE 02
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Govern
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Apply category rules, access restrictions, and legal boundaries before matching.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[12px] font-semibold">Exception:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Policy violation &rarr; lot flagged, routing suspended.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/How-the-Platform-Works/htpw32.jpg"
                  alt="Match stage - Connecting lots with seller-approved business buyers"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <span className="text-[11px] font-bold text-[#0c1e38]">03</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    STAGE 03
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Match
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Seller-authorized matching with verified buyers and approved routes.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[12px] font-semibold">Exception:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    No compliant match &rarr; re-evaluate disposition pathway.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/How-the-Platform-Works/htpw33.jpg"
                  alt="Optimize stage - Evaluating net recovery inside policy rules"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <span className="text-[11px] font-bold text-[#0c1e38]">04</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    STAGE 04
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Optimize
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Compare allowed disposition routes for net recovery inside policy rules.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[12px] font-semibold">Exception:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Economic gate failure &rarr; fallback route.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/How-the-Platform-Works/htpw34.jpg"
                  alt="Transact stage - Agreed terms, binding orders, escrow or release conditions"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <span className="text-[11px] font-bold text-[#0c1e38]">05</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    STAGE 05
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Transact
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Agreed terms, binding orders, escrow or release conditions.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[12px] font-semibold">Exception:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Counterparty dispute &rarr; route paused for review.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 6 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/How-the-Platform-Works/htpw35.jpg"
                  alt="Prove stage - Chain-of-custody handoffs and collection proof"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <span className="text-[11px] font-bold text-[#0c1e38]">06</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    STAGE 06
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Prove
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Chain-of-custody handoffs, collection proof, destruction certificates.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[12px] font-semibold">Exception:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Discrepancy in proof &rarr; route held for investigation.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 7 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0c1827] shadow-2xs">
              <div className="relative aspect-[16/10] min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/images/How-the-Platform-Works/htpw36.jpg"
                  alt="Resolve stage - Handle claims, reconciliation, and audit closure"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1827] via-[#0c1827]/60 to-transparent" />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <span className="text-[11px] font-bold text-[#0c1e38]">07</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    STAGE 07
                  </span>
                  <h3 className={`${sora} mt-1 text-[20px] font-bold text-white`}>
                    Resolve
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#cbd5e1]">
                    Handle claims, reconciliation, and audit closure with evidence.
                  </p>
                </div>
              </div>
              <div className="p-4 pt-1">
                <div className="rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3 text-[#926016]">
                  <p className="text-[12px] font-semibold">Exception:</p>
                  <p className="mt-0.5 text-[11.5px] leading-relaxed text-[#784f12]">
                    Non-conformance &rarr; escalate to exception board.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
