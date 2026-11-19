import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Product Safety - Hero" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-16 lg:px-8">
          {/* Top Hero: Two Columns */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Subtitle, Actions, Disclaimer */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className={`${sora} text-[44px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0c1e38]`}>
                Product <span className="text-[#00c48c]">Safety</span>
              </h1>

              <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-relaxed text-[#556987]">
                Understand how condition, traceability and category-specific requirements shape responsible surplus disposition.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#safety-requirements"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-7 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#784f12]"
                >
                  <span>Explore safety requirements</span>
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
                </Link>

                <Link
                  href="/report-an-issue"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-[13.5px] font-semibold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
                >
                  Report an issue
                </Link>
              </div>

              {/* Informational Disclaimer Banner */}
              <div className="mt-7 flex items-center gap-2.5 rounded-xl border border-[#fbf3db] bg-[#fef9ee] px-4 py-2.5 text-[#926016]">
                <AlertTriangle className="size-4 shrink-0 text-[#926016]" strokeWidth={2} />
                <span className="text-[12px] font-medium leading-relaxed">
                  Informational only. This page makes no &ldquo;safe inventory&rdquo; claim and hosts no live recall lookup.
                </span>
              </div>
            </div>

            {/* Right Column: Hero Photo */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="relative h-[420px] lg:h-[460px] w-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-100 shadow-sm">
                <Image
                  src="/images/Product-Safety/ps1.png"
                  alt="Quality assurance manager reviewing product inventory on clipboard"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
              </div>
            </div>
          </div>

          {/* Bottom Banner: Stop and pause */}
          <div className="mt-14 rounded-2xl border border-[#fce8b2] bg-[#fef8e7] p-6 lg:p-8 shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f7f2] text-[#009b72]">
                <AlertTriangle className="size-5" strokeWidth={2.2} />
              </div>
              <div className="flex-1">
                <h2 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  Stop and pause
                </h2>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#556987]">
                  If goods are recalled, suspected unsafe or their safety cannot be established, pause the affected action and seek appropriate guidance.
                  <br />
                  If someone is in immediate danger, contact your local emergency services. Platform support is not an emergency service.
                </p>
                <Link
                  href="/report-an-issue"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#926016] transition-colors hover:text-[#784f12]"
                >
                  <span>Go to Report an Issue</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 pt-6 pb-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-slate-500">
            <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/trust-and-safety" className="hover:text-slate-800 transition-colors">Trust &amp; Safety</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Product Safety</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-5 text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            TRUST &amp; SAFETY
          </div>

          {/* Heading */}
          <h1 className={`${sora} mt-2 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0c1e38]`}>
            Product <span className="text-[#00c48c]">Safety</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
            Understand how condition, traceability and category-specific requirements shape responsible surplus disposition.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#safety-requirements"
              className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Explore safety requirements</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>

            <Link
              href="/report-an-issue"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-[13.5px] font-semibold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
            >
              Report an issue
            </Link>
          </div>

          {/* Informational Disclaimer Banner */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#fbf3db] bg-[#fef9ee] p-3.5 text-[#926016]">
            <AlertTriangle className="size-4 shrink-0 mt-0.5 text-[#926016]" strokeWidth={2} />
            <span className="text-[12px] leading-snug">
              Information only. This page makes no &ldquo;safe inventory&rdquo; claim and shows no live recall indicator.
            </span>
          </div>

          {/* 3-Image Collage */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {/* Left tall photo */}
            <div className="relative h-[250px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
              <Image
                src="/images/Product-Safety/ps26.jpg"
                alt="Condition and traceability inspection"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-[#0c1e38] shadow-2xs backdrop-blur-xs">
                Condition and traceability
              </div>
            </div>

            {/* Right two stacked photos */}
            <div className="flex flex-col gap-2.5">
              <div className="relative h-[118px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Product-Safety/ps27.jpg"
                  alt="Warehouse inventory inspection"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-2.5 right-2.5 flex size-6 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-2xs backdrop-blur-xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>

              <div className="relative h-[118px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Product-Safety/ps28.jpg"
                  alt="Quality verification clipboard"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute top-2.5 right-2.5 flex size-6 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-2xs backdrop-blur-xs">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-2 text-[11px] leading-relaxed text-[#718096]">
            Illustrative imagery only. No items are real offers, grades or inspections.
          </p>

          {/* Stop and pause card */}
          <div className="mt-6 rounded-2xl border border-[#fce8b2] bg-[#fef8e7] p-5 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#e6f7f2] text-[#009b72]">
                <AlertTriangle className="size-4" strokeWidth={2.2} />
              </div>
              <h2 className={`${sora} text-[17px] font-bold text-[#0c1e38]`}>
                Stop and pause
              </h2>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-[#556987]">
              If goods are recalled, suspected unsafe or their safety cannot be established, pause the affected action and seek appropriate guidance.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
              If someone is in immediate danger, contact your local emergency services. Platform support is not an emergency service.
            </p>
            <Link
              href="/report-an-issue"
              className="mt-3.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#926016] transition-colors hover:text-[#784f12]"
            >
              <span>Go to Report an issue</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
