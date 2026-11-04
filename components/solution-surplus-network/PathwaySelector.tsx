const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type RouteCard = {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeIconType: "shield" | "circle";
  icon: (color: string) => React.ReactNode;
};

const routeCards: RouteCard[] = [
  {
    id: "resale",
    title: "Resale route",
    description: "Direct to a seller-approved resale channel, where permitted and active.",
    badge: "POLICY GATED",
    badgeIconType: "shield",
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  {
    id: "donation",
    title: "Donation route",
    description: "Transfer to an eligible recipient via an authorized partner.",
    badge: "WHERE ENABLED",
    badgeIconType: "circle",
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: "recovery",
    title: "Recovery / recycling",
    description: "Material recovery or recycling through a contracted provider.",
    badge: "WHERE ENABLED",
    badgeIconType: "circle",
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.77l3.9-6.84a1.83 1.83 0 0 1 1.57-.91H12" />
        <path d="M11 5l3-3 3 3" />
        <path d="M14 2v6" />
        <path d="M17 19h2.185a1.83 1.83 0 0 0 1.57-2.77l-3.9-6.84a1.83 1.83 0 0 0-1.57-.91H13" />
      </svg>
    ),
  },
  {
    id: "logistics",
    title: "Logistics-only",
    description: "Coordinate collection and transport without a change of ownership.",
    badge: "PARTNER-EXECUTED",
    badgeIconType: "circle",
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "inspection",
    title: "Inspection-first",
    description: "Route through independent inspection before a decision.",
    badge: "CONDITIONAL",
    badgeIconType: "circle",
    icon: (c) => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function PathwaySelector() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="pathway-selector-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-14 md:pb-28">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PATHWAY SELECTOR
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="pathway-selector-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Route classes a seller may consider.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Explanatory route choices only — no real-time assignment, and nothing here confirms an available partner, price or outcome.
          </p>

          {/* 5 Route Cards in a 3-column grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routeCards.map((card) => (
              <div
                key={card.id}
                className="flex min-h-[190px] flex-col justify-between rounded-[18px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div>
                  {/* Circular Mint Icon */}
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#e6f7f2]">
                    {card.icon("#009b72")}
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-4 text-[16px] font-bold text-[#0f172a]">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#556987]">
                    {card.description}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="mt-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f3e3ca] bg-[#fdf9f3] px-2.5 py-1 text-[10.5px] font-bold tracking-[0.06em] text-[#926016] uppercase">
                    {card.badgeIconType === "shield" ? (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ) : (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    )}
                    {card.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="pathway-selector-mobile-heading" className={`block md:hidden ${hanken} w-full bg-[#fbf7f2] px-4 py-10`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>05</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            PATHWAY SELECTOR
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="pathway-selector-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          Route classes a seller
          <br /> may consider.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Explanatory route choices only — no real-time assignment, and nothing here confirms an available partner, price or outcome.
        </p>

        {/* 5 Vertical Cards */}
        <div className="mt-6 flex flex-col gap-3.5">
          {routeCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-[16px] border border-gray-100 bg-white p-5 shadow-xs"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#e6f7f2]">
                {card.icon("#009b72")}
              </div>

              <h3 className="mt-3.5 text-[15px] font-bold text-[#0c2140]">
                {card.title}
              </h3>

              <p className="mt-1 text-[12.5px] leading-[1.5] text-[#556987]">
                {card.description}
              </p>

              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f3e3ca] bg-[#fdf9f3] px-2.5 py-0.5 text-[10px] font-bold tracking-[0.06em] text-[#926016] uppercase">
                  {card.badgeIconType === "shield" ? (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  )}
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
