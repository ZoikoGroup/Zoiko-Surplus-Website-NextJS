import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Consumer Electronics Surplus" className={`${hanken} w-full bg-white pt-3 pb-6 md:pt-8 md:pb-8`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[460px] w-full overflow-hidden rounded-[28px] border border-slate-800/40 bg-[#0b1727] shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
            {/* Blurred Background Layer with ce1.png */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/consumer-electronics/ce1.png"
                alt=""
                fill
                priority
                className="scale-110 object-cover opacity-35 blur-[8px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b1727]/95 via-[#0b1727]/85 to-[#0b1727]/60" />
            </div>

            {/* Grid Content */}
            <div className="relative z-10 grid grid-cols-1 items-center gap-10 p-10 sm:p-12 lg:grid-cols-12 lg:gap-12 lg:p-16">
              {/* Left Column: Heading, Subtitle, Actions */}
              <div className="flex flex-col lg:col-span-7">
                <h1 className="text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[58px]">
                  Consumer
                  <br />
                  <span className="text-[#009b72]">Electronics</span> surplus.
                </h1>

                <p className="mt-5 max-w-[500px] text-[15px] leading-relaxed text-slate-300 sm:text-[16px]">
                  Explore how eligible surplus electronics may be qualified for seller-controlled business disposition — with attention to product condition, safety, provenance and information security.
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/contact"
                    className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
                  >
                    <span>Request Enterprise Demo</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>

                  <Link
                    href="/become-a-verified-buyer"
                    className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 text-[13.5px] font-bold text-white backdrop-blur-xs transition-colors hover:bg-white/10"
                  >
                    Become a Verified Buyer
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Card (ce1.png) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[20px] border border-white/20 shadow-2xl">
                  <Image
                    src="/images/consumer-electronics/ce1.png"
                    alt="Inspection and qualification of consumer electronics laptops"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
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
        <div className="w-full px-4 pt-1 pb-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#556987]">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/categories" className="hover:underline">Categories</Link>
            <span className="text-slate-300">/</span>
            <span className="font-semibold text-[#0c1e38]">Consumer Electronics</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-4 flex items-center gap-2">
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              CATEGORIES · CONSUMER ELECTRONICS
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-3 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0c1e38]">
            Consumer
            <br />
            <span className="text-[#009b72]">Electronics</span>
            <br />
            surplus.
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[13px] leading-relaxed text-[#556987]">
            Explore how eligible surplus electronics may be qualified for seller-controlled business disposition — with attention to product condition, safety, provenance and information security.
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

          {/* Disclaimer microcopy */}
          <p className="mt-3 text-[10px] leading-relaxed text-[#718096]">
            * A conditional public educational overview. Category access and available pathways depend on market activation, product eligibility, applicable law and counterparty approval.
          </p>

          {/* 2x2 Feature Cards Grid */}
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            {/* Card 1: Data security */}
            <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#f0ede6] bg-[#fbf9f5] py-3.5 px-3 text-center">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#e6f7f2] text-[#009b72]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="mt-2 text-[11.5px] font-bold text-[#0c1e38]">Data security</span>
            </div>

            {/* Card 2: Battery safety */}
            <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#f0ede6] bg-[#fbf9f5] py-3.5 px-3 text-center">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#e6f7f2] text-[#009b72]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="mt-2 text-[11.5px] font-bold text-[#0c1e38]">Battery safety</span>
            </div>

            {/* Card 3: Provenance */}
            <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#f0ede6] bg-[#fbf9f5] py-3.5 px-3 text-center">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#e6f7f2] text-[#009b72]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 14 14" />
                </svg>
              </div>
              <span className="mt-2 text-[11.5px] font-bold text-[#0c1e38]">Provenance</span>
            </div>

            {/* Card 4: Recall screen */}
            <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#f0ede6] bg-[#fbf9f5] py-3.5 px-3 text-center">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#e6f7f2] text-[#009b72]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="mt-2 text-[11.5px] font-bold text-[#0c1e38]">Recall screen</span>
            </div>
          </div>

          {/* Visual Card ce22.jpg */}
          <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-[18px] border border-slate-100 shadow-sm">
            <Image
              src="/images/consumer-electronics/ce22.jpg"
              alt="Consumer electronics visual overview"
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

          {/* Sub-nav horizontal pills */}
          <div className="mt-6 flex items-center justify-between border-b border-[#f1ede6] pb-3 text-[11.5px] font-medium text-[#556987]">
            <a href="#category-availability" className="hover:text-[#0c1e38]">Status</a>
            <a href="#product-families" className="hover:text-[#0c1e38]">Product families</a>
            <a href="#condition-model" className="hover:text-[#0c1e38]">Condition</a>
            <a href="#information-security" className="hover:text-[#0c1e38]">Data security</a>
          </div>
        </div>
      </div>
    </section>
  );
}
