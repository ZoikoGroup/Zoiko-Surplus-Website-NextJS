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
    id: "faq-1",
    question: "Is this category live?",
    answer:
      "Consumer Electronics is currently a conditional educational category demonstrating governance frameworks. Trading is activated per qualified lot, seller arrangement and verified buyer scope.",
  },
  {
    id: "faq-2",
    question: "Who is responsible for wiping data?",
    answer:
      "Data sanitization and cryptographic erasure are strictly the asset owner's responsibility. Evidence of data destruction must be declared and evidenced prior to any disposition route.",
  },
  {
    id: "faq-3",
    question: "Are serial numbers or IMEIs shown?",
    answer:
      "No. Serial numbers, IMEIs, and sensitive unit identifiers are never exposed on public pages or search indexing.",
  },
  {
    id: "faq-4",
    question: "How are batteries handled?",
    answer:
      "Lithium and cell batteries must undergo hazard classification, specialized packaging, and transport compliance according to applicable safety regulations.",
  },
  {
    id: "faq-5",
    question: "What happens with recalled or counterfeit devices?",
    answer:
      "Recalled models and suspected counterfeits are immediately hard-stopped, held from sale routes, and routed to specialist certified destruction.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: "faq-6",
    question: "Are untested devices treated as working?",
    answer:
      "No. Untested devices are explicitly marked as untested and never assumed or represented as working in any capacity.",
  },
  {
    id: "faq-7",
    question: "Can anyone buy from this page?",
    answer:
      "No public purchases can be made directly. Only vetted, approved business buyers with verified credentials are invited to qualified opportunities.",
  },
  {
    id: "faq-8",
    question: "Are warranties included?",
    answer:
      "Surplus lots are sold on governed business terms as documented in the lot manifest; manufacturer warranties are not transferred by default.",
  },
  {
    id: "faq-9",
    question: "What about export rules?",
    answer:
      "International shipments are strictly subject to export control classifications, category regulations, and destination market requirements.",
  },
  {
    id: "faq-10",
    question: "How do I get started?",
    answer:
      "Begin by submitting a Buyer Application to initiate verification, or request an Enterprise Demo to review compliance governance with our team.",
  },
];

export default function ElectronicsFAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const renderFAQCard = (item: FAQItem) => {
    const isOpen = openItem === item.id;
    return (
      <div
        key={item.id}
        className="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white transition-all hover:border-slate-300 shadow-xs"
      >
        <button
          type="button"
          onClick={() => toggleItem(item.id)}
          className="flex w-full items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-slate-50/50"
          aria-expanded={isOpen}
        >
          <span className="text-[13.5px] font-bold text-[#0c1e38] sm:text-[14.5px]">
            {item.question}
          </span>
          <span
            className={`ml-3 flex size-6 shrink-0 items-center justify-center text-[18px] font-light text-[#926016] transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
        {isOpen && (
          <div className="border-t border-[#f1ede6] px-4 pt-2.5 pb-4 sm:px-5 sm:pt-3 sm:pb-5 text-[12.5px] sm:text-[13.5px] leading-relaxed text-[#556987]">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-24 md:px-8 md:pt-14 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            id="faq-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Questions, answered plainly.
          </h2>

          {/* 2-Column Accordion Grid */}
          <div className="mt-10 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {leftFaqs.map(renderFAQCard)}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {rightFaqs.map(renderFAQCard)}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              QUESTIONS
            </span>
          </div>

          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Electronics, answered.
          </h2>

          <div className="mt-5 flex flex-col gap-2.5">
            {[...leftFaqs, ...rightFaqs].map(renderFAQCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
