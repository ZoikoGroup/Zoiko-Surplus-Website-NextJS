import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const capabilities = [
  {
    capability: "CAPABILITY 1",
    title: "Surplus Enterprise",
    description: "For sellers: qualify parcels and choose disposition pathways.",
    image: "/images/How-the-Platform-Works/htpw2.jpg",
    alt: "Surplus Enterprise - warehouse inventory check on laptop",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    capability: "CAPABILITY 2",
    title: "Surplus Exchange",
    description: "Seller-controlled private markets for verified counterparties.",
    image: "/images/How-the-Platform-Works/htpw3.png",
    alt: "Surplus Exchange - marketplace commerce review",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" />
        <path d="M4 20L21 3" />
        <path d="M21 16v5h-5" />
        <path d="M15 15l6 6" />
        <path d="M4 4l5 5" />
      </svg>
    ),
  },
  {
    capability: "CAPABILITY 3",
    title: "Surplus Network",
    description: "Third-party/permitted partner networks for approved transport.",
    image: "/images/How-the-Platform-Works/htpw4.jpg",
    alt: "Surplus Network - freight logistics partner warehouse",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function PlatformFamily() {
  return (
    <section aria-label="Platform Family - Three connected capabilities" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">01</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              PLATFORM FAMILY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Three connected capabilities.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Each is explained separately. Individual availability is not substantiated on this page.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((item) => (
              <div
                key={item.capability}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                {/* Image Container with floating badge */}
                <div className="relative h-[215px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1200px) 33vw, 420px"
                  />
                  {/* Floating Circular Icon Badge in top right */}
                  <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-[2px]">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11.5px] font-bold tracking-[0.08em] text-[#926016] uppercase">
                    {item.capability}
                  </span>
                  <h3 className={`${sora} mt-2 text-[20px] font-bold tracking-tight text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#8a9bb2] uppercase">
            PLATFORM FAMILY
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Three connected capabilities.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Each is explained separately. Individual availability is not substantiated on this page.
          </p>

          {/* 3 Mobile Cards in a vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: Surplus Enterprise */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw27.jpg"
                  alt="Surplus Enterprise - warehouse inventory check"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  CAPABILITY 1
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Surplus Enterprise
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  For sellers: qualify goods and choose a permitted route.
                </p>
              </div>
            </div>

            {/* Card 2: Surplus Exchange */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw28.jpg"
                  alt="Surplus Exchange - marketplace buyers"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 3h5v5" />
                    <path d="M4 20L21 3" />
                    <path d="M21 16v5h-5" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  CAPABILITY 2
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Surplus Exchange
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Seller-controlled private markets for verified business buyers.
                </p>
              </div>
            </div>

            {/* Card 3: Surplus Network */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw29.jpg"
                  alt="Surplus Network - authorized logistics warehouse"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  CAPABILITY 3
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Surplus Network
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Third-party participation, only under approved mandates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
