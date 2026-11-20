import React from "react";
import Image from "next/image";
import { FileText, SlidersHorizontal, Lock } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const desktopMeanings = [
  {
    meaning: "MEANING 1",
    title: "Corporate presence",
    description: "An office or entity exists. It does not mean services are active there.",
    image: "/images/Where-We-Operate/wwo2.png",
    icon: FileText,
  },
  {
    meaning: "MEANING 2",
    title: "Activated services",
    description: "A market is switched on only after approved setup. It is not implied by an office.",
    image: "/images/Where-We-Operate/wwo3.jpg",
    icon: SlidersHorizontal,
  },
  {
    meaning: "MEANING 3",
    title: "Participation rights",
    description: "An organization needs its own permissions. They are not implied by either.",
    image: "/images/Where-We-Operate/wwo4.png",
    icon: Lock,
  },
];

const mobileMeanings = [
  {
    meaning: "MEANING 1",
    title: "Corporate presence",
    description: "An office or entity exists. It does not mean services are active there.",
    image: "/images/Where-We-Operate/wwo25.jpg",
    icon: FileText,
  },
  {
    meaning: "MEANING 2",
    title: "Activated services",
    description: "A market is switched on only after approved setup. It is not implied by an office.",
    image: "/images/Where-We-Operate/wwo26.jpg",
    icon: SlidersHorizontal,
  },
  {
    meaning: "MEANING 3",
    title: "Participation rights",
    description: "An organization needs its own permissions. They are not implied by either.",
    image: "/images/Where-We-Operate/wwo27.jpg",
    icon: Lock,
  },
];

export default function ThreeMeanings() {
  return (
    <section
      aria-label="Three Meanings"
      className={`${hanken} w-full bg-white pt-8 pb-14 md:pt-10 md:pb-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-widest text-[#926016] uppercase">
              01 ——— THREE MEANINGS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0c1e38]`}
          >
            Three different things, kept apart.
          </h2>
          <p className="mt-2 text-[15px] text-slate-500">
            Each one does not establish the others.
          </p>

          {/* 3-Card Grid */}
          <div className="mt-8 grid grid-cols-3 gap-6">
            {desktopMeanings.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all hover:shadow-md"
                >
                  {/* Image with floating badge */}
                  <div className="relative h-[210px] w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-xs">
                      <IconComponent className="size-4 text-slate-700" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-4 pb-2">
                    <span className="text-[11px] font-bold tracking-wider text-[#0d9488] uppercase">
                      {item.meaning}
                    </span>
                    <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
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
            01 ——— THREE MEANINGS
          </span>
          <h2
            className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
          >
            Three different things, kept apart.
          </h2>
          <p className="mt-1.5 text-[13px] text-slate-500">
            Each one does not establish the others.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {mobileMeanings.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs"
                >
                  <div className="relative h-[180px] w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/95 shadow-sm">
                      <IconComponent className="size-3.5 text-slate-700" />
                    </div>
                  </div>
                  <div className="pt-3.5 pb-1">
                    <span className="text-[10px] font-bold tracking-wider text-[#0d9488] uppercase">
                      {item.meaning}
                    </span>
                    <h3 className={`${sora} mt-1 text-[17px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-500">
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
