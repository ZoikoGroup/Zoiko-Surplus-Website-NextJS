import type { ReactNode } from "react";
import Image from "next/image";

const IMG = "/images/home/resources";

const shadow = "shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]";
const gradient = "bg-[linear-gradient(140deg,#e8eef5_0%,#dbe5ef_55%,#cfdbe8_100%)]";

// Desktop cards (photo header).
const desktopCards: { tag: string; title: string; image: string; alt: string; body: ReactNode }[] = [
  {
    tag: "Compliance",
    title: "Surplus food compliance",
    image: "compliance",
    alt: "Gloved hand holding a sealed tray of berries in a grocery aisle",
    body: (
      <>
        Why sealed ambient food is handled on a separate track — shelf-life,
        <br />
        traceability and jurisdiction-specific safety before any activation.
      </>
    ),
  },
  {
    tag: "Guide",
    title: "Surplus inventory management",
    image: "inventory",
    alt: "Warehouse worker checking stock on a tablet between shelving",
    body: (
      <>
        How to qualify, categorize and plan the disposition of excess, returned and
        <br />
        imperfect stock before value decays.
      </>
    ),
  },
  {
    tag: "Insight",
    title: "Private liquidation marketplaces",
    image: "liquidation",
    alt: "Two sellers reviewing orders in a small stockroom",
    body: (
      <>
        What makes a marketplace seller-controlled, and why that matters for brand
        <br />
        and margin.
      </>
    ),
  },
  {
    tag: "Guide",
    title: "Handling returned goods",
    image: "returns",
    alt: "Person packing a returned item into a cardboard box",
    body: "Turning returns into qualified, documented lots that buyers can trust.",
  },
];

// Mobile cards (gradient placeholder header).
const mobileCards: {
  tag: string;
  label: string;
  icon: string;
  iconSize: [number, number];
  ratio: string;
  title: ReactNode;
  body: ReactNode;
}[] = [
  {
    tag: "Guide",
    label: "Inventory",
    icon: "icon-inventory",
    iconSize: [36.667, 35.559],
    ratio: "aspect-[344/147.42]",
    title: (
      <>
        Surplus inventory
        <br />
        management
      </>
    ),
    body: (
      <>
        How to qualify, categorize and plan the
        <br />
        disposition of excess, returned and
        <br />
        imperfect stock before value decays.
      </>
    ),
  },
  {
    tag: "Insight",
    label: "Private markets",
    icon: "icon-lock",
    iconSize: [33.333, 36.667],
    ratio: "aspect-[344/193.5]",
    title: (
      <>
        Private liquidation
        <br />
        marketplaces
      </>
    ),
    body: (
      <>
        What makes a marketplace seller-
        <br />
        controlled, and why that matters for brand
        <br />
        and margin.
      </>
    ),
  },
  {
    tag: "Guide",
    label: "Returns",
    icon: "icon-return",
    iconSize: [30, 30],
    ratio: "aspect-[344/193.5]",
    title: "Handling returned goods",
    body: (
      <>
        Turning returns into qualified, documented
        <br />
        lots that buyers can trust.
      </>
    ),
  },
  {
    tag: "Compliance",
    label: "Food compliance",
    icon: "icon-food",
    iconSize: [40, 40],
    ratio: "aspect-[344/147.42]",
    title: "Surplus food compliance",
    body: (
      <>
        Why sealed ambient food is handled on a
        <br />
        separate track — shelf-life, traceability and
        <br />
        jurisdiction-specific safety before any
        <br />
        activation.
      </>
    ),
  },
];

function ArrowBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute top-3.5 flex size-[38px] items-center justify-center rounded-full bg-[#f7f3eef2] ${shadow} ${className}`}
    >
      <Image src={`${IMG}/icon-arrow-up-right.svg`} alt="" width={17} height={17} unoptimized />
    </span>
  );
}

const tagClass = "text-xs leading-[19.2px] font-semibold tracking-[0.72px] text-[#926016] uppercase";
const titleClass = "text-[19px] leading-[23.18px] font-semibold tracking-[-0.19px] text-[#0c2140]";
const bodyClass = "text-[13px] leading-[20.8px] text-[#4f647a]";

export default function Resources() {
  return (
    <section className="bg-white py-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:p-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[47.99px] px-[22px] md:gap-12 md:px-0">
        {/* Heading block */}
        <div className="flex max-w-[853px] flex-col gap-3 md:gap-4">
          <div className="flex items-center pt-1 md:gap-2 md:pt-0">
            <div className="flex w-[157.44px] items-center">
              <span className="w-[22.3px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                <span className="md:hidden">04</span>
                <span className="hidden md:inline">13</span>
              </span>
              <span className="mx-2.5 h-0.5 w-[46px] bg-[#d3dde8]" />
              <span className="text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">Insights</span>
            </div>
            <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
              Resources &amp; insights
            </p>
          </div>
          <h2 className="pt-[1.7px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px]">
            Practical context for
            <br className="md:hidden" /> surplus decisions.
          </h2>
          <p className="text-[17.6px] leading-[28.1px] text-[#4f647a] md:text-[21px] md:leading-[33.6px]">
            Plain-language guidance on managing
            <br className="md:hidden" /> surplus responsibly. These guides are
            <br className="md:hidden" /> in
            <br className="hidden md:block" /> preparation and will publish as they
            <br className="md:hidden" /> are reviewed.
          </p>
        </div>

        {/* Desktop grid */}
        <ul className="hidden gap-x-[31px] gap-y-8 md:grid md:grid-cols-2">
          {desktopCards.map((card) => (
            <li
              key={card.title}
              className="flex min-h-[405.5px] flex-col overflow-hidden rounded-2xl border border-[#d3dde8] bg-white"
            >
              <article className="flex flex-1 flex-col">
                <div className="relative h-[233px] shrink-0">
                  <Image
                    src={`${IMG}/${card.image}.webp`}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1440px) 608px, 45vw"
                    className="object-cover"
                  />
                  <ArrowBadge className="right-3.5" />
                </div>
                <div className="flex flex-col px-[26px] pt-6 pb-7">
                  <p className={`${tagClass} pb-[9px]`}>{card.tag}</p>
                  <h3 className={`${titleClass} pb-[9px]`}>{card.title}</h3>
                  <p className={bodyClass}>{card.body}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Mobile stack */}
        <ul className="flex flex-col gap-[22px] md:hidden">
          {mobileCards.map((card) => (
            <li key={card.label} className="overflow-hidden rounded-2xl border border-[#d3dde8] bg-white">
              <article>
                <div className={`relative flex items-center justify-center ${card.ratio} ${gradient}`}>
                  <div className="flex flex-col items-center gap-2 opacity-40">
                    <div className="flex size-10 items-center justify-center opacity-80">
                      <Image
                        src={`${IMG}/${card.icon}.svg`}
                        alt=""
                        width={card.iconSize[0]}
                        height={card.iconSize[1]}
                        unoptimized
                      />
                    </div>
                    <p className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] whitespace-nowrap text-[#0c2140] opacity-80">
                      {card.label}
                    </p>
                  </div>
                  <ArrowBadge className="right-[13.89px]" />
                </div>
                <div className="flex flex-col px-[26px] pt-6 pb-7">
                  <p className={`${tagClass} pb-[9px]`}>{card.tag}</p>
                  <h3 className={`${titleClass} pb-[9px]`}>{card.title}</h3>
                  <p className={`${bodyClass} pb-[15.5px]`}>{card.body}</p>
                  <p className="flex items-center gap-[7px] rounded-full border border-[#d3dde8] bg-[#e7edf4] px-[11px] py-[4.6px] text-xs leading-[19.2px] font-semibold tracking-[0.24px] whitespace-nowrap text-[#4f647a]">
                    <span className="size-2 shrink-0 rounded-sm bg-[#4f647a]" />
                    Guide in preparation
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
