import Image from "next/image";
import { Ban, Check, EyeOff, Lock, type LucideIcon } from "lucide-react";
import { GuideSection, cardShadow, hmwImg, sora } from "./shared";

const columns: {
  icon: LucideIcon;
  title: string;
  items: string[];
  shown: boolean;
  image: string;
  alt: string;
}[] = [
  {
    icon: EyeOff,
    title: "Shown publicly",
    items: ["The process and its decision gates", "Illustrative, generic steps", "Exception and hold routes"],
    shown: true,
    image: hmwImg("boundary-shown.webp"),
    alt: "Hands with a pen at a laptop beside printed charts",
  },
  {
    icon: Lock,
    title: "Never shown publicly",
    items: ["Confidential lots and listing IDs", "Bids, offers and prices", "Participant identifiers and internal statuses"],
    shown: false,
    image: hmwImg("boundary-never-shown.webp"),
    alt: "Three colleagues reviewing stock between shelves of glassware",
  },
];

export default function Boundaries() {
  return (
    <GuideSection
      id="boundaries"
      num="04"
      label="Public and private boundaries"
      title={
        <>
          What this page shows, and what
          <br className="hidden md:block" /> it never will.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {columns.map(({ icon: Icon, title, items, shown, image, alt }) => (
          <section
            key={title}
            aria-labelledby={`boundary-${shown ? "shown" : "hidden"}`}
            className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
          >
            <div className="relative aspect-[610/160] w-full bg-[#16263f]">
              <Image src={image} alt={alt} fill sizes="(min-width: 768px) 610px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <h3
                id={`boundary-${shown ? "shown" : "hidden"}`}
                className={`${sora} flex items-center gap-3 text-2xl font-semibold text-[#0f1f3a]`}
              >
                <span
                  className={`flex size-11 items-center justify-center rounded-xl ${
                    shown ? "bg-[#e3f4ee] text-[#16a37a]" : "bg-[#f5e3c3] text-[#8a5a14]"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-5 text-[#556987]">
                    {shown ? (
                      <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#16a37a]" strokeWidth={2} />
                    ) : (
                      <Ban aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#a35d14]" strokeWidth={1.75} />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </GuideSection>
  );
}
