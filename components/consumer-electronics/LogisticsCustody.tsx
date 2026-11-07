import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const features = [
  {
    title: "Hazard-compliant transport",
    description: "Battery and dangerous-goods rules observed.",
  },
  {
    title: "Chain of custody",
    description: "Handover and receipt are evidenced.",
  },
  {
    title: "Separately contracted",
    description: "Partners perform these functions, not Zoiko.",
  },
];

export default function LogisticsCustody() {
  return (
    <section id="logistics-custody" aria-labelledby="logistics-custody-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-24 md:px-8 md:pt-14 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Visual Photo (ce15.png) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <Image
                  src="/images/consumer-electronics/ce15.png"
                  alt="Logistics specialist inspecting inventory with tablet in warehouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & 3 Check Items */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  LOGISTICS & CUSTODY
                </span>
              </div>

              {/* Heading */}
              <h2
                id="logistics-custody-heading"
                className="mt-3.5 text-[34px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
              >
                Safe movement by
                <br />
                licensed partners.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Where devices move, hazard-class packing and transport rules apply, and licensed partners handle custody. Zoiko isn&apos;t a refurbisher, transporter, warranty provider or waste handler by default.
              </p>

              {/* 3 Check Items */}
              <div className="mt-8 flex flex-col gap-4">
                {features.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14.5px] font-bold text-[#0c1e38]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[13.5px] text-[#556987]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          {/* Top Visual Image (ce36.jpg) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/consumer-electronics/ce36.jpg"
              alt="Safe logistics movement and inspection"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Eyebrow */}
          <div className="mt-6 flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              LOGISTICS & CUSTODY
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0c1e38]">
            Safe movement by licensed partners.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Where devices move, hazard-class packing and transport rules apply, and licensed partners handle custody. Zoiko isn&apos;t a refurbisher, transporter, warranty provider or waste handler by default.
          </p>

          {/* 3 Check Items */}
          <div className="mt-5 flex flex-col gap-3.5">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className="text-[13.5px] font-bold text-[#0c1e38]">{item.title}</h3>
                  <p className="text-[12.5px] text-[#556987]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
