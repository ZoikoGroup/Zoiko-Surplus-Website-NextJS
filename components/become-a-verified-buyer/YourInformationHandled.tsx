const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const cards = [
  {
    id: "need-to-know",
    title: "Need to know",
    description: "Your application is visible only to the roles that need it for review.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "not-public",
    title: "Not public",
    description: "Your details never appear on public pages, in search or in analytics.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    id: "retention",
    title: "Retention",
    description: "Data is kept under the applicable privacy notices, by market.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8" />
        <rect x="1" y="3" width="22" height="5" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    id: "your-control",
    title: "Your control",
    description: "You can ask about or withdraw your application through the stated channels.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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

export default function YourInformationHandled() {
  return (
    <section id="your-information" aria-labelledby="your-information-heading" className={`${hanken} w-full bg-[#fbf9f5] md:bg-[#fbf9f5] order-14 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>14</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              YOUR INFORMATION
            </span>
          </div>

          {/* Heading */}
          <h2
            id="your-information-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Handled on a need-to-know basis.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Your application data is protected and scoped to review — never published. (This demonstration doesn&apos;t store anything.)
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#0c1e38] text-white">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#0f172a]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-[1.65] text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fbf9f5] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            YOUR INFORMATION
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Handled on a need-to-know basis.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Your application data is protected and scoped to review — never published. (This demonstration doesn&apos;t store anything.)
        </p>

        {/* 4 Stacked Cards */}
        <div className="mt-7 flex flex-col gap-3.5">
          {cards.map((card) => (
            <div
              key={`m-inf-${card.id}`}
              className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-[#0c1e38] text-white">
                {card.icon}
              </div>
              <h3 className="mt-3 text-[14.5px] font-bold text-[#0f172a]">
                {card.title}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
