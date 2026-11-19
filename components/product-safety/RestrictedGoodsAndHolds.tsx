import React from "react";
import Image from "next/image";
import { Package, AlertTriangle, Search, Users } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    step: "STEP 1",
    title: "Restricted goods",
    description: "Legal or policy limits apply. Pause.",
    note: "ACTION TO TAKE: Quarantine; seek approval.",
    image: "/images/Product-Safety/ps11.png",
    mobileImage: "/images/Product-Safety/ps39.jpg",
    icon: <Package className="size-4" strokeWidth={2} />,
  },
  {
    step: "STEP 2",
    title: "Hazards",
    description: "Attention or concern confirmed. Pause.",
    note: "ACTION TO TAKE: Evacuate area if danger exists.",
    image: "/images/Product-Safety/ps12.png",
    mobileImage: "/images/Product-Safety/ps40.jpg",
    icon: <AlertTriangle className="size-4" strokeWidth={2} />,
  },
  {
    step: "STEP 3",
    title: "Evidence gaps",
    description: "Safety cannot be established. Pause.",
    note: "ACTION TO TAKE: Request documentation internally.",
    image: "/images/Product-Safety/ps13.png",
    mobileImage: "/images/Product-Safety/ps41.jpg",
    icon: <Search className="size-4" strokeWidth={2} />,
  },
  {
    step: "STEP 4",
    title: "Qualified review",
    description: "Seek qualified review before disposition.",
    note: "ACTION TO TAKE: Await official disposition.",
    image: "/images/Product-Safety/ps14.png",
    mobileImage: "/images/Product-Safety/ps42.jpg",
    icon: <Users className="size-4" strokeWidth={2} />,
  },
];

export default function RestrictedGoodsAndHolds() {
  return (
    <section aria-label="Restricted Goods and Holds - Where in doubt, pause" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">06</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RESTRICTED GOODS AND HOLDS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Where in doubt, pause.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Where restrictions, hazards or evidence gaps exist, pause the affected disposition and seek qualified review. There is no public hold or release button.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[330px] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182d] via-[#08182d]/60 to-transparent" />

                {/* Top-Right Icon Badge */}
                <div className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-sm backdrop-blur-xs">
                  {item.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[11px] font-bold tracking-wider text-[#00b074] uppercase">
                    {item.step}
                  </span>
                  <h3 className={`${sora} mt-1 text-[18px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-slate-300">
                    {item.description}
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
            RESTRICTED GOODS AND HOLDS
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Where in doubt, pause.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Where restrictions, hazards or evidence gaps exist, pause the affected disposition and seek qualified review. There is no public hold or release button.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[210px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs"
              >
                {/* Background Photo */}
                <Image
                  src={item.mobileImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182d] via-[#08182d]/65 to-transparent" />

                {/* Top-Right Badge */}
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                  {item.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-[10px] font-bold tracking-wider text-[#00c48c] uppercase">
                    {item.step}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] leading-snug text-slate-200">
                    {item.description}
                  </p>
                  <div className="mt-2 inline-block rounded-lg border border-[#fef3c7] bg-[#fff8eb]/90 px-2.5 py-1 text-[10.5px] font-medium text-[#926016] backdrop-blur-xs">
                    {item.note}
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
