import Image from "next/image";
import { ImageTag, TileCard, type TileCardItem } from "./shared";

// A photo beside a 2×2 grid of icon tiles. Sections 03 and 04 mirror each other.
export default function ImageWithTiles({
  tiles,
  image,
  alt,
  imageSide,
  aspect = "aspect-[555/370]",
}: {
  tiles: TileCardItem[];
  image: string;
  alt: string;
  imageSide: "left" | "right";
  /** Photo ratio; Seller Overview's recovery variables use a taller photo beside five tiles. */
  aspect?: string;
}) {
  const left = imageSide === "left";
  return (
    <div
      className={`grid items-center gap-6 lg:gap-7 ${
        left ? "lg:grid-cols-[minmax(0,555px)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,555px)]"
      }`}
    >
      <div className={`relative ${aspect} w-full overflow-hidden rounded-[20px] bg-[#16263f] ${left ? "" : "lg:order-last"}`}>
        <Image src={image} alt={alt} fill sizes="(min-width: 1024px) 555px, 100vw" className="object-cover" />
        <span className="absolute bottom-3 left-3">
          <ImageTag>Illustrative imagery</ImageTag>
        </span>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {tiles.map((t) => (
          <TileCard key={t.title} item={t} />
        ))}
      </ul>
    </div>
  );
}
