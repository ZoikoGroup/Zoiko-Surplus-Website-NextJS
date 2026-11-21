import React from "react";
import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const authorityPoints = [
  {
    title: "Who is applying",
    description: "A named, real person.",
  },
  {
    title: "Their role",
    description: "How they relate to the organization.",
  },
  {
    title: "Their authority",
    description: "Evidence that they may act, where asked.",
  },
  {
    title: "Changes",
    description: "Authority can change and be reviewed again.",
  },
];

export default function RepresentativeAuthority() {
  return (
    <section aria-label="Representative Authority - The person applying must be able to act for the business" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">04</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              REPRESENTATIVE AUTHORITY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            The person applying must be
            <br />
            able to act for the business.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            A representative may need to demonstrate authority to act for the organization.
          </p>

          {/* Content: Left list + Right Photo */}
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Points */}
            <div className="space-y-6 lg:col-span-5">
              {authorityPoints.map((item, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Photo */}
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs lg:col-span-7 lg:h-[370px]">
              <Image
                src="/images/Business-Verification/bv11.png"
                alt="Authorized representative using verified account portal"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Illustrative imagery
              </span>
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
            REPRESENTATIVE AUTHORITY
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            The person applying must be able to act for the business.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            A representative may need to demonstrate authority to act for the organization.
          </p>

          {/* 4 Items with warm circle bullets */}
          <div className="mt-6 flex flex-col gap-4">
            {authorityPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#fef5e7]">
                  <div className="size-1.5 rounded-full bg-[#d97706]" />
                </div>
                <div>
                  <h3 className={`${sora} text-[15px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Image */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs">
            <Image
              src="/images/Business-Verification/bv40.jpg"
              alt="Authorized representative using verified account portal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-medium text-[#0c1e38] shadow-2xs backdrop-blur-xs">
              Illustrative imagery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
