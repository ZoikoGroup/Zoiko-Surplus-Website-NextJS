import Image from "next/image";

const BASE = "/images/home/value-strip";

const values = [
  {
    title: "Reduce Waste",
    text: "More value from what ready already exists",
    icon: <Image src={`${BASE}/icon-reduce-waste.svg`} alt="" width={32} height={32} className="-scale-x-100" />,
  },
  {
    title: "Unlock Liquidity",
    text: "Faster, more efficient disposition.",
    icon: <Image src={`${BASE}/icon-unlock-liquidity.svg`} alt="" width={32} height={32} />,
  },
  {
    title: "Govern with Trust",
    text: "Policy, compliance and auditability.",
    // The SVG already includes its stroke overflow, so it is pulled back by the same margins.
    icon: (
      <span className="flex h-8 w-[27px] shrink-0 items-center justify-center">
        <Image src={`${BASE}/icon-govern-with-trust.svg`} alt="" width={29} height={34} className="max-w-none" />
      </span>
    ),
  },
  {
    title: "Global Reach",
    text: "Verified markets across industry &  region.",
    icon: <Image src={`${BASE}/icon-global-reach.svg`} alt="" width={32} height={32} />,
  },
];

// Desktop only: the mobile design has no value strip.
export default function ValueStrip() {
  return (
    <section className="hidden bg-white font-[family-name:var(--font-sora)] md:block">
      <ul className="mx-auto grid max-w-[1440px] grid-cols-2 xl:grid-cols-4">
        {values.map((item) => (
          <li key={item.title} className="flex items-center justify-center px-4 py-6">
            <div className="flex items-start gap-3">
              <span className="shrink-0">{item.icon}</span>
              <div className="flex w-[255px] flex-col">
                <p className="flex h-[23px] items-center text-sm font-semibold text-[#1e2126]">{item.title}</p>
                <p className="flex h-[23px] items-center text-xs leading-[18px] text-[#4f647a]">{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
