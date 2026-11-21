import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const outcomes = [
  {
    status: "ACCEPTED",
    badgeStyle: "bg-[#e6f7f2] text-[#009b72]",
    title: "Report received",
    description: "Keep your reference. This does not confirm a finding or resolution.",
    image: "/images/Report-an-Issue/r15.png",
    alt: "Warehouse operators confirming receipt of intake record",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    status: "UNCERTAIN",
    badgeStyle: "bg-[#fef5e7] text-[#b45309]",
    title: "Receipt not confirmed",
    description: "Retry the same report unchanged, or use an approved alternative.",
    image: "/images/Report-an-Issue/r16.png",
    alt: "Specialist verifying pending receipt record",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    status: "UNAVAILABLE",
    badgeStyle: "bg-[#fff1f2] text-[#be123c]",
    title: "Reporting unavailable",
    description: "Show an approved alternative only if confirmed.",
    image: "/images/Report-an-Issue/r17.png",
    alt: "Auditor reviewing service boundary restrictions",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
];

const mobileOutcomes = [
  {
    status: "ACCEPTED",
    badgeStyle: "bg-[#e6f7f2] text-[#009b72]",
    title: "Report received",
    description: "Keep your reference. This does not confirm a finding or resolution.",
    image: "/images/Report-an-Issue/r46.jpg",
    alt: "Delivery specialist verifying received documentation",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    status: "UNCERTAIN",
    badgeStyle: "bg-[#fef5e7] text-[#b45309]",
    title: "Receipt not confirmed",
    description: "Retry the same report, unchanged, or use an approved alternative.",
    image: "/images/Report-an-Issue/r47.jpg",
    alt: "Automotive inventory inspection pending confirmation",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    status: "UNAVAILABLE",
    badgeStyle: "bg-[#fff1f2] text-[#be123c]",
    title: "Reporting unavailable",
    description: "Show an approved alternative only if confirmed.",
    image: "/images/Report-an-Issue/r48.jpg",
    alt: "Reviewing routing restrictions on digital workspace",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
  },
];

export default function SubmissionAndReceipt() {
  return (
    <section aria-label="Submission and Receipt - Three outcomes, stated plainly" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">08</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              SUBMISSION AND RECEIPT
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Three outcomes, stated plainly.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Receipt is not resolution.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-[180px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 420px"
                    />
                    {/* Floating Top-Right Badge */}
                    <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-bold tracking-[0.06em] uppercase ${item.badgeStyle}`}>
                      {item.status}
                    </span>

                    <h3 className={`${sora} mt-3 text-[18px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
              SUBMISSION AND RECEIPT
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Three outcomes, stated plainly.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Receipt is not resolution.
          </p>

          {/* 3 Stacked Mobile Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {mobileOutcomes.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs"
              >
                {/* Card Image */}
                <div className="relative h-[155px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  {/* Floating Top-Right Badge */}
                  <div className="absolute top-2.5 right-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                    {item.icon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[9.5px] font-bold tracking-[0.06em] uppercase ${item.badgeStyle}`}>
                    {item.status}
                  </span>

                  <h3 className={`${sora} mt-2 text-[15.5px] font-bold tracking-tight text-[#0c1e38]`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
