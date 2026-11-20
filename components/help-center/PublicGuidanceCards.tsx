import React from "react";
import Link from "next/link";
import {
  SlidersHorizontal,
  HelpCircle,
  ClipboardList,
  RefreshCw,
  Users,
  Lock,
  Handshake,
  KeyRound,
  Shield,
  AlertTriangle,
  Flag,
  Globe,
} from "lucide-react";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const guidanceCards = [
  {
    badge: "GETTING STARTED",
    icon: <SlidersHorizontal className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "How it works",
    desc: "Understand the seven operating stages.",
    href: "/how-it-works",
  },
  {
    badge: "GETTING STARTED",
    icon: <HelpCircle className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Frequently Asked Questions",
    desc: "Read reviewed operating model and access answers.",
    href: "/knowledge-center",
  },
  {
    badge: "SELLERS",
    icon: <ClipboardList className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Seller Readiness Checklist",
    desc: "Prepare evidence and authority before review.",
    href: "/seller-readiness-guide",
  },
  {
    badge: "SELLERS",
    icon: <RefreshCw className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Surplus Recovery Guide",
    desc: "Explore disposition routes and decision variables.",
    href: "/recovery-guide",
  },
  {
    badge: "BUYERS",
    icon: <Users className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Buyer Qualification Guide",
    desc: "Understand buyer verification and eligibility.",
    href: "/buyer-qualification",
  },
  {
    badge: "BUYERS",
    icon: <Lock className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Access Explained",
    desc: "Distinguish invitation and action permissions.",
    href: "/access-explained",
  },
  {
    badge: "PARTNERS",
    icon: <Handshake className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Partner Participation",
    desc: "Understand qualification and responsibilities.",
    href: "/partner-participation",
  },
  {
    badge: "ACCOUNT & ACCESS",
    icon: <KeyRound className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Sign-in guidance",
    desc: "Use protected entry for account-specific help.",
    href: "/contact",
  },
  {
    badge: "SAFETY & TRUST",
    icon: <Shield className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Trust & Safety Overview",
    desc: "Understand controls, not certification.",
    href: "/trust-and-safety",
  },
  {
    badge: "SAFETY & TRUST",
    icon: <AlertTriangle className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Product Safety",
    desc: "Review category-specific considerations and holds.",
    href: "/product-safety",
  },
  {
    badge: "SAFETY & TRUST",
    icon: <Flag className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Brand Protection",
    desc: "Understand authorization and confidential disclosure.",
    href: "/brand-protection",
  },
  {
    badge: "MARKETS",
    icon: <Globe className="size-4 text-[#0d9488]" strokeWidth={2.2} />,
    title: "Market Availability",
    desc: "Check approved public availability information.",
    href: "/permitted-pathways",
  },
];

export default function PublicGuidanceCards() {
  return (
    <section aria-label="Guidance Library" className={`${hanken} w-full bg-[#fbf9f6] py-14 md:py-20`}>
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
              GUIDANCE LIBRARY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Public guidance cards.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Each card points to guidance that goes live only when approved. No full answers are copied here.
          </p>

          {/* 12 Cards Grid: 4 columns */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guidanceCards.map((card, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#0d9488]/10">
                      {card.icon}
                    </div>
                    <span className="rounded-full border border-[#fef3c7] bg-[#fffbeb] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#926016] uppercase">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className={`${sora} mt-4 text-[15.5px] font-bold text-[#0c1e38]`}>
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-5 pt-2">
                  <span className="text-[12px] font-semibold text-[#926016] transition-colors group-hover:text-[#784f12]">
                    Pending →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile devices)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="mx-auto w-full px-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-bold text-[#0c1e38]">03</span>
            <span className="h-[1px] w-6 bg-[#926016]/50"></span>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              GUIDANCE LIBRARY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-tight text-[#0c1e38]`}>
            Public guidance cards.
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#556987]">
            Each card points to guidance that goes live only when approved. No full answers are copied here.
          </p>

          {/* 12 Vertically Stacked Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {guidanceCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-4.5 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-7.5 items-center justify-center rounded-lg bg-[#0d9488]/10">
                    {card.icon}
                  </div>
                  <span className="rounded-full border border-[#fef3c7] bg-[#fffbeb] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#926016] uppercase">
                    {card.badge}
                  </span>
                </div>

                <h3 className={`${sora} mt-3 text-[15px] font-bold text-[#0c1e38]`}>
                  {card.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {card.desc}
                </p>

                <div className="mt-3.5 pt-1">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#926016]"
                  >
                    Pending <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
