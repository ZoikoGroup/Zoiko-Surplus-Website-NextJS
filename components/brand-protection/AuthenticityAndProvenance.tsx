import React from "react";
import Image from "next/image";
import { Globe, FileSpreadsheet, Search } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const records = [
  {
    recordNumber: "RECORD 1",
    title: "Origin",
    desc: "Where the goods came from.",
    icon: <Globe className="size-4 text-[#926016]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    image: "/images/Brand-Protection/b31.jpg",
  },
  {
    recordNumber: "RECORD 2",
    title: "Description",
    desc: "What they are, in plain facts.",
    icon: <FileSpreadsheet className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#ffedd5]",
    image: "/images/Brand-Protection/b32.jpg",
  },
  {
    recordNumber: "RECORD 3",
    title: "Condition",
    desc: "Their state, objectively recorded.",
    icon: <Search className="size-4 text-[#78350f]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    image: "/images/Brand-Protection/b33.jpg",
  },
];

export default function AuthenticityAndProvenance() {
  return (
    <section aria-label="Authenticity and Provenance" className={`${hanken} w-full bg-[#fbf9f6] py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">02</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              AUTHENTICITY AND PROVENANCE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Document origin, description and condition.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Records support trust. They are not a guarantee of authenticity.
          </p>

          {/* 3 Horizontal Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {records.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-lg ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div className="mt-4 text-[11px] font-bold tracking-wider text-[#926016] uppercase">
                  {item.recordNumber}
                </div>
                <h3 className={`${sora} mt-1 text-[17px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#556987]">
                  {item.desc}
                </p>
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
            AUTHENTICITY AND PROVENANCE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Document origin, description and condition.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Records support trust. They are not a guarantee of authenticity.
          </p>

          {/* 3 Stacked Cards with Photos */}
          <div className="mt-6 space-y-4">
            {records.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
              >
                {/* Photo with top right icon badge */}
                <div className="relative h-[160px] w-full bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#0d9488] uppercase">
                    {item.recordNumber}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

