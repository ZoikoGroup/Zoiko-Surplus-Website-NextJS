const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type EvidenceCard = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const evidenceCards: EvidenceCard[] = [
  {
    id: "condition",
    title: "Condition",
    description: "The documented condition of the goods at handover.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "authorization",
    title: "Authorization",
    description: "The approval that permitted the route to proceed.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "transfer",
    title: "Transfer",
    description: "The record of movement and change of custody.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "acknowledgment",
    title: "Acknowledgment",
    description: "Confirmation of receipt by the next party.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "exception",
    title: "Exception",
    description: "Any hold, issue or deviation and how it was handled.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: "closure",
    title: "Closure",
    description: "The documented completion of the coordinated route.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function CustodyEvidence() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="custody-evidence-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-20 md:px-8 md:pt-10 md:pb-28">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CUSTODY & EVIDENCE
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="custody-evidence-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Six kinds of evidence a route
            <br className="hidden sm:inline" /> can produce.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Definitions only — chain-of-custody and outcome records, not real data. These exist to make a coordinated route traceable and defensible.
          </p>

          {/* 6 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {evidenceCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col rounded-[16px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_6px_20px_rgba(15,23,42,0.06)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0c1e38] text-white">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#0f172a]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="custody-evidence-mobile-heading" className={`block md:hidden ${hanken} w-full bg-white px-4 py-8`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>08</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            CUSTODY & EVIDENCE
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="custody-evidence-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          Six kinds of evidence a
          <br /> route can produce.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Definitions only — chain-of-custody and outcome records, not real data. These exist to make a coordinated route traceable and defensible.
        </p>

        {/* 6 Cards Vertical Stack */}
        <div className="mt-6 flex flex-col gap-3">
          {evidenceCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-[14px] border border-gray-100 bg-white p-4 shadow-xs"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#0c1e38] text-white">
                {card.icon}
              </div>
              <h3 className="mt-3 text-[14px] font-bold text-[#0c2140]">
                {card.title}
              </h3>
              <p className="mt-1 text-[12px] leading-[1.5] text-[#556987]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
