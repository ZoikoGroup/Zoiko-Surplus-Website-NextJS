const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const statuses = [
  {
    title: "Informational",
    description:
      "Explains how surplus could work. No market or category is implied to be open.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Conditional",
    description:
      "A pathway may be considered, subject to category, country, safety and approval requirements.",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
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
    title: "Approved and active",
    description:
      "Only shown where verified policy data confirms it. No sector on this page is labeled this way.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function IndustryCoverageMeaning() {
  return (
    <section
      id="industry-coverage-meaning"
      aria-labelledby="industry-coverage-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHAT INDUSTRY COVERAGE MEANS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="industry-coverage-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Proposed capability is not the
            <br />
            same as an active market.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[580px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Every sector on this page carries a plain-language status. Where a status is unknown, read it as availability subject to review.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {statuses.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-6 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${item.iconBg}`}>
                  {item.icon}
                </div>

                <h3 className="mt-4 text-[15.5px] font-extrabold text-[#0c1e38]">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            WHAT INDUSTRY COVERAGE MEANS
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Proposed capability is not the same as an active market.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Every sector on this page carries a plain-language status. Where a status is unknown, read it as availability subject to review.
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            {statuses.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${item.iconBg}`}>
                  {item.icon}
                </div>

                <h3 className="mt-3.5 text-[15.5px] font-extrabold text-[#0c1e38]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {idx === 0
                    ? "Explains how a sector could work. No market or category is implied to be open."
                    : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
