import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const criteria = [
  {
    title: "Evidence",
    description: "Facts about condition and provenance.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
      </svg>
    ),
  },
  {
    title: "Timing",
    description: "When goods must move, and by when.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Logistics",
    description: "Third-party movement under approved mandates.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Commercial cost",
    description: "Fees, discounts and other costs.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Risk",
    description: "Failure modes, holds and recall exposure.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function OptimizeFramework() {
  return (
    <section aria-label="Optimize with a Framework" className={`${hanken} w-full bg-[#071322] text-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-22">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#d4a359] uppercase">
              OPTIMIZE WITH A FRAMEWORK
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[42px] font-bold tracking-[-0.025em] text-white`}>
            Compare routes.
            <br />
            Never assume a return.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#94a3b8]">
            No net recovery, margin, sell-through or ESG outcome is guaranteed or shown.
          </p>

          {/* 5 Cards Row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {criteria.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d1c31] p-4 transition-all duration-200 hover:border-white/20 hover:bg-[#10223b]"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#009b72]/20 text-[#009b72]">
                  {item.icon}
                </div>
                <div className="mt-4">
                  <h3 className={`${sora} text-[14.5px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#94a3b8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Wide Photo Showcase */}
          <div className="relative mt-8 h-[340px] lg:h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c31] shadow-xl">
            <Image
              src="/images/For-Enterprise-Sellers/fes19.png"
              alt="Two enterprise merchandising specialists comparing inventory lots in apparel boutique"
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1380px"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-12">
          {/* Eyebrow */}
          <div className="text-[10.5px] font-bold tracking-[0.18em] text-[#d4a359] uppercase">
            OPTIMIZE WITH A FRAMEWORK
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-white`}>
            Compare routes. Never assume a return.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#94a3b8]">
            No net recovery, margin, sell-through or ESG outcome is guaranteed or shown.
          </p>

          {/* 5 Criteria Cards Stacked */}
          <div className="mt-6 space-y-3">
            {criteria.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#0d1c31] p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#009b72]/20 text-[#009b72]">
                  {item.icon}
                </div>
                <div>
                  <h3 className={`${sora} text-[15px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] leading-snug text-[#94a3b8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo at Bottom */}
          <div className="relative mt-6 h-[200px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c31] shadow-lg">
            <Image
              src="/images/For-Enterprise-Sellers/fes53.jpg"
              alt="Comparing surplus routes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
