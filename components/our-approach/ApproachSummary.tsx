const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const disclosures = [
  "Not every stage is operational in every market",
  "Not an open retail catalog",
  "No guaranteed outcomes",
];

export default function ApproachSummary() {
  return (
    <section
      id="approach-summary"
      aria-labelledby="approach-summary-heading"
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
              THE APPROACH IN ONE PARAGRAPH
            </span>
          </div>

          {/* Statement Heading */}
          <h2
            id="approach-summary-heading"
            className="mt-6 max-w-[1060px] text-[30px] font-extrabold leading-[1.32] tracking-[-0.02em] text-[#0c1e38] sm:text-[34px] lg:text-[38px]"
          >
            Our approach starts with eligible surplus inventory and seller-defined controls,{" "}
            <span className="font-bold text-[#64748b]">
              connects appropriate business demand where authorized, and preserves records needed to explain decisions and exceptions.
            </span>
          </h2>

          {/* Disclosure Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {disclosures.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-slate-200 bg-[#f8fafc] px-4 py-1.5 text-[12px] font-medium text-[#556987]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            THE APPROACH IN ONE PARAGRAPH
          </p>

          <h2 className="mt-3 text-[20px] font-extrabold leading-[1.34] tracking-[-0.02em] text-[#0c1e38]">
            Our approach starts with eligible surplus inventory and seller-defined controls,{" "}
            <span className="font-bold text-[#64748b]">
              connects appropriate business demand where authorized, and preserves records needed to explain decisions and exceptions.
            </span>
          </h2>

          <div className="mt-5 flex flex-col items-start gap-2">
            {disclosures.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#556987]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
