import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section
      aria-label="Industry pathways for governed surplus"
      className={`${hanken} w-full bg-gradient-to-b from-[#fdfcf9] via-[#fbf9f5]/80 to-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-22">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Heading, Copy, Actions, Status Banner */}
            <div className="flex flex-col lg:col-span-6">
              <h1 className="text-[48px] font-extrabold leading-[1.06] tracking-[-0.03em] text-[#0c1e38] lg:text-[58px]">
                Industry pathways
                <br />
                for <span className="text-[#009b72]">governed</span>
                <br />
                <span className="text-[#009b72]">surplus.</span>
              </h1>

              <p className="mt-6 max-w-[520px] text-[15.5px] leading-relaxed text-[#556987] sm:text-[16px]">
                Explore how surplus disposition needs differ across product sectors, from apparel and household goods to specialized business inventory. Participation and available pathways depend on category, country, safety requirements and approval.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                <Link
                  href="#industry-coverage-meaning"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-[13.5px] font-bold text-[#0c1e38] shadow-xs transition-colors hover:bg-slate-50"
                >
                  Explore Categories
                </Link>
              </div>

              {/* Status Warning Box */}
              <div className="mt-6 flex max-w-[520px] items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf7e7] px-4 py-3 text-[12px] leading-relaxed text-[#7c5c2b]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>
                  <strong className="font-bold text-[#6b4b1e]">Status:</strong> These sector descriptions explain potential use cases. They do not confirm that a category or market is currently active.
                </span>
              </div>
            </div>

            {/* Right Column: Staggered 2x2 Visual Grid (sis1..sis4) */}
            <div className="lg:col-span-6">
              <div className="ml-auto grid max-w-[490px] grid-cols-2 gap-4">
                {/* Left Stacked Pair */}
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_10px_28px_rgba(12,30,56,0.08)]">
                    <Image
                      src="/images/Industries-Served/sis1.jpg"
                      alt="Apparel surplus pathway"
                      fill
                      priority
                      sizes="240px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                      Apparel
                    </span>
                  </div>

                  <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_10px_28px_rgba(12,30,56,0.08)]">
                    <Image
                      src="/images/Industries-Served/sis3.jpg"
                      alt="Home and household goods surplus pathway"
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                      Home
                    </span>
                  </div>
                </div>

                {/* Right Staggered Pair */}
                <div className="mt-7 flex flex-col gap-4">
                  <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_10px_28px_rgba(12,30,56,0.08)]">
                    <Image
                      src="/images/Industries-Served/sis2.jpg"
                      alt="Consumer electronics surplus pathway"
                      fill
                      priority
                      sizes="240px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                      Electronics
                    </span>
                  </div>

                  <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_10px_28px_rgba(12,30,56,0.08)]">
                    <Image
                      src="/images/Industries-Served/sis4.jpg"
                      alt="Industrial inventory surplus pathway"
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                      Industrial
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-gradient-to-b from-[#fbf7f0] to-[#fdfbf8]">
        <div className="w-full px-5 pt-4 pb-9">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] text-[#718096]">
            <Link href="/" className="hover:text-[#0c1e38]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#0c1e38]">Company</Link>
            <span>/</span>
            <span className="font-semibold text-[#0c1e38]">Industries Served</span>
          </nav>

          <p className={`${sora} mt-5 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            INDUSTRIES SERVED
          </p>

          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0c1e38]">
            Industry
            <br />
            pathways for
            <br />
            <span className="text-[#009b72]">governed surplus.</span>
          </h1>

          <p className="mt-3.5 text-[13.5px] leading-relaxed text-[#556987]">
            Explore how surplus disposition needs differ across product sectors, from apparel and household goods to specialized business inventory. Participation and available pathways depend on category, country, safety requirements, and approval.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col items-start gap-2.5">
            <Link
              href="/contact"
              className="inline-flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13px] font-bold text-white shadow-xs"
            >
              <span>Request Enterprise Demo</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              href="#industry-coverage-meaning"
              className="inline-flex h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-[13px] font-bold text-[#0c1e38] shadow-2xs"
            >
              Explore Categories
            </Link>
          </div>

          {/* Status Banner */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf7e7] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>
              <strong className="font-bold text-[#6b4b1e]">Status:</strong> These sector descriptions explain potential use cases. They do not confirm that a category or market is currently active.
            </span>
          </div>

          {/* Staggered 2x2 Visual Grid (sis20..sis23) */}
          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-xs">
                <Image
                  src="/images/Industries-Served/sis20.jpg"
                  alt="Apparel surplus pathway"
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-[#0c1e38] shadow-xs">
                  Apparel
                </span>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-xs">
                <Image
                  src="/images/Industries-Served/sis22.jpg"
                  alt="Home surplus pathway"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-[#0c1e38] shadow-xs">
                  Home
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-xs">
                <Image
                  src="/images/Industries-Served/sis21.jpg"
                  alt="Electronics surplus pathway"
                  fill
                  priority
                  sizes="50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-[#0c1e38] shadow-xs">
                  Electronics
                </span>
              </div>

              <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-xs">
                <Image
                  src="/images/Industries-Served/sis23.jpg"
                  alt="Industrial surplus pathway"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-[#0c1e38] shadow-xs">
                  Industrial
                </span>
              </div>
            </div>
          </div>

          <p className="mt-3 text-[10.5px] leading-relaxed text-[#718096]">
            Illustrative imagery only. It does not depict Zoiko Surplus inventory, warehouses or customers.
          </p>
        </div>
      </div>
    </section>
  );
}
