"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type FaqItemData = {
  id: string;
  question: string;
  answer: string;
};

const leftFaqs: FaqItemData[] = [
  {
    id: "own-move",
    question: "Does Zoiko own or move the goods?",
    answer: "No. Zoiko coordinates and records; authorized third-party carriers move goods, and sellers retain ownership until transfer.",
  },
  {
    id: "service-provider",
    question: "Who performs the actual service?",
    answer: "Contracted, vetted third-party service providers and authorized recipients carry out physical transport, testing, resale or donation.",
  },
  {
    id: "pick-pathway",
    question: "Can I pick any pathway shown?",
    answer: "Pathways are permitted based on category eligibility, jurisdiction regulations, safety clearance, and seller policy mandates.",
  },
  {
    id: "title-custody",
    question: "Does the network take title or custody?",
    answer: "Never. Zoiko operates strictly as a coordination platform without taking title, custody, or financial ownership of inventory.",
  },
  {
    id: "food-handling",
    question: "How is food handled?",
    answer: "Food and perishables require independent safety gating, shelf-life clearance, and compliance with local statutory mandates before any route activation.",
  },
];

const rightFaqs: FaqItemData[] = [
  {
    id: "fees-settlement",
    question: "Who sets fees and who gets paid?",
    answer: "Service fees and transaction terms are governed by contracted agreements between the relevant parties according to approved schedules.",
  },
  {
    id: "regional-availability",
    question: "Are partners available in my region?",
    answer: "Partner coverage is enabled market by market. Unserviced regions remain in an informational 'not available' status until activated.",
  },
  {
    id: "route-issues",
    question: "What happens if a route goes wrong?",
    answer: "A mandatory hold and exception procedure is triggered, escalating the case to designated accountable roles for formal investigation and re-routing.",
  },
  {
    id: "become-partner",
    question: "Can my organization become a partner?",
    answer: "Qualified logistics, inspection, recycling, and donation organizations may apply through our formal partner qualification program.",
  },
  {
    id: "public-details",
    question: "Will routes or partner details be public?",
    answer: "No. All participant data, transaction details, and route documentation are strictly private and accessible only to authorized, entitled roles.",
  },
];

const allMobileFaqs = [...leftFaqs, ...rightFaqs];

function AccordionItem({ item }: { item: FaqItemData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[14px] border border-[#eef2f6] bg-white transition-all hover:border-[#e2e8f0]">
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

function MobileAccordionItem({ item }: { item: FaqItemData }) {
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

export default function NetworkFaq() {
  return (
    <section aria-labelledby="network-faq-heading" className={`${hanken} w-full bg-[#fbf6ef] md:bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-10 pb-24">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>15</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              FAQ
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="network-faq-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Questions, answered plainly.
          </h2>

          {/* 2-Column FAQ Layout */}
          <div className="mt-9 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {leftFaqs.map((faq) => (
                <AccordionItem key={faq.id} item={faq} />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {rightFaqs.map((faq) => (
                <AccordionItem key={faq.id} item={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-12">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>15</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            QUESTIONS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-[23px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Coordination, roles & boundaries.
        </h2>

        {/* 10 Single Column FAQ Cards */}
        <div className="mt-5 flex flex-col gap-2.5">
          {allMobileFaqs.map((faq) => (
            <MobileAccordionItem key={faq.id} item={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
