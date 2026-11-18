import Image from "next/image";
import { Clock, EyeOff, Users, X } from "lucide-react";
import { GuideSection, ImageTag, TileCard, fvbImg, type TileCardItem } from "./shared";

const traits: TileCardItem[] = [
  { icon: Users, tone: "mint", title: "Scoped", body: "Limited to what the seller chose." },
  { icon: Clock, title: "Expires", body: "Rights can end at a set time." },
  { icon: X, tone: "mint", title: "Revocable", body: "A seller can withdraw access." },
  { icon: EyeOff, title: "Never listed", body: "No invited organizations are published." },
];

export default function SellerAudience() {
  return (
    <GuideSection
      id="seller-audience"
      num="05"
      label="Seller-private audience"
      title={
        <>
          The seller decides
          <br className="hidden md:block" /> who sees what.
        </>
      }
      lead="A seller invitation is separate from verification. It is scoped, can expire and can be withdrawn."
    >
      <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,555px)] lg:gap-7">
        <ul className="grid gap-4 sm:grid-cols-2">
          {traits.map((t) => (
            <TileCard key={t.title} item={t} />
          ))}
        </ul>
        <div className="relative aspect-[555/370] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={fvbImg("seller-audience.webp")}
            alt="Two people checking goods on shop shelving"
            fill
            sizes="(min-width: 1024px) 555px, 100vw"
            className="object-cover"
          />
          <span className="absolute bottom-3 left-3">
            <ImageTag>Illustrative imagery</ImageTag>
          </span>
        </div>
      </div>
    </GuideSection>
  );
}
