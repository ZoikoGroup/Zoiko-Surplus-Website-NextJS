import React from "react";
import Image from "next/image";
import { Globe, SlidersHorizontal, Users, FileText } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const scopeFeatures = [
  {
    title: "Global design",
    description: "One platform architecture.",
    icon: Globe,
    iconColor: "text-[#0d9488]",
    bgColor: "bg-teal-50/80",
    borderColor: "border-teal-100/80",
  },
  {
    title: "Regional setup",
    description: "Configured per region.",
    icon: SlidersHorizontal,
    iconColor: "text-[#926016]",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-100/80",
  },
  {
    title: "Local roles",
    description: "Legal parties can differ.",
    icon: Users,
    iconColor: "text-[#0d9488]",
    bgColor: "bg-teal-50/80",
    borderColor: "border-teal-100/80",
  },
  {
    title: "Local language",
    description: "Copy per approved locale.",
    icon: FileText,
    iconColor: "text-[#926016]",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-100/80",
  },
];

export default function GeographicScope() {
  return (
    <section
      aria-label="Geographic Scope"
      className={`${hanken} w-full bg-[#FAF7F2] py-12 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-widest text-[#926016] uppercase">
              02 ——— GEOGRAPHIC SCOPE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0c1e38]`}
          >
            A text overview, not a coverage map.
          </h2>
          <p className="mt-3 max-w-[850px] text-[14px] lg:text-[15px] leading-relaxed text-slate-600">
            No country list, count or map is published without current evidence. Regional
            configuration can define local language, category rules, responsible legal parties and
            support arrangements.
          </p>

          {/* Content Row: Left Photo with Badge, Right 2x2 Cards */}
          <div className="mt-10 grid grid-cols-12 gap-6 items-stretch">
            {/* Left Photo */}
            <div className="col-span-6 relative h-[360px] lg:h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-sm">
              <Image
                src="/images/Where-We-Operate/wwo5.png"
                alt="Illustrative imagery showing regional operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Illustrative imagery
              </div>
            </div>

            {/* Right 2x2 Feature Cards */}
            <div className="col-span-6 grid grid-cols-2 gap-4">
              {scopeFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-center rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:shadow-md"
                  >
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl border ${feat.bgColor} ${feat.borderColor} mb-4`}
                    >
                      <IconComp className={`size-5 ${feat.iconColor}`} />
                    </div>
                    <h3 className={`${sora} text-[17px] font-bold text-[#0c1e38]`}>
                      {feat.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-slate-500">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (reflects exact mobile design)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4">
          <span className="text-[11px] font-bold tracking-widest text-[#926016] uppercase">
            02 ——— GEOGRAPHIC SCOPE
          </span>
          <h2
            className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
          >
            A text overview, not a coverage map.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
            No country list, count or map is published without current evidence. Regional
            configuration can define local language, category rules, responsible legal parties and
            support arrangements.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {/* Mobile Image (wwo28.jpg) with overlay badge */}
            <div className="relative h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 shadow-xs">
              <Image
                src="/images/Where-We-Operate/wwo28.jpg"
                alt="Illustrative imagery showing regional operations"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Illustrative imagery
              </div>
            </div>

            {/* 4 Stacked full-width feature cards */}
            <div className="mt-1 flex flex-col gap-2.5">
              {scopeFeatures.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
                  >
                    <div
                      className={`flex size-8 items-center justify-center rounded-lg border ${feat.bgColor} ${feat.borderColor} mb-2.5`}
                    >
                      <IconComp className={`size-4 ${feat.iconColor}`} />
                    </div>
                    <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                      {feat.title}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-slate-500">{feat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
