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

export default function Hero() {
  return (
    <section className="bg-[#f2f5f9] px-[22px] pt-6 pb-14 font-[family-name:var(--font-sora)] md:flex md:h-[660px] md:flex-col md:items-center md:justify-center md:rounded-b-[48px] md:bg-[#fefaf7] md:px-24 md:py-16">
      {/* Desktop */}
      <div className="hidden flex-col items-center gap-2.5 md:flex">
        <div className="flex min-h-[271.1px] w-full max-w-[734px] flex-col items-center justify-center gap-[18px]">
          <h1 className="pt-[16.39px] text-center text-[64px] leading-[64px] font-semibold tracking-[-1.28px] text-[#1e2126]">
            Turn <span className="text-[#1cad8f]">Surplus</span> into
            <br />
            opportunity.
          </h1>
          <p className="max-w-[693px] pt-[4.71px] text-center text-[20px] leading-[26px] text-[#4f647a]">
            A global platform for excess, returned, imperfect and second-
            <br />
            chance goods&nbsp; built around qualified participation, seller-approved
            <br />
            markets and governed disposition pathways.
          </p>
        </div>
        <div className="flex h-[79px] items-center justify-center gap-[13.5px] pt-9">
          <Link href="#" className={`${buttonBase} gap-[7.5px] border-transparent bg-[#926016] text-white`}>
            Request Enterprise Demo
            <Image src={`${BASE}/arrow-right.svg`} alt="" width={18} height={18} />
          </Link>
          <Link href="#" className={`${buttonBase} border-[#d3dde8] bg-white text-[#0c2140]`}>
            Become a Verified Buyer
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative flex flex-col items-center gap-10 rounded-[28px] border border-[#d3dde8] bg-linear-[135.1deg,#fff_0%,#e7edf4_100%] p-8 md:hidden">
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
  );
}
