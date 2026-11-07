import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function SafetyDataFirst() {
  return (
    <section id="safety-data-first" aria-labelledby="safety-data-heading" className={`${hanken} w-full bg-[#0c1e38] text-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Visual Photo (ce16.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full max-w-[540px] overflow-hidden rounded-[20px] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <Image
                  src="/images/consumer-electronics/ce16.jpg"
                  alt="Secure point-of-sale card terminal transaction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & Actions */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
                <span className={`${sora} text-[11px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                  SAFETY & DATA FIRST
                </span>
              </div>

              {/* Heading */}
              <h2
                id="safety-data-heading"
                className="mt-3.5 text-[32px] font-extrabold leading-[1.16] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]"
              >
                Data cleared, batteries
                <br />
                safe, recalls screened —
                <br />
                then a route.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[540px] text-[15px] leading-relaxed text-slate-300 sm:text-[16px]">
                Information security and physical safety are assessed before an electronics lot can move. Any unresolved risk stops it.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#enterprise-demo"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3.5 text-[13.5px] font-bold tracking-wide text-white transition-all hover:bg-[#784f12] active:scale-[0.99]"
                >
                  Request Enterprise Demo
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="#trust-and-safety"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3.5 text-[13.5px] font-bold text-[#0c1e38] transition-all hover:bg-slate-100 active:scale-[0.99]"
                >
                  Trust & Safety
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          <div className="rounded-[22px] bg-[#0c1e38] p-5 pt-7 pb-6 shadow-md border border-white/5">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-[1.5px] w-5 bg-[#009b72]" />
              <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                SAFETY & DATA FIRST
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">
              Data cleared, batteries safe, recalls screened — then a route.
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
              Information security and physical safety are assessed before an electronics lot can move. Any unresolved risk stops it.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                href="/#enterprise-demo"
                className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs active:bg-[#784f12]"
              >
                <span>Request Enterprise Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="#trust-and-safety"
                className="flex h-[44px] w-full items-center justify-center rounded-full bg-white text-[13.5px] font-bold text-[#0c1e38] shadow-xs active:bg-slate-100"
              >
                Trust & Safety
              </Link>
            </div>

            {/* Image ce37.jpg */}
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-white/10 shadow-xs">
              <Image
                src="/images/consumer-electronics/ce37.jpg"
                alt="Terminal data safety verification"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
