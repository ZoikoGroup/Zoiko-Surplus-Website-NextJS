import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const routes = [
  {
    route: "ROUTE 1",
    title: "Commercial resale",
    description: "Private, seller-authorized business buyers, where the market is active.",
    image: "/images/For-Enterprise-Sellers/fes10.jpg",
    alt: "Commercial resale - apparel inventory on display racks",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
      </svg>
    ),
  },
  {
    route: "ROUTE 2",
    title: "Redistribution",
    description: "Moving goods to verified recipients where permitted and enabled.",
    image: "/images/For-Enterprise-Sellers/fes11.png",
    alt: "Redistribution - carefully folded parcels in wooden crate",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    route: "ROUTE 3",
    title: "Donation or other lawful paths",
    description: "Available only where enabled. No outcome or tax result is promised.",
    image: "/images/For-Enterprise-Sellers/fes12.jpg",
    alt: "Donation or other lawful paths - gloved hands packaging donated items",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function DispositionChoices() {
  return (
    <section aria-label="Disposition Choices - Several routes. Only permitted ones are shown" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">04</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              DISPOSITION CHOICES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Several routes. Only permitted ones
            <br />
            are shown.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Routes that are prohibited, recalled or unsupported are filtered out before any are compared.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {routes.map((item) => (
              <div
                key={item.route}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                {/* Photo Container */}
                <div className="relative h-[215px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 1200px) 33vw, 420px"
                  />
                  <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur-[2px]">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                    {item.route}
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
            DISPOSITION CHOICES
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Several routes. Only permitted ones are shown.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Routes that are prohibited, recalled or unsupported are filtered out before any are compared.
          </p>

          {/* 3 Mobile Cards in vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Route 1 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/For-Enterprise-Sellers/fes44.jpg"
                  alt="Commercial resale - apparel inventory"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  ROUTE 1
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Commercial resale
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Private, seller-authorized business buyers, where the market is active.
                </p>
              </div>
            </div>

            {/* Route 2 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/For-Enterprise-Sellers/fes45.jpg"
                  alt="Redistribution - pallet inventory in storage facility"
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
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  ROUTE 2
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Redistribution
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Moving goods to verified recipients where permitted and enabled.
                </p>
              </div>
            </div>

            {/* Route 3 */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/For-Enterprise-Sellers/fes46.jpg"
                  alt="Donation or other lawful paths - packaging verified lot"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  ROUTE 3
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Donation or other lawful paths
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Available only where enabled. No outcome or tax result is promised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
