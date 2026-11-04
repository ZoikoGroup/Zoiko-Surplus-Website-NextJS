import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const cards = [
  {
    id: "role-scoped",
    title: "Role-scoped access",
    description: "Data is visible only to roles with a legitimate, granted need.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: "no-public-exposure",
    title: "No public exposure",
    description: "Private records never appear on public pages, in search or in analytics.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    id: "minimum-disclosure",
    title: "Minimum disclosure",
    description: "Participants see the least detail their entitlement requires.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    id: "recorded-access",
    title: "Recorded access",
    description: "Who accessed what is governed and recorded, subject to the approved architecture.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
];

export default function PrivacyAndConfidentiality() {
  return (
    <section id="privacy-and-confidentiality" aria-labelledby="privacy-confidentiality-heading" className={`${hanken} w-full`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 pb-20 md:px-8 md:pt-16 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              PRIVACY &amp; CONFIDENTIALITY
            </span>
          </div>

          {/* Heading */}
          <h2
            id="privacy-confidentiality-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Need-to-know, by default.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Confidentiality is enforced by entitlement and minimum disclosure — not by obscurity.
          </p>

          {/* Large Visual */}
          <div className="relative mt-10 h-[300px] w-full overflow-hidden rounded-[20px] bg-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.04)] sm:h-[380px] lg:h-[430px]">
            <Image
              src="/images/solution-private-marketplaces/spm8.png"
              alt="Executive analyzing confidential private marketplace ledger records securely"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* 4 Cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#0c1e38] text-white">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-[#0f172a]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-[#556987]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-white px-5 py-12">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>08</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            PRIVACY &amp; CONFIDENTIALITY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Need-to-know, by default.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Confidentiality is enforced by entitlement and minimum disclosure — not by obscurity.
        </p>

        {/* 4 Cards Stacked */}
        <div className="mt-7 flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-[18px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.02)]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#0c1e38] text-white">
                {card.icon}
              </div>
              <h3 className="mt-3.5 text-[14.5px] font-bold text-[#0f172a]">
                {card.title}
              </h3>
              <p className="mt-1 text-[12px] leading-relaxed text-[#556987]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
