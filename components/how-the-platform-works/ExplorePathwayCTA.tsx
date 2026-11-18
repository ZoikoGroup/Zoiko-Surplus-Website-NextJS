import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function ExplorePathwayCTA() {
  return (
    <section aria-label="Explore Pathway Call to Action" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-20 lg:px-8">
          <div className="relative min-h-[440px] lg:min-h-[480px] w-full overflow-hidden rounded-[28px] bg-[#0c1827] shadow-xl flex items-center justify-center text-center p-8 md:p-14">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/How-the-Platform-Works/htpw29.jpg"
                alt="Business executives and logistics coordinators discussing enterprise surplus pathways"
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
                Explore the pathway that
                <br />
                fits your organization.
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
                  href="/become-a-verified-buyer"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/50 bg-white/5 backdrop-blur-[2px] px-7 text-[13.5px] font-medium text-white transition-colors hover:bg-white/15"
                >
                  Become a Verified Buyer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 pt-2 pb-12">
          <div className="relative overflow-hidden rounded-[26px] bg-[#0c1827] shadow-xl p-6 pt-10 pb-8">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/How-the-Platform-Works/htpw29.jpg"
                alt="Warehouse logistics infrastructure"
                fill
                className="object-cover object-center opacity-40"
                sizes="100vw"
              />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/95 via-[#071322]/85 to-[#071322]/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className={`${sora} text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white`}>
                Explore the pathway that fits your organization.
              </h2>

              <p className="mt-3 text-[13.5px] leading-relaxed text-[#cbd5e1]">
                Request an enterprise conversation, or learn what verified participation means for buyers.
              </p>

              {/* Action Buttons Stack */}
              <div className="mt-6 flex w-full flex-col gap-3">
                <Link
                  href="/contact"
                  className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
                </Link>

                <Link
                  href="/become-a-verified-buyer"
                  className="flex h-[46px] w-full items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-[2px] text-[13.5px] font-medium text-white transition-colors hover:bg-white/10"
                >
                  Become a Verified Buyer
                </Link>
              </div>

              {/* Preview Build Notice Box */}
              <div className="mt-6 w-full rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3.5 text-left text-[#926016]">
                <div className="flex items-start gap-2.5">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <p className="text-[11.5px] leading-relaxed">
                    Preview build. No form is connected. If a pathway is unavailable: &ldquo;This pathway is not currently available for the selected market or category. No launch date is implied.&rdquo;
                  </p>
                </div>
              </div>

              {/* Fine Print */}
              <p className="mt-4 text-[11px] leading-relaxed text-[#94a3b8]">
                Application is not KYB approval or private-market access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
