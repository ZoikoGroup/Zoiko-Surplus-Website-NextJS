import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function FinalCTA() {
  return (
    <section aria-labelledby="ready-to-buy-heading" className={`${hanken} w-full bg-white pb-16 md:pb-28 order-17 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[440px] w-full overflow-hidden rounded-[28px] shadow-[0_12px_36px_rgba(15,23,42,0.14)] sm:min-h-[480px] md:min-h-[520px]">
            {/* Background Image: vb11.png */}
            <Image
              src="/images/become-a-verified-buyer/vb11.png"
              alt="Two executives agreeing to verified buyer commercial engagement"
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-[#0c1e38]/75 backdrop-brightness-75" />

            {/* Top Right Watermark / Badge */}
            <div className="absolute top-6 right-6 z-10 flex size-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 flex min-h-[440px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[480px] md:min-h-[520px]">
              <h2
                id="ready-to-buy-heading"
                className="max-w-[780px] text-[34px] font-extrabold tracking-[-0.02em] text-white sm:text-[46px] md:text-[52px] lg:text-[56px]"
              >
                Ready to be considered
                <br />
                as a buyer?
              </h2>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#start-application"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-7 py-3 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
                >
                  <span>Start Buyer Application</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>

                <Link
                  href="/solution-surplus-network"
                  className="inline-flex items-center rounded-full border border-white/40 bg-black/20 px-7 py-3 text-[13.5px] font-bold text-white backdrop-blur-xs transition-colors hover:border-white hover:bg-white/10"
                >
                  Explore Surplus Exchange
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
        <div className="overflow-hidden rounded-[24px] bg-[#0c1e38] text-white shadow-[0_12px_36px_rgba(15,23,42,0.18)]">
          <div className="p-6 pt-7 text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
              <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
                GET STARTED
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">
              Ready to be considered as a buyer?
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-300">
              Start your application where intake is open, or explore how the governed exchange works. Applying starts a review — it does not grant access or approval.
            </p>

            {/* Actions Stacked */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#start-application"
                className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#a66e1b]"
              >
                <span>Start Buyer Application</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <Link
                href="/solution-surplus-network"
                className="flex h-[46px] w-full items-center justify-center rounded-full border border-white/30 text-[13.5px] font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore Surplus Exchange
              </Link>
            </div>
          </div>

          {/* Bottom Visual Image: vb21.jpg */}
          <div className="relative mt-2 aspect-[4/3] w-full overflow-hidden">
            <Image
              src="/images/become-a-verified-buyer/vb33.jpg"
              alt="Ready to be considered as a buyer"
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
