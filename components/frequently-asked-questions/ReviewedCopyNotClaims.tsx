import React from "react";
import Image from "next/image";
import { FileText, Clock, Flag, EyeOff } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const governanceCards = [
  {
    icon: <FileText className="size-4.5 text-[#d97706]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef7ec]",
    title: "Owner review",
    desc: "Content, Legal and policy owners approve each answer.",
  },
  {
    icon: <Clock className="size-4.5 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#e6f4f2]",
    title: "Review dates",
    desc: "Shown only when reviewed current.",
  },
  {
    icon: <Flag className="size-4.5 text-[#d97706]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef7ec]",
    title: "Scope notes",
    desc: "Answers state where terms vary.",
  },
  {
    icon: <EyeOff className="size-4.5 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#e6f4f2]",
    title: "No private data",
    desc: "No queries or case details are collected.",
  },
];

export default function ReviewedCopyNotClaims() {
  return (
    <section
      aria-label="How Answers Are Governed - Reviewed copy, not live claims"
      className={`${hanken} w-full bg-white py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">09</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              HOW ANSWERS ARE GOVERNED
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] font-bold tracking-tight text-[#0c1e38] lg:text-[36px]`}
          >
            Reviewed copy, not live claims.
          </h2>
          <p className="mt-2.5 max-w-3xl text-[15px] leading-relaxed text-slate-600">
            Answers are carried forward from Resources FAQ v1.0 and need independent review before publication.
          </p>

          {/* 2-Column Content: Left Photo with badge, Right 2x2 Grid */}
          <div className="mt-10 grid grid-cols-12 gap-8 items-stretch">
            {/* Left Photo */}
            <div className="col-span-5 relative min-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white">
              <Image
                src="/images/Frequently-Asked-Questions/fa17.png"
                alt="Governance and independent review illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 45vw, 550px"
              />
              <div className="absolute bottom-3.5 left-3.5 rounded-full bg-white/95 px-3 py-1 shadow-xs">
                <span className="block text-[11px] font-medium text-slate-800">
                  Public guidance
                </span>
              </div>
            </div>

            {/* Right 2x2 Cards Grid */}
            <div className="col-span-7 grid grid-cols-2 gap-5">
              {governanceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div
                    className={`flex size-10 items-center justify-center rounded-lg ${card.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className={`${sora} mt-5 text-[17px] font-bold tracking-tight text-[#0c1e38]`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly reserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              HOW ANSWERS ARE GOVERNED
            </span>
          </div>

          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Reviewed copy, not live claims.
          </h2>
          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
            Answers are carried forward from Resources FAQ v1.0 and need independent review before publication.
          </p>

          {/* Top Illustration Photo with badge */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
            <Image
              src="/images/Frequently-Asked-Questions/fa44.jpg"
              alt="Answers governance illustration"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-1 text-center shadow-xs">
              <span className="block text-[10px] font-medium text-slate-800">
                Public guidance
              </span>
            </div>
          </div>

          {/* 4 Stacked Cards */}
          <div className="mt-5 flex flex-col gap-3.5">
            {governanceCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-4.5 shadow-2xs"
              >
                <div
                  className={`flex size-8 items-center justify-center rounded-lg ${card.iconBg}`}
                >
                  {card.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {card.title}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
