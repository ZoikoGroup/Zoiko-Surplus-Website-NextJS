import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface RelatedCard {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const RELATED_CARDS: readonly RelatedCard[] = [
  {
    id: "surplus-network",
    imageSrc: "/images/part/12.png",
    imageAlt: "Handshake between warehouse logistics personnel and executive",
    title: "Surplus Network",
    description:
      "How seller-approved surplus is coordinated toward permitted third-party services.",
    linkText: "Explore Surplus Network",
    linkHref: "#",
  },
  {
    id: "surplus-enterprise",
    imageSrc: "/images/part/13.png",
    imageAlt:
      "Enterprise team evaluating inventory boxes in warehouse facility",
    title: "Surplus Enterprise",
    description:
      "How enterprise sellers qualify and govern the stock a partner may help move.",
    linkText: "Explore Surplus Enterprise",
    linkHref: "#",
  },
] as const;

export default function RelatedPartnerships() {
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
              RELATED
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Where partnership connects.
          </h2>

          {/* Subtitle */}
          <p className="text-[#4F647A] text-base md:text-lg leading-relaxed font-normal pt-1">
            Partner participation supports the wider governed model — explore
            how it fits.
          </p>
        </div>

        {/* Feature Cards Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
          {RELATED_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md group"
            >
              {/* Card Header Image with Floating Action Icon */}
              <div className="relative w-full h-85 bg-gray-100 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Corner External Link Badge Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center border border-white/50 text-[#1E2126] group-hover:bg-white group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-8 flex flex-col space-y-3 flex-grow justify-between">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-bold text-[#1E2126]">
                    {card.title}
                  </h3>
                  <p className="text-[#4F647A] text-sm leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={card.linkHref}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#926016] hover:text-[#744b0e] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
