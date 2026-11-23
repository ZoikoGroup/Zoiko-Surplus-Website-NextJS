import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="Brand Protection Hero" className={`${hanken} w-full bg-white pt-6 pb-12 md:pt-10 md:pb-16`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[380px] lg:min-h-[420px] w-full overflow-hidden rounded-3xl bg-[#08182d] shadow-lg">
            {/* Background Image */}
            <Image
              src="/images/Brand-Protection/b1.png"
              alt="Brand Protection secure governance"
              fill
              sizes="(max-width: 1400px) 100vw, 1380px"
              className="object-cover"
              priority
            />

            {/* Dark Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061426]/90 via-[#061426]/75 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[380px] lg:min-h-[420px] flex-col justify-center px-8 lg:px-14 max-w-2xl">
              <h1 className={`${sora} text-[38px] lg:text-[46px] font-bold tracking-[-0.03em] text-white`}>
                Brand <span className="text-[#2dd4bf]">Protection</span>
              </h1>

              <p className="mt-4 text-[15px] lg:text-[16px] leading-relaxed text-slate-200">
                Govern how surplus goods are disclosed and distributed. Brand protection combines seller-authorized disclosure, documented rights and permitted routes.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#rights-governance"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-[#784f12]"
                >
                  <span>Rights & governance</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/report-an-issue"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/20"
                >
                  Report a concern
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
        <div className="px-4 py-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-slate-500">
            <Link href="/" className="hover:text-slate-800">Home</Link>
            <span>/</span>
            <Link href="/trust-and-safety" className="hover:text-slate-800">Trust & Safety</Link>
            <span>/</span>
            <span className="text-slate-700">Brand Protection</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-4 text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            TRUST & SAFETY
          </div>

          {/* Title */}
          <h1 className={`${sora} mt-2 text-[28px] font-bold tracking-[-0.03em] text-[#0c1e38]`}>
            Brand <span className="text-[#2dd4bf]">Protection</span>
          </h1>

          {/* Subtitle */}
          <div className="mt-3 space-y-2 text-[14px] leading-relaxed text-[#556987]">
            <p>Govern how surplus goods are disclosed and distributed.</p>
            <p>Brand protection combines seller-authorized disclosure, documented rights and permitted routes.</p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#rights-governance"
              className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Rights & governance</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/report-an-issue"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-[13.5px] font-semibold text-[#0c1e38] shadow-2xs hover:bg-slate-50"
            >
              Report a concern
            </Link>
          </div>

          {/* Yellow Warning Callout */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#fef3c7] bg-[#fffbeb] p-3.5 text-[#926016]">
            <span className="text-sm">⚠️</span>
            <p className="text-[11.5px] leading-snug">
              An educational page. This page produces no brand lookup, registry, authentication service or takedown route.
            </p>
          </div>

          {/* 3-Photo Collage */}
          <div className="mt-6 grid grid-cols-12 gap-3">
            {/* Left tall photo */}
            <div className="relative col-span-7 h-[250px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
              <Image
                src="/images/Brand-Protection/b27.jpg"
                alt="Brand asset disclosure clothing display"
                fill
                sizes="60vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Brand asset disclosure
              </div>
            </div>

            {/* Right column with 2 photos */}
            <div className="col-span-5 flex flex-col gap-3">
              <div className="relative h-[119px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Brand-Protection/b28.jpg"
                  alt="Stock room verified inventory"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-xs backdrop-blur-xs">
                  <span className="text-[10px]">🏷️</span>
                </div>
              </div>

              <div className="relative h-[119px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Brand-Protection/b29.jpg"
                  alt="Documented packaging packing"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-xs backdrop-blur-xs">
                  <span className="text-[10px]">📦</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-3 text-center text-[11.5px] text-[#556987]">
            Illustrative imagery only. Relates to condition & product.
          </p>
        </div>
      </div>
    </section>
  );
}
