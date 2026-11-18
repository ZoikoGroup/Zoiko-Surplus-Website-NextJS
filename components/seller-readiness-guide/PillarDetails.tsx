import Image from "next/image";
import { GuideSection, ImageTag, srImg } from "./shared";

type Group = { items: [string, string][]; image: string; alt: string; imageSide: "left" | "right" };

const groups: Group[] = [
  {
    imageSide: "right",
    image: srImg("detail-authority-inventory.webp"),
    alt: "Two colleagues shaking hands in a warehouse",
    items: [
      ["Who may authorize", "Name the decision maker who can approve disposal."],
      ["Title and rights", "Confirm you hold title and disposal rights."],
      ["Contract and brand rights", "Check supplier contracts and brand-owner limits."],
      ["Category, SKU family, quantities", "Gather these facts internally, in your own systems."],
      ["Location and packaging", "Know where goods are and how they are packed."],
    ],
  },
  {
    imageSide: "left",
    image: srImg("detail-condition-safety.webp"),
    alt: "Shop owner writing notes beside a parcel at her counter",
    items: [
      ["Defects and grading", "Use an objective method, written down."],
      ["Labeling and returns", "Know what labels and return records exist."],
      ["Traceability", "Be able to trace goods to their source."],
      ["Recalls and notices", "Check for recalls and hazard notices first."],
      ["Hold signals", "Know what would make you pause."],
    ],
  },
  {
    imageSide: "right",
    image: srImg("detail-brand-market.webp"),
    alt: "Shop worker looking through clothing on a rail",
    items: [
      ["Audience and territory", "Where and to whom you are allowed to sell."],
      ["Channel restrictions", "Brand owners may limit channels."],
      ["Local activation", "Channel rights are not local availability."],
      ["Records and approvals", "Keep internal approvals together."],
      ["Your objective", "Be clear on what you want to achieve."],
    ],
  },
];

export default function PillarDetails() {
  return (
    <GuideSection
      id="pillar-details"
      num="01"
      label="Pillar details"
      title="What each pillar asks of you."
      lead="Authority and inventory, condition and safety, brand and market with evidence. All work stays internal."
    >
      <div className="flex flex-col gap-8 md:gap-14">
        {groups.map(({ items, image, alt, imageSide }) => (
          <div
            key={image}
            className="grid items-center gap-6 rounded-[20px] border-2 border-[#eef0f3] bg-white p-3 md:p-4 lg:grid-cols-2 lg:gap-10"
          >
            <ol
              className={`flex flex-col gap-6 px-3 py-4 md:px-12 lg:py-2 ${imageSide === "left" ? "lg:order-last" : ""}`}
            >
              {items.map(([term, detail], i) => (
                <li key={term} className="flex gap-3.5">
                  <span className="w-5 shrink-0 text-base font-semibold text-[#0f1f3a]">{i + 1}.</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-semibold text-[#0f1f3a]">{term}</span>
                    <span className="text-[15px] leading-6 text-[#556987]">{detail}</span>
                  </div>
                </li>
              ))}
            </ol>
            <div className="relative aspect-[626/345] w-full overflow-hidden rounded-2xl bg-[#16263f]">
              <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 626px, 100vw" className="object-cover" />
              <span className="absolute bottom-3 left-3">
                <ImageTag>Illustrative imagery</ImageTag>
              </span>
            </div>
          </div>
        ))}
      </div>
    </GuideSection>
  );
}
