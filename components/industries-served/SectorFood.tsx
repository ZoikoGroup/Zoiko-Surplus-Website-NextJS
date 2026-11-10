import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const constraints = [
  {
    title: "Expiry and shelf life",
    description: "Minimum remaining shelf life is required.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Batch traceability",
    description: "Batch records and storage conditions must be evidenced.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="16" y2="13" />
      </svg>
    ),
  },
  {
    title: "Allergen and recall controls",
    description: "Food safety obligations apply to the seller and any buyer.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function SectorFood() {
  return (
    <section
      id="sector-food"
      aria-labelledby="sector-food-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Copy */}
            <div className="flex flex-col lg:col-span-6">
              <p className={`${sora} text-[10.5px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
                SECTOR 2
              </p>

              <h2
                id="sector-food-heading"
                className="mt-2.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[36px]"
              >
                Food &amp; Grocery
              </h2>

              <p className="mt-2 text-[14.5px] leading-relaxed text-[#556987] sm:text-[15.5px]">
                Sealed ambient grocery and pantry inventory, only as a separately gated candidate.
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

              {/* Light-Rose Safety Warning */}
              <div className="mt-7 flex items-start gap-2.5 rounded-[12px] border border-[#f5c6cb] bg-[#fdf2f2] p-4 text-[11.5px] leading-relaxed text-[#7f1d1d]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>
                  <strong className="font-bold">
                    Food-related pathways require separate local safety, shelf-life, traceability, and legal use approval before activation.
                  </strong>{" "}
                  This page does not claim open food purchasing and the separate food gate is not started automatically.
                </span>
              </div>
            </div>

            {/* Right Visual (sis11.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-[0_10px_30px_rgba(12,30,56,0.08)]">
                <Image
                  src="/images/Industries-Served/sis11.jpg"
                  alt="Grocery inventory inspection and shelf-life verification"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-semibold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    Illustrative, not open for shopping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            SECTOR 2
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.02em] text-[#0c1e38]">
            Food &amp; Grocery
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Sealed ambient grocery and pantry inventory, only as a separately gated candidate.
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

          {/* Rose Safety Warning Box */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#f5c6cb] bg-[#fdf2f2] p-4 text-[11.5px] leading-relaxed text-[#7f1d1d]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              <strong className="font-bold">
                Food-related pathways require separate local safety, shelf-life, traceability, and legal use approval before activation.
              </strong>{" "}
              This page does not show open food purchasing, and the separate food gate is not started on the site.
            </span>
          </div>

          {/* Bottom Visual Photo (sis30.jpg) */}
          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/Industries-Served/sis30.jpg"
              alt="Grocery inventory inspection and shelf-life verification"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                Illustrative, not open for shopping
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
