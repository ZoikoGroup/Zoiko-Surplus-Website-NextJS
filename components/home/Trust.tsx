import Image from "next/image";

const base = "/images/home/trust";

type Card = {
  title: string;
  icon: string;
  size: [number, number];
  mobile: string[];
  desktop: string[];
};

const cards: Card[] = [
  {
    title: "Verified participation",
    icon: "shield",
    size: [18, 22.003],
    mobile: ["Identity, role and eligibility checks for the", "participants a transaction relies on."],
    desktop: ["Identity, role and eligibility", "checks for the participants a", "transaction relies on."],
  },
  {
    title: "Controlled visibility",
    icon: "eye-off",
    size: [22.001, 22],
    mobile: ["Confidential inventory, prices and", "audiences stay protected from public view."],
    desktop: ["Confidential inventory, prices", "and audiences stay protected", "from public view."],
  },
  {
    title: "Policy & product safety",
    icon: "checklist",
    size: [24, 24],
    mobile: ["Country, category, corridor and brand", "controls are evaluated at the relevant", "action gates."],
    desktop: ["Country, category, corridor", "and brand controls are", "evaluated at the relevant", "action gates."],
  },
  {
    title: "Records & resolution",
    icon: "file-check",
    size: [18, 22],
    mobile: ["Documented orders and evidence, with", "governed handling of holds and disputes."],
    desktop: ["Documented orders and", "evidence, with governed", "handling of holds and", "disputes."],
  },
];

function Lines({ lines, className }: { lines: string[]; className: string }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}

export default function Trust() {
  return (
    <section className="bg-white py-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:p-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[26px] px-[22px] md:gap-14 md:px-0">
        <header className="flex max-w-[853px] flex-col gap-3 pt-[3.5px] md:gap-4 md:pt-[5.5px]">
          <div className="flex items-center gap-2.5">
            <span className="hidden w-[21.78px] text-[13px] leading-[20.8px] font-extrabold tracking-[1.82px] text-[#1e2126] md:block">
              08
            </span>
            <span aria-hidden="true" className="hidden h-0.5 w-[46px] bg-[#d3dde8] md:block" />
            <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
              Trust &amp; safety
            </p>
          </div>
          <h2 className="pt-[0.96px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:pt-[1.89px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px] md:text-[#1e2126]">
            Trust is a process, not a<br className="md:hidden" /> badge.
          </h2>
          <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:text-[20px] md:leading-[33.6px]">
            Four disciplines keep transactions
            <br className="md:hidden" /> accountable. None of them, on its own,
            <br className="md:hidden" /> is a<br className="hidden md:block" /> guarantee.
          </p>
        </header>

        <div className="flex flex-col gap-[22px] pt-[22px] md:gap-[26px] md:pt-0">
          <ul className="flex flex-col gap-[22px] md:grid md:grid-cols-4 md:gap-8">
            {cards.map((card) => (
              <li
                key={card.title}
                className="flex flex-col gap-[6.9px] rounded-2xl border border-[#d3dde8] bg-white px-7 py-[30px] md:min-h-[240px] md:gap-[6.8px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(12,33,64,0.05)] md:bg-[#f5e7c9]">
                  <Image src={`${base}/icon-${card.icon}-mobile.svg`} alt="" width={card.size[0]} height={card.size[1]} className="md:hidden" />
                  <Image src={`${base}/icon-${card.icon}-desktop.svg`} alt="" width={card.size[0]} height={card.size[1]} className="hidden md:block" />
                </div>
                <h3 className="pt-[8.1px] text-[19px] leading-[23.18px] font-semibold tracking-[-0.19px] text-[#0c2140] md:pt-[8.3px] md:text-[#1e2126]">
                  {card.title}
                </h3>
                <p className="pb-[0.69px] text-[13px] leading-[20.8px] text-[#4f647a]">
                  <Lines lines={card.mobile} className="md:hidden" />
                  <Lines lines={card.desktop} className="hidden md:inline" />
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-2.5 rounded-xl border border-[#d3dde8] bg-white p-4 pr-[18px] pl-[18px]">
            <Image src={`${base}/icon-info-mobile.svg`} alt="" width={16.5} height={16.5} className="mt-px shrink-0 md:hidden" />
            <Image src={`${base}/icon-info-desktop.svg`} alt="" width={16.5} height={16.5} className="mt-px hidden shrink-0 md:block" />
            <p className="text-[13px] leading-[20.8px] text-[#4f647a]">
              We distinguish information supplied by
              <br className="md:hidden" /> sellers from information independently
              <br className="md:hidden" /> verified by an authorized provider.
              <br className="md:hidden" /> Verification, legality, title and product
              <br className="md:hidden" /> safety<br className="hidden md:block" /> are separate things — and
              <br className="md:hidden" /> verification is not a safety guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
