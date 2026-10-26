import Image from "next/image";

const base = "/images/home/private-access";

type Step = {
  label: string;
  icon: string;
  size: [number, number];
  title: string;
  mobile: string[];
  desktop: string[];
};

const steps: Step[] = [
  {
    label: "Public",
    icon: "globe",
    size: [12.833, 12.833],
    title: "Open information",
    mobile: ["What the platform is and how it works", "— with nothing confidential exposed."],
    desktop: ["What the platform is and how", "it works — with nothing", "confidential exposed."],
  },
  {
    label: "Qualify",
    icon: "check-circle",
    size: [12.837, 12.832],
    title: "Verification",
    mobile: ["Identity, role and eligibility are", "checked for your categories and", "markets."],
    desktop: ["Identity, role and eligibility are", "checked for your categories", "and markets."],
  },
  {
    label: "Authorize",
    icon: "shield",
    size: [10.5, 12.835],
    title: "Seller approval",
    mobile: ["A seller approves your profile for a", "specific private market."],
    desktop: ["A seller approves your profile", "for a specific private market."],
  },
  {
    label: "Access",
    icon: "lock",
    size: [11.667, 12.833],
    title: "Permitted view",
    mobile: ["Only then do approved opportunities", "become visible to you."],
    desktop: ["Only then do approved", "opportunities become visible", "to you."],
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

export default function PrivateAccess() {
  return (
    <section className="bg-white px-[22px] md:bg-[#0c2140] py-[72px] font-[family-name:var(--font-sora)] md:p-0">
      <div className="mx-auto max-w-[1440px] rounded-[28px] bg-[#0c2140] md:rounded-none md:bg-transparent md:p-24">
        <div className="mx-auto flex max-w-[1248px] flex-col gap-12 p-7 md:gap-14 md:px-[52px] md:py-0">
          <header className="flex max-w-[827px] flex-col gap-3 pt-[3.5px] md:gap-4 md:pt-[5.5px]">
            <div className="flex items-center gap-2.5 md:py-2">
              <span className="hidden w-[22px] text-[13px] leading-[20.8px] font-extrabold tracking-[1.82px] text-white md:block">
                09
              </span>
              <span aria-hidden="true" className="hidden h-0.5 w-[46px] bg-[#d3dde8] md:block" />
              <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#17a185] uppercase">
                Private markets
              </p>
            </div>
            <h2 className="pt-[1.69px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-white md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px]">
              Why you won’t see
              <br className="md:hidden" /> private inventory
              <br className="hidden md:block" /> here.
            </h2>
            <p className="text-[17.6px] leading-[28.1px] text-[#a7bad0] md:text-[20px] md:leading-[33.6px]">
              Public pages carry information
              <br className="md:hidden" /> only. Access to confidential lots,
              <br className="md:hidden" /> prices, bids
              <br className="hidden md:block" /> and buyer identities
              <br className="md:hidden" /> is earned through qualification
              <br className="md:hidden" /> and seller authorization —
              <br className="hidden md:block" /> never
              <br className="md:hidden" /> granted by browsing.
            </p>
          </header>

          <ol className="flex flex-col gap-3.5 md:grid md:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.label}
                className="flex flex-col gap-[4.8px] rounded-xl border border-[rgba(243,238,240,0.14)] bg-[rgba(243,238,240,0.06)] px-5 pt-[21px] pb-5 md:pt-[22.9px]"
              >
                <div className="flex items-center gap-[7px]">
                  <span className="flex size-3.5 items-center justify-center">
                    <Image src={`${base}/icon-${step.icon}.svg`} alt="" width={step.size[0]} height={step.size[1]} />
                  </span>
                  <p className="text-xs leading-[19.2px] font-bold tracking-[0.96px] text-[#17a185] uppercase">
                    {step.label}
                  </p>
                </div>
                <h3 className="pt-[8.9px] pb-[0.73px] text-[17px] leading-[20.74px] font-semibold tracking-[-0.17px] text-white md:pt-2.5">
                  {step.title}
                </h3>
                <p className="pb-[0.6px] text-[13px] leading-[20.8px] text-[#a7bad0]">
                  <Lines lines={step.mobile} className="md:hidden" />
                  <Lines lines={step.desktop} className="hidden md:inline" />
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
