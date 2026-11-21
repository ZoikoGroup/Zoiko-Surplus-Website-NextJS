import React from "react";
import Image from "next/image";
import { Building2, Store, Users, Layers, Clock, Globe, FileCheck } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const scopeParts = [
  {
    icon: <Building2 className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Organization",
    desc: "Which business.",
  },
  {
    icon: <Store className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Seller",
    desc: "Whose opportunities.",
  },
  {
    icon: <Users className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Role",
    desc: "What the person may do.",
  },
  {
    icon: <Layers className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Category",
    desc: "Which goods.",
  },
  {
    icon: <Clock className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#0d9488]/10",
    title: "Time",
    desc: "When it is valid.",
  },
  {
    icon: <Globe className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Market",
    desc: "Where it applies.",
  },
  {
    icon: <FileCheck className="size-4 text-[#b45309]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef3c7]",
    title: "Action",
    desc: "View, offer, or order.",
  },
];

export default function PermissionScopeAnatomy() {
  return (
    <section aria-label="Permission Scope Anatomy" className={`${hanken} w-full bg-white py-14 md:py-20`}>
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
              PERMISSION SCOPE ANATOMY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Seven parts of one permission.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            A permission is only valid when every part matches.
          </p>

          {/* Content Layout: Photo Left + 7 Cards Right */}
          <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Photo */}
            <div className="relative h-[480px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs lg:col-span-5">
              <Image
                src="/images/Access-Explained/s8.png"
                alt="Diverse corporate team with verified permissions"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
                Illustrative Imagery
              </div>
            </div>

            {/* Right 7 Cards Grid (2 cols, 4 rows) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {scopeParts.map((part, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
                >
                  <div className={`flex size-8 items-center justify-center rounded-lg ${part.iconBg}`}>
                    {part.icon}
                  </div>
                  <h3 className={`${sora} mt-3 text-[15.5px] font-bold text-[#0c1e38]`}>
                    {part.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {part.desc}
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
            PERMISSION SCOPE ANATOMY
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Seven parts of one permission.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            A permission is only valid when every part matches.
          </p>

          {/* Photo on top with s27.jpg */}
          <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xs">
            <Image
              src="/images/Access-Explained/s27.jpg"
              alt="Seven parts of verified buyer permission"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-slate-700 shadow-xs backdrop-blur-xs">
              Illustrative Imagery
            </div>
          </div>

          {/* 7 Stacked Cards */}
          <div className="mt-5 space-y-3">
            {[
              {
                icon: <Building2 className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
                iconBg: "bg-[#0d9488]/10",
                title: "Organization",
                desc: "Which business.",
              },
              {
                icon: <Users className="size-4 text-[#b45309]" strokeWidth={2.2} />,
                iconBg: "bg-[#fef3c7]",
                title: "Role",
                desc: "What the person may do.",
              },
              {
                icon: <Store className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
                iconBg: "bg-[#0d9488]/10",
                title: "Seller",
                desc: "Whose opportunities.",
              },
              {
                icon: <Globe className="size-4 text-[#b45309]" strokeWidth={2.2} />,
                iconBg: "bg-[#fef3c7]",
                title: "Market",
                desc: "Where it applies.",
              },
              {
                icon: <Layers className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
                iconBg: "bg-[#0d9488]/10",
                title: "Category",
                desc: "Which goods.",
              },
              {
                icon: <FileCheck className="size-4 text-[#b45309]" strokeWidth={2.2} />,
                iconBg: "bg-[#fef3c7]",
                title: "Action",
                desc: "View, offer, or order.",
              },
              {
                icon: <Clock className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
                iconBg: "bg-[#0d9488]/10",
                title: "Time",
                desc: "When it is valid.",
              },
            ].map((part, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex size-8 items-center justify-center rounded-lg ${part.iconBg}`}>
                  {part.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {part.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                  {part.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
