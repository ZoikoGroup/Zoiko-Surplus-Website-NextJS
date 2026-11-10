import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const constraints = [
  {
    title: "Machinery specifications",
    description: "Technical details and technical component fit for buyer sector.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Dangerous goods screening",
    description: "Hazardous and regulated items are screened out or handled separately.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Export controls and installation limits",
    description: "Cross-border rules and installation constraints apply.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function SectorIndustrial() {
  return (
    <section
      id="sector-industrial"
      aria-labelledby="sector-industrial-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Visual (sis14.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-[0_10px_30px_rgba(12,30,56,0.08)]">
                <Image
                  src="/images/Industries-Served/sis14.jpg"
                  alt="Industrial and commercial warehouse stock"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    Industrial &amp; Business Stock
                  </span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="flex flex-col lg:col-span-6">
              <p className={`${sora} text-[10.5px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
                SECTOR 5
              </p>

              <h2
                id="sector-industrial-heading"
                className="mt-2.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[36px]"
              >
                Industrial &amp; Business Goods
              </h2>

              <p className="mt-2 text-[14.5px] leading-relaxed text-[#556987] sm:text-[15.5px]">
                Commercial excess, tools, equipment and business stock.
              </p>

              {/* 3 Constraint Items */}
              <div className="mt-6 flex flex-col gap-4">
                {constraints.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-extrabold text-[#0c1e38]">{item.title}</h3>
                      <p className="mt-0.5 text-[12px] text-[#556987]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Restrictions Box */}
              <div className="mt-6 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf9ef] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>
                  <strong className="font-bold text-[#6b4b1e]">Restrictions apply:</strong> Where no permitted route exists, no transaction path is offered. Read the restrictions and contact the team for guidance.
                </span>
              </div>

              {/* Conditional Pill */}
              <div className="mt-3">
                <span className="inline-flex items-center gap-2 rounded-[10px] border border-[#f5dfb8] bg-[#fdf7e7] px-3.5 py-2 text-[11.5px] text-[#7c5c2b]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>
                    <strong className="font-bold text-[#6b4b1e]">Conditional:</strong> Requires regional and product eligibility.
                  </span>
                </span>
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
          {/* Top Visual Photo (sis33.jpg) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/Industries-Served/sis33.jpg"
              alt="Industrial and commercial warehouse stock"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                Industrial &amp; Business Goods
              </span>
            </div>
          </div>

          <p className={`${sora} mt-6 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            SECTOR 5
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.02em] text-[#0c1e38]">
            Industrial &amp; Business Goods
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Commercial excess, tools, equipment and business stock.
          </p>

          {/* 3 Constraint Items */}
          <div className="mt-5 flex flex-col gap-3.5">
            {constraints.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-extrabold text-[#0c1e38]">{item.title}</h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Restrictions Box */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf9ef] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              <strong className="font-bold text-[#6b4b1e]">Restrictions apply:</strong> Where no permitted route exists, no transaction path is offered. Read the restrictions and contact the team for guidance.
            </span>
          </div>

          {/* Conditional Pill */}
          <div className="mt-3">
            <span className="inline-flex items-center gap-2 rounded-[10px] border border-[#f5dfb8] bg-[#fdf7e7] px-3.5 py-2 text-[11.5px] text-[#7c5c2b]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>
                <strong className="font-bold text-[#6b4b1e]">Conditional:</strong> Requires regional and product eligibility.
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
