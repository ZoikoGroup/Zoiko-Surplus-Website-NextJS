"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const marketFaqs = [
  {
    question: "Is Zoiko Surplus operating in every country?",
    answer:
      "No. Global architecture does not mean worldwide operations. Each jurisdiction is configured and activated independently based on legal, commercial, and regulatory approvals.",
  },
  {
    question: "What categories does Zoiko Surplus cover?",
    answer:
      "Core categories encompass commercial electronics, industrial machinery, wholesale merchandise, excess apparel, and verified business inventory subject to strict category controls.",
  },
  {
    question: "Can food surplus be sold through Zoiko Surplus?",
    answer:
      "Perishable and food items require dedicated cold-chain certifications, regulatory approvals, and specific safety protocols which are not supported on standard surplus inventory routes.",
  },
];

export default function WhereAndWhat() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="markets"
      aria-label="Markets and Categories - Where and what"
      className={`${hanken} w-full bg-white py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">05</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              MARKETS AND CATEGORIES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] font-bold tracking-tight text-[#0c1e38] lg:text-[36px]`}
          >
            Where and what.
          </h2>
          <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-slate-600">
            Global by architecture, regional by configuration, activated market by market.
          </p>

          {/* 2-Column Content: Left Accordions, Right Image */}
          <div className="mt-10 grid grid-cols-12 gap-8 items-start">
            {/* Left Accordions */}
            <div className="col-span-7 flex flex-col gap-3.5">
              {marketFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all shadow-2xs hover:border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`${sora} text-[15.5px] font-bold text-[#0c1e38] pr-4`}
                      >
                        {faq.question}
                      </span>
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-600">
                        {isOpen ? (
                          <Minus className="size-3.5" />
                        ) : (
                          <Plus className="size-3.5" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pt-3 pb-5">
                        <p className="text-[13.5px] leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Photo */}
            <div className="col-span-5 relative min-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <Image
                src="/images/Frequently-Asked-Questions/fa13.png"
                alt="Markets and categories operations illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 45vw, 550px"
              />
            </div>
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
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              MARKETS AND CATEGORIES
            </span>
          </div>

          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Where and what.
          </h2>
          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
            Global by architecture, regional by configuration, activated market by market.
          </p>

          {/* Top Illustration Photo */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
            <Image
              src="/images/Frequently-Asked-Questions/fa40.jpg"
              alt="Markets and categories illustration"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* 3 Accordions */}
          <div className="mt-5 flex flex-col gap-3">
            {marketFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="flex w-full items-center justify-between p-4.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`${sora} text-[14.5px] font-bold text-[#0c1e38] pr-3`}
                    >
                      {faq.question}
                    </span>
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-600">
                      {isOpen ? (
                        <Minus className="size-3" />
                      ) : (
                        <Plus className="size-3" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4.5 pt-2.5 pb-4.5">
                      <p className="text-[13px] leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
