import { Ban, Clock, RotateCcw, Scale, TriangleAlert } from "lucide-react";
import { GuideSection, InlineCard, type InlineItem } from "./shared";

const outcomes: InlineItem[] = [
  { icon: Clock, title: "Hold", body: "Movement paused while an issue is checked." },
  { icon: Ban, title: "Failed collection", body: "The pickup did not happen. It is rescheduled or stopped." },
  { icon: Clock, title: "Delay", body: "A step is running late. Parties are informed." },
  { icon: TriangleAlert, title: "Loss or damage", body: "Recorded and referred under the agreement." },
  { icon: RotateCcw, title: "Refusal", body: "A party declines the goods. A return path applies." },
  { icon: Scale, title: "Disputed proof", body: "Evidence is contested and escalated for resolution." },
];

export default function StatusExceptions() {
  return (
    <GuideSection
      id="exceptions"
      num="09"
      label="Status and exceptions"
      title={
        <>
          When a movement does not go to
          <br className="hidden md:block" /> plan.
        </>
      }
      lead="Each outcome has a defined path. None promises a particular remedy."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((o) => (
          <InlineCard key={o.title} item={o} />
        ))}
      </ul>
    </GuideSection>
  );
}
