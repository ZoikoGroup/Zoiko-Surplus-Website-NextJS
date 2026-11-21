import React from "react";
import Image from "next/image";
import { FileText, Handshake, Bookmark, X } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const supportCards = [
  {
    icon: <FileText className="size-4.5 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#e6f4f2]",
    title: "Transactions",
    desc: "Handled via your account route.",
  },
  {
    icon: <Handshake className="size-4.5 text-[#d97706]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef7ec]",
    title: "Offers",
    desc: "Not discussed publicly.",
  },
  {
    icon: <Bookmark className="size-4.5 text-[#0d9488]" strokeWidth={2.2} />,
    iconBg: "bg-[#e6f4f2]",
    title: "Cases",
    desc: "Use the authorized channel.",
  },
  {
    icon: <X className="size-4.5 text-[#d97706]" strokeWidth={2.2} />,
    iconBg: "bg-[#fef7ec]",
    title: "No lookups",
    desc: "No order or case search here.",
  },
];

export default function AuthorizedAccountSupport() {
  return (
    <section
      aria-label="Private Transaction Help - Use your authorized account support route"
      className={`${hanken} w-full bg-white py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">06</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              PRIVATE TRANSACTION HELP
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] font-bold tracking-tight text-[#0c1e38] lg:text-[36px]`}
          >
            Use your authorized account support route.
          </h2>
          <p className="mt-3 max-w-[850px] text-[15px] leading-relaxed text-slate-600">
            For a transaction, offer or case, use the account support route you are authorized to use.
          </p>

          {/* 2-Column Content: Left Image, Right 2x2 Grid */}
          <div className="mt-10 grid grid-cols-12 gap-8 items-stretch">
            {/* Left Photo */}
            <div className="col-span-5 relative min-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm bg-white">
              <Image
                src="/images/Help-Center/hc8.png"
                alt="Authorized account support illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 45vw, 550px"
              />
            </div>

            {/* Right 2x2 Cards Grid */}
            <div className="col-span-7 grid grid-cols-2 gap-5">
              {supportCards.map((card, idx) => (
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
            <span className="text-[12px] font-bold text-[#0c1e38]">06</span>
            <span className="h-[1px] w-6 bg-[#926016]/50"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              PRIVATE TRANSACTION HELP
            </span>
          </div>

          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Use your authorized account support route.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
            For a transaction, offer or case, use the account support route you are authorized to use.
          </p>

          {/* Top Photo */}
          <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-xs">
            <Image
              src="/images/Help-Center/hc26.jpg"
              alt="Account support"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-1 text-center shadow-xs">
              <span className="block text-[10px] font-medium text-slate-800">
                Illustrative imagery
              </span>
            </div>
          </div>

          {/* 4 Stacked Cards Below Photo */}
          <div className="mt-5 flex flex-col gap-3.5">
            {supportCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs"
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
