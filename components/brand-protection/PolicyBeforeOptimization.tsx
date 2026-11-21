import React from "react";
import Image from "next/image";
import { ShieldCheck, Shield, AlertTriangle, Sliders, RefreshCw } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const policySteps = [
  {
    icon: <ShieldCheck className="size-4 text-[#2dd4bf]" strokeWidth={2.2} />,
    title: "Rights first",
    desc: "Ownership and checks before any route.",
  },
  {
    icon: <Shield className="size-4 text-[#2dd4bf]" strokeWidth={2.2} />,
    title: "Policy next",
    desc: "Policy minimums applied.",
  },
  {
    icon: <AlertTriangle className="size-4 text-[#2dd4bf]" strokeWidth={2.2} />,
    title: "Safety always",
    desc: "Safety holds preclude value.",
  },
  {
    icon: <Sliders className="size-4 text-[#2dd4bf]" strokeWidth={2.2} />,
    title: "Then compare",
    desc: "Disposal model options are compared.",
  },
  {
    icon: <RefreshCw className="size-4 text-[#2dd4bf]" strokeWidth={2.2} />,
    title: "No recovery promise",
    desc: "Mandated returns guaranteed.",
  },
];

export default function PolicyBeforeOptimization() {
  return (
    <section aria-label="Policy Before Optimization" className={`${hanken} w-full bg-[#08182d] py-16 md:py-24 text-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="text-[11.5px] font-bold tracking-[0.14em] text-[#2dd4bf] uppercase">
            POLICY BEFORE OPTIMIZATION
          </div>

          {/* Heading and Subtitle in flex header */}
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className={`${sora} max-w-xl text-[34px] lg:text-[40px] font-bold leading-tight tracking-[-0.025em] text-white`}>
              Commercial value never overrides rights, policy or safety.
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-slate-300">
              If a route would breach a brand instruction, it is not an option.
            </p>
          </div>

          {/* 5 Cards Row */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {policySteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0e2547]/80 p-5 backdrop-blur-xs transition-all hover:border-white/20 hover:bg-[#0e2547]"
              >
                <div className="flex size-7 items-center justify-center rounded-lg bg-[#2dd4bf]/10">
                  {step.icon}
                </div>
                <h3 className={`${sora} mt-3.5 text-[15.5px] font-bold text-white`}>
                  {step.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-snug text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Large Warehouse Inspection Photo */}
          <div className="relative mt-8 h-[360px] lg:h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="/images/Brand-Protection/b13.png"
              alt="Quality and policy verification in warehouse"
              fill
              sizes="(max-width: 1400px) 100vw, 1380px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#2dd4bf] uppercase">
            POLICY BEFORE OPTIMIZATION
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-white`}>
            Commercial value never overrides rights, policy or safety.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300">
            If a route would breach a brand instruction, it is not an option.
          </p>

          {/* 5 Stacked Cards */}
          <div className="mt-6 space-y-3">
            {policySteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0e2547]/80 p-4 backdrop-blur-xs"
              >
                <div className="flex size-7 items-center justify-center rounded-lg bg-[#2dd4bf]/10">
                  {step.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-white`}>
                  {step.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-snug text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Photo below cards with b44.jpg */}
          <div className="relative mt-5 h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
            <Image
              src="/images/Brand-Protection/b44.jpg"
              alt="Quality and policy verification in warehouse"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
              Illustrative Imagery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
