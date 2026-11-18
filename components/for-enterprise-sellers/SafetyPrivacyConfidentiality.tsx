const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const safetyCards = [
  {
    title: "No public stock",
    description: "No manifests, prices, titles or photos are shared or uploaded here.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    title: "Brand permissions",
    description: "Brand rules are respected before any buyer is shown.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Recall and restricted goods",
    description: "These are screened out or escalated, never routed.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    title: "Minimal inquiry data",
    description: "An inquiry needs only a few fields and no uploads.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function SafetyPrivacyConfidentiality() {
  return (
    <section aria-label="Safety, Privacy and Confidentiality" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">09</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              SAFETY, PRIVACY AND CONFIDENTIALITY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Your data and brand stay under
            <br />
            your control.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Seller-private B2B. No public inventory, no public buyer search.
          </p>

          {/* 4 Cards Row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs min-h-[160px]"
              >
                <div>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <h3 className={`${sora} mt-4 text-[17px] font-bold tracking-tight text-[#0c1e38]`}>
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-12">
          {/* Eyebrow */}
          <div className="text-[10.5px] font-bold tracking-[0.18em] text-[#926016] uppercase">
            SAFETY, PRIVACY AND CONFIDENTIALITY
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Your data and brand stay under your control.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Seller-private B2B. No public inventory, no public buyer search.
          </p>

          {/* 4 Cards Stacked */}
          <div className="mt-6 space-y-3">
            {safetyCards.map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${card.iconBg}`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className={`${sora} text-[15.5px] font-bold text-[#0c1e38]`}>
                    {card.title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
