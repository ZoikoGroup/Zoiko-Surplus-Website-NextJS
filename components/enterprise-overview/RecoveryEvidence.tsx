import Image from "next/image";

const BASE = "/images/enterprise-overview/recovery-evidence";

const categories = [
  { label: "Qualification inputs", icon: "qualification-inputs" },
  { label: "Decisions", icon: "decisions" },
  { label: "Approved access events", icon: "approved-access-events" },
  { label: "Transaction artifacts", icon: "transaction-artifacts" },
  { label: "Outcome references", icon: "outcome-references" },
  { label: "Reversals", icon: "reversals" },
  { label: "Incidents & disputes", icon: "incidents-disputes" },
  { label: "Export & retention", icon: "export-retention" },
];

export default function RecoveryEvidence() {
  return (
    <section className="bg-[#f5f7fa] font-[family-name:var(--font-hanken)] max-md:py-14 md:p-24">
      <div className="flex max-w-[1240px] flex-col gap-12 max-md:px-4 md:gap-14">
        {/* Heading block */}
        <div className="flex w-full flex-col gap-4 pt-[6px] md:w-[780px] md:max-w-full">
          {/* Eyebrow: desktop */}
          <div className="hidden items-center py-2 md:flex">
            <div className="relative h-[21px] w-[75px] shrink-0">
              <span className="absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 font-[family-name:var(--font-sora)] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                07
              </span>
              <span className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-[2px] w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <span className="font-[family-name:var(--font-sora)] text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-pre text-[#926016] uppercase">
              {"  "}Recovery &amp; evidence
            </span>
          </div>
          {/* Eyebrow: mobile */}
          <div className="flex h-[20.14px] items-center text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:hidden">
            <span className="w-[18.2px] shrink-0 text-[#0c2140] opacity-50">07</span>
            <span className="mx-[10px] h-px w-[28px] shrink-0 bg-[#0f7a60] opacity-50" />
            <span className="whitespace-nowrap text-[#0f7a60]">Recovery &amp; evidence</span>
          </div>

          <h2 className="text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] max-md:pt-[30.8px] md:w-[780px] md:max-w-full md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px] md:whitespace-normal">
            A traceable record of
            <br className="md:hidden" /> what happened, and why.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px]">
            The categories of evidence a governed
            <br className="md:hidden" /> workflow can retain — from qualification
            <br className="md:hidden" /> inputs through outcomes, exceptions and
            <br className="md:hidden" /> reconciliations.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[27.99px] md:flex-row md:gap-14">
          <div className="flex w-full flex-col gap-3 md:min-w-px md:flex-1">
            <ul className="grid grid-cols-1 gap-[10px] md:grid-cols-2">
              {categories.map((c) => (
                <li
                  key={c.label}
                  className="flex h-[45.81px] items-center gap-[9px] rounded-[10px] border border-[#e6e8ec] bg-white pl-[13px] text-[14.1px] leading-[21.82px] font-medium text-[#0c2140]"
                >
                  <Image src={`${BASE}/${c.icon}.svg`} alt="" width={18} height={18} className="shrink-0" />
                  {c.label}
                </li>
              ))}
            </ul>

            <div className="relative h-[51.38px] border-t border-[#e6e8ec]">
              <Image
                src={`${BASE}/note-info.svg`}
                alt=""
                width={15}
                height={15}
                className="absolute top-[13px] left-0"
              />
              <p className="absolute top-[31.1px] left-[23px] -translate-y-1/2 text-[12.8px] leading-[19.2px] whitespace-nowrap text-[#5a6b7b]">
                <span className="md:hidden">
                  Record categories, not live data. Transaction artifacts exist
                  <br />
                  only when a route is active and approved.
                </span>
                <span className="hidden md:inline">
                  Record categories, not live data. Transaction artifacts exist only when a route is active and
                  <br />
                  approved.
                </span>
              </p>
            </div>

            {/* CTA: desktop */}
            <a
              href="/surplus-enterprise/recovery-evidence"
              className="hidden h-12 w-fit items-center justify-center gap-[9px] rounded-full border border-[#955f22] bg-[#955f22] px-6 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white md:flex"
            >
              Explore Recovery &amp; Evidence
              <Image src={`${BASE}/arrow-right.svg`} alt="" width={18} height={18} />
            </a>
            {/* CTA: mobile */}
            <div className="pt-[5.99px] md:hidden">
              <a
                href="/surplus-enterprise/recovery-evidence"
                className="flex h-[39.06px] w-[229.83px] items-center gap-[6px] rounded-full border border-[#e6e8ec] bg-[#f5f7fa] pl-[13px] text-[13.6px] leading-[21px] font-semibold whitespace-nowrap text-[#13294b]"
              >
                <Image src={`${BASE}/link-arrow-mobile.svg`} alt="" width={14} height={14} />
                Explore Recovery &amp; Evidence
              </a>
            </div>
          </div>

          <div className="relative aspect-[358/268.5] w-full overflow-clip rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:aspect-[552/414] md:min-w-px md:flex-1">
            <Image
              src={`${BASE}/recovery-evidence-mobile.webp`}
              alt="Hands exchanging documents and giving a thumbs-up over a laptop displaying charts"
              width={800}
              height={533}
              sizes="402px"
              className="absolute top-0 left-[-6.25%] h-full w-[112.5%] max-w-none md:hidden"
            />
            <Image
              src={`${BASE}/recovery-evidence-desktop.webp`}
              alt="Hands exchanging documents and giving a thumbs-up over a laptop displaying charts"
              width={800}
              height={497}
              sizes="(min-width: 1440px) 715px, 60vw"
              className="absolute top-[-0.17%] left-[-5.17%] hidden h-full w-[120.72%] max-w-none md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
