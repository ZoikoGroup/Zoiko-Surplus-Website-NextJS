const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const describesList = [
  "How sector needs and constraints differ",
  "The checks that govern participation",
  "Where a pathway is only informational or conditional",
];

const notClaimedList = [
  "That any category or market is currently active",
  "Buyer matches, sale timing or recovery results",
  "Statistics, client logos, testimonials or ESG figures",
  "Owned warehouses, carriers or certifications",
];

export default function ProofDiscipline() {
  return (
    <section
      id="proof-discipline"
      aria-labelledby="proof-discipline-heading"
      className={`${hanken} block md:hidden w-full border-t border-slate-100 bg-white`}
    >
      <div className="w-full px-5 py-9">
        <p className={`${sora} text-[10px] font-extrabold leading-relaxed tracking-[0.16em] text-[#64748b] uppercase`}>
          PROOF, DISCIPLINE AND NON-GUARANTEE LANGUAGE
        </p>

        <h2
          id="proof-discipline-heading"
          className="mt-2 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]"
        >
          What this page claims, and what it does not.
        </h2>

        <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
          Descriptions are evidence-led. Each claim needs a source record and an owner before it is published.
        </p>

        {/* Card 1: This page describes */}
        <div className="mt-6 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#e6f7f2] text-[#009b72]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <h3 className="text-[16px] font-extrabold text-[#0c1e38]">
              This page describes
            </h3>
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {describesList.map((item) => (
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

        {/* Card 2: This page does not claim */}
        <div className="mt-4 rounded-[18px] border border-slate-200/90 bg-white p-5 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#fdecea] text-[#c2410c]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h3 className="text-[16px] font-extrabold leading-snug text-[#0c1e38]">
              This page
              <br />
              does not claim
            </h3>
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {notClaimedList.map((item) => (
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
