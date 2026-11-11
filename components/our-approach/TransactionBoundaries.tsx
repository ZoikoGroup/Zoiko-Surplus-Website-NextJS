const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function TransactionBoundaries() {
  return (
    <section
      id="transaction-boundaries"
      aria-labelledby="transaction-boundaries-heading"
      className={`${hanken} block md:hidden w-full bg-white`}
    >
      <div className="w-full px-5 py-9">
        <p className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#926016] uppercase`}>
          TRANSACTION AND COMMERCIAL BOUNDARIES
        </p>

        <h2
          id="transaction-boundaries-heading"
          className="mt-2.5 text-[24px] font-extrabold leading-[1.16] tracking-[-0.025em] text-[#0c1e38]"
        >
          Offer, payment, execution and disputes stay distinct.
        </h2>

        <p className="mt-2.5 text-[13px] leading-relaxed text-[#556987]">
          Zoiko Surplus provides orchestration, governance and exchange infrastructure.
        </p>

        {/* Card 1: What Zoiko Surplus is not, by default */}
        <div className="mt-6 rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs">
          <h3 className="text-[16px] font-extrabold leading-snug text-[#0c1e38]">
            What Zoiko Surplus is not, by default
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
              <svg
                width="14"
                height="14"
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
              <span>
                <strong className="font-bold text-[#0c1e38]">An owner</strong> with stock possession or inventory title
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
              <svg
                width="14"
                height="14"
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
              <span>
                <strong className="font-bold text-[#0c1e38]">A seller or operator</strong> of the contracting seller, a warehouse operator or a logistics carrier
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
              <svg
                width="14"
                height="14"
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
              <span>
                <strong className="font-bold text-[#0c1e38]">A financial party</strong> as regulated payment intermediary unless stated
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: How roles are set */}
        <div className="mt-4 rounded-[16px] border border-slate-200/90 bg-white p-5 shadow-2xs">
          <h3 className="text-[16px] font-extrabold leading-snug text-[#0c1e38]">
            How roles are set
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
              <svg
                width="14"
                height="14"
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
              <span>
                Terms and participating legal entities are identified in the applicable agreement
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
              <svg
                width="14"
                height="14"
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
              <span>
                Payment, logistics and other services may depend on third parties and vary by market
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-[#556987]">
              <svg
                width="14"
                height="14"
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
              <span>The terms come from contract pages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
