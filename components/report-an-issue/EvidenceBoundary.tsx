import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const rules = [
  {
    title: "Do report",
    description: "What happened, when and where.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Do report",
    description: "The market or route involved.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Do not send",
    description: "Passwords or payment details.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Do not send",
    description: "Private lists, prices or screenshots.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
  },
  {
    title: "Do not send",
    description: "Identity files or buyer identities.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="18" y1="8" x2="23" y2="13" />
        <line x1="23" y1="8" x2="18" y2="13" />
      </svg>
    ),
  },
];

export default function EvidenceBoundary() {
  return (
    <section aria-label="Evidence Boundary - Describe it. Do not attach it." className={`${hanken} w-full bg-[#071322]`}>
      {/* ========================================================
          DESKTOP VIEW (strictly preserved for desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 md:px-8 md:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[11.5px] font-bold tracking-[0.16em] text-[#d4a359] uppercase">
              EVIDENCE BOUNDARY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-4 text-[34px] lg:text-[40px] font-bold tracking-[-0.025em] text-white`}>
            Describe it. Do not
            <br />
            attach it.
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[#94a3b8]">
            Do not send identity files, payment details, credentials, private listings or confidential screenshots.
          </p>

          {/* 5 Cards Row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rules.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d1c31] p-4 transition-all duration-200 hover:border-white/20 hover:bg-[#10223b]"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#009b72]/20 text-[#009b72]">
                  {item.icon}
                </div>
                <div className="mt-4">
                  <h3 className={`${sora} text-[14.5px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#94a3b8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Wide Photo Showcase */}
          <div className="relative mt-8 h-[340px] lg:h-[400px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c31] shadow-xl">
            <Image
              src="/images/Report-an-Issue/r14.png"
              alt="Compliance specialist reviewing records on laptop in warehouse"
              fill
              className="object-cover"
              sizes="(max-width: 1400px) 100vw, 1380px"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly isolated to mobile screens)
         ======================================================== */}
      <div className="block md:hidden">
        <div className="px-5 py-10">
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.16em] text-[#d4a359] uppercase">
              EVIDENCE BOUNDARY
            </span>
          </div>

          {/* Heading & Subtitle */}
          <h2 className={`${sora} mt-2 text-[26px] font-bold leading-tight tracking-[-0.02em] text-white`}>
            Describe it. Do not attach it.
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#94a3b8]">
            Do not send identity files, payment details, credentials, private listings or confidential screenshots.
          </p>

          {/* 5 Stacked Mobile Cards */}
          <div className="mt-6 flex flex-col gap-3">
            {rules.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0d1c31] p-4 flex flex-col gap-2"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#009b72]/20 text-[#009b72]">
                  {item.icon}
                </div>
                <div>
                  <h3 className={`${sora} text-[14.5px] font-bold tracking-tight text-white`}>
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-[#94a3b8]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Showcase at bottom: r45.jpg */}
          <div className="relative mt-5 h-[190px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c31] shadow-xl">
            <Image
              src="/images/Report-an-Issue/r45.jpg"
              alt="Compliance specialist on laptop in warehouse"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
