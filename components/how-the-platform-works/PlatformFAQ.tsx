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
    question: "How does verified participation differ from trading permission?",
    answer:
      "Verification confirms business identity, legal standing and baseline compliance. Trading permission is granted separately by sellers per inventory lot and category.",
  },
  {
    id: "faq-2",
    question: "Is this a public marketplace?",
    answer:
      "No. Zoiko Surplus operates private, seller-controlled marketplaces. Inventory is never broadcast publicly, and access requires verified counterpart credentials.",
  },
  {
    id: "faq-3",
    question: "Does Zoiko own the goods?",
    answer:
      "No. Zoiko Surplus does not take ownership or title of goods. We provide the governance infrastructure and workflow software for sellers and verified buyers.",
  },
  {
    id: "faq-4",
    question: "Does Zoiko run trucks or hold payments?",
    answer:
      "No. Physical transport is handled by permitted third-party logistics partners, and financial settlements occur under direct or escrow terms between counterparties.",
  },
];

const rightFaqs: FAQ[] = [
  {
    id: "faq-5",
    question: "Is the platform live in my country?",
    answer:
      "Availability varies strictly by region and activated category. Check approved market disclosures or submit an inquiry to review regional activation status.",
  },
  {
    id: "faq-6",
    question: "Can food be traded?",
    answer:
      "Only where specific ambient food safety protocols, traceability requirements, shelf-life thresholds, and jurisdictional food-handling authorizations are explicitly activated.",
  },
  {
    id: "faq-7",
    question: "What happens when something goes wrong?",
    answer:
      "Exceptions follow documented workflows in Stage 07 (Resolve), retaining immutable audit records, chain-of-custody proofs, and dispute resolution paths.",
  },
  {
    id: "faq-8",
    question: "Are results guaranteed?",
    answer:
      "No. Documented processes provide auditable compliance and structured pathways, but recovery yields and transaction timings depend on market conditions and counterparty decisions.",
  },
];

export default function PlatformFAQ() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section aria-label="Platform Frequently Asked Questions" className={`${hanken} w-full bg-white`}>
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
            {/* Left Column */}
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

            {/* Right Column */}
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
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#8a9bb2] uppercase">
            FAQ
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Short, factual answers.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Summary answers from our audit, doctrine and governance framework.
          </p>

          {/* Mobile Accordion Stack (all 8 FAQs) */}
          <div className="mt-6 flex flex-col gap-3">
            {[...leftFaqs, ...rightFaqs].map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between p-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] font-medium text-[#0c1e38] pr-3 leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#926016] text-[16px] font-light leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-[13px] leading-relaxed text-[#556987] border-t border-slate-100">
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
