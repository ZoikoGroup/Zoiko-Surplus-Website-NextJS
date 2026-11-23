import React from "react";
import Image from "next/image";
import { FileText, Users, Briefcase } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const parties = [
  {
    partyNumber: "PARTY 1",
    title: "Seller preparation",
    desc: "Prepare authority, origin, restrictions and proposed channel instructions.",
    image: "/images/Brand-Protection/b18.png",
    icon: <FileText className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    partyNumber: "PARTY 2",
    title: "Buyer responsibilities",
    desc: "Respect allowed terms, confidentiality and applicable restrictions.",
    image: "/images/Brand-Protection/b19.png",
    icon: <Users className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
  {
    partyNumber: "PARTY 3",
    title: "Partner responsibilities",
    desc: "Work within contracted, seller-authorized remit.",
    image: "/images/Brand-Protection/b20.png",
    icon: <Briefcase className="size-3.5 text-slate-700" strokeWidth={2.2} />,
  },
];

export default function ThreePartiesDuties() {
  return (
    <section aria-label="Who Does What" className={`${hanken} w-full bg-[#fbf9f6] py-14 md:py-20`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">08</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              WHO DOES WHAT
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Three parties. Three sets of duties.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Duties come from agreements and applicable law, not from this page.
          </p>

          {/* 3 Horizontal Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {parties.map((party, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Photo with top right icon badge */}
                <div className="relative h-[180px] lg:h-[200px] w-full bg-slate-100">
                  <Image
                    src={party.image}
                    alt={party.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                    {party.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#926016] uppercase">
                    {party.partyNumber}
                  </span>
                  <h3 className={`${sora} mt-1 text-[17px] font-bold text-[#0c1e38]`}>
                    {party.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                    {party.desc}
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
            WHO DOES WHAT
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[24px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Three parties. Three sets of duties.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Duties come from agreements and applicable law, not from this page.
          </p>

          {/* 3 Stacked Cards with Photos */}
          <div className="mt-6 space-y-4">
            {[
              {
                partyNumber: "PARTY 1",
                title: "Seller preparation",
                desc: "Prepare authority, origin, restrictions and proposed channel instructions.",
                image: "/images/Brand-Protection/b50.jpg",
                icon: <FileText className="size-3.5 text-slate-700" strokeWidth={2.2} />,
              },
              {
                partyNumber: "PARTY 2",
                title: "Buyer responsibilities",
                desc: "Respect allowed terms, confidentiality and applicable restrictions.",
                image: "/images/Brand-Protection/b51.jpg",
                icon: <Users className="size-3.5 text-slate-700" strokeWidth={2.2} />,
              },
              {
                partyNumber: "PARTY 3",
                title: "Partner responsibilities",
                desc: "Work within contracted, seller-authorized remit.",
                image: "/images/Brand-Protection/b52.jpg",
                icon: <Briefcase className="size-3.5 text-slate-700" strokeWidth={2.2} />,
              },
            ].map((party, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
              >
                {/* Photo with top right icon badge */}
                <div className="relative h-[160px] w-full bg-slate-100">
                  <Image
                    src={party.image}
                    alt={party.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full bg-white/90 shadow-xs backdrop-blur-xs">
                    {party.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#0d9488] uppercase">
                    {party.partyNumber}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16px] font-bold text-[#0c1e38]`}>
                    {party.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {party.desc}
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
