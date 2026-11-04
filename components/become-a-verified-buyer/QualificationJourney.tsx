import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const steps = [
  {
    id: "apply",
    title: "Apply",
    tag: "YOU",
    description: "Submit the application with your organization and category details.",
  },
  {
    id: "review",
    title: "Review",
    tag: "REVIEWER",
    description: "A reviewer assesses the application for completeness and eligibility.",
  },
  {
    id: "verify-kyb",
    title: "Verify (KYB)",
    tag: "REVIEWER",
    description: "Identity, role and business status are verified relevant to your request.",
  },
  {
    id: "seller-authorization",
    title: "Seller authorization",
    tag: "SELLER",
    description: "A seller authorizes your profile for a specific private market — a separate gate.",
  },
  {
    id: "access",
    title: "Access",
    tag: "SYSTEM",
    description: "Only then, and only where the market is active, do approved opportunities appear.",
  },
];

export default function QualificationJourney() {
  return (
    <section id="qualification-journey" aria-labelledby="journey-heading" className={`${hanken} w-full bg-white order-8 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-12 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              QUALIFICATION JOURNEY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="journey-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Apply → Review → Verify → Seller
            <br />
            authorization → Access.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Decision owners change at each stage, and verification is separate from seller authorization. Reaching one stage never guarantees the next, and there is no stated turnaround.
          </p>

          {/* 2-Column Layout */}
          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left: Stepper Timeline */}
            <div className="relative lg:col-span-6">
              {/* Vertical connector line */}
              <div
                aria-hidden="true"
                className="absolute top-3 bottom-6 left-[9px] w-[2px] bg-[#e2e8f0]"
              />

              <div className="flex flex-col gap-7">
                {steps.map((step) => (
                  <div key={step.id} className="relative flex items-start gap-4">
                    {/* Node Dot */}
                    <div className="relative z-10 mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0c1e38] ring-4 ring-white" />

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-[15.5px] font-bold text-[#0f172a]">
                          {step.title}
                        </h3>
                        <span className="rounded-full bg-[#d5f5eb] px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-wider text-[#007f5d]">
                          {step.tag}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] leading-[1.6] text-[#556987]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_8px_28px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/become-a-verified-buyer/vb5.png"
                  alt="Enterprise buyer completing business verification details on laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            QUALIFICATION JOURNEY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Apply → Review → Verify → Seller authorization → Access.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Decision owners change at each stage, and verification is separate from seller authorization. Reaching one stage never guarantees the next, and there is no stated turnaround.
        </p>

        {/* Stepper Timeline */}
        <div className="relative mt-8">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute top-2.5 bottom-6 left-[7px] w-[2px] bg-[#e2e8f0]"
          />

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <div key={`m-step-${step.id}`} className="relative flex items-start gap-3.5">
                {/* Node dot */}
                <div className="relative z-10 mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#0c1e38] ring-4 ring-white" />

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                      {step.title}
                    </h3>
                    <span className="rounded-full bg-[#d5f5eb] px-2 py-0.5 text-[9.5px] font-extrabold tracking-wider text-[#007f5d]">
                      {step.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
