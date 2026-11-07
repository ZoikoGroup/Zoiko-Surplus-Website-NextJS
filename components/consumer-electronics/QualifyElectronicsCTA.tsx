import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function QualifyElectronicsCTA() {
  return (
    <section id="qualify-electronics-cta" aria-label="Call to action" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-24 md:px-8 md:pb-28">
          <div className="relative flex min-h-[440px] w-full items-center justify-center overflow-hidden rounded-[28px] border border-slate-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
            {/* Background image ce21.png */}
            <Image
              src="/images/consumer-electronics/ce21.png"
              alt="Technician qualifying and testing electronics circuit board"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover object-center"
            />

            {/* Dark navy overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38]/85 via-[#0c1e38]/70 to-[#0c1e38]/75 backdrop-blur-[1px]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
              <h2 className="max-w-[700px] text-[36px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[48px]">
                Qualify electronics securely
                <br />
                and safely.
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#enterprise-demo"
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
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 pt-2 pb-14">
          <div className="overflow-hidden rounded-[24px] bg-[#0c1e38] shadow-lg">
            {/* Dark Navy Content Block */}
            <div className="p-6 pt-8 pb-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
                <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                  GET STARTED
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-4 text-[26px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">
                Qualify electronics
                <br />
                <span className="block my-1 text-slate-400 font-light">—</span>
                securely and safely.
              </h2>

              {/* Subtitle */}
              <p className="mt-3.5 text-[13px] leading-relaxed text-slate-300">
                Talk to the enterprise team about qualifying surplus electronics for your markets, or apply to be considered as a verified buyer. No availability, acceptance, data-erasure or outcome is promised here.
              </p>

              {/* Buttons */}
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
                  href="/categories"
                  className="flex h-[44px] w-full items-center justify-center rounded-full border border-white/20 bg-transparent text-[13.5px] font-bold text-white shadow-xs active:bg-white/10"
                >
                  Back to Categories
                </Link>
              </div>
            </div>

            {/* Bottom Visual Image ce42.jpg */}
            <div className="relative aspect-[4/3] w-full bg-slate-900">
              <Image
                src="/images/consumer-electronics/ce42.jpg"
                alt="Consumer electronics visual overview"
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
