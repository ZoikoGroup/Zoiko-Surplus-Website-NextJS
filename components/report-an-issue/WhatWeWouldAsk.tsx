import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const asks = [
  {
    tag: "ASK 1",
    title: "Reporter context",
    description: "Observer, seller, buyer, partner or rights representative.",
    image: "/images/Report-an-Issue/r10.jpg",
    alt: "Observer or representative providing context",
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
    tag: "ASK 2",
    title: "Market context",
    description: "Country or market, if relevant.",
    image: "/images/Report-an-Issue/r11.jpg",
    alt: "Specialists assessing regional market jurisdiction",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    tag: "ASK 3",
    title: "Reply preference",
    description: "Only with consent; no expectation.",
    image: "/images/Report-an-Issue/r12.jpg",
    alt: "Optional communication and consent preferences",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    tag: "ASK 4",
    title: "Summary and description",
    description: "Plain facts; no guess.",
    image: "/images/Report-an-Issue/r13.jpg",
    alt: "Clear factual documentation of observations",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

const mobileAsks = [
  {
    tag: "ASK 1",
    title: "Reporter context",
    description: "Observer, seller, buyer, partner or rights representative.",
    doNotSend: "No names of individuals.",
    image: "/images/Report-an-Issue/r41.jpg",
    alt: "Team discussing reporter roles and intake context",
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
    tag: "ASK 2",
    title: "Market context",
    description: "Country or market, if relevant.",
    doNotSend: "No internal routing codes.",
    image: "/images/Report-an-Issue/r42.jpg",
    alt: "Evaluating regional jurisdiction and market scope",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    tag: "ASK 3",
    title: "Reply preference",
    description: "Email only if a reply is requested.",
    doNotSend: "No personal phone numbers.",
    image: "/images/Report-an-Issue/r43.jpg",
    alt: "Reviewing reply preferences on digital device",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    tag: "ASK 4",
    title: "Summary and description",
    description: "Plain facts, described.",
    doNotSend: "No accusations or files.",
    image: "/images/Report-an-Issue/r44.jpg",
    alt: "Warehouse associates documenting factual summaries",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function WhatWeWouldAsk() {
  return (
    <section aria-label="What We Would Ask - Four short pieces of context" className={`${hanken} w-full bg-[#fbf9f6]`}>
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
              WHAT WE WOULD ASK
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Four short pieces of context.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Only what is needed to route the report.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {asks.map((item) => (
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
              WHAT WE WOULD ASK
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Four short pieces of context.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Only what is needed to route the report.
          </p>

          {/* 4 Stacked Mobile Cards with DO NOT SEND box */}
          <div className="mt-6 flex flex-col gap-3.5">
            {mobileAsks.map((item) => (
              <div
                key={item.tag}
                className="relative min-h-[195px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs flex flex-col justify-between"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/95 via-[#081321]/50 to-transparent" />

                {/* Top-Right Circular Badge */}
                <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-2xs backdrop-blur-[2px]">
                  {item.icon}
                </div>

                {/* Spacer to push content down */}
                <div className="h-10" />

                {/* Content Overlay */}
                <div className="relative z-10 p-4 pt-2">
                  <span className="text-[9.5px] font-bold tracking-[0.12em] text-[#10b981] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[15.5px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] leading-snug text-[#cbd5e1]">
                    {item.description}
                  </p>

                  {/* DO NOT SEND Box */}
                  <div className="mt-2.5 rounded-lg border border-[#f3e3bc] bg-[#fdf5df]/95 px-3 py-1.5 backdrop-blur-xs">
                    <span className="text-[8.5px] font-bold tracking-[0.12em] text-[#926016] uppercase block">
                      DO NOT SEND
                    </span>
                    <p className="text-[11px] font-medium text-[#784f12]">
                      {item.doNotSend}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
