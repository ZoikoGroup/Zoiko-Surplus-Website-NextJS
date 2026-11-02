import Image from "next/image";

const A = "/images/enterprise-overview/hero";
const hanken = "font-[family-name:var(--font-hanken)]";

const covers = [
  { label: "Qualify", icon: "check-qualify.svg" },
  { label: "Govern & plan", icon: "check-govern.svg" },
  { label: "Recover & prove", icon: "check-recover.svg" },
];

const stats = [
  { value: "7", label: "governed stages", width: "w-[145.11px]", labelLeft: "left-[32.4px]", labelWidth: "w-[97.149px]" },
  { value: "3", label: "connected capabilities", width: "w-[181.27px]", labelLeft: "left-[32.41px]", labelWidth: "w-[133.103px]" },
];

const crumbs = ["Home", "Solutions"];

function DemoButtons({ className = "", primary }: { className?: string; primary: string }) {
  return (
    <div className={className}>
      <a
        href="#"
        className={`flex min-h-12 items-center justify-center gap-[9px] self-stretch rounded-full border px-6 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white ${primary}`}
      >
        Request Enterprise Demo
        <Image src={`${A}/arrow-right.svg`} alt="" width={18} height={18} />
      </a>
      <a
        href="#"
        className="flex min-h-12 items-center justify-center self-stretch rounded-full border border-white/55 px-6 pt-[15px] pb-4 text-[15px] leading-[15px] font-semibold whitespace-nowrap text-white"
      >
        Explore Inventory Qualification
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section aria-label="Surplus Enterprise overview" className={`${hanken} w-full bg-white`}>
      {/* ---------- Desktop ---------- */}
      <div className="hidden p-8 md:block">
        <div className="relative flex min-h-[580px] items-end overflow-clip rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] shadow-[0_10px_30px_-14px_rgba(12,33,64,0.22)]">
          <Image
            src={`${A}/hero-desktop.webp`}
            alt="Enterprise warehouse where surplus inventory is qualified and governed."
            width={800}
            height={533}
            priority
            className="pointer-events-none absolute top-[-71.8px] left-0 h-[684px] w-full max-w-none object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(102.26deg,rgba(10,27,54,0.94)_0%,rgba(10,27,54,0.78)_44%,rgba(10,27,54,0.25)_100%)]" />

          <div className="relative flex h-[580px] max-w-[660px] shrink-0 flex-col items-start gap-3 px-14 pt-[62px] pb-14">
            <div className="flex w-[537.59px] flex-col gap-[10px]">
              <div className="flex flex-col gap-3">
                <h1
                  className="pb-[26px] text-[64px] leading-[62.3px] font-extrabold tracking-[-1.28px] whitespace-nowrap text-white"
                >
                  Bring structure and
                  <br />
                  control to <span className="text-[#18a884]">surplus</span>
                  <br />
                  <span className="text-[#18a884]">inventory</span>.
                </h1>
                <p className="pt-0.5 text-[20px] leading-[26px] whitespace-nowrap text-white/90">
                  Qualify inventory, define authorized disposition pathways,
                  <br />
                  evaluate permitted options and retain a clear record of
                  <br />
                  decisions and outcomes.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <DemoButtons
                  primary="border-[#926016] bg-[#926016]"
                  className="flex h-[60px] w-full flex-wrap items-start gap-3 pt-3"
                />
                <div className="flex w-[523px] items-start gap-2 border-t border-white/22 pt-3">
                  <Image src={`${A}/info-desktop.svg`} alt="" width={6} height={15} className="h-[14.992px] w-[5.95px] shrink-0" />
                  <p className="w-[509px] text-[12.8px] leading-[19.2px] text-white/82">
                    Zoiko Surplus supports governed surplus workflows for enterprise sellers. Access is subject to market, category, eligibility and approved service configuration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-5 right-5 flex h-[38.34px] gap-[10px]">
            {stats.map((s) => (
              <div key={s.label} className={`relative ${s.width} rounded-full border border-white/30 bg-white/14`}>
                <span className="absolute top-[calc(50%+0.1px)] left-[14px] -translate-y-1/2 text-[16.8px] leading-[16.8px] font-black text-white">
                  {s.value}
                </span>
                <span
                  className={`absolute top-[calc(50%-0.67px)] -translate-y-1/2 text-[13.1px] leading-[20.34px] font-semibold text-white ${s.labelLeft} ${s.labelWidth}`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute right-14 bottom-[43.4px] hidden w-[290px] flex-col gap-3 rounded-2xl bg-white/97 px-[18px] py-4 shadow-[0_24px_60px_-24px_rgba(12,33,64,0.35)] lg:flex">
            <h2 className="text-[11.5px] leading-[17.86px] font-bold tracking-[1.152px] text-[#7c8894] uppercase">What it covers</h2>
            <ul className="flex flex-col gap-[9.3px]">
              {covers.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center gap-[9px] text-[14.4px] leading-[22.32px] font-semibold whitespace-nowrap text-[#0c2140]"
                >
                  <Image src={`${A}/${c.icon}`} alt="" width={18} height={18} />
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Mobile ---------- */}
      <div className="flex flex-col gap-[18px] px-4 md:hidden">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-[7px] text-[13.1px] leading-[20.34px]">
          {crumbs.map((c) => (
            <span key={c} className="contents">
              <a href="#" className="text-[#5a6b7b]">
                {c}
              </a>
              <span aria-hidden className="text-[#d4d8de]">
                /
              </span>
            </span>
          ))}
          <span aria-current="page" className="font-semibold text-[#0c2140]">
            Surplus Enterprise
          </span>
        </nav>

        <div className="relative flex min-h-[440px] items-end overflow-clip rounded-[20px] shadow-[0_10px_30px_-14px_rgba(12,33,64,0.22)]">
          <div className="absolute top-0 right-0 left-0 aspect-[358/201.7] overflow-clip bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)]">
            <Image
              src={`${A}/hero-mobile.webp`}
              alt="Enterprise warehouse where surplus inventory is qualified and governed."
              width={720}
              height={480}
              priority
              className="pointer-events-none absolute top-[-9.26%] left-0 h-[118.52%] w-full max-w-none"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,27,54,0.5)] to-[rgba(10,27,54,0.94)]" />

          <div className="relative flex max-w-[660px] shrink-0 flex-col items-start gap-3 p-7">
            <div className="relative h-[40.28px] w-[302px] shrink-0 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase">
              <span aria-hidden className="absolute top-1/2 left-0 -translate-y-1/2 text-white opacity-70">
                —
              </span>
              <span aria-hidden className="absolute top-1/2 left-[25.58px] h-px w-[25.55px] -translate-y-1/2 bg-[#45bca0] opacity-50" />
              <span className="absolute top-[calc(50%-0.57px)] left-[61.13px] -translate-y-1/2 whitespace-nowrap text-[#45bca0]">
                Solutions · Surplus
                <br />
                Enterprise
              </span>
            </div>
            <h1 className="pt-[6.93px] pb-[0.85px] text-[37.2px] leading-[37.92px] font-bold tracking-[-0.744px] whitespace-nowrap text-white">
              Bring structure
              <br />
              and control to
              <br />
              <span className="text-[#18a884]">surplus inventory</span>.
            </h1>
            <p className="max-w-[480px] pt-[1.99px] text-[17.9px] leading-[23.24px] whitespace-nowrap text-white/90">
              Qualify inventory, define authorized
              <br />
              disposition pathways, evaluate
              <br />
              permitted options and retain a clear
              <br />
              record of decisions and outcomes.
            </p>
            <DemoButtons
              primary="border-[#955f22] bg-[#955f22] py-[14px]"
              className="flex w-full flex-col flex-wrap items-start gap-3 pt-3"
            />
            <div className="flex w-full max-w-[372.6px] items-start gap-2 border-t border-white/22 pt-3">
              <Image src={`${A}/info-mobile.svg`} alt="" width={5} height={15} className="h-[15.01px] w-[4.8px] shrink-0" />
              <p className="pr-[3.61px] text-[12.8px] leading-[19.2px] whitespace-nowrap text-white/82">
                Zoiko Surplus supports governed surplus
                <br />
                workflows for enterprise sellers. Access is subject
                <br />
                to market, category, eligibility and approved
                <br />
                service configuration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
