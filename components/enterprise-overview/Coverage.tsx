import Image from "next/image";

const A = "/images/enterprise-overview/coverage";
const hanken = "font-[family-name:var(--font-hanken)]";
const sora = "font-[family-name:var(--font-sora)]";

type Card = {
  title: string;
  icon: string;
  /** Body copy, split exactly as each Figma frame wraps it. */
  bodyDesktop: string[];
  bodyMobile: string[];
  noteDesktop: string;
  noteMobile: string[];
  noteWidth: string;
  desktopImage: string;
  mobileImage: string;
  /** Desktop image placement inside the 282px media box. */
  desktopImageClass: string;
  /** Mobile image placement (height / top offsets as in Figma). */
  mobileImageClass: string;
  imageAlt: string;
  mobileImageAlt: string;
  /** Third card spans the full row on desktop. */
  wide?: boolean;
};

const cards: Card[] = [
  {
    title: "Qualify",
    icon: "icon-qualify.svg",
    bodyDesktop: ["Document condition, provenance, ownership authority and category", "constraints so each lot has a trustworthy baseline."],
    bodyMobile: ["Document condition, provenance, ownership", "authority and category constraints so each", "lot has a trustworthy baseline."],
    noteDesktop: "Documentation is seller- or authorized- party sourced — not a Zoiko physical inspection.",
    noteMobile: ["Documentation is seller- or authorized-", "party sourced — not a Zoiko physical", "inspection."],
    noteWidth: "md:w-[454px]",
    desktopImage: "qualify-desktop.webp",
    mobileImage: "qualify-mobile.webp",
    desktopImageClass: "inset-0 h-full w-full object-cover",
    mobileImageClass: "top-[-3.33%] h-[106.67%]",
    imageAlt: "Seller documenting inventory condition and provenance for qualification",
    mobileImageAlt: "Person reviewing technical drawings at a workbench to qualify inventory",
  },
  {
    title: "Govern & plan",
    icon: "icon-govern-plan.svg",
    bodyDesktop: ["Apply seller-authored rules and compare permitted disposition routes under market and category constraints."],
    bodyMobile: ["Apply seller-authored rules and compare", "permitted disposition routes under market", "and category constraints."],
    noteDesktop: "Routes are policy-filtered concepts — not pre-authorized or guaranteed fulfillment.",
    noteMobile: ["Routes are policy-filtered concepts —", "not pre-authorized or guaranteed", "fulfillment."],
    noteWidth: "md:w-[454px]",
    desktopImage: "govern-plan-desktop.webp",
    mobileImage: "govern-plan-mobile.webp",
    desktopImageClass: "inset-0 h-full w-full object-cover",
    mobileImageClass: "top-[-2.47%] h-[104.93%]",
    imageAlt: "Team applying seller-authored rules to plan permitted disposition routes",
    mobileImageAlt: "Team meeting around a table to plan permitted disposition routes",
  },
  {
    title: "Recover & prove",
    icon: "icon-recover-prove.svg",
    bodyDesktop: ["Evaluate outcome categories and retain auditable evidence of decisions, exceptions and reconciliations."],
    bodyMobile: ["Evaluate outcome categories and retain", "auditable evidence of decisions, exceptions", "and reconciliations."],
    noteDesktop: "Supporting records — not guaranteed financial recovery or compliance certification.",
    noteMobile: ["Supporting records — not guaranteed", "financial recovery or compliance", "certification."],
    noteWidth: "md:w-[693px]",
    desktopImage: "recover-prove-desktop.webp",
    mobileImage: "recover-prove-mobile.webp",
    desktopImageClass: "top-[-163.72%] left-0 h-[293.87%] w-full",
    mobileImageClass: "top-[-7%] h-[114%]",
    imageAlt: "Hand annotating records of decisions and outcomes",
    mobileImageAlt: "Laptop showing a recovery and evidence dashboard",
    wide: true,
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

export default function Coverage() {
  return (
    <section aria-labelledby="coverage-heading" className={`${hanken} w-full bg-white md:p-24`}>
      <div className="flex flex-col gap-12 px-4 md:gap-14 md:px-0">
        <div className="flex w-full max-w-[1093px] flex-col gap-4 pt-1.5">
          {/* Eyebrow: desktop (copy as shown in the desktop frame) */}
          <div className="hidden w-[719.917px] max-w-full py-2 md:flex">
            <div className="relative -top-0.5 h-[21px] w-[75px] shrink-0">
              <span
                className={`${sora} absolute top-[calc(50%+0.9px)] left-0 -translate-y-1/2 text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]`}
              >
                02
              </span>
              <span aria-hidden className="absolute top-[calc(50%+0.89px)] left-[29.13px] h-0.5 w-[46px] -translate-y-1/2 bg-[#d3dde8]" />
            </div>
            <div className="relative -top-px flex items-baseline gap-1">
              <span className={`${sora} w-[86px] text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]`}>Industries</span>
              <span className={`${sora} text-[12px] leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase`}>we serve</span>
            </div>
          </div>
          {/* Eyebrow: mobile */}
          <div className="flex h-[20.14px] items-center gap-2.5 text-[13px] leading-[20.15px] font-semibold tracking-[1.82px] uppercase md:hidden">
            <span className="text-[#0c2140] opacity-50">02</span>
            <span aria-hidden className="h-px w-7 bg-[#0f7a60] opacity-50" />
            <span className="text-[#0f7a60]">What Surplus Enterprise covers</span>
          </div>

          <h2
            id="coverage-heading"
            className="pt-[30.8px] text-[30.6px] leading-[33.63px] font-bold tracking-[-0.608px] whitespace-nowrap text-[#0c2140] md:pt-0 md:text-[44px] md:leading-[48.4px] md:tracking-[-0.88px]"
          >
            Qualify. Govern &amp; plan.
            <br className="md:hidden" /> Recover &amp; prove.
          </h2>
          <p className="text-[17.9px] leading-[23.24px] text-[#5a6b7b] md:w-[780px] md:max-w-full md:text-[20px] md:leading-[26px]">
            <span className="md:hidden">
              Scoped to qualification, governance,
              <br />
              disposition planning and evidence — not a
              <br />
              full inventory-management ERP, and no
              <br />
              stock custody.
            </span>
            <span className="hidden md:inline">
              Scoped to qualification, governance, disposition planning and evidence — not a full inventory-management ERP, and no stock custody.
            </span>
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`flex flex-col overflow-clip rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_1px_2px_rgba(12,33,64,0.06),0_1px_3px_rgba(12,33,64,0.08)] ${
                c.wide ? "md:col-span-2" : "md:min-h-[544px]"
              }`}
            >
              {/* Media */}
              <div className="relative shrink-0 bg-[linear-gradient(150deg,#dcf3ed_0%,#eef6f3_100%)] md:h-[282px] md:overflow-hidden">
                {/* mobile */}
                <div className="relative aspect-[356/222.5] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:hidden">
                  <Image
                    src={`${A}/${c.mobileImage}`}
                    alt={c.mobileImageAlt}
                    width={720}
                    height={480}
                    className={`pointer-events-none absolute left-0 w-full max-w-none ${c.mobileImageClass}`}
                  />
                </div>
                {/* desktop */}
                <div
                  className={`relative hidden overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#14294a_0%,#0c2140_100%)] md:block ${
                    c.wide ? "h-[282px] w-full" : "aspect-[368.66/230.41] w-full"
                  }`}
                >
                  <Image
                    src={`${A}/${c.desktopImage}`}
                    alt={c.imageAlt}
                    width={800}
                    height={533}
                    className={`pointer-events-none absolute max-w-none ${c.desktopImageClass}`}
                  />
                </div>
                <span className="absolute top-3 right-3 flex size-[38px] items-center justify-center rounded-[19px] bg-white/94 shadow-[0_1px_2px_rgba(12,33,64,0.06),0_1px_3px_rgba(12,33,64,0.08)]">
                  <Image src={`${A}/icon-badge.svg`} alt="" width={18} height={18} />
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-[6.8px] p-[18px] md:gap-7 md:p-[26px]">
                <div className="flex flex-col gap-[6.8px] md:gap-[7px]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#dcf3ed]">
                    <Image src={`${A}/${c.icon}`} alt="" width={20} height={20} />
                  </span>
                  <h3 className="pt-[3.2px] text-[17.9px] leading-[19.71px] font-semibold tracking-[-0.358px] text-[#0c2140]">{c.title}</h3>
                  <p className="pb-[0.595px] text-[16px] leading-[24.8px] text-[#5a6b7b]">
                    <span className="md:hidden">
                      <Lines lines={c.bodyMobile} />
                    </span>
                    <span className="hidden md:inline">
                      <Lines lines={c.bodyDesktop} />
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-2 border-t border-[#e6e8ec] pt-[16.3px] pb-[0.9px] md:py-px">
                  <span className="mt-[1.9px] flex shrink-0 items-center md:mt-0 md:py-[5px]">
                    <Image src={`${A}/icon-note-desktop.svg`} alt="" width={15} height={15} className="hidden md:block" />
                    <Image src={`${A}/icon-note-mobile.svg`} alt="" width={15} height={15} className="md:hidden" />
                  </span>
                  <p className={`text-[16px] leading-[24.8px] text-[#5a6b7b] ${c.noteWidth} md:max-w-full`}>
                    <span className="whitespace-nowrap md:hidden">
                      <Lines lines={c.noteMobile} />
                    </span>
                    <span className="hidden md:inline">{c.noteDesktop}</span>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
