import React from "react";
import Image from "next/image";
import { ListFilter, AlertTriangle, Headphones, Home, Factory } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const desktopCategories = [
  {
    category: "CATEGORY 1",
    title: "Apparel & Footwear",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo11.png",
    icon: ListFilter,
  },
  {
    category: "CATEGORY 2",
    title: "Food & Grocery",
    subtitle: "Separate controls apply.",
    image: "/images/Where-We-Operate/wwo12.jpg",
    icon: AlertTriangle,
  },
  {
    category: "CATEGORY 3",
    title: "Consumer Electronics",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo13.png",
    icon: Headphones,
  },
  {
    category: "CATEGORY 4",
    title: "Home & Lifestyle",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo14.jpg",
    icon: Home,
  },
  {
    category: "CATEGORY 5",
    title: "Industrial & Business Goods",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo15.png",
    icon: Factory,
  },
];

const mobileCategories = [
  {
    category: "CATEGORY 1",
    title: "Apparel & Footwear",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo34.jpg",
    icon: ListFilter,
  },
  {
    category: "CATEGORY 2",
    title: "Food & Grocery",
    subtitle: "Separate controls apply.",
    image: "/images/Where-We-Operate/wwo35.jpg",
    icon: AlertTriangle,
  },
  {
    category: "CATEGORY 3",
    title: "Consumer Electronics",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo36.jpg",
    icon: Headphones,
  },
  {
    category: "CATEGORY 4",
    title: "Home & Lifestyle",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo37.jpg",
    icon: Home,
  },
  {
    category: "CATEGORY 5",
    title: "Industrial & Business Goods",
    subtitle: "Educational overview.",
    image: "/images/Where-We-Operate/wwo38.jpg",
    icon: Factory,
  },
];

export default function CategoryScope() {
  return (
    <section
      aria-label="Category Scope"
      className={`${hanken} w-full bg-white py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-widest text-[#926016] uppercase">
              05 ——— CATEGORY SCOPE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0c1e38]`}
          >
            Five families. None implies activation.
          </h2>
          <p className="mt-2 text-[15px] text-slate-500">
            Each links to a published overview when approved. Food and grocery needs separate
            controls.
          </p>

          {/* 5 Cards Grid: 4 columns, card 5 in second row first column */}
          <div className="mt-8 grid grid-cols-4 gap-5">
            {desktopCategories.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative h-[300px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs transition-all hover:shadow-md"
                >
                  {/* Background Photo */}
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
                      {item.category}
                    </span>
                    <h3 className={`${sora} mt-0.5 text-[15px] font-bold leading-snug text-white`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-tight text-slate-300">
                      {item.subtitle}
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
            05 ——— CATEGORY SCOPE
          </span>
          <h2
            className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
          >
            Five families. None implies activation.
          </h2>
          <p className="mt-1.5 text-[13px] text-slate-500">
            Each links to a published overview when approved. Food and grocery needs separate
            controls.
          </p>

          {/* 5 Vertically Stacked Full-Width Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {mobileCategories.map((item, idx) => {
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
                      {item.category}
                    </span>
                    <h3 className={`${sora} mt-0.5 text-[15px] font-bold leading-snug text-white`}>
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[12px] text-slate-300 leading-normal">
                      {item.subtitle}
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
