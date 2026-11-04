const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type Stage = {
  id: string;
  title: string;
  description: string;
};

const stages: Stage[] = [
  {
    id: "application",
    title: "Application",
    description: "An organization applies, describing its categories, markets and role.",
  },
  {
    id: "checks",
    title: "Checks",
    description: "Identity, role and eligibility checks relevant to what was requested.",
  },
  {
    id: "invitation",
    title: "Invitation",
    description: "Where a seller approves the profile, the buyer is invited into a specific audience.",
  },
  {
    id: "entitlement",
    title: "Entitlement",
    description: "The buyer is entitled to a defined private market, at a defined visibility tier.",
  },
  {
    id: "access",
    title: "Access",
    description: "Only when the market is active do entitled opportunities become visible.",
  },
];

export default function EligibilityStages() {
  return (
    <section id="eligibility-stages" aria-labelledby="eligibility-stages-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              ELIGIBILITY STAGES
            </span>
          </div>

          {/* Heading */}
          <h2
            id="eligibility-stages-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Application → checks →invitation
            <br />
            → entitlement → access.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Access is earned in stages. Reaching one stage never guarantees the next.
          </p>

          {/* Vertical Timeline */}
          <div className="relative mt-12 max-w-[700px]">
            {/* Vertical Track Line */}
            <div
              aria-hidden="true"
              className="absolute top-3 bottom-6 left-[9px] w-[2px] bg-[#e2e8f0]"
            />

            <div className="flex flex-col gap-8">
              {stages.map((stage) => (
                <div key={stage.id} className="relative flex items-start gap-5">
                  {/* Solid Navy Dot */}
                  <div className="relative z-10 mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0c1e38] ring-4 ring-white" />

                  {/* Content */}
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0f172a]">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-[1.6] text-[#556987]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#fcf8f2] px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>03</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            ELIGIBILITY STAGES
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          Application → checks →
          <br />
          invitation → entitlement
          <br />
          → access.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Access is earned in stages. Reaching one stage never guarantees the next.
        </p>

        {/* Vertical Timeline */}
        <div className="relative mt-8">
          {/* Vertical line connecting steps */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-6 left-[9px] w-[2px] bg-[#cbd5e1]"
          />

          <div className="flex flex-col gap-7">
            {stages.map((stage) => (
              <div key={stage.id} className="relative flex items-start gap-4">
                {/* Dot */}
                <div className="relative z-10 mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0c1e38] ring-4 ring-[#fcf8f2]" />

                {/* Text */}
                <div>
                  <h3 className="text-[15px] font-bold text-[#0f172a]">
                    {stage.title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#556987]">
                    {stage.description}
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
