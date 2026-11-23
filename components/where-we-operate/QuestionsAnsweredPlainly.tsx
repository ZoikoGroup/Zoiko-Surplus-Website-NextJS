"use client";

import React, { useState } from "react";
import { Plus, Minus, ChevronRight, ChevronDown } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const leftFaqs: FAQItem[] = [
  {
    id: "global",
    question: "Is Zoiko Surplus global?",
    answer:
      "Zoiko Surplus is designed for global scalability. However, actual operational services are activated market by market, strictly subject to approved regulatory frameworks, verified trade corridors, and vetted participating organizations.",
  },
  {
    id: "office",
    question: "Does an office mean services are available?",
    answer:
      "No. A corporate office or local legal entity represents corporate presence only. Services in that region are activated only after independent infrastructure, legal, and operational setup is completed.",
  },
  {
    id: "pilot",
    question: "Is a pilot live?",
    answer:
      "Pilot operations are controlled, selective deployments restricted to designated testing participants and specific asset categories. Participation in pilots does not imply general market availability.",
  },
  {
    id: "countries",
    question: "Which countries are active?",
    answer:
      "No speculative country list or coverage map is published without validated legal and operational evidence. Authorized participants can confirm active status through their account representative or market check.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: "food",
    question: "Is food included?",
    answer:
      "Food and grocery requires distinct regulatory clearances, temperature-controlled logistics capabilities, and verified food safety protocols. It operates under separate category controls and is not enabled by default.",
  },
  {
    id: "corridor",
    question: "What is a corridor?",
    answer:
      "A corridor represents an approved trade pathway linking specific origin and destination regions. It governs the cross-border compliance rules, logistics providers, and financial settlement channels available for transactions.",
  },
  {
    id: "language",
    question: "Does choosing a language give me access?",
    answer:
      "No. Language selection is an interface convenience for readability. It does not establish legal jurisdiction, commercial trading rights, or access permissions for any specific geographical market.",
  },
  {
    id: "next",
    question: "What should I do next?",
    answer:
      "You can check current market availability through the qualification tools, review our Buyer and Seller documentation, or request an enterprise consultation to assess activation timing for your region.",
  },
];

const allMobileFaqs: FAQItem[] = [
  leftFaqs[0], // Is Zoiko Surplus global?
  leftFaqs[1], // Does an office mean services are available?
  leftFaqs[2], // Is a pilot live?
  leftFaqs[3], // Which countries are active?
  rightFaqs[0], // Is food included?
  rightFaqs[1], // What is a corridor?
  rightFaqs[2], // Does choosing a language give me access?
  rightFaqs[3], // What should I do next?
];

export default function QuestionsAnsweredPlainly() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      aria-label="FAQ"
      className={`${hanken} w-full bg-white py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-widest text-[#926016] uppercase">
              08 ——— FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            className={`${sora} mt-3 text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0c1e38]`}
          >
            Questions, answered plainly.
          </h2>

          {/* 2-Column FAQ Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 items-start">
            <div className="flex flex-col gap-4">
              {leftFaqs.map((faq) => {
                const isOpen = Boolean(openIds[faq.id]);
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-slate-300 shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      className="flex w-full items-center justify-between p-4 lg:p-5 text-left transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[14px] lg:text-[15px] font-semibold text-[#0c1e38] pr-4">
                        {faq.question}
                      </span>
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#926016] transition-transform">
                        {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-4 pb-4 pt-3 lg:px-5 lg:pb-5">
                        <p className="text-[13px] leading-relaxed text-slate-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-4">
              {rightFaqs.map((faq) => {
                const isOpen = Boolean(openIds[faq.id]);
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-slate-300 shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      className="flex w-full items-center justify-between p-4 lg:p-5 text-left transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[14px] lg:text-[15px] font-semibold text-[#0c1e38] pr-4">
                        {faq.question}
                      </span>
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[#926016] transition-transform">
                        {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-4 pb-4 pt-3 lg:px-5 lg:pb-5">
                        <p className="text-[13px] leading-relaxed text-slate-600">{faq.answer}</p>
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
          MOBILE VIEW (reflects exact mobile design)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4">
          <span className="text-[11px] font-bold tracking-widest text-[#926016] uppercase">
            FAQ
          </span>
          <h2
            className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
          >
            Direct answers.
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
            Global design, offices, pilots, markets, food, corridors and access.
          </p>

          <div className="mt-6 flex flex-col gap-2.5">
            {allMobileFaqs.map((faq) => {
              const isOpen = Boolean(openIds[faq.id]);
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center justify-between p-4 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14.5px] font-semibold text-[#0c1e38] pr-3">
                      {faq.question}
                    </span>
                    <span className="flex size-6 shrink-0 items-center justify-center text-[#926016]">
                      {isOpen ? (
                        <ChevronDown className="size-4" />
                      ) : (
                        <ChevronRight className="size-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pb-4 pt-2.5">
                      <p className="text-[12.5px] leading-relaxed text-slate-600">{faq.answer}</p>
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
