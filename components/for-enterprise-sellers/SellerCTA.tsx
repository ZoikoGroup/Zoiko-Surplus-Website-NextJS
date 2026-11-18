import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function SellerCTA() {
  return (
    <section aria-label="Seller Call to Action" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-20 lg:px-8">
          <div className="relative min-h-[440px] lg:min-h-[480px] w-full overflow-hidden rounded-[28px] bg-[#0c1827] shadow-xl flex items-center justify-center text-center p-8 md:p-14">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/For-Enterprise-Sellers/fes32.jpg"
                alt="Forklift operator handling enterprise pallet racking in high bay facility"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1400px) 100vw, 1380px"
              />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-[#071322]/75 to-[#071322]/65" />

            {/* Content Centered */}
            <div className="relative z-10 max-w-[700px] flex flex-col items-center">
              <h2 className={`${sora} text-[38px] md:text-[48px] lg:text-[54px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white`}>
                Ready to discuss a
                <br />
                controlled surplus pathway?
              </h2>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#926016] px-7 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
                </Link>

                <Link
                  href="#seller-readiness"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/50 bg-white/5 backdrop-blur-[2px] px-7 text-[13.5px] font-medium text-white transition-colors hover:bg-white/15"
                >
                  Explore Seller Readiness
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 pb-16 pt-2">
          <div className="relative min-h-[440px] w-full overflow-hidden rounded-[24px] bg-[#0c1827] shadow-xl flex items-center justify-center text-center p-6">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/For-Enterprise-Sellers/fes32.jpg"
                alt="High bay facility"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/95 via-[#071322]/85 to-[#071322]/70" />

            {/* Content Centered */}
            <div className="relative z-10 w-full flex flex-col items-center">
              <h2 className={`${sora} text-[26px] font-extrabold leading-[1.18] tracking-[-0.03em] text-white text-left`}>
                Ready to discuss
                <br />
                a controlled
                <br />
                surplus pathway?
              </h2>

              <p className="mt-3 text-[12.5px] leading-relaxed text-[#94a3b8] text-left w-full">
                Request an enterprise conversation to evaluate your fit and the applicable market.
              </p>

              {/* Action Buttons Stacked */}
              <div className="mt-6 flex w-full flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] px-5 text-[13px] font-bold text-white shadow-sm transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <span aria-hidden="true" className="text-sm leading-none">&rarr;</span>
                </Link>

                <Link
                  href="#seller-readiness"
                  className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-[2px] px-5 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
                >
                  Explore Seller Readiness
                </Link>
              </div>

              {/* Warning Alert Notice Card */}
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#fde8c2] bg-[#fef9ee] p-3 text-left">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-[11px] leading-relaxed text-[#926016]">
                  Preview build. No demo is live or connected. All is unavailable: &ldquo;Enterprise inquiry is not available for this market through this page. Please use the published contact steps for general questions.&rdquo;
                </p>
              </div>

              {/* Bottom Disclaimer */}
              <p className="mt-4 text-[10.5px] leading-relaxed text-[#94a3b8] text-center w-full">
                This page explains an intended operating model. Not a public inventory or search marketplace for stock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
