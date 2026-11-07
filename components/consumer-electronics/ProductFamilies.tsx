import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const families = [
  {
    id: "phones-wearables",
    title: "Phones & wearables",
    description: "Identifier handling and activation-lock status; personal data and counterfeit risk apply.",
    tags: ["Data", "Activation lock", "Batteries"],
    imageDesktop: "/images/consumer-electronics/ce3.png",
    imageMobile: "/images/consumer-electronics/ce24.jpg",
    alt: "Phones and wearables display",
    isHazard: false,
  },
  {
    id: "tv-audio-entertainment",
    title: "TV, audio & entertainment",
    description: "Electrical state and accessory completeness; damage, recall and plug/voltage compatibility.",
    tags: ["Electrical", "Recall", "Accessories"],
    imageDesktop: "/images/consumer-electronics/ce4.png",
    imageMobile: "/images/consumer-electronics/ce25.jpg",
    alt: "TV, audio and entertainment display",
    isHazard: false,
  },
  {
    id: "small-appliances",
    title: "Small appliances",
    description: "Functional inspection, plug and voltage; electrical and fire-hazard recall review.",
    tags: ["Fire hazard", "Voltage", "Recall"],
    imageDesktop: "/images/consumer-electronics/ce5.jpg",
    imageMobile: "/images/consumer-electronics/ce26.jpg",
    alt: "Small kitchen appliances on counter",
    isHazard: false,
  },
  {
    id: "components-accessories",
    title: "Components & accessories",
    description: "Compatibility, authenticity and packaging; counterfeit, IP and export restrictions.",
    tags: ["Counterfeit", "IP", "Export"],
    imageDesktop: "/images/consumer-electronics/ce6.jpg",
    imageMobile: "/images/consumer-electronics/ce27.jpg",
    alt: "Electronics components and accessories",
    isHazard: false,
  },
  {
    id: "battery-containing-damaged",
    title: "Battery-containing / damaged",
    description: "Hazard classification and packing rules; specialized transport and processing.",
    tags: ["Hazard class", "Packing", "Specialist"],
    imageDesktop: "/images/consumer-electronics/ce7.jpg",
    imageMobile: "/images/consumer-electronics/ce28.jpg",
    alt: "Specialized service and handling for damaged or battery items",
    isHazard: true,
  },
];

export default function ProductFamilies() {
  return (
    <section id="product-families" aria-labelledby="product-families-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PRODUCT FAMILIES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="product-families-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Different devices, different
            <br />
            controls.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Five illustrative families, each with its own safety, data and provenance considerations. Nothing here is stock, and tags are considerations — not a checklist that grants acceptance.
          </p>

          {/* Cards Grid: 3 columns, cards 4 and 5 in second row */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {families.map((fam) => (
              <div
                key={fam.id}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[#eef2f6] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              >
                {/* Image Container with Floating Badge */}
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={fam.imageDesktop}
                    alt={fam.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Floating Circular Badge */}
                  <div className="absolute bottom-3 left-3 z-10 flex size-7 items-center justify-center rounded-full bg-white shadow-md text-[#0f172a]">
                    {fam.isHazard ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="3" />
                        <circle cx="7" cy="15" r="3" />
                        <circle cx="17" cy="15" r="3" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0f172a]">
                      {fam.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
                      {fam.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5 pt-1">
                    {fam.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#fbf2e3] px-2.5 py-0.5 text-[10.5px] font-medium text-[#926016]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>02</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              PRODUCT FAMILIES
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Different devices, different controls.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Five illustrative families, each with its own safety, data and provenance considerations. Nothing here is stock, and tags are considerations — not a checklist that grants acceptance.
          </p>

          {/* 5 Stacked Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {families.map((fam) => (
              <div
                key={fam.id}
                className="overflow-hidden rounded-[18px] border border-[#e5e7eb] bg-white shadow-xs"
              >
                {/* Photo with floating badge */}
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  <Image
                    src={fam.imageMobile}
                    alt={fam.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 z-10 flex size-7 items-center justify-center rounded-[8px] bg-white/95 text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    {fam.isHazard ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="7" r="3" />
                        <circle cx="7" cy="15" r="3" />
                        <circle cx="17" cy="15" r="3" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <h3 className="text-[15px] font-bold text-[#0c1e38]">
                    {fam.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                    {fam.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                    {fam.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#f5dfb8] bg-[#fcf8f0] px-2.5 py-0.5 text-[10px] font-semibold text-[#926016]"
                      >
                        {t}
                      </span>
                    ))}
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
