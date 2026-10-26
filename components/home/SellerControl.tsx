import Image from "next/image";

const base = "/images/home/seller-control";

const controls = [
  {
    title: "Stock qualification",
    desktop: [" — set the condition and", "documentation each lot must meet."],
    mobile: [" — set the", "condition and documentation each lot", "must meet."],
  },
  {
    title: "Permitted audiences",
    desktop: [" — approve which verified buyers", "can see an opportunity."],
    mobile: [" — approve", "which verified buyers can see an", "opportunity."],
  },
  {
    title: "Category rules",
    desktop: [" — apply the safety and handling", "requirements for each category."],
    mobile: [" — apply the safety and", "handling requirements for each", "category."],
  },
  {
    title: "Market-specific controls",
    desktop: [" — reflect where a route is", "permitted and active."],
    mobile: [" — reflect", "where a route is permitted and active."],
  },
];

function Lines({ lines, brClass }: { lines: string[]; brClass: string }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 && <br className={brClass} />}
          {line}
        </span>
      ))}
    </>
  );
}

function SlidersBadge({ className }: { className: string }) {
  return (
    <span
      className={`absolute top-3.5 left-3.5 flex size-10 items-center justify-center rounded-[20px] bg-[rgba(247,243,238,0.95)] shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)] ${className}`}
    >
      <Image src={`${base}/icon-sliders.svg`} alt="" width={16.667} height={15.833} />
    </span>
  );
}

export default function SellerControl() {
  return (
    <section className="bg-[#f2f5f9] font-[family-name:var(--font-sora)] md:bg-[#fcfcff]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-[22px] pt-[72px] md:flex-row md:justify-center md:gap-8 md:p-6 lg:gap-14 lg:p-24">
        {/* Copy */}
        <div className="flex w-full flex-col gap-3 pt-[3.5px] md:order-2 md:min-w-0 md:flex-1 md:gap-9 md:pt-[5.5px]">
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase md:hidden">
              Seller control
            </p>
            <div className="hidden items-center gap-[7px] py-2 text-xs leading-[19.2px] tracking-[1.68px] md:flex">
              <span className="w-[22px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">05</span>
              <span aria-hidden="true" className="ml-[7px] h-0.5 w-[46px] bg-[#d3dde8]" />
              <span className="ml-[5px] font-semibold uppercase text-[#926016]">
                <span className="text-[#4f647a] capitalize">The </span>Seller control
              </span>
            </div>

            <h2 className="pt-[0.96px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:pt-[1.7px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px] md:text-[#1e2126]">
              You stay in control of
              <br /> your inventory.
            </h2>

            <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:pb-[0.7px] md:text-xl md:leading-[26.6px]">
              Participation is seller-controlled at
              <br className="md:hidden" /> every step. You define what is offered,
              <br className="md:hidden" /> to whom, and under which rules — and
              <br className="md:hidden" /> you can change it.
            </p>
          </div>

          <ul className="flex flex-col gap-3.5 py-2.5 md:gap-4 md:py-[10.9px]">
            {controls.map((c) => (
              <li key={c.title} className="flex items-start gap-3">
                <span className="shrink-0 pt-0.5">
                  <Image src={`${base}/icon-check.svg`} alt="" width={20} height={20} />
                </span>
                <p className="text-[16.1px] leading-[25.7px] text-[#4f647a] md:text-lg md:leading-[28.72px]">
                  <strong className="font-bold text-[#0c2140] md:text-[#1e2126]">{c.title}</strong>
                  <span className="md:hidden">
                    <Lines lines={c.mobile} brClass="" />
                  </span>
                  <span className="hidden md:inline">
                    <Lines lines={c.desktop} brClass="hidden lg:block" />
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <p className="border-l-[3px] border-[#d3dde8] py-[3.2px] pl-3.5 text-[13px] leading-[20.8px] text-[#4f647a] md:hidden">
            Inventory ownership and commercial decisions
            <br /> remain with the accountable parties under the
            <br /> relevant seller arrangements. Zoiko Surplus does
            <br /> not automatically own or store your stock.
          </p>
        </div>

        {/* Mobile visual */}
        <figure className="w-full rounded-2xl border border-[#d3dde8] bg-white p-5 md:hidden">
          <div className="relative flex aspect-[304/228] items-center justify-center overflow-clip rounded-xl bg-[linear-gradient(140deg,#e8eef5_0%,#dbe5ef_55%,#cfdbe8_100%)] shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]">
            <div className="flex flex-col items-center gap-2 opacity-40">
              <Image src={`${base}/icon-sliders-large.svg`} alt="" width={33.333} height={31.667} className="opacity-80" />
              <figcaption className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] text-[#0c2140] opacity-80">
                Seller controls
              </figcaption>
            </div>
            <SlidersBadge className="" />
          </div>
        </figure>

        {/* Desktop visual */}
        <div className="hidden w-full rounded-2xl border border-[#d3dde8] bg-white p-8 md:order-1 md:block md:min-w-0 md:flex-1">
          <div className="relative mx-auto aspect-[566/383] w-full max-w-[566px] overflow-clip rounded-xl shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]">
            <Image
              src={`${base}/seller-packing-boxes.webp`}
              alt="Two small-business sellers packing and checking parcels in a stockroom"
              fill
              sizes="(min-width: 1440px) 566px, 40vw"
              className="object-cover"
            />
            <SlidersBadge className="" />
          </div>
        </div>
      </div>
    </section>
  );
}
