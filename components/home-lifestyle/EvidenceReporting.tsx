const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const evidenceCategories = [
  {
    title: "Condition record",
    description: "Declared grade, defects and completeness.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: "Rights & provenance",
    description: "Source, ownership and the right to dispose.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 14 14" />
      </svg>
    ),
  },
  {
    title: "Safety status",
    description: "Recall, labelling and restriction checks.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Outcome & exceptions",
    description: "The route taken and any holds or disputes.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function EvidenceReporting() {
  return (
    <section
      id="evidence-reporting"
      aria-labelledby="evidence-reporting-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-24 md:px-8 md:pt-14 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              EVIDENCE &amp; REPORTING
            </span>
          </div>

          {/* Heading */}
          <h2
            id="evidence-reporting-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            What a qualified lot documents.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            The record categories a governed home&ndash;goods workflow can retain definitions, not live data.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {evidenceCategories.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-[16px] border border-[#e5e7eb] bg-white p-5 shadow-xs transition-all hover:border-slate-300 min-h-[140px]"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#0c1e38] text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#0c1e38]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-[#f8fafc]">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>11</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              EVIDENCE &amp; REPORTING
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            What a qualified lot documents.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            The record categories a governed home-goods workflow can retain — definitions, not live data.
          </p>

          {/* 4 Cards Stacked */}
          <div className="mt-5 flex flex-col gap-3">
            {evidenceCategories.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start rounded-[14px] border border-[#e5e7eb] bg-white p-4 shadow-2xs"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#0c1e38] text-white mb-2.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold text-[#0c1e38]">{item.title}</h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
