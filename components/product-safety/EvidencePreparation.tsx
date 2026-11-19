import React from "react";
import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const evidenceItems = [
  {
    title: "Description and condition notes",
    description: "In plain, factual terms.",
  },
  {
    title: "Origin and rights records",
    description: "Where the goods came from.",
  },
  {
    title: "Recall check record",
    description: "When and how it was checked.",
  },
  {
    title: "Handling and storage notes",
    description: "Anything that affects safe movement.",
  },
];

export default function EvidencePreparation() {
  return (
    <section aria-label="Evidence Preparation - Examples of what may be asked" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">08</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              EVIDENCE PREPARATION
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Examples of what may be asked.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Illustrative only. Actual collection happens through authenticated, approved instructions, never on this page.
          </p>

          {/* Content: Left list + Right image */}
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left List */}
            <div className="space-y-7 lg:col-span-5">
              {evidenceItems.map((item, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                  <h3 className={`${sora} text-[16.5px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Photo */}
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs lg:col-span-7 lg:h-[390px]">
              <Image
                src="/images/Product-Safety/ps15.png"
                alt="Evidence preparation documentation"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
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
            EVIDENCE PREPARATION
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Examples of what may be asked.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Illustrative only. Actual collection happens through authenticated, approved instructions, never on this page.
          </p>

          {/* 4 Items with warm circle bullets */}
          <div className="mt-6 flex flex-col gap-4">
            {evidenceItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#fef5e7]">
                  <div className="size-1.5 rounded-full bg-[#d97706]" />
                </div>
                <div>
                  <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Image */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs">
            <Image
              src="/images/Product-Safety/ps43.jpg"
              alt="Evidence preparation documentation"
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
