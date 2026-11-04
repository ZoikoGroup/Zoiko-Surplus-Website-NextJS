import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type CommitmentItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const items: CommitmentItem[] = [
  {
    id: "explicit",
    title: "Explicit acceptance",
    description:
      "A transaction forms only on explicit, mutual acceptance within the workflow — never automatically.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    id: "recorded",
    title: "Agreed terms recorded",
    description:
      "The accepted terms, parties and conditions are captured as the basis of the commitment.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="8" y2="15" />
      </svg>
    ),
  },
  {
    id: "authority",
    title: "Authority required",
    description:
      "Acceptance requires the relevant seller authority — a page interaction never commits either side.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 14 14" />
      </svg>
    ),
  },
  {
    id: "conditions",
    title: "Conditions & withdrawal",
    description:
      "Where conditions aren't met, defined withdrawal and exception processes apply.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
];

export default function AcceptanceCommitment() {
  return (
    <section aria-labelledby="acceptance-commitment-heading" className={`${hanken} w-full bg-[#fbf6ef] md:bg-white`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-8 pt-16 pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Photo */}
            <div className="lg:col-span-6">
              <div className="relative h-[340px] w-full overflow-hidden rounded-[24px] shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:h-[400px] lg:h-[460px]">
                <Image
                  src="/images/solution-offers-and-transactions/oat5.png"
                  alt="Contract agreement signature and handshake between authorized parties"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Heading and 4 Items */}
            <div className="lg:col-span-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>04</span>
                <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
                <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
                  ACCEPTANCE &amp; COMMITMENT
                </span>
              </div>

              {/* Heading */}
              <h2
                id="acceptance-commitment-heading"
                className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
              >
                A commitment forms
                <br />
                only on explicit
                <br />
                acceptance.
              </h2>

              {/* Subtitle */}
              <p className="mt-3 text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
                Nothing is binding until both sides, with the right authority, accept within the governed workflow.
              </p>

              {/* 4 Items Stack */}
              <div className="mt-8 flex flex-col gap-4 sm:gap-5">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d5f5eb]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[14.5px] font-bold text-[#0f172a]">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12.5px] leading-[1.55] text-[#556987]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (visible only on mobile)
         ======================================================== */}
      <div className="block md:hidden px-4 pt-8 pb-10">
        {/* Top Server Racks Photo */}
        <div className="relative h-[190px] w-full overflow-hidden rounded-[20px] shadow-sm">
          <Image
            src="/images/solution-offers-and-transactions/oat13.jpg"
            alt="Data operations and IT server infrastructure"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Eyebrow */}
        <div className="mt-6 flex items-center gap-2">
          <span className={`${sora} text-[11px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[9.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            ACCEPTANCE &amp; COMMITMENT
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-2.5 text-[24px] font-extrabold leading-[1.2] tracking-[-0.02em] text-[#0f172a]">
          A commitment forms only on explicit acceptance.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-[12.5px] leading-[1.55] text-[#556987]">
          Nothing is binding until both sides, with the right authority, accept within the governed workflow.
        </p>

        {/* 4 Items Stack */}
        <div className="mt-6 flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-start gap-3.5">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-[8px] bg-[#d5f5eb]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[11.5px] leading-[1.5] text-[#556987]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
