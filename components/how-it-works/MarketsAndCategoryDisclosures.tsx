import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";

interface DisclosureItem {
  id: string;
  title: string;
  description: string;
  statusBadge: {
    text: string;
    bgColor: string;
    textColor: string;
    dotColor: string;
  };
}

const DISCLOSURE_ITEMS: readonly DisclosureItem[] = [
  {
    id: "uk-apparel-footwear",
    title: "United Kingdom — Apparel & Footwear",
    description:
      "A proposed seller-private B2B pilot — proposed is not evidence of launch.",
    statusBadge: {
      text: "Proposed pilot",
      bgColor: "bg-[#E6F4F1]",
      textColor: "text-[#0D382C]",
      dotColor: "bg-[#10B981]",
    },
  },
  {
    id: "other-regions",
    title: "Other regions",
    description:
      "Informational content is available; no pathway is confirmed live.",
    statusBadge: {
      text: "Informational",
      bgColor: "bg-[#F1F5F9]",
      textColor: "text-[#475569]",
      dotColor: "bg-[#94A3B8]",
    },
  },
  {
    id: "sealed-ambient-food",
    title: "Sealed ambient food",
    description:
      "Independent safety, traceability, shelf-life and local-law gate before any activity.",
    statusBadge: {
      text: "Separate approval",
      bgColor: "bg-[#FDF6ED]",
      textColor: "text-[#926016]",
      dotColor: "bg-[#D97706]",
    },
  },
] as const;

export default function MarketsAndCategoryDisclosures() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              08
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              MARKETS & CATEGORY DISCLOSURES
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            The path is global by design, activated market by market.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Every stage exists in the model, but availability of a real pathway
            depends on activated markets and categories.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* Left Image Box */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/how/11.png"
                alt="Hand holding packaged green produce in store aisle"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Disclosures Stack */}
          <div className="lg:col-span-6 flex flex-col space-y-4 justify-between">
            {DISCLOSURE_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-7 flex flex-col space-y-3 shadow-xs transition-all duration-200 hover:border-[#CBD5E1]"
              >
                <h3 className="text-base font-bold text-[#1E2126]">
                  {item.title}
                </h3>
                <p className="text-[#4F647A] text-xs md:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Status Badge */}
                <div className="pt-1">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${item.statusBadge.bgColor} ${item.statusBadge.textColor}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.statusBadge.dotColor}`}
                    />
                    {item.statusBadge.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote Banner */}
        <div className="w-full bg-[#FFFBF5] border border-[#FDE68A]/60 rounded-2xl p-4 md:p-5 flex items-start md:items-center gap-3">
          <Info className="w-4 h-4 text-[#926016] shrink-0 mt-0.5 md:mt-0" />
          <p className="text-xs text-[#926016] leading-relaxed font-normal">
            The country/locale selector is informational only — it sets content
            and language, and does not activate a pathway, grant eligibility or
            change any permission.
          </p>
        </div>
      </div>
    </section>
  );
}
