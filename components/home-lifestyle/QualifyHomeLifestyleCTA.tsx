import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";

export default function QualifyHomeLifestyleCTA() {
  return (
    <section id="qualify-home-lifestyle-cta" aria-label="Call to action" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-24 md:px-8 md:pb-28">
          <div className="relative flex min-h-[440px] w-full items-center justify-center overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
            {/* Background image hl19.jpg */}
            <Image
              src="/images/home-lifestyle/hl19.jpg"
              alt="Living room interior with couch, glass coffee table and TV console"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover object-center"
            />

            {/* Dark navy overlay */}
            <div className="absolute inset-0 bg-[#0c1e38]/75 backdrop-blur-[1px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
              <h2 className="max-w-[700px] text-[36px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[48px]">
                Qualify home &amp; lifestyle
                <br />
                surplus.
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-7 py-3.5 text-[14px] font-bold text-white shadow-md transition-all hover:bg-[#784f12] active:scale-[0.99]"
                >
                  Request Enterprise Demo
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="/categories"
                  className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[14px] font-bold text-white backdrop-blur-xs transition-all hover:bg-white/20 active:scale-[0.99]"
                >
                  Back to Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 pt-2 pb-14">
          <div className="overflow-hidden rounded-[24px] bg-[#0c1e38] shadow-md border border-slate-200/50">
            {/* Dark navy content box */}
            <div className="p-6 pt-7 pb-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="h-[1.5px] w-5 bg-[#009b72]" />
                <span className="font-[family-name:var(--font-sora)] text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase">
                  GET STARTED
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] text-white">
                Qualify home &amp;
                <br />
                lifestyle surplus.
              </h2>

              {/* Subtitle */}
              <p className="mt-3 text-[12px] leading-relaxed text-slate-300">
                Talk to the enterprise team about qualifying home and lifestyle surplus for your markets, or apply to be considered as a verified buyer. No availability, acceptance or outcome is promised here.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="flex h-[42px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13px] font-bold text-white shadow-xs"
                >
                  <span>Request Enterprise Demo</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link
                  href="/categories"
                  className="flex h-[42px] w-full items-center justify-center rounded-full border border-white/20 bg-transparent text-[13px] font-medium text-white"
                >
                  Back to Categories
                </Link>
              </div>
            </div>

            {/* Bottom visual photo */}
            <div className="relative aspect-[4/3] w-full bg-slate-800">
              <Image
                src="/images/home-lifestyle/hl21.jpg"
                alt="Home and lifestyle living room"
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
