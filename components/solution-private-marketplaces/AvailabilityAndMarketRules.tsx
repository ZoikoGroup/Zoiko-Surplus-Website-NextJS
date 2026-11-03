import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function AvailabilityAndMarketRules() {
  return (
    <section id="availability-and-market-rules" aria-labelledby="availability-market-rules-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              AVAILABILITY &amp; MARKET RULES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="availability-market-rules-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Private markets are activated, not
            <br />
            assumed.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Region, category, role and corridor all gate availability. A neutral &ldquo;not available&rdquo; state is shown where nothing is active.
          </p>

          {/* Main 2-Column Section */}
          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Image */}
            <div className="lg:col-span-6">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.04)] sm:h-[380px] lg:h-full">
                <Image
                  src="/images/solution-private-marketplaces/spm7.png"
                  alt="Interactive touch map displaying regional market activation boundaries"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: 3 Cards */}
            <div className="flex flex-col justify-between gap-4 lg:col-span-6">
              {/* Card 1 */}
              <div className="rounded-[18px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)]">
                <h3 className="text-[15px] font-bold text-[#0f172a]">
                  United Kingdom — Apparel &amp; Footwear
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  A proposed seller-private B2B pilot — proposed is not evidence of launch.
                </p>
                <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#d5f5eb] px-3 py-1 text-[11px] font-semibold text-[#007f5d]">
                  <span className="size-1.5 rounded-full bg-[#009b72]" />
                  Proposed pilot
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-[18px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)]">
                <h3 className="text-[15px] font-bold text-[#0f172a]">
                  Other regions
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  Informational content is available; no private market is confirmed as live.
                </p>
                <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-3 py-1 text-[11px] font-semibold text-[#475569]">
                  <span className="size-1.5 rounded-full bg-[#64748b]" />
                  Informational
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-[18px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)]">
                <h3 className="text-[15px] font-bold text-[#0f172a]">
                  Sealed ambient food
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  Independent safety, traceability, shelf-life and local-law gate before any activity.
                </p>
                <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-[#fdf2e2] px-3 py-1 text-[11px] font-semibold text-[#926016]">
                  <span className="size-1.5 rounded-full bg-[#926016]" />
                  Separate approval
                </div>
              </div>
            </div>
          </div>

          {/* Full-width callout */}
          <div className="mt-6 flex items-center gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] px-5 py-3.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="text-[12px] font-medium text-[#78350f]">
              The country/locale selector is informational only — it sets content and language, and does not activate a market, grant eligibility or change any permission.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            AVAILABILITY &amp; MARKET RULES
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Private markets are
          <br />
          activated, not assumed.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Region, category, role and corridor all gate availability. A neutral &ldquo;not available&rdquo; state is shown where nothing is active.
        </p>

        {/* Image on Mobile */}
        <div className="relative mt-7 aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_2px_12px_rgba(15,23,42,0.04)]">
          <Image
            src="/images/solution-private-marketplaces/spm18.jpg"
            alt="World map representing territorial eligibility and private market boundaries"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* 3 Mobile Cards */}
        <div className="mt-6 flex flex-col gap-4">
          {/* Card 1 */}
          <div className="rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
            <h3 className="text-[14.5px] font-bold text-[#0f172a]">
              United Kingdom — Apparel &amp; Footwear
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
              A proposed seller-private B2B pilot — proposed is not evidence of launch.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#d5f5eb] px-3 py-1 text-[10.5px] font-semibold text-[#007f5d]">
              <span className="size-1.5 rounded-full bg-[#009b72]" />
              Proposed pilot
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
            <h3 className="text-[14.5px] font-bold text-[#0f172a]">
              Other regions
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
              Informational content is available; no private market is confirmed as live.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-3 py-1 text-[10.5px] font-semibold text-[#475569]">
              <span className="size-1.5 rounded-full bg-[#64748b]" />
              Informational
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
            <h3 className="text-[14.5px] font-bold text-[#0f172a]">
              Sealed ambient food
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
              Independent safety, traceability, shelf-life and local-law gate before any activity.
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#fdf2e2] px-3 py-1 text-[10.5px] font-semibold text-[#926016]">
              <span className="size-1.5 rounded-full bg-[#926016]" />
              Separate approval
            </div>
          </div>
        </div>

        {/* Note Callout */}
        <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#f5e6d0] bg-[#fbf5eb] p-4">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#926016"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span className="text-[11px] leading-relaxed text-[#78350f]">
            The country/locale selector is informational only — it sets content and language, and does not activate a market, grant eligibility or change any permission.
          </span>
        </div>
      </div>
    </section>
  );
}
