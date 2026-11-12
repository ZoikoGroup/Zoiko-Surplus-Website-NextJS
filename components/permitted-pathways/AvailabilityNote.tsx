import { ShieldAlert } from "lucide-react";
import { CreamNote, GuideSection } from "./shared";

export default function AvailabilityNote() {
  return (
    <GuideSection
      id="availability-note"
      num="01"
      label="Availability note"
      title={
        <>
          Pathways are permitted,
          <br className="hidden md:block" /> not automatic.
        </>
      }
      lead="Every route below is illustrative and policy-gated. A pathway is available only where the seller has authorized it and the market, category and partners all qualify."
    >
      <CreamNote icon={<ShieldAlert aria-hidden="true" className="size-4" strokeWidth={1.75} />}>
        <strong className="font-semibold text-[#0f1f3a]">Reviewed, not guaranteed.</strong> Nothing on this page confirms
        a live route, an available partner, a price or an outcome. The region selector is informational and never
        activates a pathway.
      </CreamNote>
    </GuideSection>
  );
}
