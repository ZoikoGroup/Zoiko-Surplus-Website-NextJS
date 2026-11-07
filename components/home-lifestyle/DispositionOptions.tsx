import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const options = [
  {
    title: "B2B resale",
    description: "Approved routes to verified business buyers, by subcategory.",
    image: "/images/home-lifestyle/hl11.png",
    tag: "WHERE ENABLED",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    title: "Donation / redistribution",
    description: "Transfer to an eligible recipient via a licensed partner.",
    image: "/images/home-lifestyle/hl12.png",
    tag: "WHERE ENABLED",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Recovery / recycling",
    description: "Material recovery for textiles or goods not suitable for reuse.",
    image: "/images/home-lifestyle/hl13.png",
    tag: "SPECIALIST",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
        <path d="M11 19h8.2a1.8 1.8 0 0 0 1.565-.892 1.79 1.79 0 0 0 .012-1.777L16.8 9.5" />
        <path d="m14 4.5 3.5 6H6.5l3.5-6a1.76 1.76 0 0 1 1.5-.9 1.76 1.76 0 0 1 1.5.9z" />
      </svg>
    ),
  },
];

export default function DispositionOptions() {
  return (
    <section
      id="disposition-options"
      aria-labelledby="disposition-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              DISPOSITION OPTIONS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="disposition-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Where qualified goods can go.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[640px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Illustrative, policy-gated routes — availability depends on subcategory, safety status and market. None is confirmed, priced or executable here.
          </p>

          {/* 3 Pathway Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {options.map((card) => (
              <div
                key={card.title}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Photo container with floating badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-sm backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>

                {/* Card text */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#0c1e38]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
                      {card.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5dfb8] bg-[#fcf8f0] px-3 py-1 text-[10.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {card.tag}
                    </span>
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
      <div className="block md:hidden bg-[#FAF6F0]">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>09</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              DISPOSITION OPTIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            Where qualified goods can go.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Illustrative, policy-gated routes — availability depends on subcategory, safety status and market. None is confirmed, priced or executable here.
          </p>

          {/* 3 Pathway Cards */}
          <div className="mt-5 flex flex-col gap-4">
            {/* Card 1: B2B resale */}
            <div className="overflow-hidden rounded-[16px] border border-[#f0ece4] bg-white shadow-2xs">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image src="/images/home-lifestyle/hl25.jpg" alt="B2B resale" fill sizes="100vw" className="object-cover" />
                <div className="absolute bottom-2.5 left-2.5 flex size-7 items-center justify-center rounded-[7px] bg-white/95 text-[#0c1e38] shadow-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-bold text-[#0c1e38]">B2B resale</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                  Approved route to verified business buyers, by subcategory.
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5dfb8] bg-[#fcf8f0] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#926016] uppercase">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    WHERE ENABLED
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Donation / redistribution */}
            <div className="overflow-hidden rounded-[16px] border border-[#f0ece4] bg-white shadow-2xs">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image src="/images/home-lifestyle/hl26.jpg" alt="Donation / redistribution" fill sizes="100vw" className="object-cover" />
                <div className="absolute bottom-2.5 left-2.5 flex size-7 items-center justify-center rounded-[7px] bg-white/95 text-[#0c1e38] shadow-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-bold text-[#0c1e38]">Donation / redistribution</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                  Transfer to an eligible recipient via a licensed partner.
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5dfb8] bg-[#fcf8f0] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#926016] uppercase">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    WHERE ENABLED
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Recovery / recycling */}
            <div className="overflow-hidden rounded-[16px] border border-[#f0ece4] bg-white shadow-2xs">
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image src="/images/home-lifestyle/hl27.jpg" alt="Recovery / recycling" fill sizes="100vw" className="object-cover" />
                <div className="absolute bottom-2.5 left-2.5 flex size-7 items-center justify-center rounded-[7px] bg-white/95 text-[#0c1e38] shadow-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                    <path d="M11 19h8.2a1.8 1.8 0 0 0 1.565-.892 1.79 1.79 0 0 0 .012-1.777L16.8 9.5" />
                    <path d="m14 4.5 3.5 6H6.5l3.5-6a1.76 1.76 0 0 1 1.5-.9 1.76 1.76 0 0 1 1.5.9z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-bold text-[#0c1e38]">Recovery / recycling</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                  Material recovery for textiles or goods not suitable for reuse.
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f5dfb8] bg-[#fcf8f0] px-2.5 py-0.5 text-[9.5px] font-bold tracking-wider text-[#926016] uppercase">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    SPECIALIST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
