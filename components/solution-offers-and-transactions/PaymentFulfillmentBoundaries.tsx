const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const paymentPoints = [
  "Authorized payment providers handle processing where enabled.",
  "Fees, taxes and settlement terms vary by arrangement and jurisdiction.",
  "Zoiko does not claim escrow or custody of funds by default.",
];

const fulfillmentPoints = [
  "Collection, transport and handover via separately contracted partners.",
  "Title and risk transfer are defined in the applicable agreement.",
  "Zoiko does not operate warehouses or carrier fleets.",
];

export default function PaymentFulfillmentBoundaries() {
  return (
    <section aria-labelledby="payment-fulfillment-heading" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PAYMENT &amp; FULFILLMENT BOUNDARIES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="payment-fulfillment-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Money and movement sit with
            <br />
            authorized parties.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Settlement and fulfillment are performed by contracted providers — confirm the exact terms before any commitment.
          </p>

          {/* 2-Card Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Card 1: Payment & Settlement */}
            <div className="flex flex-col justify-between rounded-[22px] border border-[#eef2f6] bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)] sm:p-8">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#fbf2e3]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="3" x2="12" y2="21" />
                      <path d="M5 6h14" />
                      <path d="M5 6l-2 5h6l-2-5" />
                      <path d="M19 6l-2 5h6l-2-5" />
                      <path d="M4 21h16" />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0f172a]">
                    Payment &amp; settlement
                  </h3>
                </div>

                <p className="mt-3 text-[13px] leading-[1.6] text-[#556987]">
                  Where a transaction settles, it runs through authorized providers under the applicable arrangement.
                </p>

                {/* Bullet Points */}
                <ul className="mt-5 flex flex-col gap-2.5">
                  {paymentPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[12.5px] leading-[1.55] text-[#556987]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#926016"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Fulfilment & Handover */}
            <div className="flex flex-col justify-between rounded-[22px] border border-[#eef2f6] bg-white p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)] sm:p-8">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#fbf2e3]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0f172a]">
                    Fulfilment &amp; handover
                  </h3>
                </div>

                <p className="mt-3 text-[13px] leading-[1.6] text-[#556987]">
                  Physical handover is coordinated with approved external partners, where a route needs movement.
                </p>

                {/* Bullet Points */}
                <ul className="mt-5 flex flex-col gap-2.5">
                  {fulfillmentPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[12.5px] leading-[1.55] text-[#556987]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#926016"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer Callout Bar */}
          <div className="mt-6 flex items-start gap-2.5 rounded-[16px] border border-[#f5ebd7] bg-[#fdfaf6] px-5 py-3.5 sm:items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#926016"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <p className="text-[12px] leading-relaxed text-[#7c6950]">
              Payment processing, fees, taxes, title and settlement terms vary by approved arrangement and jurisdiction — confirm before commitment.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            PAYMENT &amp; FULFILLMENT BOUNDARIES
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Money and movement sit with authorized parties.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Settlement and fulfillment are performed by contracted providers — confirm the exact terms before any commitment.
        </p>

        {/* Stacked 2 Cards */}
        <div className="mt-6 flex flex-col gap-3.5">
          {/* Card 1: Payment & Settlement */}
          <div className="rounded-[18px] border border-[#e8edf2] bg-white p-5 shadow-sm">
            <div className="flex size-9 items-center justify-center rounded-[10px] bg-[#fbf2e3]">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="3" x2="12" y2="21" />
                <path d="M5 6h14" />
                <path d="M5 6l-2 5h6l-2-5" />
                <path d="M19 6l-2 5h6l-2-5" />
                <path d="M4 21h16" />
              </svg>
            </div>

            <h3 className="mt-3 text-[15px] font-bold text-[#0f172a]">
              Payment &amp; settlement
            </h3>

            <p className="mt-1 text-[12px] leading-[1.5] text-[#556987]">
              Where a transaction settles, it runs through authorized providers under the applicable arrangement.
            </p>

            <ul className="mt-3.5 flex flex-col gap-2">
              {paymentPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11.5px] leading-[1.5] text-[#556987]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#926016"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Fulfilment & Handover */}
          <div className="rounded-[18px] border border-[#e8edf2] bg-white p-5 shadow-sm">
            <div className="flex size-9 items-center justify-center rounded-[10px] bg-[#fbf2e3]">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#926016" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>

            <h3 className="mt-3 text-[15px] font-bold text-[#0f172a]">
              Fulfillment &amp; handover
            </h3>

            <p className="mt-1 text-[12px] leading-[1.5] text-[#556987]">
              Physical handover is coordinated with approved external partners, where a route needs movement.
            </p>

            <ul className="mt-3.5 flex flex-col gap-2">
              {fulfillmentPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-[11.5px] leading-[1.5] text-[#556987]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#926016"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-4 flex items-start gap-2 rounded-[14px] border border-[#f5ebd7] bg-[#fdfaf6] p-3 text-[11px] leading-relaxed text-[#7c6950]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#926016"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 shrink-0"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p>
            Payment processing, fees, taxes, title and settlement terms vary by approved arrangement and jurisdiction — confirm before commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
