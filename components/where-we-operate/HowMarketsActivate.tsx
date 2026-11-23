import React from "react";
import Image from "next/image";
import { Scale, ShieldCheck, Truck, Users } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const desktopSteps = [
  {
    step: "STEP 1",
    title: "Policy and legal setup",
    description: "Responsible parties and rules.",
    image: "/images/Where-We-Operate/wwo7.png",
    icon: Scale,
  },
  {
    step: "STEP 2",
    title: "Category safety approval",
    description: "Categories are approved one by one.",
    image: "/images/Where-We-Operate/wwo8.png",
    icon: ShieldCheck,
  },
  {
    step: "STEP 3",
    title: "Corridor and service readiness",
    description: "Routes and services are prepared.",
    image: "/images/Where-We-Operate/wwo9.png",
    icon: Truck,
  },
  {
    step: "STEP 4",
    title: "Authorized participation",
    description: "Organizations are admitted.",
    image: "/images/Where-We-Operate/wwo10.png",
    icon: Users,
  },
];

const mobileSteps = [
  {
    step: "STEP 1",
    title: "Policy and legal setup",
    description: "Responsible parties and rules.",
    image: "/images/Where-We-Operate/wwo30.jpg",
    icon: Scale,
  },
  {
    step: "STEP 2",
    title: "Category safety approval",
    description: "Categories are approved one by one.",
    image: "/images/Where-We-Operate/wwo31.jpg",
    icon: ShieldCheck,
  },
  {
    step: "STEP 3",
    title: "Corridor and service readiness",
    description: "Routes and services are prepared.",
    image: "/images/Where-We-Operate/wwo32.jpg",
    icon: Truck,
  },
  {
    step: "STEP 4",
    title: "Authorized participation",
    description: "Organizations are admitted.",
    image: "/images/Where-We-Operate/wwo33.jpg",
    icon: Users,
  },
];

export default function HowMarketsActivate() {
  return (
    <section
      id="how-markets-activate"
      aria-label="How Markets Become Available"
      className={`${hanken} w-full bg-[#FAF7F2] py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-widest text-[#926016] uppercase">
              04 ——— HOW MARKETS BECOME AVAILABLE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0c1e38]`}
          >
            Four steps, in order.
          </h2>
          <p className="mt-2 text-[15px] text-slate-500">
            Each step needs its own approval. None is skipped.
          </p>

          {/* 4-Card Grid */}
          <div className="mt-8 grid grid-cols-4 gap-5">
            {desktopSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs transition-all hover:shadow-md"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1200px) 25vw, 320px"
                  />

                  {/* Top-right floating translucent icon badge */}
                  <div className="absolute top-3 right-3 z-10 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-xs">
                    <IconComp className="size-3.5 text-slate-700" />
                  </div>

                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38]/95 via-[#0c1e38]/70 via-45% to-transparent" />

                  {/* Bottom Text Content */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                      {item.step}
                    </span>
                    <h3 className={`${sora} mt-0.5 text-[15px] font-bold leading-snug text-white`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-tight text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (reflects exact mobile design)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4">
          <span className="text-[11px] font-bold tracking-widest text-[#926016] uppercase">
            04 ——— HOW MARKETS BECOME AVAILABLE
          </span>
          <h2
            className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
          >
            Four steps, in order.
          </h2>
          <p className="mt-1.5 text-[13px] text-slate-500">
            Each step needs its own approval. None is skipped.
          </p>

          {/* 4 Full-Width Vertically Stacked Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {mobileSteps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute top-3 right-3 z-10 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-sm">
                    <IconComp className="size-3.5 text-slate-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38]/95 via-[#0c1e38]/70 via-45% to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                      {item.step}
                    </span>
                    <h3 className={`${sora} mt-0.5 text-[15px] font-bold leading-snug text-white`}>
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-slate-300 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
