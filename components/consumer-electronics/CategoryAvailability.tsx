import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function CategoryAvailability() {
  return (
    <section id="category-availability" aria-labelledby="category-availability-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Visual Photo (ce2.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/consumer-electronics/ce2.jpg"
                  alt="Consumer electronics accessories including headphones, keyboard and mouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & Notice */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>01</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  CATEGORY AVAILABILITY
                </span>
              </div>

              {/* Heading */}
              <h2
                id="category-availability-heading"
                className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px] leading-[1.14]"
              >
                A conditional overview not
                <br />
                a live market.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Electronics is a conditional public educational category. Its presence here explains the model; it does not confirm active stock, pricing or trading.
              </p>

              {/* Callout Notice Banner */}
              <div className="mt-8 flex items-start gap-3 rounded-[14px] border border-[#f5e6d0] bg-[#fbf5eb] p-4.5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#926016"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-[#926016]"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <div className="text-[12px] leading-relaxed text-[#78350f]">
                  <strong className="font-bold text-[#0f172a]">Prepared for explicit approval.</strong>{" "}
                  Data-bearing devices, batteries, electrical safety and recalls add controls on top of standard qualification. Availability is activated by market, product and legal arrangement; a region selection never activates trading.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full bg-[#faf7f2] px-4 py-8">
          {/* Visual Photo (ce23.jpg) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/consumer-electronics/ce23.jpg"
              alt="Consumer electronics accessories"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Eyebrow */}
          <div className="mt-6 flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>01</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CATEGORY AVAILABILITY
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-2.5 text-[22px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            A conditional overview — not a live market.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Electronics is a conditional public educational category. Its presence here explains the model; it does not confirm active stock, pricing or trading.
          </p>

          {/* Callout Notice Card */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[14px] border border-dashed border-[#e6d7bf] bg-[#fdfbf7] p-3.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-[#926016]"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <div className="text-[11.5px] leading-relaxed text-[#6b583f]">
              <strong className="font-bold text-[#0c1e38]">Prepared for explicit approval.</strong>{" "}
              Data-bearing devices, batteries, electrical safety and recalls add controls on top of standard qualification. Availability is activated by market, product and legal arrangement — a region selection never activates trading.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
