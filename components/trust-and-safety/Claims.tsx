import { BadgeCheck, FileCheck, Scale, X } from "lucide-react";
import { CardGrid, SectionHeading, Section, WideImage, img } from "./shared";

export default function Claims() {
  return (
    <Section labelledBy="claims-heading">
      <SectionHeading
        id="claims-heading"
        num="09"
        label="Claims & independent proof"
        title="What we do and don’t claim."
        lead="Plain limits on what the platform asserts. These hold across every market and category."
        titleClassName="max-w-[780px]"
      />
      <div className="flex flex-col gap-5">
        <WideImage src={img("claims.webp")} alt="Stack of tabbed documents on a desk beside a computer" />
        <CardGrid
          cols={4}
          tone="navy"
          items={[
            { icon: X, title: "No certification", body: "Zoiko does not certify safety, authenticity, quality or legal title." },
            { icon: FileCheck, title: "Supporting records", body: "Evidence supports decisions — it isn’t independent proof by itself." },
            {
              icon: Scale,
              title: "Separate obligations",
              body: "Safety, legality and compliance remain the accountable parties’ duties.",
            },
            { icon: BadgeCheck, title: "Verification ≠ guarantee", body: "Verification confirms identity and eligibility, nothing more." },
          ]}
        />
      </div>
    </Section>
  );
}
