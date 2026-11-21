import React from "react";
import Image from "next/image";
import { Laptop, FileText, Search, Package, CheckSquare, Shield, Users, Lock } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const gates = [
  {
    gate: "GATE 1",
    title: "Application",
    description: "Submission starts a review.",
    note: "NOTE: Required step",
    image: "/images/Business-Verification/bv2.png",
    mobileImage: "/images/Business-Verification/bv31.jpg",
    icon: <Laptop className="size-4" strokeWidth={2} />,
    mobileIcon: <FileText className="size-3.5" strokeWidth={2} />,
  },
  {
    gate: "GATE 2",
    title: "Organization verification",
    description: "The business and its representative reviewed.",
    note: "NOTE: Core identity review",
    image: "/images/Business-Verification/bv3.png",
    mobileImage: "/images/Business-Verification/bv32.jpg",
    icon: <FileText className="size-4" strokeWidth={2} />,
    mobileIcon: <Search className="size-3.5" strokeWidth={2} />,
  },
  {
    gate: "GATE 3",
    title: "Market and category",
    description: "Jurisdiction and policy eligibility.",
    note: "NOTE: Policy rules apply",
    image: "/images/Business-Verification/bv4.png",
    mobileImage: "/images/Business-Verification/bv33.jpg",
    icon: <Search className="size-4" strokeWidth={2} />,
    mobileIcon: <Shield className="size-3.5" strokeWidth={2} />,
  },
  {
    gate: "GATE 4",
    title: "Seller invitation",
    description: "A seller chooses its audience.",
    note: "NOTE: Discretionary access",
    image: "/images/Business-Verification/bv5.png",
    mobileImage: "/images/Business-Verification/bv34.jpg",
    icon: <Package className="size-4" strokeWidth={2} />,
    mobileIcon: <Users className="size-3.5" strokeWidth={2} />,
  },
  {
    gate: "GATE 5",
    title: "Action authorization",
    description: "Permission at the moment of action.",
    note: "NOTE: Contextual check",
    image: "/images/Business-Verification/bv6.png",
    mobileImage: "/images/Business-Verification/bv35.jpg",
    icon: <CheckSquare className="size-4" strokeWidth={2} />,
    mobileIcon: <Lock className="size-3.5" strokeWidth={2} />,
  },
];

export default function FiveDecisionGates() {
  return (
    <section aria-label="Five Decision Gates - Verification is one of five decisions" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">01</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              FIVE DECISION GATES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Verification is one of five decisions.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Application, organization verification, market and category eligibility, seller invitation and action authorization are separate.
          </p>

          {/* 5 Cards Grid (4 in top row, 1 in bottom row) */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gates.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[310px] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-2xs transition-all duration-300 hover:shadow-md"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182d] via-[#08182d]/60 to-transparent" />

                {/* Top-Right Icon Badge */}
                <div className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-sm backdrop-blur-xs">
                  {item.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[11px] font-bold tracking-wider text-[#00c48c] uppercase">
                    {item.gate}
                  </span>
                  <h3 className={`${sora} mt-1 text-[18px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-slate-300">
                    {item.description}
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
            FIVE DECISION GATES
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Verification is one of five decisions.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Application, organization verification, market and category eligibility, seller invitation and action authorization are separate.
          </p>

          {/* 5 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {gates.map((item, idx) => (
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
                  {item.mobileIcon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-[10px] font-bold tracking-wider text-[#00c48c] uppercase">
                    {item.gate}
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
