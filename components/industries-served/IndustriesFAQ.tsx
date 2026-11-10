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
    id: "is-faq-1",
    question: "Does Zoiko Surplus serve every industry?",
    answer:
      "No. Coverage focuses on defined product groupings—such as apparel, electronics, home & lifestyle, industrial goods, and separately gated candidates like food—each subject to its own policy and qualification checks.",
  },
  {
    id: "is-faq-2",
    question: "Are these sectors live today?",
    answer:
      "No sector on this page is assumed active by default. Each sector carries an informational or conditional status depending on approved market, country, and corridor activation.",
  },
  {
    id: "is-faq-3",
    question: "Can I buy food through the platform?",
    answer:
      "No. Food & Grocery is shown strictly as a separately gated candidate requiring independent safety, shelf-life, batch traceability, and legal use approval before activation.",
  },
  {
    id: "is-faq-4",
    question: "Does becoming a verified buyer give me access?",
    answer:
      "No. Buyer verification confirms organizational identity and eligibility in context, but market availability and seller invitation remain separate gates.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: "is-faq-5",
    question: "Will changing my language or region change what I can trade?",
    answer:
      "No. Language controls only affect informational copy display. Market, category, and corridor trading permissions come strictly from approved policy configuration.",
  },
  {
    id: "is-faq-6",
    question: "What happens to goods that are restricted?",
    answer:
      "Where safety checks, brand rules, legal controls, or local restrictions prohibit resale or where no permitted pathway exists, no transaction path is offered.",
  },
  {
    id: "is-faq-7",
    question: "Will you promise buyers, timing or recovery value?",
    answer:
      "No. Zoiko Surplus never promises buyer availability, disposition speed, or guaranteed financial recovery values on public overview pages.",
  },
  {
    id: "is-faq-8",
    question: "How is this page different from the Categories pages?",
    answer:
      "Industries Served frames how sector-level operational constraints and market gates apply across broad industry groupings, whereas Categories detail product-family specific documentation and rules.",
  },
];

export default function IndustriesFAQ() {
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
    <section id="faq" aria-labelledby="is-faq-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            id="is-faq-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Questions, answered plainly.
          </h2>

          {/* 2-Column Grid */}
          <div className="mt-10 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col gap-3.5">{leftFaqs.map(renderCard)}</div>
            <div className="flex flex-col gap-3.5">{rightFaqs.map(renderCard)}</div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            INDUSTRY FAQ
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Short answers,
            <br />
            stated plainly.
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
