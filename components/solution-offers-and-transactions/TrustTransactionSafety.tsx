"use client";

import { useState } from "react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type SafetyItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const items: SafetyItem[] = [
  {
    id: "verification",
    title: "Verification ≠ guarantee",
    description:
      "Vetting confirms legitimate business identity and credentials; it does not warrant specific inventory condition or commercial success.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "provenance",
    title: "Rights & provenance",
    description:
      "Sellers warrant that surplus inventory is free of encumbrance, counterfeit status, and unauthorized distribution covenants.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <circle cx="11" cy="14" r="3" />
        <line x1="13.5" y1="16.5" x2="16.5" y2="19.5" />
      </svg>
    ),
  },
  {
    id: "condition",
    title: "Condition",
    description:
      "Inventory is offered under explicit condition classes. Inspection and grading may be required before transfer depending on mandate.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    description:
      "Market transactions, pricing terms, lot identifiers and participant identities remain private and strictly role-scoped.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "no-guarantee",
    title: "No guaranteed outcome",
    description:
      "Neither making nor receiving an offer guarantees financial return, transaction finality or execution before full mutual clearance.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
];

export default function TrustTransactionSafety() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section aria-labelledby="trust-transaction-safety-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              TRUST &amp; TRANSACTION SAFETY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="trust-transaction-safety-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            What a transaction does and
            <br />
            doesn&apos;t guarantee.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Short, visible boundaries. None of these implies a verified result on this page.
          </p>

          {/* 5 Accordion Rows */}
          <div className="mt-8 flex flex-col gap-3">
            {items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-[16px] border border-[#eef2f6] bg-white transition-all hover:border-[#e2e8f0]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between p-4 sm:p-4.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#fbf2e3]">
                        {item.icon}
                      </div>
                      <span className="text-[14.5px] font-bold text-[#0f172a]">
                        {item.title}
                      </span>
                    </div>

                    <span className={`text-[#926016] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-0">
                      <p className="text-[13px] leading-relaxed text-[#556987]">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Link at bottom */}
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#009b72] transition-colors hover:text-[#00805e]"
            >
              Read the Trust &amp; Safety framework
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            TRUST &amp; TRANSACTION SAFETY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          What a transaction does — and doesn&apos;t — guarantee.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Short, visible boundaries. None of these implies a verified result on this page.
        </p>

        {/* 5 Accordion Cards */}
        <div className="mt-5 flex flex-col gap-2.5">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-[14px] border border-[#e8edf2] bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between p-3.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
                      {item.icon}
                    </div>
                    <span className="text-[13px] font-bold text-[#0f172a]">
                      {item.title}
                    </span>
                  </div>

                  <span className={`text-[#926016] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-3.5 pt-0">
                    <p className="text-[11.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link at bottom */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#009b72]"
          >
            Read the Trust &amp; Safety framework
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
