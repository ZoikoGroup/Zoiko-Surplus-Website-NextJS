const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const checks = [
  {
    title: "Ownership and title",
    description: "The seller must evidence the right to sell.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    title: "Inventory integrity",
    description: "Condition, quantity and provenance are documented.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="12" y2="17" />
      </svg>
    ),
  },
  {
    title: "Legal permissions",
    description: "Brand, safety, recall and cross-border requirements are checked.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Buyer verification",
    description:
      "KYB confirms an organization's identity; it does not grant market access.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    title: "Marketplace permissions",
    description:
      "Access sits inside controlled markets based on seller permissions.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Seller decisions",
    description: "Sellers decide which approved buyers see an opportunity.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function CrossSectorQualification() {
  return (
    <section
      id="cross-sector-qualification"
      aria-labelledby="cross-sector-heading"
      className={`${hanken} w-full bg-[#0c1e38]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#009b72]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#009b72]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
              CROSS-SECTOR QUALIFICATION
            </span>
          </div>

          {/* Heading */}
          <h2
            id="cross-sector-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[46px]"
          >
            Checks that apply in every
            <br />
            sector.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[540px] text-[15px] leading-relaxed text-slate-300 sm:text-[16px]">
            Industry labels are an operational taxonomy. They are not a legal classification.
          </p>

          {/* 6 Checks Grid (3x2) */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {checks.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-[14px] border border-white/10 bg-[#122645] p-5 transition-colors hover:border-white/20"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-[#009b72]/30 bg-[#0d3b3e]/60 text-[#10b981]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Tax/Permission Footnote */}
          <div className="mt-6 flex items-center gap-2 text-[11.5px] text-slate-400">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              Tax rules, market-level permissions and local licensing obligations remain outside this page.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-[#0c1e38]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#94a3b8] uppercase`}>
            CROSS-SECTOR QUALIFICATION
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.02em] text-white">
            Checks that apply in every sector.
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
            Industry labels are an operational taxonomy. They are not a legal classification.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {[
              {
                title: "Ownership and title",
                description: "The seller must evidence the right to sell.",
                icon: checks[0].icon,
              },
              {
                title: "Inventory integrity",
                description: "Condition, quantity and provenance are documented first.",
                icon: checks[1].icon,
              },
              {
                title: "Legal permissions",
                description: "Brand, safety, export and local-law requirements are checked.",
                icon: checks[2].icon,
              },
              {
                title: "Buyer verification",
                description: "KYB confirms an organization; it does not grant market access.",
                icon: checks[3].icon,
              },
              {
                title: "Marketplace permission",
                description: "Access to a seller-controlled market needs additional permission.",
                icon: checks[4].icon,
              },
              {
                title: "Seller decisions",
                description: "Sellers decide which approved buyers see an opportunity.",
                icon: checks[5].icon,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-[14px] border border-white/10 bg-[#122645] p-4"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] border border-[#009b72]/30 bg-[#0d3b3e]/60 text-[#10b981]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold text-white">{item.title}</h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[10.5px] leading-relaxed text-slate-400">
            KYB records, market eligibility records and transaction rights remain separate from each other.
          </p>
        </div>
      </div>
    </section>
  );
}
