import Image from "next/image";
import Link from "next/link";

const base = "/images/home/categories";

// Badge palette per card
const tones = {
  amber: { pill: "bg-[#f5e7c9] border-[#f0c4ba]", dot: "bg-[#926016]", text: "text-[#845212]" },
  slate: { pill: "bg-[#e7edf4] border-[#d3dde8]", dot: "bg-[#4f647a]", text: "text-[#4f647a]" },
  dark: { pill: "bg-[#e6edf4] border-[#d3dde8]", dot: "bg-[#0c2140] md:bg-[#1e2126]", text: "text-[#0c2140] md:text-[#1e2126]" },
};

const cards = [
  {
    title: "Apparel & Footwear",
    badge: "Proposed first pilot",
    tone: tones.amber,
    image: "apparel-footwear.webp",
    icon: "icon-apparel.svg",
    desktop: "UK-focused B2B apparel and footwear resale marketplace.",
    mobile: ["The proposed first activation is a UK domestic,", "seller-private B2B market — an initial", "configuration, not evidence the global", "platform is live."],
    featured: true,
  },
  {
    title: "Consumer Goods",
    badge: "Not yet activated",
    tone: tones.slate,
    image: "consumer-goods.webp",
    icon: "icon-consumer.svg",
    desktop: "Household and lifestyle goods with verified resale compliance.",
    mobile: ["Packaged household and lifestyle goods, with", "condition, origin and lawful-resale", "considerations."],
  },
  {
    title: "Food & Grocery",
    badge: "Separate approval",
    tone: tones.dark,
    image: "food-grocery.webp",
    icon: "icon-food.svg",
    desktop: "Ensure food safety, shelf-life, and traceability compliance.",
    mobile: ["Sealed ambient food requires its own safety,", "shelf-life and traceability sign-off before any", "activation."],
  },
  {
    title: "Further Categories",
    badge: "Planned, if approved",
    tone: tones.slate,
    image: "further-categories.webp",
    icon: "icon-further.svg",
    desktop: "Expand into industrial and business goods upon approval.",
    mobile: ["Industrial and business goods may follow,", "subject to category packs and approval."],
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-[#e7edf4] py-[72px] font-[family-name:var(--font-sora)] md:rounded-[48px] md:bg-white md:p-24 md:max-lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-[22px] md:gap-14 md:px-0">
        <div className="flex max-w-[853px] flex-col md:gap-4">
          {/* Mobile eyebrow */}
          <div className="mt-1 flex h-[20.8px] items-center md:hidden">
            <span className="w-[21.78px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#0c2140]">03</span>
            <span className="mx-2.5 h-0.5 w-[46px] bg-[#d3dde8]" />
            <span className="text-[13px] leading-[20.8px] font-bold tracking-[1.82px] text-[#4f647a]">Coverage</span>
            <span className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] whitespace-nowrap text-[#926016] uppercase">
              Category coverage
            </span>
          </div>
          {/* Desktop eyebrow */}
          <div className="hidden h-[21px] items-center md:flex">
            <span className="w-[21.78px] text-[13px] leading-[20.8px] font-black tracking-[1.82px] text-[#1e2126]">07</span>
            <span className="mx-2.5 h-0.5 w-[46px] bg-[#d3dde8]" />
            <span className="text-xs leading-[19.2px] font-semibold tracking-[1.68px] text-[#926016] uppercase">
              Category coverage
            </span>
          </div>
          <h2 className="mt-4 text-[28.2px] leading-[31.55px] font-semibold tracking-[-0.423px] text-[#0c2140] md:mt-0 md:text-[44px] md:leading-[49.28px] md:tracking-[-0.66px] md:text-[#1e2126]">
            Different categories,
            <br className="md:hidden" /> different rules
            <span className="md:hidden"> —</span>
            <br /> activated separately.
          </h2>
          <p className="mt-3 text-[17.6px] leading-[28.1px] text-[#4f647a] md:hidden">
            Coverage reflects what is designed,
            <br /> planned and proposed. A category
            <br /> shown here is not automatically live in
            <br /> your market.
          </p>
          <p className="hidden text-xl leading-[33.6px] text-[#4f647a] md:block">
            Coverage reflects what is designed, planned and proposed. A category shown
            <br /> here is not automatically live in your market.
          </p>
        </div>

        <ul className="flex flex-col gap-[22px] md:grid md:grid-cols-3 md:gap-8">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`relative overflow-hidden rounded-2xl border bg-white ${
                c.featured ? "h-[320px] border-[#d3dde8] md:col-span-3 md:border-white" : "h-[280px] border-[#d3dde8]"
              }`}
            >
              {/* Mobile placeholder art */}
              <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(140deg,#e8eef5_0%,#dbe5ef_55%,#cfdbe8_100%)] md:hidden">
                <div className="flex flex-col items-center gap-2 opacity-40">
                  <Image src={`${base}/${c.icon}`} alt="" width={40} height={40} className="opacity-80" />
                  <span className="text-xs leading-[19.2px] font-semibold tracking-[0.48px] text-[#0c2140] opacity-80">
                    {c.title}
                  </span>
                </div>
              </div>
              {/* Desktop photo */}
              <Image
                src={`${base}/${c.image}`}
                alt=""
                fill
                sizes={c.featured ? "(min-width: 1280px) 1248px, 100vw" : "(min-width: 1280px) 395px, 33vw"}
                className="hidden object-cover md:block"
              />
              <div
                className={`absolute inset-0 bg-linear-to-b from-[rgba(52,33,63,0.05)] from-30% to-[rgba(52,33,63,0.82)] md:to-[#242424] ${
                  c.featured ? "md:from-[rgba(36,36,36,0.18)] md:from-[64%]" : "md:from-[rgba(36,36,36,0.16)] md:from-[45.6%]"
                }`}
              />

              <div className="absolute inset-x-3.5 top-3.5 flex items-start justify-between">
                <span className={`flex items-center gap-[7px] rounded-full border px-[11px] pt-[4.5px] pb-[4.69px] ${c.tone.pill}`}>
                  <span className={`size-2 rounded-full ${c.tone.dot}`} />
                  <span className={`text-xs leading-[19.2px] font-semibold tracking-[0.24px] whitespace-nowrap ${c.tone.text}`}>
                    {c.badge}
                  </span>
                </span>
                <Link
                  href="#"
                  aria-label={`Explore ${c.title}`}
                  className="flex size-[38px] items-center justify-center rounded-full bg-[rgba(247,243,238,0.92)]"
                >
                  <Image src={`${base}/icon-arrow-up-right.svg`} alt="" width={18} height={18} />
                </Link>
              </div>

              <div
                className={`absolute inset-x-[18px] bottom-4 flex flex-col gap-[4.8px] md:inset-x-0 md:bottom-0 md:justify-center md:bg-white/8 md:py-4 md:backdrop-blur-md ${
                  c.featured ? "md:h-[101px] md:px-12" : "md:h-[107px] md:px-[18px]"
                }`}
              >
                <h3 className="text-[20.8px] leading-[25.38px] font-semibold tracking-[-0.208px] text-white">{c.title}</h3>
                <p className="text-[13px] leading-[20.8px] text-white/88 md:hidden">
                  {c.mobile.map((l, i) => (
                    <span key={l}>
                      {i > 0 && <br />}
                      {l}
                    </span>
                  ))}
                </p>
                <p className="hidden max-w-[406px] text-[13px] leading-[20.8px] text-white/88 md:block">{c.desktop}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
