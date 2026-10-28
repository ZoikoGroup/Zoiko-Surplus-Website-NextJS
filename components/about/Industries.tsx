import Image from "next/image";
import Link from "next/link";
import { hankenGrotesk } from "./hankenGrotesk";

const hanken = hankenGrotesk;

const A = "/images/about/industries";

type Industry = {
  label: React.ReactNode;
  alt: string;
  /** desktop photo */
  desktop: string;
  /** mobile photo; null renders the placeholder icon only (as in the design) */
  mobile: string | null;
};

const industries: Industry[] = [
  { label: "Electronics", alt: "Headphones, a smartwatch and a phone beside a laptop", desktop: "electronics.webp", mobile: "electronics.webp" },
  { label: "Apparel", alt: "Colourful shirts hanging on a clothing rail", desktop: "apparel.webp", mobile: "apparel.webp" },
  {
    label: "Home & Lifestyle",
    alt: "Modern living room furniture",
    desktop: "home-lifestyle-desktop.webp",
    mobile: "home-lifestyle-mobile.webp",
  },
  {
    label: (
      <>
        Industrial &<br className="md:hidden" /> Machinery
      </>
    ),
    alt: "Industrial machinery with a large valve wheel",
    desktop: "industrial.webp",
    mobile: null,
  },
  { label: "Healthcare", alt: "Healthcare professional with a stethoscope", desktop: "healthcare.webp", mobile: "healthcare-mobile.webp" },
  { label: "Food & Beverage", alt: "Shelves of fresh fruit and vegetables", desktop: "food.webp", mobile: "food.webp" },
  { label: "Transport", alt: "Freight truck on a mountain road", desktop: "transport.webp", mobile: "transport.webp" },
  { label: "Construction", alt: "Construction workers on a building site", desktop: "construction.webp", mobile: "construction.webp" },
  {
    label: (
      <>
        Energy &<br className="md:hidden" /> Infrastructure
      </>
    ),
    alt: "Wind turbines over farmland",
    desktop: "energy.webp",
    mobile: "energy-mobile.webp",
  },
  {
    label: "Other Industries",
    alt: "Large warehouse with tall storage racks",
    desktop: "other-industries.webp",
    mobile: "other-industries-mobile.webp",
  },
];


export default function Industries() {
  return (
    <section aria-labelledby="industries-heading" className={`w-full bg-[#f5f7fa] py-14 md:bg-[#fcfcff] md:px-8 md:py-24 lg:px-24 ${hanken.className}`}>
      <div className="mx-auto flex max-w-[1248px] flex-col gap-12 px-4 md:gap-14 md:px-0 md:pb-[59px]">
        {/* Heading block */}
        <div className="flex flex-col items-start gap-4 pt-1.5">
          {/* Mobile eyebrow */}
          <div className="relative h-[20.14px] w-[237.05px] text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:hidden">
            <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[#0c2140] opacity-50">01</span>
            <span className="absolute top-1/2 left-[28.2px] h-px w-7 -translate-y-1/2 bg-[#0f7a60] opacity-50" />
            <span className="absolute top-[calc(50%-0.57px)] left-[66.2px] -translate-y-1/2 whitespace-nowrap text-[#0f7a60]">
              Industries we serve
            </span>
          </div>
          {/* Desktop eyebrow */}
          <div className="hidden items-start py-2 font-[family-name:var(--font-sora)] md:flex">
            <div className="relative h-[21px] w-[75px] shrink-0">
              <span className="absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                01
              </span>
              <span className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-0.5 w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <div className="flex items-end gap-1">
              <span className="w-[86px] text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">Industries</span>
              <span className="text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
                we serve
              </span>
            </div>
          </div>

          <h2
            id="industries-heading"
            className="pt-[30.805px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]"
          >
            Designed for enterprise
            <br className="md:hidden" /> supply across sectors.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px]">
            One governed architecture spanning many
            <br className="md:hidden" /> industries — each activated separately by
            <br className="md:hidden" /> category, market and approval.
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-2 gap-3.5 md:grid-cols-5 md:gap-[18px]">
          {industries.map((item) => (
            <li key={item.alt} className="contents">
              <Link
                href="#"
                className="relative flex aspect-[172/229.33] items-end overflow-hidden rounded-2xl bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:aspect-[235.2/310]"
              >
                {item.mobile === null ? (
                  <span className="absolute inset-0 flex items-center justify-center md:hidden">
                    <Image src={`${A}/icon-industrial-mobile.svg`} alt="" width={26} height={26} />
                  </span>
                ) : item.mobile === item.desktop ? null : (
                  <Image
                    src={`${A}/${item.mobile}`}
                    alt={item.alt}
                    fill
                    sizes="172px"
                    className="object-cover md:hidden"
                  />
                )}
                <Image
                  src={`${A}/${item.desktop}`}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 236px, 172px"
                  className={`object-cover ${item.mobile === null || item.mobile !== item.desktop ? "hidden md:block" : ""}`}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,33,64,0)_38%,rgba(12,33,64,0.86)_100%)] md:bg-[linear-gradient(180deg,rgba(30,33,38,0)_50%,#1e2126_100%)]"
                />
                <span className="absolute top-2.5 right-2.5 flex size-[30px] items-center justify-center rounded-[15px] bg-white/90 md:right-[9.7px]">
                  <Image src={`${A}/icon-arrow-up-right.svg`} alt="" width={15} height={15} />
                </span>
                <span className="relative p-3.5 text-[14.7px] leading-[22.82px] font-semibold text-white whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
