const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const whatItIsNot = [
  "A public marketplace with listings for individuals.",
  "An owner of goods, merchant, or physical transporter.",
  "A guarantee of recovery yield, or of success in trading.",
  "Open to unverified entities or individuals.",
];

const whatItIs = [
  "Gate access by verified counterparty status.",
  "Keep sellers in control of audience.",
  "Record actions, decisions and exceptions.",
  "Operate market by market.",
];

export default function PlainLimits() {
  return (
    <section aria-label="Setting Expectations Early - Plain limits, stated first" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW: NONE (Strictly preserved - mobile only!)
         ======================================================== */}

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile layout)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-5 py-8">
          {/* Eyebrow */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-[#8a9bb2] uppercase">
            SETTING EXPECTATIONS EARLY
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold tracking-[-0.025em] text-[#0c1e38]`}>
            Plain limits, stated first.
          </h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
            Read this first so you understand this platform.
          </p>

          {/* 2 Vertical Cards */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Card 1: It is not */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff1f2] text-[#e11d48]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  It is not
                </h3>
              </div>

              <ul className="mt-4 flex flex-col gap-3">
                {whatItIsNot.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#556987]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[#e11d48]">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: It is designed to */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e6f7f2] text-[#009b72]">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={`${sora} text-[18px] font-bold text-[#0c1e38]`}>
                  It is designed to
                </h3>
              </div>

              <ul className="mt-4 flex flex-col gap-3">
                {whatItIs.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#556987]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[#009b72]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
