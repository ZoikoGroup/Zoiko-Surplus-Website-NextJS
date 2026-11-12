"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does an inquiry make us a partner?",
      answer:
        "No. Submitting an inquiry expresses interest only. Admission requires fit screening, due diligence, contracted terms, and explicit market or category activation.",
    },
    {
      question: "Can a donation or charity organization join?",
      answer:
        "Yes, verified non-profit and redistribution organizations may apply under the redistribution and reuse operator role, subject to regional eligibility and seller authorization.",
    },
    {
      question: "Will we be assigned jobs or volume?",
      answer:
        "No allocation, volume, or assignment is promised. Even after activation, individual tasks require specific authorization from the enterprise seller.",
    },
    {
      question: "Can we handle food or hazardous goods?",
      answer:
        "Food, perishables, and recalled goods are excluded from this pathway. Regulated or hazardous materials require separate, specific legal clearance before consideration.",
    },
    {
      question: "Does Zoiko provide trucks or warehouses?",
      answer:
        "No. Zoiko Surplus provides governance, qualification, and coordination only. It does not own fleets, warehouses, or take custody of goods by default.",
    },
    {
      question: "Is there a list of current partners?",
      answer:
        "No. There is no public directory. Partner names, logos, volumes, and counts are not published.",
    },
    {
      question: "How long does review take?",
      answer:
        "No review timeframe is promised. Each stage in the review lifecycle is evaluated independently based on regional and category readiness.",
    },
    {
      question: "I am a seller. Is this the right page?",
      answer:
        "No. This page is strictly for operational partners. Enterprise sellers looking to dispose of or route goods must use the dedicated seller intake route.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full overflow-x-hidden bg-[#FFFFFF] px-6 py-12 text-[#1f2a37] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        {/* Header section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <span className="text-[12px] font-bold tracking-[0.15em] text-[#0B1F3F]">
              10
            </span>
            <div className="h-[1px] w-12 bg-[#E5E7EB]" />
            <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#926016]">
              FAQ
            </span>
          </div>

          <h2 className="mt-4 text-[38px] font-bold tracking-tight text-[#0B1F3F] sm:text-[44px]">
            Questions, answered plainly.
          </h2>
        </div>

        {/* FAQ 2-Column Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-6 md:gap-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="flex flex-col rounded-[16px] border border-[#E5E7EB] bg-white transition-all duration-200 hover:border-[#D1D5DB]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-[#0B1F3F]">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#926016]">
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.25]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.25]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F3F4F6] px-6 pb-5 pt-3 text-[14px] leading-relaxed text-[#4B5563]">
                    {faq.answer}
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
