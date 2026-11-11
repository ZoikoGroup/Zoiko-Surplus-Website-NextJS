const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const recordCards = [
  {
    title: "Evidence lifecycle",
    description:
      "Decisions and approvals are recorded with who made them, and kept under the applicable retention policy.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Movement records",
    description:
      "Handover and movement events are preserved where a pathway is configured to record them.",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Exceptions and resolution",
    description:
      "Disputes, withdrawals and recalls follow defined processes and escalate to approved guidance. No outcome is guaranteed.",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M5 7l-2 7h4l-2-7z" />
        <path d="M19 7l-2 7h4l-2-7z" />
      </svg>
    ),
  },
];

export default function EvidenceExceptions() {
  return (
    <section
      id="evidence-exceptions"
      aria-labelledby="evidence-exceptions-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              EVIDENCE AND EXCEPTION HANDLING
            </span>
          </div>

          {/* Heading */}
          <h2
            id="evidence-exceptions-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Records explain decisions. Defined
            <br />
            routes handle exceptions.
          </h2>

          {/* Subtitle */}
          <p className="mt-3.5 max-w-[600px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            This section describes record types and event definitions. It shows no counts or datasets.
          </p>

          {/* 3 Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recordCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-6 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${card.iconBg}`}>
                  {card.icon}
                </div>

                <h3 className="mt-4 text-[16px] font-extrabold text-[#0c1e38]">
                  {card.title}
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (dedicated pixel-perfect mobile phase)
         ======================================================== */}
      <div className="block md:hidden border-t border-slate-100 bg-white">
        <div className="w-full px-5 py-9">
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            EVIDENCE AND EXCEPTION HANDLING
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Records explain decisions. Defined routes handle exceptions.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            This section describes record types and event definitions. It shows no counts or datasets.
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            {recordCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className={`flex size-9 items-center justify-center rounded-[9px] ${card.iconBg}`}>
                  {card.icon}
                </div>

                <h3 className="mt-3.5 text-[15.5px] font-extrabold text-[#0c1e38]">
                  {card.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
