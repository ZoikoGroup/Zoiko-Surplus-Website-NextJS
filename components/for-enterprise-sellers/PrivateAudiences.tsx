import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const conditions = [
  {
    title: "Verified",
    description: "The business has been reviewed.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Eligible",
    description: "The market and category are permitted.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Seller authorized",
    description: "You chose this audience.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Currently permitted",
    description: "Nothing has expired or been revoked.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function PrivateAudiences() {
  return (
    <section aria-label="Private Audiences - Four separate conditions for any buyer" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">06</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              PRIVATE AUDIENCES
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Four separate conditions for
            <br />
            any buyer.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            A buyer needs all four. Verification alone never opens your stock.
          </p>

          {/* Two-Column Grid: 4 Cards on Left, Image on Right */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: 4 Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-7">
              {conditions.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs min-h-[140px]"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div className="mt-4">
                    <h3 className={`${sora} text-[17px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:col-span-5">
              <div className="relative h-[380px] lg:h-[420px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-sm">
                <Image
                  src="/images/For-Enterprise-Sellers/fes25.jpg"
                  alt="Verified buyer evaluating inventory under seller authorization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/85 backdrop-blur-[2px] px-3.5 py-1 text-[11px] font-medium text-[#0c1e38] shadow-xs">
                  Illustrative imagery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-12">
          {/* Eyebrow */}
          <div className="text-[10.5px] font-bold tracking-[0.18em] text-[#926016] uppercase">
            PRIVATE AUDIENCES
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Four separate conditions for any buyer.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            A buyer needs all four. Verification alone never opens your stock.
          </p>

          {/* 4 Cards Stacked */}
          <div className="mt-6 space-y-3">
            {conditions.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`${sora} text-[15.5px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo at Bottom */}
          <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 shadow-xs">
            <Image
              src="/images/For-Enterprise-Sellers/fes18.jpg"
              alt="Buyer evaluating stock"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-[2px] px-3 py-1 text-[10px] font-semibold text-[#0c1e38] shadow-xs">
              Illustrative imagery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
