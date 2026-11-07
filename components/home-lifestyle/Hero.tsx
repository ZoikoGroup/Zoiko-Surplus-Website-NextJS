import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Home and Lifestyle Surplus" className={`${hanken} w-full bg-gradient-to-b from-[#fbf8f3] via-[#faf6ee]/70 to-[#fdfbf7]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-24 md:px-8 md:pt-20 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Subtitle, Actions */}
            <div className="flex flex-col lg:col-span-6">
              <h1 className="text-[52px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0c1e38] lg:text-[60px]">
                Home &amp; <span className="text-[#009b72]">Lifestyle</span>
                <br />
                surplus.
              </h1>

              <p className="mt-6 max-w-[500px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Explore how eligible surplus home and lifestyle goods may be reviewed for controlled business-to-business disposition — subject to product, market and participant approvals.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  href="/become-a-verified-buyer"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-[13.5px] font-bold text-[#0c1e38] shadow-xs transition-colors hover:bg-slate-50"
                >
                  Become a Verified Buyer
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Composition with Overlapping Cards */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto w-full max-w-[520px] pb-6 pr-6">
                {/* Background Large Image (hl1.jpg) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px] bg-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
                  <Image
                    src="/images/home-lifestyle/hl1.jpg"
                    alt="Home and lifestyle modern living space with couch and potted plant"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  {/* Floating Pill Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-[#475569] backdrop-blur-xs shadow-xs">
                      <span className="size-1.5 rounded-full bg-[#475569]" />
                      Conditional overview
                    </span>
                  </div>
                </div>

                {/* Overlapping Foreground Card (hl2.jpg) */}
                <div className="absolute -bottom-4 -right-2 z-20 w-[240px] sm:w-[280px] aspect-[4/3] overflow-hidden rounded-[20px] border-[4px] border-white shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
                  <Image
                    src="/images/home-lifestyle/hl2.jpg"
                    alt="Sunlit dining room and living space interior"
                    fill
                    sizes="(max-width: 640px) 240px, 280px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 pt-3 pb-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#556987]">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/categories" className="hover:underline">Categories</Link>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-[#0c1e38]">Home &amp; Lifestyle</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-4 flex items-center gap-2">
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CATEGORIES · HOME &amp; LIFESTYLE
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0c1e38]">
            Home &amp;
            <br />
            <span className="text-[#009b72]">Lifestyle</span>
            <br />
            surplus.
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[13px] leading-relaxed text-[#556987]">
            Explore how eligible surplus home and lifestyle goods may be reviewed for controlled business-to-business disposition — subject to product, market and participant approvals.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-col gap-2.5">
            <Link
              href="/contact"
              className="flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs active:bg-[#784f12]"
            >
              <span>Request Enterprise Demo</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              href="/become-a-verified-buyer"
              className="flex h-[44px] w-full items-center justify-center rounded-full border border-slate-200 bg-white text-[13.5px] font-bold text-[#0c1e38] shadow-xs active:bg-slate-50"
            >
              Become a Verified Buyer
            </Link>
          </div>

          {/* Microcopy disclaimer */}
          <p className="mt-3 text-[10px] leading-relaxed text-[#718096]">
            * Category information is educational. Trading access and eligible goods vary by market and approval status; a buyer application does not grant access.
          </p>

          {/* Visual Card (hl21.jpg) */}
          <div className="relative mt-5 aspect-[4/3] w-full overflow-hidden rounded-[18px] border border-slate-100 shadow-sm">
            <Image
              src="/images/home-lifestyle/hl17.jpg"
              alt="Home and lifestyle living space overview"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-[#475569] backdrop-blur-xs shadow-xs">
                <span className="size-1.5 rounded-full bg-[#475569]" />
                Conditional overview
              </span>
            </div>
          </div>

          {/* Sub-nav horizontal strip */}
          <div className="mt-6 flex items-center justify-between overflow-x-auto border-b border-[#f1ede6] pb-3 text-[11px] font-medium text-[#556987]">
            <a href="#category-status" className="whitespace-nowrap hover:text-[#0c1e38]">Status</a>
            <a href="#category-definition" className="whitespace-nowrap hover:text-[#0c1e38]">Definition</a>
            <a href="#subcategory-families" className="whitespace-nowrap hover:text-[#0c1e38]">Subcategories</a>
            <a href="#scope-exclusions" className="whitespace-nowrap hover:text-[#0c1e38]">Scope</a>
            <a href="#qualification-provenance" className="whitespace-nowrap hover:text-[#0c1e38]">Qualification</a>
          </div>
        </div>
      </div>
    </section>
  );
}
