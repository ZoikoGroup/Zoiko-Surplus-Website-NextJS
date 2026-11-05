const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    step: "01",
    title: "Qualify",
    description: "Document the lot against its subcategory rules.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Govern",
    description: "Apply safety, recall and rights controls.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Match",
    description: "Connect with verified, seller-approved buyers.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Record",
    description: "Capture the decision and outcome as evidence.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        <polyline points="9 13 12 16 16 11" />
      </svg>
    ),
  },
];

export default function ControlledMatching() {
  return (
    <section
      id="controlled-matching"
      aria-labelledby="controlled-matching-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CONTROLLED MATCHING
            </span>
          </div>

          {/* Heading */}
          <h2
            id="controlled-matching-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            How controlled matching works.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Qualified lots meet verified demand only after safety and rights controls — nothing is listed publicly.
          </p>

          {/* 4 Steps Flow with Chevrons */}
          <div className="mt-10 flex items-center gap-3 lg:gap-4">
            {steps.map((item, idx) => (
              <div key={item.title} className="flex flex-1 items-center gap-3 lg:gap-4">
                <div className="flex flex-1 flex-col justify-between rounded-[16px] border border-[#e5e7eb] bg-white p-5 shadow-xs transition-all hover:border-slate-300 min-h-[140px]">
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

                {idx < steps.length - 1 && (
                  <span className="shrink-0 text-slate-300 text-[18px] font-light">
                    &gt;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-white">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>08</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CONTROLLED MATCHING
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            How controlled matching works.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Qualified lots meet verified demand only after safety and rights controls — nothing is listed publicly.
          </p>

          {/* 4 Steps Stacked */}
          <div className="mt-5 flex flex-col gap-3">
            {steps.map((item) => (
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
