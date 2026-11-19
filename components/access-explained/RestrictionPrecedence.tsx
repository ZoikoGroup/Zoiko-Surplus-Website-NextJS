import React from "react";
import Image from "next/image";
import { AlertTriangle, ShieldAlert, Ban, Clock } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const overrideConditions = [
  {
    overrideNum: "OVERRIDE 1",
    title: "Product safety and recalls",
    desc: "Open recalls or holds block action.",
    image: "/images/Access-Explained/s9.png",
    icon: <AlertTriangle className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    overrideNum: "OVERRIDE 2",
    title: "Sanctions and legal limits",
    desc: "Statutory or policy restrictions.",
    image: "/images/Access-Explained/s10.png",
    icon: <ShieldAlert className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    overrideNum: "OVERRIDE 3",
    title: "Seller block",
    desc: "A seller excludes an organization.",
    image: "/images/Access-Explained/s11.jpg",
    icon: <Ban className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    overrideNum: "OVERRIDE 4",
    title: "Expired status",
    desc: "Outdated reviews no longer apply.",
    image: "/images/Access-Explained/s12.png",
    icon: <Clock className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
];

export default function RestrictionPrecedence() {
  return (
    <section aria-label="Restriction Precedence" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">05</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RESTRICTION PRECEDENCE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Some conditions override access.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Safety, recalls, sanctions, seller blocks and expired status come first.
          </p>

          {/* 4 Photo Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {overrideConditions.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex min-h-[260px] lg:min-h-[290px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-5 shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/55 to-transparent" />
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                    {item.overrideNum}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16.5px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-slate-200">
                    {item.desc}
                  </p>
                </div>
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
            RESTRICTION PRECEDENCE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Some conditions override access.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Safety, recalls, sanctions, seller blocks and expired status come first.
          </p>

          {/* 4 Stacked Photo Cards with Callout Boxes */}
          <div className="mt-6 space-y-4">
            {[
              {
                overrideNum: "OVERRIDE 1",
                title: "Product safety and recalls",
                desc: "Open recalls or holds block all action.",
                image: "/images/Access-Explained/s28.jpg",
                icon: <AlertTriangle className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Open recalls, expired lot codes.",
              },
              {
                overrideNum: "OVERRIDE 2",
                title: "Sanctions and legal limits",
                desc: "Legal and network overrides apply.",
                image: "/images/Access-Explained/s29.jpg",
                icon: <ShieldAlert className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Overridden lot authorization.",
              },
              {
                overrideNum: "OVERRIDE 3",
                title: "Seller block",
                desc: "A seller explicitly blocks an organization.",
                image: "/images/Access-Explained/s30.jpg",
                icon: <Ban className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Circumvention attempt requests.",
              },
              {
                overrideNum: "OVERRIDE 4",
                title: "Expired status",
                desc: "Outdated permissions no longer apply.",
                image: "/images/Access-Explained/s31.jpg",
                icon: <Clock className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Expired buyer intake forms.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-4 shadow-2xs"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/60 to-transparent" />
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase">
                    {item.overrideNum}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16.5px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-slate-200">
                    {item.desc}
                  </p>

                  <div className="mt-3 rounded-xl border border-[#fef3c7] bg-[#fffbeb]/95 p-3 text-left">
                    <span className="text-[10px] font-bold tracking-wider text-[#926016] uppercase">
                      DO NOT SEND
                    </span>
                    <p className="mt-0.5 text-[12px] font-medium text-[#78350f]">
                      {item.doNotSend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
