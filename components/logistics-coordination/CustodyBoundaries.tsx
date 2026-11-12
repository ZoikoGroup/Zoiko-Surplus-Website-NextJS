import { FileCheck, Package, TriangleAlert, type LucideIcon } from "lucide-react";
import { GuideSection, SandTile, sora } from "./shared";

const concepts: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Package, title: "Possession", body: "Who physically has the goods at a given moment. Proved by handoff records." },
  { icon: FileCheck, title: "Title", body: "Who legally owns the goods. It does not follow from who is carrying them." },
  { icon: TriangleAlert, title: "Risk", body: "Who bears loss or delay. Set in the agreement for the transaction." },
];

export default function CustodyBoundaries() {
  return (
    <GuideSection
      id="custody"
      num="07"
      label="Custody and title boundaries"
      title="Three things that are not the same."
      lead="Each is set by the agreements between the parties, not by this page."
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {concepts.map(({ icon, title, body }) => (
          <li key={title} className="flex flex-col gap-2 rounded-2xl border border-t-[3px] border-[#8a5a14] bg-white p-5 pb-7">
            <SandTile icon={icon} />
            <h3 className={`${sora} pt-2 text-lg font-semibold text-[#0f1f3a]`}>{title}</h3>
            <p className="text-sm leading-6 text-[#556987]">{body}</p>
          </li>
        ))}
      </ul>
    </GuideSection>
  );
}
