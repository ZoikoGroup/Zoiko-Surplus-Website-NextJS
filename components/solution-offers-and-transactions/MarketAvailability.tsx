import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type RegionItem = {
  id: string;
  title: string;
  description: string;
  badge: {
    text: string;
    bg: string;
    textCol: string;
    dotCol: string;
  };
};

const regions: RegionItem[] = [
  {
    id: "uk",
    title: "United Kingdom — Apparel & Footwear",
    description: "A proposed seller-private B2B pilot — proposed is not evidence of launch.",
    badge: {
      text: "Proposed pilot",
      bg: "bg-[#e6f9f2]",
      textCol: "text-[#00805e]",
      dotCol: "bg-[#009b72]",
    },
  },
  {
    id: "other",
    title: "Other regions",
    description: "Informational content is available; transactions are not implied.",
    badge: {
      text: "Informational",
      bg: "bg-[#f1f5f9]",
      textCol: "text-[#475569]",
      dotCol: "bg-[#64748b]",
    },
  },
  {
    id: "food",
    title: "Sealed ambient food",
    description: "Independent safety, traceability, shelf-life and local-law gate before any activity.",
    badge: {
      text: "Separate approval",
      bg: "bg-[#fcf3e6]",
      textCol: "text-[#926016]",
      dotCol: "bg-[#926016]",
    },
  },
];

export default function MarketAvailability() {
  return (
    <section aria-labelledby="market-availability-heading" className={`${hanken} w-full bg-[#fbf6ef] md:bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              MARKET AVAILABILITY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="market-availability-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Transaction features are activated,
            <br />
            not assumed.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Offers and transactions appear only where the market, category and service are active. A neutral &quot;not available&quot; state is shown otherwise.
          </p>

          {/* Main Grid: Image + 3 Cards */}
          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Tablet Transaction Completed Photo */}
            <div className="lg:col-span-6">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:h-[380px] lg:h-full lg:min-h-[420px]">
                <Image
                  src="/images/solution-offers-and-transactions/oat7.png"
                  alt="Digital invoice and transaction completed screen on tablet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: 3 Vertical Cards */}
            <div className="flex flex-col justify-between gap-4 lg:col-span-6">
              {regions.map((reg) => (
                <div
                  key={reg.id}
                  className="flex flex-col justify-between rounded-[20px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all hover:border-[#e2e8f0]"
                >
                  <div>
                    <h3 className="text-[15.5px] font-bold text-[#0f172a]">
                      {reg.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-[#556987]">
                      {reg.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.04em] ${reg.badge.bg} ${reg.badge.textCol}`}
                    >
                      <span className={`size-1.5 rounded-full ${reg.badge.dotCol}`} />
                      {reg.badge.text}
                    </span>
                  </div>
                </div>
              ))}
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
              The country/locale selector is informational only — it sets content and language, and does not activate transactions, grant eligibility or change any permission.
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
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>09</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            MARKET AVAILABILITY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Transaction features are activated, not assumed.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Offers and transactions appear only where the market, category and service are active. A neutral &quot;not available&quot; state is shown otherwise.
        </p>

        {/* World Map Photo */}
        <div className="relative mt-5 h-[175px] w-full overflow-hidden rounded-[16px] shadow-sm">
          <Image
            src="/images/solution-offers-and-transactions/oat14.jpg"
            alt="World regions and international market availability"
            fill
            className="object-cover"
          />
        </div>

        {/* 3 Single-Column Cards */}
        <div className="mt-4 flex flex-col gap-3">
          {regions.map((reg) => (
            <div
              key={reg.id}
              className="flex flex-col rounded-[16px] border border-[#e8edf2] bg-white p-4 shadow-sm"
            >
              <h3 className="text-[14px] font-bold text-[#0f172a]">
                {reg.title}
              </h3>
              <p className="mt-1 text-[11.5px] leading-[1.5] text-[#556987]">
                {reg.description}
              </p>

              <div className="mt-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-[0.04em] ${reg.badge.bg} ${reg.badge.textCol}`}
                >
                  <span className={`size-1.5 rounded-full ${reg.badge.dotCol}`} />
                  {reg.badge.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Bar */}
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
            The country/locale selector is informational only — it sets content and language, and does not activate transactions, grant eligibility or change any permission.
          </p>
        </div>
      </div>
    </section>
  );
}
