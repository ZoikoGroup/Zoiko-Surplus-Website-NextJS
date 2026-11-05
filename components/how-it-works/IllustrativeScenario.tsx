import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

interface WalkthroughStep {
  id: string;
  title: string;
  description: string;
}

const WALKTHROUGH_STEPS: readonly WalkthroughStep[] = [
  {
    id: "lot-qualified",
    title: "A lot is qualified",
    description:
      "A seller documents a qualified lot — no brands, quantities or prices shown here.",
  },
  {
    id: "controls-applied",
    title: "Controls are applied",
    description:
      "Policy, category and safety gates leave only permitted routes.",
  },
  {
    id: "demand-matched",
    title: "Demand is matched",
    description:
      "The lot is matched with appropriately verified, seller-authorized demand.",
  },
  {
    id: "route-optimized-transacted",
    title: "A route is optimized & transacted",
    description:
      "The seller selects a permitted route and, where enabled, a governed order proceeds.",
  },
  {
    id: "outcome-proven-resolved",
    title: "Outcome is proven & resolved",
    description:
      "Evidence is captured, and any exception is carried through a defined process.",
  },
] as const;

export default function IllustrativeScenario() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              11
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              ILLUSTRATIVE SCENARIO
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            How the path could run — end to end, anonymized.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            An explicitly illustrative, non-operational walkthrough across all
            seven stages. It contains no real brands, identifiers, figures or
            live data.
          </p>
        </div>

        {/* Grid Layout: Image + Walkthrough Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* Left Image Card */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/how/15.png"
                alt="Two business colleagues working at laptop during end-to-end scenario review"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Card: Walkthrough Steps */}
          <div className="lg:col-span-6 border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col bg-white shadow-xs">
            {/* Card Header */}
            <div className="bg-[#FFFBF5] p-5 md:p-6 border-b border-[#E2E8F0] flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-base font-bold text-[#1E2126]">
                End-to-end walkthrough
              </h3>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDF6ED] text-[#926016] text-[10px] md:text-xs font-semibold uppercase tracking-wider rounded-md border border-[#FDE68A]/60">
                <Clock className="w-3 h-3 text-[#926016]" />
                ILLUSTRATIVE · ANONYMIZED · NO LIVE DATA
              </span>
            </div>

            {/* Card List Items */}
            <div className="divide-y divide-[#E2E8F0] flex-1">
              {WALKTHROUGH_STEPS.map((step) => (
                <div
                  key={step.id}
                  className="p-5 md:p-6 flex flex-col space-y-1"
                >
                  <h4 className="text-sm font-bold text-[#1E2126]">
                    {step.title}
                  </h4>
                  <p className="text-[#4F647A] text-xs md:text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
