import Image from "next/image";
import Link from "next/link";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const destinations = [
  {
    title: "Trust & Safety Overview",
    description: "Controls across the platform.",
    image: "/images/Report-an-Issue/r25.png",
    alt: "Warehouse compliance officer reviewing platform standards",
    badge: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    linkText: "Pending →",
    href: "/trust-and-safety",
  },
  {
    title: "Product Safety",
    description: "Condition, traceability and holds.",
    image: "/images/Report-an-Issue/r26.png",
    alt: "Quality assurance lead inspecting condition and lot verification",
    badge: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    linkText: "Pending →",
    href: "/product-safety",
  },
  {
    title: "Brand Protection",
    description: "Rights, provenance and channels.",
    image: "/images/Report-an-Issue/r27.png",
    alt: "Brand safety specialist verifying serial numbers and authorized channels",
    badge: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    linkText: "Pending →",
    href: "#",
  },
  {
    title: "Help Center",
    description: "Ordinary support, when approved.",
    image: "/images/Report-an-Issue/r28.png",
    alt: "Support coordinator checking intake documentation",
    badge: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    linkText: "Pending →",
    href: "/surplus-contact",
  },
];

const mobileDestinations = [
  {
    title: "Trust & Safety Overview",
    description: "Controls across the platform.",
    image: "/images/Report-an-Issue/r56.jpg",
    alt: "Warehouse compliance officer reviewing platform standards",
    badge: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    linkText: "Pending →",
    href: "/trust-and-safety",
  },
  {
    title: "Product Safety",
    description: "Condition, traceability and holds.",
    image: "/images/Report-an-Issue/r57.jpg",
    alt: "Quality assurance lead inspecting condition and lot verification",
    badge: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    linkText: "Pending →",
    href: "/product-safety",
  },
  {
    title: "Brand Protection",
    description: "Rights, provenance and channels.",
    image: "/images/Report-an-Issue/r58.jpg",
    alt: "Brand safety specialist verifying serial numbers and authorized channels",
    badge: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    linkText: "Pending →",
    href: "#",
  },
  {
    title: "Help Center",
    description: "Ordinary support, when approved.",
    image: "/images/Report-an-Issue/r59.jpg",
    alt: "Support coordinator checking intake documentation",
    badge: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    linkText: "Pending →",
    href: "/surplus-contact",
  },
];

export default function RelatedGuidance() {
  return (
    <section aria-label="Related Guidance - Where to go next" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-[#0c1e38]">10</span>
            <span className="h-[1px] w-8 bg-[#926016]/50"></span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-[#926016] uppercase">
              RELATED GUIDANCE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Where to go next.
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#556987]">
            Links go live only when each destination is approved.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((item) => (
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
                      sizes="(max-width: 1024px) 50vw, 320px"
                    />
                    {/* Floating Top-Right Circular Badge */}
                    <div className="absolute top-3 right-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 shadow-xs backdrop-blur-[2px]">
                      {item.badge}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className={`${sora} text-[16px] font-bold tracking-tight text-[#0c1e38]`}>
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-5 pb-5">
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-[13px] font-semibold text-[#926016] hover:text-[#a66e1b] transition-colors"
                  >
                    {item.linkText}
                  </Link>
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
              RELATED GUIDANCE
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-[#0c1e38]`}>
            Where to go next.
          </h2>
          <p className="mt-1.5 text-[13px] leading-relaxed text-[#556987]">
            Links go live only when each destination is approved.
          </p>

          {/* 4 Stacked Mobile Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {mobileDestinations.map((item) => (
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
                    {item.badge}
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
                  <div className="mt-3">
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-[12.5px] font-semibold text-[#926016] hover:text-[#a66e1b] transition-colors"
                    >
                      {item.linkText}
                    </Link>
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
