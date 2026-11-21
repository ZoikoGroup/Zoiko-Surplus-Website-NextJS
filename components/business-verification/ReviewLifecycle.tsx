import React from "react";
import Image from "next/image";
import { FileText, Search, AlertTriangle, CheckCircle, RefreshCw, Check, X, XCircle } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const stages = [
  {
    stage: "STAGE 1",
    title: "Received",
    description: "The request is logged.",
    image: "/images/Business-Verification/bv16.png",
    mobileImage: "/images/Business-Verification/bv45.jpg",
    icon: <FileText className="size-4" strokeWidth={2} />,
  },
  {
    stage: "STAGE 2",
    title: "Under review",
    description: "The team reviews it.",
    image: "/images/Business-Verification/bv17.png",
    mobileImage: "/images/Business-Verification/bv46.jpg",
    icon: <Search className="size-4" strokeWidth={2} />,
  },
  {
    stage: "STAGE 3",
    title: "Information requested",
    description: "More detail may be needed.",
    image: "/images/Business-Verification/bv18.png",
    mobileImage: "/images/Business-Verification/bv47.jpg",
    icon: <AlertTriangle className="size-4" strokeWidth={2} />,
  },
  {
    stage: "STAGE 4",
    title: "Decision",
    description: "A decision is made within its scope.",
    image: "/images/Business-Verification/bv19.png",
    mobileImage: "/images/Business-Verification/bv48.jpg",
    icon: <CheckCircle className="size-4" strokeWidth={2} />,
  },
  {
    stage: "STAGE 5",
    title: "Reassessment",
    description: "Changes may trigger another review.",
    image: "/images/Business-Verification/bv20.png",
    mobileImage: "/images/Business-Verification/bv49.jpg",
    icon: <RefreshCw className="size-4" strokeWidth={2} />,
  },
];

export default function ReviewLifecycle() {
  return (
    <section aria-label="Review Lifecycle - A request is reviewed" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">06</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              REVIEW LIFECYCLE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            A request is reviewed. More
            <br />
            information may be needed.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            No review time is promised. Your own status appears only after secure sign-in.
          </p>

          {/* 5 Cards Grid (4 in top row, 1 in bottom row) */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((item, idx) => (
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
                    {item.stage}
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
          {/* Mobile Evidence Preparation Block */}
          <div className="mb-12">
            <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              EVIDENCE PREPARATION
            </div>
            <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
              Prepare only what is asked.
            </h2>
            <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
              Evidence requirements vary. Seek out the approved application, then share only what it requests, through its secure route.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {/* Do */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <CheckCircle className="size-4" strokeWidth={2.5} />
                  </div>
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    Do
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Keep your legal details up to date and correct",
                    "Identify who can act for the business",
                    "Use only the approved route to share",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#556987]">
                      <Check className="size-3.5 shrink-0 mt-0.5 text-emerald-500" strokeWidth={2.5} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Do not */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <XCircle className="size-4" strokeWidth={2.5} />
                  </div>
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    Do not
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Send deep personal or internal docs for a review",
                    "Share watermarked internal data",
                    "Upload to a public contact route",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] text-[#556987]">
                      <X className="size-3.5 shrink-0 mt-0.5 text-rose-500" strokeWidth={2.5} />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Review Lifecycle Block */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              REVIEW LIFECYCLE
            </div>

            <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
              A request is reviewed. More information may be needed.
            </h2>

            <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
              No review time is promised. Your own status appears only after secure sign-in.
            </p>

            {/* 5 Stacked Cards */}
            <div className="mt-6 flex flex-col gap-4">
              {stages.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative h-[190px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs"
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
                      {item.stage}
                    </span>
                    <h3 className={`${sora} mt-0.5 text-[16px] font-bold text-white`}>
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[12px] leading-snug text-slate-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
