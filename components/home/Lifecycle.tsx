import Image from "next/image";

const outcomes = [
  <>
    Transaction status — completed, failed
    <br className="md:hidden" /> or revoked.
  </>,
  <>
    Documented disposition — the route a
    <br className="md:hidden" /> lot actually
    <br className="hidden md:block" /> took.
  </>,
  <>
    Exception handling — holds, disputes
    <br className="md:hidden" /> and recalls.
  </>,
];

const eyebrow = "text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase";
const badgeShadow = "shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]";

function Badge() {
  return (
    <div className={`absolute top-3.5 left-3.5 flex size-10 items-center justify-center rounded-[20px] bg-[rgba(247,243,238,0.95)] ${badgeShadow}`}>
      <Image src="/images/home/lifecycle/icon-branch-mobile.svg" alt="" width={16.667} height={16.667} className="md:hidden" />
      <Image src="/images/home/lifecycle/icon-branch.svg" alt="" width={16.667} height={16.667} className="hidden md:block" />
    </div>
  );
}

export default function Lifecycle() {
  return (
    <section className="bg-white px-[22px] pt-36 pb-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:p-10 lg:p-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row md:items-center md:justify-center md:gap-14">
        {/* Visual */}
        <div className="order-2 rounded-2xl border border-[#d3dde8] bg-white p-5 md:order-1 md:shrink md:basis-[630px] md:p-8">
          <div
            className={`relative flex aspect-[304/228] items-center justify-center overflow-hidden rounded-xl bg-[linear-gradient(140deg,#e8eef5_0%,#dbe5ef_55%,#cfdbe8_100%)] md:aspect-[564/423] md:bg-none ${badgeShadow}`}
          >
            <Image
              src="/images/home/lifecycle/team-workshop.webp"
              alt="Team of workers reviewing a lot at a workshop bench"
              fill
              sizes="564px"
              className="hidden object-cover md:block"
            />
            <div className="flex flex-col items-center gap-2 opacity-40 md:hidden">
              <Image src="/images/home/lifecycle/icon-branch-large.svg" alt="" width={33.333} height={33.333} className="opacity-80" />
              <p className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] text-[#0c2140] opacity-80">Lot lifecycle</p>
            </div>
            <Badge />
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 flex flex-col gap-3 pt-[3.5px] md:order-2 md:min-w-0 md:flex-1 md:gap-9 md:pt-[5.5px]">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="hidden items-center md:flex">
              <span className="w-[21.78px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">11</span>
              <span aria-hidden className="mx-[10px] h-[2px] w-[46px] bg-[#d3dde8]" />
              <span className={eyebrow}>Lifecycle &amp; outcomes</span>
            </div>
            <p className={`${eyebrow} md:hidden`}>Lifecycle &amp; outcomes</p>
            <h2 className="pt-[0.96px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:pt-[1.925px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px] md:text-[#1e2126]">
              From qualified lot to
              <br /> resolved outcome.
            </h2>
            <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:hidden">
              Information about a lot moves through
              <br /> qualification, governed matching,
              <br /> transaction, evidence and resolution —
              <br /> and the platform can report defined
              <br /> outcomes along the way.
            </p>
            <p className="hidden text-xl leading-[33.6px] text-[#4f647a] md:block">
              Information about a lot moves through
              <br /> qualification, governed matching, transaction,
              <br /> evidence and resolution — and the platform can report
              <br /> defined outcomes along the way.
            </p>
          </div>

          <ul className="flex flex-col gap-3.5 pt-2.5 md:gap-4 md:py-[11px]">
            {outcomes.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <Image src="/images/home/lifecycle/icon-check.svg" alt="" width={20} height={20} className="mt-0.5 shrink-0" />
                <span className="whitespace-nowrap text-[16.1px] leading-[25.7px] text-[#4f647a] md:text-[18px] md:leading-[28.72px] md:whitespace-normal">{text}</span>
              </li>
            ))}
          </ul>

          <div className="border-l-[3px] border-[#d3dde8] pt-[9.3px] pb-[1.7px] pl-3.5 text-[#4f647a] md:hidden">
            <p className="text-[13px] leading-[20.8px]">
              We report defined outcomes with clear
              <br /> boundaries. Where no approved figures exist, we
              <br /> show none — there are no invented percentages,
              <br /> recovery totals or impact statistics on this site.
            </p>
            <p className="text-xs leading-[19.2px]">
              * Donation transfer reporting applies only where a
              <br /> verified donation route is used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
