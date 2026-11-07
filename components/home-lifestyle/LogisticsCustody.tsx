import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const features = [
  {
    title: "Handling suitability",
    description: "Size, fragility and weight assessed per lot.",
  },
  {
    title: "Licensed partners",
    description: "Transport and recovery via contracted providers.",
  },
  {
    title: "No default services",
    description: "Pickup, storage and packaging are not implied.",
  },
];

export default function LogisticsCustody() {
  return (
    <section id="logistics-custody" aria-labelledby="logistics-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-24 md:px-8 md:pt-14 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Visual Photo (hl9.png) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <Image
                  src="/images/home-lifestyle/hl9.png"
                  alt="Packaging, boxes and moving logistics for home furniture and lifestyle goods"
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
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  LOGISTICS &amp; CUSTODY
                </span>
              </div>

              {/* Heading */}
              <h2
                id="logistics-heading"
                className="mt-3.5 text-[36px] font-extrabold leading-[1.14] tracking-[-0.02em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
              >
                Movement sits with
                <br />
                licensed partners.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Bulky furniture and fragile décor have real handling constraints. Where goods move, separately contracted partners manage transport and custody — Zoiko doesn&apos;t promise pickup, storage or packaging by default.
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
                      <p className="mt-0.5 text-[13px] text-[#556987]">
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
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden bg-white">
        <div className="w-full px-5 py-8">
          {/* Top visual photo hl32.jpg */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] border border-slate-200/80 shadow-2xs">
            <Image
              src="/images/home-lifestyle/hl28.jpg"
              alt="Licensed transport and custody goods"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Eyebrow */}
          <div className="mt-6 flex items-center gap-2">
            <span className={`${sora} text-[11px] font-bold text-[#718096]`}>10</span>
            <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
            <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
              LOGISTICS &amp; CUSTODY
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0c1e38]">
            Movement sits with licensed partners.
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-[12.5px] leading-relaxed text-[#556987]">
            Bulky furniture and fragile décor have real handling constraints. Where goods move, separately contracted partners manage transport and custody — Zoiko doesn&apos;t promise pickup, storage or packaging by default.
          </p>

          {/* 3 Check Items */}
          <div className="mt-5 flex flex-col gap-3.5">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#009b72"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-[#009b72]"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className="text-[13.5px] font-bold text-[#0c1e38]">{item.title}</h3>
                  <p className="text-[12px] leading-relaxed text-[#556987]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
