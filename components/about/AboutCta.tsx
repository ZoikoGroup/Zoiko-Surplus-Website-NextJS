import Image from "next/image";

export default function AboutCta() {
  return (
    <section className="bg-[#fcfcff] px-4 font-[family-name:var(--font-sora)] max-md:bg-transparent md:px-6 md:py-12">
      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-[1392px] flex-col items-center overflow-clip rounded-[48px] px-24 py-[180px] md:flex">
        <Image
          src="/images/about/cta/delivery-driver-desktop.webp"
          alt=""
          fill
          sizes="(min-width: 1440px) 1392px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[rgba(12,33,64,0.48)]" />
        <div className="relative flex w-full flex-col items-center gap-[11px]">
          <h2 className="w-[935px] max-w-full text-center text-[64px] leading-[64px] font-semibold tracking-[-0.66px] text-white">
            Turn surplus into<br />measurable, defensible<br />outcomes.
          </h2>
          <div className="flex flex-wrap items-start justify-center gap-3 pt-[16.6px]">
            <a
              href="/contact"
              className="flex min-h-[48px] items-center justify-center gap-[7.5px] rounded-full border border-transparent bg-[#926016] px-[26px] text-[15px] leading-[18px] font-semibold text-white"
            >
              Request Enterprise Demo
              <Image src="/images/about/cta/arrow-right-icon.svg" alt="" width={18} height={18} />
            </a>
            <a
              href="/verified-buyer"
              className="flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(243,238,240,0.4)] bg-white px-[26px] text-[15px] leading-[18px] font-semibold text-[#1e2126]"
            >
              Become a Verified Buyer
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative mx-auto flex h-[580px] max-w-[358px] flex-col items-center gap-[13.3px] overflow-clip rounded-[20px] px-5 pt-[169.11px] pb-12 md:hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[122px] bottom-0 bg-gradient-to-b from-[rgba(12,33,64,0.78)] to-[rgba(12,33,64,0.84)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[122px] h-[134px] overflow-hidden bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)]"
        >
          <Image
            src="/images/about/cta/construction-site-mobile.webp"
            alt=""
            width={358}
            height={237}
            className="absolute top-[-38.33%] left-0 h-[176.67%] w-full max-w-none"
          />
        </div>
        <h2 className="relative text-center text-[25px] leading-[33.63px] font-semibold whitespace-nowrap tracking-[-0.608px] text-white">
          Turn surplus into
          <br />
          measurable, defensible
          <br />
          outcomes.
        </h2>
        <p className="relative text-center text-[14px] leading-[27.9px] whitespace-nowrap text-white/85">
          Talk to our team about governed
          <br />
          enterprise surplus pathways, verified
          <br />
          demand and category-specific
          <br />
          requirements.
        </p>
        <div className="relative flex w-full flex-col items-center justify-center gap-3 pt-[14.7px]">
          <a
            href="/contact"
            className="flex h-12 items-center justify-center gap-[9px] rounded-full border border-[#955f22] bg-[#955f22] px-6 text-[15px] leading-[15px] font-semibold text-white"
          >
            Request Enterprise Demo
            <Image src="/images/about/cta/arrow-right-icon.svg" alt="" width={18} height={18} />
          </a>
          <a
            href="/verified-buyer"
            className="flex h-12 items-center justify-center rounded-full border border-white/50 px-6 text-[15px] leading-[15px] font-semibold text-white"
          >
            Become a Verified Buyer
          </a>
        </div>
      </div>
    </section>
  );
}
