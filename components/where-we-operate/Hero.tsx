import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Globe, Truck } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function Hero() {
  return (
    <section
      aria-label="Where We Operate Hero"
      className={`${hanken} w-full bg-white pt-8 pb-10 md:pt-14 md:pb-16`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="grid grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="col-span-7 flex flex-col justify-center">
              <h1
                className={`${sora} text-[44px] lg:text-[54px] font-bold tracking-tight text-[#0c1e38] leading-[1.15]`}
              >
                Where We <span className="text-[#0d9488]">Operate</span>
              </h1>

              <p className="mt-5 max-w-[580px] text-[15px] lg:text-[16px] leading-relaxed text-slate-600">
                Zoiko Surplus is designed for global use. Actual services are activated market by
                market, subject to approved categories, corridors and participating organizations.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="#market-availability"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3.5 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Check Market Availability</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="#how-markets-activate"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-[14px] font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  How markets activate
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="col-span-5 relative h-[360px] lg:h-[390px] w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50 shadow-sm">
              <Image
                src="/images/Where-We-Operate/wwo1.png"
                alt="Corporate boardroom discussion on market operations"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 550px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (reflects exact mobile design)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4">
          {/* Mobile Breadcrumb */}
          <nav className="mb-3 flex items-center gap-1.5 text-[12px] text-slate-400">
            <Link href="/" className="hover:text-slate-600">
              Home
            </Link>
            <span>/</span>
            <span>Markets & Policies</span>
            <span>/</span>
            <span className="text-slate-700 font-medium">Where We Operate</span>
          </nav>

          {/* Eyebrow */}
          <span className="text-[11px] font-bold tracking-widest text-[#926016] uppercase">
            MARKETS & POLICIES
          </span>

          {/* Mobile Title */}
          <h1
            className={`${sora} mt-2 text-[30px] font-bold tracking-tight text-[#0c1e38] leading-[1.15]`}
          >
            Where We <span className="text-[#0d9488]">Operate</span>
          </h1>

          {/* Mobile Subtitle */}
          <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
            Zoiko Surplus is designed for global use. Actual services are activated market by
            market, subject to approved categories, corridors and participating organizations.
          </p>

          {/* Mobile Amber Warning/Notice Box */}
          <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200/90 bg-[#FEF9EE] p-3 text-[#926016]">
            <Compass className="mt-0.5 size-4 shrink-0 text-[#926016]" />
            <p className="text-[12px] leading-relaxed text-[#784f12]">
              Maps and information show category and partner status by region.
            </p>
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-5 flex flex-col gap-2.5">
            <Link
              href="#market-availability"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#926016] py-3.5 text-[14px] font-semibold text-white shadow-xs"
            >
              <span>Check Market Availability</span>
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="#how-markets-activate"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white py-3 text-[14px] font-semibold text-slate-800"
            >
              How markets activate
            </Link>
          </div>

          {/* Mobile Image Collage: Left tall image, Right 2 stacked images */}
          <div className="mt-6 grid grid-cols-12 gap-2.5">
            {/* Left tall image (wwo22.jpg) */}
            <div className="col-span-7 relative h-[250px] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
              <Image
                src="/images/Where-We-Operate/wwo22.jpg"
                alt="Warehouse workers moving boxes"
                fill
                priority
                className="object-cover"
                sizes="55vw"
              />
              <div className="absolute inset-x-2 bottom-2 rounded-full bg-white/95 px-2 py-1 text-center shadow-xs backdrop-blur-xs">
                <span className="block text-[8.5px] font-medium leading-tight text-slate-700">
                  Non-binding illustrative view: services require setup
                </span>
              </div>
            </div>

            {/* Right stacked images (wwo23.jpg, wwo24.jpg) */}
            <div className="col-span-5 flex flex-col gap-2.5">
              <div className="relative h-[118px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
                <Image
                  src="/images/Where-We-Operate/wwo23.jpg"
                  alt="Business representatives reviewing clipboard"
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/90 shadow-xs">
                  <Globe className="size-3 text-slate-700" />
                </div>
              </div>

              <div className="relative h-[118px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xs">
                <Image
                  src="/images/Where-We-Operate/wwo24.jpg"
                  alt="Warehouse vehicles and operations"
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-white/90 shadow-xs">
                  <Truck className="size-3 text-slate-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Caption Disclaimer */}
          <p className="mt-2 text-[10.5px] leading-tight text-slate-400">
            Additional display only in a non-response view to ensure baseline coverage.
          </p>
        </div>
      </div>
    </section>
  );
}
