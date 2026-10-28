import Image from "next/image";
import Link from "next/link";
import { hankenGrotesk } from "./hankenGrotesk";

const benefits = [
  {
    title: "Qualified stock",
    description: (
      <>
        Clear, documented lots reduce <br className="md:hidden" />
        ambiguity, disputes and <br className="hidden md:block" />
        avoidable <br className="md:hidden" />
        returns.
      </>
    ),
  },
  {
    title: "Governed private demand",
    description: (
      <>
        You decide which verified buyers are <br className="md:hidden" />
        ever shown an <br className="hidden md:block" />
        opportunity.
      </>
    ),
  },
  {
    title: "Defensible net outcomes",
    description: (
      <>
        Evaluate routes on expected net <br className="md:hidden" />
        recovery, not headline bids.
      </>
    ),
  },
];

export default function EnterpriseSellers() {
  return (
    <section
      id="enterprise-sellers"
      aria-labelledby="enterprise-sellers-heading"
      className={`${hankenGrotesk.variable} font-[family-name:var(--font-hanken)] bg-white px-4 pt-14 md:bg-[#fcfcff] md:px-24 md:py-14`}
    >
      <div className="mx-auto flex w-full max-w-[1211px] flex-col gap-7 md:flex-row md:gap-0">
        <div className="flex flex-col gap-[11.3px] rounded-[20px] bg-[#0c2140] px-[26px] pt-8 pb-[26px] md:min-w-0 md:shrink md:basis-[591px] md:gap-7 md:px-10 md:pt-[46px] md:pb-10">
          <div className="flex flex-col gap-[11.3px] md:max-w-[518px] md:gap-4">
            <p className="flex items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] text-[#45bca0] uppercase md:font-[family-name:var(--font-sora)]">
              <span className="w-[18.2px] text-white opacity-60">
                <span className="md:hidden">07</span>
                <span className="hidden md:inline">06</span>
              </span>
              <span aria-hidden="true" className="h-px w-7 bg-[#45bca0] opacity-50" />
              For enterprise sellers
            </p>
            <h2
              id="enterprise-sellers-heading"
              className="pt-[10.45px] text-[30.4px] leading-[33.44px] font-bold tracking-[-0.608px] text-white md:pt-0"
            >
              Protect margin, brand <br className="md:hidden" />
              and control.
            </h2>
            <p className="text-[18px] leading-[27.9px] text-[#c7d2e0]">
              <span className="md:hidden">
                For retailers, distributors, <br />
                manufacturers and inventory owners <br />
                who need to recover value without <br />
                exposing pricing, brand or channels.
              </span>
              <span className="hidden md:inline">
                For retailers, distributors, manufacturers and inventory <br />
                owners who need to recover value without exposing <br />
                pricing, brand or channels.
              </span>
            </p>
          </div>

          <ul className="flex flex-col gap-3.5 pt-[10.7px] md:max-w-[518px]">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <Image
                  src="/images/about/enterprise-sellers/check-icon.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-px shrink-0"
                />
                <p className="flex flex-col gap-[1.9px] pb-[0.9px] text-base leading-[24.8px]">
                  <span className="font-semibold text-white">{b.title}</span>
                  <span className="text-[#c7d2e0]">{b.description}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-3 pt-[14.69px] md:flex-row md:flex-wrap md:pt-[14.6px]">
            <Link
              href="#"
              className="flex min-h-12 items-center justify-center gap-[9px] rounded-full border border-[#955f22] bg-[#955f22] px-6 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white"
            >
              Request Enterprise Demo
              <Image
                src="/images/about/enterprise-sellers/arrow-right-icon.svg"
                alt=""
                width={18}
                height={18}
              />
            </Link>
            <Link
              href="#seller-control"
              className="flex min-h-12 items-center justify-center rounded-full border border-white/50 px-6 pt-[15px] pb-4 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white"
            >
              See seller controls
            </Link>
          </div>
        </div>

        <div className="relative aspect-[358/447.5] overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a,#0c2140)] md:aspect-auto md:min-h-[625px] md:min-w-0 md:shrink md:basis-[620px] md:bg-[linear-gradient(155deg,#14294a,#0c2140)]">
          <Image
            src="/images/about/enterprise-sellers/retail-apparel-rack-mobile.webp"
            alt="Clothing hanging on a retail rack"
            fill
            sizes="(min-width: 768px) 0px, 358px"
            className="object-cover md:hidden"
          />
          <Image
            src="/images/about/enterprise-sellers/retail-apparel-rack-desktop.webp"
            alt="Retail and apparel surplus recovery"
            fill
            sizes="(min-width: 768px) 620px, 0px"
            className="hidden object-cover md:block"
          />
        </div>
      </div>
    </section>
  );
}
