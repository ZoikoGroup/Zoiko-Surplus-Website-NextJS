import Image from "next/image";
import Link from "next/link";

const btn = "flex min-h-12 items-center justify-center rounded-full border px-[26px] text-[15px] leading-[18px] font-semibold whitespace-nowrap";

export default function ClosingCta() {
  return (
    <section className="bg-[#f2f5f9] px-[22px] py-[72px] font-[family-name:var(--font-sora)] md:bg-[#fcfcff] md:px-6 md:pt-0 md:pb-12">
      <div className="relative mx-auto flex max-w-[1392px] flex-col items-center gap-3 overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#123457_0%,#0c2140_65%,#06152c_100%)] px-6 pt-[43.32px] pb-11 shadow-[0_2px_4px_rgba(36,32,39,0.06),0_30px_60px_-28px_rgba(52,33,63,0.45)] md:gap-[11px] md:rounded-[48px] md:bg-none md:px-10 md:py-28 md:shadow-none lg:px-24 lg:py-[180px]">
        {/* Desktop photo background */}
        <Image
          src="/images/home/closing-cta/background-delivery.webp"
          alt=""
          fill
          sizes="1392px"
          className="hidden object-cover md:block"
        />
        <div aria-hidden className="absolute inset-0 hidden bg-[rgba(12,33,64,0.48)] md:block" />

        {/* Mobile watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[6.58%] top-[95.18%] flex justify-center text-[62.4px] leading-[49.92px] font-bold whitespace-nowrap text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] md:hidden"
        >
          SURPLUS
        </div>

        <h2 className="relative max-w-[425.7px] text-center text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-white md:max-w-[935px] md:text-5xl md:leading-[1.0] md:tracking-[-0.66px] lg:text-[64px] lg:leading-[64px]">
          Turn surplus into
          <br /> measurable,
          <br className="md:hidden" /> defensible
          <br /> outcomes.
        </h2>
        <p className="relative max-w-[643.8px] text-center text-[16.1px] leading-[25.7px] text-[#a7bad0] md:hidden">
          Qualify inventory, reach approved
          <br /> buyers, and prove what happened —
          <br /> on one governed platform, activated
          <br /> responsibly market by market.
        </p>

        <div className="relative flex flex-col items-center justify-center gap-3 pt-4 md:flex-row md:flex-wrap md:pt-[16.6px]">
          <Link
            href="#"
            className={`${btn} gap-[7.5px] border-transparent bg-[#d7a24c] text-[#0c2140] md:bg-[#926016] md:text-white`}
          >
            Request Enterprise Demo
            <Image src="/images/home/closing-cta/icon-arrow-navy.svg" alt="" width={18} height={18} className="md:hidden" />
            <Image src="/images/home/closing-cta/icon-arrow-white.svg" alt="" width={18} height={18} className="hidden md:block" />
          </Link>
          <Link
            href="#"
            className={`${btn} border-[rgba(243,238,240,0.4)] text-[#eaf1f8] md:bg-white md:text-[#1e2126]`}
          >
            Become a Verified Buyer
          </Link>
        </div>
      </div>
    </section>
  );
}
