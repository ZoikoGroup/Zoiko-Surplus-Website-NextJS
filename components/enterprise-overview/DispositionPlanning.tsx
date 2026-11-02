import Image from "next/image";

const BASE = "/images/enterprise-overview/disposition-planning";

const routes = [
  {
    title: "Private B2B sale",
    imageDesktop: `${BASE}/private-b2b-sale.webp`,
    imageMobile: `${BASE}/private-b2b-sale.webp`,
    alt: "Shop assistant using a point-of-sale tablet at a counter in a busy retail space",
    desktop: ["A seller-approved private market route to", "appropriately verified business demand."],
    mobile: ["A seller-approved private market route to", "appropriately verified business demand."],
    badge: "Policy-filtered",
  },
  {
    title: "Approved recovery / reuse",
    imageDesktop: `${BASE}/approved-recovery-reuse.webp`,
    imageMobile: `${BASE}/approved-recovery-reuse-mobile.webp`,
    alt: "Business colleagues applauding around a meeting table",
    desktop: ["A permitted recovery, reuse or", "redistribution pathway where enabled."],
    mobile: ["A permitted recovery, reuse or redistribution", "pathway where enabled."],
    badge: "Where enabled",
  },
  {
    title: "Permitted third-party handling",
    imageDesktop: `${BASE}/permitted-third-party-handling.webp`,
    imageMobile: `${BASE}/permitted-third-party-handling-mobile.webp`,
    alt: "Three business people shaking hands on an urban walkway",
    desktop: ["Authorized partner collection, logistics or", "donation — separately contracted."],
    mobile: ["Authorized partner collection, logistics or", "donation — separately contracted."],
    badge: "Partner-executed",
  },
];

export default function DispositionPlanning() {
  return (
    <section className="bg-white font-[family-name:var(--font-hanken)] max-md:py-14 md:px-24 md:py-24">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-[18px] max-md:px-4 md:gap-14">
        {/* Heading block */}
        <div className="flex w-full flex-col gap-4 pt-[6px] md:w-[780px] md:max-w-full">
          {/* Eyebrow: desktop */}
          <div className="hidden items-center py-2 md:flex">
            <div className="relative h-[21px] w-[75px] shrink-0">
              <span className="absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 font-[family-name:var(--font-sora)] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">
                06
              </span>
              <span className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-[2px] w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <span className="font-[family-name:var(--font-sora)] text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] whitespace-pre text-[#926016] uppercase">
              {"  "}Disposition planning
            </span>
          </div>
          {/* Eyebrow: mobile */}
          <div className="flex h-[20.14px] items-center text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:hidden">
            <span className="w-[18.2px] shrink-0 text-[#0c2140] opacity-50">06</span>
            <span className="mx-[10px] h-px w-[28px] shrink-0 bg-[#0f7a60] opacity-50" />
            <span className="whitespace-nowrap text-[#0f7a60]">Disposition planning</span>
          </div>

          <h2 className="text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] max-md:pt-[31.1px] max-md:pb-[0.7px] md:w-[780px] md:max-w-full md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px] md:whitespace-normal">
            Compare permitted
            <br className="md:hidden" /> routes — not headline
            <br className="md:hidden" /> bids.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:text-[20px] md:leading-[26px]">
            Routes appear only as conceptual, policy-
            <br className="md:hidden" />
            filtered options under market and category
            <br className="md:hidden" /> constraints. Nothing here assumes pre-
            <br className="md:hidden" />
            authorization or available fulfillment.
          </p>
        </div>

        {/* Cards + note */}
        <div className="flex flex-col gap-[18px]">
          <ul className="flex flex-col gap-6 max-md:pt-[29.99px] md:flex-row md:items-start">
            {routes.map((r) => (
              <li
                key={r.title}
                className="flex min-w-px flex-1 flex-col overflow-clip rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_1px_2px_rgba(12,33,64,0.06),0_1px_3px_rgba(12,33,64,0.08)] md:self-stretch"
              >
                <div className="relative bg-[#f5f7fa]">
                  <div className="relative aspect-[356/222.5] overflow-clip rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:aspect-[368.66/230.41]">
                    <Image
                      src={r.imageMobile}
                      alt={r.alt}
                      fill
                      sizes="356px"
                      className="object-cover md:hidden"
                    />
                    <Image
                      src={r.imageDesktop}
                      alt={r.alt}
                      fill
                      sizes="(min-width: 1440px) 400px, 33vw"
                      className="hidden object-cover md:block"
                    />
                  </div>
                  <span className="absolute top-3 right-3 flex size-[38px] items-center justify-center rounded-[19px] bg-white/94 shadow-[0_1px_2px_rgba(12,33,64,0.06),0_1px_3px_rgba(12,33,64,0.08)]">
                    <Image src={`${BASE}/icon-arrow-up-right.svg`} alt="" width={18} height={18} />
                  </span>
                </div>
                <div className="flex flex-col gap-[6.9px] p-[18px] md:p-[26px]">
                  <h3 className="text-[16.3px] leading-[17.95px] font-semibold tracking-[-0.326px] text-[#0c2140]">
                    {r.title}
                  </h3>
                  <p className="pb-[5.79px] text-[16px] leading-[24.8px] text-[#5a6b7b]">
                    <span className="md:hidden">
                      {r.mobile[0]}
                      <br />
                      {r.mobile[1]}
                    </span>
                    <span className="hidden md:inline">
                      {r.desktop[0]}
                      <br />
                      {r.desktop[1]}
                    </span>
                  </p>
                  <span className="flex w-fit items-center gap-[7px] rounded-full bg-[#f4e7d6] px-[11px] py-[5px] text-[12px] leading-3 font-semibold tracking-[0.36px] whitespace-nowrap text-[#7e4e1c]">
                    <span className="size-[7px] rounded-full bg-[#7e4e1c]" />
                    {r.badge}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative rounded-xl border border-dashed border-[#d4d8de] bg-[#fbf6ef]">
            <Image
              src={`${BASE}/icon-info.svg`}
              alt=""
              width={16}
              height={16}
              className="absolute top-[14px] left-4"
            />
            <p className="flex min-h-[49.33px] items-center py-3 pr-4 pl-[41px] text-[13.8px] leading-[21.33px] text-[#5a6b7b] max-md:min-h-[113.31px] max-md:py-0">
              <span>
                Options are evaluated from the seller’s
                <br className="md:hidden" /> expected net-recovery perspective — fees,
                <br className="md:hidden" /> timing, transport and risk are considered, and
                <br className="md:hidden" /> no pricing, savings or sell-through is assured.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
