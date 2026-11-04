import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-heading" className={`${hanken} w-full bg-white pb-16 md:pb-28`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[420px] w-full overflow-hidden rounded-[28px] shadow-[0_8px_32px_rgba(12,30,56,0.16)] sm:min-h-[460px] md:min-h-[500px]">
            {/* Background Image */}
            <Image
              src="/images/solution-private-marketplaces/spm11.png"
              alt="Audience of enterprise decision-makers in a private session"
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Deep Navy/Blue Overlay */}
            <div className="absolute inset-0 bg-[#0c1e38]/80 backdrop-brightness-75" />

            {/* Centered Content */}
            <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[460px] md:min-h-[500px]">
              <h2
                id="final-cta-heading"
                className="max-w-[780px] text-[32px] font-extrabold tracking-[-0.02em] text-white sm:text-[44px] md:text-[50px] lg:text-[54px]"
              >
                Direct surplus to the
                <br />
                right audience — privately.
              </h2>

              {/* Dual CTAs */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-7 py-3 text-[13.5px] font-bold text-white transition-colors hover:bg-[#a66e1b]"
                >
                  <span>Request Enterprise Demo</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/50 bg-black/20 px-7 py-3 text-[13.5px] font-bold text-white backdrop-blur-xs transition-colors hover:border-white hover:bg-white/10"
                >
                  Apply to Become a Buyer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden px-5">
        <div className="overflow-hidden rounded-[24px] bg-[#0c1e38] shadow-[0_8px_30px_rgba(12,30,56,0.18)]">
          {/* Top Navy Content */}
          <div className="p-6">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-[1.5px] w-5 bg-[#009b72]" />
              <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
                GET STARTED
              </span>
            </div>

            <h2 className="mt-3.5 text-[26px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">
              Direct surplus to the
              <br />
              right audience —
              <br />
              privately.
            </h2>

            <p className="mt-3 text-[12.5px] leading-relaxed text-[#94a3b8]">
              Talk to the enterprise team about seller-controlled private markets and availability, or apply to be considered as a verified buyer. No access, invitation or outcome is promised here.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
              >
                <span>Request Enterprise Demo</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="flex h-[46px] w-full items-center justify-center rounded-full border border-white/30 bg-white/5 text-[13.5px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Apply to Become a Buyer
              </Link>
            </div>
          </div>

          {/* Bottom Photo spm21 */}
          <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-800">
            <Image
              src="/images/solution-private-marketplaces/spm21.jpg"
              alt="Retail and enterprise point of sale and transaction fulfillment"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
