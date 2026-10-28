import Image from "next/image";
import Link from "next/link";

const BASE = "/images/home/hero";

// The check and document badges are cropped vector groups: the SVG already includes the stroke
// overflow, so it is positioned with the same insets the design uses.
function GroupIcon({ src, outer, inner }: { src: string; outer: string; inner: string }) {
  return (
    <span className="relative block size-[14px] overflow-clip">
      <span className="absolute" style={{ inset: outer }}>
        <span className="absolute" style={{ inset: inner }}>
          <Image src={src} alt="" fill sizes="14px" />
        </span>
      </span>
    </span>
  );
}

const chips = [
  {
    label: "Seller-controlled",
    width: 160.78,
    icon: <Image src={`${BASE}/badge-shield.svg`} alt="" width={14} height={14} />,
  },
  {
    label: "Qualified-only",
    width: 142.52,
    icon: <GroupIcon src={`${BASE}/badge-check.svg`} outer="8.35% 8.35% 8.32% 8.29%" inner="-5%" />,
  },
  {
    label: "Evidence-led",
    width: 134.77,
    icon: <GroupIcon src={`${BASE}/badge-doc.svg`} outer="8.33% 16.67%" inner="-5% -6.25%" />,
  },
];

const buttonBase =
  "flex min-h-12 items-center justify-center rounded-full border px-[26px] text-[15px] leading-[18px] font-semibold whitespace-nowrap";

// The four process steps float over the photo on desktop. Icons carry their own padding, so each
// icon is placed with the size of its SVG file.
const steps = [
  {
    title: "Qualify",
    text: "Assess inventory and eligibility",
    textWidth: "w-[122px]",
    icon: (
      <span className="relative block size-8 overflow-clip">
        <Image src={`${BASE}/icon-qualify.svg`} alt="" width={49} height={50} className="absolute top-[-9px] left-[-8px] max-w-none" />
      </span>
    ),
  },
  {
    title: "Route",
    text: "Match to the right markets and channels",
    textWidth: "w-[131px]",
    icon: <Image src={`${BASE}/icon-route.svg`} alt="" width={31} height={32} />,
  },
  {
    title: "Transact",
    text: "Connect verified buyers and sellers.",
    textWidth: "w-[104px]",
    icon: <Image src={`${BASE}/icon-transact.svg`} alt="" width={42} height={32} />,
  },
  {
    title: "Disposition",
    text: "Record evidence and close with compliance",
    textWidth: "w-[114px]",
    icon: <Image src={`${BASE}/icon-disposition.svg`} alt="" width={26} height={32} />,
  },
];

export default function Hero() {
  return (
    <>
      {/* Desktop: photo hero */}
      <section className="relative hidden overflow-hidden bg-[#fdfbf8] font-[family-name:var(--font-sora)] md:block xl:h-[550px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={`${BASE}/hero-background.webp`}
              alt=""
              width={1600}
              height={1072}
              priority
              sizes="(min-width: 1440px) 918px, 64vw"
              className="absolute top-[-24.76%] left-[39%] h-[153.57%] w-[63.57%] max-w-none"
            />
          </div>
          <div className="absolute inset-0 bg-linear-[-88.73deg,rgba(253,251,248,0)_41.6%,#fdfbf8_60.57%]" />
        </div>

        <div className="relative flex flex-col gap-6 px-10 pt-16 pb-10 md:max-w-[690px] xl:absolute xl:top-[89px] xl:bottom-[84px] xl:left-24 xl:w-[530px] xl:max-w-none xl:p-0">
          <div className="flex flex-col">
            <h1 className="text-[64px] leading-[64px] font-semibold tracking-[-1.28px] whitespace-nowrap text-[#1e2126]">
              Turn <span className="text-[#1cad8f]">Surplus</span> into
              <br />
              opportunity.
            </h1>
            <p className="pt-6 text-[20px] leading-[26px] whitespace-pre-wrap text-[#4f647a]">
              A global platform for excess, returned, imperfect and second-chance goods{"  "}built around qualified
              participation, seller-approved markets and governed disposition pathways.
            </p>
          </div>
          <div className="flex items-center gap-[13.5px] pt-9">
            <Link href="#" className={`${buttonBase} gap-[7.5px] border-transparent bg-[#926016] pb-3.5 text-white`}>
              Request Enterprise Demo
              <Image src={`${BASE}/arrow-right.svg`} alt="" width={18} height={18} />
            </Link>
            <Link href="#" className={`${buttonBase} border-[#d3dde8] bg-white text-[#0c2140]`}>
              Become a Verified Buyer
            </Link>
          </div>
        </div>

        <ol className="relative flex gap-[18px] px-10 pb-12 xl:absolute xl:top-[161px] xl:left-1/2 xl:p-0">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex w-[150px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#0c2140] px-8 py-5"
            >
              <div className="flex w-[122px] flex-col items-center justify-center gap-2">
                {step.icon}
                <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-white capitalize">{step.title}</p>
                <p className={`${step.textWidth} text-center text-[10px] leading-[15.2px] text-white`}>{step.text}</p>
              </div>
              {i < steps.length - 1 && (
                <Image
                  src={`${BASE}/step-arrow.svg`}
                  alt=""
                  width={41}
                  height={41}
                  className="absolute top-[47px] right-[-30px] z-10"
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Mobile */}
      <section className="bg-[#f2f5f9] px-[22px] pt-6 pb-14 font-[family-name:var(--font-sora)] md:hidden">
    <div className="relative flex flex-col items-center gap-10 rounded-[28px] border border-[#d3dde8] bg-linear-[135.1deg,#fff_0%,#e7edf4_100%] p-8">
      <div className="pointer-events-none absolute -inset-px rounded-[28px] shadow-[0_1px_2px_rgba(36,32,39,0.05),0_10px_30px_-18px_rgba(52,33,63,0.35)]" />
      <div className="relative flex w-full max-w-[600px] flex-col gap-[11.2px]">
        <p className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
          / The global surplus commerce
          <br />
          platform
        </p>
        <h1 className="pt-[15.54px] pb-[0.905px] text-[41.1px] leading-[41.96px] font-semibold tracking-[-0.823px] text-[#0c2140]">
          Turn surplus
          <br />
          into
          <br />
          opportunity.
        </h1>
        <p className="text-[17.6px] leading-[22.83px] font-semibold text-[#0c2140]">
          Qualify inventory. Reach
          <br />
          approved buyers. Transact
          <br />
          with confidence. Prove
          <br />
          outcomes.
        </p>
        <p className="max-w-[620px] pt-1 text-[16.1px] leading-[25.7px] text-[#4f647a]">
          A global platform for excess,
          <br />
          returned, imperfect and second-
          <br />
          chance goods — built around
          <br />
          qualified participation, seller-
          <br />
          approved markets and governed
          <br />
          disposition pathways.
        </p>
        <div className="flex flex-col items-start gap-[13.5px] pt-[20.8px]">
          <Link href="#" className={`${buttonBase} gap-[7.5px] border-transparent bg-[#0c2140] text-white`}>
            Request Enterprise Demo
            <Image src={`${BASE}/arrow-right.svg`} alt="" width={18} height={18} />
          </Link>
          <Link href="#" className={`${buttonBase} border-[#d3dde8] bg-white text-[#0c2140]`}>
            Become a Verified Buyer
          </Link>
          <Link
            href="#"
            className="flex items-center gap-[6.42px] text-[16.1px] leading-[25.7px] font-semibold whitespace-nowrap text-[#926016]"
          >
            Explore how it works
            <Image src={`${BASE}/arrow-right-sm.svg`} alt="" width={16} height={16} />
          </Link>
        </div>
        <ul className="flex flex-col items-start gap-2 pt-[16.79px]">
          {chips.map((chip) => (
            <li
              key={chip.label}
              style={{ width: chip.width }}
              className="flex h-[34.8px] items-center gap-1.5 rounded-full border border-[#d3dde8] bg-white pl-3 text-[13px] leading-[20.8px] font-semibold whitespace-nowrap text-[#14263e]"
            >
              {chip.icon}
              {chip.label}
            </li>
          ))}
        </ul>
      </div>

      <figure className="relative w-full">
        <div className="flex aspect-[280/210] items-center justify-center overflow-clip rounded-2xl bg-linear-[140deg,#e8eef5_0%,#dbe5ef_55%,#cfdbe8_100%] shadow-[0_2px_4px_rgba(36,32,39,0.06),0_30px_60px_-28px_rgba(52,33,63,0.45)]">
          <div className="flex flex-col items-center gap-2 opacity-40">
            <Image src={`${BASE}/icon-apparel.svg`} alt="" width={40} height={40} className="opacity-80" />
            <figcaption className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] whitespace-nowrap text-[#0c2140] opacity-80">
              Surplus apparel &amp; footwear
            </figcaption>
          </div>
        </div>
        <div className="absolute -bottom-[8.5px] -left-2 flex flex-col gap-[8.68px] rounded-[18px] border border-[#d3dde8] bg-white px-[15px] py-3 shadow-[0_2px_4px_rgba(36,32,39,0.06),0_30px_60px_-28px_rgba(52,33,63,0.45)]">
          <p className="text-xs leading-[19.2px] font-bold tracking-[0.72px] whitespace-nowrap text-[#4f647a] uppercase">
            Governed flow · 7 stages
          </p>
          <ol className="flex items-center gap-1.5" aria-label="Seven stages, currently stage 4">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <li key={n} className="flex items-center gap-1.5">
                {n > 1 && <span aria-hidden="true" className="h-0.5 w-2.5 bg-[#d3dde8]" />}
                <span
                  className={`flex size-[18px] items-center justify-center rounded-full pt-px pb-[1.5px] text-[10px] leading-4 font-bold ${
                    n === 4 ? "bg-[#17a185] text-[#0c2140]" : "bg-[#0c2140] text-white"
                  }`}
                >
                  {n}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </figure>
    </div>
      </section>
    </>
  );
}
