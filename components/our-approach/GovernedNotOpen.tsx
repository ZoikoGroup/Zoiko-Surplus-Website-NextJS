const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const openCatalogRows = [
  "Stock is visible to the public",
  "Buyers are anonymous or lightly checked",
  "Price and headline bid decide the sale",
  "Condition claims sit with the listing alone",
  "Disputes are handled case by case",
];

const zoikoApproachRows = [
  "Sellers decide who sees an opportunity",
  "Business eligibility is reviewed before restricted access",
  "Routes are compared on expected net recovery, within policy",
  "Condition, provenance and category evidence come first",
  "Exceptions follow defined processes",
];

export default function GovernedNotOpen() {
  return (
    <section
      id="governed-not-open"
      aria-labelledby="governed-not-open-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              GOVERNED, NOT OPEN
            </span>
          </div>

          {/* Heading */}
          <h2
            id="governed-not-open-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            How this differs from a public
            <br />
            surplus catalog.
          </h2>

          {/* 2-Column Comparison Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left Card: Open Retail Catalog */}
            <div className="rounded-[20px] border border-slate-200/90 bg-white p-7 sm:p-8 shadow-2xs">
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#64748b] uppercase">
                OPEN RETAIL CATALOG
              </span>

              <h3 className="mt-4 text-[20px] font-extrabold text-[#0c1e38]">
                Anyone can browse and bid.
              </h3>

              <div className="mt-6 divide-y divide-slate-100">
                {openCatalogRows.map((row) => (
                  <div key={row} className="flex items-center gap-3 py-3.5 text-[13.5px] text-[#556987]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c2633a"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>{row}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Zoiko Surplus Approach */}
            <div className="rounded-[20px] border-[1.5px] border-[#009b72]/70 bg-white p-7 sm:p-8 shadow-xs">
              <span className="inline-flex rounded-full bg-[#fbf4e6] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-[#926016] uppercase">
                ZOIKO SURPLUS APPROACH
              </span>

              <h3 className="mt-4 text-[20px] font-extrabold text-[#0c1e38]">
                Access follows approved permissions.
              </h3>

              <div className="mt-6 divide-y divide-slate-100">
                {zoikoApproachRows.map((row) => (
                  <div key={row} className="flex items-center gap-3 py-3.5 text-[13.5px] font-medium text-[#0c1e38]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{row}</span>
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
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            GOVERNED, NOT OPEN
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            How this differs from a public surplus catalog.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            The model is a connected sequence with controls at each step, not a classifieds wall.
          </p>

          <div className="mt-5 flex flex-col gap-4">
            {/* Open Retail Catalog Card */}
            <div className="rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs">
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[9.5px] font-bold tracking-[0.12em] text-[#64748b] uppercase">
                OPEN RETAIL CATALOG
              </span>

              <h3 className="mt-3 text-[17px] font-extrabold text-[#0c1e38]">
                Anyone can browse and bid.
              </h3>

              <div className="mt-4 divide-y divide-slate-100">
                {openCatalogRows.map((row) => (
                  <div key={row} className="flex items-start gap-2.5 py-2.5 text-[12.5px] text-[#556987]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c2633a"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>{row}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zoiko Surplus Approach Card */}
            <div className="rounded-[18px] border-[1.5px] border-[#009b72]/70 bg-white p-5 shadow-xs">
              <span className="inline-flex rounded-full bg-[#fbf4e6] px-3 py-1 text-[9.5px] font-bold tracking-[0.12em] text-[#926016] uppercase">
                ZOIKO SURPLUS APPROACH
              </span>

              <h3 className="mt-3 text-[17px] font-extrabold text-[#0c1e38]">
                Access follows approved permissions.
              </h3>

              <div className="mt-4 divide-y divide-slate-100">
                {zoikoApproachRows.map((row) => (
                  <div key={row} className="flex items-start gap-2.5 py-2.5 text-[12.5px] font-medium text-[#0c1e38]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{row}</span>
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
