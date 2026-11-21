import React from "react";
import Image from "next/image";
import { Search, Flag, Package, FileText } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const assetTypes = [
  {
    assetNumber: "ASSET 1",
    title: "Photography",
    desc: "Product photos need the right to use them.",
    image: "/images/Brand-Protection/b3.png",
    icon: <Search className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    assetNumber: "ASSET 2",
    title: "Trademarks",
    desc: "Names and logos need confirmation.",
    image: "/images/Brand-Protection/b4.png",
    icon: <Flag className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    assetNumber: "ASSET 3",
    title: "Packaging",
    desc: "Branded packaging can convey rights.",
    image: "/images/Brand-Protection/b5.png",
    icon: <Package className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    assetNumber: "ASSET 4",
    title: "Commercial copy",
    desc: "Descriptions and claims need approval.",
    image: "/images/Brand-Protection/b6.png",
    icon: <FileText className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
];

export default function BrandAssetUse() {
  return (
    <section aria-label="Brand Asset Use" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">03</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              BRAND ASSET USE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Four kinds of asset need applicable rights.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Photography, trademarks, packaging and commercial copy each carry their own rights.
          </p>

          {/* 4 Photo Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assetTypes.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex min-h-[260px] lg:min-h-[290px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-5 shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/55 to-transparent" />

                {/* Top Right Circular Badge */}
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                  {item.icon}
                </div>

                {/* Content at Bottom */}
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                    {item.assetNumber}
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
            BRAND ASSET USE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Four kinds of asset need applicable rights.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Photography, trademarks, packaging and commercial copy each carry their own rights.
          </p>

          {/* 4 Stacked Photo Cards with Warning Callouts */}
          <div className="mt-6 space-y-4">
            {[
              {
                assetNumber: "ASSET 1",
                title: "Photography",
                desc: "Product photos need the right to use them.",
                image: "/images/Brand-Protection/b34.jpg",
                icon: <Search className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Third-party unverified photos",
              },
              {
                assetNumber: "ASSET 2",
                title: "Trademarks",
                desc: "Names and logos need confirmation.",
                image: "/images/Brand-Protection/b35.jpg",
                icon: <Flag className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Registered trademark logos",
              },
              {
                assetNumber: "ASSET 3",
                title: "Packaging",
                desc: "Branded packaging can convey rights.",
                image: "/images/Brand-Protection/b36.jpg",
                icon: <Package className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Proprietary barcode or tags",
              },
              {
                assetNumber: "ASSET 4",
                title: "Commercial copy",
                desc: "Descriptions and claims need approval.",
                image: "/images/Brand-Protection/b37.jpg",
                icon: <FileText className="size-3.5 text-slate-700" strokeWidth={2.2} />,
                doNotSend: "Restricted copy / claims text",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-4 shadow-2xs"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/60 to-transparent" />

                {/* Top Right Circular Badge */}
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                  {item.icon}
                </div>

                {/* Content at Bottom */}
                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-wider text-[#2dd4bf] uppercase">
                    {item.assetNumber}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16.5px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-snug text-slate-200">
                    {item.desc}
                  </p>

                  {/* Warning Callout Box */}
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
