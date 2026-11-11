const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const states = [
  {
    title: "Sending...",
    description:
      "The button is disabled while the request runs, so a double click cannot create a duplicate.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    title: "Received",
    description:
      "\"Your inquiry was received. Keep the reference number for follow-up.\" The number is opaque and appears only on success.",
    iconBg: "bg-[#e6f7f2] text-[#009b72]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Unavailable or failed",
    description:
      "\"This contact option is temporarily unavailable. Please use an alternative published channel.\" Your non-sensitive entries are kept.",
    iconBg: "bg-[#fbf4e6] text-[#926016]",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function AfterYouSend() {
  return (
    <section
      id="after-you-send"
      aria-labelledby="after-you-send-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              AFTER YOU SEND
            </span>
          </div>

          {/* Heading */}
          <h2
            id="after-you-send-heading"
            className="mt-3.5 text-[36px] font-extrabold tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Honest states, in plain language.
          </h2>

          {/* 3 Status Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {states.map((item) => (
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
            AFTER YOU SEND
          </p>

          <h2 className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Honest states, in plain language.
          </h2>

          <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
            The page only says &ldquo;received&rdquo; after the message is safely stored.
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            {states.map((item) => (
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
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
