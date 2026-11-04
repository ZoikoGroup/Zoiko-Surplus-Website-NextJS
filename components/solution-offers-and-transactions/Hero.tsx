import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const lifecycleSteps = [
  {
    num: 1,
    title: "Opportunity viewed",
    subtitle: "Entitled, in an active market",
    status: "DONE",
    done: true,
  },
  {
    num: 2,
    title: "Offer made",
    subtitle: "Within seller rules",
    status: "DONE",
    done: true,
  },
  {
    num: 3,
    title: "Under review",
    subtitle: "Seller assessing terms",
    status: "CURRENT",
    current: true,
  },
  {
    num: 4,
    title: "Acceptance",
    subtitle: "Mutual commitment",
    status: "PENDING",
    pending: true,
  },
  {
    num: 5,
    title: "Settlement & fulfillment",
    subtitle: "Via authorized providers",
    status: "PENDING",
    pending: true,
  },
];

export default function Hero() {
  return (
    <section className={`${hanken} w-full overflow-hidden bg-gradient-to-b from-white via-[#fcfaf7] to-[#faf5ee]`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block pt-16 pb-24">
        <div className="mx-auto w-full max-w-[1380px] px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-6 xl:col-span-7">
              <h1 className="text-[44px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0f172a] sm:text-[54px] lg:text-[62px]">
                Governed offers.
                <br />
                Clear{" "}
                <span className="text-[#009b72]">
                  transaction
                  <br />
                  steps.
                </span>
              </h1>

              <p className="mt-6 max-w-[580px] text-[15.5px] leading-[1.6] text-[#556987] sm:text-[16.5px]">
                Understand how eligible businesses may make, review and complete offers within seller-approved surplus markets. Participation and transaction features depend on verification, permissions and local activation.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[14.5px] font-semibold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
                >
                  Request Enterprise Demo
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#0f172a] bg-white px-6 text-[14.5px] font-bold text-[#0f172a] shadow-xs transition-colors hover:bg-slate-50"
                >
                  Apply to Become a Buyer
                </a>
              </div>

              {/* Divider */}
              <div className="mt-8 h-[1px] w-full max-w-[560px] bg-[#e8edf2]" />

              {/* Link & Disclaimer */}
              <div className="mt-5 flex flex-col gap-2.5">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#009b72] transition-colors hover:text-[#00805e]"
                >
                  Explore Private Marketplaces
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <p className="max-w-[520px] text-[11px] leading-relaxed text-[#7e8f9f]">
                  * This page describes a proposed controlled exchange workflow — it does not list goods or authorize a transaction. Access is subject to eligibility and local availability.
                </p>
              </div>
            </div>

            {/* Right Column: Overlapping Images */}
            <div className="relative flex justify-center lg:col-span-6 xl:col-span-5">
              <div className="relative w-full max-w-[490px]">
                {/* Main Photo (Contract Handshake) */}
                <div className="relative h-[330px] w-full overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:h-[370px]">
                  <Image
                    src="/images/solution-offers-and-transactions/oat1.png"
                    alt="Business parties shaking hands over governed contract agreement"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />

                  {/* Floating NOTE Badge */}
                  <div className="absolute top-4 right-4 z-10 max-w-[190px] rounded-[14px] border border-white/80 bg-white/95 p-3.5 shadow-lg backdrop-blur-xs">
                    <div className="flex items-center gap-1.5">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#926016"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span className={`${sora} text-[10px] font-bold tracking-[0.12em] text-[#926016] uppercase`}>
                        NOTE
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] leading-[1.4] font-medium text-[#0f172a]">
                      A submitted record is not an approval.
                    </p>
                  </div>
                </div>

                {/* Overlapping Small Photo (Payment approval on smartphone) */}
                <div className="absolute -bottom-7 -left-5 z-20 h-[190px] w-[170px] overflow-hidden rounded-[20px] border-4 border-white shadow-[0_16px_36px_rgba(15,23,42,0.16)] sm:-bottom-8 sm:-left-7 sm:h-[210px] sm:w-[190px]">
                  <Image
                    src="/images/solution-offers-and-transactions/oat10.jpg"
                    alt="Payment approval and credit card processing"
                    fill
                    sizes="200px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-4 pb-0">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#64748b]">
          <span>Home</span>
          <span>/</span>
          <span>Solutions</span>
          <span>/</span>
          <span>Surplus Exchange</span>
          <span>/</span>
          <span className="font-semibold text-[#0f172a]">Offers &amp; Transactions</span>
        </div>

        {/* Eyebrow Label */}
        <div className="mt-4 flex items-center gap-2">
          <span aria-hidden="true" className="h-[1.5px] w-5 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            SURPLUS EXCHANGE · OFFERS &amp; TRANSACTIONS
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-3 text-[28px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#0f172a]">
          Governed offers.
          <br />
          Clear{" "}
          <span className="text-[#009b72]">
            transaction
            <br />
            steps.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[12.5px] leading-[1.55] text-[#556987]">
          Understand how eligible businesses may make, review and complete offers within seller-approved surplus markets. Participation and transaction features depend on verification, permissions and local activation.
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-col gap-2.5">
          <a
            href="#"
            className="flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#926016] px-5 text-[12.5px] font-semibold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
          >
            Request Enterprise Demo
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#"
            className="flex h-[40px] items-center justify-center rounded-full border border-[#0f172a] bg-white px-5 text-[12px] font-bold text-[#0f172a] shadow-xs"
          >
            Apply to Become a Buyer
          </a>
        </div>

        {/* Link & Disclaimer */}
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[12.5px] font-bold text-[#009b72]"
          >
            Explore Private Marketplaces
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <p className="mt-2 text-[10px] leading-relaxed text-[#7e8f9f]">
            * This page describes a proposed controlled exchange workflow — it does not list goods or authorize a transaction. Access is subject to eligibility and local availability.
          </p>
        </div>

        {/* Offer — Lifecycle Card */}
        <div className="mt-6 overflow-hidden rounded-[20px] border border-[#e8edf2] bg-white shadow-md">
          {/* Card Dark Header */}
          <div className="flex items-center justify-between bg-[#0c1e38] px-4 py-3 text-white">
            <span className="text-[12.5px] font-bold text-white">
              Offer — Lifecycle
            </span>
            <span className="flex items-center gap-1 text-[9px] font-bold tracking-[0.1em] text-[#009b72] uppercase">
              <span className="size-1.5 rounded-full bg-[#009b72]" />
              ILLUSTRATIVE
            </span>
          </div>

          {/* 5 Steps */}
          <div className="divide-y divide-[#f1f5f9] px-4 py-2">
            {lifecycleSteps.map((st) => (
              <div key={st.num} className="flex items-center justify-between py-2.5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                      st.done || st.current
                        ? "bg-[#d5f5eb] text-[#009b72]"
                        : "bg-[#f1f5f9] text-[#94a3b8]"
                    }`}
                  >
                    {st.num}
                  </div>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-[#0f172a]">
                      {st.title}
                    </h4>
                    <p className="text-[10.5px] text-[#556987]">
                      {st.subtitle}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[9.5px] font-extrabold tracking-[0.06em] uppercase ${
                    st.done || st.current ? "text-[#009b72]" : "text-[#94a3b8]"
                  }`}
                >
                  {st.status}
                </span>
              </div>
            ))}
          </div>

          {/* Card Footer Warning */}
          <div className="flex items-center gap-2 border-t border-[#f1f5f9] bg-[#fdfaf6] px-4 py-2.5 text-[10px] text-[#8c7a65]">
            <svg
              width="12"
              height="12"
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
            <span>Illustrative states only — no live lot, price or counterparty is shown.</span>
          </div>
        </div>

        {/* Sub-nav horizontal pill strip */}
        <div className="mt-6 -mx-4 border-y border-[#e8edf2] bg-white px-4 py-3">
          <div className="flex items-center gap-6 overflow-x-auto text-[12px] font-semibold text-[#556987] whitespace-nowrap scrollbar-none">
            <span className="font-bold text-[#0f172a]">What an offer is</span>
            <span>Who participates</span>
            <span>Lifecycle</span>
            <span>Seller rules</span>
          </div>
        </div>
      </div>
    </section>
  );
}
