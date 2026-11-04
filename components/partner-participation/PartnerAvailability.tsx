import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";

interface AvailabilityCard {
  id: string;
  title: string;
  description: string;
  badgeText: string;
  badgeStyle: string;
  dotStyle: string;
}

const AVAILABILITY_CARDS: readonly AvailabilityCard[] = [
  {
    id: "uk-apparel",
    title: "United Kingdom — Apparel & Footwear",
    description:
      "A proposed seller-private B2B pilot — proposed is not evidence of launch or partner need.",
    badgeText: "Proposed pilot",
    badgeStyle: "bg-[#E6F4F1] text-[#0D382C]",
    dotStyle: "bg-[#10B981]",
  },
  {
    id: "other-regions",
    title: "Other regions",
    description:
      "Informational content is available; no partner intake is confirmed live.",
    badgeText: "Informational",
    badgeStyle: "bg-[#F1F5F9] text-[#475569]",
    dotStyle: "bg-[#64748B]",
  },
  {
    id: "food-regulated",
    title: "Food & regulated goods",
    description:
      "Independent safety, licensing and local-law gate before any partner involvement.",
    badgeText: "Separate approval",
    badgeStyle: "bg-[#FEF3C7] text-[#92400E]",
    dotStyle: "bg-[#D97706]",
  },
] as const;

export default function PartnerAvailability() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              07
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              AVAILABILITY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Partner intake is activated, not assumed.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Where and whether we’re taking partner inquiries depends on market
            and category. A neutral “not currently open” state is shown
            otherwise.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* Left Column - Image Card */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src="/images/part/7.png"
                alt="Partner worker handling shoe package in a fulfillment center"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column - Status Cards Stack */}
          <div className="lg:col-span-6 flex flex-col space-y-4 justify-between">
            {AVAILABILITY_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 flex flex-col space-y-3 shadow-xs"
              >
                <h3 className="text-base font-bold text-[#1E2126]">
                  {card.title}
                </h3>
                <p className="text-[#4F647A] text-xs leading-relaxed font-normal">
                  {card.description}
                </p>
                <div className="pt-1">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${card.badgeStyle}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${card.dotStyle}`}
                    />
                    {card.badgeText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote Banner */}
        <div className="w-full bg-[#FFFBF5] border border-[#FDE68A]/60 rounded-xl p-4 flex items-start md:items-center gap-3">
          <Info className="w-4 h-4 text-[#926016] shrink-0 mt-0.5 md:mt-0" />
          <p className="text-[#4F647A] text-xs leading-relaxed">
            The country/locale selector is informational only — it sets content
            and language, and does not open intake, grant eligibility or change
            any permission.
          </p>
        </div>
      </div>
    </section>
  );
}
