import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const journeys = [
  {
    role: "SELLER",
    title: "Seller journey",
    description: "Owner-authorized the stock, restrict ex-audience, then choose the outcome.",
    badge: "Inquiry is not authorization.",
    image: "/images/How-the-Platform-Works/htpw6.png",
    alt: "Seller inspecting retail lot inventory with clipboard",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    role: "BUYER",
    title: "Buyer journey",
    description: "Application, verification, redeemable lot and order permission clarifies different things.",
    badge: "Application is not access.",
    image: "/images/How-the-Platform-Works/htpw7.png",
    alt: "Verified buyers evaluating enterprise opportunities",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    role: "PARTNER",
    title: "Partner journey",
    description: "Facility qualification, equipment and authority prerequisites. A mandate is required.",
    badge: "No premium pass or promos.",
    image: "/images/How-the-Platform-Works/htpw8.png",
    alt: "Permitted logistics partners collaborating on route execution",
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

export default function ThreeJourneys() {
  return (
    <section aria-label="Three Journeys - Different roles, different permissions" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">03</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              THREE JOURNEYS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Different roles. Different permissions.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Nobody gets more access than their own role and approvals allow.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {journeys.map((item) => (
              <div
                key={item.role}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
              >
                <div>
                  {/* Image Container with floating top-right badge */}
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

                  {/* Body Content */}
                  <div className="p-6 pb-4">
                    <span className="text-[11px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                      {item.role}
                    </span>
                    <h3 className={`${sora} mt-1.5 text-[20px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Lock / Notice Pill Box */}
                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-center gap-2 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-3.5 py-2.5 text-[#926016]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="text-[12.5px] font-medium leading-none">
                      {item.badge}
                    </span>
                  </div>
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
            THREE JOURNEYS
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Different roles. Different permissions.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Nobody gets more access than their own role and approvals allow.
          </p>

          {/* 3 Mobile Cards in a vertical stack */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: Seller Journey */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw37.jpg"
                  alt="Seller journey - checking warehouse inventory on laptop"
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
              <div className="p-5 pb-4">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  SELLER
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Seller journey
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Confirm lot condition, ownership and controls; declare what is offered.
                </p>
              </div>
              <div className="px-5 pb-5 pt-1">
                <div className="flex items-center gap-2 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-3.5 py-2.5 text-[#926016]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-[12px] font-medium leading-none">
                    Inquiry is not authorization.
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Buyer Journey */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw38.jpg"
                  alt="Buyer journey - verifying counterparty permissions"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>
              <div className="p-5 pb-4">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  BUYER
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Buyer journey
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Verification, profile and access confirmation: prior to private view or participation.
                </p>
              </div>
              <div className="px-5 pb-5 pt-1">
                <div className="flex items-center gap-2 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-3.5 py-2.5 text-[#926016]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-[12px] font-medium leading-none">
                    No pass-through or auto-approval.
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Partner Journey */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xs">
              <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/How-the-Platform-Works/htpw39.jpg"
                  alt="Partner journey - logistics and facility prerequisites"
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
              <div className="p-5 pb-4">
                <span className="text-[10.5px] font-bold tracking-[0.08em] text-[#009b72] uppercase">
                  PARTNER
                </span>
                <h3 className={`${sora} mt-1 text-[18px] font-bold text-[#0c1e38]`}>
                  Partner journey
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                  Facility qualification, equipment and authority prerequisites: A mandate is required.
                </p>
              </div>
              <div className="px-5 pb-5 pt-1">
                <div className="flex items-center gap-2 rounded-xl border border-[#fdecd0] bg-[#fffbf0] px-3.5 py-2.5 text-[#926016]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-[12px] font-medium leading-none">
                    Approved partner status isn&apos;t automatic.
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
