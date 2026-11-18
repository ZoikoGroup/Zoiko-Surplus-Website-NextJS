import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section
      aria-label="Hero - For Enterprise Sellers"
      className={`${hanken} w-full bg-gradient-to-b from-[#fdfcf9] via-[#fbf9f5]/70 to-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Content */}
            <div className="flex flex-col lg:col-span-6">
              <h1 className={`${sora} text-[44px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0c1e38]`}>
                A controlled way to
                <br />
                <span className="text-[#009b72]">move surplus</span>
                <br />
                <span className="text-[#009b72]">forward.</span>
              </h1>

              <p className="mt-6 max-w-[500px] text-[15.5px] leading-relaxed text-[#556987]">
                For enterprise teams managing eligible surplus goods, Zoiko Surplus is designed to support inventory qualification, policy-led disposition decisions, seller-authorized business demand and documented outcomes.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#926016] px-7 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
                </Link>

                <Link
                  href="#seller-readiness"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-[13.5px] font-medium text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
                >
                  Explore Seller Readiness
                </Link>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="lg:col-span-6">
              <div className="relative h-[360px] lg:h-[420px] w-full overflow-hidden rounded-2xl lg:rounded-3xl bg-slate-100 shadow-sm">
                <Image
                  src="/images/For-Enterprise-Sellers/fes1.png"
                  alt="Enterprise logistics specialist moving pallet inventory through facility"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 pt-3 pb-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11.5px] text-[#64748b]">
            <Link href="/" className="hover:text-[#0c1e38] transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-[#0c1e38] transition-colors">How It Works</span>
            <span>/</span>
            <span className="font-medium text-[#0c1e38]">For Enterprise Sellers</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-6 text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            HOW IT WORKS / FOR ENTERPRISE SELLERS
          </div>

          {/* Heading */}
          <h1 className={`${sora} mt-3 text-[30px] font-extrabold leading-[1.14] tracking-[-0.03em] text-[#0c1e38]`}>
            A controlled way to <span className="text-[#009b72]">move surplus forward.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-[14px] leading-relaxed text-[#556987]">
            For enterprise teams managing eligible surplus goods, Zoiko Surplus is designed to support inventory qualification, policy-led disposition decisions, seller-authorized business demand and documented outcomes.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Request Enterprise Demo</span>
              <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
            </Link>

            <Link
              href="#seller-readiness"
              className="flex h-[46px] w-full items-center justify-center rounded-full border border-slate-200 bg-white text-[13.5px] font-bold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
            >
              Explore Seller Readiness
            </Link>
          </div>

          {/* Warning Callout Box */}
          <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#fdecd0] bg-[#fffcf5] p-3.5 text-[#926016]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p className="text-[12px] leading-relaxed">
              Markets, categories, participants and commercial capabilities are subject to local availability, qualification, authorization and applicable contractual requirements.
            </p>
          </div>

          {/* 3-Image Collage Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Left tall image: fes33.jpg */}
            <div className="relative h-[276px] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/For-Enterprise-Sellers/fes27.jpg"
                alt="Two enterprise logistics professionals reviewing warehouse inventory"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute bottom-3 left-2.5 rounded-full bg-white/90 backdrop-blur-[2px] px-2.5 py-1 text-[10px] font-semibold text-[#0c1e38] shadow-xs">
                Seller connection
              </div>
            </div>

            {/* Right column: 2 stacked images */}
            <div className="flex flex-col gap-3">
              {/* Top right: fes34.jpg */}
              <div className="relative h-[132px] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/For-Enterprise-Sellers/fes28.jpg"
                  alt="Retail inventory coordination"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                  </svg>
                </div>
              </div>

              {/* Bottom right: fes35.jpg */}
              <div className="relative h-[132px] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/For-Enterprise-Sellers/fes29.jpg"
                  alt="Stock review and documentation"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-3 text-[11px] leading-relaxed text-[#8a9bb2]">
            Illustrative imagery only. A governed workflow protects your brand and stock.
          </p>
        </div>
      </div>
    </section>
  );
}
