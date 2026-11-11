import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const rules = [
  "Keep public enquiries and case work separate",
  "Verify who you are before account data is discussed",
  "Never post case details in the general form",
];

export default function SupportEscalation() {
  return (
    <section
      id="support-escalation"
      aria-labelledby="support-escalation-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Visual Photo (sc7.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-[0_10px_30px_rgba(12,30,56,0.08)]">
                <Image
                  src="/images/Surplus-Contact/sc7.jpg"
                  alt="Participant reviewing verified account support guidelines"
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
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  SUPPORT ESCALATION
                </span>
              </div>

              {/* Heading */}
              <h2
                id="support-escalation-heading"
                className="mt-3.5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[40px] lg:text-[44px]"
              >
                Existing participants use
                <br />
                the secure support path.
              </h2>

              {/* Subtitle */}
              <p className="mt-3.5 max-w-[540px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Cases about a current account, listing or transaction are handled at /support after secure verification. Public email responses never disclose private case details.
              </p>

              {/* 3 Checkmark Items */}
              <div className="mt-6 flex flex-col gap-3">
                {rules.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[13px] text-[#0c1e38]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="#general-inquiry"
                  className="inline-flex h-[42px] items-center justify-center rounded-full border border-slate-200 bg-white px-5.5 text-[12.5px] font-bold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
                >
                  Contact Support
                </Link>
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
          {/* Top Visual Photo (sc15.jpg) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/Surplus-Contact/sc15.jpg"
              alt="Participant reviewing verified account support guidelines"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className={`${sora} mt-6 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            SUPPORT ESCALATION
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Existing participants use the secure support path.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Cases about a current account, listing or transaction are handled at /support after secure verification. Public email responses never disclose private case details.
          </p>

          <div className="mt-5 flex flex-col gap-2.5 text-[12.5px] text-[#0c1e38]">
            {rules.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#009b72"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="#general-inquiry"
              className="inline-flex h-[40px] items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-[12px] font-bold text-[#0c1e38] shadow-2xs"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
