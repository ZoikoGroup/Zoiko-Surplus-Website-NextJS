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
    id: "submitting-approve",
    question: "Does submitting the form approve my business?",
    answer:
      "No. Submitting an application initiates our review process. Applications are assessed for corporate legitimacy, authority, and category readiness before being qualified.",
  },
  {
    id: "verified-vs-access",
    question: "Is being “verified” the same as access to a market?",
    answer:
      "No. Verification confirms your identity and eligibility (KYB). Individual sellers maintain autonomous control over who they invite into their private marketplaces.",
  },
  {
    id: "review-time",
    question: "How long does review take?",
    answer:
      "There is no fixed timeline or guaranteed turnaround. Review duration depends on your jurisdiction, documentation clarity, and active market intake cycles.",
  },
  {
    id: "who-apply",
    question: "Who can apply?",
    answer:
      "Registered commercial entities, wholesalers, retailers, and authorized institutional procurement officers. Consumers and unregistered individuals cannot participate.",
  },
  {
    id: "upload-documents",
    question: "Do I need to upload documents?",
    answer:
      "Entity details and contact information are required upfront. KYB documentation (incorporation certificate, VAT/tax IDs, trading references) is optional initially but may be requested during review.",
  },
  {
    id: "open-everywhere",
    question: "Are applications open everywhere?",
    answer:
      "Intake opens progressively by geographic territory and product category. Check the Market Preflight tool above to see currently active intake corridors.",
  },
  {
    id: "food-grocery",
    question: "How is Food & Grocery handled?",
    answer:
      "Food and consumable categories are strictly segregated and require specialized certifications, cold-chain verification, shelf-life documentation, and statutory compliance clearance.",
  },
  {
    id: "info-handling",
    question: "What happens to my information?",
    answer:
      "Your application is handled strictly on a need-to-know basis. It is evaluated solely by verified compliance reviewers and is never published or indexed in public searches.",
  },
  {
    id: "prices-inventory",
    question: "Will I see prices or inventory after applying?",
    answer:
      "No. Opportunities, manifests, prices, and quantities remain invisible until a seller explicitly approves and entitles your organization to a private market audience.",
  },
  {
    id: "not-open",
    question: "What if applications aren’t open for me?",
    answer:
      "You can submit an expression of interest through our informational register. When your target regional or category corridor activates, you will be notified.",
  },
];

export default function BuyerFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5, 10);

  return (
    <section id="faq" aria-labelledby="faq-heading" className={`${hanken} w-full bg-white order-16 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>15</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            id="faq-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
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
        <div className="flex items-center justify-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            QUESTIONS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-center text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Applying, verification &amp; access.
        </h2>

        {/* 10 Accordion Items Stacked */}
        <div className="mt-7 flex flex-col gap-2.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={`m-faq-${faq.id}`}
                className="overflow-hidden rounded-[14px] border border-[#eef2f6] bg-white shadow-[0_1px_6px_rgba(15,23,42,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left focus:outline-none"
                >
                  <span className="text-[13px] font-bold text-[#0f172a]">
                    {faq.question}
                  </span>
                  <span
                    className={`text-[18px] font-light text-[#926016] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#f1f5f9] px-4 pt-2 pb-3.5">
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
