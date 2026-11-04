const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type BoundaryItem = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

const boundaryItems: BoundaryItem[] = [
  {
    id: "contracts",
    title: "Who contracts whom",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "fees",
    title: "Fees & settlement",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    id: "ownership",
    title: "No ownership",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    id: "guarantee",
    title: "No guaranteed outcome",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="9.5" y1="9.5" x2="14.5" y2="14.5" />
        <line x1="14.5" y1="9.5" x2="9.5" y2="14.5" />
      </svg>
    ),
  },
];

export default function CommercialBoundaries() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="commercial-boundaries-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              COMMERCIAL BOUNDARIES
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="commercial-boundaries-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            What the network is —
            <br className="hidden sm:inline" /> and isn&apos;t.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Short, visible boundaries on roles, money and responsibility. None of these implies a guaranteed result.
          </p>

          {/* 2x2 Boundary Accordion Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {boundaryItems.map((item) => (
              <div
                key={item.id}
                className="group flex cursor-pointer items-center justify-between rounded-[16px] border border-[#eef2f6] bg-white p-4.5 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_4px_16px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#fdf5eb]">
                    {item.icon}
                  </div>
                  <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                    {item.title}
                  </h3>
                </div>
                <div className="text-gray-400 transition-colors group-hover:text-[#926016]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="commercial-boundaries-mobile-heading" className={`block md:hidden ${hanken} w-full bg-[#fbf7f2] px-4 py-8`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>09</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            COMMERCIAL BOUNDARIES
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="commercial-boundaries-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          What the network is —
          <br /> and isn&apos;t.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Short, visible boundaries on roles, money and responsibility. None of these implies a guaranteed result.
        </p>

        {/* 4 Vertical Accordion Rows */}
        <div className="mt-6 flex flex-col gap-2.5">
          {boundaryItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-[14px] border border-gray-100 bg-white p-3.5 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#fdf5eb]">
                  {item.icon}
                </div>
                <h3 className="text-[13.5px] font-bold text-[#0c2140]">
                  {item.title}
                </h3>
              </div>
              <div className="text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
