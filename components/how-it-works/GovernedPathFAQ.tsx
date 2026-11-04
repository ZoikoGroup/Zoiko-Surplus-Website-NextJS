"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS_LEFT: readonly FAQItem[] = [
  {
    id: "faq-path-1",
    question: "Is this a live, always-on process?",
    answer:
      "No. The sequence describes an architectural framework and operational model. Actual stage availability depends on your market, category activation, and seller permissions.",
  },
  {
    id: "faq-path-2",
    question: "Does the platform buy or sell the goods?",
    answer:
      "No. The platform is not a principal merchant, reseller, or title holder. Transactions occur directly between participating sellers and verified buyers under defined agreements.",
  },
  {
    id: "faq-path-3",
    question: "Where do safety and policy checks happen?",
    answer:
      "Safety, policy, and eligibility gates execute during Stage 02 (Govern) — strictly prior to Stage 03 (Match). Ineligible routes are filtered out before options are ranked.",
  },
  {
    id: "faq-path-4",
    question: "What happens when something goes wrong?",
    answer:
      "Exceptions trigger designated hold, review, or dispute workflows within Stage 07 (Resolve), retaining complete evidence and audit history for all affected parties.",
  },
  {
    id: "faq-path-5",
    question: "Is every stage available in my market?",
    answer:
      "Not necessarily. Stages and capabilities are activated on a market-by-market and category-by-category basis. Check active pilot statuses for current regional availability.",
  },
] as const;

const FAQ_ITEMS_RIGHT: readonly FAQItem[] = [
  {
    id: "faq-path-6",
    question: "Does verification guarantee access or safety?",
    answer:
      "Verification checks credentials, identity, and compliance status at a point in time. It establishes eligibility but does not replace counterparty due diligence or commercial warranties.",
  },
  {
    id: "faq-path-7",
    question: "How is Food & Grocery handled?",
    answer:
      "Food, perishables, and regulated goods require separate independent safety assessments, shelf-life verification, and local regulatory clearance before any pathway activation.",
  },
  {
    id: "faq-path-8",
    question: "Will I see prices or inventory on this page?",
    answer:
      "No. Public pages display high-level framework models only. All live inventory, lot availability, pricing, and counterparty identities remain confidential behind scoped permissions.",
  },
  {
    id: "faq-path-9",
    question: "How do I get started?",
    answer:
      "Determine your primary role (Seller, Verified Buyer, or Authorized Partner) and follow the dedicated application or intake pathway to begin the qualification process.",
  },
  {
    id: "faq-path-10",
    question: "Where can I go deeper on each capability?",
    answer:
      "You can explore dedicated section overviews for Surplus Enterprise (qualification & policy), Surplus Exchange (matching & transacting), and Surplus Network (partner execution).",
  },
] as const;

export default function GovernedPathFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          {/* Eyebrow badge / section tag */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wider text-[#1E2126]">
              13
            </span>
            <span className="w-11 h-[2px] bg-[#D3DDE8]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#926016]">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1E2126] leading-[1.2] tracking-tight">
            Questions, answered plainly.
          </h2>
        </div>

        {/* FAQ Grid Layout - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start pt-2">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            {FAQ_ITEMS_LEFT.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="w-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl transition-all duration-200 shadow-xs overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-sm md:text-base font-bold text-[#1E2126] pr-4">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#926016] shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#926016] group-hover:scale-110 transition-transform shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-[#4F647A] leading-relaxed border-t border-[#F1F5F9] pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-4">
            {FAQ_ITEMS_RIGHT.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="w-full bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl transition-all duration-200 shadow-xs overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left group focus:outline-none"
                  >
                    <span className="text-sm md:text-base font-bold text-[#1E2126] pr-4">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#926016] shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#926016] group-hover:scale-110 transition-transform shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-[#4F647A] leading-relaxed border-t border-[#F1F5F9] pt-4">
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
