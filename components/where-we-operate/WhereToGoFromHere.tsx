import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Presentation, Users, Handshake } from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const desktopNextStepCards = [
  {
    title: "Market Availability",
    description:
      "Check whether services are available for your market. Eligibility and rights are separate.",
    image: "/images/Where-We-Operate/wwo16.png",
    icon: ShoppingCart,
    status: "Pending",
    href: "#market-availability",
  },
  {
    title: "Request Enterprise Demo",
    description: "An inquiry does not establish seller acceptance or an active market.",
    image: "/images/Where-We-Operate/wwo17.png",
    icon: Presentation,
    status: "Pending",
    href: "/contact",
  },
  {
    title: "Buyer Qualification Guide",
    description: "Verification is independent of marketplace permission.",
    image: "/images/Where-We-Operate/wwo18.png",
    icon: Users,
    status: "Pending",
    href: "/help-center",
  },
  {
    title: "Partner Participation",
    description: "Needs an approved provider contract and scope.",
    image: "/images/Where-We-Operate/wwo19.png",
    icon: Handshake,
    status: "Pending",
    href: "/contact",
  },
];

const mobileNextStepCards = [
  {
    title: "Market Availability",
    description:
      "Check whether services are available for your market. Eligibility and rights are separate.",
    image: "/images/Where-We-Operate/wwo40.jpg",
    icon: ShoppingCart,
    status: "Pending",
    href: "#market-availability",
  },
  {
    title: "Request Enterprise Demo",
    description: "An inquiry does not establish seller acceptance or an active market.",
    image: "/images/Where-We-Operate/wwo41.jpg",
    icon: Presentation,
    status: "Pending",
    href: "/contact",
  },
  {
    title: "Buyer Qualification Guide",
    description: "Verification is independent of marketplace permission.",
    image: "/images/Where-We-Operate/wwo42.jpg",
    icon: Users,
    status: "Pending",
    href: "/help-center",
  },
  {
    title: "Partner Participation",
    description: "Needs an approved provider contract and scope.",
    image: "/images/Where-We-Operate/wwo43.jpg",
    icon: Handshake,
    status: "Pending",
    href: "/contact",
  },
];

export default function WhereToGoFromHere() {
  return (
    <section
      aria-label="Next Steps"
      className={`${hanken} w-full bg-white py-14 md:py-20`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 md:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold tracking-widest text-[#926016] uppercase">
              06 ——— NEXT STEPS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2
            className={`${sora} mt-3 text-[32px] lg:text-[38px] font-bold tracking-tight text-[#0c1e38]`}
          >
            Where to go from here.
          </h2>
          <p className="mt-2 max-w-[850px] text-[15px] leading-relaxed text-slate-500">
            Links go live only when each destination is approved. Need help? Use the Help Center or
            Contact Support. Safety concerns go to Report an Issue.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-8 grid grid-cols-4 gap-5">
            {desktopNextStepCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs transition-all hover:shadow-md"
                >
                  <div>
                    {/* Image with badge */}
                    <div className="relative h-[160px] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 1200px) 25vw, 320px"
                      />
                      <div className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-xs">
                        <IconComp className="size-3.5 text-slate-700" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-3">
                      <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Pending Link */}
                  <div className="pt-4">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#926016] transition-colors hover:text-[#784f12]"
                    >
                      <span>{item.status}</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (reflects exact mobile design)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4">
          <span className="text-[11px] font-bold tracking-widest text-[#926016] uppercase">
            NEXT STEPS
          </span>
          <h2
            className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38] leading-tight`}
          >
            Where to go from here.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
            Links go live only when each destination is approved. Need help? Use the Help Center or
            Contact Support. Safety concerns go to Report an Issue.
          </p>

          {/* 4 Full-Width Vertically Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {mobileNextStepCards.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-xs"
                >
                  <div>
                    <div className="relative h-[180px] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                      <div className="absolute top-2.5 right-2.5 flex size-7 items-center justify-center rounded-full bg-white/95 shadow-xs">
                        <IconComp className="size-3.5 text-slate-700" />
                      </div>
                    </div>
                    <div className="pt-3">
                      <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3.5">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#926016]"
                    >
                      <span>{item.status}</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
