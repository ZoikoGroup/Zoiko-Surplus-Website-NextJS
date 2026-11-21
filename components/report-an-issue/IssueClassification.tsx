import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const concerns = [
  {
    tag: "TYPE 1",
    title: "Product safety or recall",
    description: "Suspected unsafe or recalled goods.",
    image: "/images/Report-an-Issue/r2.png",
    alt: "Warehouse worker inspecting goods for safety and recall checks",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    tag: "TYPE 2",
    title: "Brand or authenticity",
    description: "Suspected counterfeit or brand misuse.",
    image: "/images/Report-an-Issue/r3.png",
    alt: "Retail boutique checking authentic apparel merchandise",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    tag: "TYPE 3",
    title: "Suspicious activity",
    description: "Messages, requests, behavior seen invalid.",
    image: "/images/Report-an-Issue/r4.jpg",
    alt: "Specialist evaluating activity logs on laptop",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    tag: "TYPE 4",
    title: "Access or disclosure misuse",
    description: "Unauthorized access or disclosure.",
    image: "/images/Report-an-Issue/r5.png",
    alt: "Staff inspecting sensitive parcel packaging",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    tag: "TYPE 5",
    title: "Other trust concern",
    description: "Anything else, through approved triage.",
    image: "/images/Report-an-Issue/r6.png",
    alt: "Enterprise compliance team reviewing triage items",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const mobileConcerns = [
  {
    tag: "TYPE 1",
    title: "Product safety or recall",
    description: "Suspected unsafe or recalled goods.",
    image: "/images/Report-an-Issue/r33.jpg",
    alt: "Inspecting medication and health goods for recall compliance",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    tag: "TYPE 2",
    title: "Brand or authenticity",
    description: "Suspected counterfeit or brand misuse.",
    image: "/images/Report-an-Issue/r34.jpg",
    alt: "Authenticating branded apparel lots on rack",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    tag: "TYPE 3",
    title: "Suspicious activity",
    description: "Messages, requests, behavior seen invalid.",
    image: "/images/Report-an-Issue/r35.jpg",
    alt: "Investigating unauthorized digital messaging or activity",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    tag: "TYPE 4",
    title: "Access or disclosure misuse",
    description: "Unauthorized access or disclosure.",
    image: "/images/Report-an-Issue/r36.jpg",
    alt: "Handling restricted inventory under secure disclosure rules",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    tag: "TYPE 5",
    title: "Other trust concern",
    description: "Anything else, through approved triage.",
    image: "/images/Report-an-Issue/r37.jpg",
    alt: "Collaborative review of unclassified trust concerns",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function IssueClassification() {
  return (
    <section id="issue-classification" aria-label="Issue Classification - Five kinds of concern" className={`${hanken} w-full bg-[#fbf9f6]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">02</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              ISSUE CLASSIFICATION
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Five kinds of concern.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Choose the closest match. The next sections show what to report and what not to send.
          </p>

          {/* 5 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {concerns.map((item) => (
              <div
                key={item.tag}
                className="group relative aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />

                {/* Floating Top-Right Circular Badge */}
                <div className="absolute top-3.5 right-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-[2px]">
                  {item.icon}
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 flex flex-col justify-end">
                  <span className="text-[10px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-1 text-[17px] lg:text-[18px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] lg:text-[12.5px] leading-snug text-[#cbd5e1]">
                    {item.description}
                  </p>
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
              ISSUE CLASSIFICATION
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Five kinds of concern.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Choose the closest match. The next sections show what to report and what not to send.
          </p>

          {/* 5 Stacked Mobile Cards */}
          <div className="mt-6 flex flex-col gap-3.5">
            {mobileConcerns.map((item) => (
              <div
                key={item.tag}
                className="relative h-[164px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/45 to-transparent" />

                {/* Floating Top-Right Circular Badge */}
                <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-2xs backdrop-blur-[2px]">
                  {item.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  <span className="text-[9.5px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[15.5px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-[#cbd5e1]">
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
