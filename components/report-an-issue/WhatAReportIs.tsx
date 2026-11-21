const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const cards = [
  {
    title: "Not a finding",
    description: "Receipt does not mean upheld.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="m3 7 9-4 9 4" />
        <path d="M6 10v7a3 3 0 0 0 6 0V10" />
        <path d="M18 10v7a3 3 0 0 1-6 0V10" />
      </svg>
    ),
  },
  {
    title: "Not a recall",
    description: "No recall or hold is decided here.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Not an access change",
    description: "Access is unchanged by a report.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Not a promised outcome",
    description: "No response time is promised.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function WhatAReportIs() {
  return (
    <section aria-label="What a Report Is" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">01</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              WHAT A REPORT IS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            A report is an observation, not
            <br />
            a finding.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Reports are not findings, admissions, approvals or guarantees of resolution.
          </p>

          {/* 4 Cards Row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs min-h-[160px]"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f7f2] text-[#009b72]">
                    {card.icon}
                  </div>
                  <h3 className={`${sora} mt-5 text-[17px] font-bold tracking-tight text-[#0c1e38]`}>
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-10">
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              WHAT A REPORT IS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            A report is an observation, not a finding.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Reports are not findings, admissions, approvals or guarantees of resolution.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f7f2] text-[#009b72]">
                  {card.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15.5px] font-bold tracking-tight text-[#0c1e38]`}>
                  {card.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
