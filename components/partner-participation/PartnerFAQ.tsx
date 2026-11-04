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
    id: "faq-1",
    question: "Does submitting an inquiry make me a partner?",
    answer:
      "No. Submitting an inquiry is simply an expression of interest to begin a review process. It does not establish a partnership, grant approval, or guarantee future business.",
  },
  {
    id: "faq-2",
    question: "Will I be assigned work or volume?",
    answer:
      "No. Partner qualification does not guarantee assigned inventory, minimum volumes, or specific route allocations.",
  },
  {
    id: "faq-3",
    question: "Who can apply?",
    answer:
      "Qualified third-party organizations with verifiable identity, licensing, insurance, and genuine operational capability in relevant service classes.",
  },
  {
    id: "faq-4",
    question: "Does a partner take ownership or custody of goods?",
    answer:
      "A partner performs authorized service actions only within contracted bounds. Participation does not grant title to goods or a claim on inventory unless explicitly contracted.",
  },
  {
    id: "faq-5",
    question: "What data would I receive?",
    answer:
      "Partners receive only the minimal, scoped data required to fulfill the specific service. Seller-private inventory, pricing, and buyer identities remain protected.",
  },
] as const;

const FAQ_ITEMS_RIGHT: readonly FAQItem[] = [
  {
    id: "faq-6",
    question: "Can my participation be ended?",
    answer:
      "Yes. Participation is governed and subject to ongoing compliance, verification standards, and contractual terms.",
  },
  {
    id: "faq-7",
    question: "How are food and regulated goods handled?",
    answer:
      "Food, perishables, and regulated materials require separate independent safety, licensing, and local-law approvals before any partner involvement.",
  },
  {
    id: "faq-8",
    question: "Are you taking partner inquiries in my region?",
    answer:
      "Partner intake is market and category dependent. Intake availability is explicitly indicated by active pilot states in your region.",
  },
  {
    id: "faq-9",
    question: "Who sets fees and liability?",
    answer:
      "Fees, operational requirements, and liability boundaries are defined through direct bilateral agreements and contracted service terms.",
  },
  {
    id: "faq-10",
    question: "I'm already a partner is this the right place?",
    answer:
      "Existing partners should use their designated, approved support channel for operational queries rather than submitting this public inquiry form.",
  },
] as const;

export default function PartnerFAQ() {
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
              12
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
