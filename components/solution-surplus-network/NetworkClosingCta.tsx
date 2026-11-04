import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

export default function NetworkClosingCta() {
  return (
    <section aria-label="Closing summary" className={`${hanken} w-full bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-4 pb-28">
          <div className="grid min-h-[420px] grid-cols-1 overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(10,25,50,0.14)] lg:grid-cols-12">
            {/* Left Navy Column */}
            <div className="flex flex-col justify-center bg-[#0c1f38] p-8 sm:p-12 lg:col-span-6 lg:p-14">
              <h2 className="text-[34px] font-extrabold leading-[1.12] tracking-[-0.02em] text-white sm:text-[40px]">
                Zoiko coordinates.
                <br />
                Partners perform.
                <br />
                Sellers decide.
              </h2>

              <p className="mt-4 max-w-[460px] text-[14.5px] leading-[1.6] text-white/80 sm:text-[15.5px]">
                No owned goods, warehouses or fleets — just governed coordination of authorized services, with evidence at every applicable step.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
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
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 text-[14.5px] font-semibold text-white backdrop-blur-xs transition-colors hover:border-white/70 hover:bg-white/10"
                >
                  How It Works
                </a>
              </div>
            </div>

            {/* Right Image Column (Forklifts in warehouse) */}
            <div className="relative min-h-[280px] w-full bg-slate-900 lg:col-span-6 lg:min-h-full">
              <Image
                src="/images/solution-surplus-network/sn9.png"
                alt="Industrial warehouse with automated forklifts and racked surplus inventory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-6 pb-10">
        <div className="relative overflow-hidden rounded-[20px] bg-[#0c1f38] shadow-lg">
          {/* Top Warehouse Image Banner with smooth gradient to navy */}
          <div className="relative h-[160px] w-full">
            <Image
              src="/images/solution-surplus-network/sn19.jpg"
              alt="Industrial warehouse with automated forklifts"
              fill
              className="object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/20 via-[#0c1f38]/60 to-[#0c1f38]" />
          </div>

          {/* Text & Action Controls */}
          <div className="relative -mt-10 px-5 pb-7 pt-0 text-white">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-[1.5px] w-5 bg-[#009b72]" />
              <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
                COORDINATED, NOT OPERATED
              </span>
            </div>

            <h2 className="mt-2.5 text-[23px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
              Zoiko coordinates.
              <br />
              Partners perform.
              <br />
              Sellers decide.
            </h2>

            <p className="mt-3 text-[12px] leading-[1.55] text-white/80">
              No owned goods, warehouses or fleets — just governed coordination of authorized services, with evidence at every applicable step.
            </p>

            {/* Stacked CTAs */}
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
                How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
