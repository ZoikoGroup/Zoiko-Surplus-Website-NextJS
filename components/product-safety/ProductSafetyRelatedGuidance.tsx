import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, CheckCircle2, SlidersHorizontal, Lock } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const guidanceCards = [
  {
    title: "Trust & Safety Overview",
    description: "Controls across the platform.",
    image: "/images/Product-Safety/ps21.png",
    mobileImage: "/images/Product-Safety/ps49.jpg",
    icon: <Shield className="size-4" strokeWidth={2} />,
    href: "/trust-and-safety",
  },
  {
    title: "Business Verification",
    description: "What verification does and does not do.",
    image: "/images/Product-Safety/ps22.png",
    mobileImage: "/images/Product-Safety/ps50.jpg",
    icon: <CheckCircle2 className="size-4" strokeWidth={2} />,
    href: "/business-verification",
  },
  {
    title: "Category Eligibility",
    description: "Category and market considerations.",
    image: "/images/Product-Safety/ps23.png",
    mobileImage: "/images/Product-Safety/ps51.jpg",
    icon: <SlidersHorizontal className="size-4" strokeWidth={2} />,
    href: "/category-eligibility",
  },
  {
    title: "Access Explained",
    description: "How the five gates work.",
    image: "/images/Product-Safety/ps24.png",
    mobileImage: "/images/Product-Safety/ps52.jpg",
    icon: <Lock className="size-4" strokeWidth={2} />,
    href: "/access-explained",
  },
];

export default function ProductSafetyRelatedGuidance() {
  return (
    <section aria-label="Related Guidance - Where to go next" className={`${hanken} w-full bg-[#fbf9f6]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">12</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RELATED GUIDANCE
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
            {guidanceCards.map((item, idx) => (
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
            RELATED GUIDANCE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Where to go next.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Links go live only when each destination is approved.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {guidanceCards.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
              >
                {/* Photo with top-right badge */}
                <div className="relative h-[150px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.mobileImage}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className={`${sora} text-[15.5px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span className="text-[12px] font-semibold text-[#926016]">
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
