import Image from "next/image";
import SevenStagesTabs from "./SevenStagesTabs";
import { hankenGrotesk } from "./hankenGrotesk";

export default function SevenStages() {
  return (
    <section
      id="seven-stages"
      aria-labelledby="seven-stages-heading"
      className={`${hankenGrotesk.variable} font-[family-name:var(--font-hanken)] bg-white px-4 pt-14 md:bg-[#fcfcff] md:p-24 md:font-[family-name:var(--font-sora)]`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-7 md:gap-14">
        <div className="flex max-w-[625px] flex-col gap-4 pt-1.5 md:max-w-none md:pt-[5.5px]">
          {/* Mobile eyebrow */}
          <p className="flex items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:hidden">
            <span className="w-[18.2px] text-[#0c2140] opacity-50">09</span>
            <span aria-hidden="true" className="h-px w-7 bg-[#0f7a60] opacity-50" />
            How it works
          </p>
          {/* Desktop eyebrow */}
          <p className="hidden items-center py-2 md:flex">
            <span className="w-[29.13px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">
              08
            </span>
            <span aria-hidden="true" className="h-0.5 w-[46px] bg-[#d3dde8]" />
            <span className="ml-[6.4px] text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
              The seven stages
            </span>
          </p>

          <div className="flex flex-col gap-4 md:gap-[18px]">
            <h2
              id="seven-stages-heading"
              className="pt-[30.92px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140] md:pt-[2.025px] md:text-[44px] md:leading-[56.3px] md:font-semibold md:tracking-[-0.66px] md:text-[#1e2126]"
            >
              Qualify → Govern → <br className="md:hidden" />
              Match → Optimize → <br className="md:hidden" />
              Transact <br className="hidden md:block" />→ Prove → <br className="md:hidden" />
              Resolve.
            </h2>
            <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[33.6px] md:text-[#4f647a]">
              <span className="md:hidden">
                Each stage produces a trusted input for the <br />
                next. Select a stage to see what it does in <br />
                plain English.
              </span>
              <span className="hidden md:inline">
                Select a stage to see what it does in plain English. On a keyboard, use the arrow keys.
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 md:gap-5">
          <SevenStagesTabs />
          <p className="hidden items-center gap-[9px] text-[13px] leading-[20.8px] text-[#4f647a] md:flex">
            <Image
              src="/images/about/seven-stages/info-icon.svg"
              alt=""
              width={11.9167}
              height={11.9167}
            />
            Evidence records what happened in the process; it does not by itself guarantee the truth of
            underlying claims.
          </p>
        </div>
      </div>
    </section>
  );
}
