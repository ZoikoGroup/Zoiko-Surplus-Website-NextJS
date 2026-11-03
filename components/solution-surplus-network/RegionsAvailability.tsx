import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type RegionItem = {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeStyle: string;
};

const regionItems: RegionItem[] = [
  {
    id: "uk",
    title: "United Kingdom — Apparel & Footwear",
    description: "A proposed seller-private B2B pilot — proposed is not evidence of launch.",
    badge: "Proposed pilot",
    badgeStyle: "bg-[#eaf7f2] text-[#009b72] border-[#d2efe4]",
  },
  {
    id: "other",
    title: "Other regions",
    description: "Informational content is available; no coordinated service is confirmed live.",
    badge: "Informational",
    badgeStyle: "bg-[#f1f5f9] text-[#475569] border-[#e2e8f0]",
  },
  {
    id: "food",
    title: "Sealed ambient food",
    description: "Independent safety, traceability, shelf-life and local law gate before any activity.",
    badge: "Separate approval",
    badgeStyle: "bg-[#fdf5eb] text-[#926016] border-[#f3e3ca]",
  },
];

export default function RegionsAvailability() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="regions-availability-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-16 md:px-8 md:pt-10 md:pb-24">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              REGIONS & AVAILABILITY
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="regions-availability-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Services are activated,
            <br className="hidden sm:inline" /> not assumed.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Coordinated services and partners are activated by region and category. A neutral &ldquo;not available&rdquo; state is shown where nothing is active.
          </p>

          {/* Grid with Left Image & Right Region Cards */}
          <div className="mt-9 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Food packaging image */}
            <div className="lg:col-span-5">
              <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:h-[320px] lg:h-full lg:min-h-[340px]">
                <Image
                  src="/images/solution-surplus-network/sn8.png"
                  alt="Packaged ambient food and takeaway items"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: 3 Region Status Cards */}
            <div className="flex flex-col justify-between gap-3.5 lg:col-span-7">
              {regionItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-[16px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
                >
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-[1.55] text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${item.badgeStyle}`}
                    >
                      <span className="size-1.5 rounded-full bg-current opacity-80" />
                      {item.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width Footnote Disclaimer Bar */}
          <div className="mt-6 flex items-center gap-2.5 rounded-[14px] border border-[#faecd8] bg-[#fffcf5] p-3.5 text-[12px] text-[#8a6834] sm:p-4">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-[#b58744]"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>
              The country/locale selector is informational only — it sets content and language, and does not activate a service, grant eligibility or change any permission.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="regions-availability-mobile-heading" className={`block md:hidden ${hanken} w-full bg-white px-4 py-8`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>10</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            REGIONS & AVAILABILITY
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="regions-availability-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          Services are activated,
          <br /> not assumed.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Coordinated services and partners are activated by region and category. A neutral &ldquo;not available&rdquo; state is shown where nothing is active.
        </p>

        {/* Mobile World Map Image (sn14.jpg) */}
        <div className="relative mt-6 mb-4 h-[180px] w-full overflow-hidden rounded-[20px] shadow-xs">
          <Image
            src="/images/solution-surplus-network/sn18.jpg"
            alt="Global jurisdictions and regional corridor availability map"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* 3 Region Cards Stack */}
        <div className="flex flex-col gap-3">
          {regionItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-[14px] border border-gray-100 bg-white p-4 shadow-xs"
            >
              <div>
                <h3 className="text-[13.5px] font-bold text-[#0c2140]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11.5px] leading-[1.5] text-[#556987]">
                  {item.description}
                </p>
              </div>
              <div className="mt-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10.5px] font-semibold ${item.badgeStyle}`}
                >
                  <span className="size-1.5 rounded-full bg-current opacity-80" />
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Bar */}
        <div className="mt-4 flex items-start gap-2 rounded-[14px] border border-[#faecd8] bg-[#fffcf5] p-3.5 text-[11px] leading-[1.5] text-[#8a6834]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0 text-[#b58744]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>
            The country/locale selector is informational only — it sets content and language, and does not activate a service, grant eligibility or change any permission.
          </span>
        </div>
      </section>
    </>
  );
}
