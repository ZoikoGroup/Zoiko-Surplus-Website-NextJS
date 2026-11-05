const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function CategoryStatus() {
  return (
    <section id="category-status" aria-labelledby="category-status-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CATEGORY STATUS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="category-status-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px] leading-[1.14]"
          >
            A conditional overview not a live
            <br />
            market.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Home &amp; Lifestyle is a conditional educational category. Availability of eligible goods and trading access depends on separate market and category approval.
          </p>

          {/* Notice Callout Card */}
          <div className="mt-10 flex items-start gap-3.5 rounded-[14px] border border-[#f5dfb8] bg-[#fdfcf9] p-4.5 shadow-xs">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-[#926016]"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div className="text-[12.5px] leading-relaxed text-[#556987]">
              <strong className="font-bold text-[#0c1e38]">Prepared for explicit approval.</strong>{" "}
              Classifications vary by subcategory — textiles, seasonal items and small appliances carry conditional roles. A region selection never activates trading or grants eligibility.
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full bg-[#faf7f2] px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CATEGORY STATUS
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            A conditional overview — not a live market.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Home &amp; Lifestyle is a conditional educational category. Availability of eligible goods and trading access depends on separate market and category approval.
          </p>

          {/* Dashed Notice Card */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[14px] border border-dashed border-[#e6d7bf] bg-[#fdfbf7] p-3.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-[#926016]"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div className="text-[11.5px] leading-relaxed text-[#6b583f]">
              <strong className="font-bold text-[#0c1e38]">Prepared for explicit approval.</strong>{" "}
              Classifications vary by subcategory — textiles, seasonal items and small appliances carry conditional roles. A region selection never activates trading or grants eligibility.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
