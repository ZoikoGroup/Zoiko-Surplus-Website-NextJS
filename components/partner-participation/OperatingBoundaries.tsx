import React from "react";
import {
  X,
  SlidersHorizontal,
  Scale,
  ShieldCheck,
  EyeOff,
  Plus,
} from "lucide-react";

interface BoundaryAccordionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
}

const BOUNDARY_ITEMS: readonly BoundaryAccordionItem[] = [
  {
    id: "no-assigned-inventory",
    icon: <X className="w-4 h-4 text-[#7E4E1C]" />,
    title: "No assigned inventory",
  },
  {
    id: "seller-platform-authority",
    icon: <SlidersHorizontal className="w-4 h-4 text-[#7E4E1C]" />,
    title: "Seller & platform authority",
  },
  {
    id: "independent-contracts",
    icon: <Scale className="w-4 h-4 text-[#7E4E1C]" />,
    title: "Independent contracts",
  },
  {
    id: "compliance-obligations",
    icon: <ShieldCheck className="w-4 h-4 text-[#7E4E1C]" />,
    title: "Compliance obligations",
  },
  {
    id: "data-boundaries",
    icon: <EyeOff className="w-4 h-4 text-[#7E4E1C]" />,
    title: "Data boundaries",
  },
] as const;

export default function OperatingBoundaries() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              05
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              OPERATING BOUNDARIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            What a partner can and can’t expect.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Short, visible boundaries. None of these implies assigned work,
            custody or a guaranteed result.
          </p>
        </div>

        {/* Accordion / List Stack */}
        <div className="flex flex-col space-y-3 pt-2">
          {BOUNDARY_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#"
              className="w-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl p-5 md:p-6 flex items-center justify-between transition-all duration-200 group shadow-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F4E7D6] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-base font-bold text-[#1E2126]">
                  {item.title}
                </span>
              </div>

              <Plus className="w-4 h-4 text-[#7E4E1C] group-hover:text-[#1E2126] transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
