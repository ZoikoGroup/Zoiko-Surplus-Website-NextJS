import React from "react";
import Image from "next/image";
import { Briefcase, Globe, ShieldCheck, FileText } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const considerations = [
  {
    tag: "CONSIDERATION 1",
    title: "Business purpose",
    description: "Intended participation, product families and commercial activity.",
    note: "DO NOT SEND: Banking logins or passwords.",
    image: "/images/Business-Verification/bv12.png",
    mobileImage: "/images/Business-Verification/bv41.jpg",
    icon: <Briefcase className="size-4" strokeWidth={2} />,
  },
  {
    tag: "CONSIDERATION 2",
    title: "Market and category scope",
    description: "Verification is not permission to trade in every country, category or corridor.",
    note: "DO NOT SEND: Blanket global requests.",
    image: "/images/Business-Verification/bv13.png",
    mobileImage: "/images/Business-Verification/bv42.jpg",
    icon: <Globe className="size-4" strokeWidth={2} />,
  },
  {
    tag: "CONSIDERATION 3",
    title: "Screening and policy checks",
    description: "Extra checks may apply to the selected role and market.",
    note: "DO NOT SEND: Unredacted personal files.",
    image: "/images/Business-Verification/bv14.png",
    mobileImage: "/images/Business-Verification/bv43.jpg",
    icon: <ShieldCheck className="size-4" strokeWidth={2} />,
  },
  {
    tag: "CONSIDERATION 4",
    title: "Evidence, kept narrow",
    description: "Prepare only what the approved application asks for.",
    note: "DO NOT SEND: Speculative bulk uploads.",
    image: "/images/Business-Verification/bv15.png",
    mobileImage: "/images/Business-Verification/bv44.jpg",
    icon: <FileText className="size-4" strokeWidth={2} />,
  },
];

export default function PurposeScopeAndScreening() {
  return (
    <section aria-label="Purpose, Scope and Screening - What a review may consider" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">05</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              PURPOSE, SCOPE AND SCREENING
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            What a review may consider.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Requirements are versioned by market and role. They are not the same worldwide.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {considerations.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Photo Top with top-right badge */}
                <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <span className="text-[10.5px] font-bold tracking-wider text-[#00c48c] uppercase">
                      {item.tag}
                    </span>
                    <h3 className={`${sora} mt-1.5 text-[16.5px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
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
            PURPOSE, SCOPE AND SCREENING
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            What a review may consider.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Requirements are versioned by market and role. They are not the same worldwide.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {considerations.map((item, idx) => (
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
                    {item.tag}
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
