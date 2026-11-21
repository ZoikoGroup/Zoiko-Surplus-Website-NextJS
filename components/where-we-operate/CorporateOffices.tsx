import React from "react";
import Image from "next/image";
import { Building2, MapPinOff, FileCheck, XCircle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const officeFacts = [
  {
    title: "Offices",
    description: "Read from the shared registry.",
    icon: Building2,
    iconColor: "text-[#0d9488]",
    bgColor: "bg-teal-50/80",
    borderColor: "border-teal-100/80",
  },
  {
    title: "No unverified address",
    description: "None is shown here.",
    icon: MapPinOff,
    iconColor: "text-[#926016]",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-100/80",
  },
  {
    title: "Legal entities",
    description: "Mapped by Corporate Information.",
    icon: FileCheck,
    iconColor: "text-[#0d9488]",
    bgColor: "bg-teal-50/80",
    borderColor: "border-teal-100/80",
  },
  {
    title: "Not coverage",
    description: "An office does not mean service.",
    icon: XCircle,
    iconColor: "text-[#926016]",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-100/80",
  },
];

export default function CorporateOffices() {
  return (
    <section
      aria-label="Corporate Office Information"
      className={`${hanken} w-full bg-white py-12 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-widest text-[#926016] uppercase">
              03 ——— CORPORATE OFFICE INFORMATION
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0c1e38]`}
          >
            Offices are not markets.
          </h2>
          <p className="mt-3 max-w-[850px] text-[14px] lg:text-[15px] leading-relaxed text-slate-600">
            Corporate information is the authoritative source. No address is published here until it
            is confirmed.
          </p>

          {/* 2-Column: Left 2x2 Info Cards, Right Photo */}
          <div className="mt-10 grid grid-cols-12 gap-6 items-stretch">
            {/* Left 2x2 Grid */}
            <div className="col-span-6 grid grid-cols-2 gap-4">
              {officeFacts.map((fact, idx) => {
                const IconComp = fact.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-center rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:shadow-md"
                  >
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl border ${fact.bgColor} ${fact.borderColor} mb-4`}
                    >
                      <IconComp className={`size-5 ${fact.iconColor}`} />
                    </div>
                    <h3 className={`${sora} text-[17px] font-bold text-[#0c1e38]`}>
                      {fact.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-slate-500">{fact.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Right Photo */}
            <div className="col-span-6 relative h-[360px] lg:h-[380px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50 shadow-sm">
              <Image
                src="/images/Where-We-Operate/wwo6.png"
                alt="Corporate office representatives reviewing details on a tablet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 600px"
              />
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
            03 ——— CORPORATE OFFICE INFORMATION
          </span>
          <h2
            className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
          >
            Offices are not markets.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
            Corporate information is the authoritative source. No address is published here until it
            is confirmed.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            {/* 4 Stacked Full-Width Cards */}
            {officeFacts.map((fact, idx) => {
              const IconComp = fact.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
                >
                  <div
                    className={`flex size-8 items-center justify-center rounded-lg border ${fact.bgColor} ${fact.borderColor} mb-2.5`}
                  >
                    <IconComp className={`size-4 ${fact.iconColor}`} />
                  </div>
                  <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    {fact.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] text-slate-500">{fact.description}</p>
                </div>
              );
            })}

            {/* Bottom Photo (wwo29.jpg) with Illustrative imagery badge */}
            <div className="relative mt-2 h-[210px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 shadow-xs">
              <Image
                src="/images/Where-We-Operate/wwo29.jpg"
                alt="Store team inspecting inventory"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Illustrative imagery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
