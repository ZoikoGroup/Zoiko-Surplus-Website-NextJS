import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function FinalBanner() {
  return (
    <section aria-label="Qualified interest to documented outcome" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-4 pb-28">
          <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden rounded-[24px] bg-[#0c1e38] px-6 py-16 shadow-[0_12px_40px_rgba(10,25,50,0.18)] sm:min-h-[480px] sm:px-12 lg:min-h-[500px]">
            {/* Background image of business team */}
            <Image
              src="/images/solution-offers-and-transactions/oat9.png"
              alt="Enterprise team collaborating on documented transaction outcome"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="pointer-events-none object-cover object-center"
            />

            {/* Deep atmospheric overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,27,53,0.78)_0%,rgba(10,27,53,0.88)_100%)]"
            />

            {/* Centered Content */}
            <div className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center text-center">
              <h2 className="text-[36px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[52px]">
                From qualified interest
                <br />
                to documented outcome.
              </h2>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
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
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/50 bg-white/10 px-6 text-[14.5px] font-semibold text-white backdrop-blur-xs transition-colors hover:border-white/80 hover:bg-white/20"
                >
                  Apply to Become a Buyer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-6 pb-12">
        <div className="overflow-hidden rounded-[20px] bg-[#0c1e38] shadow-lg">
          {/* Top Navy Content Area */}
          <div className="px-5 pt-8 pb-7 text-white">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-[1.5px] w-5 bg-[#009b72]" />
              <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
                GET STARTED
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-[23px] font-extrabold leading-[1.2] tracking-[-0.02em] text-white">
              From qualified interest to documented outcome.
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-[12px] leading-[1.55] text-white/80">
              Build a clearer path from qualified interest to a documented outcome — subject to seller approvals and applicable terms. No transaction, price or outcome is promised here.
            </p>

            {/* Stacked Action Buttons */}
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
                className="flex h-[40px] items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Apply to Become a Buyer
              </a>
            </div>
          </div>

          {/* Bottom Retail Buyer Image */}
          <div className="relative h-[200px] w-full">
            <Image
              src="/images/solution-offers-and-transactions/oat3.jpg"
              alt="Verified buyer completing marketplace transaction at counter"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
