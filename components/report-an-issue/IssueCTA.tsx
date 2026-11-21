import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function IssueCTA() {
  return (
    <section aria-labelledby="issue-cta-heading" className={`${hanken} w-full bg-white px-5 pb-16 md:px-8 md:pb-24`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="relative mx-auto flex min-h-[380px] w-full max-w-[1380px] items-center justify-center overflow-hidden rounded-[28px] md:min-h-[440px] md:rounded-[36px] bg-[#0c1e38]">
          {/* Background Image: r29.png with Dark Gradient Overlay */}
          <Image
            src="/images/Report-an-Issue/r29.png"
            alt="Warehouse supervisor securing parcel for verified handling"
            fill
            sizes="(min-width: 1440px) 1380px, 100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
            <h2
              id="issue-cta-heading"
              className={`${sora} max-w-[800px] text-[34px] font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-4xl md:text-[50px]`}
            >
              Not sure where
              <br />
              your concern fits?
            </h2>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="#issue-classification"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#926016] px-7 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
              >
                Choose an issue type
                <ArrowRight aria-hidden="true" className="size-4" strokeWidth={2} />
              </Link>
              <Link
                href="#faq"
                className="inline-flex min-h-[48px] items-center rounded-full border border-white/40 bg-white/10 px-7 text-[14px] font-semibold text-white backdrop-blur-xs transition-colors hover:border-white hover:bg-white/20"
              >
                Read the FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#0c1e38] shadow-md">
          {/* Background Image: r60.jpg with Dark Gradient Overlay */}
          <Image
            src="/images/Report-an-Issue/r60.jpg"
            alt="Warehouse enterprise logistics infrastructure"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1e38]/90 via-[#0c1e38]/85 to-[#0c1e38]/95" />

          {/* Content */}
          <div className="relative z-10 px-5 pt-10 pb-8 flex flex-col">
            <h2 className={`${sora} text-[26px] font-bold leading-[1.18] tracking-[-0.02em] text-white`}>
              Not sure where
              <br />
              your concern fits?
            </h2>

            <p className="mt-2.5 text-[13px] leading-relaxed text-slate-300">
              Start with the issues types, then use the approved route that applies.
            </p>

            {/* Action Buttons */}
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="#issue-classification"
                className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] text-[13.5px] font-bold text-white shadow-xs transition-colors hover:bg-[#a66e1b]"
              >
                <span>Choose an issue type</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="#faq"
                className="flex h-[46px] w-full items-center justify-center rounded-full border border-white/40 bg-white/10 text-[13.5px] font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
              >
                Read the FAQ
              </Link>
            </div>

            {/* Emergency Warning Card */}
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200/60 bg-[#fefce8] p-3 text-[#92400e]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-[#b45309]">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span className="text-[11px] font-medium leading-[1.45]">
                If you are in immediate danger or suspect urgent safety issues, contact local emergency services immediately.
              </span>
            </div>

            {/* Bottom Disclaimer */}
            <p className="mt-5 text-[11px] leading-relaxed text-slate-400">
              This page explains a trust and safety intake pathway, not a public directory or open trading desk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
