import Image from "next/image";
import { EyeOff, X } from "lucide-react";
import { GuideSection, ImageTag, exImg, sora } from "./shared";

const hidden = [
  "Seller names and identities",
  "Pricing, offers and bids",
  "Lot IDs, volumes and photos of private stock",
  "Buyer identities or company data",
];

export default function Confidentiality() {
  return (
    <GuideSection
      id="confidentiality"
      num="07"
      label="Confidentiality"
      title="What never appears on a public page."
      lead="Seller-private details stay private, and access is enforced on the server."
    >
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,567px)_minmax(0,625px)] lg:justify-between">
        <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e9ef] bg-white p-7">
          <h3 className={`${sora} flex items-center gap-3 text-xl font-semibold text-[#0f1f3a]`}>
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#fde3df] text-[#c2413a]">
              <EyeOff aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </span>
            Never shown publicly
          </h3>
          <ul className="flex flex-col gap-3">
            {hidden.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-5 text-[#3d4a60]">
                <X aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#d0453b]" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[625/370] w-full overflow-hidden rounded-[20px] bg-[#16263f]">
          <Image
            src={exImg("confidentiality.webp")}
            alt="Worker checking goods against a clipboard"
            fill
            sizes="(min-width: 1024px) 625px, 100vw"
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
