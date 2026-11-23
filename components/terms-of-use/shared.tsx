import Image from "next/image";
import type { ReactNode } from "react";
import { GuideSection, ImageTag, TileCard, type TileCardItem } from "@/components/report-a-concern/shared";

// Section, card and tile blocks are shared with the Legal Center / Report a Concern pages.
export * from "@/components/report-a-concern/shared";

export const touImg = (name: string) => `/images/terms-of-use/${name}`;

// Ordered row of white topic pills above the topic cards (Terms of Use, Privacy Notice).
export function TopicPills({ topics }: { topics: string[] }) {
  return (
    <ol aria-label="Topics, in order" className="flex flex-wrap gap-2.5">
      {topics.map((t) => (
        <li
          key={t}
          className="rounded-full border border-[#e6e9ef] bg-white px-[18px] py-2.5 text-[15px] text-[#0f1f3a] shadow-[0_2px_8px_-4px_rgba(12,33,64,0.15)]"
        >
          {t}
        </li>
      ))}
    </ol>
  );
}

const isTile =(t: TileCardItem | ReactNode): t is TileCardItem =>
  typeof t === "object" && t !== null && "icon" in t && "title" in t;

// Numbered section with a 2×2 grid of tiles beside a photo.
// `tiles` items may be plain tile data or a ready-made <li> (e.g. the print button tile).
export function TilesBesidePhoto({
  id,
  num,
  label,
  title,
  lead,
  tiles,
  image,
  alt,
  aspect = "aspect-[555/370]",
  tag,
  imageFirst = false,
  imageCol = imageFirst ? "lg:grid-cols-[minmax(0,527px)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,555px)]",
  intro,
}: {
  id: string;
  num: string;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  tiles: (TileCardItem | ReactNode)[];
  image: string;
  alt: string;
  aspect?: string;
  /** White pill laid over the bottom-left of the photo. */
  tag?: string;
  /** Photo on the left at desktop width; it always sits under the heading on small screens. */
  imageFirst?: boolean;
  /** Desktop grid columns (photo width); defaults to 527px left / 555px right. */
  imageCol?: string;
  /** Content between the heading and the tiles/photo row. */
  intro?: ReactNode;
}) {
  return (
    <GuideSection id={id} num={num} label={label} title={title} lead={lead} leadClassName="max-w-[800px]">
      <div className="flex flex-col gap-4">
        {intro}
        <div className={`grid items-center gap-6 lg:gap-7 ${imageCol}`}>
          <div className={`relative ${aspect} w-full overflow-hidden rounded-[20px] bg-[#16263f] ${imageFirst ? "" : "lg:order-last"}`}>
            <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 555px, 100vw" className="object-cover" />
            {tag && (
              <div className="absolute bottom-3 left-3">
                <ImageTag>{tag}</ImageTag>
              </div>
            )}
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {tiles.map((t, i) =>
              isTile(t) ? (
                <TileCard key={t.title} item={t} />
              ) : (
                <li key={i} className="flex flex-col gap-2 rounded-2xl border border-[#e6e9ef] bg-white p-5">
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </GuideSection>
  );
}
