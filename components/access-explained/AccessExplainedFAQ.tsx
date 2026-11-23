"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const faqsCol1 = [
  {
    q: "Does being verified mean I can see all listings?",
    a: "No. Business verification confirms legal organization identity and representative authority, but private lots and inventory offerings remain invitation-only and subject to seller authorization.",
  },
  {
    q: "Does applying approve us?",
    a: "No. Submitting an application simply begins the formal review process. Each decision gate must be independently evaluated and satisfied.",
  },
  {
    q: "What does an invitation do?",
    a: "An invitation gives an eligible organization permission from a specific seller to view and participate in that seller's designated private opportunities.",
  },
  {
    q: "Can an invitation override market rules?",
    a: "No. Seller invitations operate strictly within applicable market policies, jurisdictional compliance requirements, and product safety restrictions.",
  },
  {
    q: "If I can see an opportunity, can I order?",
    a: "Viewing permission and action authorization are separate decisions. Final allocation, payment validation, and transaction terms must be authorized at action time.",
  },
  {
    q: "Does choosing my country grant access?",
    a: "No. Selecting a country or language selector only changes display locale and educational content, not participation rights or market approval.",
  },
];

const faqsCol2 = [
  {
    q: "Why is my category unavailable?",
    a: "Categories open based on market readiness, regulatory approvals, and pilot rollout schedules. Unlisted categories cannot be accessed prematurely.",
  },
  {
    q: "What overrides access?",
    a: "Product safety holds, open recalls, legal or sanctions restrictions, explicit seller blocks, and expired documentation strictly override access permissions.",
  },
  {
    q: "What does expired mean?",
    a: "Permissions are time-limited. When a verification cycle or review window concludes, fresh documentation or reverification is required to re-establish access.",
  },
  {
    q: "Can access be withdrawn?",
    a: "Yes. Sellers may modify or revoke audience invitations at any time, and platform governance may suspend access if compliance terms change.",
  },
  {
    q: "Is this page my account status?",
    a: "No. This is an educational reference page. Account status, active permissions, and case updates are only viewable within authenticated user portals.",
  },
  {
    q: "Where should I send documents?",
    a: "Confidential business documents must only be submitted through secure, authenticated intake workflows, never via email or public forms.",
  },
];

const allFaqs = [...faqsCol1, ...faqsCol2];

export default function AccessExplainedFAQ() {
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
    <section aria-label="Access Explained FAQ - Questions, answered plainly" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
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
            ACCESS FAQ
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Twelve direct answers.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Direct answers to market and evidence questions.
          </p>

          {/* FAQ Accordion List (12 items) */}
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
