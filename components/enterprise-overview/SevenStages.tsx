import SevenStagesTabs from "./SevenStagesTabs";

// Sora has no arrow glyph; on desktop Figma falls back to a short system arrow.
const Arrow = () => <span className="md:[font-family:Arial,sans-serif]">→</span>;

export default function SevenStages() {
  return (
    <section
      id="seven-stages"
      className="flex flex-col gap-6 pb-14 max-md:px-4 md:gap-7 md:bg-[#fcfcff] md:p-24"
    >
      <div className="flex max-w-[1280px] w-full flex-col gap-6 md:gap-14">
        {/* Header */}
        <div className="flex w-full max-w-[625px] flex-col gap-[15.5px] pt-1.5 md:max-w-none md:gap-4 md:pt-[5.5px]">
          {/* Eyebrow: desktop */}
          <div className="hidden py-2 md:flex">
            <div className="relative h-[21px] w-[425px] font-[family-name:var(--font-sora)]">
              <span className="absolute top-[calc(50%+1px)] left-[-0.5px] w-[22px] -translate-y-1/2 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">
                10
              </span>
              <span className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-0.5 w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
              <span className="absolute top-[calc(50%+0.5px)] left-[81.5px] -translate-y-1/2 text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
                The seven stages
              </span>
            </div>
          </div>
          {/* Eyebrow: mobile */}
          <div className="relative h-[20.14px] w-[290.13px] font-[family-name:var(--font-hanken)] md:hidden">
            <span className="absolute top-1/2 left-0 w-[18.2px] -translate-y-1/2 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140] uppercase opacity-50">
              08
            </span>
            <span className="absolute top-1/2 left-[28.2px] h-px w-[28px] -translate-y-1/2 bg-[#0f7a60] opacity-50" />
            <span className="absolute top-[calc(50%-0.57px)] left-[66.2px] -translate-y-1/2 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase">
              The seven-stage lifecycle
            </span>
          </div>

          <div className="flex flex-col md:gap-[18px]">
            <h2 className="w-[342.3px] pt-[31.4px] pb-[0.5px] font-[family-name:var(--font-hanken)] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:w-[1113px] md:max-w-full md:pt-[2px] md:pb-0 md:font-[family-name:var(--font-sora)] md:text-[44px] md:leading-[56.3px] md:font-semibold md:tracking-[-0.66px] md:whitespace-normal md:text-[#1e2126]">
              Qualify <Arrow /> Govern <Arrow /><br className="md:hidden" />
              <span className="hidden md:inline"> </span>Match <Arrow /> Optimize <Arrow /><br className="md:hidden" />
              <span className="hidden md:inline"> </span>Transact <Arrow /> Prove <Arrow /><br className="md:hidden" />
              <span className="hidden md:inline"> </span>Resolve.
            </h2>
            <p className="mt-[15.5px] font-[family-name:var(--font-hanken)] text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:mt-0 md:font-[family-name:var(--font-sora)] md:text-[20px] md:leading-[33.6px] md:text-[#4f647a]">
              <span className="md:hidden">
                Each stage produces a trusted input for the
                <br />
                next — including an explicit Resolve stage
                <br />
                for discrepancies and exceptions. These are
                <br />
                educational concepts, not live runtime
                <br />
                status.
              </span>
              <span className="hidden md:inline">
                Select a stage to see what it does in plain English. On a keyboard, use the arrow keys.
              </span>
            </p>
          </div>
        </div>

        <SevenStagesTabs />
      </div>
    </section>
  );
}
