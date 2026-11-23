import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Users, ShoppingBag, Layers } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const destinations = [
  {
    title: "Buyer Qualification Guide",
    description: "What to prepare before applying.",
    image: "/images/Access-Explained/s14.jpg",
    icon: <FileText className="size-4" strokeWidth={2} />,
    href: "/buyer-qualification",
  },
  {
    title: "Buyer Overview",
    description: "The five decisions in brief.",
    image: "/images/Access-Explained/s15.jpg",
    icon: <Users className="size-4" strokeWidth={2} />,
    href: "/become-a-verified-buyer",
  },
  {
    title: "For Verified Buyers",
    description: "The process from the buyer side.",
    image: "/images/Access-Explained/s16.jpg",
    icon: <ShoppingBag className="size-4" strokeWidth={2} />,
    href: "/for-verified-buyers",
  },
  {
    title: "How It Works",
    description: "The seven-stage model.",
    image: "/images/Access-Explained/s17.jpg",
    icon: <Layers className="size-4" strokeWidth={2} />,
    href: "/how-it-works",
  },
];

export default function AccessExplainedRelatedGuidance() {
  return (
    <section aria-label="Related Destinations - Where to go next" className={`${hanken} w-full bg-[#fbf9f6]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">09</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RELATED DESTINATIONS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Where to go next.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Links go live only when each destination is approved.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Photo with top-right badge */}
                <div className="relative h-[160px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-2">
                    <span className="text-[12.5px] font-semibold text-[#926016] transition-colors group-hover:text-[#784f12]">
                      Pending →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            RELATED DESTINATIONS
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Where to go next.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Links go live only when each destination is approved.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 space-y-4">
            {[
              {
                title: "Buyer Qualification Guide",
                description: "What to prepare before applying.",
                image: "/images/Access-Explained/s33.jpg",
                icon: <FileText className="size-4" strokeWidth={2} />,
                href: "/buyer-qualification",
              },
              {
                title: "Buyer Overview",
                description: "The five decisions in brief.",
                image: "/images/Access-Explained/s34.jpg",
                icon: <Users className="size-4" strokeWidth={2} />,
                href: "/become-a-verified-buyer",
              },
              {
                title: "For Verified Buyers",
                description: "The process from the buyer side.",
                image: "/images/Access-Explained/s35.jpg",
                icon: <ShoppingBag className="size-4" strokeWidth={2} />,
                href: "/for-verified-buyers",
              },
              {
                title: "How It Works",
                description: "The seven-stage model.",
                image: "/images/Access-Explained/s36.jpg",
                icon: <Layers className="size-4" strokeWidth={2} />,
                href: "/how-it-works",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
              >
                {/* Image with top-right badge */}
                <div className="relative h-[150px] w-full bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>
                  <div className="mt-3">
                    <span className="text-[12.5px] font-semibold text-[#926016]">
                      Pending →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
