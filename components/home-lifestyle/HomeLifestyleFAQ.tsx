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
    id: "hl-faq-1",
    question: "Is this category live?",
    answer:
      "Home & Lifestyle is currently a conditional educational category. Availability of eligible goods and trading access depends on separate market and subcategory approvals.",
  },
  {
    id: "hl-faq-2",
    question: "What home goods can be considered?",
    answer:
      "Overstock, customer returns, discontinued ranges and imperfect items across furniture, décor, textiles, seasonal goods and housewares with documented condition.",
  },
  {
    id: "hl-faq-3",
    question: "Are small appliances included?",
    answer:
      "Small appliances carry conditional safety rules including electrical checks, voltage/plug suitability, and recall screening. They are not included by default.",
  },
  {
    id: "hl-faq-4",
    question: "How are textiles handled?",
    answer:
      "Household textiles undergo strict hygiene, fiber content labelling verification, and sanitation screening. Contaminated or unhygienic goods are strictly excluded.",
  },
  {
    id: "hl-faq-5",
    question: "What about flammability and fire safety?",
    answer:
      "Upholstered furniture, mattresses, and soft furnishings must comply with relevant regional flammability standards, fire resistance certifications, and intact law labels.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: "hl-faq-6",
    question: "Is kitchenware regulated?",
    answer:
      "Yes. Food-contact items, cookware, and tableware are reviewed for food-grade compliance, non-toxic material declarations, and coating integrity.",
  },
  {
    id: "hl-faq-7",
    question: "What if condition is unknown?",
    answer:
      "Unknown or disputed condition is explicitly marked as such on lot documentation and is never assumed to be good or functional.",
  },
  {
    id: "hl-faq-8",
    question: "Does Zoiko provide pickup or storage?",
    answer:
      "No. Zoiko does not provide logistics, pickup, warehousing or freight by default. Separately contracted and licensed logistics partners handle all custody and transport.",
  },
  {
    id: "hl-faq-9",
    question: "Can anyone buy from this page?",
    answer:
      "No. Direct purchases cannot be made on public pages. Only vetted, approved business buyers with verified credentials are invited to qualified opportunities.",
  },
  {
    id: "hl-faq-10",
    question: "How do I get started?",
    answer:
      "Apply to become a Verified Buyer or submit an Enterprise Demo request to discuss qualifying surplus home and lifestyle inventory with our team.",
  },
];

export default function HomeLifestyleFAQ() {
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
          className="flex w-full items-center justify-between p-4.5 px-5 text-left transition-colors hover:bg-slate-50/50"
          aria-expanded={isOpen}
        >
          <span className="text-[14px] font-bold text-[#0c1e38] sm:text-[14.5px]">
            {item.question}
          </span>
          <span
            className={`ml-4 flex size-6 shrink-0 items-center justify-center text-[20px] font-light text-[#926016] transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
        {isOpen && (
          <div className="border-t border-[#f1ede6] px-5 pt-3 pb-5 text-[13.5px] leading-relaxed text-[#556987]">
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
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
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
            id="faq-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
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
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>13</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              QUESTIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            Home &amp; lifestyle, answered.
          </h2>

          {/* 10 FAQ Cards Stacked */}
          <div className="mt-5 flex flex-col gap-2.5">
            {[...leftFaqs, ...rightFaqs].map((item) => {
              const isOpen = openItem === `m-${item.id}`;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(`m-${item.id}`)}
                    className="flex w-full items-center justify-between p-3.5 px-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[13.5px] font-bold text-[#0c1e38]">
                      {item.question}
                    </span>
                    <span
                      className={`ml-3 flex size-5 shrink-0 items-center justify-center text-[16px] font-bold text-[#926016] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#f1ede6] px-4 pt-2.5 pb-3.5 text-[12px] leading-relaxed text-[#556987]">
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
