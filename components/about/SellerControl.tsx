import Image from "next/image";
import { hankenGrotesk } from "./hankenGrotesk";

const controls = [
  {
    title: "Stock qualification",
    description: (
      <>
        Set the condition and documentation each <br className="md:hidden" />
        lot must meet.
      </>
    ),
  },
  {
    title: "Permitted audiences",
    description: (
      <>
        Approve which verified buyers can see an <br className="md:hidden" />
        opportunity.
      </>
    ),
  },
  {
    title: "Category rules",
    description: (
      <>
        Apply the safety and handling requirements <br className="md:hidden" />
        for each category.
      </>
    ),
  },
  {
    title: "Market-specific controls",
    description: "Reflect where a route is permitted and active.",
  },
];

export default function SellerControl() {
  return (
    <section
      id="seller-control"
      aria-labelledby="seller-control-heading"
      className={`${hankenGrotesk.variable} font-[family-name:var(--font-hanken)] bg-[#fbf6ef] px-4 pt-28 pb-14 md:bg-[#fcfcff] md:px-10 md:py-[100px] xl:px-[140px]`}
    >
      <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-7 md:flex-row md:items-center md:gap-14">
        <div className="relative aspect-[358/268.5] overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a,#0c2140)] md:order-first md:aspect-[552/414] md:min-w-0 md:flex-1">
          <Image
            src="/images/about/seller-control/engineer-reviewing-blueprints.webp"
            alt="Person reviewing technical blueprints at a workbench with tools"
            fill
            sizes="(min-width: 1440px) 552px, (min-width: 768px) 45vw, 358px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-[11.3px] pt-1.5 md:min-w-0 md:flex-1 md:gap-9">
          <div className="flex flex-col gap-[11.3px] md:gap-4">
            <p className="flex items-center text-[13px] leading-[20.15px] md:py-2 md:leading-[20.8px]">
              {/* Mobile eyebrow */}
              <span className="flex items-center gap-2.5 font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:hidden">
                <span className="w-[18.2px] text-[#0c2140] opacity-50">08</span>
                <span aria-hidden="true" className="h-px w-7 bg-[#0f7a60] opacity-50" />
                The seller control
              </span>
              {/* Desktop eyebrow */}
              <span className="hidden items-center font-[family-name:var(--font-sora)] md:flex">
                <span className="w-[29.13px] font-black tracking-[1.82px] text-[#0c2140]">07</span>
                <span aria-hidden="true" className="h-0.5 w-[46px] bg-[#d3dde8]" />
                <span className="ml-[9px] flex items-end gap-1">
                  <span className="font-bold tracking-[1.82px] text-[#4f647a]">The</span>
                  <span className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
                    seller control
                  </span>
                </span>
              </span>
            </p>
            <h2
              id="seller-control-heading"
              className="pt-[9.255px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]"
            >
              You stay in control of your <br />
              inventory.
            </h2>
            <p className="text-[18px] leading-[27.9px] text-[#5a6b7b]">
              <span className="md:hidden">
                Participation is seller-controlled at every <br />
                step. You define what is offered, to whom, <br />
                and under which rules — and you can <br />
                change it.
              </span>
              <span className="hidden md:inline">
                Participation is seller-controlled at every step. You define what is <br />
                offered, to whom, and under which rules — and you can change it.
              </span>
            </p>
          </div>

          <ul className="flex flex-col gap-3.5 pt-[10.7px] md:gap-4 md:pt-0">
            {controls.map((c) => (
              <li key={c.title} className="flex items-start gap-3">
                <Image
                  src="/images/about/seller-control/check-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-px shrink-0"
                />
                <p className="flex flex-col gap-[1.9px] pb-[0.9px] text-base leading-[24.8px]">
                  <span className="font-semibold text-[#0c2140]">{c.title}</span>
                  <span className="text-[#5a6b7b]">{c.description}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
