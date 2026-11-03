import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    id: "see-opportunity",
    title: "See entitled opportunity",
    description: "An entitled buyer views an opportunity inside a private audience.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    id: "assess-terms",
    title: "Assess terms",
    description: "Review the terms and category requirements that apply.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "offer-order",
    title: "Offer / order",
    description: "Where enabled, proceed through governed offers or orders.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    id: "confirmation",
    title: "Confirmation",
    description: "A confirmation and supporting record are captured for the transaction.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
];

export default function TradingStepsPreview() {
  return (
    <section id="trading-steps-preview" aria-labelledby="trading-steps-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              TRADING STEPS PREVIEW
            </span>
          </div>

          {/* Heading */}
          <h2
            id="trading-steps-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            From entitled opportunity to
            <br />
            confirmation.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            A high-level preview only — detailed negotiation and outcomes live in Offers &amp; Transactions, where the service is enabled.
          </p>

          {/* 4 Process Cards with Step Chevron Connectors */}
          <div className="mt-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative flex items-center">
                <div className="flex h-full w-full flex-col rounded-[18px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#0c1e38] text-white">
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold text-[#0f172a]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#556987]">
                    {step.description}
                  </p>
                </div>

                {/* Chevron divider between items on desktop */}
                {idx < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-3 z-10 hidden text-[#94a3b8] lg:block"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Link to Offers & Transactions */}
          <div className="mt-8">
            <Link
              href="/solution-offers-and-transactions"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#009b72] hover:underline"
            >
              <span>Explore Offers &amp; Transactions</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fcf8f2] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            TRADING STEPS PREVIEW
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          From entitled opportunity
          <br />
          to confirmation.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          A high-level preview only — detailed negotiation and outcomes live in Offers &amp; Transactions, where the service is enabled.
        </p>

        {/* 4 Cards Stacked */}
        <div className="mt-7 flex flex-col gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#0c1e38] text-white">
                {step.icon}
              </div>
              <h3 className="mt-3.5 text-[14.5px] font-bold text-[#0f172a]">
                {step.title}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Explore link */}
        <div className="mt-6">
          <Link
            href="/solution-offers-and-transactions"
            className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#009b72] hover:underline"
          >
            <span>Explore Offers &amp; Transactions</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
