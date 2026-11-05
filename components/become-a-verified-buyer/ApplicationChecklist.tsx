import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

const checklist = [
  {
    id: "entity-details",
    title: "Entity details",
    description: "Legal name and registered country.",
    isOptional: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <line x1="8" y1="6" x2="10" y2="6" />
        <line x1="14" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="14" y1="10" x2="16" y2="10" />
      </svg>
    ),
  },
  {
    id: "representative",
    title: "Representative",
    description: "Name, role and authority to apply.",
    isOptional: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "categories-markets",
    title: "Categories & markets",
    description: "The categories and markets you buy in.",
    isOptional: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "kyb-materials",
    title: "KYB materials",
    description: "Registration, licences or references.",
    isOptional: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "declarations",
    title: "Declarations",
    description: "Agreement to the applicable notices.",
    isOptional: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function ApplicationChecklist() {
  return (
    <section id="application-checklist" aria-labelledby="checklist-heading" className={`${hanken} w-full bg-[#fbf9f5] md:bg-[#fbf9f5] order-7 md:order-none`}>
      {/* ========================================================
          DESKTOP VIEW (hidden on mobile, unchanged desktop layout)
         ======================================================== */}
      <div className="hidden md:block">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-16 pb-20 md:px-8 md:pt-20 md:pb-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>07</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              CHECKLIST
            </span>
          </div>

          {/* Heading */}
          <h2
            id="checklist-heading"
            className="mt-3.5 text-[34px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[40px] lg:text-[44px]"
          >
            Gather these before you start.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Having these ready makes the application quick. Only entity, contact and category details are required — KYB materials are optional at this stage.
          </p>

          {/* 5 Stacked Cards */}
          <div className="mt-10 flex flex-col gap-3.5">
            {checklist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-[16px] border border-[#eef2f6] bg-white p-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)] transition-all hover:border-[#e2e8f0]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[#d5f5eb]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[12.5px] text-[#556987]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {item.isOptional && (
                  <span className="rounded-full bg-[#f1f5f9] px-2.5 py-1 text-[10.5px] font-bold tracking-wider text-[#64748b] uppercase">
                    OPTIONAL
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEW (strictly visible only on md:hidden)
         ======================================================== */}
      <div className="block md:hidden bg-[#f8fafc] px-5 pt-8 pb-12">
        {/* Top Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] shadow-[0_4px_16px_rgba(15,23,42,0.06)]">
          <Image
            src="/images/become-a-verified-buyer/vb15.jpg"
            alt="Checklist preparations"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Eyebrow */}
        <div className="mt-8 flex items-center gap-2.5">
          <span className={`${sora} text-[12px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>05</span>
          <span aria-hidden="true" className="h-[1.5px] w-7 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.16em] text-[#009b72] uppercase`}>
            CHECKLIST
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-3.5 text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#0f172a]">
          Gather these before you start.
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-[14px] leading-relaxed text-[#556987]">
          Having these ready makes the application quick. Only entity, contact and category details are required — KYB materials are optional at this stage.
        </p>

        {/* 5 Stacked Checklist Cards */}
        <div className="mt-7 flex flex-col gap-3">
          {checklist.map((item) => (
            <div
              key={`m-chk-${item.id}`}
              className="flex items-center justify-between rounded-[16px] border border-[#eef2f6] bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[#d5f5eb]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] text-[#556987]">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.isOptional && (
                <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold text-slate-500 uppercase">
                  OPTIONAL
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
