const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const criteria = [
  {
    title: "Documented condition",
    description: "Condition, completeness and defect notes, per subcategory.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Provenance & rights",
    description: "Source, ownership and the right to dispose — evidenced separately.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Safety labelling",
    description: "Required safety, law and care labelling present and intact.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Packaging & movement",
    description: "Packaging state and logistics suitability for the goods.",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
];

export default function QualificationProvenance() {
  return (
    <section id="qualification-provenance" aria-labelledby="qualification-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              QUALIFICATION &amp; PROVENANCE
            </span>
          </div>

          {/* Heading */}
          <h2
            id="qualification-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            What may qualify and what won&apos;t.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Four things, assessed together — condition, rights, safety labelling and whether the goods can actually be handled.
          </p>

          {/* 4 Cards (2x2 Grid) */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {criteria.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-[16px] border border-[#e5e7eb] bg-white p-5 shadow-xs transition-all hover:border-slate-300 hover:shadow-sm"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f7f2] text-[#009b72]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#0c1e38]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
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
              className="shrink-0 text-[#64748b]"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-[12px] text-[#64748b]">
              Documentation is seller- or authorized-party-sourced — verification is not a guarantee of safety, authenticity or legal title.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-[#FAF6F0]">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              QUALIFICATION &amp; PROVENANCE
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            What a qualified lot must show.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Four things, assessed together — condition, rights, safety labelling and whether the goods can actually be handled.
          </p>

          {/* 4 Cards */}
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-start gap-3.5 rounded-[14px] border border-[#f0ece4] bg-white p-4 shadow-2xs">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f7f2] text-[#009b72]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-[#0c1e38]">Documented condition</h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">Condition, completeness and defect notes, per subcategory.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-[14px] border border-[#f0ece4] bg-white p-4 shadow-2xs">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f7f2] text-[#009b72]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-[#0c1e38]">Provenance &amp; rights</h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">Source, ownership and the right to dispose — evidenced separately.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-[14px] border border-[#f0ece4] bg-white p-4 shadow-2xs">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f7f2] text-[#009b72]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-[#0c1e38]">Safety labelling</h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">Required safety, fire and care labelling present and intact.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 rounded-[14px] border border-[#f0ece4] bg-white p-4 shadow-2xs">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#e6f7f2] text-[#009b72]">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-[#0c1e38]">Packaging &amp; movement</h3>
                <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">Packaging state and logistics suitability for the goods.</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[10.5px] leading-relaxed text-[#718096]">
            * Documentation is seller- or authorised-party sourced — verification is not a guarantee of safety, authenticity or legal title.
          </p>
        </div>
      </div>
    </section>
  );
}
