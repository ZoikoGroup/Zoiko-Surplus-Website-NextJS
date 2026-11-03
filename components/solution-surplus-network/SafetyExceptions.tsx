const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type SafetyRule = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

const safetyRules: SafetyRule[] = [
  {
    id: "recall",
    title: "Recall & restricted goods",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="12" y1="9" x2="12.01" y2="9" />
      </svg>
    ),
  },
  {
    id: "food",
    title: "Food & perishables",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 0 0-5 5v1a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
        <path d="M4 14a8 8 0 0 0 16 0" />
        <line x1="12" y1="18" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: "hazard",
    title: "Hazardous materials",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    id: "jurisdiction",
    title: "Jurisdiction limits",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function SafetyExceptions() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="safety-exceptions-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-16 md:px-8 md:pt-10 md:pb-24">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CATEGORY SAFETY & EXCEPTIONS
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="safety-exceptions-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Safety and category rules
            <br className="hidden sm:inline" /> come first.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Some goods and routes are excluded or gated. Coordination never overrides a safety, recall or regulatory obligation.
          </p>

          {/* Gated Accordion Rows */}
          <div className="mt-8 flex flex-col gap-3">
            {safetyRules.map((rule) => (
              <div
                key={rule.id}
                className="group flex cursor-pointer items-center justify-between rounded-[16px] border border-[#eef2f6] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-4.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#fdf5eb]">
                    {rule.icon}
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                    {rule.title}
                  </h3>
                </div>
                <div className="text-gray-400 transition-colors group-hover:text-[#926016]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            ))}

            {/* Mandatory stop & escalation callout */}
            <div className="mt-2 flex items-start gap-3.5 rounded-[16px] border border-[#d4a359] bg-[#fffdfa] p-4.5 shadow-xs sm:p-5">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#fdf5eb]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div>
                <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                  Mandatory stop & escalation
                </h3>
                <p className="mt-1 text-[12.5px] leading-[1.55] text-[#556987]">
                  If a recall, safety, counterfeit, restricted-goods or title-defect signal is present, the route is stopped and escalated to a named accountable role before any movement. Food is gated independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="safety-exceptions-mobile-heading" className={`block md:hidden ${hanken} w-full bg-[#f8fafc]/50 px-4 py-8`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>07</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            CATEGORY SAFETY & EXCEPTIONS
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="safety-exceptions-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          Safety and category rules
          <br /> come first.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Some goods and routes are excluded or gated. Coordination never overrides a safety, recall or regulatory obligation.
        </p>

        {/* 4 Accordion Rows */}
        <div className="mt-6 flex flex-col gap-2.5">
          {safetyRules.map((rule) => (
            <div
              key={rule.id}
              className="flex items-center justify-between rounded-[14px] border border-gray-100 bg-white p-3.5 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#fdf5eb]">
                  {rule.icon}
                </div>
                <h3 className="text-[13.5px] font-bold text-[#0c2140]">
                  {rule.title}
                </h3>
              </div>
              <div className="text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          ))}

          {/* Mandatory stop & escalation callout */}
          <div className="mt-2 flex items-start gap-3 rounded-[14px] border border-[#d4a359] bg-[#fffdfa] p-4 shadow-xs">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#fdf5eb]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-[13.5px] font-bold text-[#0c2140]">
                Mandatory stop & escalation
              </h3>
              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#556987]">
                If a recall, safety, counterfeit, restricted-goods or title-defect signal is present, the route is stopped and escalated to a named accountable role before any movement. Food is gated independently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
