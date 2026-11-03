const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const sellerRules = [
  "Set price, reserve, quantity and term rules per audience.",
  "Decide which offers to review, counter or accept.",
  "Change or withdraw rules; nothing proceeds without approval.",
];

const buyerPathway = [
  "Make offers only within opportunities you're entitled to.",
  "See the terms and conditions that apply before offering.",
  "An offer is a proposal — it does not guarantee acceptance.",
];

export default function SellerRulesBuyerPathway() {
  return (
    <section aria-labelledby="seller-rules-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              SELLER RULES &amp; BUYER PATHWAY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="seller-rules-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Sellers set the rules. Buyers work
            <br />
            within them.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Two sides, one governed boundary. The seller defines the commercial frame; the buyer acts inside it.
          </p>

          {/* 2-Card Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left Card: Seller-Controlled Rules (Dark Navy) */}
            <div className="flex flex-col justify-between rounded-[22px] bg-[#0c1e38] p-7 text-white shadow-lg sm:p-9">
              <div>
                {/* Card Tag */}
                <div className="flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                  <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
                    SELLER-CONTROLLED RULES
                  </span>
                </div>

                <h3 className="mt-3 text-[19px] font-bold text-white sm:text-[21px]">
                  What a seller sets
                </h3>

                {/* Items */}
                <ul className="mt-6 flex flex-col gap-3.5">
                  {sellerRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#009b72"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[13px] leading-[1.55] text-white/85 sm:text-[13.5px]">
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Card: Buyer Offer Pathway (Light White Card) */}
            <div className="flex flex-col justify-between rounded-[22px] border border-[#eef2f6] bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)] sm:p-9">
              <div>
                {/* Card Tag */}
                <div className="flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
                    BUYER OFFER PATHWAY
                  </span>
                </div>

                <h3 className="mt-3 text-[19px] font-bold text-[#0f172a] sm:text-[21px]">
                  What a buyer can do
                </h3>

                {/* Items */}
                <ul className="mt-6 flex flex-col gap-3.5">
                  {buyerPathway.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#009b72"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[13px] leading-[1.55] text-[#556987] sm:text-[13.5px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            SELLER RULES &amp; BUYER PATHWAY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Sellers set the rules.
          <br />
          Buyers work within them.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Two sides, one governed boundary. The seller defines the commercial frame; the buyer acts inside it.
        </p>

        {/* Stacked 2 Cards */}
        <div className="mt-6 flex flex-col gap-3.5">
          {/* Top: Seller-Controlled Rules Card */}
          <div className="rounded-[20px] bg-[#0c1e38] p-5 text-white shadow-md">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="21" x2="4" y2="14" />
                <line x1="4" y1="10" x2="4" y2="3" />
                <line x1="12" y1="21" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="3" />
                <line x1="20" y1="21" x2="20" y2="16" />
                <line x1="20" y1="12" x2="20" y2="3" />
                <line x1="1" y1="14" x2="7" y2="14" />
                <line x1="9" y1="8" x2="15" y2="8" />
                <line x1="17" y1="16" x2="23" y2="16" />
              </svg>
              <span className={`${sora} text-[9px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
                SELLER-CONTROLLED RULES
              </span>
            </div>

            <h3 className="mt-2 text-[16px] font-bold text-white">
              What a seller sets
            </h3>

            <ul className="mt-3.5 flex flex-col gap-2.5">
              {sellerRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#009b72"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[12px] leading-[1.5] text-white/85">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom: Buyer Offer Pathway Card */}
          <div className="rounded-[20px] border border-[#e8edf2] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <span className={`${sora} text-[9px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
                BUYER OFFER PATHWAY
              </span>
            </div>

            <h3 className="mt-2 text-[16px] font-bold text-[#0f172a]">
              What a buyer can do
            </h3>

            <ul className="mt-3.5 flex flex-col gap-2.5">
              {buyerPathway.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#009b72"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[12px] leading-[1.5] text-[#556987]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
