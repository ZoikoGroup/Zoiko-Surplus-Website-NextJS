import { Check, FileCheck, ListChecks, Lock, MapPin, Package, UserCheck, type LucideIcon } from "lucide-react";
import { GuideSection, InlineCard, sora, type InlineItem } from "./shared";

const groups: { icon: LucideIcon; tone: "mint" | "sand"; title: string; items: InlineItem[] }[] = [
  {
    icon: Package,
    tone: "sand",
    title: "Preparation",
    items: [
      { icon: ListChecks, title: "Eligible goods", body: "Goods are within the approved category and market scope." },
      { icon: Package, title: "Packaging and labels", body: "Safe packaging, intact labels and clear handling conditions." },
      { icon: FileCheck, title: "Provenance awareness", body: "Records show where the goods came from." },
    ],
  },
  {
    icon: UserCheck,
    tone: "mint",
    title: "Seller release authority",
    items: [
      { icon: Check, tone: "mint", title: "Authorization before pickup", body: "No collection happens without the seller's approval." },
      { icon: MapPin, tone: "mint", title: "Destination checked", body: "The delivery destination matches the approved transaction." },
      { icon: Lock, tone: "mint", title: "Release can be withheld", body: "The seller can stop or change a movement while it is still permitted." },
    ],
  },
];

export default function BeforeAnythingMoves() {
  return (
    <GuideSection
      id="before-moving"
      num="04"
      label="Preparation and release authority"
      title="Before anything moves."
      lead="Two groups of checks. Both must be settled first."
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-7">
        {groups.map(({ icon: Icon, tone, title, items }) => (
          <div key={title} className="flex flex-col gap-5">
            <h3 className={`${sora} flex items-center gap-3 text-xl font-semibold text-[#0f1f3a]`}>
              <span
                className={`flex size-11 items-center justify-center rounded-xl ${
                  tone === "mint" ? "bg-[#e3f4ee] text-[#16a37a]" : "bg-[#f5e3c3] text-[#8a5a14]"
                }`}
              >
                <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              {title}
            </h3>
            <ul className="flex flex-col gap-4">
              {items.map((it) => (
                <InlineCard key={it.title} item={it} size="lg" />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </GuideSection>
  );
}
