import React from "react";
import { AlertTriangle, Flag, Check, Search, Lock, X } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const dangerPoints = [
  "Contact local emergency services first",
  "Do not rely on platform support",
  "Do not wait for a reply here",
];

const recallPoints = [
  "Pause the affected action",
  "Use the approved reporting channel",
  "No live recall monitoring is claimed",
];

const outcomes = [
  {
    title: "Review",
    description: "A concern may be reviewed.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <Search className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Restriction",
    description: "Goods or access may be restricted.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Lock className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Withdrawal",
    description: "A listing or action may be withdrawn.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <X className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Other outcome",
    description: "Another authorized outcome may apply.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Flag className="size-4" strokeWidth={2.5} />,
  },
];

export default function RecallsHazardsAndResolution() {
  return (
    <section aria-label="Recalls, Hazards and Resolution - Escalate through the approved process" className={`${hanken} w-full bg-[#fbf9f6]`}>
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
              RECALLS, HAZARDS AND RESOLUTION
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Escalate through the approved process.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            A recall or credible concern must be escalated. Urgent danger is not a platform support matter.
          </p>

          {/* Top 2 Escalation Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Immediate danger */}
            <div className="rounded-2xl border border-rose-100 bg-white p-7 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <AlertTriangle className="size-4" strokeWidth={2.5} />
                </div>
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  Immediate danger
                </h3>
              </div>
              <ul className="mt-6 space-y-3.5">
                {dangerPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14.5px] text-[#556987]">
                    <AlertTriangle className="size-4 shrink-0 text-rose-500" strokeWidth={2} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recall or credible concern */}
            <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Flag className="size-4" strokeWidth={2.5} />
                </div>
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  Recall or credible concern
                </h3>
              </div>
              <ul className="mt-6 space-y-3.5">
                {recallPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14.5px] text-[#556987]">
                    <Check className="size-4 shrink-0 text-emerald-500" strokeWidth={2.5} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subheading: What may follow a concern */}
          <div className="mt-16">
            <h3 className={`${sora} text-[20px] font-bold text-[#0c1e38]`}>
              What may follow a concern
            </h3>
            <p className="mt-1 text-[14px] text-[#556987]">
              Illustrative states only. Records and decisions live in protected workflows.
            </p>
          </div>

          {/* 4 Status Cards */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:shadow-xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h4 className={`${sora} mt-4 text-[17px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h4>
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
            RECALLS, HAZARDS AND RESOLUTION
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Escalate through the approved process.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            A recall or credible concern must be escalated. Urgent danger is not a platform support matter.
          </p>

          {/* Top 2 Process Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Immediate danger */}
            <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <AlertTriangle className="size-4" strokeWidth={2.5} />
                </div>
                <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                  Immediate danger
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {dangerPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#556987]">
                    <AlertTriangle className="size-3.5 shrink-0 mt-0.5 text-rose-500" strokeWidth={2} />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recall or credible concern */}
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Flag className="size-4" strokeWidth={2.5} />
                </div>
                <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                  Recall or credible concern
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {recallPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#556987]">
                    <Check className="size-3.5 shrink-0 mt-0.5 text-emerald-500" strokeWidth={2.5} />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subheading */}
          <div className="mt-8">
            <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
              What may follow a concern
            </h3>
            <p className="mt-1 text-[13px] text-[#556987]">
              Illustrative states only. Records and decisions live in protected workflows.
            </p>
          </div>

          {/* 4 Stacked Status Cards */}
          <div className="mt-4 flex flex-col gap-3">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h4 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h4>
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
