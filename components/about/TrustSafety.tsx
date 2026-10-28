import Image from "next/image";
import { hankenGrotesk } from "./hankenGrotesk";

const base = "/images/about/trust-safety";

type Card = {
  icon: string;
  desktopSize: [number, number];
  desktopTitle: string;
  mobileTitle: string[];
  desktop: string[];
  mobile: string[];
};

const cards: Card[] = [
  {
    icon: "shield",
    desktopSize: [18, 22.003],
    desktopTitle: "Verified participation",
    mobileTitle: ["Verified", "participation"],
    desktop: ["Identity, role and eligibility", "checks for the participants a", "transaction relies on."],
    mobile: ["Identity, role and", "eligibility checks", "for the", "participants a", "transaction relies", "on."],
  },
  {
    icon: "eye-off",
    desktopSize: [22.001, 22],
    desktopTitle: "Controlled visibility",
    mobileTitle: ["Controlled", "visibility"],
    desktop: ["Confidential inventory, prices", "and audiences stay protected", "from public view."],
    mobile: ["Confidential", "inventory, prices", "and audiences", "stay protected", "from public view."],
  },
  {
    icon: "checklist",
    desktopSize: [24, 24],
    desktopTitle: "Policy & product safety",
    mobileTitle: ["Policy & product", "safety"],
    desktop: ["Country, category, corridor", "and brand controls are", "evaluated at the relevant", "action gates."],
    mobile: ["Country,", "category,", "corridor and", "brand controls", "are evaluated at", "relevant action", "gates."],
  },
  {
    icon: "file-check",
    desktopSize: [18, 22],
    desktopTitle: "Records & resolution",
    mobileTitle: ["Records &", "resolution"],
    desktop: ["Documented orders and", "evidence, with governed", "handling of holds and", "disputes."],
    mobile: ["Documented", "orders and", "evidence, with", "governed", "handling of holds", "and disputes."],
  },
];

const boundaryDesktop = [
  "Zoiko Surplus does not assume ownership of third-party goods, operate a warehouse fleet or hold customer funds as a default",
  "capability. Actual contracting parties, payment-provider roles, title and risk transfer, category responsibilities and market eligibility are",
  "determined by approved legal and operating configurations.",
];
const boundaryMobile = [
  "Zoiko Surplus does not assume",
  "ownership of third-party goods,",
  "operate a warehouse fleet or hold",
  "customer funds as a default",
  "capability. Actual contracting parties,",
  "payment-provider roles, title and risk",
  "transfer, category responsibilities and",
  "market eligibility are determined by",
  "approved legal and operating",
  "configurations.",
];

function Lines({ lines, className }: { lines: string[]; className: string }) {
  return (
    <span className={className}>
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </span>
  );
}

export default function TrustSafety() {
  return (
    <section
      className={`${hankenGrotesk.variable} bg-white pt-14 font-[family-name:var(--font-hanken)] md:bg-[#fcfcff] md:p-24 md:font-[family-name:var(--font-sora)]`}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-4 md:gap-14 md:px-0">
        <header className="flex flex-col gap-4 pt-1.5 md:max-w-[853px] md:pt-[5.5px]">
          <div className="flex h-[20.14px] items-center gap-2.5 md:h-[21px]">
            <span className="w-[18.2px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140]/50 md:w-[21.78px] md:leading-[20.8px] md:font-extrabold md:text-[#1e2126]">
              <span className="md:hidden">12</span>
              <span className="hidden md:inline">11</span>
            </span>
            <span aria-hidden="true" className="h-px w-7 bg-[#0f7a60]/50 md:h-0.5 md:w-[46px] md:bg-[#d3dde8]" />
            <p className="text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:text-xs md:leading-[19.2px] md:tracking-[1.68px] md:text-[#926016]">
              Trust &amp; safety
            </p>
          </div>
          <h2 className="pt-[30.8px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:pt-[1.89px] md:text-[44px] md:leading-[49.28px] md:font-semibold md:tracking-[-0.66px] md:text-[#1e2126]">
            Trust is a process, not a<br className="md:hidden" /> badge.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[33.6px] md:whitespace-nowrap md:text-[#4f647a]">
            <span className="md:hidden">
              Four disciplines keep transactions
              <br />
              accountable. None of them, on its own, is a
              <br />
              guarantee.
            </span>
            <span className="hidden md:inline">
              Four disciplines keep transactions accountable. None of them, on its own, is a guarantee.
            </span>
          </p>
        </header>

        <div className="flex flex-col gap-7 pb-0 md:gap-[26px]">
          <ul className="grid grid-cols-2 gap-6 pt-5 md:grid-cols-4 md:gap-8 md:pt-0">
            {cards.map((card) => (
              <li
                key={card.icon}
                className="flex flex-col gap-[7px] rounded-2xl border border-[#e6e8ec] bg-white p-[18px] shadow-[0_1px_1px_rgba(12,33,64,0.06),0_1px_1.5px_rgba(12,33,64,0.08)] md:min-h-[240px] md:gap-[6.8px] md:border-[#d3dde8] md:px-7 md:py-[30px] md:shadow-none"
              >
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-[#dcf3ed] md:h-12 md:w-12 md:rounded-xl md:bg-[#f5e7c9]">
                  <Image src={`${base}/icon-${card.icon}-mobile.svg`} alt="" width={22} height={22} className="md:hidden" />
                  <Image
                    src={`${base}/icon-${card.icon}-desktop.svg`}
                    alt=""
                    width={card.desktopSize[0]}
                    height={card.desktopSize[1]}
                    className="hidden md:block"
                  />
                </div>
                <h3 className="pt-[6.5px] text-[16.3px] leading-[17.95px] font-semibold tracking-[-0.326px] whitespace-nowrap text-[#0c2140] md:pt-[8.3px] md:text-[19px] md:leading-[23.18px] md:tracking-[-0.19px] md:text-[#1e2126]">
                  <Lines lines={card.mobileTitle} className="md:hidden" />
                  <span className="hidden md:inline">{card.desktopTitle}</span>
                </h3>
                <p className="text-base leading-[24.8px] whitespace-nowrap text-[#5a6b7b] md:text-[13px] md:leading-[20.8px] md:whitespace-normal md:text-[#4f647a]">
                  <Lines lines={card.mobile} className="md:hidden" />
                  <Lines lines={card.desktop} className="hidden md:inline" />
                </p>
              </li>
            ))}
          </ul>

          <div className="mb-0 flex flex-col gap-[13.75px] rounded-[20px] bg-[#0c2140] px-6 pt-[30px] pb-6 md:gap-[12.945px] md:px-[34px] md:pt-10 md:pb-[34px]">
            <div className="flex h-[20.14px] items-center gap-2.5 text-[13px] font-semibold md:font-[family-name:var(--font-hanken)] tracking-[1.82px] uppercase">
              <span aria-hidden="true" className="w-[15.58px] shrink-0 text-[#0c2140]/50">
                —
              </span>
              <span aria-hidden="true" className="h-px w-7 bg-[#45bca0]/50" />
              <span className="leading-[20.15px] text-[#45bca0]">Boundary statement</span>
            </div>
            <p className="text-[18px] leading-[29.7px] font-normal whitespace-nowrap text-[#c7d2e0] md:whitespace-normal md:font-[family-name:var(--font-hanken)]">
              <Lines lines={boundaryMobile} className="md:hidden" />
              <Lines lines={boundaryDesktop} className="hidden md:inline" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
