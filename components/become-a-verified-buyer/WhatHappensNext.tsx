const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const outcomes = [
  {
    id: "under-review",
    title: "Under review",
    description: "We’re assessing your application; no decision has been made yet.",
    badgeBg: "bg-[#fbf2e3]",
    badgeColor: "#926016",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "info-requested",
    title: "More information requested",
    description: "We need additional details before the review can continue.",
    badgeBg: "bg-[#fbf2e3]",
    badgeColor: "#926016",
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
    id: "approved",
    title: "Approved to be considered",
    description: "Eligible to receive seller invitations where markets are active — not guaranteed access.",
    badgeBg: "bg-[#d5f5eb]",
    badgeColor: "#009b72",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    id: "declined",
    title: "Declined",
    description: "Not eligible at this time, with a reason provided where possible.",
    badgeBg: "bg-[#f1f5f9]",
    badgeColor: "#64748b",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
];

export default function WhatHappensNext() {
  return (
    <section id="what-happens-next" aria-labelledby="what-happens-next-heading" className={`${hanken} w-full bg-white order-10 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-16 md:px-8 md:pt-16 md:pb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              AFTER YOU APPLY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="what-happens-next-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            What happens next.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Each outcome carries an icon and a word, never colour alone. There is no stated turnaround, and &ldquo;approved&rdquo; means eligible to be considered — not guaranteed access or purchases.
          </p>

          {/* 2x2 Grid of Outcome Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {outcomes.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 rounded-[16px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
              >
                <div
                  style={{ color: item.badgeColor }}
                  className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] ${item.badgeBg}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
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
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            AFTER YOU APPLY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          What happens next.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Each outcome carries an icon and a word, never colour alone. There is no stated turnaround, and &ldquo;approved&rdquo; means eligible to be considered — not guaranteed access or purchases.
        </p>

        {/* 4 Stacked Outcome Cards */}
        <div className="mt-7 flex flex-col gap-3.5">
          {outcomes.map((item) => (
            <div
              key={`m-out-${item.id}`}
              className="flex items-start gap-3.5 rounded-[16px] border border-[#eef2f6] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
            >
              <div
                style={{ color: item.badgeColor }}
                className={`flex size-8 shrink-0 items-center justify-center rounded-[9px] ${item.badgeBg}`}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
