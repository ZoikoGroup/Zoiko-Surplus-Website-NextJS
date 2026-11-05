const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const qualifiedItems = [
  "Overstock and discontinued ranges",
  "Customer returns with documented condition",
  "Imperfect / B grade goods, clearly declared",
  "Complete items with intact safety labeling",
];

const excludedItems = [
  "Recalled or safety-affected products",
  "Contaminated or unhygienic textiles",
  "Hazardous or restricted component goods",
  "Items with missing documentation or rights",
];

export default function ScopeExclusions() {
  return (
    <section id="scope-exclusions" aria-labelledby="scope-exclusions-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-24 md:px-8 md:pt-14 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              SCOPE &amp; EXCLUSIONS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="scope-exclusions-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            What may qualify and what won&apos;t.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Scope is set by evidence, safety and rights. The right-hand column is excluded or requires specialist handling.
          </p>

          {/* 2-Column Comparison Tables */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left Box: May be considered */}
            <div className="overflow-hidden rounded-[16px] border border-[#e5e7eb] bg-white shadow-xs">
              {/* Header */}
              <div className="flex items-center gap-2.5 bg-[#dcfce7] px-6 py-4 text-[#15803d]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3 className="text-[14.5px] font-bold text-[#15803d]">
                  May be considered
                </h3>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#f1f5f9]">
                {qualifiedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 px-6 py-4 text-[13.5px] text-[#0c1e38]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#009b72]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box: Excluded / gated */}
            <div className="overflow-hidden rounded-[16px] border border-[#e5e7eb] bg-white shadow-xs">
              {/* Header */}
              <div className="flex items-center gap-2.5 bg-[#fef3c7]/70 px-6 py-4 text-[#b45309]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <h3 className="text-[14.5px] font-bold text-[#b45309]">
                  Excluded / gated
                </h3>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#f1f5f9]">
                {excludedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 px-6 py-4 text-[13.5px] text-[#0c1e38]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#b45309]">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>04</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              SCOPE &amp; EXCLUSIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            What may qualify — and what won&apos;t.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Scope is set by evidence, safety and rights. The right-hand column is excluded or requires specialist handling.
          </p>

          <div className="mt-5 flex flex-col gap-4">
            {/* Qualified Box */}
            <div className="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white">
              <div className="flex items-center gap-2 bg-[#dcfce7]/70 px-4 py-3 text-[13px] font-bold text-[#15803d]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>May be considered</span>
              </div>
              <div className="divide-y divide-[#f1f5f9]">
                {qualifiedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 px-4 py-3 text-[12.5px] text-[#0c1e38]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#009b72]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Excluded Box */}
            <div className="overflow-hidden rounded-[14px] border border-[#e5e7eb] bg-white">
              <div className="flex items-center gap-2 bg-[#fef3c7]/70 px-4 py-3 text-[13px] font-bold text-[#b45309]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>Excluded / gated</span>
              </div>
              <div className="divide-y divide-[#f1f5f9]">
                {excludedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 px-4 py-3 text-[12.5px] text-[#0c1e38]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#b45309]">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
