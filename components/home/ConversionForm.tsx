import Image from "next/image";
import ConversionFormCard from "./ConversionFormCard";

const points = [
  ["A real conversation with a person — not", "an instant account."],
  ["We ask only for what we need to route", "you correctly."],
  ["No confidential stock documents at", "this stage."],
];

export default function ConversionForm() {
  return (
    <section
      id="get-started"
      className="bg-white px-[22px] pt-[156px] pb-[72px] font-[family-name:var(--font-sora)] md:px-6 md:py-12 lg:px-24"
    >
      <div className="mx-auto max-w-[1248px] overflow-clip rounded-[28px] bg-[linear-gradient(160deg,#123457_0%,#0c2140_70%)] md:bg-[linear-gradient(161.94deg,#123457_0%,#0c2140_70%)]">
        <div className="flex flex-col gap-8 p-7 md:flex-row md:items-center md:justify-center md:gap-12 md:p-8 lg:p-[52px]">
          <div className="flex flex-col gap-3 pt-[3.5px] md:min-w-px md:flex-1 md:gap-9 md:pt-0">
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="hidden items-center py-2 md:flex">
                <span className="w-[22px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-white">14</span>
                <span aria-hidden="true" className="mx-[7px] h-[2px] w-[46px] bg-[#d3dde8]" />
                <span className="ml-[-1px] text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#17a185] uppercase">
                  Get started
                </span>
              </div>
              <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#17a185] uppercase md:hidden">
                Get started
              </p>
              <h2 className="pt-[1.69px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-white md:pt-[1.72px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px]">
                Find the right
                <br />
                pathway for your
                <br />
                surplus.
              </h2>
              <p className="text-[17.6px] leading-[28.1px] text-[#a7bad0] md:pb-[0.69px] md:text-xl md:leading-[28.6px]">
                Tell us a little about your
                <br className="md:hidden" /> organization and
                <br className="hidden md:block" /> we’ll route you
                <br className="md:hidden" /> to the right conversation —
                <br />
                enterprise seller, verified buyer
                <br className="md:hidden" /> or partner.
              </p>
            </div>

            <ul className="flex flex-col gap-3 pt-[10px] md:gap-4 md:pt-0">
              {points.map(([a, b]) => (
                <li key={a} className="flex items-start gap-[11px] text-[13px] leading-[20.8px] text-[#eaf1f8] md:items-center">
                  <Image
                    src="/images/home/conversion-form/icon-check.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="mt-px shrink-0 md:mt-0"
                  />
                  <span>
                    {a}
                    <br className="md:hidden" /> {b}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[17.6px] leading-[28.1px] text-[#a7bad0] md:text-base md:leading-[33.6px]">
              Here to buy, not sell?{" "}
              <a href="#" className="font-semibold text-[#17a185] underline">
                Apply as a verified buyer&nbsp;
              </a>{" "}
              instead.
            </p>
          </div>

          <ConversionFormCard />
        </div>
      </div>
    </section>
  );
}
