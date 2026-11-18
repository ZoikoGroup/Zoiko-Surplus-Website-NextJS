import SevenStagesTabs from "@/components/about/SevenStagesTabs";
import { Note, Section, SectionHeading } from "./shared";

// The tab list and stage panel are the same component the About page uses.
export default function SevenStages() {
  return (
    <Section labelledBy="kc-stages-heading" innerClassName="flex flex-col gap-10 md:gap-14">
      <SectionHeading
        id="kc-stages-heading"
        num="03"
        label="The seven stages"
        title="Qualify → Govern → Match → Optimize → Transact → Prove → Resolve."
        lead="Select a stage to see what it does in plain English. On a keyboard, use the arrow keys."
        titleClassName="max-w-none"
      />
      <div className="flex flex-col gap-5">
        <SevenStagesTabs />
        <Note>Evidence records what happened in the process; it does not by itself guarantee the truth of underlying claims.</Note>
      </div>
    </Section>
  );
}
