import React from "react";
import Image from "next/image";

interface GateItem {
  id: number;
  title: string;
  description: string;
}

const GATE_ITEMS: readonly GateItem[] = [
  {
    id: 1,
    title: "Category & recall",
    description:
      "Prohibited, restricted or recalled categories are excluded first.",
  },
  {
    id: 2,
    title: "Market & corridor",
    description:
      "The route must be permitted for the market and transaction corridor.",
  },
  {
    id: 3,
    title: "Counterparty eligibility",
    description:
      "Any counterparty must meet role and eligibility requirements.",
  },
  {
    id: 4,
    title: "Brand & channel",
    description: "Brand-protection and channel rules limit where goods may go.",
  },
  {
    id: 5,
    title: "Safety & contract",
    description: "Category safety rules and agreement terms must be satisfied.",
  },
] as const;

export default function BeforeMatchingGates() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              04
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              BEFORE MATCHING
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Gates run before anything is ranked.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            The Govern stage removes ineligible routes first — so the path only
            ever compares options that are actually permitted.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* Left Column - Image Card */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/how/3.png"
                alt="Quality inspectors reviewing product specs and paperwork in warehouse"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column - Numbered Gates Stack */}
          <div className="lg:col-span-6 flex flex-col space-y-3 justify-between">
            {GATE_ITEMS.map((gate) => (
              <div
                key={gate.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-5 md:p-6 flex items-start gap-4 shadow-xs transition-all duration-200 hover:border-[#CBD5E1]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0B192C] text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {gate.id}
                </div>
                <div className="flex flex-col space-y-1">
                  <h3 className="text-base font-bold text-[#1E2126]">
                    {gate.title}
                  </h3>
                  <p className="text-[#4F647A] text-xs md:text-sm leading-relaxed font-normal">
                    {gate.description}
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
