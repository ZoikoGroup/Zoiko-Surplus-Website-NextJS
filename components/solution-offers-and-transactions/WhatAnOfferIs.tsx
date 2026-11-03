const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type OfferPrinciple = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const principles: OfferPrinciple[] = [
  {
    id: "proposal",
    title: "A proposal, not a purchase",
    description:
      "An offer is a governed proposal to transact on stated terms — it does not, by itself, complete a sale or transfer title.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009b72"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    id: "rules",
    title: "Bound by seller rules",
    description:
      "Offers can only be made within the commercial rules a seller has set for an audience and opportunity.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009b72"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
  {
    id: "documented",
    title: "Documented, every step",
    description:
      "Each step — offer, review, acceptance, settlement — is recorded, so outcomes are traceable and defensible.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#009b72"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function WhatAnOfferIs() {
  return (
    <section aria-labelledby="what-an-offer-is-heading" className={`${hanken} w-full bg-[#fbf6ef] md:bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHAT AN OFFER IS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="what-an-offer-is-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            An offer is a governed proposal.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Offers &amp; Transactions is the layer where entitled interest becomes a documented, seller-approved commitment — within clear rules.
          </p>

          {/* 3-Column Principle Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {principles.map((p) => (
              <div
                key={p.id}
                className="flex flex-col rounded-[20px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#d5f5eb]">
                  {p.icon}
                </div>

                <h3 className="mt-5 text-[15.5px] font-bold text-[#0f172a]">
                  {p.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.6] text-[#556987]">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            WHAT AN OFFER IS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          An offer is a governed proposal.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Offers &amp; Transactions is the layer where entitled interest becomes a documented, seller-approved commitment — within clear rules.
        </p>

        {/* 3 Single-Column Cards */}
        <div className="mt-6 flex flex-col gap-3">
          {principles.map((p) => (
            <div
              key={p.id}
              className="flex flex-col rounded-[16px] border border-[#e8edf2] bg-white p-4 shadow-sm"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#d5f5eb]">
                {p.icon}
              </div>

              <h3 className="mt-3 text-[14px] font-bold text-[#0f172a]">
                {p.title}
              </h3>

              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#556987]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
