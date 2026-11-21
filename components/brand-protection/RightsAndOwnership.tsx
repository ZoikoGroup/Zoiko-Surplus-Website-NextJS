import React from "react";
import Image from "next/image";
import { ShieldCheck, FileText, ScrollText, BookmarkCheck } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const ownershipPoints = [
  {
    icon: <ShieldCheck className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Authority to dispose",
    desc: "You control authority for goods.",
  },
  {
    icon: <FileText className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Brand permission",
    desc: "You may use brand assets.",
  },
  {
    icon: <ScrollText className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Contracts",
    desc: "Supplier terms may limit resale.",
  },
  {
    icon: <BookmarkCheck className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Written records",
    desc: "Keep them in your own systems.",
  },
];

export default function RightsAndOwnership() {
  return (
    <section id="rights-governance" aria-label="Rights and Ownership" className={`${hanken} w-full bg-white py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">01</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RIGHTS AND OWNERSHIP
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Confirm the right to dispose of goods.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Confirm your authority to dispose of goods and your permission to use brand assets. Both are needed.
          </p>

          {/* Content Layout: Photo Left + 2x2 Grid Right */}
          <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Photo */}
            <div className="relative h-[320px] lg:h-[350px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs lg:col-span-5">
              <Image
                src="/images/Brand-Protection/b2.png"
                alt="Confirm authority to dispose of goods"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Illustrative Imagery
              </div>
            </div>

            {/* Right 2x2 Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {ownershipPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
                >
                  <div className={`flex size-8 items-center justify-center rounded-lg ${point.iconBg}`}>
                    {point.icon}
                  </div>
                  <h3 className={`${sora} mt-3 text-[15.5px] font-bold text-[#0c1e38]`}>
                    {point.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {point.desc}
                  </p>
                </div>
              ))}
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
            RIGHTS AND OWNERSHIP
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Confirm the right to dispose of goods.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Confirm your authority to dispose of goods and your permission to use brand assets. Both are needed.
          </p>

          {/* Photo on top with b30.jpg */}
          <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
            <Image
              src="/images/Brand-Protection/b30.jpg"
              alt="Confirm authority to dispose of goods"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
              Illustrative Imagery
            </div>
          </div>

          {/* 4 Stacked Cards */}
          <div className="mt-5 space-y-3">
            {ownershipPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-lg ${point.iconBg}`}>
                  {point.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {point.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
