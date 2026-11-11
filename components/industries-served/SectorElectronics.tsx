import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const constraints = [
  {
    title: "Data sanitization",
    description: "Devices that hold data require verified sanitization before reuse.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Batteries, recall and electrical safety",
    description: "Battery rules and recall checks are required.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Serials, warranties and lawful sale",
    description: "Device identification and resale rights must be clear.",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
];

export default function SectorElectronics() {
  return (
    <section
      id="sector-electronics"
      aria-labelledby="sector-electronics-heading"
      className={`${hanken} w-full bg-white`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Visual (sis12.jpg) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-slate-100 shadow-[0_10px_30px_rgba(12,30,56,0.08)]">
                <Image
                  src="/images/Industries-Served/sis12.jpg"
                  alt="Consumer electronics headphones product screening"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3.5 left-3.5">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                    Consumer Electronics
                  </span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="flex flex-col lg:col-span-6">
              <p className={`${sora} text-[10.5px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
                SECTOR 3
              </p>

              <h2
                id="sector-electronics-heading"
                className="mt-2.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0c1e38] sm:text-[36px]"
              >
                Consumer Electronics
              </h2>

              <p className="mt-2 text-[14.5px] leading-relaxed text-[#556987] sm:text-[15.5px]">
                Unused, returned or refurbished eligible devices and accessories.
              </p>

              {/* 3 Constraint Items */}
              <div className="mt-6 flex flex-col gap-4">
                {constraints.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[13.5px] font-extrabold text-[#0c1e38]">{item.title}</h3>
                      <p className="mt-0.5 text-[12px] text-[#556987]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conditional Callout */}
              <div className="mt-6 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf7e7] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>
                  <strong className="font-bold text-[#6b4b1e]">Conditional:</strong> No live marketplace deployment, and not supported until full store is started.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          {/* Top Visual Photo (sis31.jpg) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-slate-100 shadow-xs">
            <Image
              src="/images/Industries-Served/sis31.jpg"
              alt="Consumer electronics headphones product screening"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10.5px] font-bold text-[#0c1e38] shadow-xs backdrop-blur-xs">
                Consumer Electronics
              </span>
            </div>
          </div>

          <p className={`${sora} mt-6 text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            SECTOR 3
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.02em] text-[#0c1e38]">
            Consumer Electronics
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Unused, returned or refurbished eligible devices and accessories.
          </p>

          {/* 3 Constraint Items */}
          <div className="mt-5 flex flex-col gap-3.5">
            {constraints.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[7px] bg-[#fbf4e6] text-[#926016]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-extrabold text-[#0c1e38]">{item.title}</h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[#556987]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Conditional Pill */}
          <div className="mt-5 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf7e7] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              <strong className="font-bold text-[#6b4b1e]">Conditional:</strong> No assumed active deployment, and no unsupported certification is claimed.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
