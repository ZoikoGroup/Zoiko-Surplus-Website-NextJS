import Image from "next/image";
import { hankenGrotesk } from "./hankenGrotesk";

const base = "/images/about/outcomes";

type Item = {
  icon: string;
  title: string;
  desc: string;
  /** Desktop-only second line of the description (mobile keeps one line). */
  descBreak?: string;
  place: string;
};

// Listed in the mobile order; desktop grid placement is set per item.
const items: Item[] = [
  {
    icon: "recovery",
    title: "Gross & expected net recovery",
    desc: "Value before and after fees, transport,",
    descBreak: "risk and time.",
    place: "md:col-start-1 md:row-start-1",
  },
  {
    icon: "sell-through",
    title: "Authorized sell-through",
    desc: "By qualified buyer cohort, not open",
    descBreak: "public demand.",
    place: "md:col-start-2 md:row-start-1",
  },
  {
    icon: "time-to-offer",
    title: "Time to qualified offer",
    desc: "How quickly a lot reaches an eligible,",
    descBreak: "approved offer.",
    place: "md:col-start-2 md:row-start-2",
  },
  {
    icon: "disposition",
    title: "Documented disposition",
    desc: "The route a lot actually took, end to",
    descBreak: "end.",
    place: "md:col-start-1 md:row-start-2",
  },
  {
    icon: "exception",
    title: "Exception handling",
    desc: "Holds, disputes and recalls, with",
    descBreak: "governed resolution.",
    place: "md:col-start-2 md:row-start-3",
  },
  {
    icon: "donation",
    title: "Verified donation transfer",
    desc: "Confirmed charitable and recovery",
    descBreak: "hand-offs.",
    place: "md:col-start-1 md:row-start-3",
  },
  {
    icon: "audit-trail",
    title: "Audit trail",
    desc: "Who did what, and when.",
    place: "md:col-start-4 md:row-start-3",
  },
  {
    icon: "methodology",
    title: "Methodology & lineage",
    desc: "Every figure carries period, boundary",
    descBreak: "and source.",
    place: "md:col-start-3 md:row-start-3",
  },
];

export default function Outcomes() {
  return (
    <section
      className={`${hankenGrotesk.variable} bg-[#fbf6ef] pt-28 pb-14 font-[family-name:var(--font-hanken)] md:bg-[#fcfcff] md:p-24`}
    >
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[47.99px] px-4 md:mx-0 md:gap-14 md:px-0">
        <header className="flex flex-col gap-4 pt-1.5">
          <div className="flex h-[20.14px] items-center gap-2.5 md:h-[20.8px]">
            <span className="w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140]/50 md:w-[22.3px] md:font-[family-name:var(--font-sora)] md:leading-[20.8px] md:font-extrabold md:text-[#0c2140]">
              <span className="md:hidden">13</span>
              <span className="hidden md:inline">12</span>
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-[#0f7a60]/50 md:h-0.5 md:w-[46px] md:bg-[#d3dde8]" />
            <p className="text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:font-[family-name:var(--font-sora)] md:text-xs md:leading-[19.2px] md:tracking-[1.68px] md:text-[#926016]">
              Outcomes &amp; reporting
            </p>
          </div>
          <h2 className="pt-[30.8px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]">
            What we measure — not<br className="md:hidden" /> what we assume.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px]">
            <span className="md:hidden">
              We define the measures that matter and
              <br />
              show figures only after methodology, data
              <br />
              lineage, period and disclosure rights are
              <br />
              confirmed. No invented statistics.
            </span>
            <span className="hidden md:inline">
              We define the measures that matter and show figures only after methodology, data lineage, period and
              disclosure rights are
              <br />
              confirmed. No invented statistics.
            </span>
          </p>
        </header>

        <div className="flex flex-col gap-7 md:block md:h-[510px]">
          <ul className="flex flex-col gap-6 md:-ml-px md:grid md:h-[546px] md:w-[calc(100%+9px)] md:grid-cols-4 md:grid-rows-3 md:gap-x-6 md:gap-y-[25px]">
            {items.map((item) => (
              <li
                key={item.icon}
                className={`flex flex-col gap-1 rounded-2xl border border-[#e6e8ec] bg-white p-[18px] shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)] md:gap-[3.3px] ${item.place}`}
              >
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#f4e7d6]">
                  <Image src={`${base}/icon-${item.icon}.svg`} alt="" width={18} height={18} />
                </div>
                <h3 className="pt-[5px] pb-[0.56px] text-[15.2px] leading-[23.56px] font-bold text-[#0c2140] md:pt-[5.7px]">
                  {item.title}
                </h3>
                <p className="text-[13.1px] leading-[19.68px] text-[#5a6b7b]">
                  {item.desc}{" "}
                  {item.descBreak && <br className="hidden md:block" />}
                  {item.descBreak}
                </p>
              </li>
            ))}

            <li
              aria-hidden="true"
              className="relative hidden overflow-hidden rounded-2xl md:col-span-2 md:col-start-3 md:row-span-2 md:row-start-1 md:block"
            >
              <Image
                src={`${base}/dashboard-desktop.webp`}
                alt=""
                fill
                sizes="(min-width: 1440px) 612px, 50vw"
                className="object-cover"
              />
            </li>
          </ul>

          <div
            role="img"
            aria-label="Reporting and evidence dashboard concept"
            className="relative aspect-[358/447.5] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src={`${base}/icon-chart-mobile.svg`} alt="" width={30} height={30} />
            </div>
            <Image
              src={`${base}/dashboard-mobile.webp`}
              alt=""
              width={1200}
              height={855}
              className="pointer-events-none absolute top-0 left-[-37.72%] h-full w-[175.44%] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
