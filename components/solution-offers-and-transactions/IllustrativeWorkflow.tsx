const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type WorkflowStep = {
  num: number;
  stageTag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: WorkflowStep[] = [
  {
    num: 1,
    stageTag: "Discover",
    title: "Entitled opportunity",
    description: "A verified buyer views an opportunity they're entitled to.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    num: 2,
    stageTag: "Offer",
    title: "Within rules",
    description: "The buyer makes a governed offer within the seller's rules.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    num: 3,
    stageTag: "Accept",
    title: "Mutual commitment",
    description: "The seller reviews and, where authorized, accepts explicitly.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    num: 4,
    stageTag: "Document",
    title: "Evidence",
    description: "Settlement and fulfillment proceed via providers; the outcome is recorded.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function IllustrativeWorkflow() {
  return (
    <section aria-labelledby="illustrative-workflow-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              ILLUSTRATIVE WORKFLOW
            </span>
          </div>

          {/* Heading */}
          <h2
            id="illustrative-workflow-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Discover → offer → accept →
            <br />
            document.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            An explicitly illustrative, non-operational flow. It contains no live goods, prices, parties or outcomes.
          </p>

          {/* 4 Connected Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {steps.map((st, idx) => (
              <div key={st.num} className="relative flex items-center">
                <div className="flex h-full w-full flex-col justify-between rounded-[20px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0]">
                  <div>
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#0c1e38] text-white">
                      {st.icon}
                    </div>

                    <h3 className="mt-5 text-[15px] font-bold text-[#0f172a]">
                      {st.title}
                    </h3>

                    <p className="mt-2 text-[12.5px] leading-[1.6] text-[#556987]">
                      {st.description}
                    </p>
                  </div>
                </div>

                {/* Connecting right arrow on large screens */}
                {idx < steps.length - 1 && (
                  <div aria-hidden="true" className="hidden lg:absolute lg:-right-2.5 lg:z-10 lg:flex lg:text-gray-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Disclaimer Bar */}
          <div className="mt-6 flex items-start gap-2.5 rounded-[16px] border border-[#f5ebd7] bg-[#fdfaf6] px-5 py-3.5 sm:items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <p className="text-[12px] leading-relaxed text-[#7c6950]">
              Illustrative only — not a live transaction, and not a promise of acceptance, settlement or delivery.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            ILLUSTRATIVE WORKFLOW
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Discover → offer → accept → document.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          An explicitly illustrative, non-operational flow. It contains no live goods, prices, parties or outcomes.
        </p>

        {/* 4 Single-Column Cards with category tags */}
        <div className="mt-6 flex flex-col gap-3">
          {steps.map((st) => (
            <div
              key={st.num}
              className="flex flex-col rounded-[16px] border border-[#e8edf2] bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#0c1e38] text-white">
                  {st.icon}
                </div>
                <span className="text-[10px] font-bold tracking-[0.06em] text-[#8c9ba5] uppercase">
                  {st.stageTag}
                </span>
              </div>

              <h3 className="mt-2.5 text-[14px] font-bold text-[#0f172a]">
                {st.title}
              </h3>

              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#556987]">
                {st.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Callout Bar */}
        <div className="mt-4 flex items-start gap-2 rounded-[14px] border border-[#f5ebd7] bg-[#fdfaf6] p-3 text-[11px] leading-relaxed text-[#7c6950]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#926016"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p>
            Illustrative only — not a live transaction, and not a promise of acceptance, settlement or delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
