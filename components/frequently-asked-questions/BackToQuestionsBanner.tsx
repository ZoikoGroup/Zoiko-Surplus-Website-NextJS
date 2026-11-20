import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const pageMetadata = [
  {
    label: "ROUTE",
    value: "Source: proposed/faq, not verified",
  },
  {
    label: "DEFINITIVE SOURCE",
    value: "Resources FAQ v1.0 (20 answers)",
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

export default function BackToQuestionsBanner() {
  return (
    <section
      aria-label="Back to the Questions Banner"
      className={`${hanken} w-full bg-white pb-16 md:pb-24`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          <div className="relative min-h-[380px] lg:min-h-[420px] w-full overflow-hidden rounded-[32px] shadow-sm">
            {/* Background Image */}
            <Image
              src="/images/Frequently-Asked-Questions/fa25.png"
              alt="Back to the questions support team"
              fill
              className="object-cover"
              sizes="1380px"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-[#0c1e38]/65 backdrop-brightness-90" />

            {/* Centered Content */}
            <div className="relative z-10 flex min-h-[380px] lg:min-h-[420px] flex-col items-center justify-center p-8 text-center">
              <h2
                className={`${sora} text-[38px] font-bold tracking-tight text-white lg:text-[44px] leading-tight`}
              >
                Back to the questions.
              </h2>

              <div className="mt-7 flex items-center justify-center gap-4">
                <a
                  href="#search-faqs"
                  className="inline-flex items-center gap-2 rounded-full bg-[#926016] px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-sm transition-all hover:bg-[#784f12] active:scale-95"
                >
                  <span>Return to topics</span>
                  <ArrowRight className="size-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-[14.5px] font-semibold text-white backdrop-blur-xs transition-all hover:bg-white/20"
                >
                  Still need help?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly reserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Action Banner with fa52.jpg background */}
          <div className="relative overflow-hidden rounded-2xl bg-[#08182d] p-6 text-left shadow-lg">
            {/* Background Image */}
            <Image
              src="/images/Frequently-Asked-Questions/fa52.jpg"
              alt="Back to questions support background"
              fill
              className="object-cover opacity-35"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#08182d]/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col">
              <h2 className={`${sora} text-[26px] font-bold leading-tight text-white`}>
                Back to the questions.
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">
                Use the topics to find another answer, or choose a help route.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="#search-faqs"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#926016] py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
                >
                  <span>Return to topics</span>
                  <span>→</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-transparent py-3 text-[14px] font-semibold text-white shadow-2xs transition-colors hover:bg-white/10"
                >
                  Still need help?
                </Link>
              </div>

              {/* Public Guidance Notice */}
              <p className="mt-4 text-[11.5px] leading-relaxed text-slate-400">
                This page is public guidance. It is not legal advice, an eligibility decision or a support request.
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
              <strong className="font-semibold text-slate-800">Zoiko Surplus</strong> is a global surplus commerce and disposition platform connecting enterprise supply with confidential excess demand and approved recovery pathways. Within Zoiko Supply Group Inc., a Zoiko Group company.
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

            {/* Paragraph 2 */}
            <p className="mt-5 text-[11.5px] leading-relaxed text-slate-500">
              Market availability, product eligibility and trading rights vary by jurisdiction, category, parties and approved transaction corridor. Zoiko Surplus provides orchestration, governance and exchange infrastructure; it is not the owner of listed goods, the default contracting seller, a warehouse operator, a logistics carrier, a regulated payment intermediary or a charity.
            </p>

            {/* Paragraph 3 */}
            <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
              © 2026 Zoiko Supply Group Inc. All rights reserved. Photography is illustrative and does not depict Zoiko Surplus customers, sellers or inventory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
