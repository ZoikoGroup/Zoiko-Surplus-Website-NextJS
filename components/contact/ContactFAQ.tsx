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
    id: "sc-faq-1",
    question: "I want to sell surplus. Which path do I use?",
    answer:
      "Use the Enterprise Seller pathway via Request Enterprise Demo to discuss your inventory, qualification requirements, and seller-controlled disposition options.",
  },
  {
    id: "sc-faq-2",
    question: "Does sending an inquiry make me a verified buyer?",
    answer:
      "No. Sending an inquiry does not verify your organization or grant trading access. Verified buyer status requires a separate KYB application and review.",
  },
  {
    id: "sc-faq-3",
    question: "I am a logistics provider. Am I now an approved partner?",
    answer:
      "No. Expressing interest or submitting partner capabilities is not approval and does not establish an active logistics mandate or directory listing.",
  },
  {
    id: "sc-faq-4",
    question: "I already use the platform and need help.",
    answer:
      "Existing participant account, listing, or transaction cases are routed through the secure verification support pathway rather than public general forms.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: "sc-faq-5",
    question: "Does selecting my country mean the service is available there?",
    answer:
      "No. Selecting a country or region preference is purely informational for routing context; actual service eligibility comes strictly from approved policy configuration.",
  },
  {
    id: "sc-faq-6",
    question: "How quickly will you reply?",
    answer:
      "We do not promise a specific response time on public pages. Once an inquiry is successfully received, an opaque reference number is issued for follow-up.",
  },
  {
    id: "sc-faq-7",
    question: "Can I attach documents?",
    answer:
      "No. Public forms do not support file uploads or attachments, and you should never submit credentials, identity records, payment details, or private lot inventories here.",
  },
];

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderCard = (item: FAQItem) => {
    const isOpen = openId === item.id;
    return (
      <div
        key={item.id}
        className="overflow-hidden rounded-[14px] border border-slate-200/90 bg-white shadow-2xs transition-all hover:border-slate-300"
      >
        <button
          type="button"
          onClick={() => toggle(item.id)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between p-4.5 px-5 text-left transition-colors hover:bg-slate-50/50"
        >
          <span className="text-[14px] font-bold text-[#0c1e38]">
            {item.question}
          </span>
          <span
            className={`ml-4 flex size-6 shrink-0 items-center justify-center text-[19px] font-light text-[#926016] transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>

        {isOpen && (
          <div className="border-t border-slate-100 px-5 pt-3 pb-4.5 text-[13px] leading-relaxed text-[#556987]">
            {item.answer}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faq" aria-labelledby="contact-faq-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            id="contact-faq-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Questions, answered plainly.
          </h2>

          {/* 2-Column Grid */}
          <div className="mt-10 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
            <div className="flex flex-col gap-3.5">{leftFaqs.map(renderCard)}</div>
            <div className="flex flex-col gap-3.5">{rightFaqs.map(renderCard)}</div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            ROUTING QUESTIONS
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Where should
            <br />
            my message go?
          </h2>

          <div className="mt-5 flex flex-col gap-2.5">
            {[...leftFaqs, ...rightFaqs].map((item) => {
              const isOpen = openId === `m-${item.id}`;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-[14px] border border-slate-200/90 bg-white shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggle(`m-${item.id}`)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-3.5 px-4 text-left"
                  >
                    <span className="text-[13.5px] font-bold leading-snug text-[#0c1e38]">
                      {item.question}
                    </span>
                    <span
                      className={`ml-3 flex size-5 shrink-0 items-center justify-center text-[17px] font-bold text-[#926016] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pt-2.5 pb-3.5 text-[12px] leading-relaxed text-[#556987]">
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
