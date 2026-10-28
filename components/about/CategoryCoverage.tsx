import Image from "next/image";
import Link from "next/link";
import { hankenGrotesk } from "./hankenGrotesk";

const A = "/images/about/category-coverage";
const hanken = hankenGrotesk.className;

type Desktop = {
  key: string;
  title: string;
  desc: string;
  photo: string;
  alt: string;
  badge: string;
  badgeClass: string;
  dotClass: string;
  badgeTextClass: string;
  cardClass: string;
  gradientFrom: string;
  inset: string; // text strip height + horizontal padding
  sizeClass: string;
};

const desktop: Desktop[] = [
  {
    key: "apparel",
    title: "Apparel & Footwear",
    desc: "UK-focused B2B apparel and footwear resale marketplace.",
    photo: "apparel-footwear-desktop.webp",
    alt: "Shoppers browsing a footwear and apparel retail floor with a mannequin",
    badge: "Proposed first pilot",
    badgeClass: "border-[#f0c4ba] bg-[#f5e7c9]",
    dotClass: "bg-[#926016]",
    badgeTextClass: "text-[#845212]",
    cardClass: "border-white md:col-span-2",
    gradientFrom: "from-[64%] from-[rgba(36,36,36,0.18)]",
    inset: "h-[101px] px-12",
    sizeClass: "h-[320px]",
  },
  {
    key: "industrial",
    title: "Industrial & Business Goods",
    desc: "Regulated materials, technical product controls and buyer-capacity review.",
    photo: "industrial-business-goods-desktop.webp",
    alt: "Colleagues reviewing stock between industrial storage shelves",
    badge: "Planned, if approved",
    badgeClass: "border-[#d3dde8] bg-[#e7edf4]",
    dotClass: "bg-[#4f647a]",
    badgeTextClass: "text-[#4f647a]",
    cardClass: "border-[#d3dde8]",
    gradientFrom: "from-[45.628%] from-[rgba(36,36,36,0.16)]",
    inset: "h-[107px] px-[18px]",
    sizeClass: "h-[319px]",
  },
  {
    key: "electronics",
    title: "Consumer  Electronics",
    desc: "Condition, data wiping, electrical/regulatory and recall controls; no implied live trade.",
    photo: "consumer-electronics.webp",
    alt: "Headphones, smart watch and a phone on a light desk",
    badge: "Not yet activated",
    badgeClass: "border-[#d3dde8] bg-[#e7edf4]",
    dotClass: "bg-[#4f647a]",
    badgeTextClass: "text-[#4f647a]",
    cardClass: "border-[#d3dde8]",
    gradientFrom: "from-[45.628%] from-[rgba(36,36,36,0.16)]",
    inset: "h-[107px] px-[18px]",
    sizeClass: "h-[280px]",
  },
  {
    key: "food",
    title: "Food & Grocery",
    desc: "Ensure food safety, shelf-life, and traceability compliance.",
    photo: "food-grocery-desktop.webp",
    alt: "Shopper checking a package in a fresh produce aisle",
    badge: "Separate approval",
    badgeClass: "border-[#d3dde8] bg-[#e6edf4]",
    dotClass: "bg-[#1e2126]",
    badgeTextClass: "text-[#1e2126]",
    cardClass: "border-[#d3dde8]",
    gradientFrom: "from-[45.628%] from-[rgba(36,36,36,0.16)]",
    inset: "h-[107px] px-[18px]",
    sizeClass: "h-[280px]",
  },
  {
    key: "home",
    title: "Home & Lifestyle",
    desc: "Condition, origin, lawful resale and relevant safety notices.",
    photo: "home-lifestyle-desktop.webp",
    alt: "Bright living room with a sofa, cushions and a yellow artwork",
    badge: "Planned, if approved",
    badgeClass: "border-[#d3dde8] bg-[#e7edf4]",
    dotClass: "bg-[#4f647a]",
    badgeTextClass: "text-[#4f647a]",
    cardClass: "border-[#d3dde8]",
    gradientFrom: "from-[45.628%] from-[rgba(36,36,36,0.16)]",
    inset: "h-[107px] px-[18px]",
    sizeClass: "h-[280px]",
  },
];

type Mobile = {
  key: string;
  label: string;
  title: React.ReactNode;
  desc: string[];
  photo?: string;
  alt: string;
  thumbW: number;
  badge: string;
  badgeBg: string;
  badgeText: string;
  dot: string;
};

const mobile: Mobile[] = [
  {
    key: "apparel",
    label: "Apparel & Footwear",
    title: "Apparel & Footwear",
    desc: [
      "Illustrative proposed first",
      "seller-private B2B activation;",
      "active markets disclosed only",
      "after approved launch.",
    ],
    photo: "apparel-footwear-mobile.webp",
    alt: "Colourful folded garments on a rail",
    thumbW: 104.86,
    badge: "Proposed pilot",
    badgeBg: "bg-[#dcf3ed]",
    badgeText: "text-[#0f7a60]",
    dot: "bg-[#0f7a60]",
  },
  {
    key: "food",
    label: "Food & Grocery",
    title: "Food & Grocery",
    desc: [
      "Sealed ambient foods require",
      "separate safety, shelf-life and",
      "traceability sign-off before",
      "activation.",
    ],
    photo: "food-grocery-mobile.webp",
    alt: "Fresh produce on market shelves",
    thumbW: 112.31,
    badge: "Safety-gated",
    badgeBg: "bg-[#f4e7d6]",
    badgeText: "text-[#7e4e1c]",
    dot: "bg-[#7e4e1c]",
  },
  {
    key: "electronics",
    label: "Consumer Electronics",
    title: "Consumer Electronics",
    desc: [
      "Condition, data wiping,",
      "electrical/regulatory and",
      "recall controls; no implied",
      "live trade.",
    ],
    photo: "consumer-electronics.webp",
    alt: "Headphones, smart watch and a phone on a light desk",
    thumbW: 121.58,
    badge: "Overview",
    badgeBg: "bg-[#eef1f5]",
    badgeText: "text-[#3e4b59]",
    dot: "bg-[#3e4b59]",
  },
  {
    key: "home",
    label: "Home & Lifestyle",
    title: "Home & Lifestyle",
    desc: [
      "Condition, origin, lawful",
      "resale and relevant",
      "safety notices.",
    ],
    photo: "home-lifestyle-mobile.webp",
    alt: "Green velvet sofa in a bright room",
    thumbW: 150.11,
    badge: "Overview",
    badgeBg: "bg-[#eef1f5]",
    badgeText: "text-[#3e4b59]",
    dot: "bg-[#3e4b59]",
  },
  {
    key: "industrial",
    label: "Industrial & Business Goods",
    title: (
      <>
        Industrial &amp; Business
        <br />
        Goods
      </>
    ),
    desc: [
      "Regulated materials,",
      "technical product controls",
      "and buyer-capacity review.",
    ],
    alt: "",
    thumbW: 131.22,
    badge: "Overview",
    badgeBg: "bg-[#eef1f5]",
    badgeText: "text-[#3e4b59]",
    dot: "bg-[#3e4b59]",
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

function DesktopCard({ c }: { c: Desktop }) {
  return (
    <Link
      href="#"
      className={`relative block overflow-hidden rounded-2xl border bg-white ${c.sizeClass} ${c.cardClass}`}
    >
      <Image
        src={`${A}/${c.photo}`}
        alt={c.alt}
        fill
        sizes={c.key === "apparel" ? "820px" : "395px"}
        className="object-cover"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${c.gradientFrom} to-[#242424]`}
      />
      <div className="absolute inset-x-3.5 top-3.5 flex items-start justify-between">
        <span
          className={`flex items-center gap-[7px] rounded-full border px-[11px] pt-[4.5px] pb-[4.69px] ${c.badgeClass}`}
        >
          <span className={`size-2 rounded-[4px] ${c.dotClass}`} />
          <span
            className={`text-[12px] leading-[19.2px] font-semibold tracking-[0.24px] whitespace-nowrap ${c.badgeTextClass}`}
          >
            {c.badge}
          </span>
        </span>
        <span className="flex size-[38px] items-center justify-center rounded-[19px] bg-[rgba(247,243,238,0.92)]">
          <Image
            src={`${A}/arrow-up-right-desktop.svg`}
            alt=""
            width={18}
            height={18}
          />
        </span>
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col justify-center gap-[4.795px] bg-[rgba(255,255,255,0.08)] py-4 ${c.inset}`}
      >
        <h3 className="text-[20.8px] leading-[25.38px] font-semibold tracking-[-0.208px] whitespace-pre text-white">
          {c.title}
        </h3>
        <p
          className={`${c.key === "apparel" ? "max-w-[405.68px]" : "max-w-[306px]"} pb-[0.6px] text-[13px] leading-[20.8px] text-white/88`}
        >
          {c.desc}
        </p>
      </div>
    </Link>
  );
}

export default function CategoryCoverage() {
  return (
    <section
      aria-labelledby="category-coverage-heading"
      className={`w-full bg-[#f5f7fa] font-[family-name:var(--font-sora)] md:bg-[#fcfcff]`}
    >
      {/* ---------------- Mobile ---------------- */}
      <div
        className={`${hanken} mx-auto flex max-w-[1240px] flex-col gap-7 px-4 pt-28 pb-14 md:hidden`}
      >
        <div className="flex w-full flex-col items-start gap-4 pt-1.5">
          <div className="relative h-[20.14px] w-[234.55px]">
            <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#0c2140] uppercase opacity-50">
              11
            </span>
            <span className="absolute top-[calc(50%-0.01px)] left-[28.2px] h-px w-7 -translate-y-1/2 bg-[#0f7a60] opacity-50" />
            <span className="absolute top-[calc(50%-0.57px)] left-[66.2px] -translate-y-1/2 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] whitespace-nowrap text-[#0f7a60] uppercase">
              Category coverage
            </span>
          </div>
          <h2 className="pt-[31.11px] pb-[0.72px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140]">
            Different categories,
            <br />
            different rules —
            <br />
            activated separately.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b]">
            Coverage reflects what is designed, planned
            <br />
            and proposed. A category shown here is not
            <br />
            automatically live in your market.
          </p>
        </div>

        <ul className="flex flex-col gap-6 pt-5">
          {mobile.map((c) => (
            <li
              key={c.key}
              className="relative aspect-[358/268.5] w-full rounded-2xl"
            >
              <Link
                href="#"
                aria-label={c.label}
                className="absolute inset-0 block"
              >
                <span className="absolute inset-0 bg-gradient-to-b from-[35%] from-[rgba(12,33,64,0)] to-[rgba(12,33,64,0.8)]" />
                <span className="absolute inset-x-0 bottom-[-0.64px] flex items-end">
                  <span
                    className="relative mb-[0.64px] block shrink-0 overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)]"
                    style={{
                      width: `${(c.thumbW / 358) * 100}%`,
                      aspectRatio: "4 / 3",
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={`${A}/placeholder-image-mobile.svg`}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </span>
                    {c.photo && (
                      <Image
                        src={`${A}/${c.photo}`}
                        alt={c.alt}
                        fill
                        sizes="152px"
                        className="object-cover"
                      />
                    )}
                  </span>
                  <span className="flex flex-col items-start gap-[2.7px] px-[18px] pt-[23.5px] pb-[18px]">
                    <span
                      className={`flex items-center gap-[7px] rounded-full px-[11px] py-[5px] ${c.badgeBg}`}
                    >
                      <span className={`size-[7px] rounded-[3.5px] ${c.dot}`} />
                      <span
                        className={`text-[12px] leading-3 font-semibold tracking-[0.36px] whitespace-nowrap ${c.badgeText}`}
                      >
                        {c.badge}
                      </span>
                    </span>
                    <span className="block pt-[7.3px] text-[17.6px] leading-[19.36px] font-semibold tracking-[-0.352px] whitespace-nowrap text-white">
                      {c.title}
                    </span>
                    <span className="block pb-[0.53px] text-[14.1px] leading-[21.82px] whitespace-nowrap text-white/85">
                      <Lines lines={c.desc} />
                    </span>
                  </span>
                </span>
                <span className="absolute right-3.5 -bottom-3.5 flex h-10 w-[18px] items-center justify-center rounded-[14.5px] bg-white/95 shadow-[0_1px_2px_0_rgba(12,33,64,0.06),0_1px_3px_0_rgba(12,33,64,0.08)]">
                  <Image
                    src={`${A}/arrow-up-right-mobile.svg`}
                    alt=""
                    width={18}
                    height={18}
                    className="shrink-0"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col items-start justify-center gap-3">
          {["Explore Category Overviews", "Check Market Availability"].map(
            (t) => (
              <Link
                key={t}
                href="#"
                className="flex h-12 min-h-12 items-center justify-center gap-[9px] rounded-full border border-[#d4d8de] bg-white px-6 text-center text-[15px] leading-[15px] font-semibold whitespace-nowrap text-[#0c2140]"
              >
                {t}
                <Image
                  src={`${A}/arrow-right.svg`}
                  alt=""
                  width={18}
                  height={18}
                />
              </Link>
            ),
          )}
        </div>
      </div>

      {/* ---------------- Desktop ---------------- */}
      <div className="hidden px-8 py-24 md:block lg:px-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-14">
          <div className="flex flex-col items-start gap-4">
            <div className="flex h-[21px] w-[348px] items-center">
              <span className="w-[21.78px] shrink-0 pt-[1.8px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">
                10
              </span>
              <span className="mx-2.5 mt-[1.8px] h-0.5 w-[46px] shrink-0 bg-[#d3dde8]" />
              <span className="text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
                Category coverage
              </span>
            </div>
            <h2
              id="category-coverage-heading"
              className="max-w-[1201px] text-[44px] leading-[49.28px] font-semibold tracking-[-0.66px] text-[#1e2126]"
            >
              Different categories, different rules activated separately.
            </h2>
            <p className="max-w-[996px] text-[20px] leading-[33.6px] text-[#4f647a]">
              Coverage reflects what is designed, planned and proposed. A
              category shown here is not automatically live in your market.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {desktop.map((c) => (
              <DesktopCard key={c.key} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
