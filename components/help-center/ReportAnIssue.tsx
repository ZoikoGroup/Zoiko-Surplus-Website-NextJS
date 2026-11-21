import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ShieldAlert, Lock, XCircle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const reportCards = [
  {
    icon: <AlertTriangle className="size-4.5 text-[#d97706]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef7ec]",
    title: "Product safety",
    desc: "Suspected unsafe goods.",
  },
  {
    icon: <ShieldAlert className="size-4.5 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#e6f4f2]",
    title: "Counterfeit",
    desc: "Suspected brand misuse.",
  },
  {
    icon: <Lock className="size-4.5 text-[#d97706]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef7ec]",
    title: "Access misuse",
    desc: "Unauthorized access or disclosure.",
  },
  {
    icon: <XCircle className="size-4.5 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#e6f4f2]",
    title: "No promises",
    desc: "No response timing promised.",
  },
];

export default function ReportAnIssue() {
  return (
    <section
      aria-label="Report Routing - Report an Issue"
      className={`${hanken} w-full bg-[#fbfbfa]/60 py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              REPORT ROUTING
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] font-bold tracking-tight text-[#0c1e38] lg:text-[36px]`}
          >
            Report an Issue.
          </h2>
          <p className="mt-3 max-w-[850px] text-[15px] leading-relaxed text-slate-600">
            Product safety, suspected counterfeit or access misuse. For immediate danger, contact local emergency services.
          </p>

          {/* 2-Column Content: Left 2x2 Grid, Right Image */}
          <div className="mt-10 grid grid-cols-12 gap-8 items-stretch">
            {/* Left 2x2 Cards Grid */}
            <div className="col-span-7 grid grid-cols-2 gap-5">
              {reportCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div
                    className={`flex size-10 items-center justify-center rounded-lg ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className={`${sora} mt-5 text-[17px] font-bold tracking-tight text-[#0c1e38]`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Photo */}
            <div className="col-span-5 relative min-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white">
              <Image
                src="/images/Help-Center/hc9.png"
                alt="Report routing and issue resolution illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 45vw, 550px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly reserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-6 bg-[#926016]/50"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              REPORT ROUTING
            </span>
          </div>

          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Report an Issue.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
            Product safety, suspected counterfeit or access misuse. For immediate danger, contact local emergency services.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {reportCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs"
              >
                <div
                  className={`flex size-8 items-center justify-center rounded-lg ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {card.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Photo */}
          <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
            <Image
              src="/images/Help-Center/hc27.jpg"
              alt="Report issue resolution"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-1 text-center shadow-xs">
              <span className="block text-[10px] font-medium text-slate-800">
                Illustrative imagery
              </span>
            </div>
          </div>

          {/* Dark Support Contact Card */}
          <div className="mt-8 flex flex-col items-start rounded-2xl bg-[#0c1e38] p-6 text-left shadow-md">
            <span className="text-[11px] font-bold tracking-[0.14em] text-slate-400 uppercase">
              CONTACT SUPPORT
            </span>

            <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight text-white`}>
              Still need help?
              <br />
              Contact Support.
            </h2>

            <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-300">
              Use the approved support route. Do not include passwords, bank details or confidential inventory.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#926016] px-6 py-3 text-[14px] font-semibold text-white shadow-xs transition-colors hover:bg-[#784f12]"
            >
              Contact Support <span className="text-[15px]">→</span>
            </Link>

            <div className="mt-5 flex w-full items-start gap-2.5 rounded-xl border border-amber-200/80 bg-[#fffbeb] p-3 text-[12px] leading-snug text-amber-950">
              <Lock className="size-3.5 shrink-0 text-amber-800 mt-0.5" />
              <span>Public guidance only. Never share credentials or private inventory.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
