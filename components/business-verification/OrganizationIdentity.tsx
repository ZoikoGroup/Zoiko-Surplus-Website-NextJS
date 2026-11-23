import React from "react";
import Image from "next/image";
import { FileText, Globe, FileBadge, Building2 } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const identityFields = [
  {
    title: "Legal name",
    description: "As registered.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <FileText className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Jurisdiction",
    description: "Where it is registered.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Globe className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Registration reference",
    description: "Where applicable.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: <FileBadge className="size-4" strokeWidth={2.5} />,
  },
  {
    title: "Business address",
    description: "A real operating address.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: <Building2 className="size-4" strokeWidth={2.5} />,
  },
];

export default function OrganizationIdentity() {
  return (
    <section aria-label="Organization Identity - Prepare accurate legal details" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">03</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              ORGANIZATION IDENTITY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Prepare accurate legal details.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Registration information, where applicable. These are illustrative fields. Nothing is collected on this page.
          </p>

          {/* Content: Left 2x2 grid + Right Photo */}
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left 2x2 Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
              {identityFields.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:shadow-xs"
                >
                  <div className={`flex size-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <h3 className={`${sora} mt-4 text-[16.5px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Photo */}
            <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs lg:col-span-6 lg:h-[370px]">
              <Image
                src="/images/Business-Verification/bv10.png"
                alt="Stack of organizational registration documents"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
            ORGANIZATION IDENTITY
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Prepare accurate legal details.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Registration information, where applicable. These are illustrative fields. Nothing is collected on this page.
          </p>

          {/* Photo Top */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xs">
            <Image
              src="/images/Business-Verification/bv39.jpg"
              alt="Organization identity registration details"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-medium text-[#0c1e38] shadow-2xs backdrop-blur-xs">
              Illustrative imagery
            </span>
          </div>

          {/* 4 Stacked Cards Below */}
          <div className="mt-4 flex flex-col gap-3">
            {identityFields.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
