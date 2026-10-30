import Image from "next/image";

const base = "/images/enterprise-overview/trust-safety-liability";

const rows = [
  { icon: "verification", label: "Verification" },
  { icon: "safety", label: "Safety" },
  { icon: "legal-entitlement", label: "Legal entitlement" },
  { icon: "third-party-execution", label: "Third-party execution" },
  { icon: "exceptions", label: "Exceptions" },
];

export default function TrustSafetyLiability() {
  return (
    <section className="bg-[#f5f7fa] py-14 font-[family-name:var(--font-hanken)] md:p-24">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-4 md:px-0">
        <header className="flex flex-col gap-4 pt-1.5 md:w-[780px] md:max-w-full">
          <div className="flex h-[20.14px] items-center gap-2.5 md:h-auto md:py-2">
            <span className="w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140]/50 uppercase md:w-[19.13px] md:font-[family-name:var(--font-sora)] md:leading-[20.8px] md:font-black md:text-[#0c2140]">
              <span className="md:hidden">11</span>
              <span className="hidden md:inline">13</span>
            </span>
            <span aria-hidden="true" className="h-px w-7 shrink-0 bg-[#0f7a60]/50 md:h-0.5 md:w-[46px] md:bg-[#d3dde8]" />
            <p className="text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase md:ml-[-1px] md:font-[family-name:var(--font-sora)] md:text-xs md:leading-[19.2px] md:tracking-[1.68px] md:text-[#926016]">
              Trust, safety &amp; liability
            </p>
          </div>
          <h2 className="pt-[31px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px] md:whitespace-normal">
            Verification, safety and
            <br className="md:hidden" /> legal rights are separate
            <br className="md:hidden" /> things.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-xl md:leading-[26px] md:whitespace-nowrap">
            Short, visible boundaries — none of these
            <br className="md:hidden" /> implies a verified result on this page.
          </p>
        </header>

        <ul className="flex flex-col gap-2.5 pt-7">
          {rows.map((row) => (
            <li
              key={row.icon}
              className="flex min-h-11 items-center gap-3.5 rounded-xl border border-[#e6e8ec] bg-white px-[18px] py-4"
            >
              <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#dcf3ed]">
                <Image src={`${base}/icon-${row.icon}.svg`} alt="" width={18} height={18} />
              </span>
              <span className="min-w-px flex-1 text-lg leading-[27.9px] font-semibold text-[#0c2140]">{row.label}</span>
              <Image src={`${base}/icon-expand.svg`} alt="" width={18} height={18} className="shrink-0" />
            </li>
          ))}
        </ul>

        <a href="#" className="flex items-center gap-1.5 text-base leading-[24.8px] font-semibold text-[#0f7a60]">
          Read the Trust &amp; Safety framework
          <Image src={`${base}/icon-arrow-right.svg`} alt="" width={18} height={18} />
        </a>
      </div>
    </section>
  );
}
