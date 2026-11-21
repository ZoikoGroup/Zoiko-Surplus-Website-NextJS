import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const situations = [
  {
    title: "Ordinary help",
    description: "Use the approved help route.",
    image: "/images/Report-an-Issue/r19.png",
    alt: "Support specialist assisting with general enterprise inquiries",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Order dispute",
    description: "Sign in. No order lookup here.",
    image: "/images/Report-an-Issue/r20.jpg",
    alt: "Commercial specialists reviewing transaction discrepancy",
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
    title: "Suspicious message",
    description: "Do not enter credentials.",
    image: "/images/Report-an-Issue/r21.jpg",
    alt: "Security analyst investigating potential phishing communication",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Unsafe goods",
    description: "Pause and report.",
    image: "/images/Report-an-Issue/r22.jpg",
    alt: "Warehouse staff quarantining suspected non-compliant goods",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Brand concern",
    description: "Report. Do not post publicly.",
    image: "/images/Report-an-Issue/r23.jpg",
    alt: "Retail merchandiser verifying brand packaging authenticity",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    title: "Not sure",
    description: "Choose Other for approved triage.",
    image: "/images/Report-an-Issue/r24.jpg",
    alt: "Compliance team reviewing general triage cases",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const mobileSituations = [
  {
    title: "Ordinary help",
    description: "Use the approved help route.",
    image: "/images/Report-an-Issue/r50.jpg",
    alt: "Modern home living space items",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Order dispute",
    description: "Sign in. No order lookup here.",
    image: "/images/Report-an-Issue/r51.jpg",
    alt: "Delivery driver with shipping documentation",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Suspicious message",
    description: "Do not enter credentials.",
    image: "/images/Report-an-Issue/r52.jpg",
    alt: "Security analysis of suspicious credentials",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Unsafe goods",
    description: "Pause and report.",
    image: "/images/Report-an-Issue/r53.jpg",
    alt: "Checking medical items for safety quarantine",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Brand concern",
    description: "Report. Do not post publicly.",
    image: "/images/Report-an-Issue/r54.jpg",
    alt: "Inspecting apparel collection authenticity",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    title: "Not sure",
    description: "Choose Other for approved triage.",
    image: "/images/Report-an-Issue/r55.jpg",
    alt: "Cross-functional team evaluating ambiguous issues",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function CommonSituations() {
  return (
    <section aria-label="Common Situations - Where each one goes" className={`${hanken} w-full bg-white`}>
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
              COMMON SITUATIONS
            </span>
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Where each one goes.
          </h2>

          {/* 6 Cards Grid (3 Columns) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200 hover:border-slate-300 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-[175px] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 380px"
                    />
                    {/* Floating Top-Right Circular Badge */}
                    <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className={`${sora} text-[17px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
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
              COMMON SITUATIONS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Where each one goes.
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
            Incoming dispatch points.
          </p>

          {/* 6 Stacked Mobile Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {mobileSituations.map((item) => (
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
                  <h3 className={`${sora} text-[15.5px] font-bold tracking-tight text-[#0c1e38]`}>
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
