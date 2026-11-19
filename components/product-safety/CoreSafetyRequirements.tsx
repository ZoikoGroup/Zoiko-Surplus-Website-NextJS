import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const areas = [
  {
    tag: "AREA 1",
    title: "Condition and integrity",
    description: "The goods are what they are claimed to be. No counterfeit or alteration.",
    mobileDesc: "The goods are what they are described to be, intact and uncorrupted.",
    image: "/images/Product-Safety/ps3.png",
    mobileImage: "/images/Product-Safety/ps30.jpg",
    alt: "Warehouse staff inspecting inventory condition and package integrity",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    tag: "AREA 2",
    title: "Provenance and traceability",
    description: "Where goods came from, and who held them.",
    mobileDesc: "Where goods came from, and every step before them.",
    image: "/images/Product-Safety/ps4.png",
    mobileImage: "/images/Product-Safety/ps31.jpg",
    alt: "Quality compliance team verifying lot provenance and chain of custody",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    tag: "AREA 3",
    title: "Applicable safety",
    mobileTitle: "Applicable safety requirements",
    description: "Rules that apply to the product and the market.",
    mobileDesc: "Rules that apply to the product and the market.",
    image: "/images/Product-Safety/ps5.png",
    mobileImage: "/images/Product-Safety/ps32.jpg",
    alt: "Technicians in protective gear reviewing regulatory requirements",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    tag: "AREA 4",
    title: "Handling and restrictions",
    description: "Storage, movement and limits on use or resale.",
    mobileDesc: "Storage, movement and limits on use or transfer.",
    image: "/images/Product-Safety/ps6.png",
    mobileImage: "/images/Product-Safety/ps33.jpg",
    alt: "Operations managers negotiating cargo restrictions and handling agreements",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0c1e38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function CoreSafetyRequirements() {
  return (
    <section id="safety-requirements" aria-label="Core Safety Requirements - Four areas. No checkboxes." className={`${hanken} w-full bg-white`}>
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
              CORE SAFETY REQUIREMENTS
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Four areas. No checkboxes.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#556987]">
            Read, do not tick. Meeting one never means the rest are met.
          </p>

          {/* 4 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {areas.map((item) => (
              <div
                key={item.tag}
                className="group relative aspect-[3/4] min-h-[290px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Background Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e38] via-[#0c1e38]/50 to-transparent" />

                {/* Top-Right Badge */}
                <div className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 backdrop-blur-[2px] shadow-xs">
                  {item.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[11px] font-bold tracking-wider text-[#00c48c] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-1 text-[17px] font-bold text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-slate-200">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly preserved for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-4 py-12">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#926016] uppercase">
            CORE SAFETY REQUIREMENTS
          </div>

          {/* Heading */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.025em] text-[#0c1e38]`}>
            Four areas.
            <br />
            No checkboxes.
          </h2>

          {/* Subtitle */}
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#556987]">
            Read, do not tick. Meeting one never means the rest are met.
          </p>

          {/* 4 Stacked Image Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {areas.map((item) => (
              <div
                key={item.tag}
                className="group relative h-[190px] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xs"
              >
                {/* Background Photo */}
                <Image
                  src={item.mobileImage}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182d] via-[#08182d]/65 to-transparent" />

                {/* Top-Right Badge */}
                <div className="absolute top-3.5 right-3.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                  {item.icon}
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-[10.5px] font-bold tracking-wider text-[#00c48c] uppercase">
                    {item.tag}
                  </span>
                  <h3 className={`${sora} mt-0.5 text-[16px] font-bold text-white`}>
                    {item.mobileTitle || item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-snug text-slate-200">
                    {item.mobileDesc}
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
