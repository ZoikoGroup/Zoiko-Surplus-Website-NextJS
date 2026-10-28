import Image from "next/image";
import Link from "next/link";
import { hankenGrotesk } from "./hankenGrotesk";

// Figma sets the copy in this section in Hanken Grotesk (variable weights); the desktop eyebrow uses Sora.
const hanken = hankenGrotesk;

const A = "/images/about/platform";

type Card = {
  key: string;
  label: string;
  /** the desktop and mobile frames break titles/bodies differently */
  desktopTitle: React.ReactNode;
  mobileTitle: React.ReactNode;
  desktopBody: React.ReactNode;
  mobileBody: React.ReactNode;
  photo: { desktop: string; mobile: string };
  alt: string;
};

const cards: Card[] = [
  {
    key: "enterprise",
    label: "Surplus Enterprise",
    desktopTitle: (
      <>
        Qualify and govern
        <br />
        surplus stock.
      </>
    ),
    mobileTitle: (
      <>
        Qualify and govern surplus
        <br />
        stock.
      </>
    ),
    desktopBody:
      "Documented lot qualification, authorized disposition planning, recovery analysis and workflow evidence — not a claim that the software owns or inspects inventory.",
    mobileBody: (
      <>
        Documented lot qualification, authorized
        <br />
        disposition planning, recovery analysis and
        <br />
        workflow evidence — not a claim that the
        <br />
        software owns or inspects inventory.
      </>
    ),
    photo: { desktop: "enterprise-photo-desktop.webp", mobile: "enterprise-photo-mobile.webp" },
    alt: "Warehouse worker checking stock against a tablet between storage racks",
  },
  {
    key: "exchange",
    label: "Surplus Exchange",
    desktopTitle: (
      <>
        Reach verified,
        <br className="hidden lg:block" /> approved buyers.
      </>
    ),
    mobileTitle: "Reach verified, approved buyers.",
    desktopBody:
      "Seller-controlled private marketplaces, eligibility-gated access and controlled offers where approved. Invitation, verification and purchasing authority stay separate.",
    mobileBody: (
      <>
        Seller-controlled private marketplaces,
        <br />
        eligibility-gated access and controlled offers
        <br />
        where approved. Invitation, verification and
        <br />
        purchasing authority stay separate.
      </>
    ),
    photo: { desktop: "exchange-photo.webp", mobile: "exchange-photo.webp" },
    alt: "Two business professionals shaking hands",
  },
  {
    key: "network",
    label: "Surplus Network",
    desktopTitle: "Coordinate permitted disposition.",
    mobileTitle: (
      <>
        Coordinate permitted
        <br />
        disposition.
      </>
    ),
    desktopBody:
      "Coordination of lawful collection, logistics, redistribution and donation without implying Zoiko operates its own warehousing or carrier fleet.",
    mobileBody: (
      <>
        Coordination of lawful collection, logistics,
        <br />
        redistribution and donation — without
        <br />
        implying Zoiko operates its own warehousing
        <br />
        or carrier fleet.
      </>
    ),
    photo: { desktop: "network-photo-desktop.webp", mobile: "network-photo-mobile.webp" },
    alt: "Warehouse workers in high-visibility vests handing over cardboard boxes",
  },
];

const shadow = "shadow-[0_1px_2px_0_rgba(12,33,64,0.06),0_1px_3px_0_rgba(12,33,64,0.08)]";
const labelCls =
  "flex h-[20.14px] items-center pb-[1.14px] text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#7e4e1c] uppercase";

function ArrowBadge({ right }: { right: string }) {
  return (
    <span
      className={`absolute top-3.5 z-10 flex size-10 items-center justify-center rounded-[20px] bg-white/95 ${shadow} ${right}`}
    >
      <Image src={`${A}/icon-arrow-up-right.svg`} alt="" width={18} height={18} />
    </span>
  );
}

function LearnMore() {
  return (
    <Link
      href="#"
      className="flex h-[32.1px] items-center gap-[6.5px] pt-[5.5px] text-[16px] leading-[24.8px] font-semibold text-[#7e4e1c]"
    >
      Learn more
      <Image src={`${A}/icon-arrow-right.svg`} alt="" width={18} height={18} />
    </Link>
  );
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] ${className}`}
    >
      <Image src={`${A}/${src}`} alt={alt} fill sizes="(min-width: 1024px) 608px, 100vw" className="object-cover" />
    </div>
  );
}

function DesktopCard({ card }: { card: Card }) {
  if (card.key === "network") {
    return (
      <article
        className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white max-lg:col-span-2 ${shadow}`}
      >
        <div className="flex flex-col gap-[7px] p-[26px]">
          <span className={labelCls}>{card.label}</span>
          <h3 className="pt-[0.7px] text-[28px] leading-[30.8px] font-semibold tracking-[-0.56px] text-[#0c2140]">
            {card.desktopTitle}
          </h3>
          <p className="max-w-[515px] text-[16px] leading-[24.8px] text-[#5a6b7b]">{card.desktopBody}</p>
          <LearnMore />
        </div>
        <div className="relative h-[312px] w-full overflow-hidden bg-[#f5f7fa]">
          <Photo src={card.photo.desktop} alt={card.alt} className="aspect-[368.66/230.41]" />
          <ArrowBadge right="right-[14.35px]" />
        </div>
      </article>
    );
  }

  return (
    <article className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white ${shadow}`}>
      <div className="relative w-full overflow-hidden bg-[#f5f7fa]">
        <Photo src={card.photo.desktop} alt={card.alt} className="aspect-[368.66/230.41]" />
        <ArrowBadge right="right-[13.84px]" />
      </div>
      <div className="flex flex-col gap-[6.7px] px-[26px] pt-8 pb-[26.09px]">
        <span className={labelCls}>{card.label}</span>
        <h3 className="pt-[0.7px] text-[28px] leading-[30.8px] font-semibold tracking-[-0.56px] text-[#0c2140]">
          {card.desktopTitle}
        </h3>
        <p className="text-[16px] leading-[24.8px] text-[#5a6b7b]">{card.desktopBody}</p>
        <LearnMore />
      </div>
    </article>
  );
}

function MobileCard({ card }: { card: Card }) {
  return (
    <article className={`flex w-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white ${shadow}`}>
      <div className="relative w-full overflow-hidden bg-[#f5f7fa]">
        <Photo src={card.photo.mobile} alt={card.alt} className="aspect-[356/222.5]" />
        <ArrowBadge right="right-3.5" />
      </div>
      <div className="flex flex-col gap-[6.7px] px-[18px] pt-6 pb-[18.09px]">
        <span className={labelCls}>{card.label}</span>
        <h3 className="text-[22.4px] leading-[24.64px] font-semibold tracking-[-0.448px] text-[#0c2140]">
          {card.mobileTitle}
        </h3>
        <p className="text-[16px] leading-[24.8px] text-[#5a6b7b]">{card.mobileBody}</p>
        <LearnMore />
      </div>
    </article>
  );
}

export default function Platform() {
  return (
    <section
      aria-label="The platform"
      className={`${hanken.className} w-full bg-[#f5f7fa] pt-28 pb-14 md:bg-[#fcfcff] md:px-6 md:py-24 lg:px-24`}
    >
      {/* ---------------- Mobile ---------------- */}
      <div className="flex flex-col gap-12 px-4 md:hidden">
        <div className="flex flex-col gap-4 pt-1.5">
          <div className="flex h-[20.14px] items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase">
            <span className="text-[#0c2140] opacity-50">06</span>
            <span aria-hidden className="h-px w-7 bg-[#0f7a60] opacity-50" />
            <span className="text-[#0f7a60]">The platform</span>
          </div>
          <h2 className="pt-[30.8px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] text-[#0c2140]">
            Three interdependent
            <br />
            solutions.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b]">
            One governed system across enterprise
            <br />
            supply, qualified demand and approved
            <br />
            recovery — described as designed
            <br />
            architecture, not live operations.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {cards.map((c) => (
            <MobileCard key={c.key} card={c} />
          ))}
        </div>
      </div>

      {/* ---------------- Desktop ---------------- */}
      <div className="mx-auto hidden max-w-[1240px] flex-col gap-12 md:flex">
        <div className="flex flex-col gap-4 pt-1.5">
          <div className="flex items-start py-2">
            <div className="relative h-[21px] w-[75px] shrink-0">
              <span className="absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 font-[family-name:var(--font-sora)] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                05
              </span>
              <span className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-0.5 w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <div className="flex items-baseline gap-1 pt-[5px]">
              <span className="font-[family-name:var(--font-sora)] text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">
                The
              </span>
              <span className="font-[family-name:var(--font-sora)] text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
                platform
              </span>
            </div>
          </div>
          <h2 className="text-[44px] leading-[48.4px] font-bold tracking-[-0.88px] text-[#0c2140]">
            Three interdependent solutions.
          </h2>
          <p className="max-w-[1186px] text-[20px] leading-[26px] text-[#5a6b7b]">
            One governed system across enterprise supply, qualified demand and approved recovery — described as designed
            architecture, not live operations.
          </p>
        </div>
        <div className="grid grid-cols-2 items-stretch gap-6 lg:grid-cols-[repeat(2,minmax(0,1fr))_minmax(0,2.0822fr)]">
          {cards.map((c) => (
            <DesktopCard key={c.key} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
