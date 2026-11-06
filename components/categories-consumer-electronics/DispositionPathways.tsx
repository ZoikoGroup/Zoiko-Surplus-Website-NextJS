import Image from "next/image";
import { Info, Recycle, Repeat, SlidersHorizontal } from "lucide-react";
import { Band, SectionHeading, hanken, img } from "./shared";

const routes = [
  {
    icon: Repeat,
    title: "Resale / redeployment",
    body: "Working, data-clear devices to approved business buyers.",
    tag: "Where enabled",
    image: "ce-route-resale.webp",
    alt: "Monitor and laptop on a desk showing colourful wallpaper",
  },
  {
    icon: SlidersHorizontal,
    title: "Refurbishment",
    body: "Repair or reconditioning via a permitted partner before reuse.",
    tag: "Partner",
    image: "ce-route-refurbishment.webp",
    alt: "Engineer sketching device schematics on a workbench full of tools",
  },
  {
    icon: Recycle,
    title: "Recycling / recovery",
    body: "Material recovery or compliant recycling for end-of-life units.",
    tag: "Specialist",
    image: "ce-route-recycling.webp",
    alt: "Two colleagues planning at a whiteboard with a laptop",
  },
];

export default function DispositionPathways() {
  return (
    <Band id="disposition-pathways" labelledBy="ce-pathways-heading" className="flex flex-col gap-10 md:gap-12">
      <SectionHeading
        id="ce-pathways-heading"
        num="07"
        label="Disposition pathways"
        title="Where qualified electronics can go."
        titleClassName="max-w-[800px]"
        lead="Illustrative, policy-gated routes — data and safety status determine which are even possible. None is confirmed, priced or executable here."
      />

      <ul className={`${hanken} grid gap-4 sm:grid-cols-3`}>
        {routes.map(({ icon: Icon, title, body, tag, image, alt }) => (
          <li key={title} className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white">
            <div className="relative aspect-[8/5] w-full">
              <Image src={img(image)} alt={alt} fill sizes="(min-width: 640px) 405px, 100vw" className="object-cover" />
              <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-xl bg-white/95 shadow-sm">
                <Icon aria-hidden="true" className="size-4 text-[#0f1f3a]" strokeWidth={1.5} />
              </span>
            </div>
            <div className="flex flex-col items-start gap-1.5 p-[18px]">
              <h3 className="text-base font-semibold text-[#0f1f3a]">{title}</h3>
              <p className="text-sm leading-5 text-[#556987]">{body}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#f5e7d6] px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#7a4d0f]">
                <Info aria-hidden="true" className="size-3" strokeWidth={2} />
                {tag}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Band>
  );
}
