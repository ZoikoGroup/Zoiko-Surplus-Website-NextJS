import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const subnavTabs = [
  { name: "What private means", href: "#what-private-means" },
  { name: "Who participates", href: "#who-can-participate" },
  { name: "Eligibility", href: "#eligibility-stages" },
  { name: "Seller rules", href: "#seller-governance" },
  { name: "FAQ", href: "#faq" },
];

export default function Hero() {
  return (
    <section aria-label="Private marketplaces" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-16 md:px-8 md:pt-10 md:pb-24">
          {/* Hero Card Container */}
          <div className="relative min-h-[460px] w-full overflow-hidden rounded-[24px] bg-[#0c1e38] shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:min-h-[500px] lg:min-h-[540px]">
            {/* Background Image */}
            <Image
              src="/images/solution-private-marketplaces/spm1.png"
              alt="Enterprise business professional working on digital tablet and laptop"
              fill
              priority
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="pointer-events-none object-cover object-center"
            />

            {/* Atmospheric gradient overlay: heavy navy on the left to transparent on right */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1f38]/95 via-[#0c1f38]/85 to-transparent lg:w-[70%]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1f38]/80 via-transparent to-transparent lg:hidden"
            />

            {/* Content Overlay */}
            <div className="relative z-10 flex min-h-[460px] flex-col justify-center px-8 py-12 sm:min-h-[500px] sm:px-12 lg:min-h-[540px] lg:max-w-[620px] lg:px-14 lg:py-16">
              <h1 className="text-[38px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[54px]">
                Private
                <br />
                marketplaces,
                <br />
                controlled by
                <br />
                <span className="text-[#009b72]">eligibility.</span>
              </h1>

              <p className="mt-5 text-[14.5px] leading-[1.6] text-white/85 sm:text-[15.5px]">
                Zoiko Surplus is designed to help enterprises direct surplus opportunities toward qualified business audiences under seller-defined and market-specific rules.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="/contact"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
                >
                  Request Enterprise Demo
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="/contact"
                  className="inline-flex h-[46px] items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 text-[14px] font-semibold text-white backdrop-blur-xs transition-colors hover:border-white/70 hover:bg-white/10"
                >
                  Apply to Become a Buyer
                </a>
              </div>

              {/* Footnote */}
              <p className="mt-5 flex items-start gap-1.5 text-[11px] leading-[1.5] text-white/60">
                <span className="mt-0.5 shrink-0 text-white/50">*</span>
                <span>
                  Applying does not guarantee approval, invitation, visibility or transaction access. Availability depends on market, category, organization, role and approved participation rules.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 pt-4 pb-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="text-[11px] text-[#64748b]">
            <div className="flex flex-wrap items-center gap-1.5">
              <Link href="/" className="hover:text-[#0f172a]">Home</Link>
              <span>/</span>
              <Link href="/solutions" className="hover:text-[#0f172a]">Solutions</Link>
              <span>/</span>
              <Link href="/solution-surplus-network" className="hover:text-[#0f172a]">Surplus Exchange</Link>
              <span>/</span>
            </div>
            <div className="mt-1 font-bold text-[#0f172a]">
              Private Marketplaces
            </div>
          </nav>

          {/* Eyebrow */}
          <div className="mt-6 flex items-center gap-2">
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
              SURPLUS EXCHANGE · PRIVATE MARKETPLACES
            </span>
          </div>

          {/* Mobile Heading */}
          <h1 className="mt-3.5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0f172a]">
            Private
            <br />
            marketplaces,
            <br />
            controlled by
            <br />
            <span className="text-[#009b72]">eligibility</span>.
          </h1>

          {/* Mobile Description */}
          <div className="mt-4 flex flex-col gap-3 text-[14px] leading-relaxed text-[#556987]">
            <p>
              Zoiko Surplus is designed to help enterprises direct surplus opportunities toward qualified business audiences under seller-defined and market-specific rules.
            </p>
            <p>
              Access is not public, and participation is subject to review and authorization.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
            >
              <span>Request Enterprise Demo</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="flex h-[46px] w-full items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[14px] font-bold text-[#0f172a] shadow-xs transition-colors hover:bg-slate-50"
            >
              Apply to Become a Buyer
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-[10.5px] leading-relaxed text-[#64748b]">
            * Applying does not guarantee approval, invitation, visibility or transaction access. Availability depends on market, category, organization, role and approved participation rules.
          </p>

          {/* Opportunities Access Controlled Card */}
          <div className="relative mt-7 overflow-hidden rounded-[20px] bg-[#0c1e38] p-5 shadow-[0_8px_30px_rgba(12,30,56,0.18)]">
            {/* Header */}
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-[11px] font-bold tracking-wider text-[#009b72] uppercase">
                OPPORTUNITIES — ACCESS CONTROLLED
              </span>
            </div>

            {/* 4 Rows */}
            <div className="mt-4 flex flex-col gap-2.5">
              {/* Row 1: Locked */}
              <div className="flex items-center justify-between rounded-[12px] border border-white/10 bg-white/5 px-3.5 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex size-7 items-center justify-center rounded-[8px] bg-white/10 text-slate-300">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2 w-28 rounded-full bg-slate-500/40" />
                    <div className="h-1.5 w-16 rounded-full bg-slate-600/30" />
                  </div>
                </div>
                <span className="rounded bg-white/5 px-2 py-0.5 text-[9.5px] font-bold tracking-wider text-slate-400">
                  LOCKED
                </span>
              </div>

              {/* Row 2: Locked */}
              <div className="flex items-center justify-between rounded-[12px] border border-white/10 bg-white/5 px-3.5 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex size-7 items-center justify-center rounded-[8px] bg-white/10 text-slate-300">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2 w-32 rounded-full bg-slate-500/40" />
                    <div className="h-1.5 w-20 rounded-full bg-slate-600/30" />
                  </div>
                </div>
                <span className="rounded bg-white/5 px-2 py-0.5 text-[9.5px] font-bold tracking-wider text-slate-400">
                  LOCKED
                </span>
              </div>

              {/* Row 3: Entitled (Active) */}
              <div className="flex items-center justify-between rounded-[12px] border border-[#009b72]/40 bg-[#009b72]/10 px-3.5 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex size-7 items-center justify-center rounded-[8px] bg-[#009b72]/20 text-[#009b72]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2 w-32 rounded-full bg-[#009b72]/50" />
                    <div className="h-1.5 w-24 rounded-full bg-[#009b72]/30" />
                  </div>
                </div>
                <span className="rounded border border-[#009b72]/40 bg-[#009b72]/20 px-2 py-0.5 text-[9.5px] font-bold tracking-wider text-[#009b72]">
                  ENTITLED
                </span>
              </div>

              {/* Row 4: Locked */}
              <div className="flex items-center justify-between rounded-[12px] border border-white/10 bg-white/5 px-3.5 py-2.5">
                <div className="flex items-center gap-3">
                  <div className="flex size-7 items-center justify-center rounded-[8px] bg-white/10 text-slate-300">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-2 w-28 rounded-full bg-slate-500/40" />
                    <div className="h-1.5 w-16 rounded-full bg-slate-600/30" />
                  </div>
                </div>
                <span className="rounded bg-white/5 px-2 py-0.5 text-[9.5px] font-bold tracking-wider text-slate-400">
                  LOCKED
                </span>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-[10.5px] leading-tight text-slate-300">
                Only seller-entitled, verified users see unlocked opportunities — and only where the market is active.
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Subnav Tabs */}
        <div className="border-y border-[#eef2f6] bg-white">
          <div className="flex items-center gap-6 overflow-x-auto px-5 py-3 text-[12.5px] font-semibold whitespace-nowrap text-[#556987]">
            {subnavTabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className="transition-colors hover:text-[#0f172a]"
              >
                {tab.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
