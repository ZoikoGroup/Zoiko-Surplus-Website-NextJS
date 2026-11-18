import Image from "next/image";
import { CornerIcon, cardShadow, sora, type PhotoCardItem } from "@/components/buyer-qualification/shared";

// Section, card and tile blocks are shared with the Buyer Qualification Guide / For Verified Buyers pages.
export * from "@/components/buyer-qualification/shared";

export const fpImg = (name: string) => `/images/for-partners/${name}`;

// White card with the photo on top and the copy below it.
// `eyebrow` adds a numbered mint label ("Role 1"); `pending` adds the not-yet-live link hint.
export function ImageTopGrid({
  items,
  eyebrow,
  pending = false,
  aspect = "aspect-[295/180]",
  cols = "sm:grid-cols-2 lg:grid-cols-4",
  sizes = "(min-width: 1024px) 295px, (min-width: 640px) 50vw, 100vw",
}: {
  items: PhotoCardItem[];
  eyebrow?: string;
  pending?: boolean;
  aspect?: string;
  cols?: string;
  sizes?: string;
}) {
  return (
    <ul className={`grid gap-5 ${cols}`}>
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}
        >
          <div className={`relative ${aspect} w-full bg-[#16263f]`}>
            <Image src={item.image} alt={item.alt} fill sizes={sizes} className="object-cover" />
            <CornerIcon icon={item.icon} />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-6">
            {eyebrow && (
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#16a37a]">
                {eyebrow} {i + 1}
              </span>
            )}
            <h3 className={`${sora} text-xl font-semibold leading-6 text-[#0f1f3a]`}>{item.title}</h3>
            <p className="text-sm leading-6 text-[#556987]">{item.body}</p>
            {pending && <p className="mt-auto pt-3 text-sm font-medium text-[#8a5a14]">Pending →</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
