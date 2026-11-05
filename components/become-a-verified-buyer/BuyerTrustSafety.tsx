"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    id: "verification-guarantee",
    title: "Verification ≠ guarantee",
    content:
      "KYB confirms business entity identity and corporate registration. It does not inspect physical goods, warrant condition, title, authenticity or guarantee delivery.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "seller-authorization",
    title: "Seller authorization is separate",
    content:
      "Passing verification makes your organization eligible to be considered, but each individual seller independently decides which private audiences they authorize you to access.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
      </svg>
    ),
  },
  {
    id: "condition-declared",
    title: "Condition is seller-declared",
    content:
      "Specifications, grades, manifest listings and packaging condition are declared by the listing seller under their commercial terms.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: "confidentiality-conduct",
    title: "Confidentiality & conduct",
    content:
      "Participant identities, prices, and quantities remain strictly private under need-to-know access rules and non-disclosure protections.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "issues-disputes",
    title: "Issues & disputes",
    content:
      "Disputes regarding fulfillment, payment or specifications are resolved through contractual remediation and established dispute resolution protocols.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function BuyerTrustSafety() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="trust-and-safety" aria-labelledby="trust-safety-heading" className={`${hanken} w-full bg-[#fbf9f5] md:bg-[#fbf9f5] order-13 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              TRUST &amp; SAFETY FOR BUYERS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="trust-safety-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            What being verified does and
            <br />
            doesn&apos;t mean.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Short, visible boundaries. None of these implies a guaranteed result on this page.
          </p>

          {/* 2-Column Section */}
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: 5 Accordion Items */}
            <div className="flex flex-col gap-3 lg:col-span-6">
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
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#fbf2e3]">
                          {item.icon}
                        </div>
                        <span className="text-[14.5px] font-bold text-[#0f172a]">
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
                      <div className="border-t border-[#f1f5f9] px-6 pt-3 pb-5">
                        <p className="max-w-[700px] text-[13px] leading-relaxed text-[#556987]">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Read Framework Link */}
              <div className="mt-4">
                <Link
                  href="/solution-surplus-network"
                  className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#009b72] hover:underline"
                >
                  <span>Read the Trust &amp; Safety framework</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Visual Photo vb7.png */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/become-a-verified-buyer/vb7.png"
                  alt="Enterprise security infrastructure and confidential access boundaries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            TRUST &amp; SAFETY FOR BUYERS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          What being verified does — and doesn&apos;t — mean.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Short, visible boundaries. None of these implies a guaranteed result on this page.
        </p>

        {/* 5 Accordion Items */}
        <div className="mt-7 flex flex-col gap-3">
          {items.map((it) => {
            const isOpen = openId === it.id;
            return (
              <div
                key={`m-ts-${it.id}`}
                className="overflow-hidden rounded-[16px] border border-[#eef2f6] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(it.id)}
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-[#fbf2e3]">
                      {it.icon}
                    </div>
                    <span className="text-[14px] font-bold text-[#0f172a]">
                      {it.title}
                    </span>
                  </div>
                  <span className="text-[18px] font-medium text-[#926016]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#f1f5f9] px-4 pt-3 pb-4 text-[12.5px] leading-relaxed text-[#556987]">
                    {it.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-6">
          <Link
            href="/governance-and-terms"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#009b72] hover:underline"
          >
            <span>Read the Trust &amp; Safety framework</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
