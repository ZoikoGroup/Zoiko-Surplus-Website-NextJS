"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FAQItem[] = [
  {
    id: "oa-faq-1",
    question: "Is Zoiko Surplus an open marketplace?",
    answer:
      "No. Zoiko Surplus is a seller-controlled B2B operating approach where inventory access, buyer eligibility and transaction workflows are governed by explicit permissions.",
  },
  {
    id: "oa-faq-2",
    question: "Does verification give me access to inventory?",
    answer:
      "No. Passing KYB and business verification checks identity and eligibility in context, but market activation, corridor rules and seller invitation remain separate gates.",
  },
  {
    id: "oa-faq-3",
    question: "Is every market and category live?",
    answer:
      "No. Market and category availability is activated region by region and corridor by corridor. Categories shown in overviews do not imply live trading availability in your area.",
  },
  {
    id: "oa-faq-4",
    question: "Does Zoiko Surplus own or ship the goods?",
    answer:
      "No. By default Zoiko Surplus does not take title as merchant of record, own inventory, or operate transport fleets; permitted collection and logistics sit with authorized third-party partners.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: "oa-faq-5",
    question: "Who handles payment?",
    answer:
      "Settlement and financial workflows depend on the configured disposition route, activated corridor rules and the designated merchant of record or authorized settlement partner.",
  },
  {
    id: "oa-faq-6",
    question: "Can food and beverage be offered?",
    answer:
      "Food and beverage categories are gated by separate safety, shelf-life and regulatory authorization reviews. No live food program is described or implied on this page.",
  },
  {
    id: "oa-faq-7",
    question: "Do you guarantee the best price or an environmental result?",
    answer:
      "No. Routes are compared on expected net recovery within policy constraints, and no recovery price, sell-through rate, or unverified environmental outcome is promised.",
  },
  {
    id: "oa-faq-8",
    question: "What happens when something goes wrong?",
    answer:
      "Disputes, holds, withdrawals and product safety or recall signals follow defined exception processes and escalate to accountable review guidance rather than silent resolution.",
  },
];

export default function OurApproachFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderCard = (item: FAQItem) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className="overflow-hidden rounded-[14px] border border-slate-200/90 bg-white shadow-2xs transition-all hover:border-slate-300"
      >
        <button
          type="button"
          onClick={() => toggle(item.id)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between p-4.5 px-5 text-left transition-colors hover:bg-slate-50/50"
        >
          <span className="text-[14px] font-bold text-[#0c1e38]">
            {item.question}
          </span>
          <span
            className={`ml-4 flex size-6 shrink-0 items-center justify-center text-[19px] font-light text-[#926016] transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>

        {isOpen && (
          <div className="border-t border-slate-100 px-5 pt-3 pb-4.5 text-[13px] leading-relaxed text-[#556987]">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" aria-labelledby="oa-faq-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>14</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            id="oa-faq-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Questions, answered plainly.
          </h2>

          {/* 2-Column Grid */}
          <div className="mt-10 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col gap-3.5">
              {leftFaqs.map(renderCard)}
            </div>
            <div className="flex flex-col gap-3.5">
              {rightFaqs.map(renderCard)}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            QUESTIONS
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Common questions,
            <br />
            answered first.
          </h2>

          <div className="mt-5 flex flex-col gap-2.5">
            {[...leftFaqs, ...rightFaqs].map((item) => {
              const isOpen = openId === `m-${item.id}`;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-[14px] border border-slate-200/90 bg-white shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggle(`m-${item.id}`)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-3.5 px-4 text-left"
                  >
                    <span className="text-[13.5px] font-bold leading-snug text-[#0c1e38]">
                      {item.question}
                    </span>
                    <span
                      className={`ml-3 flex size-5 shrink-0 items-center justify-center text-[17px] font-bold text-[#926016] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pt-2.5 pb-3.5 text-[12px] leading-relaxed text-[#556987]">
                      {item.answer}
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
