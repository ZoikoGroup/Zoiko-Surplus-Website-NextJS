const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function CoordinationLayer() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="coordination-layer-desktop-heading" className={`hidden md:block ${hanken} w-full bg-[#0c1f38] text-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 sm:py-20 lg:py-24 md:px-8">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-white`}>08</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#18a884]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#18a884] uppercase`}>
              WHERE THE NETWORK FITS
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="coordination-layer-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-white sm:text-[38px] lg:text-[42px]"
          >
            The coordination layer of
            <br className="hidden sm:inline" /> the platform.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-white/75 sm:text-[16px]">
            Surplus Network connects seller-governed supply (Enterprise) and qualified demand (Exchange) to the authorized services that actually move, recover or redistribute goods.
          </p>

          {/* 3 Step Flow */}
          <div className="mt-12 flex flex-col items-center gap-4 md:flex-row md:items-stretch">
            {/* Card 1: Surplus Enterprise */}
            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-[16px] border border-white/10 bg-[#162a45]/85 p-6 text-center shadow-sm">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#18a884]/15 text-[#18a884]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="mt-3.5 text-[15px] font-bold text-white">
                Surplus Enterprise
              </h3>
              <p className="mt-1 text-[12px] text-white/60">
                Sellers qualify and govern stock.
              </p>
            </div>

            {/* Right Arrow */}
            <div className="hidden items-center justify-center px-1 text-white/40 md:flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* Card 2: Surplus Network (Highlighted) */}
            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-[16px] border-2 border-[#18a884] bg-[#142844] p-6 text-center shadow-[0_0_28px_rgba(24,168,132,0.18)]">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#18a884]/20 text-[#18a884]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <h3 className="mt-3.5 text-[15px] font-bold text-white">
                Surplus Network
              </h3>
              <p className="mt-1 text-[12px] font-medium text-[#18a884]">
                Coordinate permitted third-party services.
              </p>
            </div>

            {/* Right Arrow */}
            <div className="hidden items-center justify-center px-1 text-white/40 md:flex">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            {/* Card 3: Authorized outcome */}
            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-[16px] border border-white/10 bg-[#162a45]/85 p-6 text-center shadow-sm">
              <div className="flex size-10 items-center justify-center rounded-xl bg-[#18a884]/15 text-[#18a884]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </div>
              <h3 className="mt-3.5 text-[15px] font-bold text-white">
                Authorized outcome
              </h3>
              <p className="mt-1 text-[12px] text-white/60">
                Resale, recovery, donation or recycling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="coordination-layer-mobile-heading" className={`block md:hidden ${hanken} w-full bg-[#fbf7f2] px-4 py-12`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>01</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            WHERE THE NETWORK FITS
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="coordination-layer-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          The coordination layer of the platform.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#556987]">
          Surplus Network connects seller-governed supply (Enterprise) and qualified demand (Exchange) to the authorized services that actually move, recover or redistribute goods.
        </p>

        {/* 3 Step Vertical Stack */}
        <div className="mt-8 flex flex-col items-center">
          {/* Card 1: Surplus Enterprise */}
          <div className="w-full rounded-[16px] border border-gray-100 bg-white p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-[#e6f7f2] text-[#009b72]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <h3 className="mt-3 text-[14.5px] font-bold text-[#0c2140]">
              Surplus Enterprise
            </h3>
            <p className="mt-0.5 text-[12px] text-[#556987]">
              Sellers qualify and govern stock.
            </p>
          </div>

          {/* Downward Arrow */}
          <div className="my-2 flex text-gray-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>

          {/* Card 2: Surplus Network (Highlighted) */}
          <div className="w-full rounded-[16px] border-2 border-[#18a884] bg-white p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-[#009b72] text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </div>
            <h3 className="mt-3 text-[14.5px] font-bold text-[#0c2140]">
              Surplus Network
            </h3>
            <p className="mt-0.5 text-[12px] text-[#556987]">
              Coordinate permitted third-party services.
            </p>
          </div>

          {/* Downward Arrow */}
          <div className="my-2 flex text-gray-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>

          {/* Card 3: Authorized outcome */}
          <div className="w-full rounded-[16px] border border-gray-100 bg-white p-5 text-center shadow-xs">
            <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-[#e6f7f2] text-[#009b72]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
            </div>
            <h3 className="mt-3 text-[14.5px] font-bold text-[#0c2140]">
              Authorized outcome
            </h3>
            <p className="mt-0.5 text-[12px] text-[#556987]">
              Resale, recovery, donation or recycling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
