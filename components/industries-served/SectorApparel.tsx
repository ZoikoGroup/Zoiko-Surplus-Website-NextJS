import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const constraints = [
  {
    title: "Authenticity and brand rights",
    description: "Brand restrictions and authorization reflect reality.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Sizing and SKU accuracy",
    description: "Labelling and sizing details match the goods.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Condition grades",
    description: "Returns and imperfect stock are graded before they are offered.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="16" y2="13" />
      </svg>
    ),
  },
];

export default function SectorApparel() {
  return (
    <section
      id="sector-apparel"
      aria-labelledby="sector-apparel-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-12 md:px-8 md:py-16">
          <div className="grid grid-cols-1 overflow-hidden rounded-[24px] bg-[#0c1e38] shadow-[0_14px_38px_rgba(12,30,56,0.14)] lg:grid-cols-12">
            {/* Left Dark Navy Copy Box */}
            <div className="flex flex-col justify-center p-8 sm:p-11 lg:col-span-6">
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
                <span className={`${sora} text-[10.5px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                  SECTOR 1
                </span>
              </div>

              <h2
                id="sector-apparel-heading"
                className="mt-3 text-[32px] font-extrabold tracking-[-0.02em] text-white sm:text-[36px]"
              >
                Apparel &amp; Footwear
              </h2>

              <p className="mt-2 text-[14px] text-slate-300 sm:text-[15px]">
                Seasonal, returned, excess and imperfect apparel or shoes.
              </p>

              {/* 3 Constraint Items */}
              <div className="mt-6 flex flex-col gap-4">
                {constraints.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[7px] border border-[#926016]/40 bg-[#2a241c] text-[#d49b3b]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-bold text-white">{item.title}</h3>
                      <p className="mt-0.5 text-[12px] text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Educational / Conditional Note */}
              <div className="mt-7 flex items-start gap-2.5 rounded-[12px] bg-[#fdf9ef] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
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
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>
                  <strong className="font-bold text-[#6b4b1e]">Educational / conditional:</strong> Summaries on this site are summaries and use-case pilots, not guarantee availability statements.
                </span>
              </div>
            </div>

            {/* Right Visual Photo (sis10.jpg) */}
            <div className="relative min-h-[360px] w-full bg-slate-800 lg:col-span-6">
              <Image
                src="/images/Industries-Served/sis10.jpg"
                alt="Apparel and footwear retail display and inventory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute right-4 bottom-4">
                <span className="inline-flex items-center rounded-full bg-white/95 px-3.5 py-1 text-[11px] font-bold text-[#0c1e38] shadow-sm backdrop-blur-xs">
                  Apparel &amp; Footwear
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
          {/* Top Visual (sis29.jpg) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/Industries-Served/sis29.jpg"
              alt="Apparel and footwear retail display and inventory"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                Apparel &amp; Footwear
              </span>
            </div>
          </div>

          <p className={`${sora} mt-6 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            SECTOR 1
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.02em] text-[#0c1e38]">
            Apparel &amp; Footwear
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Seasonal, returned, excess and imperfect apparel or shoes.
          </p>

          {/* 3 Light-themed Constraint Rows */}
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

          {/* Bottom Cream Callout */}
          <div className="mt-6 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf9ef] p-4 text-[11.5px] leading-relaxed text-[#7c5c2b]">
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
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              <strong className="font-bold text-[#6b4b1e]">Educational / conditional:</strong> A summary of what a seller-private apparel and footwear pilot could involve — not a general availability statement.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
