"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: "browse",
    question: "Can I browse private marketplaces here?",
    answer:
      "No. This page is purely informational and explains the governance model. Private marketplaces are accessible only to verified, entitled organizations behind authenticated sign-in.",
  },
  {
    id: "applying",
    question: "Does applying get me in?",
    answer:
      "Applying initiates compliance, identity and category review. Passing review qualifies an organization to be considered, but sellers independently decide which verified buyers to invite into their private audiences.",
  },
  {
    id: "who-decides",
    question: "Who decides what I can see?",
    answer:
      "Sellers control market visibility, audience membership, and the depth of product and inventory details disclosed to each invited participant tier.",
  },
  {
    id: "verification-guarantee",
    question: "Does verification mean the goods are safe or genuine?",
    answer:
      "No. KYB verification establishes organization identity and business legitimacy. It does not inspect physical goods, verify chain-of-custody, or replace standard commercial warranties.",
  },
  {
    id: "data-exposed",
    question: "Will my data or other buyers' data be exposed?",
    answer:
      "No. Private marketplaces enforce strict need-to-know protocols. Buyer identities, bids, offers and inventory volumes remain confidential and are never shared publicly or between competing buyers.",
  },
  {
    id: "lose-access",
    question: "Can I lose access once granted?",
    answer:
      "Yes. Entitlements are revocable at any time by the seller or governance administrators if rules are breached, credentials lapse, or audience criteria change.",
  },
  {
    id: "country-availability",
    question: "Are private markets available in my country?",
    answer:
      "Private markets operate only where specific regional and product category corridors are active. Availability is gated and not assumed globally.",
  },
  {
    id: "food-handled",
    question: "How is food handled?",
    answer:
      "Food and consumable categories require specialized regulatory approvals, shelf-life verification, cold-chain compliance and legal clearance before any market participation.",
  },
  {
    id: "where-transact",
    question: "Where do actual transactions happen?",
    answer:
      "When an entitled buyer reviews an active opportunity, negotiation, binding commitments and settlement occur within our governed Offers & Transactions framework.",
  },
  {
    id: "how-start",
    question: "How do I start?",
    answer:
      "Enterprises seeking to govern private surplus audiences can Request an Enterprise Demo. Prospective buyers can Apply to Become a Buyer to begin the verification onboarding process.",
  },
];

export default function PrivateMarketplacesFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5, 10);

  return (
    <section id="faq" aria-labelledby="faq-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
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

          {/* 2-Column Accordion Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Left Column */}
            <div className="flex flex-col gap-3">
              {leftColumn.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-[14px] border border-[#eef2f6] bg-white transition-all shadow-[0_1px_6px_rgba(15,23,42,0.02)] hover:border-[#e2e8f0]"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                    >
                      <span className="text-[13.5px] font-bold text-[#0f172a]">
                        {faq.question}
                      </span>
                      <span
                        className={`text-[19px] font-light text-[#926016] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#f1f5f9] px-5 pt-2 pb-4">
                        <p className="text-[12.5px] leading-relaxed text-[#556987]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3">
              {rightColumn.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-[14px] border border-[#eef2f6] bg-white transition-all shadow-[0_1px_6px_rgba(15,23,42,0.02)] hover:border-[#e2e8f0]"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none"
                    >
                      <span className="text-[13.5px] font-bold text-[#0f172a]">
                        {faq.question}
                      </span>
                      <span
                        className={`text-[19px] font-light text-[#926016] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#f1f5f9] px-5 pt-2 pb-4">
                        <p className="text-[12.5px] leading-relaxed text-[#556987]">
                          {faq.answer}
                        </p>
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
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            QUESTIONS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Access, permissions &amp;
          <br />
          boundaries.
        </h2>

        {/* 10 Stacked FAQ Cards */}
        <div className="mt-7 flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-[14px] border border-[#eef2f6] bg-white transition-all shadow-[0_1px_6px_rgba(15,23,42,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left focus:outline-none"
                >
                  <span className="text-[13px] font-bold text-[#0f172a]">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[19px] font-light text-[#926016] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#f1f5f9] px-4 pt-2 pb-4">
                    <p className="text-[12px] leading-relaxed text-[#556987]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
