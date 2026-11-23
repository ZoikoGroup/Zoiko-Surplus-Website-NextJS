import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, List, Users } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const readingResources = [
  {
    image: "/images/Help-Center/hc13.png",
    icon: <FileText className="size-4 text-slate-700" strokeWidth={2} />,
    title: "Frequently Asked Questions",
    desc: "Reviewed answers.",
    href: "/knowledge-center",
  },
  {
    image: "/images/Help-Center/hc14.png",
    icon: <List className="size-4 text-slate-700" strokeWidth={2} />,
    title: "Knowledge Center",
    desc: "Guides and explainers.",
    href: "/knowledge-center",
  },
  {
    image: "/images/Help-Center/hc15.png",
    icon: <Users className="size-4 text-slate-700" strokeWidth={2} />,
    title: "Accessibility",
    desc: "Accessibility statement.",
    href: "/accessibility",
  },
];

const mobileReadingResources = [
  {
    image: "/images/Help-Center/hc31.jpg",
    icon: <FileText className="size-4 text-slate-700" strokeWidth={2} />,
    title: "Frequently Asked Questions",
    desc: "Reviewed answers.",
    href: "/knowledge-center",
  },
  {
    image: "/images/Help-Center/hc32.jpg",
    icon: <List className="size-4 text-slate-700" strokeWidth={2} />,
    title: "Knowledge Center",
    desc: "Guides and explainers.",
    href: "/knowledge-center",
  },
  {
    image: "/images/Help-Center/hc33.jpg",
    icon: <Users className="size-4 text-slate-700" strokeWidth={2} />,
    title: "Accessibility",
    desc: "Accessibility statement.",
    href: "/accessibility",
  },
];

export default function KeepReadingResources() {
  return (
    <section
      aria-label="Related Resources - Keep reading"
      className={`${hanken} w-full bg-white py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">09</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RELATED RESOURCES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] font-bold tracking-tight text-[#0c1e38] lg:text-[36px]`}
          >
            Keep reading.
          </h2>
          <p className="mt-3 max-w-[850px] text-[15px] leading-relaxed text-slate-600">
            Links go live only when each destination is approved.
          </p>

          {/* 3-Column Cards Grid */}
          <div className="mt-10 grid grid-cols-3 gap-7">
            {readingResources.map((card, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Card Top Image with badge */}
                <div className="relative h-[210px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1200px) 33vw, 420px"
                  />
                  <div className="absolute top-3.5 right-3.5 flex size-8 items-center justify-center rounded-full bg-white/95 shadow-sm">
                    {card.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3
                      className={`${sora} text-[18px] font-bold tracking-tight text-[#0c1e38]`}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#926016] transition-colors hover:text-[#784f12]"
                    >
                      Pending <span className="text-[14px]">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly reserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold text-[#0c1e38]">09</span>
            <span className="h-[1px] w-6 bg-[#926016]/50"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RELATED RESOURCES
            </span>
          </div>

          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Keep reading.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
            Links go live only when each destination is approved.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {mobileReadingResources.map((card, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs"
              >
                <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-xs">
                    {card.icon}
                  </div>
                </div>
                <div className="p-4.5">
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                    {card.desc}
                  </p>
                  <div className="mt-3.5 pt-1">
                    <Link
                      href={card.href}
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
