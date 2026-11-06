import { Building2, Scale, SlidersHorizontal } from "lucide-react";
import { CardGrid, SectionHeading, Section } from "./shared";

export default function LegalRole() {
  return (
    <Section labelledBy="legal-role-heading">
      <SectionHeading
        id="legal-role-heading"
        num="05"
        label="Legal & commercial role"
        title="What the platform is and isn’t."
        lead="A clear statement of role: Zoiko Surplus governs and records; sellers, buyers and partners carry their own legal responsibilities."
        titleClassName="max-w-[780px]"
      />
      <CardGrid
        cols={3}
        items={[
          {
            icon: Building2,
            title: "Platform operator",
            body: "Zoiko Surplus operates the governed platform and records decisions.",
          },
          {
            icon: SlidersHorizontal,
            title: "Not a principal",
            body: "It doesn’t buy, own or sell the goods, or take title or custody.",
          },
          {
            icon: Scale,
            title: "Not a certifier",
            body: "It doesn’t certify safety, authenticity, quality or legal title.",
          },
        ]}
      />
    </Section>
  );
}
