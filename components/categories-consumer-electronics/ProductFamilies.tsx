import Image from "next/image";
import { Boxes, ShieldAlert } from "lucide-react";
import { Band, SectionHeading, hanken, img } from "./shared";

const families = [
  {
    title: "Phones & wearables",
    body: "Identifier handling and activation-lock status; personal data and counterfeit risk apply.",
    tags: ["Data", "Activation lock", "Batteries"],
    image: "ce-fam-phones.webp",
    alt: "Store assistant arranging phones on a retail display wall",
    hazard: false,
  },
  {
    title: "TV, audio & entertainment",
    body: "Electrical state and accessory completeness; damage, recall and plug/voltage compatibility.",
    tags: ["Electrical", "Recall", "Accessories"],
    image: "ce-fam-tv-audio.webp",
    alt: "Television on a wooden media unit in a living room",
    hazard: false,
  },
  {
    title: "Small appliances",
    body: "Functional inspection, plug and voltage; electrical and fire-hazard recall review.",
    tags: ["Fire hazard", "Voltage", "Recall"],
    image: "ce-fam-appliances.webp",
    alt: "Kitchen worktop with a hob, microwave and small appliances",
    hazard: false,
  },
  {
    title: "Components & accessories",
    body: "Compatibility, authenticity and packaging; counterfeit, IP and export restrictions.",
    tags: ["Counterfeit", "IP", "Export"],
    image: "ce-fam-components.webp",
    alt: "Laptop and monitor with colourful abstract wallpaper",
    hazard: false,
  },
  {
    title: "Battery-containing / damaged",
    body: "Hazard classification and packing rules; specialized transport and processing.",
    tags: ["Hazard class", "Packing", "Specialist"],
    image: "ce-fam-battery-damaged.webp",
    alt: "Illuminated service sign above a repair counter",
    hazard: true,
  },
];

export default function ProductFamilies() {
  return (
    <Band id="product-families" labelledBy="ce-families-heading" className="flex flex-col gap-10 md:gap-12">
      <SectionHeading
        id="ce-families-heading"
        num="02"
        label="Product families"
        title="Different devices, different controls."
        titleClassName="max-w-[620px]"
        lead="Five illustrative families, each with its own safety, data and provenance considerations. Nothing here is stock, and tags are considerations — not a checklist that grants acceptance."
      />

      <ul className={`${hanken} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
        {families.map((f) => {
          const Icon = f.hazard ? ShieldAlert : Boxes;
          return (
            <li key={f.title} className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white">
              <div className="relative aspect-[8/5] w-full">
                <Image src={img(f.image)} alt={f.alt} fill sizes="(min-width: 1024px) 404px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-xl bg-white/95 shadow-sm">
                  <Icon aria-hidden="true" className="size-4 text-[#0f1f3a]" strokeWidth={1.5} />
                </span>
              </div>
              <div className="flex flex-col gap-1.5 p-4">
                <h3 className="text-base font-semibold text-[#0f1f3a]">{f.title}</h3>
                <p className="text-sm leading-5 text-[#556987]">{f.body}</p>
                <ul className="flex flex-wrap gap-1.5 pt-1.5" aria-label="Considerations">
                  {f.tags.map((t) => (
                    <li key={t} className="rounded-full bg-[#f5e7d6] px-2 py-[3px] text-xs font-bold text-[#7a4d0f]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Band>
  );
}
