import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Report an Issue - Hero" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-8 lg:px-8">
          <div className="relative min-h-[460px] lg:min-h-[490px] w-full overflow-hidden rounded-[28px] bg-[#0c1827] shadow-xl flex items-center p-8 md:p-14 lg:p-16">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/Report-an-Issue/r1.png"
                alt="Trust & safety specialist reviewing documentation"
                fill
                priority
                className="object-cover object-right"
                sizes="(max-width: 1400px) 100vw, 1380px"
              />
            </div>

            {/* Dark gradient overlay (heavy on left for text legibility, transparent on right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#071322]/80 to-transparent" />

            {/* Content Left-Aligned */}
            <div className="relative z-10 max-w-[620px]">
              <h1 className={`${sora} text-[44px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.03em] text-white`}>
                Report an <span className="text-[#00c48c]">Issue</span>
              </h1>

              <p className="mt-4 text-[16px] lg:text-[17px] leading-relaxed text-[#cbd5e1]">
                Tell us about a trust or safety concern.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#issue-classification"
                  className="inline-flex h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#926016] px-7 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#784f12]"
                >
                  <span>Choose an issue type</span>
                  <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
                </Link>

                <Link
                  href="#report-form"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/50 bg-white/5 backdrop-blur-[2px] px-7 text-[13.5px] font-medium text-white transition-colors hover:bg-white/15"
                >
                  See the report form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 pt-4 pb-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-[#556987]">
            <Link href="/" className="hover:text-[#0c1e38] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/trust-and-safety" className="hover:text-[#0c1e38] transition-colors">Trust &amp; Safety</Link>
            <span>/</span>
            <span className="text-[#0c1e38] font-medium">Report an Issue</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-4">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              TRUST &amp; SAFETY
            </span>
          </div>

          {/* Heading */}
          <h1 className={`${sora} mt-2 text-[32px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38]`}>
            Report an <span className="text-[#00c48c]">Issue</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-[14px] leading-relaxed text-[#556987]">
            Tell us about a trust or safety concern.
          </p>

          {/* Emergency Alert Banner */}
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#fed7d7] bg-[#fff5f5] p-3.5">
            <svg
              className="size-4 shrink-0 text-[#e53e3e] mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p className="text-[11.5px] leading-[1.45] text-[#c53030]">
              <span className="font-semibold">If in immediate danger, contact local emergency services.</span> We cannot provide crisis response or urgent help.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="#issue-classification"
              className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Choose an issue type</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>

            <Link
              href="#report-form"
              className="flex h-[46px] w-full items-center justify-center rounded-full border border-slate-300 bg-white text-[13.5px] font-semibold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
            >
              See the report form
            </Link>
          </div>

          {/* Mobile Images Grid */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {/* Left Tall Image */}
            <div className="relative h-[264px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs">
              <Image
                src="/images/Report-an-Issue/r30.jpg"
                alt="Warehouse worker checking inventory shelves"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-[2px] px-2.5 py-0.5 text-[10px] font-medium text-[#0c1e38] shadow-xs">
                Verified intake context
              </div>
            </div>

            {/* Right Stacked Images */}
            <div className="flex flex-col gap-3">
              <div className="relative h-[126px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Report-an-Issue/r31.jpg"
                  alt="Quality inspector examining package"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-2xs backdrop-blur-[2px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
              </div>

              <div className="relative h-[126px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Report-an-Issue/r32.jpg"
                  alt="Specialist inspecting item details"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-2xs backdrop-blur-[2px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-2 text-[11px] text-[#94a3b8]">
            Illustrative imagery only.
          </p>
        </div>
      </div>
    </section>
  );
}
