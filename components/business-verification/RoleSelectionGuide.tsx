import React from "react";
import Image from "next/image";
import { Building2, Users, Briefcase } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const roles = [
  {
    role: "ROLE 1",
    title: "Enterprise sellers",
    description: "Prove authority over the goods and the right to dispose of them.",
    image: "/images/Business-Verification/bv7.png",
    mobileImage: "/images/Business-Verification/bv36.jpg",
    icon: <Building2 className="size-4" strokeWidth={2} />,
  },
  {
    role: "ROLE 2",
    title: "Business buyers",
    description: "Show a legitimate business and an authorized representative.",
    image: "/images/Business-Verification/bv8.jpg",
    mobileImage: "/images/Business-Verification/bv37.jpg",
    icon: <Users className="size-4" strokeWidth={2} />,
  },
  {
    role: "ROLE 3",
    title: "Service partners",
    description: "Show capability and authority for the services offered.",
    image: "/images/Business-Verification/bv9.png",
    mobileImage: "/images/Business-Verification/bv38.jpg",
    icon: <Briefcase className="size-4" strokeWidth={2} />,
  },
];

export default function RoleSelectionGuide() {
  return (
    <section id="role-selection" aria-label="Role Selection Guide - Requirements vary by role and market" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">02</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              ROLE SELECTION GUIDE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Requirements vary by role and market.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Pick your role to see what generally applies. Nothing here is a final checklist.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Photo Top with top-right icon badge */}
                <div className="relative h-[200px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3.5 right-3.5 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-[#00c48c] uppercase">
                      {item.role}
                    </span>
                    <h3 className={`${sora} mt-1.5 text-[18px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
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
            ROLE SELECTION GUIDE
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Requirements vary by role and market.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Pick your role to see what generally applies. Nothing here is a final checklist.
          </p>

          {/* 3 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {roles.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
              >
                {/* Photo Top with top-right icon badge */}
                <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.mobileImage}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {item.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-[#00c48c] uppercase">
                      {item.role}
                    </span>
                    <h3 className={`${sora} mt-1 text-[16px] font-bold text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                      {item.description}
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
