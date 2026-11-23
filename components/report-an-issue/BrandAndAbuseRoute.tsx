import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    title: "Brand misuse",
    description: "Rights may be in doubt.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    title: "Disclosure",
    description: "Private details were exposed.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    title: "Access misuse",
    description: "Only viewer authorized.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "No accusations",
    description: "State what you observed.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function BrandAndAbuseRoute() {
  return (
    <section aria-label="Brand and Abuse Route" className={`${hanken} w-full bg-[#fbf9f6]`}>
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
              BRAND AND ABUSE ROUTE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Counterfeit, brand misuse,
            <br />
            unauthorized disclosure.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#556987]">
            Report suspected counterfeit, brand misuse, unauthorized access or disclosure.
            <br />
            Do not post details publicly.
          </p>

          {/* Two Columns: 4 Cards on Left, Image on Right */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: 4 Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-6">
              {steps.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs min-h-[135px]"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div className="mt-4">
                    <h3 className={`${sora} text-[16px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:col-span-6">
              <div className="relative h-[320px] lg:h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-sm">
                <Image
                  src="/images/Report-an-Issue/r8.png"
                  alt="Inspection of packaging labels and disclosure verification"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 backdrop-blur-[2px] px-3.5 py-1 text-[11px] font-medium text-[#0c1e38] shadow-xs">
                  Illustrative imagery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-10">
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              BRAND AND ABUSE ROUTE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Counterfeit, brand misuse, unauthorized disclosure.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Report suspected counterfeit, brand misuse, unauthorized access or disclosure. Do not post details publicly.
          </p>

          {/* 4 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-3">
            {steps.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-xl ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`${sora} mt-3 text-[15.5px] font-bold tracking-tight text-[#0c1e38]`}>
                  {item.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Photo Showcase at bottom */}
          <div className="relative mt-4 h-[190px] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-2xs">
            <Image
              src="/images/Report-an-Issue/r39.jpg"
              alt="Retail brand authenticity verification"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-[2px] px-2.5 py-0.5 text-[10px] font-medium text-[#0c1e38] shadow-xs">
              Illustrative imagery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
