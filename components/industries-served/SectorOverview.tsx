import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const sectors = [
  {
    id: "sector-apparel",
    title: "Apparel & Footwear",
    description: "Seasonal, returned, excess and imperfect apparel or shoes.",
    image: "/images/Industries-Served/sis5.jpg",
    statusLabel: "Conditional:",
    statusText: "No live default.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    id: "sector-food",
    title: "Food & Grocery",
    description:
      "Sealed ambient grocery and pantry inventory, only as a separately gated candidate.",
    image: "/images/Industries-Served/sis6.jpg",
    statusLabel: "Separate approval gate:",
    statusText: "No live food program is implied.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    id: "sector-electronics",
    title: "Consumer Electronics",
    description:
      "Unused, returned or refurbished eligible devices and accessories.",
    image: "/images/Industries-Served/sis7.jpg",
    statusLabel: "Conditional:",
    statusText: "Not open public marketplace.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
      </svg>
    ),
  },
  {
    id: "sector-home",
    title: "Home & Lifestyle",
    description: "Housewares, small furnishings, textiles and household goods.",
    image: "/images/Industries-Served/sis8.jpg",
    statusLabel: "Conditional:",
    statusText: "By approved domain set.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "sector-industrial",
    title: "Industrial & Business Goods",
    description: "Commercial excess, tools, equipment and business surplus.",
    image: "/images/Industries-Served/sis9.jpg",
    statusLabel: "Conditional:",
    statusText: "Requires buyer and site-based eligibility.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function SectorOverview() {
  return (
    <section
      id="sector-overview"
      aria-labelledby="sector-overview-heading"
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
              SECTOR OVERVIEW
            </span>
          </div>

          {/* Heading */}
          <h2
            id="sector-overview-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Five sector groupings, each with its
            <br />
            own constraints.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            No counts, client logos or public opportunities appear here. Private opportunities, offers, prices and seller identities are never shown on public pages.
          </p>

          {/* Anchor Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            {sectors.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[12px] font-bold text-[#0c1e38] shadow-2xs transition-colors hover:border-slate-300"
              >
                <span className="text-[#926016]">{sec.icon}</span>
                <span>{sec.title}</span>
              </a>
            ))}
          </div>

          {/* 5 Sector Cards Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {sectors.map((card) => (
              <div
                key={card.id}
                className="flex flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-2xs transition-all hover:border-slate-300"
              >
                {/* Photo */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-[17px] font-extrabold text-[#0c1e38]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                    <div className="mt-4 rounded-[8px] bg-[#fbf4e6] px-3 py-2 text-[11px] leading-snug text-[#7c5c2b]">
                      <strong className="font-bold text-[#926016]">{card.statusLabel}</strong>{" "}
                      {card.statusText}
                    </div>
                  </div>

                  <Link
                    href={`#${card.id}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#926016] hover:text-[#784f12]"
                  >
                    <span>See qualifying controls</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            SECTOR OVERVIEW
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Five sector groupings, each with its own constraints.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            No counts, client logos or public opportunities appear here. Private opportunities, offers, prices and seller identities are never shown on public pages.
          </p>

          {/* Stacked Anchor Pills */}
          <div className="mt-5 flex flex-col items-start gap-2">
            {sectors.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11.5px] font-bold text-[#0c1e38] shadow-2xs"
              >
                <span className="text-[#926016]">{sec.icon}</span>
                <span>{sec.title}</span>
              </a>
            ))}
          </div>

          {/* 5 Stacked Sector Cards (sis24..sis28) */}
          <div className="mt-6 flex flex-col gap-4">
            {sectors.map((card, idx) => (
              <div
                key={card.id}
                className="flex flex-col overflow-hidden rounded-[18px] border border-slate-200/90 bg-white shadow-2xs"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={`/images/Industries-Served/sis${24 + idx}.jpg`}
                    alt={card.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-[7px] bg-white/95 text-[#0c1e38] shadow-xs">
                    {card.icon}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-[16.5px] font-extrabold text-[#0c1e38]">{card.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                    {card.description}
                  </p>

                  <div className="mt-3.5 rounded-[8px] bg-[#fbf4e6] px-3 py-2 text-[11px] leading-snug text-[#7c5c2b]">
                    {idx === 0 ? (
                      <strong className="font-bold text-[#926016]">Educational / conditional</strong>
                    ) : (
                      <>
                        <strong className="font-bold text-[#926016]">{card.statusLabel}</strong>{" "}
                        {card.statusText}
                      </>
                    )}
                  </div>

                  <Link
                    href={`#${card.id}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#926016]"
                  >
                    <span>See qualifying controls</span>
                    <span aria-hidden="true">&rarr;</span>
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
