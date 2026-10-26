import Image from "next/image";
import Link from "next/link";

const A = "/images/home/capabilities";

type Card = {
  key: string;
  label: string;
  title: string;
  /** desktop: title + body are one block each; mobile: copy with per-line breaks */
  desktopBody: React.ReactNode;
  mobileTitle: React.ReactNode;
  mobileBody: React.ReactNode;
  photo: string;
  photoAlt: string;
  photoPosition: string;
  // desktop label icon
  dIcon: { src: string; w: number; h: number };
  // mobile placeholder
  mPlaceholder: { src: string; w: number; h: number; text: string };
  mIcon: { src: string; w: number; h: number };
  mPill: number;
  labelSize: string;
};

const cards: Card[] = [
  {
    key: "enterprise",
    label: "Surplus Enterprise",
    title: "Qualify and govern surplus stock.",
    desktopBody:
      "Document and qualify lots, set authorized disposition routes, and keep oversight of how, where and to whom surplus is offered.",
    mobileTitle: (
      <>
        Qualify and govern surplus
        <br />
        stock.
      </>
    ),
    mobileBody: (
      <>
        Document and qualify lots, set
        <br />
        authorized disposition routes, and
        <br />
        keep oversight of how, where and
        <br />
        to whom surplus is offered.
      </>
    ),
    photo: "enterprise-photo.webp",
    photoAlt: "Two warehouse colleagues reviewing stock on a laptop between storage racks",
    photoPosition: "object-top",
    dIcon: { src: "icon-enterprise-desktop.svg", w: 22, h: 20 },
    mPlaceholder: { src: "icon-documented-stock-mobile.svg", w: 36.6667, h: 35.5594, text: "Documented stock" },
    mIcon: { src: "icon-enterprise-mobile.svg", w: 11.6667, h: 12.8321 },
    mPill: 31.48,
    labelSize: "text-[12px]",
  },
  {
    key: "exchange",
    label: "Surplus Exchange",
    title: "Reach verified, approved buyers.",
    desktopBody:
      "Open seller-controlled private markets to eligibility-checked business demand, with access and offers governed by policy.",
    mobileTitle: (
      <>
        Reach verified, approved
        <br />
        buyers.
      </>
    ),
    mobileBody: (
      <>
        Open seller-controlled private
        <br />
        markets to eligibility-checked
        <br />
        business demand, with access and
        <br />
        offers governed by policy.
      </>
    ),
    photo: "exchange-photo.webp",
    photoAlt: "Business professionals discussing surplus buyers over a laptop",
    photoPosition: "object-[50%_52.7%]",
    dIcon: { src: "icon-exchange-desktop.svg", w: 24, h: 24 },
    mPlaceholder: { src: "icon-verified-buyers-mobile.svg", w: 36.6667, h: 33.5364, text: "Verified buyers" },
    mIcon: { src: "icon-exchange-mobile.svg", w: 12.8333, h: 11.6667 },
    mPill: 34.14,
    labelSize: "text-[12px]",
  },
  {
    key: "network",
    label: "Surplus Network",
    title: "Coordinate permitted disposition.",
    desktopBody: (
      <>
        Work with approved partners for lawful collection, logistics, redistribution and donation — without Zoiko
        owning stock or
        <br className="hidden lg:block" /> fleets.
      </>
    ),
    mobileTitle: (
      <>
        Coordinate permitted
        <br />
        disposition.
      </>
    ),
    mobileBody: (
      <>
        Work with approved partners for
        <br />
        lawful collection, logistics,
        <br />
        redistribution and donation —
        <br />
        without Zoiko owning stock or
        <br />
        fleets.
      </>
    ),
    photo: "network-photo.webp",
    photoAlt: "Warehouse workers in high-visibility vests handing over cardboard boxes",
    photoPosition: "object-center",
    dIcon: { src: "icon-network-desktop.svg", w: 19.9911, h: 21 },
    mPlaceholder: { src: "icon-permitted-routes-mobile.svg", w: 33.3333, h: 36.6667, text: "Permitted routes" },
    mIcon: { src: "icon-network-mobile.svg", w: 11.6615, h: 12.2501 },
    mPill: 34.14,
    labelSize: "text-[14px]",
  },
];

// Mobile card order follows the mobile design: Enterprise, Exchange, Network.
const mobileHeights = ["h-[294.3px]", "h-[294.3px]", "h-[319.98px]"];
const mobileAspects = ["aspect-[344/193.5]", "aspect-[344/215]", "aspect-[344/215]"];

function ArrowBadge() {
  return (
    <span className="absolute top-3.5 right-[13.71px] flex size-10 items-center justify-center rounded-[20px] bg-[rgba(247,243,238,0.95)] shadow-[0_1px_2px_0_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)] max-md:right-[14.3px]">
      <Image src={`${A}/icon-arrow-up-right.svg`} alt="" width={18} height={18} />
    </span>
  );
}

function DesktopCard({ card, wide }: { card: Card; wide?: boolean }) {
  return (
    <article
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-[#d3dde8] bg-white ${
        wide ? "md:col-span-2 md:min-h-[557px]" : "md:min-h-[615px]"
      }`}
    >
      <div className={`relative h-[294px] shrink-0 overflow-hidden ${wide ? "" : ""}`}>
        <Image
          src={`${A}/${card.photo}`}
          alt={card.photoAlt}
          fill
          sizes={wide ? "1249px" : "606px"}
          className={`object-cover ${card.photoPosition}`}
        />
        <ArrowBadge />
      </div>
      <div className="px-7 pt-[26px] pb-6">
        <div className="flex items-center gap-3 pb-2.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#f5e7c9]">
            <Image src={`${A}/${card.dIcon.src}`} alt="" width={card.dIcon.w} height={card.dIcon.h} />
          </span>
          <span className={`${card.labelSize} leading-[19.2px] font-semibold tracking-[0.96px] text-[#926016] uppercase`}>
            {card.label}
          </span>
        </div>
        <h3 className="mt-2 text-[28px] leading-[34.16px] font-semibold tracking-[-0.28px] text-[#1e2126]">
          {card.title}
        </h3>
        <p className={`${wide ? "pt-2" : "pt-[7.22px]"} pb-[18px] text-[18px] leading-[28.72px] text-[#4f647a]`}>
          {card.desktopBody}
        </p>
        <Link
          href="#"
          className={`flex items-center gap-[7.17px] text-[18px] leading-[28.72px] font-semibold text-[#926016] ${
            wide ? "" : "pt-[28.72px]"
          }`}
        >
          Learn more
          <Image src={`${A}/icon-arrow-right.svg`} alt="" width={16} height={16} />
        </Link>
      </div>
    </article>
  );
}

function MobileCard({ card, i }: { card: Card; i: number }) {
  return (
    <article className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-[#d3dde8] bg-white">
      <div
        className={`relative flex ${mobileAspects[i]} shrink-0 items-center justify-center overflow-hidden bg-[linear-gradient(140deg,#e8eef5_0%,#dbe5ef_55%,#cfdbe8_100%)]`}
      >
        <div className="flex flex-col items-center gap-2 opacity-40">
          <div className="flex opacity-80">
            <Image src={`${A}/${card.mPlaceholder.src}`} alt="" width={card.mPlaceholder.w} height={card.mPlaceholder.h} />
          </div>
          <p className="text-[12px] leading-[19.2px] font-semibold tracking-[0.48px] whitespace-nowrap text-[#0c2140] opacity-80">
            {card.mPlaceholder.text}
          </p>
        </div>
        <ArrowBadge />
      </div>
      <div className={`relative ${mobileHeights[i]} shrink-0`}>
        <div className="absolute inset-x-7 top-[26px] flex items-center gap-2 pb-2.5">
          <span className="pr-2.5">
            <span className="block h-[24.8px] rounded-[7px] bg-[#f5e7c9]" style={{ width: card.mPill }} />
          </span>
          <Image src={`${A}/${card.mIcon.src}`} alt="" width={card.mIcon.w} height={card.mIcon.h} />
          <span className="text-[12px] leading-[19.2px] font-semibold tracking-[0.96px] whitespace-nowrap text-[#926016] uppercase">
            {card.label}
          </span>
        </div>
        <h3 className="absolute inset-x-7 top-[60.06px] text-[20.1px] leading-[24.54px] font-semibold tracking-[-0.201px] text-[#0c2140]">
          {card.mobileTitle}
        </h3>
        <p
          className={`absolute inset-x-7 top-[109.86px] pb-[18px] ${
            card.key === "network" ? "pt-[7.375px]" : "pt-2"
          } text-[16.1px] leading-[25.7px] text-[#4f647a]`}
        >
          {card.mobileBody}
        </p>
        <Link
          href="#"
          className="absolute inset-x-7 bottom-[30.19px] flex items-center gap-[6.42px] text-[16.1px] leading-[25.7px] font-semibold text-[#926016]"
        >
          Learn more
          <Image src={`${A}/icon-arrow-right.svg`} alt="" width={16} height={16} />
        </Link>
      </div>
    </article>
  );
}

export default function Capabilities() {
  const [enterprise, exchange, network] = cards;
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="w-full bg-[#fcfcff] font-[family-name:var(--font-sora)] md:px-6 md:py-32 lg:px-24"
    >
      {/* ---------------- Mobile ---------------- */}
      <div className="flex flex-col items-start gap-[26px] px-[22px] pt-[72.01px] pb-[72px] md:hidden">
        <div className="flex w-full flex-col items-end gap-[19.99px]">
          <div className="relative h-[135.44px] w-full">
            <div className="absolute top-1 left-0 h-[20.8px] w-[192.97px]">
              <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                01
              </span>
              <span className="absolute top-[calc(50%-0.01px)] left-[29.13px] h-0.5 w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
              <span className="absolute top-[calc(50%-0.9px)] left-[85.13px] -translate-y-1/2 text-[13px] leading-[20.8px] font-bold tracking-[1.82px] whitespace-nowrap text-[#4f647a]">
                The platform
              </span>
            </div>
            <span className="absolute top-[13.5px] left-[192.97px] -translate-y-1/2 text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
              The platform
            </span>
            <h2 className="absolute inset-x-0 top-[40.79px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] whitespace-nowrap text-[#0c2140]">
              Three connected
              <br />
              capabilities. One
              <br />
              governed system.
            </h2>
          </div>
          <p className="w-full max-w-[548.45px] pt-3 text-[16.1px] leading-[25.7px] text-[#4f647a]">
            Qualification, demand and disposition
            <br />
            work together — so surplus moves
            <br />
            through one accountable platform rather
            <br />
            than three disconnected tools.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 pt-[21.99px]">
          {cards.map((c, i) => (
            <MobileCard key={c.key} card={c} i={i} />
          ))}
        </div>

        <div className="relative h-[113.19px] w-full rounded-xl border border-dashed border-[#d3dde8] bg-white">
          <span className="absolute top-3.5 left-4 flex size-[18px] items-center justify-center">
            <Image src={`${A}/icon-info.svg`} alt="" width={15} height={15} />
          </span>
          <p className="absolute top-[54.69px] left-11 -translate-y-1/2 text-[13px] leading-[20.8px] whitespace-nowrap text-[#4f647a]">
            Enterprise, Exchange and Network share
            <br />
            the same qualification, policy and evidence
            <br />
            backbone — the output of one stage
            <br />
            becomes the trusted input of the next.
          </p>
        </div>
      </div>

      {/* ---------------- Desktop ---------------- */}
      <div className="mx-auto hidden max-w-[1249px] flex-col gap-14 md:flex">
        <div className="mb-[-15.06px] flex flex-col">
          <div className="-mt-[10.74px] flex items-center py-2">
            <div className="relative flex h-[20.8px] w-[192.97px] shrink-0 items-center">
              <span className="w-[19.13px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">01</span>
              <span className="mr-[10px] ml-[10px] h-0.5 w-[46px] bg-[#d3dde8]" />
              <span className="text-[13px] leading-[20.8px] font-bold tracking-[1.82px] whitespace-nowrap text-[#4f647a]">
                The platform
              </span>
            </div>
            <span className="text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
              The platform
            </span>
          </div>
          <div className="mt-4 flex items-start justify-between gap-10">
            <h2
              id="capabilities-heading"
              className="max-w-[716.9px] pb-[0.535px] text-[44px] leading-[48px] font-semibold text-[#1e2126]"
            >
              Three connected capabilities.
              <br className="hidden lg:block" /> One governed system.
            </h2>
            <p className="w-[512px] shrink-0 pt-0 text-[20px] leading-[28.72px] text-[#4f647a]">
              Qualification, demand and disposition work together — so surplus moves through one accountable platform
              rather than three disconnected tools.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[26px]">
          <div className="grid grid-cols-2 gap-9">
            <DesktopCard card={enterprise} />
            <DesktopCard card={exchange} />
            <DesktopCard card={network} wide />
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-dashed border-[#d3dde8] bg-white px-4 py-3.5">
            <span className="flex size-[18px] shrink-0 items-center justify-center">
              <Image src={`${A}/icon-info.svg`} alt="" width={15} height={15} />
            </span>
            <p className="text-[13px] leading-[20.8px] text-[#4f647a]">
              Enterprise, Exchange and Network share the same qualification, policy and evidence backbone — the output
              of one stage becomes the trusted input of the next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
