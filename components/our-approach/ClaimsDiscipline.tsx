const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const describeItems = [
  "How qualification, access and evidence are designed to work",
  "Which controls a seller can set",
  "What each stage does and where its limits sit",
  "Where markets are pilot, planned or not yet activated",
];

const notShownItems = [
  "Confidential seller identity, pricing, offers or lots",
  "Guaranteed recovery, sell-through or emissions figures",
  "Testimonials, partner logos or business data not verified",
  "Certification-style badges or endorsements",
];

export default function ClaimsDiscipline() {
  return (
    <section
      id="claims-discipline"
      aria-labelledby="claims-discipline-heading"
      className={`${hanken} block md:hidden w-full border-t border-slate-100 bg-[#fbfaf7]`}
    >
      <div className="w-full px-5 py-9">
        <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
          CLAIMS DISCIPLINE
        </p>

        <h2
          id="claims-discipline-heading"
          className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]"
        >
          What this page says, and what it leaves out.
        </h2>

        <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
          Public copy is limited to what can be backed by approved policy or product scope.
        </p>

        {/* Card 1: We describe */}
        <div className="mt-6 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#e6f7f2] text-[#009b72]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <h3 className="text-[16px] font-extrabold text-[#0c1e38]">We describe</h3>
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {describeItems.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#009b72"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: We do not show */}
        <div className="mt-4 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fdecea] text-[#c2410c]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            </div>
            <h3 className="text-[16px] font-extrabold text-[#0c1e38]">We do not show</h3>
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {notShownItems.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c2633a"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
