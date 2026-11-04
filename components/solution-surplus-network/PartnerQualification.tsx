const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type StepCard = {
  num: number;
  title: string;
  description: string;
};

const steps: StepCard[] = [
  {
    num: 1,
    title: "Apply",
    description: "A prospective partner applies, describing its services, markets and credentials.",
  },
  {
    num: 2,
    title: "Verify",
    description: "Identity, licensing, insurance and capability are checked for the services offered.",
  },
  {
    num: 3,
    title: "Onboard",
    description: "Approved partners are contracted, scoped and configured for permitted routes.",
  },
  {
    num: 4,
    title: "Monitor",
    description: "Performance, compliance and evidence are reviewed on an ongoing basis.",
  },
];

export default function PartnerQualification() {
  return (
    <section aria-labelledby="partner-qualification-heading" className={`${hanken} w-full bg-[#f5f7fa] md:bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-10 pb-24">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PARTNER QUALIFICATION
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="partner-qualification-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            How partners are qualified.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Only verified, contracted partners can perform a coordinated service and participation can be reviewed or withdrawn.
          </p>

          {/* 2x2 Step Cards */}
          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
            {steps.map((st) => (
              <div
                key={st.num}
                className="flex items-start gap-4 rounded-[16px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
              >
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0c1e38] text-[12px] font-bold text-white">
                  {st.num}
                </div>
                <div>
                  <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                    {st.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-[1.55] text-[#556987]">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button & Disclaimer */}
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#926016] px-6 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
            >
              Explore Partner Participation
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
            <p className="mt-3 flex items-center gap-1.5 text-[12px] text-[#556987]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-gray-400"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Applying does not guarantee approval, onboarding or any volume of work.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-12">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>11</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            PARTNER QUALIFICATION
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          How partners are qualified.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Only verified, contracted partners can perform a coordinated service — and participation can be reviewed or withdrawn.
        </p>

        {/* Single-column Step Cards */}
        <div className="mt-5 flex flex-col gap-2.5">
          {steps.map((st) => (
            <div
              key={st.num}
              className="flex items-start gap-3 rounded-[14px] border border-[#e8edf2] bg-white p-3.5 shadow-sm"
            >
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#0c1e38] text-[12px] font-bold text-white">
                {st.num}
              </div>
              <div className="flex-1">
                <h3 className="text-[13.5px] font-bold text-[#0f172a]">
                  {st.title}
                </h3>
                <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#556987]">
                  {st.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button & Footnote */}
        <div className="mt-5">
          <a
            href="#"
            className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#926016] px-5 text-[12.5px] font-semibold text-white shadow-sm transition-colors hover:bg-[#a66e1b]"
          >
            Explore Partner Participation
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
          <p className="mt-2.5 flex items-start gap-1.5 text-[10.5px] leading-snug text-[#556987]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 shrink-0 text-gray-400"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            Applying does not guarantee approval, onboarding or any volume of work.
          </p>
        </div>
      </div>
    </section>
  );
}
