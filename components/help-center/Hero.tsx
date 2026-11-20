import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Help Center Hero" className={`${hanken} w-full bg-white pt-6 pb-12 md:pt-10 md:pb-16`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[380px] lg:min-h-[420px] w-full overflow-hidden rounded-3xl bg-[#08182d] shadow-lg">
            {/* Background Image */}
            <Image
              src="/images/Help-Center/hc1.png"
              alt="Customer support guidance representative"
              fill
              sizes="(max-width: 1400px) 100vw, 1380px"
              className="object-cover"
              priority
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/95 via-[#061426]/80 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[380px] lg:min-h-[420px] flex-col justify-center px-8 lg:px-14 max-w-2xl">
              <h1 className={`${sora} text-[38px] lg:text-[46px] font-bold tracking-[-0.03em] text-white`}>
                Help <span className="text-[#2dd4bf]">Center</span>
              </h1>

              <p className="mt-4 text-[15px] lg:text-[16px] leading-relaxed text-slate-200">
                Find guidance for your next step.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#search-topics"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-[#784f12]"
                >
                  <span>Search help topics</span>
                  <ArrowRight className="size-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/20"
                >
                  Contact Support
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[12.5px] text-slate-300">
                <Lock className="size-3.5 text-slate-400" />
                <span>Public guidance only. Sign in for private account or transaction help.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile devices)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-slate-500">
            <Link href="/" className="hover:text-slate-800">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Help &amp; Contact</span>
            <span>/</span>
            <span className="font-medium text-slate-700">Help Center</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-4">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              HELP &amp; CONTACT
            </span>
          </div>

          {/* Heading */}
          <h1 className={`${sora} mt-1 text-[32px] font-bold tracking-tight text-[#0c1e38]`}>
            Help <span className="text-[#0d9488]">Center</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
            Find guidance for your next steps.
          </p>

          {/* Yellow Advisory Notice Box */}
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-[#fffbeb] p-3.5 text-[12.5px] leading-snug text-amber-900">
            <Lock className="size-4 shrink-0 text-amber-800 mt-0.5" />
            <span>Public guidance only. Sign in for private account or transaction help.</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href="#search-topics"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#926016] py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Search help topics</span>
              <ArrowRight className="size-4" />
            </a>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white py-3 text-[14px] font-semibold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
            >
              Contact Support
            </Link>
          </div>

          {/* 3-Image Collage Gallery */}
          <div className="mt-6 grid grid-cols-2 gap-2.5">
            {/* Left Tall Image */}
            <div className="relative h-[220px] overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src="/images/Help-Center/hc17.jpg"
                alt="Guidance and inventory operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 300px"
              />
              <div className="absolute right-2 bottom-2 left-2 rounded-full bg-white/95 px-2.5 py-1 text-center shadow-xs">
                <span className="block truncate text-[10px] font-medium text-slate-800">
                  Guidance, then receipt; not wait
                </span>
              </div>
            </div>

            {/* Right Column with 2 Stacked Images */}
            <div className="flex flex-col gap-2.5">
              {/* Top Image */}
              <div className="relative h-[105px] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/Help-Center/hc18.jpg"
                  alt="Search guidance online"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-xs">
                  <span className="text-[11px] font-bold">🔍</span>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="relative h-[105px] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/Help-Center/hc19.jpg"
                  alt="Documentation and checklist review"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-xs">
                  <span className="text-[11px] font-bold">📋</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Caption */}
          <p className="mt-3 text-[11.5px] leading-relaxed text-slate-500">
            Illustrative imagery only. No lookup for private Zoiko Surplus customers, sellers or inventory.
          </p>

          {/* Two Notification / Warning Boxes */}
          <div className="mt-6 flex flex-col gap-3">
            {/* Box 1: Public Guidance Only */}
            <div className="flex items-start gap-2.5 rounded-2xl border border-amber-200 bg-[#fffbeb] p-4 text-[12.5px] leading-relaxed text-amber-950">
              <span className="text-[15px] leading-none mt-0.5">🛡️</span>
              <p>
                <strong className="font-bold">Public guidance only.</strong> Sign in for private account or transaction help. This is not an account portal, ticket tracker or emergency service.
              </p>
            </div>

            {/* Box 2: Safety or Brand Concern */}
            <div className="flex items-start gap-2.5 rounded-2xl border border-rose-200 bg-[#fff1f2] p-4 text-[12.5px] leading-relaxed text-rose-950">
              <span className="text-[15px] leading-none mt-0.5 text-rose-700">⚠️</span>
              <div>
                <p>
                  <strong className="font-bold">Safety or brand concern?</strong> View reporting guidance. For immediate danger, contact appropriate local emergency services.
                </p>
                <div className="mt-1.5">
                  <a
                    href="#report-routing"
                    className="font-semibold text-rose-800 underline hover:text-rose-950"
                  >
                    Go to reporting guidance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
