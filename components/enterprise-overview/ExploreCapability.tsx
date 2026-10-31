import Image from "next/image";

const IMG = "/images/enterprise-overview/explore-capability";

type Card = {
  label: string;
  title: string;
  desktopDesc: string[];
  mobileDesc: string[];
  desktopImg: string;
  mobileImg: string;
  alt: string;
};

const cards: Card[] = [
  {
    label: "Qualification",
    title: "Inventory Qualification",
    desktopDesc: ["Condition, provenance, ownership", "authority and category constraints."],
    mobileDesc: ["Condition, provenance, ownership authority and", "category constraints."],
    desktopImg: `${IMG}/inventory-qualification-desktop.webp`,
    mobileImg: `${IMG}/inventory-qualification-mobile.webp`,
    alt: "Person with a tablet checking inventory in a warehouse",
  },
  {
    label: "Planning",
    title: "Disposition Planning",
    desktopDesc: ["Compare permitted, policy-filtered", "routes on expected net recovery."],
    mobileDesc: ["Compare permitted, policy-filtered routes on", "expected net recovery."],
    desktopImg: `${IMG}/disposition-planning-desktop.webp`,
    mobileImg: `${IMG}/disposition-planning-mobile.webp`,
    alt: "Team planning around a table of documents",
  },
  {
    label: "Evidence",
    title: "Recovery & Evidence",
    desktopDesc: ["Outcome categories, records, exceptions and reconciliations."],
    mobileDesc: ["Outcome categories, records, exceptions and", "reconciliations."],
    desktopImg: `${IMG}/recovery-evidence-desktop.webp`,
    mobileImg: `${IMG}/recovery-evidence-mobile.webp`,
    alt: "Hand turning pages of a records binder",
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((l, i) => (
        <span key={l}>
          {l}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

function ExploreLink() {
  return (
    <a
      href="#"
      className="flex h-[33.33px] items-center gap-[5.63px] pt-[10.66px] text-[13.8px] leading-[21.33px] font-semibold text-[#7e4e1c]"
    >
      <span>
        Explore
        <span className="sr-only"> this destination</span>
      </span>
      <Image src={`${IMG}/explore-arrow.svg`} alt="" width={14} height={14} className="shrink-0" />
    </a>
  );
}

function CardBody({ card }: { card: Card }) {
  return (
    <div className="flex flex-col p-4">
      <p className="pb-1.5 text-[11.5px] leading-[17.86px] font-bold tracking-[0.691px] text-[#0f7a60] uppercase">
        {card.label}
      </p>
      <h3 className="text-[16.3px] leading-[17.95px] font-semibold tracking-[-0.326px] text-[#0c2140]">
        {card.title}
      </h3>
      <p className="pt-[5.32px] text-[13.8px] leading-[20.64px] text-[#5a6b7b]">
        <span className="md:hidden">
          <Lines lines={card.mobileDesc} />
        </span>
        <span className="hidden md:inline">
          <Lines lines={card.desktopDesc} />
        </span>
      </p>
      <ExploreLink />
    </div>
  );
}

function ArrowBadge() {
  return (
    <span
      aria-hidden="true"
      className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/94 shadow-[0px_1px_2px_0px_rgba(12,33,64,0.06),0px_1px_3px_0px_rgba(12,33,64,0.08)]"
    >
      <Image src={`${IMG}/arrow-up-right.svg`} alt="" width={16} height={16} />
    </span>
  );
}

function CtaButton({ mobile }: { mobile?: boolean }) {
  return (
    <a
      href="#"
      className={`flex min-h-12 items-center justify-center gap-[3.9px] rounded-full border border-[#955f22] bg-[#955f22] px-4 py-[9px] text-[13.8px] leading-[13.76px] font-semibold ${
        mobile ? "text-[#7e4e1c] md:hidden" : "hidden text-white md:flex"
      }`}
    >
      <span className="w-[159.119px] text-center">Request Enterprise Demo</span>
      <Image
        src={`${IMG}/${mobile ? "cta-arrow-mobile" : "cta-arrow-desktop"}.svg`}
        alt=""
        width={18}
        height={18}
        className="shrink-0"
      />
    </a>
  );
}

export default function ExploreCapability() {
  return (
    <section
      aria-labelledby="explore-capability-heading"
      className="bg-[#f5f7fa] py-14 font-[family-name:var(--font-hanken)] md:bg-[#fcfcff] md:px-10 md:py-24 lg:px-16 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-[1248px] flex-col gap-12 px-4 md:gap-14 md:px-0">
        <div className="flex flex-col gap-4 pt-1.5 md:pt-0">
          {/* Mobile eyebrow */}
          <p className="flex items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0f7a60] uppercase md:hidden">
            <span className="w-[18.2px] text-[#0c2140] opacity-50">03</span>
            <span aria-hidden="true" className="h-px w-7 bg-[#0f7a60] opacity-50" />
            Explore the capability
          </p>
          {/* Desktop eyebrow */}
          <p className="hidden items-end py-2 font-[family-name:var(--font-sora)] md:flex">
            <span className="flex h-[21px] w-[75px] items-center">
              <span className="w-[29.13px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                03
              </span>
              <span aria-hidden="true" className="h-0.5 w-[46px] bg-[#d3dde8]" />
            </span>
            <span className="flex items-end gap-1">
              <span className="text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">Who</span>
              <span className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
                we are
              </span>
            </span>
          </p>

          <div className="flex flex-col gap-4 pt-[31px] md:pt-1.5">
            <h2
              id="explore-capability-heading"
              className="text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]"
            >
              Go deeper, step by step.
            </h2>
            <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:max-w-[780px] md:text-xl md:leading-[26px]">
              <span className="md:hidden">
                Three connected destinations under Surplus <br />
                Enterprise — each explains one part of the <br />
                governed workflow.
              </span>
              <span className="hidden md:inline">
                Three connected destinations under Surplus Enterprise — each explains one part of <br />
                the governed workflow.
              </span>
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[1240px] flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 lg:min-w-0 lg:flex-1">
            <div className="flex flex-col gap-4 md:flex-row">
              {cards.slice(0, 2).map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white md:min-w-0 md:flex-1"
                >
                  <div className="relative aspect-[356/267] w-full overflow-hidden bg-[linear-gradient(150deg,#14294a,#0c2140)] md:aspect-[276/207]">
                    <Image
                      src={card.mobileImg}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 768px) 0px, 356px"
                      className="object-cover md:hidden"
                    />
                    <Image
                      src={card.desktopImg}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1440px) 300px, 45vw"
                      className="hidden object-cover md:block"
                    />
                    <ArrowBadge />
                  </div>
                  <CardBody card={card} />
                </article>
              ))}
            </div>
            {(() => {
              const card = cards[2];
              return (
                <article className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white">
                  <div className="relative aspect-[356/267] w-full overflow-hidden bg-[linear-gradient(150deg,#14294a,#0c2140)] md:aspect-auto md:h-[199px] md:w-full md:max-w-[571px]">
                    <Image
                      src={card.mobileImg}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 768px) 0px, 356px"
                      className="object-cover md:hidden"
                    />
                    <Image
                      src={card.desktopImg}
                      alt={card.alt}
                      fill
                      sizes="571px"
                      className="hidden object-cover md:block"
                    />
                    <ArrowBadge />
                  </div>
                  <CardBody card={card} />
                </article>
              );
            })()}
          </div>

          <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#14294a,#0c2140)] lg:h-[714px] lg:min-w-0 lg:flex-1 lg:self-start max-lg:md:min-h-[480px]">
            <div className="absolute inset-x-0 top-0 h-[478px] bg-[linear-gradient(150deg,#14294a,#0c2140)] md:hidden">
              <Image
                src={`${IMG}/enterprise-team-mobile.webp`}
                alt="Colleagues working together at a laptop"
                fill
                sizes="720px"
                className="object-cover"
              />
            </div>
            <Image
              src={`${IMG}/enterprise-team-desktop.webp`}
              alt="Two colleagues reviewing a laptop together"
              fill
              sizes="(min-width: 1440px) 1100px, 100vw"
              className="hidden object-cover md:block"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,33,64,0.4),rgba(12,33,64,0.9))] md:bg-[linear-gradient(to_bottom,rgba(12,33,64,0.4)_61.365%,rgba(12,33,64,0.9))]"
            />
            <div className="relative flex flex-col p-4 md:px-[26px] md:pt-0 md:pb-[39.7px]">
              <h3 className="text-[17.6px] leading-[19.36px] font-semibold tracking-[-0.352px] text-white">
                Talk to the enterprise team
              </h3>
              <p className="pt-[5.32px] text-[13.8px] leading-[20.64px] text-white/85 md:pt-1.5">
                <span className="md:hidden">
                  Walk through qualification, controls, planning and <br />
                  evidence for your markets.
                </span>
                <span className="hidden md:inline">
                  Walk through qualification, controls, planning and evidence for your markets.
                </span>
              </p>
              <div className="min-h-[62px] pt-3.5 md:w-full md:max-w-[521px]">
                <CtaButton mobile />
                <CtaButton />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
