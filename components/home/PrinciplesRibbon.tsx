import Image from "next/image";

const BASE = "/images/home/principles-ribbon";

type Variant = "desktop" | "mobile";

// Vector groups whose SVG already contains the stroke overflow; positioned with the design's insets.
function GroupIcon({ src, size, outer, inner }: { src: string; size: number; outer: string; inner: string }) {
  return (
    <span className="relative block overflow-clip" style={{ width: size, height: size }}>
      <span className="absolute" style={{ inset: outer }}>
        <span className="absolute" style={{ inset: inner }}>
          <Image src={src} alt="" fill sizes={`${size}px`} />
        </span>
      </span>
    </span>
  );
}

function PrincipleIcon({ name, variant }: { name: string; variant: Variant }) {
  const size = variant === "desktop" ? 32 : 22;
  const src = `${BASE}/${name}-${variant}.svg`;
  const m = variant === "mobile";
  if (name === "verified")
    return <GroupIcon src={src} size={size} outer="8.35% 8.35% 8.32% 8.29%" inner={m ? "-5%" : "-3.44%"} />;
  if (name === "document")
    return <GroupIcon src={src} size={size} outer="8.33% 16.67%" inner={m ? "-5% -6.25%" : "-3.44% -4.3%"} />;
  return <Image src={src} alt="" width={size} height={size} />;
}

const principles = [
  {
    icon: "shield",
    title: "Seller-controlled markets",
    text: ["Sellers decide which verified buyers ever", "see an opportunity."],
  },
  {
    icon: "verified",
    title: "Qualified participation",
    text: ["Identity, role and eligibility are checked in", "context, not assumed."],
  },
  {
    icon: "checklist",
    title: "Governed disposition",
    text: ["Policy and safety rules apply before any", "route is offered or ranked."],
  },
  {
    icon: "document",
    title: "Evidence & exceptions",
    text: ["Outcomes are recorded, and disputes", "follow defined processes."],
  },
];

export default function PrinciplesRibbon() {
  return (
    <section className="bg-[#0c2140] font-[family-name:var(--font-sora)]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-[22px] pt-[39px] pb-10 md:gap-4 md:px-10 md:py-32 lg:px-24">
        <div className="flex flex-col md:max-w-[852.96px] md:py-2">
          {/* Desktop eyebrow */}
          <p className="hidden items-center text-[13px] leading-[20.8px] font-semibold tracking-[1.56px] whitespace-nowrap uppercase md:flex">
            <span className="w-[22px] font-black tracking-[1.82px] text-white">02</span>
            <span aria-hidden="true" className="mr-[6.4px] ml-[7.6px] h-0.5 w-[46px] bg-[#d3dde8]" />
            <span className="text-[#17a185]">
              <span className="text-[#eaf1f8]">How the platform stays</span> accountable
            </span>
          </p>
          {/* Mobile eyebrow */}
          <p className="pb-[0.8px] text-[13px] leading-[20.8px] font-semibold tracking-[1.56px] whitespace-nowrap text-[#17a185] uppercase md:hidden">
            How the platform stays accountable
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-[1280px] flex-col md:mx-0 md:gap-14">
          <h2 className="-mt-[0.955px] mb-[20.8px] max-w-[372.4px] text-[22.4px] leading-[25px] font-semibold tracking-[-0.336px] text-white md:mt-0 md:mb-0 md:max-w-none md:text-[44px] md:leading-14 md:tracking-[-0.48px]">
            Four operating principles
            <br className="md:hidden" /> behind
            <br className="hidden md:block" /> every transaction.
          </h2>

          <div className="flex flex-col gap-[18px] md:gap-9">
            <ul className="flex flex-col gap-[18px] pt-[1.21px] md:grid md:grid-cols-2 md:gap-8 md:pt-0">
              {principles.map((p) => (
                <li key={p.title} className="flex items-start gap-[13px] md:items-center md:gap-4">
                  <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[rgba(23,161,133,0.16)] md:size-16">
                    <span className="md:hidden">
                      <PrincipleIcon name={p.icon} variant="mobile" />
                    </span>
                    <span className="hidden md:block">
                      <PrincipleIcon name={p.icon} variant="desktop" />
                    </span>
                  </span>
                  <div className="flex min-w-0 flex-col md:gap-1">
                    <h3 className="-mt-px pb-[0.73px] text-[17px] leading-[20.74px] font-semibold tracking-[-0.17px] text-white md:mt-0 md:text-[20px]">
                      {p.title}
                    </h3>
                    <p className="pt-[1.2px] pb-[0.8px] text-[13px] leading-[18.85px] text-[#a7bad0] md:pt-0 md:text-[15px]">
                      {p.text[0]}
                      <br className="md:hidden" /> {p.text[1]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="pb-[0.6px] text-[13px] leading-[20.8px] text-[#a7bad0]">
              These are descriptions of how the platform is
              <br className="md:hidden" /> designed to operate — not certifications or third-
              <br className="md:hidden" />
              party endorsements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
