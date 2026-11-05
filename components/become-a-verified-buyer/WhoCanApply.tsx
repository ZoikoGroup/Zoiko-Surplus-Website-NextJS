const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const criteria = [
  {
    id: "registered-business",
    title: "A registered business",
    description: "Applicants must represent a legitimate business entity — not individual consumers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <line x1="8" y1="6" x2="10" y2="6" />
        <line x1="14" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="14" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    id: "authorized-representative",
    title: "An authorized representative",
    description: "The person applying must have authority to act for the organization.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: "seller-scoped-access",
    title: "Seller-scoped access",
    description: "Even once verified, access to a private market requires separate seller authorization.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
];

export default function WhoCanApply() {
  return (
    <section id="who-can-apply" aria-labelledby="who-can-apply-heading" className={`${hanken} w-full bg-white order-4 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHO CAN APPLY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="who-can-apply-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Business buyers, with authority.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Verification confirms your organization and your authority — it is not, by itself, access to any seller&apos;s private market.
          </p>

          {/* 3-Column Requirement Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {criteria.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-start rounded-[20px] border border-[#eef2f6] bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#d5f5eb]">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-[16px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-[1.65] text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 pt-8 pb-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            WHO CAN APPLY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Business buyers, with authority.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Verification confirms your organization and your authority — it is not, by itself, access to any seller&apos;s private market.
        </p>

        {/* 3 Stacked Cards */}
        <div className="mt-7 flex flex-col gap-4">
          {criteria.map((item) => (
            <div
              key={`m-${item.id}`}
              className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.03)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d5f5eb]">
                {item.icon}
              </div>

              <h3 className="mt-3.5 text-[15px] font-bold text-[#0f172a]">
                {item.title}
              </h3>

              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
