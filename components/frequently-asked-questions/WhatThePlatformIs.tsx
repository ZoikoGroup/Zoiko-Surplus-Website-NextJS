"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const platformFaqs = [
  {
    question: "What is Zoiko Surplus?",
    answer:
      "Zoiko Surplus is a gathered surplus resource journal and structured platform connecting vetted enterprise sellers with qualified commercial buyers across verified equipment and surplus categories.",
  },
  {
    question: "Is Zoiko Surplus an open shopping marketplace?",
    answer:
      "No. Zoiko Surplus is an authorization-gated B2B transaction platform with multi-tiered qualification, not an open public retail shopping cart.",
  },
  {
    question: "Does Zoiko Surplus own the goods it helps place?",
    answer:
      "Zoiko Surplus facilitates transactions between verified sellers and approved buyers; it operates the platform and verified exchange rather than taking title to the underlying surplus goods.",
  },
];

export default function WhatThePlatformIs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="platform"
      aria-label="Platform - What the platform is"
      className={`${hanken} w-full bg-[#fbfbfa]/60 py-14 md:py-20`}
    >
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
              PLATFORM
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] font-bold tracking-tight text-[#0c1e38] lg:text-[36px]`}
          >
            What the platform is.
          </h2>
          <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-slate-600">
            Three answers about the model.
          </p>

          {/* 2-Column Content: Left Image, Right Accordions */}
          <div className="mt-10 grid grid-cols-12 gap-8 items-start">
            {/* Left Photo */}
            <div className="col-span-5 relative min-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <Image
                src="/images/Frequently-Asked-Questions/fa10.png"
                alt="Platform operations illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 45vw, 550px"
              />
            </div>

            {/* Right Accordions */}
            <div className="col-span-7 flex flex-col gap-3.5">
              {platformFaqs.map((faq, idx) => {
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
              PLATFORM
            </span>
          </div>

          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            What the platform is.
          </h2>
          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
            Three answers about the model.
          </p>

          {/* Top Illustration Photo */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
            <Image
              src="/images/Frequently-Asked-Questions/fa37.jpg"
              alt="Platform model illustration"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* 3 Accordions */}
          <div className="mt-5 flex flex-col gap-3">
            {platformFaqs.map((faq, idx) => {
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
