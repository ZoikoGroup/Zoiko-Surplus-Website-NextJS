import Image from "next/image";
import { Ban, Check, EyeOff, Lock } from "lucide-react";
import { GuideSection, cardShadow, lcImg, sora } from "./shared";

const panels = [
  {
    icon: EyeOff,
    tone: "mint" as const,
    title: "Shown publicly",
    items: ["How coordination works, in general", "Roles and responsibilities", "Exception paths"],
    image: lcImg("shown-publicly.webp"),
    alt: "Hands typing on a laptop",
  },
  {
    icon: Lock,
    tone: "sand" as const,
    title: "Never shown publicly",
    items: ["Seller consignments and prices", "Partner assignments and carriers", "Evidence, addresses and tracking"],
    image: lcImg("never-shown.webp"),
    alt: "Three colleagues reviewing stock on warehouse shelving",
  },
];

export default function Confidentiality() {
  return (
    <GuideSection id="confidentiality" num="10" label="Confidentiality and permissions" title="Only the data a role needs.">
      <ul className="grid gap-5 md:grid-cols-2">
        {panels.map(({ icon: Icon, tone, title, items, image, alt }) => {
          const mint = tone === "mint";
          const Mark = mint ? Check : Ban;
          return (
            <li key={title} className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
              <div className="relative aspect-[610/160] w-full bg-[#16263f]">
                <Image src={image} alt={alt} fill sizes="(min-width: 768px) 610px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <h3 className={`${sora} flex items-center gap-3 text-xl font-semibold text-[#0f1f3a]`}>
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl ${
                      mint ? "bg-[#e3f4ee] text-[#16a37a]" : "bg-[#f5e3c3] text-[#8a5a14]"
                    }`}
                  >
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                  </span>
                  {title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm leading-5 text-[#3d4a60]">
                      <Mark
                        aria-hidden="true"
                        className={`mt-0.5 size-4 shrink-0 ${mint ? "text-[#16a37a]" : "text-[#b5651d]"}`}
                        strokeWidth={mint ? 2 : 1.75}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </GuideSection>
  );
}
