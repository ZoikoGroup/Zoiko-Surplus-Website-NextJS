const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type RiskItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

const riskItems: RiskItem[] = [
  {
    id: "issue",
    title: "Issue raised",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "hold",
    title: "Hold",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "investigation",
    title: "Investigation",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <circle cx="11" cy="14" r="3" />
        <line x1="13.5" y1="16.5" x2="16.5" y2="19.5" />
      </svg>
    ),
  },
  {
    id: "reroute",
    title: "Re-route / adjustment",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  {
    id: "resolution",
    title: "Resolution",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
];

export default function RiskExceptions() {
  return (
    <section aria-labelledby="risk-exceptions-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-10 pb-24">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              RISK & EXCEPTION PATHWAYS
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="risk-exceptions-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            When a route hits a problem.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Issues, holds and re-routes follow governed steps — no finality is stated before resolution.
          </p>

          {/* 5 Accordion Rows */}
          <div className="mt-8 flex flex-col gap-3">
            {riskItems.map((item) => (
              <div
                key={item.id}
                className="group flex cursor-pointer items-center justify-between rounded-[16px] border border-[#eef2f6] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-4.5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#fdf5eb]">
                    {item.icon}
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                    {item.title}
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
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            RISK & EXCEPTION PATHWAYS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          When a route hits a problem.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Issues, holds and re-routes follow governed steps — no finality is stated before resolution.
        </p>

        {/* 5 Stacked Accordion Cards */}
        <div className="mt-5 flex flex-col gap-2.5">
          {riskItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-[14px] border border-[#eef2f6] bg-white p-3.5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[#fbf2e3]">
                  {item.icon}
                </div>
                <h3 className="text-[13.5px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>
              </div>
              <div className="text-[#926016]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
