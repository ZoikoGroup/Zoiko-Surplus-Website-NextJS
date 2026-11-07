import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const securityPoints = [
  {
    title: "Owner-led sanitization",
    description: "data wiping is the owner's responsibility, evidenced where required.",
  },
  {
    title: "Activation / account locks",
    description: "lock status is assessed; locked devices aren't treated as clean.",
  },
  {
    title: "No identifiers shown",
    description: "serials, IMEIs and user information never appear publicly.",
  },
];

export default function InformationSecurity() {
  return (
    <section id="information-security" aria-labelledby="information-security-heading" className={`${hanken} w-full bg-[#0c1e38] text-white`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Visual Photo (ce8.png) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/consumer-electronics/ce8.png"
                  alt="Data-bearing storage device and laptop sanitization workflow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Copy & Checklist */}
            <div className="flex flex-col lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className={`${sora} text-[11px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                  INFORMATION SECURITY
                </span>
              </div>

              {/* Heading */}
              <h2
                id="information-security-heading"
                className="mt-3.5 text-[34px] font-extrabold leading-[1.14] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[44px]"
              >
                Data-bearing devices
                <br />
                carry an extra duty.
              </h2>

              {/* Subtitle */}
              <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-slate-300 sm:text-[16px]">
                Any device that can store data must be handled so that personal and business information is addressed before disposition. Responsibility for sanitization sits with the owner — it isn&apos;t assumed by a buyer.
              </p>

              {/* 3 Checklist Items */}
              <div className="mt-8 flex flex-col gap-4">
                {securityPoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#009b72"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1 shrink-0 text-[#009b72]"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div className="text-[13.5px] leading-relaxed">
                      <strong className="font-bold text-white">{point.title}</strong>
                      <span className="text-slate-300"> — {point.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated for mobile view)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="w-full px-4 py-8">
          <div className="rounded-[22px] bg-[#0c1e38] p-5 pt-8 pb-6 shadow-md border border-white/5">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
              <span className={`${sora} text-[10px] font-extrabold tracking-[0.16em] text-[#009b72] uppercase`}>
                INFORMATION SECURITY
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-[24px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white">
              Data-bearing devices carry an extra duty.
            </h2>

            {/* Subtitle */}
            <p className="mt-2.5 text-[13px] leading-relaxed text-slate-300">
              Any device that can store data must be handled so that personal and business information is addressed before disposition. Responsibility for sanitization sits with the owner — it isn&apos;t assumed by a buyer.
            </p>

            {/* 3 Checklist items */}
            <div className="mt-6 flex flex-col gap-3.5">
              {securityPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-2.5">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#009b72"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-[#009b72]"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div className="text-[12.5px] leading-relaxed">
                    <strong className="font-bold text-white">{point.title}</strong>
                    <span className="text-slate-300"> — {point.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="mt-5 text-[10px] leading-relaxed text-slate-400">
              * Zoiko does not guarantee data erasure or accept data-wiping liability by default — sanitization and evidence requirements are defined per route.
            </p>

            {/* Photo ce29.jpg */}
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-[14px] border border-white/10 shadow-xs">
              <Image
                src="/images/consumer-electronics/ce29.jpg"
                alt="Terminal data security code verification"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
