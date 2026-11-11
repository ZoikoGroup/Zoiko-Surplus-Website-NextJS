const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const differentiators = [
  {
    name: "Seller-private access",
    proposition: "Control who may see inventory and act",
  },
  {
    name: "Qualified demand",
    proposition: "Eligibility review before restricted access",
  },
  {
    name: "Configurable geography",
    proposition: "Regional rules applied by market",
  },
  {
    name: "Category governance",
    proposition: "Product-specific condition and safety evidence",
  },
  {
    name: "Evidence orientation",
    proposition: "Trace decisions and exceptions",
  },
  {
    name: "Three connected products",
    proposition: "Enterprise, Exchange and Network",
  },
  {
    name: "Seven-stage lifecycle",
    proposition: "One explanatory model",
  },
];

export default function DifferentiatorsProofGates() {
  return (
    <section
      id="differentiators-proof-gates"
      aria-labelledby="differentiators-proof-gates-heading"
      className={`${hanken} block md:hidden w-full border-t border-slate-100 bg-white`}
    >
      <div className="w-full px-5 py-9">
        <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
          DIFFERENTIATORS WITH PROOF GATES
        </p>

        <h2
          id="differentiators-proof-gates-heading"
          className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]"
        >
          What sets this design apart, and what is needed to say so.
        </h2>

        <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
          Each claim stays illustrative until the listed evidence exists. Rows without approved evidence are omitted at publication.
        </p>

        {/* 2-Column Comparison Table Card */}
        <div className="mt-6 overflow-hidden rounded-[16px] border border-slate-200/90 bg-white shadow-2xs">
          {/* Header Row */}
          <div className="grid grid-cols-2 gap-3 border-b border-slate-200/80 bg-[#fbfaf7] px-4 py-3 text-[9.5px] font-bold tracking-[0.12em] text-[#64748b] uppercase">
            <span>DIFFERENTIATOR</span>
            <span>PROPOSITION</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-100">
            {differentiators.map((row) => (
              <div key={row.name} className="grid grid-cols-2 gap-3 px-4 py-3.5 text-[12px] leading-snug">
                <span className="font-bold text-[#0c1e38]">{row.name}</span>
                <span className="text-[#556987]">{row.proposition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
