import React from "react";
import Image from "next/image";
import { ArrowUpRight, Info } from "lucide-react";

interface CategoryBadge {
  text: string;
  bgColor: string;
  textColor: string;
  dotColor: string;
}

interface CategoryCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  badge: CategoryBadge;
  hasArrow: boolean;
  title: string;
  description: string;
}

const CATEGORY_CARDS: readonly CategoryCard[] = [
  {
    id: "apparel-footwear",
    imageSrc: "/images/how/12.png",
    imageAlt: "Retail apparel and footwear display",
    badge: {
      text: "Proposed first pilot",
      bgColor: "bg-[#FDF6ED]",
      textColor: "text-[#926016]",
      dotColor: "bg-[#D97706]",
    },
    hasArrow: true,
    title: "Apparel & Footwear",
    description: "UK-focused B2B apparel and footwear resale market.",
  },
  {
    id: "consumer-electronics",
    imageSrc: "/images/how/13.png",
    imageAlt: "Consumer electronics laptop and headphones on desk",
    badge: {
      text: "Not yet activated",
      bgColor: "bg-[#E2E8F0]/80",
      textColor: "text-[#334155]",
      dotColor: "bg-[#64748B]",
    },
    hasArrow: false,
    title: "Consumer Electronics",
    description:
      "Condition, data wiping, electrical/regulatory and recall controls; no implied live trade.",
  },
  {
    id: "food-grocery",
    imageSrc: "/images/how/14.png",
    imageAlt: "Customer inspecting produce in food grocery aisle",
    badge: {
      text: "Separate approval",
      bgColor: "bg-[#E6F4F1]",
      textColor: "text-[#0D382C]",
      dotColor: "bg-[#10B981]",
    },
    hasArrow: true,
    title: "Food & Grocery",
    description: "Ensure food safety, shelf-life, and traceability compliance.",
  },
] as const;

export default function CategoryCoverage() {
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
              CATEGORY COVERAGE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Different categories, different rules.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            The path applies to many categories, each activated separately. A
            category shown here is not automatically live.
          </p>
        </div>

        {/* 3 Column Category Overlay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {CATEGORY_CARDS.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] min-h-[300px] flex flex-col justify-between p-6 group border border-[#E2E8F0] shadow-xs"
            >
              {/* Background Image */}
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Dark Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

              {/* Top Row: Badge & Optional External Arrow */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${card.badge.bgColor} ${card.badge.textColor}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${card.badge.dotColor}`}
                  />
                  {card.badge.text}
                </span>

                {card.hasArrow && (
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1E2126] group-hover:bg-white group-hover:scale-110 transition-all shadow-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Bottom Content: Title & Subtitle */}
              <div className="relative z-10 flex flex-col space-y-1.5 text-white">
                <h3 className="text-xl font-bold leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#CBD5E1] leading-relaxed font-normal line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Banner */}
        <div className="w-full bg-[#FFFBF5] border border-[#FDE68A]/60 rounded-2xl p-4 md:p-5 flex items-center gap-3">
          <Info className="w-4 h-4 text-[#926016] shrink-0" />
          <p className="text-xs text-[#926016] leading-relaxed font-normal">
            An overview or pilot is not a live market. Food is gated
            independently.
          </p>
        </div>
      </div>
    </section>
  );
}
