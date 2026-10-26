import Image from "next/image";
import Link from "next/link";

// Splits each benefit into its desktop / mobile line pairs exactly as in the Figma frames.
const benefitLines = [
  { desktop: ["Each stage produces a trusted input for the", "next."], mobile: ["Each stage produces a trusted", "input for the next."] },
  { desktop: ["Policy and safety checks run before, not", "after, matching."], mobile: ["Policy and safety checks run", "before, not after, matching."] },
  { desktop: ["Nothing confidential is exposed on public", "pages."], mobile: ["Nothing confidential is exposed", "on public pages."] },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-white pt-[143px] pb-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:p-24"
    >
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-[16.8px] px-[22px] md:gap-14 md:px-0">
        <div className="flex flex-col items-center gap-[16.8px] md:gap-4">
          <p className="pb-[0.8px] text-[13px] leading-[20.8px] font-semibold tracking-[1.04px] text-[#926016] md:flex md:h-[37px] md:items-center">
            / the governed model
          </p>
          <h2
            id="how-it-works-heading"
            className="text-center text-[28.2px] leading-[34.37px] font-semibold tracking-[-0.28px] text-[#0c2140] md:text-[44px] md:leading-[53.68px] md:tracking-[-0.44px] md:text-[#1e2126]"
          >
            A governed path from <br className="md:hidden" />
            surplus to a <br className="hidden md:block" />
            resolved <br className="md:hidden" />
            outcome — <br className="md:hidden" />
            <span className="text-[#4f647a]">
              qualification, <br className="hidden md:block" />
              market <br className="md:hidden" />
              rules, permitted <br className="md:hidden" />
              audiences, <br className="hidden md:block" />
              transactions, <br className="md:hidden" />
              evidence and <br />
              resolution, organized <br className="md:hidden" />
              into one <br className="hidden md:block" />
              connected <br className="md:hidden" />
              sequence rather than a <br />
              public classifieds wall.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 pt-[31.2px] md:flex-row md:items-center md:gap-8 md:pt-0">
          {/* Visual card */}
          <div className="flex flex-col justify-center rounded-2xl border border-[#d3dde8] bg-white p-5 md:h-[424px] md:flex-[694] md:px-8 md:py-0">
            <div className="relative flex aspect-[304/243.19] items-center justify-center overflow-hidden rounded-xl border border-[#d3dde8] bg-linear-to-br from-[#e8eef5] from-0% via-[#dbe5ef] via-55% to-[#cfdbe8] to-100% md:aspect-auto md:h-[356px] md:bg-none">
              <Image
                src="/images/home/how-it-works/analyst-laptop.webp"
                alt="Analyst reviewing surplus lot data on a laptop"
                width={800}
                height={533}
                className="absolute inset-0 hidden size-full object-cover md:block"
              />
              <div className="flex flex-col items-center gap-2 opacity-40 md:hidden">
                <span className="flex items-center justify-center opacity-80">
                  <Image src="/images/home/how-it-works/icon-link-icon-large.svg" alt="" width={33.3333} height={33.3333} />
                </span>
                <span className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] text-[#0c2140] opacity-80">
                  Governed path
                </span>
              </div>
              <span className="absolute top-3.5 left-3.5 flex size-10 items-center justify-center rounded-[20px] bg-[#f7f3ee]/95 shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]">
                <Image src="/images/home/how-it-works/icon-link-icon.svg" alt="" width={16.6667} height={16.6667} />
              </span>
            </div>
          </div>

          {/* Checklist card */}
          <div className="flex flex-col justify-center rounded-2xl border border-[#d3dde8] bg-white p-5 md:h-[424px] md:flex-[522] md:p-8">
            <div className="flex flex-col md:gap-8">
              <p className="mb-4 flex items-center gap-2.5 text-[13px] leading-[20.8px] tracking-[1.82px] md:hidden">
                <span className="font-black text-[#0c2140]">02</span>
                <span aria-hidden="true" className="h-0.5 w-[46px] bg-[#d3dde8]" />
                <span className="font-bold text-[#4f647a]">The process</span>
              </p>
              <h3 className="pb-3.5 text-[20.1px] leading-[24.54px] font-semibold tracking-[-0.201px] text-[#0c2140] md:p-0 md:text-[28px] md:leading-[34.16px] md:tracking-[-0.28px] md:text-[#1e2126]">
                Built in at every stage
              </h3>
              <ul className="flex flex-col gap-3.5">
                {benefitLines.map((b, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 md:py-0.5 ${i === 0 ? "md:px-2" : ""}`}
                  >
                    <span className="flex items-center justify-center pt-0.5 md:py-1">
                      <Image src="/images/home/how-it-works/icon-check.svg" alt="" width={20} height={20} />
                    </span>
                    <span className="text-[16.1px] leading-[25.7px] text-[#4f647a] md:text-[18px] md:leading-[28.72px]">
                      <span className="md:hidden">
                        {b.mobile[0]}
                        <br />
                        {b.mobile[1]}
                      </span>
                      <span className="hidden md:inline">
                        {b.desktop[0]}
                        <br />
                        {b.desktop[1]}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-h-[72px] pt-6">
              <Link
                href="#seven-stages"
                className="flex min-h-12 items-center justify-center gap-[7.5px] rounded-full border border-[#d3dde8] bg-white px-[26px] py-[13.5px] text-[15px] leading-[18px] font-semibold text-[#0c2140] md:text-[#1e2126]"
              >
                See the seven stages
                <Image src="/images/home/how-it-works/icon-arrow-right-navy.svg" alt="" width={16} height={16} className="md:hidden" />
                <Image src="/images/home/how-it-works/icon-arrow-right-dark.svg" alt="" width={16} height={16} className="hidden md:block" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
