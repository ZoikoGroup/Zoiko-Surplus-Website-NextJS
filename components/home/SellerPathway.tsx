import Image from "next/image";
import Link from "next/link";

const base = "/images/home/seller-pathway";

const points = [
  {
    icon: "icon-qualified-stock",
    w: 20.167,
    h: 19.558,
    title: "Qualified stock",
    desktop: ["Clear, documented lots reduce ambiguity, disputes and", "avoidable returns."],
    mobile: ["Clear, documented lots reduce", "ambiguity, disputes and avoidable", "returns."],
  },
  {
    icon: "icon-private-demand",
    w: 18.333,
    h: 20.167,
    title: "Governed private demand",
    desktop: ["You decide which verified buyers are ever shown an opportunity."],
    mobile: ["You decide which verified buyers", "are ever shown an opportunity."],
  },
  {
    icon: "icon-net-outcomes",
    w: 20.167,
    h: 11,
    title: "Defensible net outcomes",
    desktop: ["Evaluate routes on expected net recovery, not on headline bids."],
    mobile: ["Evaluate routes on expected net", "recovery, not on headline bids."],
  },
];

function Lines({ lines, brClass }: { lines: string[]; brClass: string }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 && <br className={brClass} />}
          {line}
        </span>
      ))}
    </>
  );
}

export default function SellerPathway() {
  return (
    <section className="bg-white px-[22px] py-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:px-6 md:py-14 lg:px-24">
      <div className="mx-auto flex max-w-[1248px] flex-col md:flex-row">
        {/* Dark content card */}
        <div className="overflow-clip rounded-[28px] bg-[#0c2140] md:min-h-[701px] md:flex-[589] md:rounded-[32px]">
          <div className="flex flex-col gap-3 px-7 pt-[31.5px] pb-7 md:gap-12 md:p-8 lg:p-[52px]">
            <div className="flex flex-col gap-3 md:gap-[11px]">
              <div className="flex flex-col gap-3 md:gap-4">
                {/* Eyebrow */}
                <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#17a185] uppercase md:hidden">
                  For enterprise sellers
                </p>
                <div className="hidden items-center gap-[7px] py-2 text-[13px] leading-[20.8px] tracking-[1.56px] uppercase md:flex">
                  <span className="w-[22px] font-black tracking-[1.82px] text-white">04</span>
                  <span aria-hidden="true" className="ml-[7px] h-0.5 w-[46px] bg-[#d3dde8]" />
                  <span className="ml-[5px] font-semibold text-white">
                    For <span className="text-[#17a185]">enterprise sellers</span>
                  </span>
                </div>

                <h2 className="pt-[0.96px] text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-white md:pt-[1.72px] md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px]">
                  Protect margin,
                  <br className="md:hidden" /> brand
                  <br className="hidden md:block" /> and control.
                </h2>
              </div>

              <p className="text-[17.6px] leading-[28.1px] text-[#a7bad0] md:pb-[0.69px] md:text-xl md:leading-[28.6px]">
                For retailers, distributors,
                <br className="md:hidden" /> manufacturers and inventory
                <br className="md:hidden" /> owners who need to recover
                <br className="md:hidden" /> value without exposing pricing,
                <br className="md:hidden" /> brand or channels.
              </p>
            </div>

            {/* Points */}
            <ul className="flex flex-col gap-4 pt-9 md:gap-6 md:pt-0">
              {points.map((p) => (
                <li key={p.title} className="flex items-start gap-3.5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[11px] bg-[rgba(23,161,133,0.16)]">
                    <Image src={`${base}/${p.icon}.svg`} alt="" width={p.w} height={p.h} />
                  </span>
                  <div className="-mt-px">
                    <h3 className="text-[17px] leading-[20.74px] font-semibold tracking-[-0.17px] text-white">
                      {p.title}
                    </h3>
                    <p className="pt-[3px] text-[13px] leading-[19.5px] text-[#a7bad0]">
                      <span className="md:hidden">
                        <Lines lines={p.mobile} brClass="" />
                      </span>
                      <span className="hidden md:inline">
                        <Lines lines={p.desktop} brClass="hidden lg:block" />
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-col items-start justify-center gap-[11.5px] pt-4 md:min-h-[64.9px] md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-y-3">
              <Link
                href="#"
                className="flex min-h-12 items-center justify-center gap-[7.5px] rounded-full border border-transparent bg-[#0c2140] px-[26px] pt-[13.5px] pb-3.5 text-[15px] leading-[18px] font-semibold text-white"
              >
                Request Enterprise Demo
                <Image src={`${base}/icon-arrow-right.svg`} alt="" width={18} height={18} />
              </Link>
              <Link
                href="#"
                className="text-[16.1px] leading-[25.7px] font-semibold text-[#17a185] md:text-lg md:leading-[28.72px]"
              >
                See seller controls
              </Link>
            </div>

            <p className="pt-[6.7px] text-[13px] leading-[20.8px] text-[#a7bad0] md:hidden">
              Outcomes depend on verified facts,
              <br /> applicable rules and the route chosen. No
              <br /> recovery value, sell-through rate or margin
              <br /> improvement is guaranteed.
            </p>
          </div>

          {/* Mobile image placeholder */}
          <div className="flex min-h-[260px] items-center justify-center bg-[linear-gradient(139.91deg,#123457_0%,#0c2140_60%,#06152c_100%)] py-[96.4px] md:hidden">
            <div className="flex flex-col items-center gap-2 opacity-40">
              <Image
                src={`${base}/icon-enterprise-stock.svg`}
                alt=""
                width={33.333}
                height={36.663}
                className="opacity-80"
              />
              <p className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] text-[#eaf1f8] opacity-80">
                Enterprise stock
              </p>
            </div>
          </div>
        </div>

        {/* Desktop photo */}
        <div className="relative hidden min-h-[701px] overflow-hidden rounded-[32px] md:block md:flex-[659]">
          <Image
            src={`${base}/enterprise-retail-store.webp`}
            alt="Shoppers and staff browsing clothing racks in a retail store"
            width={501}
            height={533}
            sizes="(min-width: 1440px) 659px, 50vw"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
