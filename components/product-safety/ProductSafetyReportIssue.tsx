import React from "react";
import Image from "next/image";
import { Flag, FileX, LifeBuoy, AlertTriangle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const cards = [
  {
    title: "Use the approved channel",
    description: "It starts a proper review.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <Flag className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "No evidence here",
    description: "This page takes no files or details.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <FileX className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "General help",
    description: "A public route exists if reporting is unavailable.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <LifeBuoy className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Emergency",
    description: "Contact local emergency services for danger.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <AlertTriangle className="size-4" strokeWidth={2.5} />,
  },
];

export default function ProductSafetyReportIssue() {
  return (
    <section aria-label="Report an Issue - Concerned about a product" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">10</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              REPORT AN ISSUE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Concerned about a product?
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Use the approved reporting channel. Do not share confidential evidence on this page.
          </p>

          {/* 2-Column Content: Left 2x2 grid + Right Photo */}
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left 2x2 grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
              {cards.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:shadow-xs"
                >
                  <div className={`flex size-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className={`${sora} mt-4 text-[17px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Photo */}
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs lg:col-span-6 lg:h-[370px]">
              <Image
                src="/images/Product-Safety/ps20.png"
                alt="Concerned about a product reporting process"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Illustrative imagery
              </span>
            </div>
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
            REPORT AN ISSUE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Concerned about a product?
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Use the approved reporting channel. Do not share confidential evidence on this page.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-3">
            {cards.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Photo */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs">
            <Image
              src="/images/Product-Safety/ps48.jpg"
              alt="Concerned about a product reporting process"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-medium text-[#0c1e38] shadow-2xs backdrop-blur-xs">
              Illustrative imagery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
