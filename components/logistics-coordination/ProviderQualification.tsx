import { Scale, Search, ShieldCheck, Truck } from "lucide-react";
import { GuideSection, TileCard, type TileCardItem } from "./shared";

const checks: TileCardItem[] = [
  { icon: Scale, title: "Operating authority", body: "Legal permission to carry out the work." },
  { icon: Truck, title: "Capability", body: "Suitable for the goods and handling conditions." },
  { icon: ShieldCheck, title: "Insurance", body: "Where applicable to the service." },
  { icon: Search, title: "Screening", body: "Checks before any assignment." },
];

export default function ProviderQualification() {
  return (
    <GuideSection
      id="provider-qualification"
      num="05"
      label="Provider qualification"
      title="What a legitimate provider shows."
      lead="Qualification is screened. Reading this page does not enroll anyone."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {checks.map((c) => (
          <TileCard key={c.title} item={c} />
        ))}
      </ul>
    </GuideSection>
  );
}
