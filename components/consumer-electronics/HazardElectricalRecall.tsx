import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const hazardCards = [
  {
    title: "Battery hazards",
    description: "Lithium and other cells are hazard-classified, with packing and transport rules and specialist processing for damaged units.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Electrical safety",
    description: "Electrical state, plug and voltage compatibility and fire-hazard review apply before any route.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 14 14" />
      </svg>
    ),
  },
  {
    title: "Recall & counterfeit",
    description: "Recalled or suspected-counterfeit devices are hard-stopped and escalated — never routed to resale.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
];

export default function HazardElectricalRecall() {
  return (
    <section id="hazard-electrical-recall" aria-labelledby="hazard-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              BATTERY, ELECTRICAL &amp; RECALL
            </span>
          </div>

          {/* Heading */}
          <h2
            id="hazard-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Hazard-class items get special
            <br />
            handling.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Batteries, electrical faults and recalls introduce hard safety rules — some of which stop a lot outright.
          </p>

          {/* Large Wide Visual Banner (ce9.png) */}
          <div className="mt-10 overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/consumer-electronics/ce9.png"
                alt="Battery and hazardous electronics voltage testing with multimeter"
                fill
                sizes="(max-width: 1380px) 100vw, 1380px"
                className="object-cover"
              />
            </div>
          </div>

          {/* 3 Column Warning Cards */}
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {hazardCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[16px] border border-[#f5e6d0] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
                  {card.icon}
                </div>
                <h3 className="mt-3 text-[14.5px] font-bold text-[#0f172a]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Hard Stops Banner */}
          <div className="mt-5 flex items-start gap-3.5 rounded-[16px] border border-[#f5e6d0] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)]">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-[#0f172a]">
                Hard stops
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                Damaged battery-containing units, recalled models and suspected counterfeits are blocked from sale routes and handled through specialist, licensed processing. Hazard, transport and waste rules remain the accountable parties&apos; responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>04</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              BATTERY, ELECTRICAL &amp; RECALL
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Hazard-class items get special handling.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Batteries, electrical faults and recalls introduce hard safety rules — some of which stop a lot outright.
          </p>

          {/* Visual Banner (ce30.jpg) */}
          <div className="relative mt-5 aspect-[16/8] w-full overflow-hidden rounded-[16px] bg-slate-100 shadow-xs">
            <Image
              src="/images/consumer-electronics/ce30.jpg"
              alt="Service handling"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* 3 Warning Cards */}
          <div className="mt-4 flex flex-col gap-3">
            {hazardCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[14px] border border-[#f4deb4] bg-white p-4 shadow-xs"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
                  {card.icon}
                </div>
                <h3 className="mt-2.5 text-[14px] font-bold text-[#0c1e38]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Hard stops Banner */}
          <div className="mt-3.5 flex items-start gap-3 rounded-[14px] border border-[#f4deb4] bg-white p-4 shadow-xs">
            <div className="flex size-7 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf2e3]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <h3 className="text-[13.5px] font-bold text-[#0c1e38]">
                Hard stops
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                Damaged battery-containing units, recalled models and suspected counterfeits are blocked from sale routes and handled through specialist, licensed processing. Hazard, transport and waste rules remain the accountable parties&apos; responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
