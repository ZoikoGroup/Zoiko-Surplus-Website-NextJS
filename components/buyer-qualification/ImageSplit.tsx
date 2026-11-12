import Image from "next/image";
import type { ReactNode } from "react";
import { GuideSection, ImageTag, TileCard, type TileCardItem } from "./shared";

// Section heading, then a photo beside a 2-column grid of tile cards.
export function ImageSplit({
  id,
  num,
  label,
  title,
  lead,
  image,
  alt,
  items,
  tag = true,
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  image: string;
  alt: string;
  items: TileCardItem[];
  /** Show the "Illustrative imagery" pill on the photo. */
  tag?: boolean;
}) {
  return (
    <GuideSection id={id} num={num} label={label} title={title} lead={lead}>
      <div className="grid items-center gap-7 lg:grid-cols-2">
        <div className="relative aspect-[555/370] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 555px, 100vw" className="object-cover" />
          {tag && (
            <span className="absolute bottom-3 left-3">
              <ImageTag>Illustrative imagery</ImageTag>
            </span>
          )}
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <TileCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
