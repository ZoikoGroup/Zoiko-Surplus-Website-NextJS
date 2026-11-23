import React from "react";
import Image from "next/image";
import { AlertCircle, Flag, Search, Box, CheckCircle2 } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const gates = [
  {
    gate: "GATE 1",
    title: "Application",
    desc: "Submission starts a review.",
    image: "/images/Brand-Protection/b8.png",
    icon: <AlertCircle className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    gate: "GATE 2",
    title: "Organization verification",
    desc: "The business and its representative reviewed.",
    image: "/images/Brand-Protection/b9.png",
    icon: <Flag className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    gate: "GATE 3",
    title: "Market and category",
    desc: "Jurisdiction and policy apply.",
    image: "/images/Brand-Protection/b10.png",
    icon: <Search className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    gate: "GATE 4",
    title: "Seller invitation",
    desc: "A seller chooses its audience.",
    image: "/images/Brand-Protection/b11.png",
    icon: <Box className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    gate: "GATE 5",
    title: "Action authorization",
    desc: "Permission at the moment of action.",
    image: "/images/Brand-Protection/b12.png",
    icon: <CheckCircle2 className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
];

export default function FiveSeparateDecisions() {
  return (
    <section aria-label="Five Independent Gates" className={`${hanken} w-full bg-[#fbf9f6] py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">06</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FIVE INDEPENDENT GATES
            </span>
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Five separate decisions.
          </h2>

          {/* 5 Cards Grid: 4 on top, 1 below */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Top 4 Gates */}
            {gates.slice(0, 4).map((gate, idx) => (
              <div
                key={idx}
                className="group relative flex min-h-[260px] lg:min-h-[290px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-5 shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={gate.image}
                  alt={gate.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/55 to-transparent" />
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                  {gate.icon}
                </div>
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                    {gate.gate}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16.5px] font-bold text-white`}>
                    {gate.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-slate-200">
                    {gate.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Gate 5 */}
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative flex min-h-[260px] lg:min-h-[290px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-5 shadow-2xs transition-all duration-300 hover:shadow-md">
              <Image
                src={gates[4].image}
                alt={gates[4].title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/55 to-transparent" />
              <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                {gates[4].icon}
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                  {gates[4].gate}
                </span>
                <h3 className={`${sora} mt-0.5 text-[16.5px] font-bold text-white`}>
                  {gates[4].title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-snug text-slate-200">
                  {gates[4].desc}
                </p>
              </div>
            </div>
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
            FIVE INDEPENDENT GATES
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Five separate decisions.
          </h2>

          {/* 5 Stacked Cards with Photos and Callout Boxes */}
          <div className="mt-6 space-y-4">
            {[
              {
                gate: "GATE 1",
                title: "Application",
                desc: "Submission starts a review.",
                image: "/images/Brand-Protection/b39.jpg",
                icon: <AlertCircle className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Submissions via public mail",
              },
              {
                gate: "GATE 2",
                title: "Verification",
                desc: "The business and its representative reviewed.",
                image: "/images/Brand-Protection/b40.jpg",
                icon: <Flag className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Submissions via public mail",
              },
              {
                gate: "GATE 3",
                title: "Market and category",
                desc: "Jurisdiction and policy apply.",
                image: "/images/Brand-Protection/b41.jpg",
                icon: <Search className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Disallowed category requests",
              },
              {
                gate: "GATE 4",
                title: "Seller invitation",
                desc: "A seller chooses its audience.",
                image: "/images/Brand-Protection/b42.jpg",
                icon: <Box className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Solicitations for private lots",
              },
              {
                gate: "GATE 5",
                title: "Action authorization",
                desc: "Permission at the moment of action.",
                image: "/images/Brand-Protection/b43.jpg",
                icon: <CheckCircle2 className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Independent actions or transfers",
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
                    {item.gate}
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
