"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const leftFaqs: FaqItem[] = [
  {
    id: "buy-goods",
    question: "Does making an offer buy the goods?",
    answer:
      "No. Making an offer is a non-binding proposal subject to seller review, commercial rules, and mutual explicit acceptance.",
  },
  {
    id: "transact-page",
    question: "Can I transact here, on this page?",
    answer:
      "No. This page is educational and architectural. Transactions occur only within authenticated, entitled buyer and seller environments.",
  },
  {
    id: "buyer-access",
    question: "Does applying as a buyer grant trading access?",
    answer:
      "Application initiates identity verification and credential gating. Trading access is granted only after full qualification.",
  },
  {
    id: "prices-terms",
    question: "Who sets prices and terms?",
    answer:
      "Sellers maintain sole authority to set reserve prices, acceptable discounts, quantities, and audience rules.",
  },
  {
    id: "payment-handler",
    question: "Who handles payment?",
    answer:
      "Contracted and authorized third-party payment providers process funds under applicable statutory and banking covenants.",
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: "delivers-goods",
    question: "Who delivers the goods?",
    answer:
      "Separately contracted, verified logistics providers or authorized carriers handle collection and physical transportation.",
  },
  {
    id: "guaranteed-complete",
    question: "Is an accepted offer guaranteed to complete?",
    answer:
      "Completion depends on satisfactory fulfillment, inspection clearance, and successful settlement without exception triggers.",
  },
  {
    id: "safe-genuine",
    question: "Does verification mean the goods are safe or genuine?",
    answer:
      "Verification confirms participant business credentials. Category-specific inspection and warranties are governed independently.",
  },
  {
    id: "market-available",
    question: "Are offers and transactions available in my market?",
    answer:
      "Features are activated region by region and category by category. Inactive markets remain in informational status.",
  },
  {
    id: "public-prices",
    question: "Will prices or identities be public?",
    answer:
      "Never. All offer negotiations, final prices, lot details, and participant identities are kept strictly confidential.",
  },
];

const allMobileFaqs = [...leftFaqs, ...rightFaqs];

function DesktopAccordionRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[16px] border border-[#eef2f6] bg-white transition-all hover:border-[#e2e8f0]">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-4 text-left sm:p-4.5"
      >
        <span className="text-[14px] font-bold text-[#0f172a] sm:text-[14.5px]">
          {item.question}
        </span>
        <span className={`shrink-0 text-[#926016] transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5">
          <p className="text-[12.5px] leading-relaxed text-[#556987]">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

function MobileAccordionRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[14px] border border-[#e8edf2] bg-white shadow-xs">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-3 p-3.5 text-left"
      >
        <span className="text-[12.5px] font-bold text-[#0f172a]">
          {item.question}
        </span>
        <span className={`shrink-0 text-[#926016] transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-3.5 pb-3.5 pt-0">
          <p className="text-[11px] leading-relaxed text-[#556987]">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function OffersFaq() {
  return (
    <section aria-labelledby="faq-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
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
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Questions, answered plainly.
          </h2>

          {/* 2-Column FAQ Layout */}
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {leftFaqs.map((faq) => (
                <DesktopAccordionRow key={faq.id} item={faq} />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {rightFaqs.map((faq) => (
                <DesktopAccordionRow key={faq.id} item={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            QUESTIONS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[23px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Offers, payment &amp; safety — answered.
        </h2>

        {/* 10 Single-Column FAQ Cards */}
        <div className="mt-5 flex flex-col gap-2.5">
          {allMobileFaqs.map((faq) => (
            <MobileAccordionRow key={faq.id} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
