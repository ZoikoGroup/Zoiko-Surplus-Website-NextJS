"use client";

import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const faqsCol1 = [
  {
    q: "What does business verification mean?",
    a: "It verifies the legal existence and official registration of an organization and the authorization of its designated representative.",
  },
  {
    q: "Does verification let us trade?",
    a: "No. Verification is one of five separate gates. Category eligibility, seller invitation, and transaction authorization must each be satisfied separately.",
  },
  {
    q: "What evidence will we need?",
    a: "Standard organizational registration documents, operating address evidence, and legal proof establishing the applicant's representative authority.",
  },
  {
    q: "How long does review take?",
    a: "No fixed review timeline is promised. Timelines depend on jurisdiction and the completeness of documents submitted.",
  },
];

const faqsCol2 = [
  {
    q: "Can I check my status here?",
    a: "No. Case status, requests and findings are accessible only through authenticated, secure applicant portals, never on public web pages.",
  },
  {
    q: "Is there a list of verified companies?",
    a: "No. We do not maintain or publish public directories or company search directories of verified participants.",
  },
  {
    q: "Can we send documents by email?",
    a: "No. Confidential evidence, identification records and business documents must only be submitted through secure authenticated workflows.",
  },
  {
    q: "Does verification confirm goods are safe?",
    a: "No. Verification confirms entity legitimacy, not the safety, compliance, physical condition or lawful provenance of surplus items.",
  },
];

const allFaqs = [...faqsCol1, ...faqsCol2];

export default function BusinessVerificationFAQ() {
  const [openCol1, setOpenCol1] = useState<number | null>(null);
  const [openCol2, setOpenCol2] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);

  const toggleCol1 = (idx: number) => {
    setOpenCol1(openCol1 === idx ? null : idx);
  };

  const toggleCol2 = (idx: number) => {
    setOpenCol2(openCol2 === idx ? null : idx);
  };

  const toggleMobile = (idx: number) => {
    setOpenMobile(openMobile === idx ? null : idx);
  };

  return (
    <section aria-label="Business Verification FAQ - Questions, answered plainly" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">10</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Questions, answered plainly.
          </h2>

          {/* FAQ 2-Column Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {/* Column 1 */}
            <div className="space-y-3.5">
              {faqsCol1.map((faq, idx) => {
                const isOpen = openCol1 === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-slate-300/80"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCol1(idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-[14.5px] font-semibold text-[#0c1e38] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <Plus
                        className={`size-4 shrink-0 text-[#926016] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-[14px] leading-relaxed text-[#556987]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-3.5">
              {faqsCol2.map((faq, idx) => {
                const isOpen = openCol2 === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all hover:border-slate-300/80"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCol2(idx)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-[14.5px] font-semibold text-[#0c1e38] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <Plus
                        className={`size-4 shrink-0 text-[#926016] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.2}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-[14px] leading-relaxed text-[#556987]">
                        {faq.a}
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
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Direct answers.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Planning, submission, evidence choices, and access after a review opens.
          </p>

          {/* FAQ Accordion List */}
          <div className="mt-6 space-y-3">
            {allFaqs.map((faq, idx) => {
              const isOpen = openMobile === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleMobile(idx)}
                    className="flex w-full items-center justify-between gap-3 p-4 text-left text-[14px] font-semibold text-[#0c1e38]"
                  >
                    <span>{faq.q}</span>
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-50 text-[#926016]">
                      <Plus
                        className={`size-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pt-3 pb-4 text-[13px] leading-relaxed text-[#556987]">
                      {faq.a}
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

