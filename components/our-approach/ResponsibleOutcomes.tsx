import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const outcomeTags = [
  "Method before metrics",
  "No unverified ESG figures",
];

export default function ResponsibleOutcomes() {
  return (
    <section
      id="responsible-outcomes"
      aria-labelledby="responsible-outcomes-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Visual Photo (soa22.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_10px_32px_rgba(12,30,56,0.08)]">
                <Image
                  src="/images/Zoiko-Surplus-Our-Approach/soa22.jpg"
                  alt="Logistics coordinator documenting parcel inspection details"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Copy */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>12</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  RESPONSIBLE OUTCOMES
                </span>
              </div>

              {/* Heading */}
              <h2
                id="responsible-outcomes-heading"
                className="mt-3.5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[40px] lg:text-[44px]"
              >
                We explain how outcomes
                <br />
                are evidenced. We do not
                <br />
                publish figures we cannot
                <br />
                support.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[540px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                No recovery rates, emissions savings or sell-through numbers appear here. Where outcome records exist, they describe method and fields, and are not a verified-impact claim.
              </p>

              {/* 2 Badge Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {outcomeTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-[#f8fafc] px-4 py-1.5 text-[12px] font-medium text-[#556987]"
                  >
                    {tag}
                  </span>
                ))}
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
          {/* Top Photo (soa44.jpg) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/Zoiko-Surplus-Our-Approach/soa44.jpg"
              alt="Logistics coordinator documenting parcel inspection details"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className={`${sora} mt-6 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            RESPONSIBLE OUTCOMES
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            We explain how outcomes are evidenced. We do not publish figures we cannot support.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            No recovery rates, emissions savings or sell-through numbers appear here. Where outcome records exist, they describe method and fields, and are not a verified-impact claim.
          </p>

          <div className="mt-5 flex flex-col items-start gap-2">
            {["Method before metrics", "No unverified ESG figures", "Records described, not counted"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-slate-200 bg-[#f8fafc] px-3.5 py-1.5 text-[11px] font-medium text-[#556987]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
