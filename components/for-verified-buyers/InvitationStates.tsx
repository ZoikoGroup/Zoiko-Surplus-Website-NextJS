import { CircleCheck, Clock, Lock, SlidersHorizontal, Users, X } from "lucide-react";
import { GuideSection, TileCard, type TileCardItem } from "./shared";

const states: TileCardItem[] = [
  { icon: Users, tone: "mint", title: "Invited", body: "A seller has included your organization." },
  { icon: CircleCheck, title: "Active", body: "Within its scope and dates." },
  { icon: SlidersHorizontal, tone: "mint", title: "Limited", body: "Some markets, categories or actions are not open." },
  { icon: Clock, title: "Expired", body: "The time or scope has ended." },
  { icon: X, tone: "mint", title: "Revoked", body: "The seller withdrew access." },
  { icon: Lock, title: "Not eligible", body: "A policy gate does not currently allow it." },
];

export default function InvitationStates() {
  return (
    <GuideSection
      id="invitation-lifecycle"
      num="07"
      label="Invitation lifecycle"
      title="Proposed states, in plain words."
      lead="Your own status is shown only after secure sign-in. It is never shown on this page."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {states.map((s) => (
          <TileCard key={s.title} item={s} large />
        ))}
      </ul>
    </GuideSection>
  );
}
