import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Check, X, CheckCircle, XCircle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Business Verification - Hero" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-16 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h1 className={`${sora} text-[44px] lg:text-[54px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0c1e38]`}>
                Business <span className="text-[#00c48c]">Verification</span>
              </h1>

              <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-relaxed text-[#556987]">
                Understand how business identity, representative authority and participation may be reviewed.
              </p>

              <p className="mt-2 text-[14px] font-medium text-[#0c1e38]">
                Verification does not grant access to private markets.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/buyer-qualification"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-7 text-[13.5px] font-bold text-white shadow-sm transition-colors hover:bg-[#784f12]"
                >
                  <span>Explore Buyer Qualification</span>
                  <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
                </Link>

                <a
                  href="#role-selection"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-[13.5px] font-semibold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
                >
                  Choose your role
                </a>
              </div>

              {/* Informational Warning Banner */}
              <div className="mt-7 flex items-center gap-2.5 rounded-xl border border-[#fbf3db] bg-[#fef9ee] px-4 py-2.5 text-[#926016]">
                <AlertTriangle className="size-4 shrink-0 text-[#926016]" strokeWidth={2} />
                <span className="text-[12px] font-medium leading-relaxed">
                  This is an educational page. It has no eligibility form, no company search and no status lookup.
                </span>
              </div>
            </div>

            {/* Right Column: Hero Photo */}
            <div className="lg:col-span-5 xl:col-span-5">
              <div className="relative h-[420px] lg:h-[460px] w-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-100 shadow-sm">
                <Image
                  src="/images/Business-Verification/bv1.png"
                  alt="Business representatives reviewing qualification documentation"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 550px"
                />
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
            <span className="text-slate-700 font-medium">Business Verification</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-5 text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            TRUST &amp; SAFETY
          </div>

          {/* Heading */}
          <h1 className={`${sora} mt-2 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0c1e38]`}>
            Business <span className="text-[#00c48c]">Verification</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
            Understand how business identity, representative authority and participation may be reviewed.
          </p>

          <p className="mt-2 text-[13px] font-medium text-[#0c1e38]">
            Verification does not grant access to private markets.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/buyer-qualification"
              className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Explore Buyer Qualification</span>
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>

            <a
              href="#role-selection"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-[13.5px] font-semibold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
            >
              Choose your role
            </a>
          </div>

          {/* Warning Banner */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#fbf3db] bg-[#fef9ee] p-3.5 text-[#926016]">
            <AlertTriangle className="size-4 shrink-0 mt-0.5 text-[#926016]" strokeWidth={2} />
            <span className="text-[12px] leading-snug">
              This is an educational page. It has no eligibility form, no company search and no status lookup.
            </span>
          </div>

          {/* 3-Image Collage */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {/* Left tall photo */}
            <div className="relative h-[250px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
              <Image
                src="/images/Business-Verification/bv28.jpg"
                alt="Business verification inspection"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-[#0c1e38] shadow-2xs backdrop-blur-xs">
                Review of an organization
              </div>
            </div>

            {/* Right two stacked photos */}
            <div className="flex flex-col gap-2.5">
              <div className="relative h-[118px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Business-Verification/bv29.jpg"
                  alt="Documentation inspection"
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

              <div className="relative h-[118px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Business-Verification/bv30.jpg"
                  alt="Quality verification"
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
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-2 text-[11px] leading-relaxed text-[#718096]">
            Illustrative imagery only. No items are real offers, grades or inspections.
          </p>

          {/* Definition and Limits Section */}
          <div className="mt-12">
            <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              DEFINITION AND LIMITS
            </div>
            <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
              What business verification is.
            </h2>
            <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
              Business verification is a review of an organization and the authority of its representative for a defined participation scope.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {/* It is */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle className="size-4" strokeWidth={2.5} />
                  </div>
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    It is
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "A review of a legal entity and its representative",
                    "Focused on stated identity and jurisdiction",
                    "Subject to change and reassessment",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#556987]">
                      <Check className="size-3.5 shrink-0 mt-0.5 text-emerald-500" strokeWidth={2.5} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* It is not */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <XCircle className="size-4" strokeWidth={2.5} />
                  </div>
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    It is not
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "A public badge of universal trust",
                    "A company directory or lookup",
                    "A grant of product approval",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#556987]">
                      <X className="size-3.5 shrink-0 mt-0.5 text-rose-500" strokeWidth={2.5} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
