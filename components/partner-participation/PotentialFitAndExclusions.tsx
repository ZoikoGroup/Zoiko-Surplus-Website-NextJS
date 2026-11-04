import React from "react";
import { Check, X } from "lucide-react";

interface FitItem {
  id: string;
  text: string;
}

const LIKELY_FIT_ITEMS: readonly FitItem[] = [
  { id: "fit-1", text: "Verifiable identity, licensing and insurance." },
  { id: "fit-2", text: "Genuine capability in a relevant service." },
  { id: "fit-3", text: "Willingness to meet evidence and conduct standards." },
] as const;

const WONT_QUALIFY_ITEMS: readonly FitItem[] = [
  {
    id: "exclude-1",
    text: "No lawful basis, licence or capability for the service.",
  },
  {
    id: "exclude-2",
    text: "Requests for inventory, custody or data without approval.",
  },
  {
    id: "exclude-3",
    text: "Restricted, sanctioned or non-compliant operations.",
  },
] as const;

export default function PotentialFitAndExclusions() {
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
              POTENTIAL FIT & EXCLUSIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            A likely fit — and what won’t qualify.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Honest signals of fit, and the things that rule an organization out.
            Neither guarantees nor forecloses an outcome on its own.
          </p>
        </div>

        {/* Comparison Table / Container */}
        <div className="w-full border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column: Likely a fit */}
            <div className="bg-[#DCF3ED] flex flex-col">
              {/* Header */}
              <div className="bg-[#DCF3ED] p-5 flex items-center gap-2 border-b border-[#D3DDE8]/50">
                <Check className="w-4 h-4 text-[#10B981] stroke-[3]" />
                <h3 className="text-base font-bold text-[#0F7A60]">
                  Likely a fit
                </h3>
              </div>

              {/* Items List */}
              <div className="bg-white flex-1 divide-y divide-[#E2E8F0]/60">
                {LIKELY_FIT_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 flex items-center gap-3"
                  >
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 stroke-[2.5]" />
                    <span className="text-sm text-[#4F647A] font-normal">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Won't qualify */}
            <div className="bg-[#0C2140] flex flex-col border-t md:border-t-0 md:border-l border-[#1E293B]">
              {/* Header */}
              <div className="p-5 flex items-center gap-2 border-b border-[#1E293B]">
                <X className="w-4 h-4 text-white stroke-[3]" />
                <h3 className="text-base font-bold text-white">
                  Won't qualify
                </h3>
              </div>

              {/* Items List */}
              <div className="flex-1 divide-y divide-[#1E293B]">
                {WONT_QUALIFY_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 flex items-center gap-3 bg-[#0F2744]"
                  >
                    <X className="w-4 h-4 text-[#94A3B8] shrink-0 stroke-[2.5]" />
                    <span className="text-sm text-[#94A3B8] font-normal">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
