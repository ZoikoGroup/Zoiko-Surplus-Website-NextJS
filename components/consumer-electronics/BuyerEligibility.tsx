import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const criteria = [
  {
    title: "Verified business buyers",
    description: "Electronics buyers are verified for the categories and markets they operate in.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Responsible-handling fit",
    description: "Buyers must be able to handle data-bearing and hazard-class items appropriately.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "No public catalog",
    description: "Confidential stock, serials, prices and identities are never exposed publicly.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
];

export default function BuyerEligibility() {
  return (
    <section id="buyer-eligibility" aria-labelledby="buyer-eligibility-heading" className={`${hanken} w-full bg-[#0c1e38] text-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Visual Photo (ce10.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/consumer-electronics/ce10.jpg"
                  alt="Verified business buyer point of sale terminal qualification"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy, 3 Cards, Button */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
                <span className={`${sora} text-[11px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                  BUYER ELIGIBILITY
                </span>
              </div>

              {/* Heading */}
              <h2
                id="buyer-eligibility-heading"
                className="mt-3.5 text-[34px] font-extrabold leading-[1.14] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[44px]"
              >
                Who can be considered
                <br />
                to buy.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-slate-300 sm:text-[16px]">
                Electronics adds responsible-handling expectations on top of standard buyer verification.
              </p>

              {/* 3 Qualification Cards */}
              <div className="mt-8 flex flex-col gap-3.5">
                {criteria.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 rounded-[16px] border border-white/10 bg-white/5 p-4 backdrop-blur-xs transition-colors hover:bg-white/[0.08]"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-[#0c2f3d] text-[#009b72]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[14px] font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] leading-relaxed text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <Link
                  href="/become-a-verified-buyer"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
                >
                  <span>Become a Verified Buyer</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

              {/* Footnote Notice */}
              <div className="mt-4 flex items-start gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-slate-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p className="text-[11px] leading-relaxed text-slate-400">
                  A definition of scope — not a claim of exclusivity, legal entitlement or guaranteed acceptance. Every lot is qualified individually.
                </p>
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
          {/* Visual Photo (ce32.jpg) */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] border border-white/10 shadow-md">
            <Image
              src="/images/consumer-electronics/ce32.jpg"
              alt="Buyer eligibility transaction"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Eyebrow */}
          <div className="mt-6 flex items-center gap-2">
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              BUYER ELIGIBILITY
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">
            Who can be considered to buy.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-slate-300">
            Electronics adds responsible-handling expectations on top of standard buyer verification.
          </p>

          {/* 3 Qualification Items */}
          <div className="mt-6 flex flex-col gap-4">
            {criteria.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#0c2f3d] text-[#009b72]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Link
              href="/become-a-verified-buyer"
              className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs active:bg-[#784f12]"
            >
              <span>Become a Verified Buyer</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
