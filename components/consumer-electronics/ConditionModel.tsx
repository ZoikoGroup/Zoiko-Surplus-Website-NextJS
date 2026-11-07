const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const tiers = [
  {
    grade: "A — As-new",
    percent: 88,
    description: "Fully functional, complete, minimal wear; matches declared spec.",
    badge: "SELLER-DECLARED",
    badgeType: "seller",
  },
  {
    grade: "B — Good / working",
    percent: 68,
    description: "Functional with cosmetic wear; accessories noted.",
    badge: "SELLER-DECLARED",
    badgeType: "seller",
  },
  {
    grade: "C — Faulty / for repair",
    percent: 48,
    description: "Known faults; functional status described in evidence.",
    badge: "SELLER-DECLARED",
    badgeType: "seller",
  },
  {
    grade: "Untested",
    percent: 32,
    description: "Functional status not yet assessed — marked explicitly, never assumed.",
    badge: "SELLER-DECLARED",
    badgeType: "seller",
  },
  {
    grade: "Not for resale",
    percent: 14,
    description: "Data-bearing, recalled or hazardous units routed to specialist handling only.",
    badge: "POLICY",
    badgeType: "policy",
  },
];

export default function ConditionModel() {
  return (
    <section id="condition-model" aria-labelledby="condition-model-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CONDITION MODEL
            </span>
          </div>

          {/* Heading */}
          <h2
            id="condition-model-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            A seller-declared condition scale.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            A proposed condition taxonomy for electronics. &ldquo;Untested&rdquo; is always explicit — it&apos;s never treated as working.
          </p>

          {/* 5 Condition Rows */}
          <div className="mt-10 flex flex-col gap-3">
            {tiers.map((item) => (
              <div
                key={item.grade}
                className="flex items-center justify-between gap-6 rounded-[16px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
              >
                {/* Left: Grade Title */}
                <div className="w-[180px] shrink-0">
                  <h3 className="text-[14px] font-bold text-[#0f172a]">
                    {item.grade}
                  </h3>
                </div>

                {/* Middle: Progress Bar and Subtitle */}
                <div className="flex-1 max-w-[700px]">
                  {/* Progress Bar Track */}
                  <div className="h-[5px] w-full overflow-hidden rounded-full bg-[#f1f5f9]">
                    <div
                      style={{ width: `${item.percent}%` }}
                      className="h-full rounded-full bg-[#009b72]"
                    />
                  </div>
                  {/* Subtitle Description */}
                  <p className="mt-2 text-[12px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>

                {/* Right: Badge */}
                <div className="shrink-0">
                  {item.badgeType === "seller" ? (
                    <span className="rounded-full bg-[#d5f5eb] px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#007f5d] uppercase">
                      {item.badge}
                    </span>
                  ) : (
                    <span className="rounded-full bg-[#f1f5f9] px-3 py-1 text-[10px] font-extrabold tracking-wider text-[#475569] uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-6 flex items-center gap-2">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-[11.5px] text-[#64748b]">
              Grades are seller-declared and reviewer-assessed — not a Zoiko inspection, and configured for electronics specifically.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CONDITION MODEL
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            A seller-declared condition scale.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            A proposed condition taxonomy for electronics. &ldquo;Untested&rdquo; is always explicit — it&apos;s never treated as working.
          </p>

          {/* 5 Stacked Cards */}
          <div className="mt-5 flex flex-col gap-3">
            {tiers.map((item) => (
              <div
                key={item.grade}
                className="rounded-[14px] border border-[#e5e7eb] bg-white p-4 shadow-xs"
              >
                <h3 className="text-[14px] font-bold text-[#0c1e38]">
                  {item.grade}
                </h3>

                {/* Progress bar */}
                <div className="mt-2.5 h-[5px] w-full overflow-hidden rounded-full bg-[#f1f5f9]">
                  <div
                    style={{ width: `${item.percent}%` }}
                    className="h-full rounded-full bg-[#009b72]"
                  />
                </div>

                {/* Description */}
                <p className="mt-2 text-[12px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>

                {/* Badge */}
                <div className="mt-3">
                  <span className="inline-flex rounded-full bg-[#d5f5eb] px-2.5 py-0.5 text-[9.5px] font-extrabold tracking-wider text-[#007f5d] uppercase">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="mt-4 text-[10px] leading-relaxed text-[#718096]">
            * Grades are seller-declared and reviewer-assessed — not a Zoiko inspection, and configured for electronics specifically.
          </p>
        </div>
      </div>
    </section>
  );
}
