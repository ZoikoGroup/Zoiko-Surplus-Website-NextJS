import Image from "next/image";
import type { ReactNode } from "react";
import { GuideSection, TileCard, type TileCardItem } from "@/components/for-partners/shared";

// Section, card and tile blocks are shared with the For Partners / Request Enterprise Demo pages.
export * from "@/components/for-partners/shared";

export const racImg = (name: string) => `/images/report-a-concern/${name}`;

// Numbered section with a 2×2 grid of icon tiles beside a photo (Intake readiness, Secure follow-up).
export function TilesWithPhoto({
  id,
  num,
  label,
  title,
  lead,
  tiles,
  image,
  alt,
  imageFirst = false,
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  tiles: TileCardItem[];
  image: string;
  alt: string;
  /** Photo on the left at desktop width; it always sits under the heading on small screens. */
  imageFirst?: boolean;
}) {
  return (
    <GuideSection id={id} num={num} label={label} title={title} lead={lead}>
      <div
        className={`grid items-center gap-6 lg:gap-7 ${
          imageFirst ? "lg:grid-cols-[minmax(0,555px)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,570px)]"
        }`}
      >
        <div
          className={`relative aspect-[555/370] w-full overflow-hidden rounded-[20px] bg-[#16263f] ${
            imageFirst ? "" : "lg:order-last"
          }`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 570px, 100vw"
            className="object-cover"
          />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {tiles.map((t) => (
            <TileCard key={t.title} item={t} />
          ))}
        </ul>
      </div>
    </GuideSection>
  );
}
