import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function ExceptionsCommercialBoundaries() {
  return (
    <section
      id="exceptions-commercial-boundaries"
      aria-labelledby="exceptions-boundaries-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-24 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              EXCEPTIONS &amp; COMMERCIAL BOUNDARIES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="exceptions-boundaries-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Holds, rejections and
            <br />
            recalls.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Electronics has strict exception handling, and clear commercial limits.
          </p>

          {/* Large Image (ce17.jpg) */}
          <div className="relative mt-10 aspect-[16/8] max-h-[500px] min-h-[320px] w-full overflow-hidden rounded-[20px] border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/consumer-electronics/ce17.jpg"
              alt="Data engineers in enterprise server room reviewing infrastructure"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover object-center"
            />
          </div>

          {/* Bottom Warning Banner */}
          <div className="mt-6 flex items-start gap-4 rounded-[14px] border border-[#f4deb4] bg-[#fdfcf9] p-5 shadow-xs">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3] text-[#926016]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-[#0c1e38]">
                Hold, reject, recall
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                Data-exposure risk, battery or electrical hazards, recalls, counterfeits or unclear title trigger a hold, rejection or escalation before any exposure. Warranties are not transferred by default, payments run through authorized providers where enabled, and no guaranteed outcome, price or date-closure is implied.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>08</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              EXCEPTIONS &amp; COMMERCIAL BOUNDARIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Holds, rejections and recalls.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Electronics has strict exception handling, and clear commercial limits.
          </p>

          {/* Image ce38.jpg */}
          <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-[18px] border border-slate-200 shadow-xs">
            <Image
              src="/images/consumer-electronics/ce38.jpg"
              alt="Engineers reviewing datacenter server room"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Bottom Card */}
          <div className="mt-4 flex items-start gap-3 rounded-[14px] border border-[#f4deb4] bg-[#fdfcf9] p-4 shadow-xs">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3] text-[#926016]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-[13.5px] font-bold text-[#0c1e38]">Hold, reject, recall</h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                Data-exposure risk, battery or electrical hazards, recalls, counterfeits or unclear title trigger a hold, rejection or escalation before any exposure. Warranties are not transferred by default, payments run through authorized providers where enabled, and no guaranteed outcome, price or date-closure is implied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
