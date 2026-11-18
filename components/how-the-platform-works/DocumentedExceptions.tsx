import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const exceptions = [
  {
    title: "Pending",
    description: "Waiting on information or a decision.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Held",
    description: "Paused. Action or review needs resolving.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Rejected",
    description: "Does not meet requirement. The route is stopped.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
  {
    title: "Disputed",
    description: "A disagreement opened; reviewed and corrected.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="12" y1="9" x2="12.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Recalled",
    description: "Goods withdrawn. Routing stops.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Cancelled",
    description: "Order or route suspended; with reason.",
    iconBg: "bg-[#fef5e7] text-[#d97706]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
];

export default function DocumentedExceptions() {
  return (
    <section aria-label="Documented Exceptions - Things go wrong. The path is written down." className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">07</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              DOCUMENTED EXCEPTIONS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Things go wrong. The
            <br />
            path is written down.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Each exception has an owner and a correction path.
          </p>

          {/* Two-Column Grid: 6 Exception Cards on Left, Image on Right */}
          <div className="mt-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left 6 Cards in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-7">
              {exceptions.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs min-h-[125px]"
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div className="mt-3">
                    <h3 className={`${sora} text-[16px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Photo */}
            <div className="w-full lg:col-span-5">
              <div className="relative h-[400px] lg:h-[450px] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-100 shadow-sm">
                <Image
                  src="/images/How-the-Platform-Works/htpw17.png"
                  alt="Two warehouse operators reviewing inventory discrepancy documentation"
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
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#8a9bb2] uppercase">
            DOCUMENTED EXCEPTIONS
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-[1.2] tracking-[-0.025em] text-[#0c1e38]`}>
            Things go wrong. The path is written down.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Each exception has an owner and a correction path.
          </p>

          {/* 6 Mobile Exception Cards in a vertical stack */}
          <div className="mt-6 flex flex-col gap-3.5">
            {exceptions.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs"
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div className="mt-3">
                  <h3 className={`${sora} text-[16px] font-bold text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Illustrative Photo below cards */}
          <div className="relative mt-6 h-[210px] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
            <Image
              src="/images/How-the-Platform-Works/htpw48.jpg"
              alt="Inspector reviewing inventory discrepancy"
              fill
              className="object-cover"
              sizes="100vw"
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
