import Image from "next/image";
import Link from "next/link";

const IMG = "/images/enterprise-overview/governed-by-design";

const buttonText = "text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white";

export default function GovernedByDesign() {
  return (
    <section
      id="governed-by-design"
      className="px-4 font-[family-name:var(--font-hanken)] md:bg-[#fcfcff] md:px-6 md:py-12 xl:px-24"
    >
      <div className="mx-auto flex flex-col items-center justify-center lg:flex-row">
        {/* Text card */}
        <div className="relative flex w-full flex-col overflow-clip rounded-[20px] shadow-[0_10px_30px_-14px_rgba(12,33,64,0.22)] md:w-[591px] md:max-w-full md:shrink md:gap-7 md:overflow-visible md:bg-[#0c2140] md:px-10 md:pt-[46px] md:pb-10 md:shadow-none">
          {/* Mobile background: photo strip + horizontal shade */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 aspect-[358/153.16] overflow-hidden bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:hidden"
          >
            <Image
              src={`${IMG}/retail-surplus-photo-mobile.webp`}
              alt=""
              width={358}
              height={237}
              sizes="358px"
              className="absolute top-[-27.3%] left-0 h-[154.59%] w-full max-w-none"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,27,54,0.94)_0%,rgba(10,27,54,0.8)_46%,rgba(10,27,54,0.3)_100%)] md:hidden"
          />

          <div className="relative flex min-w-[358px] max-w-[560px] flex-col gap-[11.3px] px-[26px] pt-8 pb-[26px] md:min-w-0 md:max-w-none md:gap-4 md:p-0">
            {/* Eyebrow */}
            <div className="relative h-[20.14px] w-[232.09px] text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:w-[298px]">
              <span className="absolute top-1/2 left-0 w-[15.58px] -translate-y-1/2 text-[#0c2140] opacity-50 md:left-[0.5px] md:w-[28px] md:font-[family-name:var(--font-sora)] md:text-white md:opacity-60">
                <span className="md:hidden">—</span>
                <span className="hidden md:inline">12</span>
              </span>
              <span className="absolute top-[calc(50%-0.01px)] left-[25.58px] h-px w-[28px] -translate-y-1/2 bg-[#45bca0] opacity-50 md:left-[28.2px] md:top-1/2" />
              <span className="absolute top-[calc(50%-0.57px)] left-[63.58px] -translate-y-1/2 whitespace-nowrap text-[#45bca0] md:top-[calc(50%-0.97px)] md:left-[66.5px]">
                Governed by design
              </span>
            </div>

            <div className="flex flex-col gap-0 md:gap-4">
              <h2 className="pt-[5.56px] pb-[0.72px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-white md:p-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]">
                Structure, control and
                <br />
                evidence — in one
                <br />
                workflow.
              </h2>
              <p className="mt-[11.3px] text-[18px] leading-[27.9px] whitespace-nowrap text-white/85 md:mt-0 md:whitespace-normal">
                <span className="md:hidden">
                  Seller-authored rules, reviewer
                  <br />
                  checkpoints and an auditable trail,
                  <br />
                  from qualification to resolved
                  <br />
                  outcome.
                </span>
                <span className="hidden md:inline">
                  Seller-authored rules, reviewer checkpoints and an
                  <br className="hidden min-[1440px]:block" />
                  <span className="min-[1440px]:hidden"> </span>
                  auditable trail, from qualification to resolved outcome.
                </span>
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 pt-[10.7px] md:h-[62.6px] md:flex-row md:flex-wrap md:justify-start md:pt-[14.6px]">
              <Link
                href="/contact"
                className="flex h-12 min-h-[48px] items-center justify-center gap-[9px] rounded-full border border-[#955f22] bg-[#955f22] px-6 md:h-auto md:self-stretch"
              >
                <span className={buttonText}>Request Enterprise Demo</span>
                <Image src={`${IMG}/arrow-right-icon.svg`} alt="" width={18} height={18} />
              </Link>
              <Link
                href="/surplus-enterprise/how-it-works"
                className="flex h-12 min-h-[48px] items-center justify-center rounded-full border border-white/55 px-6 pt-[15px] pb-4 md:h-auto md:self-stretch md:border-white/50"
              >
                <span className={buttonText}>How It Works</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Visual: desktop only */}
        <div className="relative hidden h-[430px] w-[620px] max-w-full shrink-0 overflow-clip rounded-[20px] bg-[linear-gradient(162deg,#14294a_0%,#0c2140_100%)] md:block lg:shrink">
          <Image
            src={`${IMG}/retail-surplus-photo-desktop.webp`}
            alt="Retail and apparel surplus recovery"
            fill
            sizes="620px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
