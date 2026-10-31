import Image from "next/image";

const IMG = "/images/enterprise-overview/policy-controls";

const controls = [
  { label: "Audience segment", icon: "audience-segment" },
  { label: "Approved channels", icon: "approved-channels" },
  { label: "Geographic restrictions", icon: "geographic-restrictions" },
  { label: "Price / reserve authority", icon: "price-reserve-authority" },
  { label: "Restricted-goods rules", icon: "restricted-goods" },
  { label: "Reviewer role & decisions", icon: "reviewer-role" },
];

export default function PolicyControls() {
  return (
    <section
      aria-labelledby="policy-controls-heading"
      className="bg-[#fbf6ef] py-14 font-[family-name:var(--font-hanken)] md:bg-[#0c2140] md:px-10 md:py-24 lg:px-16 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-12 px-4 md:max-w-[1240px] md:gap-14 md:px-0 xl:mx-0">
        <div className="flex flex-col gap-4 pt-1.5">
          {/* Mobile eyebrow */}
          <p className="flex items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:hidden">
            <span className="w-[18.2px] text-[#0c2140] opacity-50">05</span>
            <span aria-hidden="true" className="h-px w-7 bg-[#0f7a60] opacity-50" />
            Seller-led policy controls
          </p>
          {/* Desktop eyebrow */}
          <p className="hidden items-center font-[family-name:var(--font-sora)] text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:flex">
            <span className="w-[28.2px] text-white opacity-60">05</span>
            <span aria-hidden="true" className="mr-[10px] h-px w-7 bg-[#45bca0] opacity-50" />
            <span className="text-[#45bca0]">Seller-led policy controls</span>
          </p>

          <div className="flex flex-col gap-4 pt-[30.8px] md:pt-0">
            <h2
              id="policy-controls-heading"
              className="text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140] md:max-w-[780px] md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px] md:text-white"
            >
              You author the rules. The
              <span className="md:hidden">
                <br />
                platform enforces them.
              </span>
              <span className="hidden md:inline">
                {" "}
                platform <br />
                enforces them.
              </span>
            </h2>
            <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:max-w-[780px] md:text-xl md:leading-[26px] md:text-white">
              <span className="md:hidden">
                Disposition intent, audience, reserve and <br />
                review gates are seller-defined — all <br />
                authority is stored server-side, never in <br />
                public markup.
              </span>
              <span className="hidden md:inline">
                Disposition intent, audience, reserve and review gates are seller- defined — all <br />
                authority is stored server-side, never in public markup.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-7 md:flex-row md:justify-center md:gap-14">
          <div className="relative aspect-[358/447.5] w-full shrink-0 overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a,#0c2140)] md:aspect-auto md:h-[592.5px] md:w-[474px] md:max-w-[45%]">
            <Image
              src="/images/enterprise-overview/policy-controls/seller-configuring-policy-controls.webp"
              alt="Seller walking through a corridor with a tablet, configuring policy controls"
              fill
              sizes="(min-width: 768px) 900px, 700px"
              className="object-cover md:object-[82.4%_50%]"
            />
          </div>

          <ul className="flex w-full flex-col gap-2.5 md:min-w-0 md:flex-1">
            {controls.map((c) => (
              <li
                key={c.label}
                className="flex min-h-11 items-center gap-3.5 rounded-xl border border-[#e6e8ec] bg-white px-[18px] py-4"
              >
                <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#dcf3ed]">
                  <Image src={`${IMG}/${c.icon}.svg`} alt="" width={18} height={18} />
                </span>
                <span className="min-w-0 flex-1 text-lg leading-[27.9px] font-semibold text-[#0c2140]">{c.label}</span>
                <Image src={`${IMG}/plus-icon.svg`} alt="" width={18} height={18} className="shrink-0" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
