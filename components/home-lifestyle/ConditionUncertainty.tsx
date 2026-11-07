const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const conditions = [
  {
    grade: "A — As new",
    description: "Complete and unused; matches the declared description.",
    badgeType: "green",
  },
  {
    grade: "B — Good",
    description: "Light wear; complete, with condition noted.",
    badgeType: "green",
  },
  {
    grade: "C — Imperfect",
    description: "Noted faults or missing parts, described in evidence.",
    badgeType: "amber",
  },
  {
    grade: "Unknown / disputed",
    description: "Condition not confirmed or in dispute — marked explicitly, never assumed.",
    badgeType: "slate",
  },
];

export default function ConditionUncertainty() {
  return (
    <section
      id="condition-uncertainty"
      aria-labelledby="condition-uncertainty-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CONDITION &amp; UNCERTAINTY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="condition-uncertainty-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px] leading-[1.14]"
          >
            Condition — including when it&apos;s
            <br />
            unknown.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            A seller-declared grade scale that treats uncertainty honestly: unknown or disputed condition is labelled, never assumed good.
          </p>

          {/* 4 Condition Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((item) => (
              <div
                key={item.grade}
                className="flex flex-col justify-between rounded-[16px] border border-[#e5e7eb] bg-white p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-sm min-h-[160px]"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                        item.badgeType === "green"
                          ? "bg-[#d5f5eb] text-[#007f5d]"
                          : item.badgeType === "amber"
                          ? "bg-[#fbf2e3] text-[#926016]"
                          : "bg-[#f1f5f9] text-[#475569]"
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      SELLER-DECLARED
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-[15px] font-bold text-[#0c1e38]">
                    {item.grade}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
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
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CONDITION &amp; UNCERTAINTY
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            Condition — including when it&apos;s unknown.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            A seller-declared grade scale that treats uncertainty honestly: unknown or disputed condition is labelled, never assumed good.
          </p>

          {/* 4 Cards */}
          <div className="mt-5 flex flex-col gap-3">
            {conditions.map((item) => (
              <div key={item.grade} className="rounded-[14px] border border-[#e5e7eb] bg-white p-4 shadow-2xs">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9.5px] font-extrabold tracking-wider uppercase ${
                    item.badgeType === "green"
                      ? "bg-[#d5f5eb] text-[#007f5d]"
                      : item.badgeType === "amber"
                      ? "bg-[#fbf2e3] text-[#926016]"
                      : "bg-[#f1f5f9] text-[#475569]"
                  }`}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  SELLER-DECLARED
                </span>
                <h3 className="mt-2.5 text-[14px] font-bold text-[#0c1e38]">{item.grade}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
