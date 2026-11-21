import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const pageMetadata = [
  {
    label: "ROUTE",
    value: "Proposed:/trust-and-safety/brand-protection, not verified",
  },
  {
    label: "REPORT ROUTE",
    value: "Only when validated and operational",
  },
  {
    label: "LEGAL REVIEW",
    value: "Pending",
  },
  {
    label: "OWNER AND REVIEWER",
    value: "Pending assignment",
  },
];

export default function BrandProtectionCTA() {
  return (
    <section aria-label="Brand Protection Action Banner" className={`${hanken} w-full bg-white pb-0 md:pb-24`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[440px] w-full overflow-hidden rounded-3xl bg-[#08182d] shadow-lg">
            {/* Background Image */}
            <Image
              src="/images/Brand-Protection/b26.png"
              alt="Two executives discussing surplus requirements"
              fill
              sizes="(max-width: 1400px) 100vw, 1380px"
              className="object-cover"
              priority={false}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-[#061426]/75 backdrop-blur-[1px]" />

            {/* Center Content */}
            <div className="relative z-10 flex min-h-[440px] flex-col items-center justify-center px-6 text-center">
              <h2 className={`${sora} max-w-2xl text-[36px] lg:text-[44px] font-bold tracking-[-0.025em] text-white`}>
                Discuss your surplus requirements.
              </h2>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/request-enterprise-demo"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3.5 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-[#784f12]"
                >
                  <span>Request Enterprise Demo</span>
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
        {/* Mobile Action Banner with b58.jpg */}
        <div className="relative overflow-hidden bg-[#071629] px-4 py-14">
          {/* Background Image */}
          <Image
            src="/images/Brand-Protection/b58.jpg"
            alt="Warehouse team collaboration background"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />

          <div className="relative z-10 text-center">
            <h2 className={`${sora} text-[26px] font-bold leading-tight tracking-[-0.025em] text-white`}>
              Discuss your
              <br />
              surplus requirements.
            </h2>
            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-300">
              Talk to the enterprise team about how to protect your brand while moving surplus goods.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/request-enterprise-demo"
                className="inline-flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/report-an-issue"
                className="inline-flex h-[44px] w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-[13.5px] font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/20"
              >
                Report a concern
              </Link>
            </div>

            {/* Yellow Warning Callout */}
            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-[#fef3c7]/30 bg-[#fffbeb]/90 p-3.5 text-left text-[#926016] backdrop-blur-xs">
              <AlertTriangle className="size-4 shrink-0 mt-0.5 text-[#926016]" strokeWidth={2} />
              <p className="text-[11.5px] leading-snug">
                Preview build. Intake and reporting routes are not connected.
              </p>
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-[11px] leading-relaxed text-slate-400">
              This page is educational. It is not legal advice, an authentication service or a takedown tool.
            </p>
          </div>
        </div>

        {/* Content and Legal Oversight Section */}
        <div className="bg-white px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            CONTENT AND LEGAL OVERSIGHT
          </div>

          {/* Heading */}
          <h3 className={`${sora} mt-2 text-[24px] font-bold text-[#0c1e38]`}>
            About this page.
          </h3>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Publication needs an approved route, evidence owner and review date.
          </p>

          {/* Metadata Card */}
          <div className="mt-6 divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
            {pageMetadata.map((item, idx) => (
              <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                <span className="text-[10.5px] font-bold tracking-wider text-[#926016] uppercase">
                  {item.label}
                </span>
                <p className="mt-1 text-[13px] font-medium text-[#0c1e38]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
