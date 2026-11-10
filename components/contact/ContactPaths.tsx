import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const topPaths = [
  {
    tag: "ENTERPRISE SELLER",
    title: "Discuss surplus without exposing stock.",
    description:
      "Talk to our team about your inventory and controls. Do not send private inventory details in a public form.",
    image: "/images/Surplus-Contact/sc2.jpg",
    alt: "Enterprise seller discussing surplus inventory controls",
    ctaLabel: "Request Enterprise Demo",
    href: "#general-inquiry",
    primary: true,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="16" y2="13" />
      </svg>
    ),
  },
  {
    tag: "BUSINESS BUYER",
    title: "Apply for verification.",
    description:
      "Business buyer verification (KYB) is a separate application. An inquiry is not verification or permission.",
    image: "/images/Surplus-Contact/sc3.jpg",
    alt: "Verified business buyer application team",
    ctaLabel: "Become a Verified Buyer",
    href: "/become-a-verified-buyer",
    primary: false,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    tag: "LOGISTICS / DISPOSITION PARTNER",
    title: "Express your capability and coverage.",
    description:
      "Tell us what you can offer. Interest is not acceptance, and no approved-partner status is implied.",
    image: "/images/Surplus-Contact/sc4.jpg",
    alt: "Disposition and logistics partner inspecting freight",
    ctaLabel: "Partner Participation",
    href: "/partner-participation",
    primary: false,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const bottomPaths = [
  {
    tag: "EXISTING PARTICIPANT",
    title: "Get help with a current issue.",
    description:
      "Account and case questions are handled after secure verification, separately from public enquiries.",
    image: "/images/Surplus-Contact/sc5.jpg",
    alt: "Support specialist handling participant case assistance",
    ctaLabel: "Contact Support",
    href: "#general-inquiry",
    withArrow: false,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    tag: "GENERAL, PRESS OR CORPORATE",
    title: "Send a general inquiry.",
    description:
      "Use the form below for corporate questions, press and accessibility. It goes to an approved corporate mailbox once one is confirmed.",
    image: "/images/Surplus-Contact/sc6.jpg",
    alt: "Corporate inquiry coordinator working at desk",
    ctaLabel: "Go to the form",
    href: "#general-inquiry",
    withArrow: true,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactPaths() {
  return (
    <section
      id="contact-paths"
      aria-labelledby="contact-paths-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CHOOSE THE RIGHT CONTACT PATH
            </span>
          </div>

          {/* Heading */}
          <h2
            id="contact-paths-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Five paths, each with its own
            <br />
            owner.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            These are separate routes, not one generic inbox. Sending a message does not change your status with Zoiko Surplus.
          </p>

          {/* Top Row: 3 Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {topPaths.map((card) => (
              <div
                key={card.tag}
                className="flex flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                      {card.tag}
                    </span>

                    <h3 className="mt-3.5 text-[18px] font-extrabold leading-[1.25] text-[#0c1e38]">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={card.href}
                      className={`inline-flex h-[40px] items-center justify-center rounded-full px-5 text-[12.5px] font-bold transition-colors ${
                        card.primary
                          ? "bg-[#926016] text-white shadow-xs hover:bg-[#784f12]"
                          : "border border-slate-200 bg-white text-[#0c1e38] shadow-2xs hover:bg-slate-50"
                      }`}
                    >
                      {card.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Cards */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {bottomPaths.map((card) => (
              <div
                key={card.tag}
                className="flex flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                      {card.tag}
                    </span>

                    <h3 className="mt-3.5 text-[18px] font-extrabold leading-[1.25] text-[#0c1e38]">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={card.href}
                      className="inline-flex h-[40px] items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-5 text-[12.5px] font-bold text-[#0c1e38] shadow-2xs transition-colors hover:bg-slate-50"
                    >
                      <span>{card.ctaLabel}</span>
                      {card.withArrow && <span aria-hidden="true">&rarr;</span>}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            CHOOSE THE RIGHT CONTACT PATH
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Five paths, each with its own owner.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            These are separate routes, not one generic inbox. Sending a message does not change your status with Zoiko Surplus.
          </p>

          {/* 5 Stacked Path Cards (sc10..sc14) */}
          <div className="mt-6 flex flex-col gap-4">
            {[
              {
                ...topPaths[0],
                mobileImage: "/images/Surplus-Contact/sc10.jpg",
                routeHint: "Route: /contact/enterprise",
                note: "Response is handled manually by our enterprise team.",
                withArrow: false,
              },
              {
                ...topPaths[1],
                mobileImage: "/images/Surplus-Contact/sc11.jpg",
                routeHint: "Route: /buyers/apply",
                note: "Applying does not guarantee approval.",
                withArrow: false,
              },
              {
                ...topPaths[2],
                mobileImage: "/images/Surplus-Contact/sc12.jpg",
                routeHint: "Route: /partners",
                note: "Partnership inquiries are reviewed manually.",
                withArrow: false,
              },
              {
                ...bottomPaths[0],
                mobileImage: "/images/Surplus-Contact/sc13.jpg",
                routeHint: "Route: /support",
                note: "Do not post case details in the public form.",
                primary: false,
              },
              {
                ...bottomPaths[1],
                mobileImage: "/images/Surplus-Contact/sc14.jpg",
                routeHint: "Route: Form below",
                note: null,
                primary: false,
              },
            ].map((card) => (
              <div
                key={card.tag}
                className="flex flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-2xs"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={card.mobileImage}
                    alt={card.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-[7px] bg-white/95 text-[#0c1e38] shadow-xs">
                    {card.icon}
                  </div>
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                    {card.tag}
                  </span>

                  <h3 className="mt-3 text-[17px] font-extrabold leading-[1.25] text-[#0c1e38]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>

                  <p className="mt-3.5 text-[10.5px] font-medium text-[#94a3b8]">
                    {card.routeHint}
                  </p>

                  <div className="mt-2">
                    <Link
                      href={card.href}
                      className={`inline-flex h-[40px] items-center justify-center gap-1.5 rounded-full px-5 text-[12px] font-bold ${
                        card.primary
                          ? "bg-[#926016] text-white shadow-xs"
                          : "border border-slate-200 bg-white text-[#0c1e38] shadow-2xs"
                      }`}
                    >
                      <span>{card.ctaLabel}</span>
                      {card.withArrow && <span aria-hidden="true">&rarr;</span>}
                    </Link>
                  </div>

                  {card.note && (
                    <p className="mt-2.5 text-[10.5px] leading-relaxed text-[#64748b]">
                      {card.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[11px] leading-relaxed text-[#556987]">
            <strong className="font-bold text-[#0c1e38]">Please note:</strong> Published channels should be active and tested. If a form or route is unavailable right now, check Status / Help below.
          </p>
        </div>
      </div>
    </section>
  );
}
