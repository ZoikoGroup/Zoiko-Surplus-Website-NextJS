"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const allFaqs = [
  {
    q: "Does verification mean the goods are safe?",
    a: "No. Business verification confirms organizational identity and legal registration, not item-level safety, conformity or physical condition.",
  },
  {
    q: "Is a stated grade a safety finding?",
    a: "No. A condition grade refers only to functional and cosmetic inspection as described, and does not establish safety, conformity or lawful provenance.",
  },
  {
    q: "What if goods may be recalled?",
    a: "Pause the affected disposition immediately, quarantine the items, and submit an escalation via the approved reporting channel.",
  },
  {
    q: "Does this page monitor recalls?",
    a: "No. This page is educational only. It does not monitor active recall registries or confirm whether a particular item is recalled.",
  },
  {
    q: "Can I upload evidence here?",
    a: "No. Evidence and documentation are only accepted through authenticated, secure workflows and verified case channels, never on public web pages.",
  },
  {
    q: "Is food covered here?",
    a: "Food, beverages and perishable goods are subject to separate, dedicated safety approvals and cold-chain compliance before activation.",
  },
  {
    q: "Who is responsible for product safety?",
    a: "Sellers and offering entities retain statutory responsibility for products offered. Zoiko operates within its approved coordination scope.",
  },
  {
    q: "What if someone is in danger?",
    a: "Contact local emergency services immediately. Platform reporting is not an emergency response service and must not be used for urgent danger.",
  },
];

const faqsCol1 = allFaqs.slice(0, 4);
const faqsCol2 = allFaqs.slice(4, 8);

export default function ProductSafetyFAQ() {
  const [openCol1, setOpenCol1] = useState<number | null>(null);
  const [openCol2, setOpenCol2] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  const toggleCol1 = (idx: number) => {
    setOpenCol1(openCol1 === idx ? null : idx);
  };

  const toggleCol2 = (idx: number) => {
    setOpenCol2(openCol2 === idx ? null : idx);
  };

  const toggleMobile = (idx: number) => {
    setOpenMobile(openMobile === idx ? null : idx);
  };

  return (
    <section aria-label="Product Safety Frequently Asked Questions" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">11</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Questions, answered plainly.
          </h2>

          {/* FAQ 2-Column Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {/* Column 1 */}
            <div className="space-y-3.5">
              {faqsCol1.map((faq, idx) => {
                const isOpen = openCol1 === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-slate-300/80"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCol1(idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-[14.5px] font-semibold text-[#0c1e38] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <Plus
                        className={`size-4 shrink-0 text-[#926016] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-[14px] leading-relaxed text-[#556987]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              {faqsCol2.map((faq, idx) => {
                const isOpen = openCol2 === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-slate-300/80"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCol2(idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-[14.5px] font-semibold text-[#0c1e38] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <Plus
                        className={`size-4 shrink-0 text-[#926016] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-[14px] leading-relaxed text-[#556987]">
                        {faq.a}
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
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Direct answers.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[14px] leading-relaxed text-[#556987]">
            Key points at a glance.
          </p>

          {/* Single Column Accordion List */}
          <div className="mt-6 flex flex-col gap-3">
            {allFaqs.map((faq, idx) => {
              const isOpen = openMobile === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleMobile(idx)}
                    className="flex w-full items-center justify-between gap-3 p-4 text-left text-[13.5px] font-semibold text-[#0c1e38] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <Plus
                      className={`size-4 shrink-0 text-[#926016] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={2.2}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pt-2.5 pb-4 text-[13px] leading-relaxed text-[#556987]">
                      {faq.a}
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
