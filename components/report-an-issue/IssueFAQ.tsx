"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What can I report?",
    a: "Observations regarding product safety, recalls, counterfeit items, brand or access misuse, or suspicious activities related to Zoiko Surplus lots.",
  },
  {
    q: "Is this for emergencies?",
    a: "No. This channel is not monitored for immediate crisis response. For urgent safety, fire, medical, or law enforcement emergencies, contact your local emergency services immediately.",
  },
  {
    q: "Do I need to sign in?",
    a: "Not for initial observations. Anyone can submit an observation without signing in. However, account-specific requests, transaction records, or member details require an authenticated session.",
  },
  {
    q: "Can I submit anonymously?",
    a: "Yes. You may submit an observation without providing identifying details, though providing contact information allows our review team to follow up if clarification is needed.",
  },
  {
    q: "Can I upload evidence?",
    a: "No. Do not upload or attach documents, screenshots, credentials, or sensitive files through this initial intake form. Describe what you observed plainly in words; if additional evidence is required, an approved secure channel will be provided.",
  },
  {
    q: "Does receipt mean upheld?",
    a: "No. Receipt of a submission only confirms that the text has been logged. It does not imply that an issue has been validated, upheld, or that a recall has been issued.",
  },
  {
    q: "How long will review take?",
    a: "Reports are reviewed systematically in accordance with our trust and safety priorities. Because each situation requires independent factual verification, no fixed timeline is promised.",
  },
  {
    q: "Can I check my report online?",
    a: "No public lookup is offered to protect user privacy and confidentiality. If you provided contact details and follow-up is necessary, our team will reach out directly.",
  },
];

export default function IssueFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);
  const baseId = useId();
  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  return (
    <section id="faq" aria-labelledby={`${baseId}-heading`} className={`${hanken} w-full scroll-mt-28 bg-[#fbf9f6]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">09</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FAQ
            </span>
          </div>

          {/* Heading */}
          <h2
            id={`${baseId}-heading`}
            className={`${sora} mt-4 text-[34px] lg:text-[42px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Questions, answered plainly.
          </h2>

          {/* 2-column FAQ Grid */}
          <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">
            {columns.map((col, c) => (
              <div key={c} className="flex flex-col gap-4">
                {col.map((f, i) => {
                  const idx = c * half + i;
                  const open = openIdx === idx;
                  const panelId = `${baseId}-${idx}`;
                  return (
                    <div
                      key={f.q}
                      className="overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all duration-200 shadow-2xs hover:border-slate-300"
                    >
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpenIdx(open ? null : idx)}
                          aria-expanded={open}
                          aria-controls={panelId}
                          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50/50"
                        >
                          <span className="text-[15px] font-semibold text-[#0c1e38]">{f.q}</span>
                          <Plus
                            aria-hidden="true"
                            className={`size-4 shrink-0 text-[#926016] transition-transform duration-200 ${
                              open ? "rotate-45" : ""
                            }`}
                            strokeWidth={2}
                          />
                        </button>
                      </h3>
                      {open && (
                        <div id={panelId} className="border-t border-slate-100 px-6 pt-3 pb-5">
                          <p className="text-[13.5px] leading-relaxed text-[#556987]">{f.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-10">
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FAQ
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Direct answers.
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
            Recording, escalation and what happens next.
          </p>

          {/* 8 Stacked Accordions */}
          <div className="mt-6 flex flex-col gap-3">
            {faqs.map((f, i) => {
              const open = mobileOpenIdx === i;
              const panelId = `mobile-${baseId}-${i}`;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all duration-200 shadow-2xs"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setMobileOpenIdx(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-slate-50/50"
                    >
                      <span className="text-[13.5px] font-semibold text-[#0c1e38]">{f.q}</span>
                      <Plus
                        aria-hidden="true"
                        className={`size-3.5 shrink-0 text-[#926016] transition-transform duration-200 ${
                          open ? "rotate-45" : ""
                        }`}
                        strokeWidth={2}
                      />
                    </button>
                  </h3>
                  {open && (
                    <div id={panelId} className="border-t border-slate-100 px-4 pt-2.5 pb-4">
                      <p className="text-[12.5px] leading-relaxed text-[#556987]">{f.a}</p>
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
