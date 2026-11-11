const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const controls = [
  {
    title: "Global by architecture",
    description: "One platform design that can be configured for many places.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Regional by configuration",
    description: "Rules are applied for each country and category.",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
  },
  {
    title: "Market-by-market by activation",
    description:
      "Nothing is open until it is approved for that market. Unsupported visitors still see approved informational content.",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function GeographicControls() {
  return (
    <section
      id="geographic-controls"
      aria-labelledby="geographic-controls-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              AVAILABILITY AND GEOGRAPHIC CONTROLS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="geographic-controls-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Language is informational.
            <br />
            Eligibility is never inferred.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Country, category and corridor eligibility come from approved policy data, not from your location or display language.
          </p>

          {/* Display Language Bar */}
          <div className="mt-8 flex items-center gap-4 rounded-[12px] border border-slate-200/90 bg-white px-5 py-3.5 shadow-2xs">
            <span className="text-[12px] font-bold text-[#0c1e38]">Display language</span>
            <span className="inline-flex items-center rounded-[8px] border border-slate-200 bg-[#f8fafc] px-3.5 py-1.5 text-[12px] font-medium text-[#0c1e38]">
              English (UK)
            </span>
          </div>

          {/* 3 Control Cards Grid */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {controls.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-6 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${item.iconBg}`}>
                  {item.icon}
                </div>

                <h3 className="mt-4 text-[15.5px] font-extrabold text-[#0c1e38]">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-[#fbfaf7]">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#64748b] uppercase`}>
            AVAILABILITY AND GEOGRAPHIC CONTROLS
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Language is informational. Eligibility is never inferred.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            Country, category and corridor eligibility come from approved policy data, not from your location or display language.
          </p>

          {/* Display Language Bar */}
          <div className="mt-5 flex items-center justify-between gap-3 rounded-[12px] border border-slate-200/90 bg-white px-4 py-3 shadow-2xs">
            <span className="text-[12px] font-bold text-[#0c1e38]">Display language</span>
            <span className="inline-flex items-center rounded-[8px] border border-slate-200 bg-[#f8fafc] px-3.5 py-1.5 text-[12px] font-medium text-[#0c1e38]">
              English (UK)
            </span>
          </div>

          {/* Mobile Disclosure Callout */}
          <div className="mt-3 flex items-start gap-2.5 rounded-[12px] border border-[#f5dfb8] bg-[#fdf7e7] p-3.5 text-[11.5px] leading-relaxed text-[#7c5c2b]">
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
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>
              Display language changes how this page reads. It does not activate trading or override market policy.
            </span>
          </div>

          {/* 3 Stacked Control Cards */}
          <div className="mt-4 flex flex-col gap-3.5">
            {controls.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${item.iconBg}`}>
                  {item.icon}
                </div>

                <h3 className="mt-3.5 text-[15.5px] font-extrabold text-[#0c1e38]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                  {idx === 2
                    ? "Nothing is open until it is approved for that market. Unsupported markets still see approved informational content."
                    : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
