"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FAQ[] = [
  {
    id: "faq-1",
    question: "Is Zoiko Surplus a marketplace I can browse?",
    answer:
      "No. Zoiko Surplus operates private, seller-controlled marketplaces. Inventory is never broadcast publicly, and access requires verified counterpart credentials.",
  },
  {
    id: "faq-2",
    question: "Can we expect a guaranteed recovery?",
    answer:
      "No. Recovery yields, prices and transaction timings are never guaranteed. The platform provides governed routing and evidence capture, not speculative return targets.",
  },
  {
    id: "faq-3",
    question: "Does Zoiko run trucks or hold payments?",
    answer:
      "No. Physical logistics are handled by permitted 3PL partners under approved mandates, and payments settle directly or via escrow under signed contracts.",
  },
  {
    id: "faq-4",
    question: "Is a market live because I can select it?",
    answer:
      "No. Selecting a country or language preference does not activate trading. Formal market, category and legal permissions must be confirmed first.",
  },
  {
    id: "faq-5",
    question: "How fast will you respond to an enterprise inquiry?",
    answer:
      "Our enterprise team reviews submissions during standard business hours and responds once preliminary eligibility and category jurisdiction are verified.",
  },
];

const rightFaqs: FAQ[] = [
  {
    id: "faq-6",
    question: "Does Zoiko own or inspect our stock?",
    answer:
      "No. Zoiko Surplus never takes title or ownership of goods. We coordinate qualification workflows and governance policies for enterprise sellers.",
  },
  {
    id: "faq-7",
    question: "Who controls which buyers see our goods?",
    answer:
      "The seller retains absolute control over audience permissions, commercial terms, visibility boundaries and authorized disposition routes.",
  },
  {
    id: "faq-8",
    question: "Can we sell food through this?",
    answer:
      "Food requires specialized ambient safety qualification, shelf-life verification, cold-chain proofs where applicable, and regional market approval.",
  },
  {
    id: "faq-9",
    question: "What should we prepare first?",
    answer:
      "Start with product identity, provenance, volume, current condition, known restrictions and confirmed corporate signing authority.",
  },
];

export default function SellerFAQ() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section aria-label="Frequently Asked Questions - For Enterprise Sellers" className={`${hanken} w-full bg-white`}>
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
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Questions, answered plainly.
          </h2>

          {/* 2-Column Accordion Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
            {/* Left Column (5 FAQs) */}
            <div className="flex flex-col gap-3.5">
              {leftFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-colors duration-200 hover:border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[14.5px] font-medium text-[#0c1e38] pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#926016] text-[18px] font-light leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-[13.5px] leading-relaxed text-[#556987] border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column (4 FAQs) */}
            <div className="flex flex-col gap-3.5">
              {rightFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-colors duration-200 hover:border-slate-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[14.5px] font-medium text-[#0c1e38] pr-4 leading-snug">
                        {faq.question}
                      </span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#926016] text-[18px] font-light leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-[13.5px] leading-relaxed text-[#556987] border-t border-slate-100">
                        {faq.answer}
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
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-12">
          {/* Eyebrow */}
          <div className="text-[10.5px] font-bold tracking-[0.18em] text-[#926016] uppercase">
            SELLER FAQ
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Short answers first.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Verified facts only. Notice is reference.
          </p>

          {/* Accordion List */}
          <div className="mt-6 space-y-2.5">
            {[...leftFaqs, ...rightFaqs].map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 bg-white transition-all duration-200 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between p-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[13.5px] font-bold text-[#0c1e38] pr-3 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#926016] text-[18px] font-bold transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}>
                      &rsaquo;
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-[12.5px] leading-relaxed text-[#556987] border-t border-slate-100">
                      {faq.answer}
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
