import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Hero - How the Platform Works" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-10 lg:px-8">
          <div className="relative min-h-[480px] lg:min-h-[510px] w-full overflow-hidden rounded-[28px] bg-[#0c1827] shadow-lg flex items-center">
            {/* Background warehouse photo */}
            <div className="absolute inset-0">
              <Image
                src="/images/How-the-Platform-Works/htpw1.png"
                alt="Two enterprise logistics professionals in warehouse"
                fill
                priority
                className="object-cover object-right lg:object-[82%_center]"
                sizes="(max-width: 1400px) 100vw, 1380px"
              />
            </div>

            {/* Dark gradient overlay for strong contrast and text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322] via-[#071322]/90 md:via-[#071322]/80 to-transparent md:w-[70%] lg:w-[62%]" />

            {/* Content */}
            <div className="relative z-10 max-w-[640px] px-8 py-12 md:px-14 md:py-16">
              <h1 className={`${sora} text-[44px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white`}>
                A governed path from
                <br />
                <span className="text-[#009b72]">surplus to outcome.</span>
              </h1>

              <p className="mt-6 max-w-[540px] text-[15.5px] lg:text-[16px] leading-relaxed text-[#c6d4e4] font-normal">
                Zoiko Surplus is designed to help enterprises qualify eligible surplus goods, apply appropriate controls, reach seller-authorized business demand, assist permitted recovery routes, and document outcomes and exceptions.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
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
        <div className="w-full px-5 pt-3 pb-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11.5px] text-[#64748b]">
            <Link href="/" className="hover:text-[#0c1e38] transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-[#0c1e38] transition-colors">How It Works</span>
            <span>/</span>
            <span className="font-medium text-[#0c1e38]">How the Platform Works</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-6 text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            HOW ZOIKO SURPLUS WORKS
          </div>

          {/* Heading */}
          <h1 className={`${sora} mt-3 text-[30px] font-extrabold leading-[1.14] tracking-[-0.03em] text-[#0c1e38]`}>
            A governed path from <span className="text-[#009b72]">surplus to outcome.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-[14px] leading-relaxed text-[#556987]">
            Zoiko Surplus is designed to help enterprises qualify eligible surplus goods, apply appropriate controls, reach seller-authorized business demand, select permitted recovery routes, and document outcomes and exceptions.
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
              href="/become-a-verified-buyer"
              className="flex h-[46px] w-full items-center justify-center rounded-full border border-slate-200 bg-white text-[13.5px] font-bold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
            >
              Become a Verified Buyer
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
              Markets, categories, participants and commercial capabilities are subject to local availability, qualification, authorization and applicable agreements.
            </p>
          </div>

          {/* 3-Image Collage Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Left tall image: htpw30.jpg */}
            <div className="relative h-[276px] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/How-the-Platform-Works/htpw24.jpg"
                alt="Two warehouse operators reviewing equipment"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute bottom-3 left-2.5 rounded-full bg-white/90 backdrop-blur-[2px] px-2.5 py-1 text-[10px] font-semibold text-[#0c1e38] shadow-xs">
                Seven connected stages
              </div>
            </div>

            {/* Right column: 2 stacked images */}
            <div className="flex flex-col gap-3">
              {/* Top right: htpw31.jpg */}
              <div className="relative h-[132px] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw25.jpg"
                  alt="Warehouse pallet high bay storage"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
              </div>

              {/* Bottom right: htpw32.jpg */}
              <div className="relative h-[132px] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw26.jpg"
                  alt="Gloved hands packaging electronic goods"
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
            Illustrative imagery only. No live listings, dashboards or counterparties are shown.
          </p>
        </div>
      </div>
    </section>
  );
}
