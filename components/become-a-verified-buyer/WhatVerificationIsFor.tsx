const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const cards = [
  {
    id: "reach-supply",
    title: "Reach seller-approved supply",
    description: "See opportunities sellers approve for verified audiences — not a public marketplace.",
    note: "Potential participation, not a guarantee of goods, price or purchase.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "governed-confidential",
    title: "Governed, confidential",
    description: "Your interest and identity are protected; nothing you do here is shown publicly.",
    note: "Confidentiality by entitlement, not obscurity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "one-profile",
    title: "One profile, many markets",
    description: "Apply once and be considered across categories and markets where intake is open.",
    note: "Each market and category remains separately gated.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
];

export default function WhatVerificationIsFor() {
  return (
    <section id="what-verification-is-for" aria-labelledby="why-become-verified-heading" className={`${hanken} w-full order-3 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHY BECOME VERIFIED
            </span>
          </div>

          {/* Heading */}
          <h2
            id="why-become-verified-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            What verification is for.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Verification is how qualified businesses are considered for seller-approved surplus opportunities — within clear limits.
          </p>

          {/* 3-Column Feature Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {cards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-[20px] border border-[#eef2f6] bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#d5f5eb]">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-[16px] font-bold text-[#0f172a]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-[1.65] text-[#556987]">
                    {item.description}
                  </p>
                </div>

                {/* Sub-note */}
                <div className="mt-6 flex items-start gap-2 border-t border-[#f1f5f9] pt-4">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#926016"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-[#926016]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span className="text-[11.5px] leading-relaxed text-[#64748b]">
                    {item.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            WHY BECOME VERIFIED
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          What verification is for.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Verification is how qualified businesses are considered for seller-approved surplus opportunities — within clear limits.
        </p>

        {/* 3 Stacked Cards */}
        <div className="mt-7 flex flex-col gap-4">
          {cards.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d5f5eb]">
                {item.icon}
              </div>

              <h3 className="mt-3.5 text-[15px] font-bold text-[#0f172a]">
                {item.title}
              </h3>

              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                {item.description}
              </p>

              {/* Note */}
              <div className="mt-4 flex items-start gap-2 border-t border-[#f1f5f9] pt-3">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#926016"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-[#926016]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span className="text-[11px] leading-relaxed text-[#64748b]">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
