import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function SafetySubcategoryBanner() {
  return (
    <section id="safety-subcategory-banner" aria-label="Safety by subcategory" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-14 md:px-8 md:pt-20 md:pb-16">
          <div className="grid grid-cols-1 overflow-hidden rounded-[26px] bg-[#0c1e38] shadow-[0_12px_40px_rgba(0,0,0,0.14)] lg:grid-cols-12">
            {/* Left Column: Content */}
            <div className="flex flex-col justify-center p-10 sm:p-12 lg:col-span-6 lg:p-16">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
                <span className={`${sora} text-[11px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                  SAFETY BY SUBCATEGORY
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-4 text-[32px] font-extrabold leading-[1.14] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]">
                Every subcategory
                <br />
                carries its own safety
                <br />
                rules.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[460px] text-[15px] leading-relaxed text-slate-300">
                Flammability, food-contact, hygiene and electrical checks differ by product &mdash; and any of them can stop a lot.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="#trust-and-safety"
                  className="inline-flex h-[46px] items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 text-[13.5px] font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/10"
                >
                  Trust &amp; Safety
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Photo (hl14.jpg) */}
            <div className="relative min-h-[380px] w-full lg:col-span-6">
              <Image
                src="/images/home-lifestyle/hl14.jpg"
                alt="Living room sofa with colorful cushions and floor lamp"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-6">
          <div className="relative overflow-hidden rounded-[20px] bg-[#0c1e38] text-white shadow-md">
            {/* Background photo with right alignment and dark gradient */}
            <div className="absolute inset-0">
              <Image
                src="/images/home-lifestyle/hl14.jpg"
                alt="Living room sofa"
                fill
                sizes="100vw"
                className="object-cover object-right opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38] via-[#0c1e38]/85 to-transparent" />
            </div>

            {/* Content on top */}
            <div className="relative z-10 p-6 pt-7 pb-6">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="h-[1.5px] w-5 bg-[#009b72]" />
                <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                  SAFETY BY SUBCATEGORY
                </span>
              </div>

              <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] text-white">
                Every subcategory carries its own safety rules.
              </h2>

              <p className="mt-2.5 text-[12.5px] leading-relaxed text-slate-300">
                Flammability, food-contact, hygiene and electrical checks differ by product — and any of them can stop a lot.
              </p>

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
                  href="#trust-and-safety"
                  className="flex h-[42px] w-full items-center justify-center rounded-full border border-white/20 bg-transparent text-[13px] font-medium text-white"
                >
                  Trust &amp; Safety
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
