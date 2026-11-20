import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Package, Users, Handshake } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    category: "Getting started",
    title: "How it works",
    desc: "Learn the seven-stage model.",
    image: "/images/Help-Center/hc2.png",
    icon: <Menu className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/how-it-works",
  },
  {
    category: "Sellers",
    title: "Prepare to sell",
    desc: "Review readiness and category considerations.",
    image: "/images/Help-Center/hc3.png",
    icon: <Package className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/seller-readiness-guide",
  },
  {
    category: "Buyers",
    title: "Buyer qualification",
    desc: "Understand verification and eligibility.",
    image: "/images/Help-Center/hc4.png",
    icon: <Users className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/buyer-qualification",
  },
  {
    category: "Partners",
    title: "Partner participation",
    desc: "Understand qualification and responsibilities.",
    image: "/images/Help-Center/hc5.png",
    icon: <Handshake className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/partner-participation",
  },
];

const mobileSteps = [
  {
    category: "Getting started",
    title: "How it works",
    desc: "Learn the seven-stage model.",
    image: "/images/Help-Center/hc20.jpg",
    icon: <Menu className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/how-it-works",
  },
  {
    category: "Sellers",
    title: "Prepare to sell",
    desc: "Review readiness and category considerations.",
    image: "/images/Help-Center/hc21.jpg",
    icon: <Package className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/seller-readiness-guide",
  },
  {
    category: "Buyers",
    title: "Buyer qualification",
    desc: "Understand verification and eligibility.",
    image: "/images/Help-Center/hc22.jpg",
    icon: <Users className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/buyer-qualification",
  },
  {
    category: "Partners",
    title: "Partner participation",
    desc: "Understand qualification and responsibilities.",
    image: "/images/Help-Center/hc23.jpg",
    icon: <Handshake className="size-3.5 text-slate-700" strokeWidth={2.2} />,
    href: "/partner-participation",
  },
];

export default function FourGoodNextSteps() {
  return (
    <section aria-label="Start Here - Four good next steps" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">02</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              START HERE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Four good next steps.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Pick the task closest to yours.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, idx) => (
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
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.category}
                    </span>
                    <h3 className={`${sora} mt-1 text-[16px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                      {item.desc}
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
          MOBILE VIEW (strictly isolated for mobile devices)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold text-[#0c1e38]">02</span>
            <span className="h-[1px] w-6 bg-[#926016]/50"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              START HERE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Four good next steps.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#556987]">
            Pick the task closest to yours.
          </p>

          {/* 4 Vertically Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {mobileSteps.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs"
              >
                {/* Photo with top-right badge */}
                <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/95 text-[#0c1e38] shadow-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4.5">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {item.category}
                  </span>
                  <h3 className={`${sora} mt-1 text-[16px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {item.desc}
                  </p>

                  <div className="mt-3.5 pt-1">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#926016]"
                    >
                      Pending <span>→</span>
                    </Link>
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
