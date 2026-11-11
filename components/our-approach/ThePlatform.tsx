import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const capabilities = [
  {
    tag: "SURPLUS ENTERPRISE",
    title: "Qualify and govern surplus stock.",
    description:
      "Document and qualify lots, set authorized disposition routes, and keep oversight of how, where and to whom surplus is offered.",
    image: "/images/Zoiko-Surplus-Our-Approach/soa2.jpg",
    alt: "Enterprise operations managers reviewing inventory qualification in warehouse",
    href: "/enterprise-overview",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    tag: "SURPLUS EXCHANGE",
    title: "Reach verified, approved buyers.",
    description:
      "Open seller-controlled private markets to eligibility-checked business demand, with access and offers governed by policy.",
    image: "/images/Zoiko-Surplus-Our-Approach/soa3.png",
    alt: "Verified business buyers collaborating on approved inventory",
    href: "/solution-private-marketplaces",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    tag: "SURPLUS NETWORK",
    title: "Coordinate permitted disposition.",
    description:
      "Work with approved partners for lawful collection, logistics, redistribution and donation, without Zoiko owning stock or fleets.",
    image: "/images/Zoiko-Surplus-Our-Approach/soa4.jpg",
    alt: "Authorized logistics partners coordinating boxed surplus freight",
    href: "/solution-surplus-network",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <line x1="12" y1="7.5" x2="7.5" y2="15.8" />
        <line x1="12" y1="7.5" x2="16.5" y2="15.8" />
        <line x1="8.5" y1="18" x2="15.5" y2="18" />
      </svg>
    ),
  },
];

export default function ThePlatform() {
  return (
    <section
      id="the-platform"
      aria-labelledby="the-platform-heading"
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
              THE PLATFORM
            </span>
          </div>

          {/* Heading */}
          <h2
            id="the-platform-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Three connected capabilities. One
            <br />
            governed system.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Qualification, demand and disposition work together, so surplus moves through one accountable platform rather than three disconnected tools.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {capabilities.map((card) => (
              <div
                key={card.tag}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="inline-flex rounded-[6px] bg-[#fbf4e6] px-2.5 py-1 text-[10px] font-bold tracking-[0.1em] text-[#926016] uppercase">
                      {card.tag}
                    </span>

                    <h3 className="mt-3.5 text-[18px] font-extrabold leading-[1.25] text-[#0c1e38]">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>

                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#926016] transition-colors hover:text-[#784f12]"
                  >
                    <span>Learn more</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Strip */}
          <div className="mt-6 flex items-center gap-2.5 rounded-[12px] border border-slate-200/90 bg-white px-4.5 py-3 text-[12px] text-[#556987] shadow-2xs">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              Enterprise, Exchange and Network share the same qualification, policy and evidence backbone. The output of one stage becomes the trusted input of the next.
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            THE PLATFORM
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Three connected capabilities. One governed system.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Qualification, demand and disposition work together, so surplus moves through one accountable platform rather than three disconnected tools.
          </p>

          {/* 3 Stacked Capability Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {[
              { ...capabilities[0], mobileImage: "/images/Zoiko-Surplus-Our-Approach/soa25.jpg" },
              { ...capabilities[1], mobileImage: "/images/Zoiko-Surplus-Our-Approach/soa26.jpg" },
              { ...capabilities[2], mobileImage: "/images/Zoiko-Surplus-Our-Approach/soa27.jpg" },
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
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-[7px] bg-white/95 text-[#926016] shadow-xs">
                    {card.icon}
                  </div>
                </div>

                <div className="p-5">
                  <span className="inline-flex rounded-[5px] bg-[#fbf4e6] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.1em] text-[#926016] uppercase">
                    {card.tag}
                  </span>

                  <h3 className="mt-3 text-[17px] font-extrabold leading-[1.25] text-[#0c1e38]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>

                  <Link
                    href={card.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#926016]"
                  >
                    <span>Learn more</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Box */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-slate-200/90 bg-[#fbfaf7] p-3.5 text-[11.5px] leading-relaxed text-[#556987]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              Enterprise, Exchange and Network share the same qualification, policy and evidence backbone. The output of one stage becomes the trusted input of the next.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
