import Image from "next/image";

const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type MatrixRow = {
  role: string;
  titleStatus: string;
  custody: string;
  contract: string;
  whatTheyDo: string;
  icon: React.ReactNode;
};

const matrixRows: MatrixRow[] = [
  {
    role: "Seller",
    titleStatus: "Owns / controls",
    custody: "Until transfer",
    contract: "Sets mandate",
    whatTheyDo: "Approves the route",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    role: "Zoiko platform",
    titleStatus: "No",
    custody: "No",
    contract: "Orchestrates",
    whatTheyDo: "Coordinates & records",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    role: "Authorized provider",
    titleStatus: "No",
    custody: "During service",
    contract: "Contracted",
    whatTheyDo: "Performs the service",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    role: "Recipient",
    titleStatus: "On transfer",
    custody: "On receipt",
    contract: "Per agreement",
    whatTheyDo: "Receives the goods",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#009b72" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export default function AuthorityRoleMatrix() {
  return (
    <>
      {/* =========================================================================
          DESKTOP VERSION (hidden on mobile, strictly preserved)
         ========================================================================= */}
      <section aria-labelledby="authority-matrix-desktop-heading" className={`hidden md:block ${hanken} w-full bg-white`}>
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-6 pb-20 md:px-8 md:pt-10 md:pb-28">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className={`${sora} text-[13px] font-extrabold tracking-[0.14em] text-[#0f172a]`}>06</span>
            <span aria-hidden="true" className="h-[1.5px] w-9 bg-[#926016]" />
            <span className={`${sora} text-[11.5px] font-bold tracking-[0.16em] text-[#926016] uppercase`}>
              AUTHORITY & ROLE MATRIX
            </span>
          </div>

          {/* Section Heading */}
          <h2
            id="authority-matrix-desktop-heading"
            className="mt-3.5 text-[32px] font-extrabold tracking-[-0.02em] text-[#0f172a] sm:text-[38px] lg:text-[42px]"
          >
            Who holds title, custody and
            <br className="hidden sm:inline" /> the contract.
          </h2>

          {/* Section Subheading */}
          <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-[#556987] sm:text-[16px]">
            Four roles, kept explicit. Zoiko coordinates and records — it never takes title or custody of the goods.
          </p>

          {/* Featured Store Photo Banner */}
          <div className="relative mt-9 h-[260px] w-full overflow-hidden rounded-[22px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:h-[360px] lg:h-[420px]">
            <Image
              src="/images/solution-surplus-network/sn7.png"
              alt="Store attendant and client discussing commercial terms and authority"
              fill
              sizes="(max-width: 1380px) 100vw, 1380px"
              className="object-cover object-center"
            />
          </div>

          {/* Roles Table Matrix */}
          <div className="mt-8 overflow-x-auto rounded-[16px] border border-[#e2e8f0] bg-white shadow-xs">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-[#0c1e38] text-white">
                  <th className="px-5 py-3.5 text-[12px] font-bold tracking-[0.04em] uppercase text-white/90">Role</th>
                  <th className="px-5 py-3.5 text-[12px] font-bold tracking-[0.04em] uppercase text-white/90">Title</th>
                  <th className="px-5 py-3.5 text-[12px] font-bold tracking-[0.04em] uppercase text-white/90">Custody</th>
                  <th className="px-5 py-3.5 text-[12px] font-bold tracking-[0.04em] uppercase text-white/90">Contract</th>
                  <th className="px-5 py-3.5 text-[12px] font-bold tracking-[0.04em] uppercase text-white/90">What they do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {matrixRows.map((row) => (
                  <tr key={row.role} className="transition-colors hover:bg-slate-50/60">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#e6f7f2]">
                          {row.icon}
                        </div>
                        <span className="text-[13.5px] font-bold text-[#0f172a]">{row.role}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-[12.5px] text-[#556987]">{row.titleStatus}</td>
                    <td className="px-5 py-4 text-[12.5px] text-[#556987]">{row.custody}</td>
                    <td className="px-5 py-4 text-[12.5px] text-[#556987]">{row.contract}</td>
                    <td className="px-5 py-4 text-[12.5px] text-[#556987]">{row.whatTheyDo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MOBILE VERSION (visible only on mobile, strictly isolated)
         ========================================================================= */}
      <section aria-labelledby="authority-matrix-mobile-heading" className={`block md:hidden ${hanken} w-full bg-white px-4 py-8`}>
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2">
          <span className={`${sora} text-[13px] font-bold tracking-[0.14em] text-[#009b72]`}>06</span>
          <span aria-hidden="true" className="h-[1.5px] w-6 bg-[#009b72]" />
          <span className={`${sora} text-[10.5px] font-bold tracking-[0.14em] text-[#009b72] uppercase`}>
            AUTHORITY & ROLE MATRIX
          </span>
        </div>

        {/* Section Heading */}
        <h2
          id="authority-matrix-mobile-heading"
          className="mt-3 text-[26px] font-extrabold tracking-[-0.02em] text-[#0c2140] leading-[1.15]"
        >
          Who holds title, custody
          <br /> and the contract.
        </h2>

        {/* Section Subheading */}
        <p className="mt-2 text-[13.5px] leading-relaxed text-[#556987]">
          Four roles, kept explicit. Zoiko coordinates and records — it never takes title or custody of the goods.
        </p>

        {/* Roles Table Card */}
        <div className="mt-6 overflow-x-auto rounded-[16px] border border-[#e2e8f0] bg-white shadow-xs">
          <table className="w-full min-w-[500px] border-collapse text-left">
            <thead>
              <tr className="bg-[#0c1e38] text-white">
                <th className="px-4 py-3 text-[11px] font-bold tracking-[0.04em] uppercase text-white/90">Role</th>
                <th className="px-4 py-3 text-[11px] font-bold tracking-[0.04em] uppercase text-white/90">Title</th>
                <th className="px-4 py-3 text-[11px] font-bold tracking-[0.04em] uppercase text-white/90">Custody</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f5f9]">
              {matrixRows.map((row) => (
                <tr key={row.role}>
                  <td className="bg-[#fdfaf6] px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#e6f7f2]">
                        {row.icon}
                      </div>
                      <span className="text-[12.5px] font-bold text-[#0c2140]">{row.role}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-[12px] text-[#556987]">{row.titleStatus}</td>
                  <td className="px-4 py-3.5 text-[12px] text-[#556987]">{row.custody}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
