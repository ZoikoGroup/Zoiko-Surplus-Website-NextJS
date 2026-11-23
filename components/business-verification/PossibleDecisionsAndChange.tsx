import React from "react";
import { AlertTriangle, Clock, CheckCircle, X, RefreshCw, Flag } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const outcomes = [
  {
    title: "Incomplete",
    description: "Information is missing.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <AlertTriangle className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Pending",
    description: "Review has not finished.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Clock className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Verified within scope",
    description: "Approved for a defined scope only.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <CheckCircle className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Declined",
    description: "The review did not approve it.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <X className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "No longer current",
    description: "Verification has lapsed or changed.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <RefreshCw className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Reverification",
    description: "Business, representative or policy changes may need a fresh review.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Flag className="size-4" strokeWidth={2.5} />,
  },
];

export default function PossibleDecisionsAndChange() {
  return (
    <section aria-label="Possible Decisions and Change - Six generic outcomes" className={`${hanken} w-full bg-[#fbf9f6]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              POSSIBLE DECISIONS AND CHANGE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Six generic outcomes.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Educational labels only. Changes to the business, representative or relevant policy may need another review.
          </p>

          {/* 6 Cards 3x2 Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:shadow-xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-4 text-[17px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            POSSIBLE DECISIONS AND CHANGE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Six generic outcomes.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Educational labels only. Changes to the business, representative or relevant policy may need another review.
          </p>

          {/* 6 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-3">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
