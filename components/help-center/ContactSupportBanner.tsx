import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const pageMetadata = [
  {
    label: "ROUTE",
    value: "Proposed: /help-center not yet live",
  },
  {
    label: "EVIDENCE OWNER",
    value: "Support Contact Support personnel",
  },
  {
    label: "LEGAL REVIEW",
    value: "Pending",
  },
  {
    label: "VERSION AND TIMESTAMP",
    value: "1.0.0 (Equipment)",
  },
];

export default function ContactSupportBanner() {
  return (
    <section
      aria-label="Contact Support Banner"
      className={`${hanken} w-full bg-white pb-16 md:pb-24`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[380px] w-full overflow-hidden rounded-[32px] shadow-sm">
            {/* Background Image */}
            <Image
              src="/images/Help-Center/hc16.png"
              alt="Support team contact"
              fill
              className="object-cover"
              sizes="1380px"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-[#0c1e38]/65 backdrop-brightness-90" />

            {/* Centered Content */}
            <div className="relative z-10 flex min-h-[380px] flex-col items-center justify-center p-8 text-center">
              <h2
                className={`${sora} text-[38px] font-bold tracking-tight text-white lg:text-[44px] leading-tight`}
              >
                Still need help?
                <br />
                Contact Support.
              </h2>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#926016] px-8 py-3.5 text-[14.5px] font-semibold text-white transition-all hover:bg-[#784f12] hover:shadow-lg active:scale-95"
              >
                Contact Support <span className="text-[16px]">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly reserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Action Banner with hc34.jpg background */}
          <div className="relative overflow-hidden rounded-2xl bg-[#08182d] p-6 text-left shadow-lg">
            {/* Background Image */}
            <Image
              src="/images/Help-Center/hc34.jpg"
              alt="Wind turbines landscape background"
              fill
              className="object-cover opacity-35"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#08182d]/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col">
              <h2 className={`${sora} text-[26px] font-bold leading-tight text-white`}>
                Find your next step.
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">
                Search the topic, or use the approved route for private or urgent matters.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="#search-topics"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#926016] py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Search help topics</span>
                  <span>→</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-transparent py-3 text-[14px] font-semibold text-white shadow-2xs transition-colors hover:bg-white/10"
                >
                  Contact Support
                </Link>
              </div>

              {/* Public Guidance Notice */}
              <p className="mt-4 text-[11.5px] leading-relaxed text-slate-400">
                This page is public guidance. It is not an account portal, ticket tracker or emergency service.
              </p>
            </div>
          </div>

          {/* Content and Legal Oversight Section */}
          <div className="mt-12 bg-white pt-2 pb-6">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              CONTENT AND LEGAL OVERSIGHT
            </span>

            <h3 className={`${sora} mt-2 text-[24px] font-bold text-[#0c1e38]`}>
              About this page.
            </h3>

            <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
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

            {/* Paragraph 1 */}
            <p className="mt-8 text-[12.5px] leading-relaxed text-slate-600">
              <strong className="font-semibold text-slate-800">Zoiko Surplus</strong> is a gathered surplus resource journal for businesses looking for commercial equipment surplus with reviewed sources and buyer qualification. Zoiko Surplus operates under Zoiko Group as a full service company.
            </p>

            {/* Legal Links */}
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] font-medium text-[#0c1e38]">
              <Link href="/privacy" className="hover:text-[#926016] hover:underline">
                Privacy Policy
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/terms" className="hover:text-[#926016] hover:underline">
                Terms of Use
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/accessibility" className="hover:text-[#926016] hover:underline">
                Accessibility Statement
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/trust" className="hover:text-[#926016] hover:underline">
                Security &amp; Trust
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/legal" className="hover:text-[#926016] hover:underline">
                Legal Notice
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/contact" className="hover:text-[#926016] hover:underline">
                Contact
              </Link>
            </div>

            {/* Paragraph 2 */}
            <p className="mt-5 text-[11.5px] leading-relaxed text-slate-500">
              Market availability, operational policy and access requirements remain subject to alteration. Clarification on commercial terms, equipment condition and inventory disposition can be requested from a nominated contact. No representation is given concerning inventory suitability for a specific commercial need. An approval grants access to consider goods; it does not authorize buying.
            </p>

            {/* Paragraph 3 */}
            <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
              © 2026 Zoiko Surplus / Zoiko Group. All rights reserved. Reproduction without permission strictly prohibited. Public guidance only; not an account portal, ticket tracker or emergency service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
