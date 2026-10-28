import Image from "next/image";

const BASE = "/images/home/industries";

type Placement = { left: string; top: string; width: string; height: string };

// Each card's photo is placed with the exact crop box from the design. Photos with `inner` are
// offset again inside that box; the rest simply cover it. Most photos are mirrored in the design.
const industries: {
  label: string;
  photo: string;
  icon?: string;
  box: Placement;
  flip?: boolean;
  inner?: Placement;
  small?: boolean;
  tight?: boolean;
}[] = [
  { label: "Electronics", photo: "electronics", icon: "electronics", box: { left: "-27.6px", top: "-1.52px", width: "267.643px", height: "178.317px" } },
  { label: "Apparel", photo: "apparel", icon: "apparel", flip: true, box: { left: "-102.5px", top: "-47.02px", width: "379.173px", height: "252.624px" }, inner: { left: "-6.23%", top: "11.22%", width: "100%", height: "100%" } },
  { label: "Home & Lifestyle", photo: "home-lifestyle", icon: "home", box: { left: "-44.35px", top: "-16.75px", width: "299.623px", height: "199.624px" }, inner: { left: "0", top: "-42.11%", width: "100%", height: "150.09%" } },
  { label: "Industrial & Machinery", photo: "industrial-machinery", icon: "industrial", tight: true, flip: true, box: { left: "-27.45px", top: "-36.46px", width: "247px", height: "164px" }, inner: { left: "-10.46%", top: "0", width: "100%", height: "100%" } },
  { label: "Healthcare", photo: "healthcare", icon: "healthcare", flip: true, box: { left: "-7.67px", top: "-47.02px", width: "379.173px", height: "252.624px" } },
  { label: "Food & Bevarages", photo: "food-beverages", icon: "food", flip: true, box: { left: "-16.94px", top: "0", width: "272.212px", height: "181.361px" } },
  { label: "Transport", photo: "transport", icon: "transport", flip: true, box: { left: "-26.83px", top: "1.52px", width: "262.313px", height: "174.766px" } },
  { label: "Construction Material", photo: "construction-material", small: true, flip: true, box: { left: "-19.55px", top: "-25.46px", width: "241px", height: "160px" }, inner: { left: "-6.23%", top: "11.22%", width: "100%", height: "100%" } },
  { label: "Energy & Infrastructure", photo: "energy-infrastructure", small: true, flip: true, box: { left: "-24.07px", top: "-1.52px", width: "276.78px", height: "184.405px" } },
  { label: "Other Industries", photo: "other-industries", small: true, flip: true, box: { left: "-55.87px", top: "-61.46px", width: "324px", height: "216px" } },
];

// Desktop only: the mobile design has no industries strip.
export default function IndustriesStrip() {
  return (
    <section
      aria-label="Industries"
      className="hidden bg-white font-[family-name:var(--font-sora)] md:block"
    >
      <ul
        tabIndex={0}
        className="flex h-[220px] items-center gap-4 overflow-x-auto overflow-y-clip px-3 py-6 [scrollbar-width:thin]"
      >
        {industries.map((item) => (
          <li
            key={item.label}
            className="relative h-[178.119px] w-[214.657px] shrink-0 overflow-clip rounded-[15.805px] border-[1.522px] border-[rgba(138,134,144,0.13)] bg-white"
          >
            <div className={`absolute ${item.flip ? "-scale-x-100" : ""}`} style={item.box}>
              <Image
                src={`${BASE}/${item.photo}.webp`}
                alt=""
                width={640}
                height={400}
                sizes="300px"
                className={`absolute max-w-none ${item.inner ? "" : "inset-0 size-full object-cover"}`}
                style={item.inner}
              />
            </div>
            <div
              className={`absolute bottom-[-1.52px] left-0 flex h-[65.463px] w-[214.657px] items-center rounded-b-[15.805px] bg-white py-[15px] ${
                item.small ? "px-[16.683px]" : item.tight ? "gap-[3px] px-2.5" : "gap-[8.781px] px-4"
              }`}
            >
              {item.icon && <Image src={`${BASE}/icon-${item.icon}.svg`} alt="" width={24} height={24} className="shrink-0" />}
              <span
                className={`tracking-[-0.6067px] whitespace-nowrap text-[#1e2126] ${
                  item.small ? "text-[17px] leading-[21.313px]" : "text-base leading-[22.836px]"
                }`}
              >
                {item.label}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
