import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

interface PathwayCard {
  title: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
  tag: string;
  icon: React.ReactNode;
}

const pathways: PathwayCard[] = [
  {
    title: "Resale / redeployment",
    description: "Working, data-clear devices to approved business buyers.",
    imageDesktop: "/images/consumer-electronics/ce12.jpg",
    imageMobile: "/images/consumer-electronics/ce33.jpg",
    tag: "WHERE ENABLED",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    title: "Refurbishment",
    description: "Repair or reconditioning via a permitted partner before reuse.",
    imageDesktop: "/images/consumer-electronics/ce13.jpg",
    imageMobile: "/images/consumer-electronics/ce34.jpg",
    tag: "PARTNER",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Recycling / recovery",
    description: "Material recovery or compliant recycling for end-of-life units.",
    imageDesktop: "/images/consumer-electronics/ce14.jpg",
    imageMobile: "/images/consumer-electronics/ce35.jpg",
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

export default function DispositionPathways() {
  return (
    <section id="disposition-pathways" aria-labelledby="disposition-pathways-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              DISPOSITION PATHWAYS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="disposition-pathways-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Where qualified electronics can go.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Illustrative, policy-gated routes — data and safety status determine which are even possible. None is confirmed, priced or executable here.
          </p>

          {/* 3 Pathway Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pathways.map((card) => (
              <div
                key={card.title}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#e5e7eb] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Photo container with floating badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.imageDesktop}
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
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              DISPOSITION PATHWAYS
            </span>
          </div>

          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Where qualified electronics can go.
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Illustrative, policy-gated routes — data and safety status determine which are even possible. None is confirmed, priced or executable here.
          </p>

          <div className="mt-5 flex flex-col gap-4">
            {pathways.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-[16px] border border-[#e5e7eb] bg-white shadow-xs"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image src={card.imageMobile} alt={card.title} fill sizes="100vw" className="object-cover" />
                  <div className="absolute bottom-2.5 left-2.5 flex size-7 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {card.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-[#0c1e38]">{card.title}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">{card.description}</p>
                  <div className="mt-3.5">
                    <span className="inline-flex rounded-full border border-[#f5dfb8] bg-[#fcf8f0] px-2.5 py-0.5 text-[10px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
