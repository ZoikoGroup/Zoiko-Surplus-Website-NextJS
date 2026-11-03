const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const stages = [
  { num: 1, label: "Stage 1", title: "Qualify", highlighted: false },
  { num: 2, label: "Stage 2", title: "Govern", highlighted: false },
  { num: 3, label: "Stage 3", title: "Match", highlighted: false },
  { num: 4, label: "Stage 4", title: "Optimize", highlighted: true },
  { num: 5, label: "Stage 5", title: "Transact", highlighted: false },
  { num: 6, label: "Stage 6", title: "Prove", highlighted: false },
  { num: 7, label: "Stage 7", title: "Resolve", highlighted: true },
];

export default function SevenStageIntegration() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="seven-stage-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-20 md:px-8 md:pt-10 md:pb-28">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              SEVEN-STAGE INTEGRATION
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="seven-stage-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            The network supports Optimize
            <br className="hidden sm:inline" /> and Resolve.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Coordination plugs into the same site-wide model — helping select a route to optimize, and carrying it through to a resolved, evidenced outcome.
          </p>

          {/* Horizontal 7-Stage Container */}
          <div className="mt-10 overflow-x-auto pb-2">
            <div className="min-w-[700px] rounded-[14px] border border-[#e2e8f0] bg-white p-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <div className="grid grid-cols-7 divide-x divide-[#eef2f6]">
                {stages.map((st) => (
                  <div
                    key={st.num}
                    className={`flex flex-col items-center justify-center py-5 px-3 transition-colors ${
                      st.highlighted
                        ? "rounded-[10px] border-2 border-[#18a884] bg-[#f7fdfa] shadow-xs"
                        : "bg-white"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-medium ${
                        st.highlighted ? "font-semibold text-[#18a884]" : "text-gray-400"
                      }`}
                    >
                      {st.label}
                    </span>
                    <span
                      className={`mt-1.5 text-[13.5px] font-bold ${
                        st.highlighted ? "text-[#18a884]" : "text-[#0f172a]"
                      }`}
                    >
                      {st.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-3.5 flex items-center gap-2 text-[12px] text-[#556987]">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-gray-400"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            <span>An educational model — not a live, always-on runtime status.</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="seven-stage-mobile-heading" className={`block md:hidden ${hanken} w-full bg-white px-4 py-8`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>04</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            SEVEN-STAGE INTEGRATION
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="seven-stage-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          The network supports
          <br /> Optimize and Resolve.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Coordination plugs into the same site-wide model — helping select a route to optimize, and carrying it through to a resolved, evidenced outcome.
        </p>

        {/* 7 Vertical Stage Cards */}
        <div className="mt-6 flex flex-col gap-2.5">
          {stages.map((st) => (
            <div
              key={st.num}
              className={`flex flex-col items-center justify-center rounded-[14px] p-4 text-center transition-colors shadow-2xs ${
                st.highlighted
                  ? "border-2 border-[#18a884] bg-white"
                  : "border border-gray-100 bg-white"
              }`}
            >
              <span className={`text-[11px] ${st.highlighted ? "font-semibold text-[#18a884]" : "text-gray-400"}`}>
                {st.label}
              </span>
              <span className={`mt-0.5 text-[14px] font-bold ${st.highlighted ? "text-[#18a884]" : "text-[#0c2140]"}`}>
                {st.title}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-3.5 flex items-center gap-2 text-[11px] text-[#556987]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-gray-400"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <span>An educational model — not a live, always-on runtime status.</span>
        </div>
      </section>
    </>
  );
}
