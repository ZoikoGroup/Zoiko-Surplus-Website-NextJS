import React from "react";
import { ShieldAlert } from "lucide-react";

interface RegulatedExceptionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EXCEPTION_ITEMS: readonly RegulatedExceptionItem[] = [
  {
    id: "independent-safety-gate",
    icon: <ShieldAlert className="w-5 h-5 text-[#926016]" />,
    title: "Independent safety & regulatory gate",
    description:
      "Sealed ambient food, perishables, hazardous and regulated materials require separate safety, traceability, licensing and local-law approval before a partner can be involved. These are never auto-enabled by a general partnership, and remain the partner’s compliance responsibility.",
  },
] as const;

export default function FoodAndRegulatedExceptions() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              09
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              FOOD & REGULATED EXCEPTIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Some categories need more before any participation.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Food, perishables and regulated goods are gated independently and
            require specialist approval.
          </p>
        </div>

        {/* Featured Exception Card */}
        <div className="flex flex-col pt-2">
          {EXCEPTION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-[#A8702E] border-l-4 border-l-[#A8702E] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5 shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FDF6ED] flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-bold text-[#1E2126]">
                  {item.title}
                </h3>
                <p className="text-[#4F647A] text-sm md:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
