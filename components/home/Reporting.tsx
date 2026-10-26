import Image from "next/image";

const IMG = "/images/home/reporting";

// Each icon SVG carries stroke overflow, so it is positioned inside the square icon box by percentage.
const items = [
  {
    title: "Transaction records",
    icon: "icon-transaction-records",
    pos: { left: "12.5%", top: "4.14%", width: "75%", height: "91.72%" },
    body: (
      <>
        Status and governed order
        <br className="hidden md:block" /> history.
      </>
    ),
  },
  {
    title: "Disposition evidence",
    icon: "icon-disposition-evidence",
    pos: { left: "12.5%", top: "4.17%", width: "75%", height: "91.67%" },
    body: (
      <>
        What happened to a lot, and
        <br className="hidden md:block" /> where.
      </>
    ),
  },
  {
    title: "Exception log",
    icon: "icon-exception-log",
    pos: { left: "4.17%", top: "4.17%", width: "91.67%", height: "91.67%" },
    body: (
      <>
        Holds, cancellations and
        <br className="hidden md:block" /> disputes.
      </>
    ),
  },
  {
    title: "Audit trail",
    icon: "icon-audit-trail",
    pos: { left: "0%", top: "0%", width: "100%", height: "100%" },
    body: "Who did what, and when.",
  },
];

export default function Reporting() {
  return (
    <section className="bg-[#e7edf4] py-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:p-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[31.99px] px-[22px] md:flex-row md:items-center md:justify-center md:gap-14 md:px-0">
        {/* Left column */}
        <div className="flex flex-col md:w-[calc((100%-56px)*0.4757)] md:shrink-0 md:gap-9 md:pt-[5.5px]">
          <div className="flex flex-col gap-3 pt-[3.5px] md:gap-4 md:pt-0">
            <div className="flex items-center">
              <span className="hidden w-[21.78px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126] md:block">
                12
              </span>
              <span className="mx-2.5 hidden h-0.5 w-[46px] bg-[#d3dde8] md:block" />
              <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
                Reporting &amp; evidence
              </p>
            </div>
            <h2 className="pt-[1.68px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:pt-[2px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px]">
              Records that support
              <br />
              decisions — not a
              <br />
              highlight reel.
            </h2>
            <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:text-[20px] md:leading-[33.6px]">
              Evidence and reporting exist to help
              <br className="md:hidden" /> accountable people make and defend
              <br className="md:hidden" /> commercial decisions. The categories
              <br className="md:hidden" /> below describe what can be reported;
              <br className="md:hidden" /> they are not live figures.
            </p>
          </div>

          <ul className="flex flex-col gap-3.5 pt-9 md:grid md:grid-cols-2 md:gap-x-3.5 md:gap-y-4 md:pt-0">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-[#d3dde8] bg-white px-[18px] py-4 md:h-[124px]"
              >
                <span className="relative mt-px block size-[13px] shrink-0 md:size-6">
                  <Image
                    src={`${IMG}/${item.icon}.svg`}
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                    className="absolute max-w-none"
                    style={item.pos}
                  />
                </span>
                <div className="flex flex-col gap-[3px] pb-[1.69px] md:gap-1 md:py-[3px]">
                  <h3 className="text-[16.1px] leading-[25.7px] font-bold text-[#0c2140] md:text-lg md:leading-[28.72px]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-[20.8px] text-[#4f647a]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: illustrative report preview */}
        <figure className="flex flex-col rounded-2xl border border-[#d3dde8] bg-white p-5 md:min-w-0 md:flex-1 md:items-center md:gap-2 md:p-8">
          <figcaption className="flex w-fit items-center gap-[7px] rounded-full border border-dashed border-[#d3dde8] bg-[#e7edf4] py-[5.6px] pr-[34.62px] pl-[11px] md:order-2 md:pr-[11px]">
            <span className="size-2 shrink-0 rounded-sm bg-[#926016]" />
            <span className="text-xs leading-[19.2px] font-semibold text-[#4f647a]">
              Conceptual — illustrative layout, no live
              <br className="md:hidden" /> data
            </span>
          </figcaption>

          {/* Mobile placeholder */}
          <div className="mt-4 md:hidden">
            <div className="relative flex aspect-[304/228] items-center justify-center rounded-xl bg-[linear-gradient(140deg,#e8eef5_0%,#dbe5ef_55%,#cfdbe8_100%)] shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]">
              <div className="flex flex-col items-center gap-2 opacity-40">
                <div className="flex size-10 items-center justify-center opacity-80">
                  <Image src={`${IMG}/icon-chart.svg`} alt="" width={33.333} height={33.333} unoptimized />
                </div>
                <p className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] whitespace-nowrap text-[#0c2140] opacity-80">
                  Reporting view
                </p>
              </div>
              <div className="absolute top-3.5 left-3.5 flex size-10 items-center justify-center rounded-[20px] bg-[#f7f3eeF2] shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]">
                <Image src={`${IMG}/icon-chart.svg`} alt="" width={16.667} height={16.667} unoptimized />
              </div>
            </div>
          </div>

          {/* Desktop photo */}
          <div className="relative hidden h-[420px] w-full overflow-hidden rounded-xl shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)] md:block">
            <Image
              src={`${IMG}/warehouse-analyst.webp`}
              alt="Analyst reviewing records on a laptop in a warehouse aisle"
              fill
              sizes="(min-width: 1440px) 564px, 45vw"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
