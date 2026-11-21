import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section
      aria-label="Frequently Asked Questions Hero"
      className={`${hanken} w-full bg-white pt-8 pb-10 md:pt-14 md:pb-14`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Hero Row: Left Text & CTAs, Right Image */}
          <div className="grid grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="col-span-7 flex flex-col justify-center">
              <h1
                className={`${sora} text-[44px] lg:text-[52px] font-bold tracking-tight text-[#0c1e38] leading-[1.15]`}
              >
                Frequently
                <br />
                Asked <span className="text-[#0d9488]">Questions</span>
              </h1>

              <p className="mt-5 max-w-[580px] text-[16px] leading-relaxed text-slate-600">
                Answers about business participation, access, safety and the operating model.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <a
                  href="#search-faqs"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3.5 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Search the answers</span>
                  <ArrowRight className="size-4" />
                </a>

                <Link
                  href="/contact"
                  className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-[#926016]"
                >
                  Still need help?
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="col-span-5 relative h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 shadow-sm">
              <Image
                src="/images/Frequently-Asked-Questions/fa1.png"
                alt="Frequently asked questions wooden blocks"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 45vw, 550px"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 shadow-xs">
                <span className="block text-[10.5px] font-medium text-slate-700">
                  Independent permission
                </span>
              </div>
            </div>
          </div>

          {/* Yellow Advisory Notice Banner */}
          <div className="mt-12 flex items-center gap-3 rounded-2xl border border-amber-200/80 bg-[#fffbeb] px-5 py-4 text-[13px] leading-relaxed text-amber-950">
            <Shield className="size-4.5 shrink-0 text-amber-800" strokeWidth={2} />
            <p>
              <strong className="font-bold">Public guidance only.</strong> Verification does not grant access. Availability and terms vary. Nothing here is a live availability, price, eligibility or legal statement.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly reserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-slate-500">
            <Link href="/" className="hover:text-slate-800">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Resources</span>
            <span>/</span>
            <span className="font-medium text-slate-700">Frequently Asked Questions</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-4">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RESOURCES
            </span>
          </div>

          {/* Heading */}
          <h1 className={`${sora} mt-1 text-[32px] font-bold tracking-tight text-[#0c1e38] leading-tight`}>
            Frequently
            <br />
            Asked <span className="text-[#0d9488]">Questions</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
            Answers about business participation, access, safety and the operating model.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href="#search-faqs"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#926016] py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Search the answers</span>
              <ArrowRight className="size-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white py-3 text-[14px] font-semibold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
            >
              Still need help?
            </Link>
          </div>

          {/* 3-Image Collage Gallery */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {/* Left Tall Image */}
            <div className="relative h-[220px] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/Frequently-Asked-Questions/fa26.jpg"
                alt="Frequently asked questions process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 300px"
              />
              <div className="absolute right-2 bottom-2 left-2 rounded-full bg-white/95 px-2.5 py-1 text-center shadow-xs">
                <span className="block truncate text-[10px] font-medium text-slate-800">
                  Transfer and shared receipt not wait
                </span>
              </div>
            </div>

            {/* Right Column with 2 Stacked Images */}
            <div className="flex flex-col gap-2.5">
              {/* Top Image */}
              <div className="relative h-[105px] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/Frequently-Asked-Questions/fa27.jpg"
                  alt="Verified trust badge"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-xs">
                  <Shield className="size-3 text-[#0d9488]" />
                </div>
              </div>

              {/* Bottom Image */}
              <div className="relative h-[105px] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/Frequently-Asked-Questions/fa28.jpg"
                  alt="Community support"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-xs">
                  <span className="text-[10px] font-bold">👥</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-3 text-[11.5px] leading-relaxed text-slate-500">
            Original illustrations. This page has no live private customer or inventory.
          </p>

          {/* Yellow Advisory Notice Box */}
          <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-[#fffbeb] p-4 text-[12.5px] leading-relaxed text-amber-950">
            <Shield className="size-4 shrink-0 text-amber-800 mt-0.5" />
            <p>
              <strong className="font-bold">Public guidance only.</strong> Verification does not grant access. Availability and terms vary. Nothing here is a live availability, price, eligibility or legal statement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
