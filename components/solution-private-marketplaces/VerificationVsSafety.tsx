"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type AccordionItem = {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
};

const items: AccordionItem[] = [
  {
    id: "verification",
    title: "Verification",
    content:
      "KYB confirms identity, company registration and eligibility criteria. It validates organizational status but does not inspect or certify the underlying inventory.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "provenance",
    title: "Provenance",
    content:
      "Chain of title, distribution rights and brand authorization remain seller-represented. Platform access does not constitute an independent provenance audit.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
  },
  {
    id: "condition",
    title: "Condition",
    content:
      "Grading, specifications, packaging integrity and shelf-life are declared by the listing seller. Buyers may contract independent third-party inspection where permitted.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "lawful-supply",
    title: "Lawful supply",
    content:
      "Sellers warrant that surplus goods comply with relevant safety, labelling, copyright and environmental regulations across applicable dispatch and destination jurisdictions.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    id: "disputes",
    title: "Disputes",
    content:
      "Disputes regarding specifications, payment discrepancies or handover delays are handled under contracted terms through governed escalation channels.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function VerificationVsSafety() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="verification-vs-safety" aria-labelledby="verification-safety-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              VERIFICATION VS. TRANSACTION SAFETY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="verification-safety-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Verification is a check — not a
            <br />
            guarantee.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Being verified means an organization passed KYB. It does not vouch for the goods, their safety, title or legality — those are separate things.
          </p>

          {/* Accordion List */}
          <div className="mt-10 flex flex-col gap-3">
            {items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-[16px] border border-[#eef2f6] bg-white transition-all shadow-[0_1px_6px_rgba(15,23,42,0.02)] hover:border-[#e2e8f0]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between px-6 py-4.5 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#fbf2e3]">
                        {item.icon}
                      </div>
                      <span className="text-[15px] font-bold text-[#0f172a]">
                        {item.title}
                      </span>
                    </div>

                    <span
                      className={`text-[20px] font-light text-[#926016] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#f1f5f9] px-6 pt-3 pb-5">
                      <p className="max-w-[760px] text-[13.5px] leading-relaxed text-[#556987]">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fcf8f2] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            VERIFICATION VS. TRANSACTION SAFETY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Verification is a check —
          <br />
          not a guarantee.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Being verified means an organization passed KYB. It does not vouch for the goods, their safety, title or legality — those are separate things.
        </p>

        {/* Accordion List */}
        <div className="mt-7 flex flex-col gap-3">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-[14px] border border-[#eef2f6] bg-white transition-all shadow-[0_1px_6px_rgba(15,23,42,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-4 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#fbf2e3]">
                      {item.icon}
                    </div>
                    <span className="text-[14px] font-bold text-[#0f172a]">
                      {item.title}
                    </span>
                  </div>

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
                    <p className="text-[12.5px] leading-relaxed text-[#556987]">
                      {item.content}
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
