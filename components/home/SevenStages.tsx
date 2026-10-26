import Image from "next/image";
import SevenStagesTabs from "./SevenStagesTabs";

export default function SevenStages() {
  return (
    <section
      id="seven-stages"
      aria-labelledby="seven-stages-heading"
      className="bg-[#e7edf4] py-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:p-24"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-[22px] md:gap-14 md:px-0">
        <div className="flex max-w-[763px] flex-col gap-3 pt-[3.5px] md:max-w-none md:gap-4 md:pt-[5.5px]">
          <p className="flex items-center gap-2.5 text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase md:py-2">
            <span className="hidden text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126] md:inline">
              03
            </span>
            <span aria-hidden="true" className="hidden h-0.5 w-[46px] bg-[#d3dde8] md:block" />
            The seven stages
          </p>
          <div className="flex flex-col gap-3 md:gap-[18px]">
            <h2
              id="seven-stages-heading"
              className="pt-px text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:pt-[2.025px] md:text-[44px] md:leading-[56.3px] md:tracking-[-0.66px] md:text-[#1e2126]"
            >
              Qualify → Govern → <br className="md:hidden" />
              Match → Optimize → <br className="md:hidden" />
              Transact <br className="hidden md:block" />→ Prove → <br className="md:hidden" />
              Resolve.
            </h2>
            <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:text-[20px] md:leading-[33.6px]">
              Select a stage to see what it does in <br className="md:hidden" />
              plain English. On a keyboard, use the <br className="md:hidden" />
              arrow keys.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:gap-5">
          <SevenStagesTabs />
          <p className="mt-5 flex items-start gap-[9px] text-[13px] leading-[20.8px] text-[#4f647a] md:mt-0 md:items-center">
            <Image
              src="/images/home/seven-stages/icon-info.svg"
              alt=""
              width={11.9167}
              height={11.9167}
              className="mt-1 md:mt-0"
            />
            <span>
              Evidence records what happened in the process; <br className="md:hidden" />
              it does not by itself guarantee the truth of <br className="md:hidden" />
              underlying claims.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
