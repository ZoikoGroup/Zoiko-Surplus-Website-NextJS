import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type ServiceCard = {
  id: string;
  imageDesktop: string;
  imageMobile: string;
  alt: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const serviceCards: ServiceCard[] = [
  {
    id: "logistics",
    imageDesktop: "/images/solution-surplus-network/sn2.png",
    imageMobile: "/images/solution-surplus-network/sn13.jpg",
    alt: "Collection and logistics van being loaded",
    title: "Collection & logistics",
    description: "Coordinate authorized carriers for pickup, transport and handover — where a route needs movement.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "inspection",
    imageDesktop: "/images/solution-surplus-network/sn3.png",
    imageMobile: "/images/solution-surplus-network/sn14.jpg",
    alt: "Inspection and grading on packaging",
    title: "Inspection & grading",
    description: "Arrange independent inspection or grading services a route may require.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "donation",
    imageDesktop: "/images/solution-surplus-network/sn4.png",
    imageMobile: "/images/solution-surplus-network/sn15.jpg",
    alt: "Donation box handover to recipients",
    title: "Donation & redistribution",
    description: "Direct eligible goods to approved recipients through authorized partners.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: "recovery",
    imageDesktop: "/images/solution-surplus-network/sn5.png",
    imageMobile: "/images/solution-surplus-network/sn16.jpg",
    alt: "Material recovery and recycling container",
    title: "Recovery & recycling",
    description: "Coordinate permitted material-recovery or recycling providers.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-2.77l3.9-6.84a1.83 1.83 0 0 1 1.57-.91H12" />
        <path d="M11 5l3-3 3 3" />
        <path d="M14 2v6" />
        <path d="M17 19h2.185a1.83 1.83 0 0 0 1.57-2.77l-3.9-6.84a1.83 1.83 0 0 0-1.57-.91H13" />
      </svg>
    ),
  },
];

export default function ServicesCoordination() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="services-coordination-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-16 md:px-8 md:pt-14 md:pb-24">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              WHAT COORDINATION MAY INCLUDE
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="services-coordination-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Services the network may
            <br className="hidden sm:inline" /> coordinate.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Illustrative service classes only. Each is permitted, market-dependent and performed by separately contracted partners — never operated by Zoiko.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.07)]"
              >
                {/* Image with floating icon pill */}
                <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={card.imageDesktop}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-lg border border-black/5 bg-white/95 text-[#0f172a] shadow-md backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[15px] font-bold text-[#0f172a]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#556987]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="services-coordination-mobile-heading" className={`block md:hidden ${hanken} w-full bg-white px-4 py-10`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>02</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            WHAT COORDINATION MAY INCLUDE
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="services-coordination-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          Services the network
          <br /> may coordinate.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Illustrative service classes only. Each is permitted, market-dependent and performed by separately contracted partners — never operated by Zoiko.
        </p>

        {/* 4 Cards Vertical Stack */}
        <div className="mt-6 flex flex-col gap-4">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-xs"
            >
              {/* Image with floating icon pill */}
              <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={card.imageMobile}
                  alt={card.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 flex size-8 items-center justify-center rounded-lg border border-black/5 bg-white/95 text-[#0f172a] shadow-md backdrop-blur-xs">
                  {card.icon}
                </div>
              </div>

              {/* Text content */}
              <div className="p-4.5">
                <h3 className="text-[14.5px] font-bold text-[#0c2140]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[12px] leading-[1.5] text-[#556987]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
