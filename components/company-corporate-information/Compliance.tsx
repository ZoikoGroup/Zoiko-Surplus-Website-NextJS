import { FolderCheck, Lock, Scale, ShieldAlert } from "lucide-react";
import { CardGrid, Note, SectionHeading, Section } from "./shared";

export default function Compliance() {
  return (
    <Section labelledBy="compliance-heading">
      <SectionHeading
        id="compliance-heading"
        num="11"
        label="Compliance & standards"
        title="A compliance-led posture."
        lead="How compliance is approached. No specific certification, audit opinion or standard is claimed on this page."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-4">
        <CardGrid
          cols={4}
          tone="navy"
          items={[
            {
              icon: Scale,
              title: "Lawful operation",
              body: "The platform operates within applicable law; obligations stay with accountable parties.",
            },
            { icon: Lock, title: "Privacy by design", body: "A need-to-know, role-scoped approach to data." },
            { icon: FolderCheck, title: "Auditable evidence", body: "Decisions and outcomes are documented to support review." },
            {
              icon: ShieldAlert,
              title: "Screening & controls",
              body: "Policy, eligibility and risk controls applied before activity.",
            },
          ]}
        />
        <Note>Descriptive only — not a statement of certification, accreditation or regulatory approval.</Note>
      </div>
    </Section>
  );
}
