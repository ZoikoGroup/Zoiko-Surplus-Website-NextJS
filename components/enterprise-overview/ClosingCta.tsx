import Image from "next/image";

const BASE = "/images/enterprise-overview/closing-cta";

export default function ClosingCta() {
  return (
    <section className="px-4 font-[family-name:var(--font-hanken)] md:px-6 md:py-12 md:font-[family-name:var(--font-sora)]">
      {/* Desktop */}
      <div className="relative mx-auto hidden max-w-[1392px] flex-col items-center overflow-clip rounded-[48px] px-24 py-[180px] md:flex">
        <Image
          src={`${BASE}/meeting-team-desktop.webp`}
          alt=""
          fill
          sizes="(min-width: 1440px) 1392px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[rgba(12,33,64,0.48)]" />
        <div className="relative flex w-full flex-col items-center gap-[11px]">
          <h2 className="w-[935px] max-w-full text-center text-[64px] leading-[64px] font-semibold tracking-[-0.66px] text-white">
            Discuss your surplus
            <br />
            workflow with our
            <br />
            enterprise team.
          </h2>
          <div className="flex h-[64.6px] w-full flex-wrap items-start justify-center gap-3 pt-[16.6px]">
            <a
              href="/contact"
              className="flex min-h-[48px] items-center justify-center gap-[7.5px] rounded-full border border-transparent bg-[#926016] px-[26px] text-[15px] leading-[18px] font-semibold whitespace-nowrap text-white"
            >
              Request Enterprise Demo
              <Image src={`${BASE}/arrow-right-icon-desktop.svg`} alt="" width={18} height={18} />
            </a>
            <a
              href="#"
              className="flex min-h-[48px] items-center justify-center rounded-full border border-[rgba(243,238,240,0.8)] px-[26px] text-[15px] leading-[18px] font-semibold whitespace-nowrap text-white"
            >
              Disposition Planning
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative mx-auto flex h-[580px] max-w-[358px] flex-col items-center gap-[13.2px] overflow-clip rounded-[20px] px-5 pt-[113.1px] pb-12 md:hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[66px] bottom-0 bg-gradient-to-b from-[rgba(12,33,64,0.78)] to-[rgba(12,33,64,0.84)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[66px] h-[134.12px] overflow-hidden bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)]"
        >
          <Image
            src={`${BASE}/boardroom-mobile.webp`}
            alt=""
            width={716}
            height={477}
            className="absolute top-[-38.89%] left-0 h-[177.78%] w-full max-w-none"
          />
        </div>
        <h2 className="relative pb-[0.7px] text-center text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-white">
          Discuss your surplus
          <br />
          workflow with our
          <br />
          enterprise team.
        </h2>
        <p className="relative text-center text-[18px] leading-[27.9px] whitespace-nowrap text-white/85">
          We’ll walk through qualification, seller
          <br />
          controls, disposition planning and
          <br />
          evidence for your markets and
          <br />
          categories. No outcome, pricing or
          <br />
          response-time promises are made
          <br />
          here.
        </p>
        <div className="relative flex w-full flex-col items-center justify-center gap-3 pt-[14.81px]">
          <a
            href="/contact"
            className="flex h-12 items-center justify-center gap-[9px] rounded-full border border-[#955f22] bg-[#955f22] px-6 text-[15px] leading-[15px] font-semibold text-white"
          >
            Request Enterprise Demo
            <Image src={`${BASE}/arrow-right-icon-desktop.svg`} alt="" width={18} height={18} />
          </a>
          <a
            href="#"
            className="flex h-12 items-center justify-center rounded-full border border-white/50 px-6 text-[15px] leading-[15px] font-semibold text-white"
          >
            Disposition Planning
          </a>
        </div>
      </div>
    </section>
  );
}
