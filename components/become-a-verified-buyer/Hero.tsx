import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const subnavTabs = [
  { name: "Market check", href: "#market-preflight" },
  { name: "Why apply", href: "#what-verification-is-for" },
  { name: "Who can apply", href: "#who-can-apply" },
  { name: "Access", href: "#what-verification-unlocks" },
];

export default function Hero() {
  return (
    <section aria-label="Become a Verified Buyer" className={`${hanken} w-full order-1 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-gradient-to-b from-white via-white to-[#faf6ef]">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-16 md:px-8 md:pt-16 md:pb-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Copy, Actions */}
            <div className="flex flex-col lg:col-span-6 xl:col-span-6">
              <h1 className="text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0f172a] lg:text-[54px] xl:text-[60px]">
                Become a
                <br />
                <span className="text-[#009b72]">Verified Buyer</span>.
              </h1>

              <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-[#556987] lg:text-[16px]">
                Apply for business-buyer participation in approved Zoiko Surplus markets. Applications are reviewed, and eligibility, category access and seller permissions are assessed separately.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
                >
                  <span>Start Buyer Application</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <a
                  href="#how-qualification-works"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#cbd5e1] bg-white px-6 text-[14px] font-bold text-[#0f172a] shadow-xs transition-colors hover:bg-slate-50"
                >
                  How buyer qualification works
                </a>
              </div>

              {/* Disclaimer Footnote */}
              <div className="mt-6 flex items-start gap-2 max-w-[500px]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p className="text-[11px] leading-[1.55] text-[#64748b]">
                  Participation is subject to review, location, category and seller authorization. This page is not a verified-member badge, and submitting does not grant access.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Photo */}
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/become-a-verified-buyer/vb1.png"
                  alt="Enterprise buyer evaluating verified surplus opportunities on modern laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white">
        <div className="px-5 pt-4 pb-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="text-[11px] text-[#64748b]">
            <div className="flex flex-wrap items-center gap-1.5">
              <Link href="/" className="hover:text-[#0f172a]">Home</Link>
              <span>/</span>
              <Link href="/solutions" className="hover:text-[#0f172a]">Solutions</Link>
              <span>/</span>
              <Link href="/solution-surplus-network" className="hover:text-[#0f172a]">Surplus Exchange</Link>
            </div>
            <div className="mt-1 font-bold text-[#0f172a]">
              Become a Verified Buyer
            </div>
          </nav>

          {/* Eyebrow */}
          <div className="mt-6 flex items-center gap-2">
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
              BUYER PARTICIPATION
            </span>
          </div>

          {/* Mobile Heading */}
          <h1 className="mt-3.5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0f172a]">
            Become a
            <br />
            <span className="text-[#009b72]">Verified Buyer</span>.
          </h1>

          {/* Mobile Description */}
          <p className="mt-4 text-[14px] leading-relaxed text-[#556987]">
            Apply for business-buyer participation in approved Zoiko Surplus markets. Applications are reviewed, and eligibility, category access and seller permissions are assessed separately.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
            >
              <span>Start Buyer Application</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <a
              href="#how-qualification-works"
              className="flex h-[46px] w-full items-center justify-center rounded-full border border-[#cbd5e1] bg-white text-[14px] font-bold text-[#0f172a] shadow-xs transition-colors hover:bg-slate-50"
            >
              How buyer qualification works
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-[10.5px] leading-relaxed text-[#64748b]">
            Participation is subject to review, location, category and seller authorization. This page is not a verified-member badge, and submitting does not grant access.
          </p>

          {/* What You'll Need Card */}
          <div className="mt-7 overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
            {/* Dark Navy Header */}
            <div className="flex items-center justify-between bg-[#0c1e38] px-4.5 py-3.5">
              <div className="flex items-center gap-2 text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-[13px] font-bold">What you&apos;ll need</span>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-[#009b72] uppercase">
                BEFORE YOU START
              </span>
            </div>

            {/* Checklist Rows */}
            <div className="divide-y divide-[#f1f5f9] px-4.5 py-2">
              {/* Row 1 */}
              <div className="flex items-start gap-3 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#d5f5eb] text-[#009b72]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-[#0f172a]">
                    Business entity details
                  </h3>
                  <p className="text-[11.5px] text-[#556987]">
                    Legal name and registered country
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-start gap-3 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#d5f5eb] text-[#009b72]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-[#0f172a]">
                    Authorized representative
                  </h3>
                  <p className="text-[11.5px] text-[#556987]">
                    Someone with authority to apply
                  </p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-start gap-3 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#d5f5eb] text-[#009b72]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[13px] font-bold text-[#0f172a]">
                    Categories &amp; markets
                  </h3>
                  <p className="text-[11.5px] text-[#556987]">
                    What you buy and where
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex items-start gap-3 py-3">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#d5f5eb] text-[#009b72]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[13px] font-bold text-[#0f172a]">
                      KYB materials
                    </h3>
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-500">
                      OPTIONAL
                    </span>
                  </div>
                  <p className="text-[11.5px] text-[#556987]">
                    Supporting documents, if available
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="flex items-start gap-2 border-t border-[#f5e6d0] bg-[#fbf5eb] px-4.5 py-3">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-[#926016]">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-[11px] leading-relaxed text-[#78350f]">
                A few minutes to start — you can save progress on this device.
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
