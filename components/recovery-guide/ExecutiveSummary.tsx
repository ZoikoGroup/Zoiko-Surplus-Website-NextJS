import Image from "next/image";
import { Coins, FileCheck, Lock, type LucideIcon } from "lucide-react";
import { GuideSection, SandTile, cardShadow, img } from "./shared";

const distinctions: { icon: LucideIcon; title: [string, string]; body: string; image: string; alt: string }[] = [
  {
    icon: Coins,
    title: ["What stock is worth", "is not what you keep."],
    body: "Value on paper becomes net proceeds only after fees, handling, logistics and time are counted.",
    image: img("summary-worth.webp"),
    alt: "Professional comparing figures on a laptop in a stockroom",
  },
  {
    icon: Lock,
    title: ["Wanting to sell is not", "being allowed to."],
    body: "Brand rights, category rules, buyer eligibility and market status each need to allow the route.",
    image: img("summary-allowed.webp"),
    alt: "Worker checking goods against a clipboard",
  },
  {
    icon: FileCheck,
    title: ["A governed process does", "not promise an outcome."],
    body: "Following the steps improves records and control. It does not assure a buyer, a price or an impact figure.",
    image: img("summary-outcome.webp"),
    alt: "Gloved hand inspecting goods in a tote",
  },
];

export default function ExecutiveSummary() {
  return (
    <GuideSection
      id="distinctions"
      num="01"
      label="Executive summary"
      title="Three distinctions to hold on to."
      lead="Most recovery mistakes start by treating one side of these pairs as the other."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {distinctions.map((d) => (
          <li key={d.image} className={`flex flex-col overflow-hidden rounded-2xl border border-[#e6e9ef] bg-white ${cardShadow}`}>
            <div className="relative aspect-[400/150] w-full bg-[#16263f]">
              <Image src={d.image} alt={d.alt} fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />
            </div>
            <div className="relative flex flex-1 flex-col gap-2 px-6 pt-10 pb-7">
              <span className="absolute -top-6 left-5 rounded-2xl border-4 border-white">
                <SandTile icon={d.icon} />
              </span>
              <h3 className="text-xl font-semibold leading-6 text-[#0f1f3a]">
                {d.title[0]}
                <br className="hidden lg:block" /> {d.title[1]}
              </h3>
              <p className="text-sm leading-6 text-[#556987]">{d.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
