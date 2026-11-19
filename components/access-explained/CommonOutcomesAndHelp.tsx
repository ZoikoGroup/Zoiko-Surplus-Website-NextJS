import React from "react";
import { UserX, Clock, ShieldX, Timer, AlertTriangle, HelpCircle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const outcomes = [
  {
    icon: <UserX className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "No invitation",
    desc: "You may not have been invited by any seller. Read the guide.",
  },
  {
    icon: <Clock className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Pending review",
    desc: "Review is in progress. Do not resubmit.",
  },
  {
    icon: <ShieldX className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Ineligible",
    desc: "A market or category rule does not currently allow it.",
  },
  {
    icon: <Timer className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Expired",
    desc: "Sign in securely or contact support through an authorized route.",
  },
  {
    icon: <AlertTriangle className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Suspended",
    desc: "Access is paused. Use the approved support route.",
  },
  {
    icon: <HelpCircle className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Get help",
    desc: "Use the approved support route. Never share credentials or private inventory.",
  },
];

export default function CommonOutcomesAndHelp() {
  return (
    <section aria-label="Common Outcomes and Help" className={`${hanken} w-full bg-[#fbf9f6] py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">08</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              COMMON OUTCOMES AND HELP
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            What each outcome generally means.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Generic guidance. This page cannot see or change any account.
          </p>

          {/* 3x2 Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-lg ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-4 text-[16.5px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#556987]">
                  {item.desc}
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
            COMMON OUTCOMES AND HELP
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            What each outcome generally means.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Generic guidance. This page cannot see or change any account.
          </p>

          {/* 6 Stacked Cards */}
          <div className="mt-6 space-y-3">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-lg ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
