const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const terms = [
  {
    term: "KYB",
    definition: "Know-your-business review of an organization's identity, role and eligibility.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="12" y2="14" />
      </svg>
    ),
  },
  {
    term: "Lot",
    definition: "A defined group of surplus inventory that is qualified and offered together.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    term: "Private market",
    definition: "A seller-controlled audience that only approved buyers can see.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    term: "Corridor",
    definition: "An approved route for trade between markets, with its own gates.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    term: "Merchant of record",
    definition: "The party legally responsible for the sale. Not Zoiko by default.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M5 7l-2 7h4l-2-7z" />
        <path d="M19 7l-2 7h4l-2-7z" />
      </svg>
    ),
  },
  {
    term: "Evidence record",
    definition:
      "A stored record of a decision, movement or outcome. It does not prove underlying claims on its own.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export default function PlainEnglishTerms() {
  return (
    <section
      id="plain-english-terms"
      aria-labelledby="plain-english-terms-heading"
      className={`${hanken} w-full bg-[#fbfaf7]`}
    >
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-20 md:px-8 md:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>13</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PLAIN-ENGLISH TERMS
            </span>
          </div>

          {/* Heading */}
          <h2
            id="plain-english-terms-heading"
            className="mt-3.5 text-[36px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0c1e38] sm:text-[42px] lg:text-[46px]"
          >
            Terms used on this page.
          </h2>

          {/* 6 Terms Grid */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {terms.map((item) => (
              <div
                key={item.term}
                className="flex items-start gap-3.5 rounded-[14px] border border-slate-200/90 bg-white p-5 shadow-2xs"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf4e6] text-[#926016]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-extrabold text-[#0c1e38]">
                    {item.term}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-[#556987]">
                    {item.definition}
                  </p>
                </div>
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
          <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
            PLAIN-ENGLISH TERMS
          </p>

          <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]">
            Terms used on this page.
          </h2>

          <p className="mt-2 text-[13px] leading-relaxed text-[#556987]">
            Short definitions so each term means one thing.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            {terms.map((item) => (
              <div
                key={item.term}
                className="flex items-start gap-3.5 rounded-[14px] border border-slate-200/90 bg-white p-4.5 shadow-2xs"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fbf4e6] text-[#926016]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[13.5px] font-extrabold text-[#0c1e38]">
                    {item.term}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                    {item.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
