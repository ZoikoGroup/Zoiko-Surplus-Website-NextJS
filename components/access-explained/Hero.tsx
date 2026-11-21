import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section aria-label="How buyer access works Hero" className={`${hanken} w-full bg-white pt-10 pb-16 md:pt-16 md:pb-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className={`${sora} text-[44px] lg:text-[52px] font-bold tracking-[-0.03em] text-[#0c1e38] leading-[1.12]`}>
                How buyer{" "}
                <span className="text-[#2dd4bf]">access works</span>
              </h1>

              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#556987]">
                Applying, verifying your business, qualifying for a market and receiving seller permission are separate steps. Each requested action may also require its own authorization.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/buyer-qualification"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-7 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-[#784f12]"
                >
                  <span>Read Buyer Qualification Guide</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/become-a-verified-buyer"
                  className="text-[14px] font-semibold text-[#0c1e38] underline-offset-4 hover:underline"
                >
                  Apply to become a buyer
                </Link>
              </div>
            </div>

            {/* Right 2 Stacked Photos */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              {/* Top Photo */}
              <div className="relative h-[210px] lg:h-[230px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Access-Explained/s1.png"
                  alt="Buyer verification and governance discussion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-xs backdrop-blur-xs">
                  <Truck className="size-3.5" />
                </div>
              </div>

              {/* Bottom Photo */}
              <div className="relative h-[210px] lg:h-[230px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Access-Explained/s2.png"
                  alt="Team checking buyer permissions"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                  Responses in permission
                </div>
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
            <Link href="/for-verified-buyers" className="hover:text-slate-800">Verified Buyers</Link>
            <span>/</span>
            <span className="text-slate-700">Access Explained</span>
          </nav>

          {/* Eyebrow */}
          <div className="mt-4 text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            VERIFIED BUYERS / ACCESS
          </div>

          {/* Title */}
          <h1 className={`${sora} mt-2 text-[28px] font-bold tracking-[-0.03em] text-[#0c1e38]`}>
            How buyer{" "}
            <span className="text-[#2dd4bf]">access works</span>
          </h1>

          {/* Subtitle & Important Note */}
          <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-[#556987]">
            <p>
              Applying, verifying your business, qualifying for a market and receiving seller permission are separate steps. Each requested action may also require its own authorization.
            </p>
            <p className="font-semibold text-[#0c1e38]">
              A verified organisation does not automatically gain visibility into every seller, private opportunity. Current market, category, seller, role and action permissions must independently allow access.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/buyer-qualification"
              className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              <span>Read Buyer Qualification Guide</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/become-a-verified-buyer"
              className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-[13.5px] font-semibold text-[#0c1e38] shadow-2xs hover:bg-slate-50"
            >
              Apply to Become a Buyer
            </Link>
          </div>

          {/* Yellow Warning Callout */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#fef3c7] bg-[#fffbeb] p-3.5 text-[#926016]">
            <span className="text-sm">⚠️</span>
            <p className="text-[11.5px] leading-snug">
              For organisations only, not anonymous consumer browsing. This page shows no account status.
            </p>
          </div>

          {/* 3-Photo Collage */}
          <div className="mt-6 grid grid-cols-12 gap-3">
            {/* Left tall photo */}
            <div className="relative col-span-7 h-[250px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
              <Image
                src="/images/Access-Explained/s19.jpg"
                alt="Enterprise buyer permission overview"
                fill
                sizes="60vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[9.5px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Enterprise buyer permission overview
              </div>
            </div>

            {/* Right column with 2 photos */}
            <div className="col-span-5 flex flex-col gap-3">
              <div className="relative h-[119px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Access-Explained/s20.jpg"
                  alt="Permission review portal login"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-xs backdrop-blur-xs">
                  <span className="text-[10px]">🔒</span>
                </div>
              </div>

              <div className="relative h-[119px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
                <Image
                  src="/images/Access-Explained/s21.jpg"
                  alt="Warehouse dispatch team verified"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-xs backdrop-blur-xs">
                  <span className="text-[10px]">👥</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-3 text-center text-[11.5px] text-[#556987]">
            Illustrative imagery only. Relates to process flow and scope.
          </p>
        </div>
      </div>
    </section>
  );
}
