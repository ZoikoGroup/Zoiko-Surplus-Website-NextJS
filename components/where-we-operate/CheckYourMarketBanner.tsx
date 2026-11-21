import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const pageMetadata = [
  {
    label: "ROUTE",
    value: "Proposed /where-we-operate; compiled corporate from /global-marketing",
  },
  {
    label: "SOURCE REVIEW DATE",
    value: "Not published",
  },
  {
    label: "LEGAL AND POLICY REVIEW",
    value: "Pending",
  },
  {
    label: "OWNER AND REVIEWER",
    value: "Pending assignment",
  },
];

export default function CheckYourMarketBanner() {
  return (
    <section
      aria-label="Check your market"
      className={`${hanken} w-full bg-white pb-14 md:pb-24`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative h-[420px] lg:h-[460px] w-full overflow-hidden rounded-3xl shadow-sm">
            {/* Background Image */}
            <Image
              src="/images/Where-We-Operate/wwo21.png"
              alt="Professional working at laptop checking market availability"
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 95vw, 1380px"
            />

            {/* Dark tinted overlay */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h2
                className={`${sora} text-[38px] lg:text-[48px] font-bold tracking-tight text-white`}
              >
                Check your market.
              </h2>

              <div className="mt-8 flex items-center justify-center gap-4">
                <Link
                  href="#market-availability"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3.5 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Check Market Availability</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="#faq"
                  className="inline-flex items-center rounded-full border border-white/40 bg-white/20 px-6 py-3.5 text-[14px] font-semibold text-white backdrop-blur-xs transition-colors hover:bg-white/30"
                >
                  Read the FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (reflects exact mobile design)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4">
          {/* Mobile Image Banner (wwo44.jpg) */}
          <div className="relative overflow-hidden rounded-3xl shadow-sm">
            <div className="relative h-[340px] w-full">
              <Image
                src="/images/Where-We-Operate/wwo44.jpg"
                alt="Landscape with wind turbines and solar panels"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-slate-900/70" />

              <div className="absolute inset-0 flex flex-col justify-between p-5 text-left">
                <div>
                  <h2
                    className={`${sora} text-[26px] font-bold tracking-tight text-white leading-tight`}
                  >
                    Check your market.
                  </h2>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-200">
                    Services are activated market by market. Confirm status before you plan.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5">
                  <Link
                    href="#market-availability"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#926016] py-3 text-[13.5px] font-semibold text-white shadow-xs"
                  >
                    <span>Check Market Availability</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    href="#faq"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 py-2.5 text-[13.5px] font-semibold text-white backdrop-blur-xs"
                  >
                    Read the FAQ
                  </Link>
                </div>

                <p className="text-[10px] leading-relaxed text-slate-300/80">
                  This page is public guidance. It is not legal advice, an eligibility decision or a
                  support response. Categories subject to separate gate.
                </p>
              </div>
            </div>
          </div>

          {/* PUBLIC DATA STATUS / About this page. */}
          <div className="mt-12 bg-white pt-2 pb-6">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              PUBLIC DATA STATUS
            </span>

            <h3 className={`${sora} mt-2 text-[26px] font-bold text-[#0c1e38]`}>
              About this page.
            </h3>

            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
              No overreaching claim is intentional. Review dates are shown only when verified.
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

            {/* Platform Description */}
            <p className="mt-8 text-[12.5px] leading-relaxed text-slate-600">
              <strong className="font-semibold text-slate-800">Zoiko Surplus</strong> is a global
              surplus commerce and disposition platform connecting enterprise supply with
              confidential excess demand and approved recovery pathways. Within Zoiko Supply Group
              Inc., a Zoiko Group company.
            </p>

            {/* Legal Links */}
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] font-medium text-[#0c1e38]">
              <Link href="/privacy" className="hover:text-[#926016] hover:underline">
                Privacy Notice
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
                Legal Center
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/contact" className="hover:text-[#926016] hover:underline">
                Contact
              </Link>
            </div>

            {/* Disclaimer & Copyright */}
            <div className="mt-6 space-y-3 text-[11px] leading-relaxed text-slate-400">
              <p>
                Market availability, asset or recovery eligibility, and trading rights vary by
                jurisdiction, category, parties and approved transaction corridor. Zoiko Surplus
                provides orchestration, governance and exchange infrastructure; it is not the owner
                of listed goods, the default contracting seller, a warehouse operator, a logistics
                carrier, a regulated payment intermediary or a charity.
              </p>
              <p>
                © 2026 Zoiko Supply Group Inc. All rights reserved. Photography is illustrative and
                does not depict actual Surplus customers, sellers or inventory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
