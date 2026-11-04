"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CornerDownRight,
  AlertTriangle,
  ShieldCheck,
  Info,
} from "lucide-react";

interface StageData {
  id: number;
  name: string;
  stageLabel: string;
  owner: string;
  description: string;
  inText: string;
  outText: string;
  exceptionText: string;
  imageSrc: string;
  imageAlt: string;
}

const STAGES_DATA: readonly StageData[] = [
  {
    id: 1,
    name: "Qualify",
    stageLabel: "STAGE 01",
    owner: "Seller / seller ops",
    description:
      "Confirm condition, provenance and the category requirements a lot must meet before it can move.",
    inText: "In: Lot record",
    outText: "Out: Qualified lot",
    exceptionText: "Exception: Missing evidence → return for update",
    imageSrc: "/images/how/2.png",
    imageAlt: "Warehouse high bay racking with stacked inventory",
  },
  {
    id: 2,
    name: "Govern",
    stageLabel: "STAGE 02",
    owner: "Platform / Compliance",
    description:
      "Apply policy, restrictions, channel rules, and buyer eligibility criteria before matching.",
    inText: "In: Qualified lot",
    outText: "Out: Governed lot",
    exceptionText: "Exception: Non-compliant lot → hold or flag",
    imageSrc: "/images/how/2.png",
    imageAlt: "Compliance governance checks on warehouse stock",
  },
  {
    id: 3,
    name: "Match",
    stageLabel: "STAGE 03",
    owner: "Matching engine",
    description:
      "Route surplus lots to permitted buyer classes, markets, and approved service channels.",
    inText: "In: Governed lot",
    outText: "Out: Matched route",
    exceptionText: "Exception: No matching buyer → re-evaluate path",
    imageSrc: "/images/how/2.png",
    imageAlt: "Logistics matching and routing stage",
  },
  {
    id: 4,
    name: "Optimize",
    stageLabel: "STAGE 04",
    owner: "Optimization service",
    description:
      "Structure batching, pricing parameters, freight consolidation, and net-recovery targets.",
    inText: "In: Matched route",
    outText: "Out: Optimized offer",
    exceptionText: "Exception: Sub-optimal yield → route review",
    imageSrc: "/images/how/2.png",
    imageAlt: "Inventory optimization and batching",
  },
  {
    id: 5,
    name: "Transact",
    stageLabel: "STAGE 05",
    owner: "Seller & Buyer",
    description:
      "Execute binding order, escrow or payment release conditions, and transport assignments.",
    inText: "In: Optimized offer",
    outText: "Out: Binding contract",
    exceptionText: "Exception: Payment failure → release lock",
    imageSrc: "/images/how/2.png",
    imageAlt: "B2B order transaction and contract execution",
  },
  {
    id: 6,
    name: "Prove",
    stageLabel: "STAGE 06",
    owner: "3PL / Partner",
    description:
      "Capture handoff documentation, chain-of-custody proofs, inspection reports, and delivery manifests.",
    inText: "In: Binding contract",
    outText: "Out: Verified transfer",
    exceptionText: "Exception: Discrepancy → open dispute log",
    imageSrc: "/images/how/2.png",
    imageAlt: "Logistics verification and chain of custody proof",
  },
  {
    id: 7,
    name: "Resolve",
    stageLabel: "STAGE 07",
    owner: "System / Ledger",
    description:
      "Finalize financial reconciliation, close route audit, and retain immutable compliance evidence.",
    inText: "In: Verified transfer",
    outText: "Out: Completed route",
    exceptionText: "Exception: Audit variance → manual review",
    imageSrc: "/images/how/2.png",
    imageAlt: "Final reconciliation and route audit closure",
  },
] as const;

export default function SevenStagesPath() {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const activeStage =
    STAGES_DATA.find((s) => s.id === activeStageId) || STAGES_DATA[0];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              02
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              THE SEVEN STAGES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Seven connected stages each with an owner and an exception route.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Qualify → Govern → Match → Optimize → Transact → Prove → Resolve.
            Select a stage to see what it does, who decides, and what happens
            when something goes wrong.
          </p>
        </div>

        {/* Top Process Flow Bar (Step Indicators) */}
        <div className="w-full border border-[#E2E8F0] rounded-2xl overflow-x-auto bg-white shadow-xs">
          <div className="flex items-center justify-between min-w-[700px] divide-x divide-[#E2E8F0]">
            {STAGES_DATA.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex-1 py-4 px-3 flex flex-col items-center justify-center space-y-1.5 transition-all focus:outline-none ${
                    isActive ? "bg-[#F8FAFC]" : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-[#10B981] text-white"
                        : "bg-[#E6F4F1] text-[#10B981]"
                    }`}
                  >
                    {stage.id}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      isActive ? "text-[#1E2126]" : "text-[#64748B]"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
          {STAGES_DATA.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap focus:outline-none ${
                  isActive
                    ? "bg-[#0B192C] text-white shadow-sm"
                    : "bg-white text-[#4F647A] border border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center ${
                    isActive
                      ? "bg-[#10B981] text-white"
                      : "bg-gray-100 text-[#4F647A]"
                  }`}
                >
                  {stage.id}
                </span>
                <span>{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Stage Content Card Container */}
        <div className="w-full bg-white border border-[#E2E8F0] rounded-3xl p-6 md:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {/* Top Meta Header */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
                  {activeStage.stageLabel}
                </span>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F1F5F9] rounded-full text-xs font-medium text-[#1E2126] border border-[#E2E8F0]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#64748B]" />
                  <span>
                    Decision owner: <strong>{activeStage.owner}</strong>
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#1E2126] tracking-tight">
                {activeStage.name}
              </h3>

              {/* Description */}
              <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal">
                {activeStage.description}
              </p>

              {/* Flow Badges (In / Out / Exception) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* In Badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#E6F4F1] text-[#0D382C] text-xs font-semibold rounded-full border border-[#B8E6DA]">
                  <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                  {activeStage.inText}
                </span>

                {/* Out Badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#E6F4F1] text-[#0D382C] text-xs font-semibold rounded-full border border-[#B8E6DA]">
                  <CornerDownRight className="w-3.5 h-3.5 text-[#10B981]" />
                  {activeStage.outText}
                </span>

                {/* Exception Badge */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFFBF5] text-[#926016] text-xs font-medium rounded-full border border-[#FDE68A]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#D97706]" />
                  {activeStage.exceptionText}
                </span>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src={activeStage.imageSrc}
                  alt={activeStage.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 450px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footnote Banner */}
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <p>An educational model — not a live, always-on runtime status.</p>
        </div>
      </div>
    </section>
  );
}
