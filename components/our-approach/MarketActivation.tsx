const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const marketCards = [
  {
    badge: "Proposed first pilot",
    badgeStyle: "bg-[#e6f7f2] text-[#009b72]",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    title: "Apparel & Footwear, UK",
    description: "UK-focused B2B apparel and footwear resale marketplace.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    badge: "Not yet activated",
    badgeStyle: "bg-slate-100 text-[#64748b]",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    title: "Other markets and categories",
    description: "Each requires separate approval before it is offered.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    badge: "Planned, if approved",
    badgeStyle: "bg-[#fbf4e6] text-[#926016]",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    title: "Further pathways",
    description: "Planned pathways are shown for transparency and carry no availability promise.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function MarketActivation() {
  return (
    <section
      id="market-activation"
      aria-labelledby="market-activation-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              MARKET AND CATEGORY ACTIVATION
            </span>
          </div>

          {/* Heading */}
          <h2
            id="market-activation-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Global by architecture. Regional by
            <br />
            configuration.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[660px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Coverage reflects what is designed, planned and proposed. A category shown here is not automatically live in your market. Market-by-market by activation.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {marketCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-6 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${card.iconBg}`}>
                  {card.icon}
                </div>

                <div className="mt-4">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-3 text-[15.5px] font-extrabold text-[#0c1e38]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Footnote */}
          <p className="mt-5 text-[11.5px] leading-relaxed text-[#64748b]">
            Status lines are only on this page and come from the published market register. A visitor&apos;s location or language never changes it. Confirm against the register before publication.
          </p>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            MARKET AND CATEGORY ACTIVATION
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Global by architecture. Regional by configuration.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Coverage reflects what is designed, planned and proposed. A category shown here is not automatically live in your market. Market-by-market by activation.
          </p>

          {/* 3 Stacked Market Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {marketCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${card.iconBg}`}>
                  {card.icon}
                </div>

                <div className="mt-3.5">
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold ${card.badgeStyle}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-2.5 text-[15.5px] font-extrabold text-[#0c1e38]">
                  {card.title}
                </h3>

                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[11px] leading-relaxed text-[#64748b]">
            Status lines are only on this page and come from the published market register. A visitor&apos;s location or language never changes it. Confirm against the register before publication.
          </p>
        </div>
      </div>
    </section>
  );
}
