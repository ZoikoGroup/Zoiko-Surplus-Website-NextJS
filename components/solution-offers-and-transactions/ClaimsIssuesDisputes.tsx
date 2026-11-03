"use client";

import { useState } from "react";
import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type DisputeStep = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const disputeSteps: DisputeStep[] = [
  {
    id: "issue",
    title: "Issue raised",
    description: "An issue or claim is formally logged within the governed workflow by either party.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "hold",
    title: "Hold",
    description: "An administrative freeze halts movement and settlement pending resolution.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "investigation",
    title: "Investigation",
    description: "Supporting documentation, logs and communications are examined under defined rules.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <circle cx="11" cy="14" r="3" />
        <line x1="13.5" y1="16.5" x2="16.5" y2="19.5" />
      </svg>
    ),
  },
  {
    id: "dispute",
    title: "Dispute",
    description: "Formal escalation path when mutual agreement is not immediately reached.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: "adjustment",
    title: "Adjustment / reversal",
    description: "Remedial settlement adjustment, partial credit or transaction reversal is executed.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  {
    id: "resolution",
    title: "Resolution",
    description: "Final outcome is documented, verified by parties, and closed in the audit log.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function ClaimsIssuesDisputes() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section aria-labelledby="claims-issues-disputes-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CLAIMS, ISSUES &amp; DISPUTES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="claims-issues-disputes-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            When something goes wrong,
            <br />
            there&apos;s a defined process.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Issues, holds, disputes and reversals are handled through governed steps — no finality is stated before resolution.
          </p>

          {/* Wide Banner Image */}
          <div className="relative mt-9 h-[260px] w-full overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.06)] sm:h-[340px] lg:h-[400px]">
            <Image
              src="/images/solution-offers-and-transactions/oat6.png"
              alt="Legal dispute gavel and contract review on conference table"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* 6 Accordion Rows */}
          <div className="mt-8 flex flex-col gap-3">
            {disputeSteps.map((step) => {
              const isOpen = openId === step.id;
              return (
                <div
                  key={step.id}
                  className="overflow-hidden rounded-[16px] border border-[#eef2f6] bg-white transition-all hover:border-[#e2e8f0]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(step.id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between p-4 sm:p-4.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#fbf2e3]">
                        {step.icon}
                      </div>
                      <span className="text-[14.5px] font-bold text-[#0f172a]">
                        {step.title}
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
                        {step.description}
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
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            CLAIMS, ISSUES &amp; DISPUTES
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          When something goes wrong, there&apos;s a defined process.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Issues, holds, disputes and reversals are handled through governed steps — no finality is stated before resolution.
        </p>

        {/* 6 Accordion Cards */}
        <div className="mt-5 flex flex-col gap-2.5">
          {disputeSteps.map((step) => {
            const isOpen = openId === step.id;
            return (
              <div
                key={step.id}
                className="overflow-hidden rounded-[14px] border border-[#e8edf2] bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(step.id)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between p-3.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
                      {step.icon}
                    </div>
                    <span className="text-[13.5px] font-bold text-[#0f172a]">
                      {step.title}
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
                      {step.description}
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
